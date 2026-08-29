/**
 * Theme contrast audit.
 *
 * Drives headless Chrome over every route in both themes and checks the
 * computed colour of every rendered text node against the background actually
 * painted behind it, plus the visibility of borders and rings. It catches
 * exactly the failure this project cares about: content that reads fine in one
 * theme and goes invisible in the other.
 *
 *   node scripts/theme_audit.mjs [origin]
 */
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORIGIN = process.argv[2] || "http://localhost:3111";
const ROUTES = [
  "/",
  "/solutions",
  "/solutions/hrms",
  "/solutions/payroll",
  "/solutions/employee-management",
  "/solutions/attendance",
  "/solutions/leave-management",
  "/solutions/ess",
  "/solutions/onboarding",
  "/solutions/hr-analytics",
  "/industries",
  "/industries/startups",
  "/industries/small-business",
  "/industries/smes",
  "/industries/manufacturing",
  "/industries/it-services",
  "/industries/professional-services",
  "/resources",
  "/resources/white-papers",
  "/resources/media",
  "/resources/calculator",
  "/resources/faqs",
  "/company/about",
  "/company/careers",
  "/company/press-kit",
  "/company/contact",
  "/vendor",
  "/policy",
  "/policy/privacy",
  "/policy/terms",
  "/policy/security",
  "/policy/cookies",
  "/policy/workplace-policies",
  "/pricing",
  "/how-it-works",
  "/does-not-exist",
];

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];
const BIN = CANDIDATES.find((p) => existsSync(p));
if (!BIN) throw new Error("No Chrome/Edge binary found");

const profile = mkdtempSync(join(tmpdir(), "theme-audit-"));
const chrome = spawn(BIN, [
  "--headless=new",
  "--remote-debugging-port=9333",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--hide-scrollbars",
  "--window-size=1440,1200",
  "--user-data-dir=" + profile,
  "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function endpoint() {
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch("http://127.0.0.1:9333/json/version");
      return (await r.json()).webSocketDebuggerUrl;
    } catch {
      await sleep(250);
    }
  }
  throw new Error("Chrome did not start");
}

/** Minimal CDP client over Node's built-in WebSocket. */
function cdp(ws) {
  let id = 0;
  const pending = new Map();
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      if (m.error) reject(new Error(m.error.message));
      else resolve(m.result);
    }
  });
  return (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const msg = { id: ++id, method, params };
      if (sessionId) msg.sessionId = sessionId;
      pending.set(msg.id, { resolve, reject });
      ws.send(JSON.stringify(msg));
    });
}

/* ---- the in-page audit -------------------------------------------------- */
const AUDIT = `(() => {
  const parse = (c) => {
    const m = /rgba?\\(([^)]+)\\)/.exec(c || "");
    if (!m) return null;
    const p = m[1].split(/[,\\s\\/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const lum = (c) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const ratio = (a, b) => {
    const x = lum(a), y = lum(b);
    const hi = Math.max(x, y), lo = Math.min(x, y);
    return (hi + 0.05) / (lo + 0.05);
  };
  const hex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

  /* Composite the background actually painted behind an element. */
  /*
   * Text is very often painted over a photo or gradient held in an *earlier
   * sibling* layer (the hero overlay pattern). The colour behind it is then
   * not statically knowable, so flag the chain as unknown rather than
   * reporting the card colour that happens to sit further up.
   */
  const coveredBySibling = (node) => {
    let p = node.previousElementSibling;
    while (p) {
      const ps = getComputedStyle(p);
      const absolute = ps.position === "absolute" || ps.position === "fixed";
      const paints = (ps.backgroundImage && ps.backgroundImage !== "none") ||
        p.tagName === "IMG" || p.querySelector("img, video, canvas");
      if (absolute && paints) return true;
      p = p.previousElementSibling;
    }
    return false;
  };

  const bgOf = (el) => {
    const stack = [];
    let n = el, unknown = false;
    while (n && n.nodeType === 1) {
      const s = getComputedStyle(n);
      const c = parse(s.backgroundColor);
      const hasImg = s.backgroundImage && s.backgroundImage !== "none";
      if (coveredBySibling(n)) { unknown = true; break; }
      if (c && c.a > 0) stack.push(c);
      if (hasImg) { unknown = true; break; }
      if (c && c.a >= 0.999) break;
      n = n.parentElement;
    }
    let acc = parse(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 };
    if (acc.a < 1) acc = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = stack.length - 1; i >= 0; i--) acc = over(stack[i], acc);
    return { color: acc, unknown };
  };

  const clsOf = (el) => {
    const c = el.className;
    const s = (c && c.baseVal !== undefined ? c.baseVal : c) || "";
    return String(s).slice(0, 120);
  };

  const out = { text: [], border: [] };
  const seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let t;
  while ((t = walker.nextNode())) {
    const s = t.nodeValue.trim();
    if (!s) continue;
    const el = t.parentElement;
    if (!el || seen.has(el)) continue;
    seen.add(el);
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    if (parseFloat(cs.opacity) < 0.05) continue;
    if (el.closest("[aria-hidden='true'], .sr-only")) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;

    const fg = parse(cs.color);
    if (!fg || fg.a === 0) continue;
    const bgi = bgOf(el);
    if (bgi.unknown) continue;
    const eff = over(fg, bgi.color);
    const cr = ratio(eff, bgi.color);
    const px = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = px >= 24 || (px >= 18.66 && bold);
    const need = large ? 3 : 4.5;
    if (cr < need) {
      out.text.push({
        ratio: +cr.toFixed(2), need, fg: hex(eff), bg: hex(bgi.color),
        px: +px.toFixed(1), cls: clsOf(el), tag: el.tagName.toLowerCase(), text: s.slice(0, 46),
      });
    }
  }

  /* Borders and rings must stay perceivable against their own ground. */
  for (const el of document.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    if (r.width < 12 || r.height < 12) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.05) continue;
    if (el.closest("[aria-hidden='true']")) continue;
    const cands = [];
    const bw = ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"];
    const bc = ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"];
    for (let i = 0; i < 4; i++) {
      if (parseFloat(cs[bw[i]]) > 0 && cs.borderTopStyle !== "none") { cands.push(["border", cs[bc[i]]]); break; }
    }
    // Tailwind rings render as a spread-only shadow, but it always emits a
    // zero-width ring-offset layer first — count only layers with real spread.
    const re = /(rgba?\([^)]*\))\s+0px\s+0px\s+0px\s+([\d.]+)px/g;
    let mm;
    while ((mm = re.exec(cs.boxShadow || ""))) {
      if (parseFloat(mm[2]) > 0.4) { cands.push(["ring", mm[1]]); break; }
    }

    for (const [kind, raw] of cands) {
      const c = parse(raw);
      if (!c || c.a === 0) continue;
      const bgi = bgOf(el.parentElement || el);
      if (bgi.unknown) continue;
      const eff = over(c, bgi.color);
      const cr = ratio(eff, bgi.color);
      if (cr < 1.12) {
        out.border.push({ kind, ratio: +cr.toFixed(3), c: hex(eff), bg: hex(bgi.color), cls: clsOf(el), tag: el.tagName.toLowerCase() });
      }
    }
  }
  return out;
})()`;

/* ---- driver -------------------------------------------------------------- */
const wsUrl = await endpoint();
const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener("open", r));
const send = cdp(ws);

const { targetId } = await send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
await send("Page.enable", {}, sessionId);
await send("Runtime.enable", {}, sessionId);

let findings = 0;
const report = [];

for (const theme of ["light", "dark"]) {
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: theme }],
  }, sessionId);

  for (const route of ROUTES) {
    await send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-color-scheme", value: theme }],
    }, sessionId);
    await send("Page.navigate", { url: ORIGIN + route }, sessionId);
    // Poll until the document is complete, webfonts are in, and the stylesheet
    // has actually applied — a fixed sleep races the second (warm) pass and
    // audits an unstyled page.
    for (let i = 0; i < 80; i++) {
      const r = await send("Runtime.evaluate", {
        expression: `(() => {
          if (document.readyState !== "complete") return false;
          const nav = document.querySelector("header");
          if (!nav) return false;
          // The stylesheet has applied once the shell has its real max-width.
          const shell = document.querySelector(".shell");
          return !!shell && getComputedStyle(shell).maxWidth === "1240px";
        })()`,
        returnByValue: true,
      }, sessionId).catch(() => null);
      if (r && r.result && r.result.value === true) break;
      await sleep(150);
    }
    await sleep(400);
    // Force scroll-reveal content open so below-the-fold copy is audited too.
    await send("Runtime.evaluate", {
      expression: `document.querySelectorAll('[data-shown]').forEach(e=>e.setAttribute('data-shown','true'));
        document.querySelectorAll('.reveal,.word').forEach(e=>{e.style.opacity=1;e.style.transform='none'});`,
    }, sessionId);
    await sleep(120);

    const applied = await send("Runtime.evaluate", {
      expression: `document.documentElement.classList.contains('dark') ? 'dark' : 'light'`,
      returnByValue: true,
    }, sessionId);
    if (applied.result.value !== theme) {
      console.log(`  !! ${route} [${theme}] resolved to "${applied.result.value}"`);
      findings++;
    }

    const res = await send("Runtime.evaluate", { expression: AUDIT, returnByValue: true }, sessionId);
    if (res.exceptionDetails) {
      console.log(`  !! ${route} [${theme}] audit threw: ${res.exceptionDetails.text} ${res.exceptionDetails.exception?.description || ""}`);
      continue;
    }
    const { text, border } = res.result.value;
    if (text.length || border.length) {
      findings += text.length + border.length;
      report.push({ route, theme, text, border });
    }
  }
  process.stdout.write(`scanned ${ROUTES.length} routes in ${theme}\n`);
}

console.log("\n================ THEME AUDIT ================");
if (!report.length) console.log("No contrast failures in either theme.");

/* Roll findings up by signature — one line per distinct problem, not per node. */
const roll = new Map();
for (const r of report) {
  for (const f of r.text) {
    const k = `T|${r.theme}|${f.cls}|${f.fg}|${f.bg}`;
    if (!roll.has(k)) roll.set(k, { ...f, kind: "TEXT", theme: r.theme, routes: new Set(), n: 0 });
    roll.get(k).routes.add(r.route); roll.get(k).n++;
  }
  for (const f of r.border) {
    const k = `B|${r.theme}|${f.cls}|${f.c}|${f.bg}`;
    if (!roll.has(k)) roll.set(k, { ...f, kind: f.kind.toUpperCase(), theme: r.theme, routes: new Set(), n: 0 });
    roll.get(k).routes.add(r.route); roll.get(k).n++;
  }
}
for (const f of [...roll.values()].sort((a, b) => a.ratio - b.ratio)) {
  const where = [...f.routes].slice(0, 4).join(" ") + (f.routes.size > 4 ? ` +${f.routes.size - 4}` : "");
  if (f.kind === "TEXT") {
    console.log(`[${f.theme}] TEXT ${f.ratio}:1 (need ${f.need})  ${f.fg} on ${f.bg}  ${f.px}px <${f.tag}> x${f.n}`);
    console.log(`         "${f.text}"  ${where}`);
  } else {
    console.log(`[${f.theme}] ${f.kind} ${f.ratio}:1  ${f.c} on ${f.bg} <${f.tag}> x${f.n}   ${where}`);
  }
  console.log(`         ${f.cls}`);
}
console.log(`\ndistinct issues: ${roll.size}   total nodes: ${findings}`);

ws.close();
chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);

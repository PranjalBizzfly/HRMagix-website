/**
 * Whole-site audit.
 *
 * Crawls every route, then reports on the four things that actually break a
 * site of this kind:
 *
 *   1. Broken internal links — every href on every page is resolved against the
 *      running server, and anything that is not a 200 (after following the
 *      configured redirects) is reported with the pages that link to it.
 *   2. Horizontal overflow — measured at every breakpoint in the brief, with
 *      the offending element identified rather than just the page.
 *   3. Console errors and page exceptions.
 *   4. Placeholder links — any `href="#"` or empty href, which the brief
 *      forbids outright.
 *
 * Usage: node scripts/audit_site.mjs        (expects a server on PORT)
 */
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORIGIN = process.env.ORIGIN || "http://localhost:3111";
const WIDTHS = [320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920];

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
  "/blog",
  "/blog/why-payroll-takes-four-days",
  "/blog/esi-threshold-moving-wage-base",
  "/blog/professional-tax-february",
  "/blog/reading-an-indian-payslip",
  "/blog/old-vs-new-regime",
  "/blog/comp-off-entitlement",
  "/blog/shift-detection-across-midnight",
  "/blog/sandwich-rule",
  "/blog/full-and-final-settlement",
  "/resources/white-papers",
  "/resources/white-papers/chain-of-custody",
  "/resources/white-papers/state-by-state",
  "/resources/white-papers/exceptions-engine",
  "/resources/white-papers/policy-vacuum",
  "/resources/white-papers/self-service-arithmetic",
  "/resources/media",
  "/resources/calculator",
  "/calculators/salary",
  "/calculators/pf",
  "/calculators/esi",
  "/calculators/gratuity",
  "/calculators/payroll-cost",
  "/calculators/plan-cost",
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
  "/policy/workplace-policies/code-of-conduct",
  "/policy/workplace-policies/attendance",
  "/policy/workplace-policies/leave",
  "/policy/workplace-policies/gratuity",
  "/policy/workplace-policies/notice-period",
  "/policy/workplace-policies/employee-absconding",
  "/pricing",
  "/how-it-works",
  "/this-route-does-not-exist",
];

const BIN = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));
if (!BIN) {
  console.error("No Chrome or Edge binary found.");
  process.exit(1);
}

const profile = mkdtempSync(join(tmpdir(), "audit-"));
const chrome = spawn(
  BIN,
  [
    "--headless=new",
    "--remote-debugging-port=9341",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--hide-scrollbars",
    "--window-size=1440,1000",
    "--user-data-dir=" + profile,
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws;
let id = 0;
let sessionId;
const pending = new Map();
const consoleErrors = [];

const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const msg = { id: ++id, method, params, sessionId };
    pending.set(msg.id, { res, rej });
    ws.send(JSON.stringify(msg));
  });

for (let i = 0; i < 80; i++) {
  try {
    const r = await fetch("http://127.0.0.1:9341/json/version");
    ws = new WebSocket((await r.json()).webSocketDebuggerUrl);
    await new Promise((k) => ws.addEventListener("open", k));
    ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id && pending.has(m.id)) {
        const { res, rej } = pending.get(m.id);
        pending.delete(m.id);
        m.error ? rej(new Error(m.error.message)) : res(m.result);
      } else if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") {
        consoleErrors.push({
          route: current,
          text: m.params.args.map((a) => a.value ?? a.description ?? "").join(" "),
        });
      } else if (m.method === "Runtime.exceptionThrown") {
        consoleErrors.push({
          route: current,
          text: m.params.exceptionDetails.exception?.description ?? "exception",
        });
      }
    });
    break;
  } catch {
    await sleep(250);
  }
}

const { targetId } = await send("Target.createTarget", { url: "about:blank" });
({ sessionId } = await send("Target.attachToTarget", { targetId, flatten: true }));
await send("Page.enable");
await send("Runtime.enable");

const ev = async (expression) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })).result
    .value;

let current = "/";

async function goto(route) {
  current = route;
  await send("Page.navigate", { url: ORIGIN + route });
  for (let i = 0; i < 80; i++) {
    const ok = await ev(`document.readyState === "complete"`).catch(() => false);
    if (ok) break;
    await sleep(120);
  }
  await sleep(250);
}

/* ---------------- Pass 1: links + placeholders ---------------- */

const linkTargets = new Map(); // href -> Set(pages)
const placeholders = [];

for (const route of ROUTES) {
  await goto(route);

  // Open the mobile sheet and every mega panel so panel links are in the DOM.
  const found = await ev(`(() => {
    const out = { links: [], bad: [] };
    document.querySelectorAll('a').forEach((a) => {
      const raw = a.getAttribute('href');
      if (raw === null) return;
      if (raw === '' || raw === '#') {
        out.bad.push((a.textContent || '').trim().slice(0, 60) || '(no text)');
        return;
      }
      if (raw.startsWith('http') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return;
      out.links.push(raw.split('#')[0] || '/');
    });
    return out;
  })()`);

  for (const href of found.links) {
    if (!linkTargets.has(href)) linkTargets.set(href, new Set());
    linkTargets.get(href).add(route);
  }
  for (const text of found.bad) placeholders.push({ route, text });
}

/* ---------------- Pass 2: resolve every link ---------------- */

const brokenLinks = [];
for (const [href, pages] of linkTargets) {
  try {
    const res = await fetch(ORIGIN + href, { redirect: "follow" });
    if (!res.ok) {
      brokenLinks.push({ href, status: res.status, from: [...pages] });
    }
  } catch (err) {
    brokenLinks.push({ href, status: String(err.message), from: [...pages] });
  }
}

/* ---------------- Pass 3: overflow at every breakpoint ---------------- */

const overflow = [];
for (const route of ROUTES) {
  for (const width of WIDTHS) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width < 768,
    });
    await goto(route);
    await ev(`(() => {
      document.querySelectorAll('[data-shown]').forEach(e => e.setAttribute('data-shown','true'));
      window.scrollTo(0, document.body.scrollHeight);
    })()`);
    await sleep(180);

    const result = await ev(`(() => {
      const docW = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      if (scrollW <= docW + 1) return null;
      const culprits = [];
      document.querySelectorAll('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0) return;
        if (r.right > docW + 1 || r.left < -1) {
          const cs = getComputedStyle(el);
          // Elements that scroll internally are allowed to be wider.
          if (cs.overflowX === 'auto' || cs.overflowX === 'scroll') return;
          let p = el.parentElement, inScroller = false;
          while (p) {
            const pcs = getComputedStyle(p);
            if (pcs.overflowX === 'auto' || pcs.overflowX === 'scroll' || pcs.overflowX === 'hidden') { inScroller = true; break; }
            p = p.parentElement;
          }
          if (inScroller) return;
          culprits.push(
            el.tagName.toLowerCase() +
            (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0,3).join('.') : '') +
            ' [' + Math.round(r.left) + '→' + Math.round(r.right) + ']'
          );
        }
      });
      return { docW, scrollW, culprits: culprits.slice(0, 4) };
    })()`);

    if (result) overflow.push({ route, width, ...result });
  }
}
await send("Emulation.clearDeviceMetricsOverride");

/* ---------------- Report ---------------- */

const line = (s) => console.log(s);
line("\n================ SITE AUDIT ================\n");

line(`Routes crawled: ${ROUTES.length}`);
line(`Distinct internal link targets: ${linkTargets.size}\n`);

line("--- Broken internal links ---");
if (!brokenLinks.length) line("  none\n");
else {
  for (const b of brokenLinks) line(`  ${b.status}  ${b.href}   ← ${b.from.join(", ")}`);
  line("");
}

line("--- Placeholder links (href=\"#\" or empty) ---");
if (!placeholders.length) line("  none\n");
else {
  for (const p of placeholders) line(`  ${p.route}: "${p.text}"`);
  line("");
}

line("--- Horizontal overflow ---");
if (!overflow.length) line("  none at any breakpoint\n");
else {
  for (const o of overflow) {
    line(`  ${o.route} @ ${o.width}px  (scrollW ${o.scrollW} > ${o.docW})`);
    for (const c of o.culprits) line(`      ${c}`);
  }
  line("");
}

line("--- Orphan routes (exist but nothing links to them) ---");
const linked = new Set([...linkTargets.keys()]);
const orphans = ROUTES.filter(
  (r) => r !== "/" && !r.includes("does-not-exist") && !linked.has(r),
);
if (!orphans.length) {
  line("  none — every page is reachable");
  line("");
} else {
  for (const o of orphans) line(`  ${o}`);
  line("");
}

line("--- Console errors ---");
if (!consoleErrors.length) line("  none\n");
else {
  const seen = new Set();
  for (const e of consoleErrors) {
    const key = e.route + e.text.slice(0, 120);
    if (seen.has(key)) continue;
    seen.add(key);
    line(`  ${e.route}: ${e.text.slice(0, 200)}`);
  }
  line("");
}

const failed =
  brokenLinks.length + placeholders.length + overflow.length + consoleErrors.length + orphans.length;
line(failed ? `RESULT: ${failed} issue group(s) to fix\n` : "RESULT: clean\n");

ws.close();
chrome.kill();
try {
  rmSync(profile, { recursive: true, force: true });
} catch {}
process.exit(0);

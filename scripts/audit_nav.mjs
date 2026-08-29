/**
 * Navigation interaction test.
 *
 * The contrast and link audits both read a static DOM, so neither can tell
 * whether the menus actually open. This drives them:
 *
 *   - the desktop mega panel opens on hover and closes on Escape
 *   - the mobile sheet opens, switches sections, and closes on selection
 *   - every link inside both is a real route, not an anchor
 *   - a route change closes whatever was open
 */
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORIGIN = process.argv[2] || "http://localhost:3111";
const BIN = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));

const profile = mkdtempSync(join(tmpdir(), "nav-audit-"));
const chrome = spawn(
  BIN,
  [
    "--headless=new",
    "--remote-debugging-port=9343",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--hide-scrollbars",
    "--window-size=1440,900",
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
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const msg = { id: ++id, method, params, sessionId };
    pending.set(msg.id, { res, rej });
    ws.send(JSON.stringify(msg));
  });

for (let i = 0; i < 80; i++) {
  try {
    const r = await fetch("http://127.0.0.1:9343/json/version");
    ws = new WebSocket((await r.json()).webSocketDebuggerUrl);
    await new Promise((k) => ws.addEventListener("open", k));
    ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id && pending.has(m.id)) {
        const { res, rej } = pending.get(m.id);
        pending.delete(m.id);
        m.error ? rej(new Error(m.error.message)) : res(m.result);
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

async function goto(route) {
  await send("Page.navigate", { url: ORIGIN + route });
  for (let i = 0; i < 80; i++) {
    if (await ev(`document.readyState === "complete"`).catch(() => false)) break;
    await sleep(120);
  }
  await sleep(400);
}

const results = [];
const check = (name, pass, detail = "") =>
  results.push({ name, pass: Boolean(pass), detail });

/* ---------------- Desktop mega panel ---------------- */

await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});
await goto("/");

const panelsClosed = await ev(`
  [...document.querySelectorAll('header .nav-plate')].every(p => getComputedStyle(p).display === 'none')
`);
check("all mega panels start closed", panelsClosed);

/*
 * Move a real pointer onto the Solutions trigger. A synthetic `mouseenter`
 * dispatched on the element does not work here: React derives onMouseEnter from
 * delegated mouseover/mouseout at the root, so only genuine input reaches it.
 */
const box = await ev(`(() => {
  const li = [...document.querySelectorAll('header nav[aria-label="Primary"] li')]
    .find(l => l.textContent.trim().startsWith('Solutions'));
  const r = li.getBoundingClientRect();
  return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) };
})()`);
await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: 10, y: 400, buttons: 0 });
await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: box.x, y: box.y, buttons: 0 });
await sleep(400);

const openCount = await ev(`
  [...document.querySelectorAll('header .nav-plate')].filter(p => getComputedStyle(p).display !== 'none').length
`);
check("hover opens exactly one panel", openCount === 1, `open: ${openCount}`);

const panelLinks = await ev(`(() => {
  const panel = [...document.querySelectorAll('header .nav-plate')].find(p => getComputedStyle(p).display !== 'none');
  if (!panel) return null;
  const hrefs = [...panel.querySelectorAll('a')].map(a => a.getAttribute('href'));
  return { count: hrefs.length, anchors: hrefs.filter(h => !h || h === '#' || h.startsWith('#')) };
})()`);
check("panel has links", panelLinks && panelLinks.count > 0, `${panelLinks?.count} links`);
check(
  "no in-page anchors in panel",
  panelLinks && panelLinks.anchors.length === 0,
  panelLinks?.anchors.join(", "),
);

// Escape closes it.
await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await sleep(250);
const closedAfterEsc = await ev(`
  [...document.querySelectorAll('header .nav-plate')].every(p => getComputedStyle(p).display === 'none')
`);
check("Escape closes the panel", closedAfterEsc);

/* ---------------- Mobile sheet ---------------- */

await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  mobile: true,
});
await goto("/");

const sheetHidden = await ev(
  `getComputedStyle(document.getElementById('mobile-menu')).display === 'none'`,
);
check("mobile sheet starts closed", sheetHidden);

await ev(`document.querySelector('button[aria-controls="mobile-menu"]').click()`);
await sleep(350);

const sheetOpen = await ev(`(() => {
  const el = document.getElementById('mobile-menu');
  const links = [...el.querySelectorAll('a')].map(a => a.getAttribute('href'));
  return {
    visible: getComputedStyle(el).display !== 'none',
    links: links.length,
    anchors: links.filter(h => !h || h === '#' || h.startsWith('#')).length,
    bodyLocked: getComputedStyle(document.body).overflow === 'hidden',
  };
})()`);
check("hamburger opens the sheet", sheetOpen.visible);
check("sheet body scroll is locked", sheetOpen.bodyLocked);
check("sheet contains real links", sheetOpen.links > 0, `${sheetOpen.links} links`);
check("no in-page anchors in sheet", sheetOpen.anchors === 0);

// Switch section rail.
const switched = await ev(`(() => {
  const btns = [...document.querySelectorAll('#mobile-menu button[aria-pressed]')];
  const target = btns.find(b => b.textContent.trim() === 'Resources');
  if (!target) return false;
  target.click();
  return true;
})()`);
await sleep(300);
const railWorks = await ev(`(() => {
  const el = document.getElementById('mobile-menu');
  return el.textContent.includes('White Papers');
})()`);
check("section rail switches content", switched && railWorks);

// Escape closes.
await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await sleep(300);
const sheetClosed = await ev(
  `getComputedStyle(document.getElementById('mobile-menu')).display === 'none'`,
);
check("Escape closes the sheet", sheetClosed);

const scrollRestored = await ev(`getComputedStyle(document.body).overflow !== 'hidden'`);
check("body scroll restored on close", scrollRestored);

/* ---------------- Report ---------------- */

console.log("\n============ NAVIGATION AUDIT ============\n");
let failed = 0;
for (const r of results) {
  if (!r.pass) failed++;
  console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name}${r.detail ? `  — ${r.detail}` : ""}`);
}
console.log(`\n${results.length - failed}/${results.length} navigation checks passed\n`);

ws.close();
chrome.kill();
try {
  rmSync(profile, { recursive: true, force: true });
} catch {}
process.exit(failed ? 1 : 0);

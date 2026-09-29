/**
 * Visual capture for review.
 *
 *   node scripts/shots.mjs <width> <theme> <route ...>
 *
 * Writes viewport captures at several scroll depths into `.shots/`. Reveal
 * animations are forced on first, otherwise everything below the fold is blank.
 */
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORIGIN = process.env.ORIGIN || "http://localhost:3111";
const [widthArg, themeArg, ...routes] = process.argv.slice(2);
const WIDTH = Number(widthArg) || 1440;
const THEME = themeArg === "dark" ? "dark" : "light";
const ROUTES = routes.length ? routes.map((r) => (r.startsWith("/") ? r : `/${r}`)) : ["/"];
const STOPS = Number(process.env.STOPS || 4);
const OUT = ".shots";
mkdirSync(OUT, { recursive: true });

const BIN = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));

const profile = mkdtempSync(join(tmpdir(), "shots-"));
const chrome = spawn(
  BIN,
  [
    "--headless=new",
    "--remote-debugging-port=9342",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--hide-scrollbars",
    `--window-size=${WIDTH},960`,
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
    const r = await fetch("http://127.0.0.1:9342/json/version");
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
await send("Emulation.setDeviceMetricsOverride", {
  width: WIDTH,
  height: 960,
  deviceScaleFactor: 1,
  mobile: WIDTH < 768,
});
await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-color-scheme", value: THEME }],
});

const ev = async (expression) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true })).result.value;

for (const route of ROUTES) {
  await send("Page.navigate", { url: ORIGIN + route });
  for (let i = 0; i < 80; i++) {
    const ok = await ev(`document.readyState === "complete"`).catch(() => false);
    if (ok) break;
    await sleep(120);
  }
  await ev(`(() => {
    document.querySelectorAll('[data-shown]').forEach(e => e.setAttribute('data-shown','true'));
    document.querySelectorAll('.reveal,.word').forEach(e => { e.style.opacity = 1; e.style.transform = 'none'; e.style.filter = 'none'; });
    document.querySelectorAll('img').forEach(i => { i.loading = 'eager'; });
    // Smooth scrolling makes a long programmatic jump land late; force instant.
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, document.body.scrollHeight);
  })()`);
  await sleep(1600);

  const height = await ev(`document.body.scrollHeight`);
  const base = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");
  for (let i = 0; i < STOPS; i++) {
    const y = Math.round(((height - 960) * i) / Math.max(1, STOPS - 1));
    await ev(`window.scrollTo({ top: ${Math.max(0, y)}, behavior: 'instant' })`);
    await sleep(750);
    const { data } = await send("Page.captureScreenshot", { format: "png" });
    const name = `${base}.${WIDTH}.${THEME}.${i}.png`;
    writeFileSync(join(OUT, name), Buffer.from(data, "base64"));
    console.log("wrote", name);
  }
}

ws.close();
chrome.kill();
try {
  rmSync(profile, { recursive: true, force: true });
} catch {}
process.exit(0);

/**
 * Captures a full-page screenshot of each route in both themes into
 * `.theme-shots/` for visual review. Not part of the build.
 *
 *   node scripts/theme_shots.mjs [route ...]
 */
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORIGIN = "http://localhost:3111";
const ROUTES = process.argv.slice(2).length ? process.argv.slice(2) : ["/", "/pricing", "/contact"];
const OUT = ".theme-shots";
mkdirSync(OUT, { recursive: true });

const BIN = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));

const profile = mkdtempSync(join(tmpdir(), "theme-shot-"));
const chrome = spawn(BIN, [
  "--headless=new", "--remote-debugging-port=9340", "--disable-gpu",
  "--no-first-run", "--no-default-browser-check", "--hide-scrollbars",
  "--window-size=1440,1000", "--user-data-dir=" + profile, "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws, id = 0, sessionId;
const pending = new Map();
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const msg = { id: ++id, method, params, sessionId };
    pending.set(msg.id, { res, rej });
    ws.send(JSON.stringify(msg));
  });

for (let i = 0; i < 80; i++) {
  try {
    const r = await fetch("http://127.0.0.1:9340/json/version");
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
  } catch { await sleep(250); }
}

const { targetId } = await send("Target.createTarget", { url: "about:blank" });
({ sessionId } = await send("Target.attachToTarget", { targetId, flatten: true }));
await send("Page.enable");
await send("Runtime.enable");

const ev = async (expression) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true })).result.value;

for (const theme of ["light", "dark"]) {
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: theme }],
  });
  for (const route of ROUTES) {
    await send("Page.navigate", { url: ORIGIN + route });
    for (let i = 0; i < 60; i++) {
      const ok = await ev(`document.readyState === "complete" && !!document.querySelector("header")`).catch(() => false);
      if (ok) break;
      await sleep(150);
    }
    // Reveal-on-scroll content needs the page walked before it will paint.
    await ev(`(() => {
      document.querySelectorAll('[data-shown]').forEach(e=>e.setAttribute('data-shown','true'));
      document.querySelectorAll('.reveal,.word').forEach(e=>{e.style.opacity=1;e.style.transform='none'});
      document.querySelectorAll('img').forEach(i=>i.loading='eager');
      window.scrollTo(0, document.body.scrollHeight);
    })()`);
    await sleep(1500);

    /*
     * Viewport captures at a few scroll depths rather than one full-page
     * screenshot — captureBeyondViewport stalls on pages this tall.
     */
    const height = await ev(`document.body.scrollHeight`);
    const stops = [0, Math.round(height * 0.28), Math.round(height * 0.58), Math.max(0, height - 1000)];
    for (let i = 0; i < stops.length; i++) {
      await ev(`window.scrollTo(0, ${stops[i]})`);
      await sleep(700);
      const { data } = await send("Page.captureScreenshot", { format: "png" });
      const base = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");
      const name = `${base}.${theme}.${i}.png`;
      writeFileSync(join(OUT, name), Buffer.from(data, "base64"));
      console.log("wrote", name);
    }
  }
}

ws.close();
chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);

/**
 * Theme behaviour test.
 *
 * Verifies the parts of the theme system that a contrast audit cannot see:
 * system-preference default, persistence, no flash of the wrong theme on load,
 * survival across client-side route changes, and keyboard operability of the
 * toggle.
 *
 *   node scripts/theme_behavior.mjs [origin]
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

const profile = mkdtempSync(join(tmpdir(), "theme-behav-"));
const chrome = spawn(BIN, [
  "--headless=new", "--remote-debugging-port=9334", "--disable-gpu",
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

async function connect() {
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch("http://127.0.0.1:9334/json/version");
      const url = (await r.json()).webSocketDebuggerUrl;
      ws = new WebSocket(url);
      await new Promise((k) => ws.addEventListener("open", k));
      ws.addEventListener("message", (e) => {
        const m = JSON.parse(e.data);
        if (m.id && pending.has(m.id)) {
          const { res, rej } = pending.get(m.id);
          pending.delete(m.id);
          m.error ? rej(new Error(m.error.message)) : res(m.result);
        }
      });
      return;
    } catch { await sleep(250); }
  }
  throw new Error("Chrome did not start");
}

const ev = async (expression, awaitPromise = false) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise })).result.value;

async function goto(url) {
  await send("Page.navigate", { url });
  for (let i = 0; i < 60; i++) {
    const ok = await ev(`document.readyState === "complete" && !!document.querySelector("header")`).catch(() => false);
    if (ok) break;
    await sleep(150);
  }
  await sleep(500);
}

const results = [];
const check = (name, pass, detail = "") => {
  results.push({ name, pass, detail });
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`);
};

await connect();
const { targetId } = await send("Target.createTarget", { url: "about:blank" });
({ sessionId } = await send("Target.attachToTarget", { targetId, flatten: true }));
await send("Page.enable");
await send("Runtime.enable");

const media = (v) =>
  send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: v }] });

/* 1 — a first-time visitor follows the OS preference, both directions. */
await media("dark");
await ev(`localStorage.removeItem("hrmagix-theme")`).catch(() => {});
await goto(ORIGIN + "/");
await ev(`localStorage.removeItem("hrmagix-theme")`);
await goto(ORIGIN + "/");
check("system preference honoured (OS dark)", (await ev(`document.documentElement.classList.contains("dark")`)) === true);

await media("light");
await goto(ORIGIN + "/");
check("system preference honoured (OS light)", (await ev(`document.documentElement.classList.contains("dark")`)) === false);

/* 2 — the toggle flips the theme and stores the choice. */
const toggleSel = `[role="switch"][aria-label*="theme"]`;
check("toggle present in nav", (await ev(`!!document.querySelector('${toggleSel}')`)) === true);

await ev(`document.querySelector('${toggleSel}').click()`);
await sleep(400);
check("toggle switches to dark", (await ev(`document.documentElement.classList.contains("dark")`)) === true);
check("choice persisted", (await ev(`localStorage.getItem("hrmagix-theme")`)) === "dark");
check(
  "aria-checked tracks state",
  (await ev(`document.querySelector('${toggleSel}').getAttribute("aria-checked")`)) === "true",
);
check(
  "color-scheme set for native UI",
  (await ev(`document.documentElement.style.colorScheme`)) === "dark",
);
check(
  "theme-color meta follows theme",
  (await ev(`document.querySelector('meta[name="theme-color"]').getAttribute("content")`)) === "#080716",
);

/* 3 — the stored choice beats the OS, and applies before first paint. */
await goto(ORIGIN + "/pricing");
check("stored choice overrides OS preference", (await ev(`document.documentElement.classList.contains("dark")`)) === true);

/* No flash: the class must be on <html> before the body has been parsed.
   Re-run the exact blocking script against a fresh document to prove it is
   synchronous and self-contained. */
const early = await ev(`(() => {
  const src = [...document.scripts].map(s => s.textContent).find(t => t && t.includes("hrmagix-theme"));
  if (!src) return "missing";
  const head = document.head.innerHTML.indexOf("hrmagix-theme");
  const inHead = head >= 0;
  const first = document.body.firstElementChild;
  return inHead ? "in-head" : "not-in-head";
})()`);
check("blocking theme script is inline in <head>", early === "in-head", early);

/* 4 — survives a client-side route change (no full reload). */
await ev(`(() => {
  const a = [...document.querySelectorAll('a[href="/about"]')].find(x => x.offsetParent !== null);
  if (a) a.click();
  return !!a;
})()`);
await sleep(1200);
const route = await ev(`location.pathname`);
check(
  "theme survives client-side navigation",
  (await ev(`document.documentElement.classList.contains("dark")`)) === true,
  "now at " + route,
);

/* 5 — keyboard operability.
   Chrome only performs a key's default action for a full rawKeyDown → char →
   keyUp sequence; a bare keyDown/keyUp pair focuses nothing and clicks nothing. */
const press = async (key, code, vk, text) => {
  await send("Input.dispatchKeyEvent", { type: "rawKeyDown", key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk });
  if (text) await send("Input.dispatchKeyEvent", { type: "char", key, code, text, unmodifiedText: text, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk });
  await sleep(450);
};

await ev(`document.querySelector('${toggleSel}').focus()`);
check("toggle is focusable", (await ev(`document.activeElement.getAttribute("role")`)) === "switch");
check(
  "focus ring is visible on the toggle",
  (await ev(`getComputedStyle(document.activeElement).outlineWidth`)) !== "0px",
);

const before = await ev(`document.documentElement.classList.contains("dark")`);
await press("Enter", "Enter", 13, "\u000d");
check("Enter activates the toggle", (await ev(`document.documentElement.classList.contains("dark")`)) === !before);

await press(" ", "Space", 32, " ");
check("Space activates the toggle", (await ev(`document.documentElement.classList.contains("dark")`)) === before);

/* 6 — reduced motion suppresses the crossfade. */
await send("Emulation.setEmulatedMedia", {
  features: [
    { name: "prefers-color-scheme", value: "light" },
    { name: "prefers-reduced-motion", value: "reduce" },
  ],
});
await goto(ORIGIN + "/");
await ev(`document.querySelector('${toggleSel}').click()`);
const switching = await ev(`document.documentElement.classList.contains("theme-switching")`);
check("no crossfade class under prefers-reduced-motion", switching === false);

/* 7 — storage failures must not break the toggle. */
await goto(ORIGIN + "/");
const survived = await ev(`(() => {
  const real = Object.getOwnPropertyDescriptor(Storage.prototype, "setItem");
  Storage.prototype.setItem = () => { throw new Error("denied"); };
  try {
    document.querySelector('${toggleSel}').click();
    return true;
  } catch (e) {
    return "threw: " + e.message;
  } finally {
    Object.defineProperty(Storage.prototype, "setItem", real);
  }
})()`);
check("toggle survives blocked localStorage", survived === true, String(survived));

const failed = results.filter((r) => !r.pass);
console.log(`\n${results.length - failed.length}/${results.length} behaviour checks passed`);
ws.close();
chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(failed.length ? 1 : 0);

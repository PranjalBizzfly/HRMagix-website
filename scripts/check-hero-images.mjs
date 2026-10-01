// Final check for the 200 expansion-page hero images.
//   node scripts/check-hero-images.mjs          (files + manifest only)
//   node scripts/check-hero-images.mjs --site   (also checks the built pages; run `NEXT_DIST_DIR=.next-verify npx next build` first)
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawn, execSync } from "node:child_process";
import sharp from "sharp";

sharp.cache(false);
const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "hero-manifest.json"), "utf8"));
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, "lib", "heroImages.json"), "utf8"));
const errors = [];
const ok = {};
const tick = (k) => (ok[k] = (ok[k] || 0) + 1);

// Manifest integrity
const uniq = (k) => new Set(manifest.map((e) => e[k])).size === manifest.length;
if (manifest.length !== 200) errors.push(`manifest has ${manifest.length} entries, expected 200`);
for (const k of ["url", "slot", "filename", "alt", "prompt"]) if (!uniq(k)) errors.push(`duplicate ${k} values in manifest`);

// Files
const hashes = new Map();
const dh = [];
async function dhash(buf) {
  const px = await sharp(buf).greyscale().resize(9, 8, { fit: "fill" }).raw().toBuffer();
  let s = "";
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) s += px[y * 9 + x] > px[y * 9 + x + 1] ? "1" : "0";
  return s;
}
for (const e of manifest) {
  const file = path.join(ROOT, "public", "media", e.filename);
  if (!fs.existsSync(file)) { errors.push(`missing image ${e.filename} (${e.url})`); continue; }
  tick("present");
  const buf = fs.readFileSync(file);
  const m = await sharp(buf).metadata();
  if (m.format === "webp") tick("webp"); else errors.push(`${e.filename} is ${m.format}`);
  if (m.width === 2560 && m.height === 1440) tick("2560x1440"); else errors.push(`${e.filename} is ${m.width}x${m.height}`);
  const sha = crypto.createHash("sha1").update(buf).digest("hex");
  if (hashes.has(sha)) errors.push(`identical images: ${e.filename} = ${hashes.get(sha)}`); else hashes.set(sha, e.filename);
  dh.push([e.filename, await dhash(buf)]);
  if (registry.some((r) => r.slot === e.slot && r.src === `/media/${e.filename}` && r.alt === e.alt)) tick("registered");
  else errors.push(`${e.slot} not in lib/heroImages.json with matching src/alt (run the ingest script)`);
}
for (let i = 0; i < dh.length; i++) for (let j = i + 1; j < dh.length; j++) {
  const d = [...dh[i][1]].reduce((n, c, k) => n + (c !== dh[j][1][k] ? 1 : 0), 0);
  if (d <= 8) errors.push(`near-duplicate images (distance ${d}): ${dh[i][0]} ~ ${dh[j][0]}`);
}

// Alt text quality
for (const e of manifest) {
  const words = e.alt.trim().split(/\s+/).length;
  if (words >= 8 && words <= 30 && !/^(image|photo|picture) of/i.test(e.alt)) tick("altQuality"); else errors.push(`weak alt for ${e.slot}: "${e.alt}"`);
}
const openers = new Map();
for (const e of manifest) { const k = e.alt.toLowerCase().split(/\s+/).slice(0, 6).join(" "); openers.set(k, (openers.get(k) || 0) + 1); }
for (const [k, n] of openers) if (n > 2) errors.push(`${n} alts start with the same words: "${k}"`);

// Built site
if (process.argv.includes("--site")) {
  if (/:3111 .*LISTEN/.test(execSync("netstat -ano").toString())) { console.error("port 3111 busy"); process.exit(1); }
  const srv = spawn("npx next start -p 3111", { env: { ...process.env, NEXT_DIST_DIR: ".next-verify" }, shell: true, stdio: "ignore" });
  const stop = () => { try { execSync(`taskkill /pid ${srv.pid} /T /F`, { stdio: "ignore" }); } catch {} };
  try {
    for (let i = 0; i < 60; i++) { try { await fetch("http://localhost:3111/"); break; } catch { await new Promise((r) => setTimeout(r, 1000)); } }
    const xml = await (await fetch("http://localhost:3111/sitemap.xml")).text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
    if (urls.length !== 400) errors.push(`sitemap has ${urls.length} pages, expected 400`);
    const heroSrcs = new Set(manifest.map((e) => encodeURIComponent(`/media/${e.filename}`)));
    for (const e of manifest) {
      const html = await (await fetch("http://localhost:3111" + e.url)).text();
      const img = [...html.matchAll(/<img[^>]+>/g)].map((m) => m[0]).find((t) => t.includes(encodeURIComponent(`/media/${e.filename}`)));
      if (!img) { errors.push(`hero not rendered on ${e.url}`); continue; }
      tick("rendered");
      const alt = (img.match(/alt="([^"]*)"/) || [])[1]?.replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"');
      if (alt === e.alt) tick("altRendered"); else errors.push(`alt mismatch on ${e.url}`);
      const others = [...heroSrcs].filter((s) => s !== encodeURIComponent(`/media/${e.filename}`) && html.includes(s) && html.indexOf(s) < html.indexOf("</header>"));
      if (others.length) errors.push(`${e.url} hero area shows another page's image`);
    }
    // Existing pages must not have gained a hero image.
    const newSet = new Set(manifest.map((e) => e.url));
    for (const u of urls.filter((u) => !newSet.has(u))) {
      const html = await (await fetch("http://localhost:3111" + u)).text();
      if ([...heroSrcs].some((s) => html.includes(s))) errors.push(`existing page ${u} shows an expansion hero image`);
    }
  } finally { stop(); }
}

console.log("Checks passed:", ok);
console.log(errors.length ? `PROBLEMS (${errors.length}):\n  ` + errors.join("\n  ") : "No problems found.");
process.exit(errors.length ? 1 : 0);

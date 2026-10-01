// Hero image ingest for the 200 new pages.
//
//   1. Drop generated images (PNG, JPG or WebP, any size) into incoming/hero-images/.
//      Name each file by its manifest filename (hero-calc-enps.webp), its slot
//      (calc-enps.png), or its manifest number (057.png / 057_anything.png).
//   2. Run:  node scripts/ingest-hero-images.mjs
//
// Every image is centre-cropped to 16:9 and written as a 2560x1440 WebP to
// public/media/<filename>. The page registry (lib/heroImages.json) is rebuilt
// from the files present, with the alt text from scripts/hero-manifest.json.
// The report flags missing images, upscaled or heavily cropped sources, and
// exact or near-duplicate images.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

sharp.cache(false);
const W = 2560, H = 1440;
const ROOT = process.cwd();
const INCOMING = path.join(ROOT, "incoming", "hero-images");
const MEDIA = path.join(ROOT, "public", "media");
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "hero-manifest.json"), "utf8"));

fs.mkdirSync(INCOMING, { recursive: true });
const incoming = fs.readdirSync(INCOMING).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

const base = (f) => f.replace(/\.(png|jpe?g|webp)$/i, "").toLowerCase();
const findSource = (e) => {
  const num = String(e.n).padStart(3, "0");
  const names = [base(e.filename), e.slot, `hero-${e.slot}`];
  return incoming.find((f) => {
    const b = base(f);
    return names.includes(b) || b === num || b.startsWith(num + "_") || b.startsWith(num + "-");
  });
};

// 64-bit difference hash for near-duplicate detection.
async function dhash(buf) {
  const px = await sharp(buf).greyscale().resize(9, 8, { fit: "fill" }).raw().toBuffer();
  let bits = "";
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) bits += px[y * 9 + x] > px[y * 9 + x + 1] ? "1" : "0";
  return bits;
}
const hamming = (a, b) => [...a].reduce((n, c, i) => n + (c !== b[i] ? 1 : 0), 0);

const report = { processed: [], missing: [], upscaled: [], cropped: [], exactDuplicates: [], nearDuplicates: [] };

for (const e of manifest) {
  const src = findSource(e);
  const dest = path.join(MEDIA, e.filename);
  let input;
  if (src) input = fs.readFileSync(path.join(INCOMING, src));
  else if (fs.existsSync(dest)) input = fs.readFileSync(dest); // already placed; normalise in place
  else { report.missing.push(`${String(e.n).padStart(3, "0")} ${e.filename} (${e.url})`); continue; }

  const meta = await sharp(input).metadata();
  const ratio = meta.width / meta.height;
  if (Math.abs(ratio - 16 / 9) > 0.03) report.cropped.push(`${e.filename}: source ${meta.width}x${meta.height}`);
  if (meta.width < W || meta.height < H) report.upscaled.push(`${e.filename}: source ${meta.width}x${meta.height}`);

  const already = meta.format === "webp" && meta.width === W && meta.height === H && !src;
  if (!already) {
    // Keep the untouched original of anything reprocessed in place.
    if (!src) {
      const backup = path.join(ROOT, ".media-originals", e.filename);
      if (!fs.existsSync(backup)) { fs.mkdirSync(path.dirname(backup), { recursive: true }); fs.writeFileSync(backup, input); }
    }
    let img = sharp(input).rotate().resize(W, H, { fit: "cover", position: "centre", kernel: "lanczos3" });
    if (meta.width < W) img = img.sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 });
    const out = await img.webp({ quality: 80, effort: 6, smartSubsample: true }).toBuffer();
    fs.writeFileSync(dest, out);
  }
  report.processed.push(e.filename);
}

// Registry for the pages, plus duplicate checks over everything present.
const present = manifest.filter((e) => fs.existsSync(path.join(MEDIA, e.filename)));
const hashes = [];
for (const e of present) {
  const buf = fs.readFileSync(path.join(MEDIA, e.filename));
  hashes.push({ e, sha: crypto.createHash("sha1").update(buf).digest("hex"), d: await dhash(buf) });
}
for (let i = 0; i < hashes.length; i++)
  for (let j = i + 1; j < hashes.length; j++) {
    if (hashes[i].sha === hashes[j].sha) report.exactDuplicates.push(`${hashes[i].e.filename} = ${hashes[j].e.filename}`);
    else if (hamming(hashes[i].d, hashes[j].d) <= 8) report.nearDuplicates.push(`${hashes[i].e.filename} ~ ${hashes[j].e.filename} (distance ${hamming(hashes[i].d, hashes[j].d)})`);
  }

const registry = present.map((e) => ({ slot: e.slot, src: `/media/${e.filename}`, alt: e.alt, width: W, height: H }));
fs.writeFileSync(path.join(ROOT, "lib", "heroImages.json"), JSON.stringify(registry, null, 1) + "\n");

console.log(`Images in place: ${present.length}/${manifest.length}`);
for (const [k, v] of Object.entries(report)) if (k !== "processed") console.log(`${k}: ${v.length}`), v.slice(0, 200).forEach((x) => console.log("   " + x));
console.log("\nRegistry written: lib/heroImages.json (" + registry.length + " entries). Rebuild the site to publish them.");

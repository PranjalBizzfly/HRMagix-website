/**
 * Lists every raster image in public/ with its format, pixel size and file
 * size, and flags anything that is not WebP or is below HD (1280px wide).
 *
 * Usage: node scripts/image_audit.mjs
 */
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import sharp from "sharp";

const HD = 1280;
const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk("public").filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f));
let bad = 0;
for (const f of files) {
  const m = await sharp(f).metadata();
  const flags = [];
  if (extname(f).toLowerCase() !== ".webp") flags.push("NOT-WEBP");
  if ((m.width ?? 0) < HD) flags.push("BELOW-HD");
  if (flags.length) bad++;
  console.log(
    `${f.padEnd(48)} ${String(m.width).padStart(5)}x${String(m.height).padEnd(5)} ${String(
      Math.round(statSync(f).size / 1024),
    ).padStart(5)}KB ${flags.join(" ")}`,
  );
}
console.log(`\n${files.length} images, ${bad} flagged`);

// Merges the scene batches into the final 200-page hero manifest and checks
// both batches together for duplicate or near-duplicate concepts.
//   node scripts/build-hero-manifest.cjs
const fs = require("fs");
const pages = JSON.parse(fs.readFileSync("scripts/hero-pages.json", "utf8"));
const A = JSON.parse(fs.readFileSync("scripts/hero-scenes-A.json", "utf8"));
const B = JSON.parse(fs.readFileSync("scripts/hero-scenes-B.json", "utf8"));
const existing = JSON.parse(fs.readFileSync("scripts/hero-scenes-existing.json", "utf8"));
const scenes = [...A, ...B];
const problems = [];

// 1. The correct final 200 pages, each covered exactly once.
const plan = fs.readFileSync("docs/page-expansion/new-page-plan.md", "utf8");
const planUrls = [...plan.matchAll(/^\| \d+ \| [^|]+ \| (\/[^ |]*) \|/gm)].map((m) => m[1]);
if (planUrls.length !== 200) problems.push(`plan has ${planUrls.length} pages`);
const pageUrls = new Set(pages.map((p) => p.url));
for (const u of planUrls) if (!pageUrls.has(u)) problems.push(`page missing from slot list: ${u}`);
for (const u of pageUrls) if (!planUrls.includes(u)) problems.push(`slot list has a page not in the plan: ${u}`);
const removed = ["memos", "assets", "skills", "reviews", "wellness", "speak-up", "growth-points", "announcements", "company-policies", "multi-company", "employee-dashboard"].map((s) => "/features/" + s);
for (const u of removed) if (pageUrls.has(u)) problems.push(`removed page still listed: ${u}`);
const cover = new Map();
for (const s of scenes) cover.set(s.slot, (cover.get(s.slot) || 0) + 1);
for (const e of existing) cover.set(e.slot, (cover.get(e.slot) || 0) + 1);
for (const p of pages) { const n = cover.get(p.slot) || 0; if (n !== 1) problems.push(`${p.slot} covered ${n} times`); }
for (const [slot] of cover) if (!pages.some((p) => p.slot === slot)) problems.push(`scene for unknown slot ${slot}`);
const FIELDS = ["scene", "people", "wardrobe", "setting", "camera", "lighting", "space", "alt"];
for (const s of scenes) for (const f of FIELDS) if (!s[f] || typeof s[f] !== "string") problems.push(`${s.slot} missing ${f}`);

// 2. Duplicate / near-duplicate concepts across BOTH batches.
const STOP = new Set("a an the and of in on at with to for by from his her their its is are as into over near one two three four five six seven eight nine ten man woman men women person people indian young middle aged older senior junior who while beside behind front side left right third frame shot lens light".split(" "));
const toks = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)));
const jac = (a, b) => { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); };
const LIMITS = { scene: 0.5, people: 0.6, wardrobe: 0.5, setting: 0.5, lighting: 0.6, alt: 0.5 };
const T = scenes.map((s) => Object.fromEntries(Object.keys(LIMITS).map((k) => [k, toks(s[k])])));
const near = [];
for (let i = 0; i < scenes.length; i++)
  for (let j = i + 1; j < scenes.length; j++) {
    for (const k of Object.keys(LIMITS)) {
      const v = jac(T[i][k], T[j][k]);
      if (v >= LIMITS[k]) near.push(`${k} ${v.toFixed(2)}: ${scenes[i].slot} | ${scenes[j].slot}`);
    }
    // Camera: angle + framing must not repeat as a pair.
    if (scenes[i].camera.toLowerCase().trim() === scenes[j].camera.toLowerCase().trim()) near.push(`camera identical: ${scenes[i].slot} | ${scenes[j].slot}`);
  }
// The 13 existing images: no new alt or setting may echo them.
const exTok = existing.map((e) => [e.slot, toks(e.alt)]);
for (const s of scenes) for (const [slot, t] of exTok) {
  const v = jac(toks(s.alt), t);
  if (v >= 0.4) near.push(`resembles existing image ${slot} (${v.toFixed(2)}): ${s.slot}`);
}

if (problems.length || near.length) {
  console.log(`PROBLEMS ${problems.length}`); problems.forEach((p) => console.log("  " + p));
  console.log(`NEAR-DUPLICATES ${near.length}`); near.forEach((p) => console.log("  " + p));
  process.exit(1);
}

// 3. Final prompts and manifest.
const prompt = (s) =>
  `Premium photorealistic editorial photograph, 16:9 landscape, 2560x1440. ${s.scene} ` +
  `People: ${s.people}. Wardrobe: ${s.wardrobe}. Setting: ${s.setting}. Camera: ${s.camera}. Lighting: ${s.lighting}. ` +
  `Composition: subjects kept to the ${s.space === "left" ? "right" : "left"} side; the ${s.space} third stays calm, uncluttered and slightly soft for a headline. ` +
  `Natural skin tones, realistic detail, shallow depth of field. No text, letters or numbers anywhere, no signage, no labels, no readable documents or screens (screens face away or are dark), no logos on laptops, phones or clothing, no brand names, no watermark.`;

const byslot = new Map(scenes.map((s) => [s.slot, s]));
const exBySlot = new Map(existing.map((e) => [e.slot, e]));
const manifest = pages.map((p) => {
  const s = byslot.get(p.slot);
  const ex = exBySlot.get(p.slot);
  return {
    n: p.n, page: p.name, url: p.url, category: p.category, slot: p.slot, filename: p.filename,
    status: ex ? "generated (keep)" : "to generate",
    prompt: ex ? "(already generated; keep as is)" : prompt(s),
    alt: ex ? ex.alt : s.alt,
    ...(ex ? { issues: ex.issues } : {}),
  };
});
// The 13 kept images have no prompt; give each a unique placeholder so prompt uniqueness holds.
manifest.forEach((m) => { if (m.status === "generated (keep)") m.prompt = `(already generated: ${m.filename})`; });
fs.writeFileSync("scripts/hero-manifest.json", JSON.stringify(manifest, null, 1) + "\n");
// Keep the older file name used by the external generation workflow in sync.
fs.writeFileSync("scripts/hero_manifest.json", JSON.stringify(manifest.map((m) => ({
  n: m.n, name: m.page, url: m.url, category: m.category, slot: m.slot, filename: m.filename, imageName: `h${String(m.n).padStart(3, "0")}_${m.slot}`, prompt: m.prompt, alt: m.alt, status: m.status,
})), null, 1) + "\n");

const md = [
  "# Hero image prompts: 200 new pages",
  "",
  "Generate each image in Gemini from its prompt, then save it into `incoming/hero-images/` named by its number (e.g. `014.png`) or its filename. Any PNG, JPG or WebP works: run `node scripts/ingest-hero-images.mjs` and every image is cropped to 16:9 and saved as a 2560x1440 WebP. Then `node scripts/check-hero-images.mjs`.",
  "",
  "Ask Gemini for a 16:9 landscape image at the highest resolution it offers. If a result contains any text, logo, signage or readable screen, or looks like another image in the set, regenerate it.",
  "",
  `13 images are already generated and kept (marked **keep**); ${manifest.filter((m) => m.status === "to generate").length} remain to generate.`,
  "",
  ...manifest.map((m) => `## ${String(m.n).padStart(3, "0")} · ${m.page}\n\n- Page: \`${m.url}\`\n- Save as: \`${String(m.n).padStart(3, "0")}.png\` (becomes \`${m.filename}\`)\n- Alt text: ${m.alt}\n${m.status === "generated (keep)" ? `- **keep**: already generated. Rule breaks to fix if regenerated: ${m.issues}\n` : `\n> ${m.prompt}\n`}`),
].join("\n");
fs.writeFileSync("docs/page-expansion/hero-image-prompts.md", md + "\n");

console.log(`manifest: ${manifest.length} pages, ${manifest.filter((m) => m.status === "to generate").length} to generate, ${manifest.filter((m) => m.status !== "to generate").length} kept`);
console.log("no duplicate or near-duplicate concepts found");

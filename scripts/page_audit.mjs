/**
 * Whole-site page name, URL and link audit.
 *
 * For every page in sitemap.xml: status, page name (last breadcrumb item, else
 * <title> without " · HRMagix"), URL hygiene, every internal link's
 * destination status, and whether name-style link text equals the destination
 * page's name. Writes .page-audit.csv and prints a summary.
 *
 * Usage: node scripts/page_audit.mjs   (expects `next start -p 3111`)
 */
import { writeFileSync } from "node:fs";

const ORIGIN = process.env.ORIGIN || "http://localhost:3111";
const clean = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;| /g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Phrases that are calls to action or descriptions, not page names.
const ACTION =
  /^(See|Read|Explore|Get|Start|Contact us|Book|Work|Find|Browse|View|More|Learn|Try|Compare|Open|Download|Talk|All|Every|Go|Back|Meet|Ask|Check|Use|Calculate|Run|Visit|Email|Call|Write|Join|Apply|Request|Watch|Take|Continue|Show|Jump|Keep|Our|Your|What|Why|Where|How|Plan|Estimate|Set|Build|Pick|Discuss|Schedule|Hear|Speak|Chat|Send|Look|Review|Understand|Model|Map|Follow|Tour|Test|Preview|Sign|Skip|Previous|Next|Clear|Reset|Copy|Share|Print|Expand|Collapse|Menu|Close|Home$|Login|Log in|Sign in|Sign up|Subscribe|Download)\b/i;

const pages = new Map(); // url -> {status,name,title,links:[{href,text}]}

async function load(url) {
  if (pages.has(url)) return pages.get(url);
  let res;
  for (let i = 0; ; i++) {
    try {
      res = await fetch(ORIGIN + url, { redirect: "follow" });
      break;
    } catch (e) {
      if (i >= 4) throw e;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  const html = await res.text();
  const title = clean(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "").replace(/\s*·\s*HRMagix$/, "");
  const bc = html.match(/aria-label="Breadcrumb"[\s\S]*?<\/(nav|ol)>/i)?.[0] ?? "";
  const crumbs = [...bc.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((m) => clean(m[1])).filter(Boolean);
  const name = crumbs.at(-1) || title.split(":")[0];
  const links = [...html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)].map(([, href, inner]) => ({
    href: href.length > 1 ? href.replace(/\/$/, "") : href,
    text: clean(inner.replace(/<span[^>]*class="[^"]*sr-only[^"]*"[^>]*>[\s\S]*?<\/span>/g, "")),
    inner,
  }));
  const p = { status: res.status, name, title, crumbs, links };
  pages.set(url, p);
  return p;
}

const sitemap = await (await fetch(ORIGIN + "/sitemap.xml")).text();
const routes = [...new Set([...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)?<\/loc>/g)].map((m) => (m[1] || "/").replace(/\/$/, "") || "/"))];

for (const r of routes) await load(r);

// Every linked destination, including ones not in the sitemap.
const allTargets = new Set();
for (const r of routes) for (const l of pages.get(r).links) allTargets.add(l.href);
for (const t of allTargets) await load(t);

const broken = [];
const mismatches = new Map(); // key -> {count, on:[]}
const pageRow = new Map(routes.map((r) => [r, { textOk: true, destOk: true }]));

for (const r of routes) {
  for (const l of pages.get(r).links) {
    const dest = pages.get(l.href);
    if (!dest || dest.status !== 200) {
      broken.push(`${r} → ${l.href} (${dest?.status})`);
      pageRow.get(r).destOk = false;
      continue;
    }
    if (!l.text || l.href === r) continue;
    // Card links: prefer the heading/strong label inside the link.
    const label = clean(l.inner.match(/<(h\d|strong)[^>]*>([\s\S]*?)<\/\1>/)?.[2] ?? l.text);
    if (label.split(" ").length > 6 || /[.?!,…]$/.test(label) || ACTION.test(label)) continue;
    // Strip card decoration: type tags, counts, arrows.
    const bare = label
      .replace(/^(Solution|Industry|Feature|Calculator|Guide|Policy|Article|White paper|Paper \d+|Treated in depth|Previous term|Next term)\s*[←→]?\s*/i, "")
      .replace(/\s*[←→]\s*/g, " ")
      .replace(/\s+(Solution|Industry|Feature|Calculator|Policy|\d+( questions| pages| articles)?)$/i, "")
      .trim();
    if (bare === dest.name || label === dest.name) continue;
    if (dest.crumbs.length === 0 && dest.title.startsWith(bare)) continue;
    const key = `"${bare}" → ${l.href} (page name: "${dest.name}")`;
    const m = mismatches.get(key) ?? { count: 0, on: [] };
    m.count++;
    if (m.on.length < 3) m.on.push(r);
    mismatches.set(key, m);
    pageRow.get(r).textOk = false;
  }
}

// Names and URLs.
const byName = new Map();
for (const r of routes) {
  const n = pages.get(r).name.toLowerCase();
  byName.set(n, [...(byName.get(n) ?? []), r]);
}
const dupNames = [...byName].filter(([, rs]) => rs.length > 1);
const badUrls = routes.filter((r) => /[A-Z_ ]|\/\/|--|-$|\.html?$/.test(r));
const nonOk = routes.filter((r) => pages.get(r).status !== 200);
const noName = routes.filter((r) => !pages.get(r).name);

const csv = ["Page Name,Exact URL,Link Text Correct,Destination Correct,Status"];
for (const r of routes) {
  const p = pages.get(r);
  const row = pageRow.get(r);
  const ok = p.status === 200 && row.textOk && row.destOk && p.name;
  csv.push([`"${p.name.replace(/"/g, '""')}"`, r, row.textOk ? "Yes" : "No", row.destOk ? "Yes" : "No", ok ? "OK" : "Check"].join(","));
}
writeFileSync(".page-audit.csv", csv.join("\n"));

console.log(`Pages in sitemap: ${routes.length} (unique URLs: ${new Set(routes).size})`);
console.log(`Non-200 pages: ${nonOk.length}${nonOk.length ? " — " + nonOk.join(", ") : ""}`);
console.log(`Pages without a name: ${noName.length}`);
console.log(`Unclean URLs: ${badUrls.length}${badUrls.length ? " — " + badUrls.join(", ") : ""}`);
console.log(`Duplicate page names: ${dupNames.length}`);
for (const [n, rs] of dupNames) console.log(`  "${n}": ${rs.join(", ")}`);
console.log(`Broken internal links: ${broken.length}`);
for (const b of [...new Set(broken)].slice(0, 40)) console.log("  " + b);
console.log(`Link-text mismatches: ${mismatches.size} distinct`);
for (const [k, m] of [...mismatches].sort((a, b) => b[1].count - a[1].count)) console.log(`  ${k} ×${m.count} e.g. ${m.on[0]}`);
console.log("Report written to .page-audit.csv");

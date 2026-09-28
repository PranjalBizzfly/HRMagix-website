/**
 * Header/footer link-name audit.
 *
 * Reads every internal link in the rendered <header> and <footer> of the
 * homepage, opens each destination, and checks the link text exactly equals
 * the destination's own name (the last item of its breadcrumb, or its <title>
 * without the " · HRMagix" suffix for pages that have no breadcrumb).
 *
 * Usage: node scripts/link_names.mjs   (expects `next start -p 3111`)
 */
const ORIGIN = process.env.ORIGIN || "http://localhost:3111";
const clean = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const home = await (await fetch(ORIGIN + "/")).text();
const regions = {
  header: home.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "",
  footer: home.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "",
};

const nameCache = new Map();
async function pageName(href) {
  if (nameCache.has(href)) return nameCache.get(href);
  const html = await (await fetch(ORIGIN + href)).text();
  const bc = html.match(/aria-label="Breadcrumb"[\s\S]*?<\/(nav|ol)>/i)?.[0] ?? "";
  const items = [...bc.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((m) => clean(m[1]));
  const title = clean(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "").replace(/ · HRMagix$/, "");
  const name = { crumb: items.at(-1) || title, title };
  nameCache.set(href, name);
  return name;
}

let checked = 0;
const bad = [];
for (const [where, html] of Object.entries(regions)) {
  const links = [...html.matchAll(/<a[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)];
  for (const [, href, inner] of links) {
    // Prefer an explicit link label; skip icon-only links (logo) with no text.
    const text = clean(inner.replace(/<span[^>]*class="[^"]*sr-only[^"]*"[^>]*>[\s\S]*?<\/span>/g, ""));
    if (!text || href === "/") continue;
    checked++;
    const { crumb, title } = await pageName(href);
    if (text !== crumb) bad.push(`${where.padEnd(6)} "${text}" -> ${href} (breadcrumb: "${crumb}")`);
    if (!title.startsWith(text)) bad.push(`${where.padEnd(6)} "${text}" -> ${href} (tab title: "${title}")`);
  }
}
console.log(`checked ${checked} header/footer links`);

/* Every page's own content: short, name-like links (≤ 5 words, not a sentence). */
const ACTION =
  /^(See|Read|Explore|Get|Start|Contact|Book|Work|Find|Browse|View|More|Learn|Try|Compare|Open|Download|Talk|All|Every|Go|Back|Meet|Ask|Check|Use|Calculate|Run|Visit|Email|Call|Write|Join|Apply|Request|Watch|Take|Continue|Show|Jump|Keep|Our|Your|What|Why|Where|Plan|Estimate|Set|Build|Pick|Discuss|Schedule|Hear|Speak|Chat|Send|Look|Review|Understand|Model|Map|Follow|Tour|Test|Preview|Sign)\b/;
const sitemap = await (await fetch(ORIGIN + "/sitemap.xml")).text();
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1] || "/");
let bodyChecked = 0;
const bodyBad = new Map();
for (const route of routes) {
  const html = await (await fetch(ORIGIN + route)).text();
  // Content is streamed after <main> closes, so scan the whole document minus header and footer.
  const main = html.replace(/<header[\s\S]*?<\/header>/, "").replace(/<footer[\s\S]*?<\/footer>/, "");
  for (const [, href, inner] of main.matchAll(/<a[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
    // A card link carries its label in a heading or bold span; take the first such label.
    const labelled = inner.match(/<(h\d|strong)[^>]*>([\s\S]*?)<\/\1>/)?.[2] ?? inner;
    const text = clean(labelled);
    if (!text || href === "/" || href === route) continue;
    if (text.split(" ").length > 5 || /[.?!,]$/.test(text)) continue;
    // Calls to action ("See pricing", "Read the startups page") are phrases, not page names.
    if (ACTION.test(text)) continue;
    bodyChecked++;
    const { crumb } = await pageName(href);
    // Cards print a small tag or count beside the name ("Payroll · Solution", "Payroll 32",
    // "← Arrears"); strip that decoration, then the name itself must match exactly.
    const bare = text
      .replace(/^(Solution|Industry|Treated in depth|Previous term ←|Next term)\s+/, "")
      .replace(/\s+(Solution|Industry|→|\d+( questions)?)$/, "")
      .replace(/ (Calculator|Policy)$/, (m, w) => (text.endsWith(`${w} ${w}`) ? "" : m));
    if (bare !== crumb) {
      const key = `"${text}" -> ${href} (page name: "${crumb}")`;
      bodyBad.set(key, [...(bodyBad.get(key) ?? []), route]);
    }
  }
}
console.log(`\nchecked ${bodyChecked} in-page links on ${routes.length} pages`);
for (const [k, on] of bodyBad) console.log(`${k}  on ${on.length} page(s), e.g. ${on[0]}`);
console.log(bad.length ? bad.join("\n") : "all link names match their destination page names");

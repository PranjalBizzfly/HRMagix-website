/**
 * Page names.
 *
 * A page's name is what its breadcrumb ends with, what its <title> starts with
 * and what every name-style link to it says. Names are Title Case; secondary
 * collections carry a type suffix so no two pages share a name:
 *
 *   glossary terms   "<Term> (Glossary)"
 *   feature modules  "<Name> Module"
 *   HR topics        "<Name> Guide"
 *   FAQ topics       "<Topic> FAQs"
 *
 * Pure functions, no content imports — safe in client components.
 */

/** Minor words kept lowercase unless they open the name or follow a colon. */
const MINOR = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "per", "the", "to", "vs", "via",
]);

/** Capitalise the first letter of one hyphen-free segment, unless it already has capitals (eNPS, HRMS). */
function capSegment(seg: string): string {
  const i = seg.search(/[A-Za-z]/);
  if (i < 0) return seg;
  const lead = seg.slice(0, i);
  // Starts with a digit ("9-box", "22:40"): leave as written.
  if (/\d/.test(lead)) return seg;
  const rest = seg.slice(i);
  if (/[A-Z]/.test(rest.slice(1))) return seg;
  return lead + rest[0].toUpperCase() + rest.slice(1);
}

/** Title Case: major words capitalised, minor words lowercase, abbreviations as written. */
export function titleCase(s: string): string {
  const words = s.split(" ");
  let forceCap = true;
  return words
    .map((w, idx) => {
      // The last word is always capitalised ("Agrees On").
      if (idx === words.length - 1) forceCap = true;
      const bare = w.replace(/^[("'“‘]+|[)"'”’:,.;!?]+$/g, "");
      const lower = bare.toLowerCase();
      let out: string;
      if (!forceCap && MINOR.has(lower) && (bare === lower || bare === lower[0].toUpperCase() + lower.slice(1)) && (bare.length > 1 || bare === "a")) {
        out = w.replace(bare, lower);
      } else {
        const parts = w.split("-");
        out = parts
          .map((p, j) => {
            if (j === 0) return capSegment(p);
            // After a numeric segment ("9-box", "1-on-1") or for minor words, leave as written.
            if (/^\d/.test(parts[j - 1].replace(/^[("'“‘]+/, ""))) return p;
            if (MINOR.has(p.toLowerCase())) return p.toLowerCase();
            return capSegment(p);
          })
          .join("-");
      }
      forceCap = /[:.!?—]$/.test(w) || w === "—" || w === "–";
      return out;
    })
    .join(" ");
}

export const glossaryName = (label: string) => `${titleCase(label)} (Glossary)`;
export const featureName = (name: string) => `${titleCase(name)} Module`;
export const topicName = (name: string) => `${titleCase(name)} Guide`;
export const faqTopicName = (name: string) => `${titleCase(name)} FAQs`;

/**
 * An SEO title that starts with the page name: a leading copy of the base name
 * (any case) is replaced by the page name; otherwise the name is prefixed.
 */
export function titleWithName(name: string, base: string, seoTitle: string): string {
  if (seoTitle.toLowerCase().startsWith(base.toLowerCase())) {
    const rest = seoTitle.slice(base.length).replace(/^\s*[:·|–—-]?\s*/, "");
    return rest ? `${name}: ${rest}` : name;
  }
  if (seoTitle.toLowerCase().startsWith(name.toLowerCase())) return name + seoTitle.slice(name.length);
  return `${name}: ${seoTitle}`;
}

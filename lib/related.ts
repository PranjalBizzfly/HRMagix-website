import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { articles } from "@/lib/blog";
import { whitePapers } from "@/lib/papers";
import { guides } from "@/lib/guides";
import { calculators } from "@/lib/calculators";
import { policyDetails } from "@/lib/policyDetail";
import { policyRegister } from "@/lib/policies";
import { faqs as generalFaqs } from "@/lib/content";

/**
 * Related content, computed from what the pages actually say.
 *
 * Every long-form page on the site is flattened into one searchable text, so a
 * glossary term, a feature or an FAQ topic can link to the pages that genuinely
 * discuss it — ranked by how often they do — instead of a hand-kept list that
 * drifts. Server-only.
 */

export type RelatedPage = { title: string; href: string; kind: string; hits: number };
export type SourcedQuestion = { q: string; a: string; href: string; source: string };

type Doc = { title: string; href: string; kind: string; text: string };

const policyName = new Map(
  policyRegister.flatMap((g) => g.entries.map((e) => [e.code, e.name] as const)),
);

const flat = (x: unknown) => JSON.stringify(x).replace(/\\n|[{}[\]"]/g, " ").toLowerCase();

const corpus: Doc[] = [
  ...solutions.map((s) => ({ title: s.name, href: s.href, kind: "Solution", text: flat(s) })),
  ...industries.map((i) => ({ title: i.name, href: i.href, kind: "Industry", text: flat(i) })),
  ...articles.map((a) => ({ title: a.title, href: `/insights/${a.slug}`, kind: "Article", text: flat(a) })),
  ...guides.map((g) => ({ title: g.title, href: `/resources/hr-guides/${g.slug}`, kind: "Guide", text: flat(g) })),
  ...whitePapers.map((w) => ({
    title: w.title,
    href: `/resources/white-papers/${w.slug}`,
    kind: "White paper",
    text: flat(w),
  })),
  ...calculators.map((c) => ({ title: c.name, href: `/calculators/${c.slug}`, kind: "Calculator", text: flat(c) })),
  ...policyDetails.map((d) => ({
    title: policyName.get(d.code) ?? d.slug,
    href: `/policy-centre/workplace-policy-library/${d.slug}`,
    kind: "Policy",
    text: flat(d),
  })),
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Whole-word, case-insensitive occurrences of any phrase. */
function count(text: string, phrases: string[]): number {
  let n = 0;
  for (const p of phrases) {
    const re = new RegExp(`(^|[^a-z0-9])${escape(p.toLowerCase())}([^a-z0-9]|$)`, "g");
    n += text.match(re)?.length ?? 0;
  }
  return n;
}

/** Pages that discuss any of the phrases, most mentions first. */
export function relatedPages(
  phrases: string[],
  { limit = 6, exclude = [] as string[], minHits = 1 } = {},
): RelatedPage[] {
  return corpus
    .filter((d) => !exclude.includes(d.href))
    .map((d) => ({ title: d.title, href: d.href, kind: d.kind, hits: count(d.text, phrases) }))
    .filter((d) => d.hits >= minHits)
    .sort((a, b) => b.hits - a.hits)
    .slice(0, limit);
}

/** Every question answered anywhere on the site, with the page that answers it. */
export const allQuestions: SourcedQuestion[] = [
  ...generalFaqs.map((f) => ({ ...f, href: "/resources/questions-and-answers", source: "Questions & Answers" })),
  ...solutions.flatMap((s) =>
    s.questions.map((q) => ({ q: q.q, a: q.a, href: s.href, source: s.name })),
  ),
  ...industries.flatMap((i) =>
    i.questions.map((q) => ({ q: q.q, a: q.a, href: i.href, source: i.name })),
  ),
  ...calculators.flatMap((c) =>
    c.faqs.map((q) => ({ q: q.q, a: q.a, href: `/calculators/${c.slug}`, source: c.name })),
  ),
];

/** Questions whose question or answer mentions any of the phrases. */
export function relatedQuestions(
  phrases: string[],
  { limit = 5, inQuestionOnly = false } = {},
): SourcedQuestion[] {
  return allQuestions
    .map((f) => ({
      f,
      score: count(f.q.toLowerCase(), phrases) * 3 + (inQuestionOnly ? 0 : count(f.a.toLowerCase(), phrases)),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.f);
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * One content shape for the reference collections added in the 400-page
 * expansion: educational comparisons, HR letter templates, job descriptions,
 * labour-law explainers, persona solution pages and the extra feature pages.
 *
 * WRITING RULES (apply to every entry):
 *   - No HRMagix capability that is not already published on this site
 *     (lib/appFeatures.ts, lib/content.ts modules, lib/solutions.ts).
 *   - No statistics, benchmarks, customer outcomes, certifications,
 *     integrations or prices that are not already on the site.
 *   - Statutory figures only where central law fixes them, and named with the
 *     provision. Anything that varies by state is described as varying.
 *   - Anything legal or time-sensitive that a reader should check before
 *     relying on it goes in `verify`, which the page shows prominently.
 */

export type LibList = { style: "ordered" | "bullet"; items: string[] };

export type LibSection = {
  heading: string;
  /** Paragraphs. */
  body?: string[];
  list?: LibList;
  /** A real comparison or reference table. */
  table?: { head: string[]; rows: string[][] };
  /** A short aside: the thing that catches people out. */
  note?: string;
};

export type LibPage = {
  slug: string;
  /** Card, menu and index label (the approved page name). */
  name: string;
  /** The H1. Must differ from every other H1 on the site. */
  title: string;
  /** One or two sentences under the H1. */
  standfirst: string;
  seo: {
    /** Unique <title>, without the " · HRMagix" suffix. */
    title: string;
    /** Unique meta description, 140 to 160 characters. */
    description: string;
    /** The approved primary keyword first, then a few natural variants. */
    keywords: string[];
  };
  sections: LibSection[];
  /**
   * Letter templates only: the full, usable document text. Placeholders in
   * [SQUARE BRACKETS]. Line breaks are preserved.
   */
  template?: string;
  faqs?: { q: string; a: string }[];
  /** Internal links to existing pages that treat related subjects. */
  related: { label: string; href: string; note: string }[];
  /** What must be checked against current law or policy before relying on it. */
  verify?: string;
};

/** A collection's hub page and its entries. */
export type LibCollection = {
  /** URL base, e.g. "/resources/compare". The hub lives at this path. */
  base: string;
  /** Section label used in breadcrumbs, menus and the site index. */
  label: string;
  hub: {
    title: string;
    standfirst: string;
    intro: string[];
    seo: { title: string; description: string; keywords: string[] };
  };
  pages: LibPage[];
};

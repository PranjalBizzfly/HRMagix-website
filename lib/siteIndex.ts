import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { articles } from "@/lib/blog";
import { whitePapers } from "@/lib/papers";
import { guides } from "@/lib/guides";
import { calculators } from "@/lib/calculators";
import { policyDetails } from "@/lib/policyDetail";
import { legalPages, policyRegister } from "@/lib/policies";
import { modules } from "@/lib/content";
import { glossary, termSlug, termLabel } from "@/lib/glossary";
import { categories } from "@/lib/blog";
import { topics } from "@/lib/topics";
import { faqTopics } from "@/lib/faqTopics";
import { slugify } from "@/lib/related";
import { compareCollection } from "@/lib/library/compare";
import { lettersCollection } from "@/lib/library/letters";
import { jobDescriptionsCollection } from "@/lib/library/jobDescriptions";
import { labourLawCollection } from "@/lib/library/labourLaw";
import { personaPages } from "@/lib/library/personas";
import type { LibCollection } from "@/lib/library/types";
import { titleCase, glossaryName, featureName, topicName, faqTopicName } from "@/lib/names";

const collectionGroup = (c: LibCollection, name: string, hubTitle: string): IndexGroup => ({
  name,
  pages: [
    { title: hubTitle, href: c.base, group: name },
    ...c.pages.map((p) => ({ title: p.name, href: `${c.base}/${p.slug}`, group: name, keywords: p.seo.keywords.join(" ") })),
  ],
});

/**
 * Every page on the site, grouped — the data behind the header search and the
 * /all-pages index.
 *
 * Built from the same content modules the pages (and app/sitemap.ts) read, so
 * a page added to lib/ appears in search automatically. Server-only: the
 * header receives the finished array as a prop, so none of the long-form
 * content modules reach the browser bundle.
 */

export type IndexedPage = {
  title: string;
  href: string;
  group: string;
  /** Extra words that should match in search but are not shown. */
  keywords?: string;
};

export type IndexGroup = { name: string; pages: IndexedPage[] };

const policyName = new Map(
  policyRegister.flatMap((g) => g.entries.map((e) => [e.code, e.name] as const)),
);

export function buildSiteIndex(): IndexGroup[] {
  const groups: IndexGroup[] = [
    {
      name: "Main",
      pages: [
        { title: "Home", href: "/" },
        { title: "Pricing", href: "/pricing", keywords: "plans cost price trial" },
        { title: "How Setup Works", href: "/how-setup-works", keywords: "setup implementation steps" },
        { title: "Contact HRMagix", href: "/company/contact-hrmagix", keywords: "demo sales email phone" },
        { title: "Explore All Pages", href: "/explore-all-pages", keywords: "sitemap index" },
      ].map((p) => ({ ...p, group: "Main" })),
    },
    {
      name: "Solutions",
      pages: [
        { title: "Solutions", href: "/solutions", keywords: "platform modules features" },
        ...solutions.map((s) => ({ title: s.name, href: s.href, keywords: s.title })),
        { title: "Performance & OKRs", href: "/solutions/performance-and-okrs", keywords: "kra okr pip reviews 9-box" },
        { title: "Compliance", href: "/solutions/compliance", keywords: "epf esi pt tds lwf statutory" },
        ...personaPages.map((p) => ({ title: p.name, href: `/solutions/${p.slug}`, keywords: p.seo.keywords.join(" ") })),
      ].map((p) => ({ ...p, group: "Solutions" })),
    },
    {
      name: "Features",
      pages: [
        { title: "Features", href: "/features", keywords: "modules" },
        ...modules.map((m) => ({ title: featureName(m.name), href: `/features/${m.slug}`, keywords: `${m.group} ${m.desc}` })),
      ].map((p) => ({ ...p, group: "Features" })),
    },
    {
      name: "Industries",
      pages: [
        { title: "Industries", href: "/industries" },
        ...industries.map((i) => ({ title: i.name, href: i.href, keywords: i.title })),
      ].map((p) => ({ ...p, group: "Industries" })),
    },
    {
      name: "Resources",
      pages: [
        { title: "Resources", href: "/resources" },
        { title: "Payroll Resources", href: "/resources/payroll-resources" },
        { title: "HRMS Comparison", href: "/resources/hrms-comparison", keywords: "compare spreadsheets" },
        { title: "Media Room", href: "/resources/media-room", keywords: "press news" },
      ].map((p) => ({ ...p, group: "Resources" })),
    },
    {
      name: "HR topics",
      pages: [
        { title: "HR Topics", href: "/hr/topics", keywords: "guides knowledge" },
        ...topics.map((t) => ({ title: topicName(t.name), href: `/hr/topics/${t.slug}`, keywords: `${t.category} ${t.phrases.join(" ")}` })),
      ].map((p) => ({ ...p, group: "HR topics" })),
    },
    {
      name: "FAQs",
      pages: [
        { title: "Questions & Answers", href: "/resources/questions-and-answers", keywords: "faq" },
        ...faqTopics.map((t) => ({ title: faqTopicName(t.name), href: `/resources/questions-and-answers/${t.slug}`, keywords: "faq questions" })),
      ].map((p) => ({ ...p, group: "FAQs" })),
    },
    {
      name: "Glossary",
      pages: [
        { title: "HR & Payroll Glossary", href: "/resources/hr-and-payroll-glossary", keywords: "terms definitions" },
        ...glossary.map((g) => ({ title: glossaryName(termLabel(g)), href: `/resources/hr-and-payroll-glossary/${termSlug(g)}`, keywords: g.expands ?? "" })),
      ].map((p) => ({ ...p, group: "Glossary" })),
    },
    {
      name: "Calculators",
      pages: [
        { title: "Calculator", href: "/resources/calculator" },
        ...calculators.map((c) => ({ title: c.name, href: `/calculators/${c.slug}`, keywords: c.title })),
      ].map((p) => ({ ...p, group: "Calculators" })),
    },
    {
      name: "Blog",
      pages: [
        { title: "Insights", href: "/insights" },
        ...categories.map((c) => ({ title: c.name, href: `/insights/category/${slugify(c.name)}`, keywords: "category" })),
        ...articles.map((a) => ({ title: a.title, href: `/insights/${a.slug}`, keywords: a.category })),
      ].map((p) => ({ ...p, group: "Blog" })),
    },
    {
      name: "White papers",
      pages: [
        { title: "White Papers", href: "/resources/white-papers" },
        ...whitePapers.map((w) => ({
          title: w.title,
          href: `/resources/white-papers/${w.slug}`,
          keywords: w.subtitle,
        })),
      ].map((p) => ({ ...p, group: "White papers" })),
    },
    {
      name: "HR guides",
      pages: [
        { title: "HR Guides", href: "/resources/hr-guides" },
        ...guides.map((g) => ({ title: g.title, href: `/resources/hr-guides/${g.slug}` })),
      ].map((p) => ({ ...p, group: "HR guides" })),
    },
    {
      name: "Workplace policies",
      pages: [
        { title: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library" },
        ...policyDetails.map((d) => ({
          title: policyName.get(d.code) ?? d.slug.replace(/-/g, " "),
          href: `/policy-centre/workplace-policy-library/${d.slug}`,
          keywords: "policy template",
        })),
      ].map((p) => ({ ...p, group: "Workplace policies" })),
    },
    collectionGroup(compareCollection, "Comparisons", "Compare"),
    collectionGroup(labourLawCollection, "Labour law", "Labour Law"),
    collectionGroup(lettersCollection, "Letter templates", "HR Letter Templates"),
    collectionGroup(jobDescriptionsCollection, "Job descriptions", "Job Description Templates"),
    {
      name: "Company",
      pages: [
        { title: "About HRMagix", href: "/company/about-hrmagix" },
        { title: "Careers", href: "/company/careers", keywords: "jobs hiring" },
        { title: "Press Kit", href: "/company/press-kit", keywords: "logo brand" },
        { title: "Partners & Vendors", href: "/partners-and-vendors", keywords: "partner" },
      ].map((p) => ({ ...p, group: "Company" })),
    },
    {
      name: "Legal",
      pages: [
        { title: "Policy Centre", href: "/policy-centre" },
        ...legalPages.map((l) => ({ title: l.name, href: l.href })),
      ].map((p) => ({ ...p, group: "Legal" })),
    },
  ];

  // Every title is the destination page's name, in Title Case.
  return groups.map((g) => ({ ...g, pages: g.pages.map((p) => ({ ...p, title: titleCase(p.title) })) }));
}

let names: Map<string, string> | undefined;

/** The page name for an internal href (server-only). */
export function pageNameOf(href: string): string | undefined {
  names ??= new Map(buildSiteIndex().flatMap((g) => g.pages.map((p) => [p.href, p.title] as const)));
  return names.get(href);
}

export const pageCount = (groups: IndexGroup[]) =>
  groups.reduce((n, g) => n + g.pages.length, 0);

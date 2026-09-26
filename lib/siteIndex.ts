import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { articles } from "@/lib/blog";
import { whitePapers } from "@/lib/papers";
import { guides } from "@/lib/guides";
import { calculators } from "@/lib/calculators";
import { policyDetails } from "@/lib/policyDetail";
import { legalPages, policyRegister } from "@/lib/policies";
import { modules } from "@/lib/content";
import { glossary } from "@/lib/glossary";
import { categories } from "@/lib/blog";
import { topics } from "@/lib/topics";
import { faqTopics } from "@/lib/faqTopics";
import { slugify } from "@/lib/related";

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
        { title: "How it works", href: "/how-it-works", keywords: "setup implementation steps" },
        { title: "Contact", href: "/company/contact", keywords: "demo sales email phone" },
        { title: "Explore all pages", href: "/all-pages", keywords: "sitemap index" },
      ].map((p) => ({ ...p, group: "Main" })),
    },
    {
      name: "Solutions",
      pages: [
        { title: "All solutions", href: "/solutions", keywords: "platform modules features" },
        ...solutions.map((s) => ({ title: s.name, href: s.href, keywords: s.title })),
        { title: "Performance & OKRs", href: "/solutions/performance", keywords: "kra okr pip reviews 9-box" },
        { title: "Compliance", href: "/solutions/compliance", keywords: "epf esi pt tds lwf statutory" },
      ].map((p) => ({ ...p, group: "Solutions" })),
    },
    {
      name: "Features",
      pages: [
        { title: "All features", href: "/features", keywords: "modules" },
        ...modules.map((m) => ({ title: m.name, href: `/features/${m.slug}`, keywords: `${m.group} ${m.desc}` })),
      ].map((p) => ({ ...p, group: "Features" })),
    },
    {
      name: "Industries",
      pages: [
        { title: "All industries", href: "/industries" },
        ...industries.map((i) => ({ title: i.name, href: i.href, keywords: i.title })),
      ].map((p) => ({ ...p, group: "Industries" })),
    },
    {
      name: "Resources",
      pages: [
        { title: "Resource centre", href: "/resources" },
        { title: "Payroll resources", href: "/resources/payroll" },
        { title: "HRMS comparison", href: "/resources/hrms-comparison", keywords: "compare spreadsheets" },
        { title: "Media room", href: "/resources/media", keywords: "press news" },
      ].map((p) => ({ ...p, group: "Resources" })),
    },
    {
      name: "HR topics",
      pages: [
        { title: "All HR topics", href: "/hr/topics", keywords: "guides knowledge" },
        ...topics.map((t) => ({ title: t.name, href: `/hr/topics/${t.slug}`, keywords: `${t.category} ${t.phrases.join(" ")}` })),
      ].map((p) => ({ ...p, group: "HR topics" })),
    },
    {
      name: "FAQs",
      pages: [
        { title: "All questions & answers", href: "/resources/faqs", keywords: "faq" },
        ...faqTopics.map((t) => ({ title: `${t.name} FAQs`, href: `/resources/faqs/${t.slug}`, keywords: "faq questions" })),
      ].map((p) => ({ ...p, group: "FAQs" })),
    },
    {
      name: "Glossary",
      pages: [
        { title: "HR glossary", href: "/resources/glossary", keywords: "terms definitions" },
        ...glossary.map((g) => ({ title: g.term, href: `/resources/glossary/${slugify(g.term)}`, keywords: g.expands ?? "" })),
      ].map((p) => ({ ...p, group: "Glossary" })),
    },
    {
      name: "Calculators",
      pages: [
        { title: "All calculators", href: "/resources/calculator" },
        ...calculators.map((c) => ({ title: c.name, href: `/calculators/${c.slug}`, keywords: c.title })),
      ].map((p) => ({ ...p, group: "Calculators" })),
    },
    {
      name: "Blog",
      pages: [
        { title: "All articles", href: "/blog" },
        ...categories.map((c) => ({ title: `${c.name} articles`, href: `/blog/category/${slugify(c.name)}`, keywords: "category" })),
        ...articles.map((a) => ({ title: a.title, href: `/blog/${a.slug}`, keywords: a.category })),
      ].map((p) => ({ ...p, group: "Blog" })),
    },
    {
      name: "White papers",
      pages: [
        { title: "All white papers", href: "/resources/white-papers" },
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
        { title: "All guides", href: "/resources/guides" },
        ...guides.map((g) => ({ title: g.title, href: `/resources/guides/${g.slug}` })),
      ].map((p) => ({ ...p, group: "HR guides" })),
    },
    {
      name: "Workplace policies",
      pages: [
        { title: "Workplace policy library", href: "/policy/workplace-policies" },
        ...policyDetails.map((d) => ({
          title: policyName.get(d.code) ?? d.slug.replace(/-/g, " "),
          href: `/policy/workplace-policies/${d.slug}`,
          keywords: "policy template",
        })),
      ].map((p) => ({ ...p, group: "Workplace policies" })),
    },
    {
      name: "Company",
      pages: [
        { title: "About", href: "/company/about" },
        { title: "Careers", href: "/company/careers", keywords: "jobs hiring" },
        { title: "Press kit", href: "/company/press-kit", keywords: "logo brand" },
        { title: "Vendor & partners", href: "/vendor", keywords: "partner" },
      ].map((p) => ({ ...p, group: "Company" })),
    },
    {
      name: "Legal",
      pages: [
        { title: "Policy centre", href: "/policy" },
        ...legalPages.map((l) => ({ title: l.name, href: l.href })),
      ].map((p) => ({ ...p, group: "Legal" })),
    },
  ];

  return groups;
}

export const pageCount = (groups: IndexGroup[]) =>
  groups.reduce((n, g) => n + g.pages.length, 0);

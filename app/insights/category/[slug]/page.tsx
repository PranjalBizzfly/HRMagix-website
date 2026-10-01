import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { categoryFaqs } from "@/lib/pageFaqs/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories } from "@/lib/blog";
import { relatedPages, slugify } from "@/lib/related";
import { Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { titleCase } from "@/lib/names";
import ContentSections from "@/components/ContentSections";
import { hubContent } from "@/lib/pageContent";

/** One blog category: its articles, newest first, and where to read further. */

export const dynamicParams = false;

const bySlug = (slug: string) => categories.find((c) => slugify(c.name) === slug);

export function generateStaticParams() {
  return categories.map((c) => ({ slug: slugify(c.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = bySlug(slug);
  if (!c) return {};
  return {
    title: `${titleCase(c.name)}: HRMagix Blog`,
    description: c.blurb,
    alternates: { canonical: `/insights/category/${slug}` },
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = bySlug(slug);
  if (!c) notFound();

  const list = articles
    .filter((a) => a.category === c.name)
    .sort((a, b) => b.date.localeCompare(a.date));
  const words = c.name.toLowerCase().split(/\s*&\s*|\s+/).filter((w) => w.length > 3);
  const further = relatedPages(words, { limit: 4 }).filter((p) => p.kind !== "Article");

  return (
    <>
      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: titleCase(c.name) }]}
            />
          </Reveal>
          <span className="eyebrow mt-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {list.length} {list.length === 1 ? "article" : "articles"}
          </span>
          <h1 className="display display-xl mt-5 max-w-[16ch] text-balance">{c.name}</h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">{c.blurb}</p>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((o) => (
            <Link
              key={o.name}
              href={`/insights/category/${slugify(o.name)}`}
              aria-current={o.name === c.name ? "page" : undefined}
              className={`inline-flex min-h-[40px] items-center rounded-full px-4 text-[13.5px] font-semibold transition-colors ${
                o.name === c.name
                  ? "bg-brand text-white"
                  : "bg-surface-sunken text-body ring-1 ring-line hover:text-accent hover:ring-line-accent"
              }`}
            >
              {titleCase(o.name)}
            </Link>
          ))}
          <Link
            href="/insights"
            className="inline-flex min-h-[40px] items-center rounded-full px-4 text-[13.5px] font-semibold text-accent"
          >
            All articles
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5">
          {list.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 60} y={14}>
              <Link href={`/insights/${a.slug}`} className="card card-hover group flex h-full flex-col p-6 sm:p-7">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-label">
                  For {a.reader}
                </span>
                <span className="mt-3 font-display text-[20px] font-bold leading-snug text-heading group-hover:text-accent">
                  {titleCase(a.title)}
                </span>
                <span className="mt-3 flex-1 text-[15px] leading-[1.65] text-muted">{a.standfirst}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
                  Read the article <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Block>

      <ContentSections content={hubContent[`/insights/category/${slug}`]} ground="canvas" />

      {categoryFaqs[slug] && (
        <FaqSection title={`${c.name}: common questions`} items={categoryFaqs[slug]} ground="sunken" />
      )}

      {further.length > 0 && (
        <Block eyebrow="Further reading" title="Beyond the blog" ground="sunken">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {further.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="card card-hover group flex h-full flex-col p-5">
                  <span className="text-[12px] text-subtle">{p.kind}</span>
                  <strong className="mt-1 font-display text-[16px] font-bold text-heading group-hover:text-accent">
                    {p.title}
                  </strong>
                </Link>
              </li>
            ))}
          </ul>
        </Block>
      )}

      <Onward
        links={[
          { label: "Insights", href: "/insights", note: "Every post, across all four categories." },
          { label: "HR Guides", href: "/resources/hr-guides", note: "Longer, chaptered treatments with a checklist." },
          { label: "HR & Payroll Glossary", href: "/resources/hr-and-payroll-glossary", note: "The terms these articles use, defined." },
        ]}
      />
    </>
  );
}

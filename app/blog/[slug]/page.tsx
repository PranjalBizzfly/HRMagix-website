import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, bySlug } from "@/lib/blog";
import { Band, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import Prose, { Contents, type ProseBlock } from "@/components/Prose";
import { site } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = bySlug(slug);
  if (!a) return {};
  return {
    title: a.seo.title,
    description: a.seo.description,
    keywords: a.seo.keywords,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: `${a.seo.title} · HRMagix`,
      description: a.seo.description,
      url: `/blog/${a.slug}`,
      type: "article",
      siteName: "HRMagix",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
    },
  };
}

/**
 * An Insights article.
 *
 * A single measured column with a sticky contents rail — the shape of something
 * written to be read, not a landing page wearing an article's clothes. The
 * photograph appears once, under the standfirst, and never again.
 */
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = bySlug(slug);
  if (!article) notFound();

  const related = article.related
    .map((s) => bySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <article>
        <header className="border-b border-line bg-surface pb-10 pt-[104px] sm:pt-[128px]">
          <div className="shell">
            <Reveal y={8}>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Insights", href: "/blog" },
                  { label: article.category },
                ]}
              />
            </Reveal>

            <div className="mt-8 max-w-3xl">
              <Reveal y={10}>
                <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-accent">
                  {article.category}
                </p>
              </Reveal>
              <h1 className="display display-lg mt-5 text-balance">{article.title}</h1>
              <Reveal delay={140}>
                <p className="mt-7 text-[18px] leading-[1.62] text-body sm:text-[19.5px]">
                  {article.standfirst}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                      Written for
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] text-heading">{article.reader}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                      Length
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] text-heading">
                      {article.minutes} minute read
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </header>

        <Band ground="surface" size="md">
          <Reveal y={18} className="mb-12">
            <Photo
              slot={article.image}
              ratio="21 / 9"
              sizes="(max-width: 1240px) 100vw, 1240px"
              rounded="rounded-[24px]"
            />
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] lg:gap-16">
            <Prose blocks={article.body as ProseBlock[]} className="min-w-0" />

            <aside className="lg:order-2">
              <div className="lg:sticky lg:top-[110px]">
                <Contents blocks={article.body as ProseBlock[]} />

                <div className="mt-10 rounded-2xl bg-surface-sunken p-6 ring-1 ring-line">
                  <p className="font-display text-[15px] font-bold text-heading">
                    Have a question this did not answer?
                  </p>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-muted">
                    Questions about how a statutory head behaves in your own situation are better
                    asked than searched for.
                  </p>
                  <Link
                    href="/company/contact"
                    className="group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-accent"
                  >
                    Ask the team in Pune <Arrow />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Band>
      </article>

      {/* ---- Closing: back to the section, and the related pieces ---- */}
      <Band ground="sunken" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[18ch]">
              See this running against your own payroll month
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              {site.contact.blurb}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/blog" variant="outline">
              All insights
            </Button>
          </div>
        </div>
      </Band>

      {related.length > 0 && (
        <Onward
          title="Related reading"
          links={related.map((r) => ({
            label: r.title,
            href: `/blog/${r.slug}`,
            note: r.standfirst,
          }))}
        />
      )}
    </>
  );
}

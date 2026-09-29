import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { guideFaqs } from "@/lib/pageFaqs/guides";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, guideBySlug } from "@/lib/guides";
import { Onward } from "@/components/editorial";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return {
    title: g.seo.title,
    description: g.seo.description,
    keywords: g.seo.keywords,
    alternates: { canonical: `/resources/hr-guides/${g.slug}` },
    openGraph: {
      title: `${g.title} · HRMagix`,
      description: g.seo.description,
      url: `/resources/hr-guides/${g.slug}`,
      siteName: "HRMagix",
      type: "article",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
    },
  };
}

/**
 * A GUIDE.
 *
 * Set as a handbook chapter rather than as an article: numbered chapters
 * running full width with a rule between them, no photography, no sticky
 * contents rail, and a checklist at the end instead of a conclusion. That is
 * deliberately unlike the Insights article layout, which is a narrower measure
 * with a contents rail and a hero image — the two formats should not be
 * mistaken for one another at a glance.
 */
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <header className="page-hero border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "HR Guides", href: "/resources/hr-guides" },
                { label: `Guide ${guide.number}` },
              ]}
            />
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal y={10} className="flex flex-wrap items-center gap-3">
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                Guide {guide.number}
              </span>
              <span className="text-[12.5px] text-subtle">
                {guide.chapters.length} chapters
              </span>
            </Reveal>

            <h1 className="display display-lg mt-5 text-balance">{guide.title}</h1>

            {guide.opening.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p
                  className={`max-w-2xl text-[17px] leading-[1.68] text-body ${i ? "mt-5" : "mt-7"}`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </header>

      <SiteStats />

      {/* ---- Who it is for + chapters ---- */}
      <Block ground="canvas">
        <Reveal y={10} className="mx-auto max-w-[74ch]">
          <dl className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            <div className="card p-6">
              <dt className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                Written for
              </dt>
              <dd className="mt-2.5 text-[15.5px] leading-[1.68] text-muted">
                {guide.audience}
              </dd>
            </div>
            <div className="card p-6">
              <dt className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                You will be able to
              </dt>
              <dd className="mt-2.5 text-[15.5px] leading-[1.68] text-muted">
                {guide.outcome}
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="mx-auto mt-14 max-w-[74ch]">
          {guide.chapters.map((ch, i) => (
            <Reveal
              as="section"
              key={ch.title}
              delay={30}
              y={14}
              className="border-t border-line-strong pt-9 first:border-t-0 first:pt-0 [&+section]:mt-12"
            >
              <p className="font-mono text-[12.5px] font-semibold tracking-[0.08em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-[24px] font-bold leading-[1.25] tracking-[-0.025em] text-heading sm:text-[28px]">
                {ch.title}
              </h2>

              {ch.body.map((p, j) => (
                <p key={j} className="mt-5 text-[16.5px] leading-[1.75] text-muted">
                  {p}
                </p>
              ))}

              {ch.list &&
                (ch.list.style === "ordered" ? (
                  <ol className="mt-6 space-y-3.5">
                    {ch.list.items.map((item, k) => (
                      <li key={item} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface-raised font-display text-[11.5px] font-bold text-accent-strong"
                        >
                          {k + 1}
                        </span>
                        <span className="text-[16px] leading-[1.7] text-body">{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-6 space-y-3">
                    {ch.list.items.map((item) => (
                      <li key={item} className="flex gap-3.5 text-[16px] leading-[1.7] text-body">
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}

              {ch.watch && (
                <p className="mt-7 rounded-xl bg-surface-sunken p-5 text-[15.5px] leading-[1.7] text-muted ring-1 ring-line">
                  <span className="font-display text-[12.5px] font-bold uppercase tracking-[0.14em] text-accent">
                    Watch for it
                  </span>
                  <span className="mt-2 block">{ch.watch}</span>
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </Block>

      {/* ---- The checklist ---- */}
      <Block
        eyebrow="Checklist"
        title="Before you call it done"
        intro="Every guide ends here rather than in a summary. If a line below is not true yet, that is the next thing to do."
        ground="sunken"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {guide.checklist.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 40} y={8} className="card flex gap-4 p-6">
              <span
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 rounded border border-line-strong"
              />
              <span className="text-[16px] leading-[1.7] text-body">{item}</span>
            </Reveal>
          ))}
        </ul>
      </Block>

      <FaqSection
        title="Questions about this guide"
        items={guideFaqs[guide.slug] ?? []}
        ground="canvas"
      />

      {/* ---- Continue ---- */}
      <Block
        eyebrow="Next step"
        title="Work through this against your own setup"
        intro="The checklist above is generic by necessity. Bring your own structures, states and rota and we will tell you which lines are already true and which are not."
        ground="canvas"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/company/contact-hrmagix">Talk it through</Button>
          <Button href="/resources/hr-guides" variant="outline">
            All guides
          </Button>
        </div>
      </Block>

      <Block eyebrow="Guides" title="The other guides" ground="sunken">
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {others.map((o, i) => (
            <Reveal as="li" key={o.slug} delay={i * 60} y={10}>
              <Link
                href={`/resources/hr-guides/${o.slug}`}
                className="card card-hover group flex h-full flex-col gap-2 p-6"
              >
                <span className="font-mono text-[12.5px] font-semibold text-accent">
                  {o.number}
                </span>
                <span className="flex-1 font-display text-[16.5px] font-bold text-heading transition-colors group-hover:text-accent">
                  {o.title}
                </span>              </Link>
            </Reveal>
          ))}
        </ul>
      </Block>

      <Onward links={guide.related} />
    </>
  );
}

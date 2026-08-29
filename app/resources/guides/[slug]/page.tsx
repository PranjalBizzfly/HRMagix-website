import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, guideBySlug } from "@/lib/guides";
import { Band, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
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
    alternates: { canonical: `/resources/guides/${g.slug}` },
    openGraph: {
      title: `${g.title} · HRMagix`,
      description: g.seo.description,
      url: `/resources/guides/${g.slug}`,
      siteName: "HRMagix",
      type: "article",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
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
      <header className="border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Guides", href: "/resources/guides" },
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
                {guide.chapters.length} chapters &middot; about {guide.minutes} minutes
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

      {/* ---- Who it is for ---- */}
      <Band ground="surface" size="sm">
        <Reveal y={10}>
          <dl className="grid gap-x-12 gap-y-6 border-y border-line py-7 sm:grid-cols-2">
            <div>
              <dt className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                Written for
              </dt>
              <dd className="mt-2.5 max-w-md text-[15.5px] leading-[1.68] text-muted">
                {guide.audience}
              </dd>
            </div>
            <div>
              <dt className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                You will be able to
              </dt>
              <dd className="mt-2.5 max-w-md text-[15.5px] leading-[1.68] text-muted">
                {guide.outcome}
              </dd>
            </div>
          </dl>
        </Reveal>
      </Band>

      {/* ---- Chapters ---- */}
      <Band ground="surface" size="md">
        <div className="max-w-[74ch]">
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
      </Band>

      {/* ---- The checklist ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">Before you call it done</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              Every guide ends here rather than in a summary. If a line below is not true yet, that
              is the next thing to do.
            </p>
          </Reveal>

          <ul className="min-w-0 divide-y divide-line border-y border-line-strong">
            {guide.checklist.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 40} y={8} className="flex gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 rounded border border-line-strong"
                />
                <span className="text-[16px] leading-[1.7] text-body">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Band>

      {/* ---- Continue ---- */}
      <Band ground="surface" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[20ch]">
              Work through this against your own setup
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              The checklist above is generic by necessity. Bring your own structures, states and
              rota and we will tell you which lines are already true and which are not.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/company/contact">Talk it through</Button>
            <Button href="/resources/guides" variant="outline">
              All guides
            </Button>
          </div>
        </div>
      </Band>

      <Band ground="sunken" size="sm">
        <Reveal y={10}>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
            The other guides
          </p>
          <ul className="mt-5 divide-y divide-line border-t border-line">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/resources/guides/${o.slug}`}
                  className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-[12.5px] font-semibold text-accent">
                    {o.number}
                  </span>
                  <span className="font-display text-[16.5px] font-bold text-heading transition-colors group-hover:text-accent">
                    {o.title}
                  </span>
                  <span className="text-[13.5px] text-subtle">about {o.minutes} minutes</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Band>

      <Onward links={guide.related} />
    </>
  );
}

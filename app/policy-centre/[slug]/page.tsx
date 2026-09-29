import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { legalFaqs } from "@/lib/pageFaqs/legal";
import { notFound } from "next/navigation";
import { legalPages, legalBySlug } from "@/lib/policies";
import { Onward } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = legalBySlug(slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: p.href },
  };
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalBySlug(slug);
  if (!page) notFound();

  const others = legalPages.filter((p) => p.slug !== slug);

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot={`policy-${page.slug}`} cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Policy Centre", href: "/policy-centre" },
                { label: page.name },
              ]}
            />
          </Reveal>
          <h1 className="display display-md mt-7 max-w-[20ch] text-balance">{page.title}</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.68] text-body">{page.standfirst}</p>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <div className="card grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12 lg:p-10">
          {/* Contents rail — legal pages are scanned, not read start to finish. */}
          <nav aria-label="On this page" className="lg:sticky lg:top-[110px] lg:self-start">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
              On this page
            </p>
            <ol className="mt-4 space-y-2.5 border-l border-line pl-4">
              {page.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s${i + 1}`}
                    className="text-[14px] leading-snug text-muted transition-colors hover:text-accent"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            {page.sections.map((s, i) => (
              <Reveal
                as="section"
                key={s.heading}
                id={`s${i + 1}`}
                y={12}
                className="scroll-mt-28 border-t border-line py-8 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-[20px] font-bold leading-snug tracking-[-0.02em] text-heading">
                  <span aria-hidden="true" className="mr-3 font-normal text-line-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-4 text-[16px] leading-[1.75] text-muted">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[15.5px] leading-[1.65] text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Block>

      {legalFaqs[page.slug] && (
        <FaqSection
          title={`${page.name}: common questions`}
          items={legalFaqs[page.slug]}
          ground="sunken"
          more={null}
        />
      )}

      <Onward
        title="Other policies"
        links={others.slice(0, 3).map((p) => ({
          label: p.name,
          href: p.href,
          note: p.seo.description,
        }))}
      />
    </>
  );
}

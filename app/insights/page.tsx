import type { Metadata } from "next";
import { SiteStats, CtaBand, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import Link from "next/link";
import { sorted, featured, categories, byCategory } from "@/lib/blog";
import { Opening } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Insights: Indian Payroll & People Operations",
  description:
    "Long-form writing on Indian payroll and people operations: ESI's moving wage base, multi-state Professional Tax, comp-off, the sandwich rule and payslips.",
  keywords: [

  ],
  alternates: { canonical: "/insights" },
};

/**
 * Insights — the listing.
 *
 * Three deliberately different treatments down one page, because a uniform grid
 * of article cards is exactly the pattern this site avoids:
 *
 *   1. The lead piece gets a full editorial spread with its photograph.
 *   2. The rest of the archive is a ruled index — title, reader, length — with
 *      no thumbnails at all, because a reader scanning eight technical pieces
 *      is reading titles, not looking at pictures.
 *   3. Categories are a written directory with a real description each, not a
 *      row of filter pills.
 */
export default function BlogIndex() {
  const rest = sorted.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="blog-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>
        {/* Editorial glowing ambient wash */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[680px] rounded-full bg-glow/18 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-20 h-[340px] w-[500px] rounded-full bg-violet-400/8 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Statutory Research & Analysis
            </span>
          </Reveal>
          <h1 className="display display-xl mt-5 max-w-[15ch] text-balance">
            Insights on <strong>the work itself</strong>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
            Writing about Indian payroll and people operations for the person doing the job,
            the payroll lead closing a cutoff, the plant head with three shift patterns, the founder
            who has not written a leave policy yet.
          </p>
        </div>
      </header>

      <SiteStats />

      {/* ---- Lead piece: full editorial spread ---- */}
      <Block eyebrow="Latest" title={featured.category}>
        <div className="card grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div>
            <Reveal y={12}>
              <h3 className="display display-md max-w-[18ch]">
                <Link
                  href={`/insights/${featured.slug}`}
                  className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  {featured.title}
                </Link>
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-muted">
                {featured.standfirst}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                    Written for
                  </dt>
                  <dd className="mt-1.5 max-w-[28ch] text-[14.5px] text-heading">
                    {featured.reader}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                    Length
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] text-heading">{featured.minutes} min read</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={240}>
              <Link
                href={`/insights/${featured.slug}`}
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                Read the article <Arrow />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140} y={22}>
            <Link href={`/insights/${featured.slug}`} className="group block">
              <Photo slot={featured.image} ratio="4 / 3" sizes="(max-width: 1024px) 100vw, 560px" />
            </Link>
          </Reveal>
        </div>
      </Block>

      {/* ---- The archive: a ruled index, no thumbnails ---- */}
      <Block
        eyebrow="Archive"
        title="Everything else"
        intro="Set as an index rather than a wall of cards, when the subjects are this close together, titles and readers tell you more than thumbnails do."
        ground="sunken"
      >
        <ol className="card divide-y divide-line px-6 sm:px-8">
          {rest.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 45} y={12}>
              <Link
                href={`/insights/${a.slug}`}
                className="group grid gap-3 py-7 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_auto] lg:items-baseline lg:gap-10"
              >
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent">
                  {a.category}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[19px] font-bold leading-snug text-heading transition-colors group-hover:text-accent">
                    {a.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-[15px] leading-[1.65] text-muted">
                    {a.standfirst}
                  </span>
                  <span className="mt-3 block text-[13px] text-subtle">
                    Written for {a.reader.toLowerCase()}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-4 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
                  {a.minutes} min
                  <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Block>

      {/* ---- Categories as a written directory ---- */}
      <Block eyebrow="Subjects" title="By subject">
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {categories.map((c, i) => {
            const items = byCategory(c.name);
            if (!items.length) return null;
            return (
              <Reveal key={c.name} delay={i * 60} y={12} className="card card-hover p-6">
                <h3 className="font-display text-[18px] font-bold text-heading">
                  <Link
                    href={`/insights/category/${c.name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                    className="transition-colors hover:text-accent"
                  >
                    {c.name}
                  </Link>
                </h3>
                <p className="mt-2.5 max-w-lg text-[15px] leading-[1.68] text-muted">{c.blurb}</p>
                <ul className="mt-5 space-y-2.5">
                  {items.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/insights/${a.slug}`}
                        className="group flex gap-3 text-[15px] leading-[1.6] text-muted transition-colors hover:text-accent"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                        />
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Block>

      <Block ground="sunken">
        <Opening
          label="On sourcing"
          paragraphs={[
            "Everything in this section draws on one of three things: a provision of Indian law, a published HRMagix product capability, or the structural logic of the problem being described. Each is labelled as such where it appears.",
            "There is no research programme behind this writing and it does not pretend there is. You will not find survey data, industry benchmarks, percentage improvements or customer anecdotes here, because HRMagix has published none and estimating them would make the rest of the writing worth less.",
          ]}
        />
        <Reveal delay={180} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/resources/white-papers">Read the white papers</Button>
          <Button href="/resources/calculator" variant="outline">
            Use the calculators
          </Button>
        </Reveal>
      </Block>
      <FaqSection items={resourcesFaqs["/insights"]} ground="canvas" />

      <CtaBand title={<>See HRMagix run on <strong>your own payroll month</strong></>} />
    </>
  );
}

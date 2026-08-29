import type { Metadata } from "next";
import Link from "next/link";
import { whitePapers } from "@/lib/papers";
import { sorted as articles } from "@/lib/blog";
import { resourcesNav } from "@/lib/nav";
import { Band, Opening } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Resources — Papers, Calculators & Answers",
  description:
    "Long-form briefings on Indian payroll and people operations, salary and statutory calculators, a media room, and every question asked before a first demo.",
  alternates: { canonical: "/resources" },
};

/**
 * The resource centre.
 *
 * Deliberately plain. The point of this page is to get out of the way in one
 * screen, so it is a table of contents rather than a designed experience —
 * which also makes it the one page on the site with no photograph at all.
 */
export default function ResourcesHub() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="border-b border-line bg-surface-sunken pb-14 pt-[104px] sm:pb-16 sm:pt-[132px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          </Reveal>
          <h1 className="display display-xl mt-8 max-w-[16ch] text-balance">
            Everything useful, <strong>with nothing in front of it</strong>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
            No email gates, no download forms and no lead-capture wall. If a paper here is worth
            reading, it is worth reading without giving us your address first.
          </p>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
          {resourcesNav.flatMap((c) => c.links).map((link, i) => (
            <Reveal as="li" key={link.href} delay={i * 60} y={12} className="bg-surface">
              <Link
                href={link.href}
                className="group flex h-full flex-col gap-3 p-7 transition-colors hover:bg-surface-raised/50 sm:p-9"
              >
                <span className="flex items-center gap-2 font-display text-[20px] font-bold text-heading transition-colors group-hover:text-accent">
                  {link.label}
                  <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </span>
                <span className="text-[15px] leading-[1.65] text-muted">{link.note}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Band>

      <Band ground="sunken" size="lg">
        <Opening
          label="On format"
          paragraphs={[
            "These briefings are published as web pages rather than PDFs. That is a considered choice: a PDF behind a form is a lead-generation artefact wearing the clothes of a research paper, and the reader can usually tell.",
            "Each one is written for a specific person doing a specific job — a payroll lead closing a cutoff, a founder with no HR function, a plant head with three shift patterns — and says plainly what is a provision of law, what is a product capability, and what is an opinion.",
          ]}
        />

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {whitePapers.map((paper, i) => (
            <Reveal
              as="li"
              key={paper.slug}
              delay={i * 55}
              y={12}
              className="grid gap-3 py-7 lg:grid-cols-[minmax(0,3rem)_minmax(0,1fr)_auto] lg:items-baseline lg:gap-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-[22px] font-light leading-none text-line-accent"
              >
                {paper.number}
              </span>
              <span className="min-w-0">
                <Link
                  href={`/resources/white-papers/${paper.slug}`}
                  className="group inline-flex items-center gap-2 font-display text-[18px] font-bold text-heading transition-colors hover:text-accent"
                >
                  {paper.title}
                  <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </Link>
                <span className="mt-2 block max-w-2xl text-[15px] leading-[1.6] text-muted">
                  {paper.reader}
                </span>
              </span>
              <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
                {paper.minutes} min
              </span>
            </Reveal>
          ))}
        </ol>
      </Band>

      {/* ---- Latest from Insights: titles only, so the hub stays an index ---- */}
      <Band ground="surface" size="lg">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <Reveal y={12}>
            <h2 className="display display-md max-w-[18ch]">Latest from Insights</h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              Shorter than the papers and written as arguments rather than references — on ESI
              against a moving wage base, multi-state Professional Tax, comp-off and the sandwich
              rule.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent"
            >
              All {articles.length} articles <Arrow />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {articles.slice(0, 4).map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 45} y={10}>
              <Link
                href={`/blog/${a.slug}`}
                className="group grid gap-2 py-5 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_auto] lg:items-baseline lg:gap-8"
              >
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent">
                  {a.category}
                </span>
                <span className="font-display text-[16.5px] font-semibold leading-snug text-heading transition-colors group-hover:text-accent">
                  {a.title}
                </span>
                <span className="whitespace-nowrap text-[13px] text-subtle">{a.minutes} min</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Band>

      <Band ground="raised" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[18ch]">
              Looking for something that is not here?
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              If it is a question about how a particular statutory head is implemented, the fastest
              route is to ask the specialists in Pune rather than to hunt for a document.
            </p>
          </div>
          <Button href="/company/contact">Ask the team</Button>
        </div>
      </Band>
    </>
  );
}

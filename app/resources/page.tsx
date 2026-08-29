import type { Metadata } from "next";
import Link from "next/link";
import { whitePapers } from "@/lib/resources";
import { resourcesNav } from "@/lib/nav";
import { Band, Opening } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";

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
                  href={`/resources/white-papers#${paper.slug}`}
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

      <Band ground="surface" size="md">
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

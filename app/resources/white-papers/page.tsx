import type { Metadata } from "next";
import Link from "next/link";
import { whitePapers } from "@/lib/resources";
import { Band, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "White Papers on Indian Payroll & People Operations",
  description:
    "Five long-form briefings: payroll as a chain of custody, multi-state compliance, the manufacturing exceptions engine, the startup policy vacuum, and the arithmetic of employee self-service.",
  keywords: [
    "payroll compliance",
    "payroll processing software",
    "HR automation software",
    "employee lifecycle management",
  ],
  alternates: { canonical: "/resources/white-papers" },
};

/**
 * White papers.
 *
 * Each paper is presented as an abstract plus its full table of contents, with
 * links into the pages on this site where the subject is treated at length.
 * That is the honest arrangement: HRMagix publishes no gated PDF library, and
 * inventing one — complete with download counts and a form — would be exactly
 * the kind of fabrication this rebuild exists to avoid.
 *
 * The layout is a reading list: numbered, ruled, one column, with the contents
 * of each paper indented under it. No cards.
 */
export default function WhitePapersPage() {
  return (
    <>
      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "White Papers" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[17ch] text-balance">
                Five briefings, <strong>none of them behind a form</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                Written for the person doing the job rather than the person approving the purchase.
                Each states plainly which parts are provisions of Indian law, which are HRMagix
                capabilities, and which are opinion.
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo
                slot="white-papers"
                ratio="4 / 3"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </Reveal>
          </div>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <div className="space-y-0 divide-y divide-line border-y border-line">
          {whitePapers.map((paper) => (
            <Reveal key={paper.slug} y={16} as="article" id={paper.slug} className="scroll-mt-28 py-12 sm:py-14">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <span
                      aria-hidden="true"
                      className="font-display text-[34px] font-light leading-none text-line-accent"
                    >
                      {paper.number}
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-subtle">
                      {paper.minutes} minute read
                    </span>
                  </div>

                  <h2 className="display display-md mt-5 max-w-[20ch]">{paper.title}</h2>

                  <p className="mt-4 text-[14px] font-semibold text-accent">
                    Written for: {paper.reader}
                  </p>

                  {paper.abstract.map((p, i) => (
                    <p key={i} className="mt-5 max-w-2xl text-[16.5px] leading-[1.72] text-muted">
                      {p}
                    </p>
                  ))}

                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                    {paper.readOn.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent transition-colors hover:text-accent-strong"
                      >
                        {r.label} <Arrow />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="lg:pt-6">
                  <h3 className="border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
                    Contents
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {paper.contents.map((c, i) => (
                      <li key={c.heading} className="flex gap-3.5">
                        <span
                          aria-hidden="true"
                          className="mt-[3px] font-display text-[12px] font-bold tabular-nums text-subtle"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[14.5px] font-semibold leading-snug text-heading">
                            {c.heading}
                          </span>
                          <span className="mt-1 block text-[13.5px] leading-snug text-subtle">
                            {c.summary}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      <Band ground="sunken" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-subtle">
            A note on what these are
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">
            These are briefings published on this website, not downloadable PDFs held in a resource
            library. HRMagix does not operate a gated document archive, so this page does not
            pretend to be one — the full treatment of each subject lives on the solution and
            industry pages linked under each abstract, and is free to read.
          </p>
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "Salary & compliance calculators",
            href: "/resources/calculator",
            note: "Put the numbers from these briefings against your own figures.",
          },
          {
            label: "Questions & answers",
            href: "/resources/faqs",
            note: "Shorter, more specific, and organised by subject.",
          },
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "The subject of the first briefing, treated in full.",
          },
        ]}
      />
    </>
  );
}

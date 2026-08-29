import type { Metadata } from "next";
import Link from "next/link";
import { whitePapers, anyDownloadable } from "@/lib/papers";
import { Band, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "White Papers on Indian Payroll & People Operations",
  description:
    "Five technical briefings: payroll as a chain of custody, multi-state compliance, the manufacturing exceptions engine, the startup policy vacuum, and the arithmetic of employee self-service.",
  keywords: [
    "payroll compliance",
    "payroll processing software",
    "HR automation software",
    "employee lifecycle management",
  ],
  alternates: { canonical: "/resources/white-papers" },
};

/**
 * The white paper index.
 *
 * Set as a reference shelf: number, title, subtitle, reader, length and the
 * document's own table of contents, so someone can decide from this page
 * whether a paper answers their question before opening it.
 *
 * No download control appears anywhere, because `anyDownloadable` is false —
 * there are no PDFs behind these and the page does not imply otherwise.
 */
export default function WhitePapersPage() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

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
              <Photo slot="white-papers" ratio="4 / 5" sizes="(max-width: 1024px) 100vw, 420px" />
            </Reveal>
          </div>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <div className="divide-y divide-line border-y border-line">
          {whitePapers.map((paper) => (
            <Reveal key={paper.slug} y={16} as="article" className="py-12 sm:py-14">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:gap-16">
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

                  <h2 className="display display-md mt-5 max-w-[20ch]">
                    <Link
                      href={`/resources/white-papers/${paper.slug}`}
                      className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {paper.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 text-[16px] italic text-muted">{paper.subtitle}</p>

                  <p className="mt-5 text-[14px] font-semibold text-accent">
                    Written for: {paper.reader}
                  </p>

                  {paper.abstract.map((p, i) => (
                    <p key={i} className="mt-5 max-w-2xl text-[16.5px] leading-[1.72] text-muted">
                      {p}
                    </p>
                  ))}

                  <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                    <Link
                      href={`/resources/white-papers/${paper.slug}`}
                      className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-accent-strong"
                    >
                      Read the full paper <Arrow />
                    </Link>
                    {paper.readOn.slice(0, 1).map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="text-[14px] font-medium text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {r.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="lg:pt-6">
                  <h3 className="border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
                    Contents
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {paper.sections.map((s, i) => (
                      <li key={s.heading} className="flex gap-3.5">
                        <span
                          aria-hidden="true"
                          className="mt-[3px] font-display text-[12px] font-bold tabular-nums text-subtle"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[14.5px] font-semibold leading-snug text-heading">
                            {s.heading}
                          </span>
                          <span className="mt-1 block text-[13.5px] leading-snug text-subtle">
                            {s.summary}
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
            On format
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">
            These are readable web documents rather than downloadable PDFs, and there is no email
            gate in front of any of them. HRMagix does not operate a gated document archive, so this
            page does not present one — no download control appears above because there is nothing
            to download.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            Each paper is complete on its own page. Nothing has been held back for a version you
            have to ask for.
          </p>
          {anyDownloadable && (
            <p className="mt-4 text-[15px] text-accent">
              Downloadable versions are available on the papers that offer them.
            </p>
          )}
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "Insights",
            href: "/blog",
            note: "Shorter pieces on the same subjects, written as arguments rather than references.",
          },
          {
            label: "Calculators",
            href: "/resources/calculator",
            note: "Put the figures from these papers against your own numbers.",
          },
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "The subject of the first paper, treated as a product page.",
          },
        ]}
      />
    </>
  );
}

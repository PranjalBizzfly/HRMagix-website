import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import Link from "next/link";
import { whitePapers, anyDownloadable } from "@/lib/papers";
import { Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "White Papers on Indian Payroll & People Operations",
  description:
    "Five technical briefings: payroll as a chain of custody, multi-state compliance, the manufacturing exceptions engine, the startup policy vacuum, self-service.",
  keywords: [

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

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="resources-whitepapers-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
              <div className="card border-line/60 bg-surface/85 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-lift">
                <span className="text-[12px] font-bold uppercase tracking-wider text-accent-soft">
                  Open-Access Briefings
                </span>
                <p className="font-display text-lg font-bold text-heading mt-2">
                  Statutory analysis without email paywalls
                </p>
                <p className="text-[14px] text-body mt-2 leading-relaxed">
                  Payroll custody, multi-state compliance, attendance exceptions, policy gaps and self-service, each marking what is law, what is HRMagix and what is opinion.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <div className="grid gap-5 lg:gap-6">
          {whitePapers.map((paper) => (
            <Reveal key={paper.slug} y={16} as="article" className="card card-hover p-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <span
                      aria-hidden="true"
                      className="font-display text-[34px] font-light leading-none text-line-accent"
                    >
                      {paper.number}
                    </span>                  </div>

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
      </Block>

      <Block eyebrow="Format" title="On format" ground="sunken">
        <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            These are readable web documents rather than downloadable PDFs, and there is no email
            gate in front of any of them. HRMagix does not operate a gated document archive, so this
            page does not present one, no download control appears above because there is nothing
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
      </Block>

      <FaqSection items={resourcesFaqs["/resources/white-papers"]} ground="canvas" />

      <Onward
        links={[
          {
            label: "Insights",
            href: "/insights",
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

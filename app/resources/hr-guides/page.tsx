import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "HR Guides",
  description:
    "Practical guides for Indian HR and payroll teams: running a first payroll in a new system, writing a leave policy, and attendance for workforces not at a desk.",
  keywords: [

  ],
  alternates: { canonical: "/resources/hr-guides" },
  openGraph: {
    title: "HR Guides · HRMagix",
    description:
      "Chaptered, instructional guides for people who have been handed a task rather than a topic.",
    url: "/resources/hr-guides",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
  },
};

/**
 * THE GUIDES INDEX.
 *
 * Set as a contents page for a handbook rather than a feed of articles: a
 * numbered list where each entry states who it is for and what you will be
 * able to do afterwards, which are the two things that decide whether it is
 * worth your afternoon. No photographs, no excerpt teasers, no cards.
 */
export default function GuidesPage() {
  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="resources-guides-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
                { label: "HR Guides" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8 max-w-3xl">
            <h1 className="display display-lg text-balance">
              Guides for people who have been handed a task
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              Longer and more instructional than the short pieces in Insights, and more practical
              than the white papers. Each one is chaptered in the order the work actually runs, and
              ends in a checklist rather than a conclusion, the test before publishing is whether
              somebody could do the thing afterwards.
            </p>
          </Reveal>
        </div>
      </header>

      <SiteStats />

      {/* ---- Contents ---- */}
      <Block eyebrow="Guides" title="Contents" ground="canvas">
        <ol className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {guides.map((g, i) => (
            <Reveal
              as="li"
              key={g.slug}
              delay={i * 60}
              y={12}
              className="card card-hover h-full p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-[minmax(0,3.5rem)_minmax(0,1fr)] sm:gap-6">
                <p className="font-display text-[30px] font-bold leading-none tracking-[-0.03em] text-line-accent">
                  {g.number}
                </p>

                <div className="min-w-0">
                  <h3 className="font-display text-[23px] font-bold leading-snug tracking-[-0.025em] text-heading sm:text-[26px]">
                    <Link
                      href={`/resources/hr-guides/${g.slug}`}
                      className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {g.title}
                    </Link>
                  </h3>

                  <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                        Written for
                      </dt>
                      <dd className="mt-2 text-[15.5px] leading-[1.68] text-muted">{g.audience}</dd>
                    </div>
                    <div>
                      <dt className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                        You will be able to
                      </dt>
                      <dd className="mt-2 text-[15.5px] leading-[1.68] text-muted">{g.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2">
                    <Link
                      href={`/resources/hr-guides/${g.slug}`}
                      className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
                    >
                      Read guide {g.number} <Arrow />
                    </Link>
                    <span className="text-[13.5px] text-subtle">
                      {g.chapters.length} chapters &middot; about {g.minutes} minutes
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Block>

      <Block eyebrow="Formats" title="How these differ from the other two formats" ground="sunken">
        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          <Reveal y={12} className="card card-hover h-full p-6">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            <Link href="/insights" className="font-semibold text-accent underline-offset-2 hover:underline">
              Insights
            </Link>{" "}
            are short and diagnostic, one mechanism, written because something specific goes wrong
            in a payroll month. Read one when you need to understand why a number came out the way
            it did.
          </p>
          </Reveal>
          <Reveal y={12} delay={70} className="card card-hover h-full p-6">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            <Link
              href="/resources/white-papers"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              White Papers
            </Link>{" "}
            are positions, arguments about how HR and payroll systems should be structured, which
            you are invited to disagree with. Read one when you are choosing an approach rather than
            fixing a problem.
          </p>
          </Reveal>
          <Reveal y={12} delay={140} className="card card-hover h-full p-6">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            Guides are instructional. Read one when the work is already yours and you would rather
            not discover the order of it by getting it wrong.
          </p>
          </Reveal>
        </div>
      </Block>

      <FaqSection items={resourcesFaqs["/resources/hr-guides"]} ground="canvas" />

      <Onward
        links={[
          {
            label: "HR & Payroll Glossary",
            href: "/resources/hr-and-payroll-glossary",
            note: "Definitions for the terms these guides use.",
          },
          {
            label: "Payroll Resources",
            href: "/resources/payroll-resources",
            note: "Everything payroll-specific, indexed by what you are trying to do.",
          },
          {
            label: "Calculators",
            href: "/resources/calculator",
            note: "Run the statutory formulas on your own numbers.",
          },
        ]}
      />
    </>
  );
}

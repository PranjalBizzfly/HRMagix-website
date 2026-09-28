import type { Metadata } from "next";
import { SiteStats, Block, ProcessTimeline, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import { policyRegister, policyCount, registerNotes } from "@/lib/policies";
import { detailByCode } from "@/lib/policyDetail";
import { suppliedCodes, pdfPath } from "@/lib/policyAssets";
import PolicyLibrary, { type PolicyRow } from "@/components/PolicyLibrary";
import { Opening, Onward } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Workplace Policy Library",
  description: `The ${policyCount} HR policy templates in the HRMagix Documents module, from conduct and leave to pay and separation, issued with acknowledgement tracked per version.`,
  keywords: [
    "HR policy templates",
    "employee handbook policies",
  ],
  alternates: { canonical: "/policy-centre/workplace-policy-library" },
};

/**
 * The workplace policy library index.
 *
 * Adapted from a supplied HR policy schedule of twenty-five rows: codes
 * renumbered to the HRMAGIX series, the originating company's name removed
 * throughout, and each entry described by the subject it governs.
 *
 * Every policy in the register links to its own page. That is the point of this
 * index — the register is a table of contents, not the content.
 */
export default function WorkplacePoliciesPage() {
  /*
   * Which policies actually have a document is read from disk at build time,
   * so a row can never link to a PDF that is not there.
   */
  const supplied = suppliedCodes();
  const rows: PolicyRow[] = policyRegister.flatMap((group) =>
    group.entries.map((entry) => ({
      code: entry.code,
      name: entry.name,
      covers: entry.covers,
      group: group.title,
      slug: detailByCode(entry.code)?.slug,
      pdf: pdfPath(entry.code),
    })),
  );

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="policy-workplace-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
                { label: "Workplace Policy Library" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[17ch] text-balance">
                {policyCount} policies, <strong>ready to make your own</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                A code of conduct and {policyCount - 1} workplace policies, shipped as templates
                inside the Documents module, issued to your employees, acknowledged per person, and
                versioned so a revision does not inherit an old acceptance.
              </p>
              <p className="mt-5 text-[15px] text-subtle">
                Every policy below has its own page setting out its purpose, who it applies to, the
                decisions you write into it, and what the platform records.
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <div className="card border-line/60 bg-surface/85 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-lift">
                <span className="text-[12px] font-bold uppercase tracking-wider text-accent-soft">
                  Statutory Policy Register
                </span>
                <p className="font-display text-lg font-bold text-heading mt-2">
                  25 Indian statutory workplace templates
                </p>
                <p className="text-[14px] text-body mt-2 leading-relaxed">
                  Code of conduct, sexual harassment (POSH), maternity benefit, leave, gratuity and exit policies, with acknowledgement tracked per employee per version.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      <Block eyebrow="Start here" title="Read this first" ground="canvas">
        <div className="mx-auto max-w-3xl">
          <Opening paragraphs={registerNotes.what} />
        </div>
      </Block>

      <Block eyebrow="Process" title="How a policy becomes an obligation" ground="sunken">
        <ProcessTimeline steps={registerNotes.how.map((s) => ({ title: s.step, body: s.body }))} />
      </Block>

      {/* ---- The document library ---- */}
      <Block id="library" ground="canvas">
        <PolicyLibrary rows={rows} supplied={supplied} />
      </Block>

      <Block eyebrow="Limits" title="What this library does not tell you" ground="sunken">
        <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            It does not state a notice period, a grace window for late arrival, an increment cycle or
            a probation length. Those are the operative rules, and they belong to each employer
            rather than to a template library. The source schedule these are adapted from lists
            policy names and codes; it does not contain the body of any policy, and inventing one
            here would put words into your document that you did not choose.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            These templates are a starting structure, not legal advice. Have your own advisers review
            the final text against the states you operate in before you issue it.
          </p>
        </Reveal>
      </Block>

      <FaqSection items={resourcesFaqs["/policy-centre/workplace-policy-library"]} ground="canvas" />

      <Onward
        links={[
          {
            label: "Employee Management",
            href: "/solutions/employee-management",
            note: "How acknowledgement is recorded and versioned.",
          },
          {
            label: "Onboarding & Lifecycle",
            href: "/solutions/onboarding-and-lifecycle",
            note: "Where most policies are issued for the first time.",
          },
          {
            label: "Policy Centre",
            href: "/policy-centre",
            note: "HRMagix's own privacy, terms and security pages.",
          },
        ]}
      />
    </>
  );
}

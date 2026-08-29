import type { Metadata } from "next";
import Link from "next/link";
import { policyRegister, policyCount, registerNotes } from "@/lib/policies";
import { detailByCode } from "@/lib/policyDetail";
import { suppliedCodes, pdfPath } from "@/lib/policyAssets";
import PolicyLibrary, { type PolicyRow } from "@/components/PolicyLibrary";
import { Band, Opening, Onward } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Workplace Policy Library",
  description: `The ${policyCount} HR policy templates HRMagix ships in the Documents module — conduct, attendance, leave, performance, pay and separation — each with its own page, issued to employees with acknowledgement tracked per version.`,
  keywords: [
    "HR policy templates",
    "employee handbook policies",
    "employee management system",
    "HR onboarding system",
  ],
  alternates: { canonical: "/policy/workplace-policies" },
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
      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Policy", href: "/policy" },
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
                inside the Documents module — issued to your employees, acknowledged per person, and
                versioned so a revision does not inherit an old acceptance.
              </p>
              <p className="mt-5 text-[15px] text-subtle">
                Every policy below has its own page setting out its purpose, who it applies to, the
                decisions you write into it, and what the platform records.
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="policy" ratio="4 / 5" sizes="(max-width: 1024px) 100vw, 320px" />
            </Reveal>
          </div>
        </div>
      </header>

      <Band ground="surface" size="md">
        <Opening label="Read this first" paragraphs={registerNotes.what} />
      </Band>

      <Band ground="sunken" size="md">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">How a policy becomes an obligation</h2>
        </Reveal>
        <ol className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {registerNotes.how.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 70}
              y={12}
              className="border-t-2 border-line-accent pt-5"
            >
              <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-display text-[17px] font-bold text-heading">{s.step}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.68] text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Band>

      {/* ---- The document library ---- */}
      <Band ground="surface" size="lg" id="library">
        <PolicyLibrary rows={rows} supplied={supplied} />
      </Band>

      <Band ground="raised" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-subtle">
            What this library does not tell you
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">
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
      </Band>

      <Onward
        links={[
          {
            label: "Employee Management",
            href: "/solutions/employee-management",
            note: "How acknowledgement is recorded and versioned.",
          },
          {
            label: "Onboarding & Lifecycle",
            href: "/solutions/onboarding",
            note: "Where most policies are issued for the first time.",
          },
          {
            label: "Policy centre",
            href: "/policy",
            note: "HRMagix's own privacy, terms and security pages.",
          },
        ]}
      />
    </>
  );
}

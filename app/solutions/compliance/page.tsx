import type { Metadata } from "next";
import Link from "next/link";
import { Band, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Indian Statutory Compliance Engine — EPF, ESI, PT, LWF and TDS",
  description:
    "How HRMagix derives EPF, ESI, Professional Tax, Labour Welfare Fund and TDS inside the payroll run, and produces the ECR file, ESIC return, PT working, Form 24Q and Form 16 Part B from the same figures.",
  keywords: [
    "payroll software with PF ESI TDS",
    "payroll processing system",
    "payroll management system",
    "HRMS and payroll software",
    "HR software for companies",
  ],
  alternates: { canonical: "/solutions/compliance" },
  openGraph: {
    title: "Indian Statutory Compliance Engine · HRMagix",
    description:
      "EPF, ESI, PT, LWF and TDS derived inside the payroll run, with the returns produced from the same figures.",
    url: "/solutions/compliance",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
  },
};

/**
 * THE STATUTORY ENGINE.
 *
 * Structured as a reference document rather than as a narrative, because that
 * is how it will actually be read: someone arrives wanting to know how one
 * head is treated, not to be persuaded. The register comes first, the filing
 * rhythm second, and the argument for derivation last — the reverse of every
 * other page on the site.
 *
 * Only rates fixed by central statute are stated as numbers. Professional Tax
 * and Labour Welfare Fund are state subjects, so the register describes how
 * they are handled and refuses to print a slab; stating one would make a page
 * that is wrong in most of India.
 */

const register = [
  {
    head: "EPF",
    full: "Employees' Provident Fund",
    applies:
      "Generally from twenty employees in a covered establishment, and by voluntary coverage below that where the employer has opted in.",
    basis:
      "12% of the PF wage from the employee and 12% from the employer, of which 8.33% is diverted to the pension scheme within the statutory ceiling. The PF wage is basic plus dearness allowance, subject to the ₹15,000 ceiling where the employer applies it.",
    output: "EPFO-ready electronic challan receipt (ECR) text file",
  },
  {
    head: "ESI",
    full: "Employees' State Insurance",
    applies:
      "Generally from ten employees in a covered establishment, for employees whose monthly gross is at or below the ₹21,000 threshold.",
    basis:
      "0.75% of gross from the employee and 3.25% from the employer. Eligibility is fixed for the whole contribution period rather than retested monthly, which is the single most misunderstood rule in the head.",
    output: "ESIC monthly contribution return and challan report",
  },
  {
    head: "PT",
    full: "Professional Tax",
    applies:
      "In the states that levy it, on the registration the employer holds in each state where it employs people. Commonly applicable from the first employee.",
    basis:
      "A state subject. Slabs, exemptions and periodicity differ by state, and at least one state deducts a different amount in a single month of the year. HRMagix applies the slab configured for the registration rather than a national assumption.",
    output: "State-wise PT working, per registration",
  },
  {
    head: "LWF",
    full: "Labour Welfare Fund",
    applies:
      "In the states that operate a fund, at the periodicity that state sets — half-yearly and annual cycles are both common.",
    basis:
      "Also a state subject, with employer and employee shares set by the state. Deadlines are matched to the state cycle and applied inside the run rather than remembered separately.",
    output: "State LWF statement",
  },
  {
    head: "TDS",
    full: "Tax deducted at source on salary, Section 192",
    applies:
      "Where an employee's projected annual income for the financial year exceeds the exemption limit.",
    basis:
      "Projected across the remaining months of the financial year, against the employee's election between the old and new regimes and their verified declarations under 80C, 80D, HRA and home-loan interest. HR verification of proofs feeds the deduction schedule.",
    output: "Quarterly Form 24Q and annual Form 16 Part B",
  },
  {
    head: "Gratuity",
    full: "Payment of Gratuity Act",
    applies:
      "On separation, to employees who have completed five years of continuous service, and without that qualifying period in the case of death or disablement.",
    basis:
      "Fifteen days' wages per completed year on the last drawn basic, using the 26-day divisor. Provisioning runs alongside so the liability is visible before it falls due.",
    output: "Provision schedule and settlement working",
  },
];

const calendar = [
  {
    when: "As the month closes",
    what: "Attendance, approved leave and overtime stop feeding the run",
    why: "Every statutory figure is computed on wages, and wages depend on paid days. The cut-off is therefore an attendance decision before it is a payroll one.",
  },
  {
    when: "On processing",
    what: "Each head is derived from the salary structure and the registrations held",
    why: "Nothing is entered. A rate cannot be stale, because it is not stored twice — the deduction is computed from the structure at the moment the run executes.",
  },
  {
    when: "With the run",
    what: "Payslips, the bank transfer batch and every statutory file are produced together",
    why: "The return and the ledger are built from one set of figures, so they cannot disagree. A reconciliation step between them would only exist if they had been calculated separately.",
  },
  {
    when: "Monthly",
    what: "ECR and the ESIC contribution return go out against their registrations",
    why: "Both are per-establishment obligations with fixed dates that do not move because the month was busy.",
  },
  {
    when: "Quarterly",
    what: "Form 24Q reports the TDS deducted and deposited",
    why: "It reconciles to the deductions the runs actually made, which is why the run and the return share a source.",
  },
  {
    when: "Annually",
    what: "Form 16 Part B is issued to employees",
    why: "It has to reconcile across the whole financial year regardless of which system produced each month of it — the reason a mid-year migration must carry year-to-date figures across.",
  },
];

const faqs = [
  {
    q: "Are statutory rates entered by us, or built in?",
    a: "The rates fixed by central statute — EPF at 12% each side, EPS at 8.33% within the employer share, ESI at 0.75% and 3.25% — are built in. What you supply is the registrations you hold and the salary structure, because those decide applicability and the wage base. State heads work differently: see the next answer.",
  },
  {
    q: "How are Professional Tax and Labour Welfare Fund handled if they differ by state?",
    a: "By configuration against the registration, not by a national default. PT and LWF are state subjects whose slabs, exemptions and periodicity differ, so the platform applies the schedule attached to the registration for the state an employee works in. A product that printed one PT slab would be wrong in most of India.",
  },
  {
    q: "Why does ESI eligibility not change when someone's salary crosses the threshold mid-year?",
    a: "Because eligibility is fixed for the contribution period rather than retested each month. An employee who is covered at the start of a period stays covered for its duration even if a revision takes their gross above the threshold partway through. Treating it as a monthly test is a common and expensive error.",
  },
  {
    q: "Does the old-versus-new regime choice belong to us or to the employee?",
    a: "To the employee. They make the election and submit declarations under 80C, 80D, HRA and home-loan interest through the self-service portal, where they can compare the two regimes on their own salary. Your side is verification of proofs, which then feeds the deduction schedule for the remaining months.",
  },
  {
    q: "What happens to statutory figures when an increment is backdated?",
    a: "The affected months are recomputed and the difference is paid as an identified arrear. The arrear counts toward the PF wage of the month it is paid, and it moves the year-to-date figure the TDS projection is built on. The original payslips and the returns already filed against them stay as they were.",
  },
  {
    q: "Can one platform file for several legal entities?",
    a: "Each entity keeps its own EPF and ESI registrations, its own PT registrations by state, and its own run and returns. Statutory totals stay attached to the entity that owes them, because that is the level at which they are filed.",
  },
  {
    q: "Does HRMagix submit the returns for us?",
    a: "It produces the files the portals expect — the ECR text file, the ESIC contribution return, the PT working, Form 24Q and Form 16 Part B — from the run that generated the figures. Submission remains yours, which also means the numbers can be checked before anything is filed in your name.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <OnThisPage exclude={["Talk it through"]} />

      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Compliance" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8 max-w-3xl">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-accent">
              Indian statutory engine
            </p>
            <h1 className="display display-lg mt-5 text-balance">
              Five statutory heads, derived rather than declared
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              EPF, ESI, Professional Tax, Labour Welfare Fund and TDS are calculated inside the
              payroll run from the salary structure on the employee record and the registrations you
              hold — and the same run produces the files each authority expects. This page is a
              reference rather than an argument: the register first, the rhythm second.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-9 flex flex-wrap gap-3">
            <Button href="/company/contact">Talk to the compliance team</Button>
            <Button href="/resources/calculator" variant="outline">
              Check a figure yourself
            </Button>
          </Reveal>
        </div>
      </header>

      {/* ---- The register: reference table first ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">The register of heads</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Each head with the condition that brings it into play, the basis it is computed on, and
            the artefact the run produces. Rates are stated only where central statute fixes them.
          </p>
        </Reveal>

        <div className="mt-11 space-y-px overflow-hidden rounded-2xl ring-1 ring-line">
          {register.map((row, i) => (
            <Reveal
              key={row.head}
              delay={i * 45}
              y={10}
              className="bg-surface p-6 sm:p-7 lg:grid lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] lg:gap-10"
            >
              <div className="min-w-0">
                <p className="font-display text-[22px] font-bold tracking-[-0.02em] text-heading">
                  {row.head}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-subtle">{row.full}</p>
              </div>
              <div className="mt-4 min-w-0 lg:mt-0">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-subtle">
                  Applies
                </p>
                <p className="mt-1.5 text-[15.5px] leading-[1.7] text-muted">{row.applies}</p>

                <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.12em] text-subtle">
                  Basis
                </p>
                <p className="mt-1.5 text-[15.5px] leading-[1.7] text-muted">{row.basis}</p>

                <p className="mt-5 inline-flex items-center gap-2.5 text-[13.5px] font-semibold text-accent">
                  <span aria-hidden="true" className="h-px w-5 bg-line-accent" />
                  {row.output}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ---- The rhythm ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">When each thing happens</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Compliance is a calendar problem as much as an arithmetic one. This is the order the
            month runs in, and what each step exists for.
          </p>
        </Reveal>

        <div className="mt-11 max-w-4xl">
          {calendar.map((step, i) => (
            <Reveal
              key={step.what}
              delay={i * 50}
              y={12}
              className="grid gap-3 border-t border-line py-7 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-9"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.13em] text-accent">
                {step.when}
              </p>
              <div>
                <p className="font-display text-[17px] font-bold leading-snug text-heading">
                  {step.what}
                </p>
                <p className="mt-2.5 text-[15.5px] leading-[1.7] text-muted">{step.why}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ---- The boundary ---- */}
      <Band ground="raised" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="display display-md">Where the engine stops</h2>
          <p className="mt-6 text-[16.5px] leading-[1.72] text-muted">
            It computes and produces. It does not submit on your behalf, and it does not hold
            professional opinions. Filing stays with you, which also means every figure can be
            checked before anything goes out under your registration.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            It also does not decide applicability for you. Whether an establishment is covered,
            which state registrations you hold and whether you have opted into voluntary coverage
            are facts about your business that you supply. The engine applies them consistently —
            it cannot know them.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            Nothing on this page is tax or legal advice. The rates named are provisions of central
            statute, and the state heads are described as configurable precisely because printing a
            single slab for them would be wrong for most employers reading this.
          </p>
        </Reveal>
      </Band>

      {/* ---- Questions ---- */}
      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">Questions on the statutory heads</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              The ones that decide whether a payroll month closes cleanly.
            </p>
            <Link
              href="/resources/payroll"
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              All payroll resources <Arrow />
            </Link>
          </Reveal>
          <Accordion items={faqs} />
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "The run these heads are computed inside, month by month.",
          },
          {
            label: "Payroll resources",
            href: "/resources/payroll",
            note: "Calculators and articles for the heads described above.",
          },
          {
            label: "Workplace policy library",
            href: "/policy/workplace-policies",
            note: "The gratuity and leave policies these obligations sit alongside.",
          },
        ]}
      />
    </>
  );
}

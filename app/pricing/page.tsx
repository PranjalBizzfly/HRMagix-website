import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import Link from "next/link";
import { modules, plans, site } from "@/lib/content";
import { pricingSummary } from "@/lib/pricing";
import { Opening, Onward } from "@/components/editorial";
import { Check, Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    `Affordable payroll software for small business: three plans, per employee per month, ${pricingSummary()}. Fourteen-day trial, no setup fee.`,
  keywords: [
    "affordable payroll software for small business",
  ],
  alternates: { canonical: "/pricing" },
};

/** Derived directly from what each published plan lists — nothing added. */
const comparison = [
  { label: "Attendance & leaves", plans: [true, true, true] },
  { label: "Employee directory", plans: [true, true, true] },
  { label: "Documents & reminders", plans: [true, true, true] },
  { label: "Email support", plans: [true, true, true] },
  { label: "Payroll & performance", plans: [false, true, true] },
  { label: "OKRs, KRAs & 9-box", plans: [false, true, true] },
  { label: "Recognition & analytics", plans: [false, true, true] },
  { label: "Priority support", plans: [false, true, true] },
  { label: "SSO & advanced security", plans: [false, false, true] },
  { label: "Succession & lifecycle", plans: [false, false, true] },
  { label: "Dedicated success manager", plans: [false, false, true] },
];

export default function PricingPage() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="pricing-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Transparent Per-Employee Rates
            </span>
          </Reveal>
          <h1 className="display display-lg mt-5 max-w-[16ch] text-balance">
            Published rates, <strong>before you speak to anyone</strong>
          </h1>
          <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            Per employee, per month, across three plans. Every module lives on one platform, your
            plan decides which are switched on, and switching one on later is a setting rather than a
            migration.
          </p>
          <p className="mt-6 text-[14.5px] text-subtle">{site.trial}</p>
        </div>
      </header>

      <SiteStats />

      <Block
        eyebrow="Plans"
        title="Three plans, one platform"
        intro="Priced per employee, per month. The difference between them is which modules are switched on, not which product you are using."
        ground="canvas"
      >
        <Pricing />
        <p className="mt-8 text-center">
          <Link
            href="/calculators/plan-cost"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Work out your plan cost with the cost calculator <Arrow />
          </Link>
        </p>
      </Block>

      {/* ---- Comparison ---- */}
      <Block
        eyebrow="Compare"
        title="What is included where"
        intro="Exactly what each published plan lists, no asterisks, and nothing that appears only after a sales call."
        ground="sunken"
      >
        <Reveal delay={140} className="overflow-x-auto rounded-[24px] bg-surface p-1 shadow-soft ring-1 ring-line">
          <table className="w-full min-w-[580px] border-collapse text-left">
            <caption className="sr-only">HRMagix plan comparison</caption>
            <thead>
              <tr className="border-b border-line">
                <th
                  scope="col"
                  className="px-5 py-5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-label"
                >
                  Included
                </th>
                {plans.map((p) => (
                  <th key={p.name} scope="col" className="px-5 py-5">
                    <span className="block font-display text-[14.5px] font-bold text-heading">
                      {p.name}
                    </span>
                    <span className="mt-0.5 block text-[12px] font-normal text-subtle">
                      {p.price}
                      {p.unit ?? ""}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-line last:border-b-0 hover:bg-surface-sunken/60"
                >
                  <th scope="row" className="px-5 py-4 text-[14px] font-medium text-body">
                    {row.label}
                  </th>
                  {row.plans.map((on, i) => (
                    <td key={i} className="px-5 py-4">
                      {on ? (
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-white">
                          <Check className="h-3 w-3" />
                        </span>
                      ) : (
                        <span
                          className="block h-px w-4 bg-surface-strong"
                          aria-label="Not included"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={180} className="mt-6">
          <p className="text-[13.5px] text-subtle">
            All {modules.length} modules live on one platform.{" "}
            <Link href="/solutions#modules" className="font-semibold text-accent hover:underline">
              See what each one does
            </Link>
            .
          </p>
        </Reveal>
      </Block>

      {/* ---- Which plan, and on what basis ---- */}
      <Block
        eyebrow="Choosing"
        title="Which plan you actually need"
        intro="The dividing line between the plans is not company size. It is whether you are running payroll inside the platform, which is the point at which an HRMS stops being a record and starts being a system of consequence."
        ground="canvas"
      >
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Starter, if the problem is the record
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Attendance, leave, the employee directory and documents. This is the right
                starting point for a company whose payroll is small enough to be handled elsewhere
                but whose attendance and leave data has stopped being trustworthy, typically the
                point at which a spreadsheet has grown a second spreadsheet to explain it.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                It is also the sensible plan for a young company that wants the history to exist
                before the statutory thresholds arrive. Attendance and leave records accumulate
                from the day you start; they cannot be created retrospectively.
              </p>
            </section>

            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Growth, if the problem is the month end
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Everything in Starter, plus payroll, performance, OKRs, KRAs, 9-box, recognition
                and analytics. The reason payroll and analytics sit on the same plan is that they
                are the same data read twice, the cost figures in a report are the figures the
                run produced.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Most companies move here for one of two reasons: statutory filing has become a
                monthly event they cannot afford to get wrong, or the appraisal cycle has outgrown
                the spreadsheet it was run on. Either alone is sufficient.
              </p>
            </section>

            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Enterprise, if the problem is structural
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Everything in Growth, plus single sign-on and advanced security, succession and
                lifecycle, and a dedicated success manager. The trigger is usually organisational
                rather than numerical: several legal entities, an identity provider that every
                internal system is expected to sit behind, or a governance requirement that names
                succession planning explicitly.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                This is the plan that is quoted rather than published, because those requirements
                differ enough between companies that a single figure would be misleading.
              </p>
            </section>

            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Moving between plans
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Every module lives on one platform, so a change of plan switches modules on rather
                than migrating you onto a different product. The data you have already accumulated
                stays where it is, which is why starting on Starter does not cost you the
                attendance history you will want when payroll is switched on.
              </p>
            </section>
          </div>
      </Block>

      {/* ---- Estimator ---- */}
      <Block
        eyebrow="Estimate"
        title="Work out your monthly number"
        intro="Published rate times headcount. Nothing modelled, no projected savings, no ROI calculation dressed up as arithmetic."
        ground="sunken"
      >
        <Calculator />
        <p className="mt-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            href="/calculators/plan-cost"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Open the full plan cost calculator <Arrow />
          </Link>
          <Link
            href="/resources/calculator"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Salary, PF, ESI and gratuity calculators <Arrow />
          </Link>
        </p>
      </Block>

      {/* ---- What the price does and does not include ---- */}
      <Block ground="canvas">
        <Opening
          label="On the price"
          paragraphs={[
            "There is no setup fee and no implementation charge. The two-to-three-day setup, the Excel import templates, the policy validation and the dry-run payroll are part of getting started, not a separately priced professional-services engagement.",
            "The fourteen-day trial gives full access to every module rather than a restricted version, because a payroll product cannot honestly be evaluated with payroll switched off. Cancellation is available at any point; if you do cancel, export your data while you can still log in.",
          ]}
        />
        <Reveal delay={200} className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            href="/policy-centre/terms-of-service"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Read the terms <Arrow />
          </Link>
          <Link
            href="/how-setup-works"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            What setup involves <Arrow />
          </Link>
        </Reveal>
      </Block>

      <Block eyebrow="Enterprise" title="Enterprise pricing is quoted, not hidden" ground="sunken">
        <div className="card mx-auto flex max-w-3xl flex-col items-center p-6 text-center sm:p-8">
          <p className="text-[16.5px] leading-[1.7] text-muted">
            It is quoted because it depends on entity count, module scope and whether single
            sign-on and a dedicated success manager are required, not because there is a number
            we would rather you did not see until later.
          </p>
          <div className="mt-6">
            <Button href="/company/contact-hrmagix">Get a quote</Button>
          </div>
        </div>
      </Block>

      {/* ---- Billing questions ---- */}
      <FaqSection
        title="Questions about the price"
        intro="Billing, counting and what happens at the edges. Product questions are answered on the module pages and in the full FAQ."
        ground="canvas"
            items={[
              {
                q: "What does per employee, per month actually count?",
                a: "Active employee records in the month. Somebody who joins mid-month and somebody serving notice are both active, so both count; an exited record that has been retained for statutory purposes is not active and does not.",
              },
              {
                q: "Is there a setup or implementation fee?",
                a: "No. The setup, the Excel import templates, the policy validation and the dry-run payroll are part of getting started rather than a separately priced engagement.",
              },
              {
                q: "What does the free trial include?",
                a: "Full access to every module for fourteen days, with no credit card required. It is deliberately not a restricted version, because a payroll product cannot be evaluated honestly with payroll switched off.",
              },
              {
                q: "Can we cancel, and what happens to our data?",
                a: "You can cancel at any time. Export what you need while you can still log in, payroll, attendance and leave history are records you may be required to produce long after you stop using the software that generated them.",
              },
              {
                q: "Can we switch plans later?",
                a: "Yes. Every module is on one platform, so changing plan switches modules on or off rather than moving you to a different product. Data already accumulated is unaffected.",
              },
              {
                q: "Why is Enterprise priced on request?",
                a: "Because what it covers varies: the number of legal entities, which modules are in scope, whether single sign-on is required, and whether a dedicated success manager is part of the arrangement. A single published figure would be wrong for most companies asking.",
              },
              {
                q: "Do we pay for employees who have left?",
                a: "No. Their records are retained, gratuity, Form 16 reissues and inspections all reach backwards, but a retained record is not an active one and is not billed.",
              },
              {
                q: "Is support included on every plan?",
                a: "Email support is included on Starter. Growth adds priority support, and Enterprise adds a dedicated success manager. Support is not sold separately from the plan.",
              },
            ]}
      />

      <Onward
        links={[
          {
            label: "Salary & compliance calculators",
            href: "/resources/calculator",
            note: "The other half of the cost question: statutory contributions.",
          },
          {
            label: "Solutions",
            href: "/solutions",
            note: "What each module on each plan actually does.",
          },
          {
            label: "Questions & Answers",
            href: "/resources/questions-and-answers",
            note: "Migration, hosting, support and statutory handling.",
          },
        ]}
      />
    </>
  );
}

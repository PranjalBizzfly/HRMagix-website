import type { Metadata } from "next";
import Link from "next/link";
import { site, steps } from "@/lib/content";
import { Band, Opening, Mechanics, Statement, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "How Setup Works",
  description:
    "Getting an Indian company onto HRMagix: Excel import of employee master data, leave balances and salary structures, policy configuration, and a dry-run payroll before the first live cutoff.",
  keywords: ["HR automation software", "payroll processing software", "HRMS system"],
  alternates: { canonical: "/how-it-works" },
};

/**
 * How setup works.
 *
 * The three published steps are the spine, but the page's real job is to answer
 * the question a buyer is actually asking: what will this cost me in time, and
 * what will go wrong? So the second half is about migration and the dry run,
 * which is where implementations of this kind genuinely succeed or fail.
 */
export default function HowItWorksPage() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="relative overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Subtle glowing ambient wash */}
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How it works" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Onboarding & Implementation
            </span>
          </Reveal>
          <h1 className="display display-lg mt-5 max-w-[17ch] text-balance">
            Two to three days, <strong>and a dry run before anything is real</strong>
          </h1>
          <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            Most Indian organisations complete setup within two to three days. The part that
            determines whether that holds is not the software — it is how cleanly your existing data
            comes across.
          </p>
          <Reveal delay={200} className="mt-9 flex flex-wrap gap-3">
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/resources/calculator" variant="outline">
              Work out the cost
            </Button>
          </Reveal>
        </div>
      </header>

      {/* ---- The three published steps ---- */}
      <Band ground="surface" size="lg">
        <Mechanics
          title="The three steps"
          intro="Published as three because that is genuinely how many decisions there are. Everything below the surface is configuration, not development."
          steps={steps.map((s) => ({ step: `0${s.n}`, title: s.title, body: s.copy }))}
        />
      </Band>

      {/* ---- Migration: the part that actually takes the time ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal y={20}>
            <div className="relative overflow-hidden rounded-[24px] shadow-lift">
              <Photo slot="how-it-works" ratio="3 / 2" sizes="(max-width: 1024px) 100vw, 560px" />
            </div>
          </Reveal>
          <div>
            <Reveal y={10}>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
                Migration
              </p>
            </Reveal>
            <Reveal delay={80} y={14}>
              <h2 className="display display-md mt-4 max-w-[17ch]">
                Bring the history, not just the headcount
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[16.5px] leading-[1.72] text-muted">
                Importing a list of names is trivial and almost useless. What makes the first live
                payroll correct is everything attached to those names: leave balances accrued to
                date, the salary structures that were in force, department hierarchies, and the
                statutory identifiers each employee already holds.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-[16.5px] leading-[1.72] text-muted">
                Structured Excel templates cover all four, so accrual continues from the position you
                are actually in rather than restarting from zero — which is the single most common
                complaint about badly executed HR migrations.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Link
                href="/solutions/hrms"
                className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
              >
                What the employee record holds <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </Band>

      <Statement tone="light" attribution="Why the dry run exists">
        The first payroll you run on a new system should produce a number you can compare against
        one you already trust.
      </Statement>

      {/* ---- The dry run ---- */}
      <Band ground="surface" size="lg">
        <Opening
          label="The dry run"
          paragraphs={[
            "Before the first live cutoff, a dry-run payroll is executed against your imported data — with your leave scheme, your shift patterns, your salary structures and your statutory configuration in place.",
            "The output is then compared against the run you did last month in whatever you are moving away from. Where the two disagree, one of three things is true: the configuration is wrong, the imported data is wrong, or the old process was wrong. All three are worth knowing before real salaries move, and the third is more common than most companies expect.",
            "An onboarding specialist works through this with you — policy validation first, then the dry run, then the reconciliation. It is the reason the two-to-three-day figure holds in practice rather than only in a proposal.",
          ]}
        />

        <div className="mt-12 grid gap-x-12 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
          {[
            {
              title: "Policy validation",
              body: "Leave schemes, shift patterns, grace periods, approval hierarchies and statutory applicability per location — confirmed against how you actually operate, not how a default assumes you do.",
            },
            {
              title: "Parallel comparison",
              body: "Your dry-run output set beside your last real run, line by line, so every difference is explained before anything is committed.",
            },
            {
              title: "First live cutoff",
              body: "Run with the specialists available. Enterprise subscriptions have a dedicated customer success manager for exactly this moment.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 70} y={12}>
              <h3 className="font-display text-[17px] font-bold leading-snug text-heading">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.68] text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ---- Support ---- */}
      {/* ---- What each step involves in detail ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">What each step involves</h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
              Three steps is an accurate summary and a useless plan. This is the same sequence
              with the work in it — including the parts that are yours rather than ours.
            </p>
          </Reveal>

          <div className="min-w-0">
            <section className="border-t border-line-strong pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Getting your people in
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Employee master data comes first, because every other module references it: names,
                statutory identifiers, dates of joining, departments, reporting lines and salary
                structures. It arrives as a spreadsheet you already have, mapped against an import
                template rather than retyped.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Validation happens on import rather than at the first payroll run. Records that
                fail — a malformed identifier, a missing date of joining, a salary structure that
                does not add up — are reported individually, because the failure mode to avoid is
                somebody being quietly absent from the first run.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Two things reliably surface here, and neither is caused by the migration: duplicate
                records for people who were rehired or moved between entities, and salary
                structures that were described one way in an offer letter and calculated another
                way in practice. This is simply the first exercise that compares them.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Turning your policies into rules
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                This is the step that takes the thinking, and it is mostly yours. Leave types and
                accrual basis. Carry-forward and encashment caps. Shift patterns, grace windows and
                the point at which lateness becomes a half day. Notice periods by grade. Probation
                length. Approval routing and the thresholds that require a second approver.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Most companies discover during this step that one or two of their policies have
                never actually been decided — they have been improvised consistently enough to
                feel settled. Writing them down is the real work, and it is worth doing before the
                system applies them to four hundred people at once.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Configuration is a setting rather than a customisation, so a rule can be changed
                later. Policies carry effective dates, which means a change applies from the date
                it takes effect rather than rewriting the months already calculated under the old
                one.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Switching payroll on
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Payroll is the module with a deadline attached, so it is the one worth sequencing
                carefully. Statutory registrations go in first — PF and ESI codes, professional
                tax registrations for each state you employ in, TAN for TDS — because the
                deductions are derived from them rather than entered.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                If you are moving mid-financial-year, year-to-date figures come across as well.
                They are not optional: Form 16 has to reconcile across the whole year regardless of
                which system produced each month of it.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                A start at the beginning of a financial year is simpler, but rarely available.
                Where it is not, the dry run below is what replaces it.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                What the automation actually automates
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                HR automation software is an unhelpfully broad phrase, so it is worth being
                specific about which work disappears. Three kinds do. Recurring calculation:
                accrual, statutory deduction, overtime, arrears. Routing: an application reaching
                the right approver and returning with an outcome attached. And prompting: a
                probation confirmation, an expiring document, an unapproved regularisation before
                the run closes.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Payroll automation software is the same idea applied to the month end, and its
                real contribution is not the arithmetic — which was never the slow part — but
                removing the reconciliation between systems that used to precede it.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                What does not automate is judgement. Approving an exception, calibrating an
                appraisal, deciding whether a policy should change. Any system claiming otherwise
                is describing a workflow, not a decision.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Bringing employees in last, on purpose
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Self-service is opened once the records are right, not before. An employee who logs
                in and finds their leave balance wrong forms a view of the system that is difficult
                to undo, and the balance is usually wrong because it was migrated mid-cycle rather
                than because anything is broken.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                The rollout that works is narrow and specific: employees are told what they can now
                do themselves — payslips, balances, leave applications, address changes,
                investment declarations — and managers are told what is now routed to them. Both
                lists are short, which is the point.
              </p>
            </section>
          </div>
        </div>
      </Band>

      <Band ground="raised" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[18ch]">
              And afterwards, on the days that matter
            </h2>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-[1.7] text-muted">
              Support runs on WhatsApp, phone and email with product specialists in Pune. Customer
              conversations cluster around monthly cutoffs and the annual tax cycle, which is when a
              slow answer is expensive — so that is what the phone line is for.
            </p>
            <p className="mt-5 text-[15px] text-subtle">{site.trial}</p>
          </div>
          <Button href="/company/contact">Start the conversation</Button>
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "What the dry run is actually validating, step by step.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            note: "Three plans, per employee per month, no setup fee.",
          },
          {
            label: "Questions & answers",
            href: "/resources/faqs",
            note: "Migration, biometric sync and hosting, answered in full.",
          },
        ]}
      />
    </>
  );
}

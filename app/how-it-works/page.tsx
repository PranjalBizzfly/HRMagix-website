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

      <header className="border-b border-line wash pb-14 pt-[104px] sm:pb-16 sm:pt-[132px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How it works" }]} />
          </Reveal>
          <h1 className="display display-lg mt-8 max-w-[17ch] text-balance">
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
            <Photo slot="lifecycle-exit" ratio="3 / 2" sizes="(max-width: 1024px) 100vw, 560px" />
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

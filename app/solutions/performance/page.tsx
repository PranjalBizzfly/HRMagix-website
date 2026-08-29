import type { Metadata } from "next";
import Link from "next/link";
import { Band, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Performance Management, OKRs and KRAs",
  description:
    "The HRMagix performance modules: objectives and OKRs, KRA and 9-box talent matrices, 30/60/90 PIPs, recurring 1-on-1s and peer recognition — running on the same employee record as attendance and payroll.",
  keywords: [
    "HR management system",
    "employee management system",
    "HRMS software",
    "HR analytics software",
    "HR software for companies",
  ],
  alternates: { canonical: "/solutions/performance" },
  openGraph: {
    title: "Performance Management, OKRs and KRAs · HRMagix",
    description:
      "Objectives and OKRs, KRA and 9-box, PIPs, 1-on-1s and recognition — five modules on one employee record.",
    url: "/solutions/performance",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
  },
};

/**
 * PERFORMANCE & OKRs.
 *
 * Deliberately not built on the solution-page recipe used by the other eight
 * module pages. Performance is the one subject on the site with a genuine
 * annual rhythm, so the page is organised as a year rather than as an argument
 * followed by a feature index: the cycle first, then the five modules that run
 * inside it, then a register of the terms people habitually confuse.
 *
 * Every capability named here is one of the five performance modules HRMagix
 * publishes. The quarterly rhythm is described as the shape a review year
 * normally takes, not as a schedule the platform imposes — the cadence is the
 * employer's decision and the page says so.
 */

const cycle = [
  {
    marker: "Start of the year",
    title: "Objectives are set, and connected upward",
    body: [
      "The company objective is written first, and team and individual objectives are attached to it rather than drafted alongside it. That connection is the whole point of an OKR hierarchy: an individual can see which company outcome their key results roll into, and a leader can see which teams are carrying a given objective.",
      "Key results are quantitative, which is what separates them from intentions. “Improve hiring” is not a key result; “reduce time-to-hire to 21 days” is, because progress against it can be read rather than argued.",
    ],
  },
  {
    marker: "Alongside the objectives",
    title: "KRAs describe the role, not the quarter",
    body: [
      "Key Result Areas are role-specific and comparatively stable. They describe what a person is accountable for by virtue of the job they hold — a payroll executive is accountable for an accurate monthly run whether or not that is anyone’s objective this quarter.",
      "Keeping KRAs separate from OKRs prevents a common failure: an appraisal that rewards only the visible project work and ignores the recurring responsibility that kept the month running.",
    ],
  },
  {
    marker: "Through the year",
    title: "1-on-1s carry the conversation between reviews",
    body: [
      "Recurring one-to-ones hold a shared agenda and a record of action items, so the next conversation opens where the last one closed. This is the part of performance management that most often exists only in a manager’s notebook, and is therefore the part that disappears when the manager changes.",
      "It also removes the worst property of an annual-only cycle: feedback arriving eleven months after the thing it concerns.",
    ],
  },
  {
    marker: "At review time",
    title: "Ratings are calibrated, then placed on the 9-box",
    body: [
      "A review reads the objectives, the key results and the KRAs that were agreed at the start, which is what makes it a measurement rather than a recollection. Progress has been visible throughout, so the rating should surprise nobody in the room.",
      "The 9-box then plots performance against potential on a single matrix. Its value is comparative: it shows where a team is dense and where it is thin, and which people are consistently strong but have never been given a stretch.",
    ],
  },
  {
    marker: "Where a review goes badly",
    title: "A PIP is a structured plan, not a warning letter",
    body: [
      "A Performance Improvement Plan in HRMagix is a 30/60/90-day structure with milestones and a manager coaching log. The milestones are the substance: a plan with an end date and no interim checkpoints is a countdown, not an improvement plan.",
      "The coaching log matters for two separate reasons. It is what makes the support offered demonstrable if the outcome is later disputed, and it is what makes the plan genuinely developmental rather than procedural.",
    ],
  },
  {
    marker: "Continuously, not annually",
    title: "Recognition runs on its own clock",
    body: [
      "Peer spot awards, value-based badges and a live culture wall are deliberately outside the review cycle. Recognition that waits for an appraisal is not recognition; it is a rating.",
      "Because badges are tied to stated company values, the wall also becomes a quiet record of which values the organisation actually rewards — which is not always the list on the careers page.",
    ],
  },
];

const register = [
  {
    term: "Objective",
    say: "A qualitative statement of what you are trying to achieve in a period.",
    note: "Written to be memorable, not measurable — the measurement is the key result.",
  },
  {
    term: "Key Result",
    say: "A quantitative measure of progress toward an objective, with a target and a current value.",
    note: "If it cannot move a number, it is a task rather than a key result.",
  },
  {
    term: "KRA",
    say: "A Key Result Area: an ongoing area of accountability attached to a role.",
    note: "Stable across quarters. Changes when the job changes, not when the plan does.",
  },
  {
    term: "9-box",
    say: "A three-by-three matrix plotting demonstrated performance against assessed potential.",
    note: "A comparative tool for a group. Reading a single person’s box in isolation tells you very little.",
  },
  {
    term: "Calibration",
    say: "Comparing draft ratings across managers before they are finalised.",
    note: "Exists because two managers rating the same work rarely reach the same number unaided.",
  },
  {
    term: "PIP",
    say: "A Performance Improvement Plan: a defined period with milestones, support and a decision at the end.",
    note: "HRMagix structures it over 30/60/90 days with a coaching log against each milestone.",
  },
  {
    term: "1-on-1",
    say: "A recurring manager-report conversation with a shared agenda and tracked action items.",
    note: "The agenda is shared, so it is not solely the manager’s meeting.",
  },
  {
    term: "Spot award",
    say: "Peer-to-peer recognition given at the moment of the work rather than at a review.",
    note: "Tied to a company value, which is what stops it becoming a popularity measure.",
  },
];

const faqs = [
  {
    q: "What is the difference between an OKR and a KRA, in practice?",
    a: "An OKR is time-bound and ambitious: it describes what you are trying to change this quarter. A KRA is continuous and role-bound: it describes what you are accountable for as long as you hold the job. Most appraisal disputes we hear about trace back to an organisation using one of the two where it needed both — measuring only the projects, or measuring only the routine.",
  },
  {
    q: "Does HRMagix force a particular review cadence?",
    a: "No. The cycle length, the review windows, who participates in an assessment and how ratings are calibrated are the employer's decisions, configured as policy. The page above describes the rhythm a performance year commonly takes, not a schedule the platform imposes.",
  },
  {
    q: "Can objectives be visible to the whole company?",
    a: "Visibility follows the same role permissions as the rest of the platform. Objectives are typically readable across a team so alignment is genuine rather than asserted, while ratings, review notes and PIP records stay with the employee, their manager and HR.",
  },
  {
    q: "How does the 9-box get its data?",
    a: "Performance comes from the ratings recorded in the review cycle. Potential is a manager assessment made during the same cycle. Neither is inferred by the platform — a talent matrix built from data the organisation never actually assessed would be a chart rather than a judgement.",
  },
  {
    q: "Is a PIP recorded on the employee record permanently?",
    a: "The plan, its milestones and the coaching log are retained like any other employment record, because the point of the structure is that what was offered and what happened can both be shown later. That retention is what protects the employee as often as it protects the employer.",
  },
  {
    q: "Which plan includes the performance modules?",
    a: "Growth. It carries payroll, performance, OKRs, KRAs and 9-box, recognition and analytics alongside everything in Starter. Starter covers attendance, leaves, the employee directory and documents.",
  },
  {
    q: "Do performance outcomes feed anything else?",
    a: "Goal-completion trends and time since last review are among the signals HR analytics reads, and a confirmation or increment decision is recorded against the employee record rather than held separately. Nothing is re-keyed between the two, because both read the same record.",
  },
];

export default function PerformancePage() {
  return (
    <>
      <OnThisPage exclude={["Talk it through"]} />

      <header className="border-b border-line bg-surface-sunken pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Performance & OKRs" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-accent">
              Goals, reviews and growth
            </p>
            <h1 className="display display-lg mt-5 max-w-[19ch] text-balance">
              A performance year, and the five modules that run inside it
            </h1>
            <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              Objectives and OKRs, KRA and 9-box, PIPs and growth, 1-on-1s and meetings, and
              recognition. Five of the twelve HRMagix modules, reading from the same employee record
              as attendance and payroll — so a rating, a confirmation and an increment are the same
              history rather than three filing systems.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-9 flex flex-wrap gap-3">
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/pricing" variant="outline">
              See pricing
            </Button>
          </Reveal>
        </div>
      </header>

      {/* ---- The cycle, as a year rather than a feature list ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">How a performance year runs</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Read in order. Each stage explains what happens, and why that particular thing is worth
            doing rather than assumed.
          </p>
        </Reveal>

        <ol className="mt-14 border-l border-line-strong">
          {cycle.map((stage, i) => (
            <Reveal
              as="li"
              key={stage.title}
              delay={i * 60}
              y={14}
              className="relative grid gap-4 pb-12 pl-7 last:pb-0 sm:pl-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-[7px] h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-canvas"
              />
              <div className="lg:sticky lg:top-[110px] lg:self-start">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-subtle">
                  {stage.marker}
                </p>
                <h3 className="mt-2.5 font-display text-[19px] font-bold leading-snug tracking-[-0.02em] text-heading">
                  {stage.title}
                </h3>
              </div>
              <div className="max-w-2xl">
                {stage.body.map((p, j) => (
                  <p
                    key={j}
                    className={`text-[16.5px] leading-[1.72] text-muted ${j ? "mt-4" : ""}`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </Band>

      {/* ---- The vocabulary register ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">The words, used precisely</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Most disagreements about performance management are disagreements about vocabulary.
            These are the definitions the platform uses.
          </p>
        </Reveal>

        <dl className="mt-11 border-t border-line-strong">
          {register.map((row, i) => (
            <Reveal
              key={row.term}
              delay={i * 40}
              y={12}
              className="grid gap-2 border-b border-line py-6 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-10"
            >
              <dt className="font-display text-[15.5px] font-bold text-heading">{row.term}</dt>
              <dd>
                <p className="text-[15.5px] leading-[1.7] text-body">{row.say}</p>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-subtle">{row.note}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Band>

      {/* ---- The boundary ---- */}
      <Band ground="surface" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="display display-md">What this module does not decide</h2>
          <p className="mt-6 text-[16.5px] leading-[1.72] text-muted">
            It does not set your rating scale, your review windows, your calibration rules, your
            promotion criteria or the length of a PIP. Those are the employer&rsquo;s policy, and
            they are configured rather than supplied.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            Nor does it score anybody automatically. Performance and potential are both human
            assessments recorded during a cycle. A talent matrix generated from data nobody
            deliberately assessed would look authoritative and mean nothing, which is a worse outcome
            than having no matrix at all.
          </p>
        </Reveal>
      </Band>

      {/* ---- Questions ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">Questions about performance</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              Mostly asked by HR leads part-way through designing a review cycle.
            </p>
            <Link
              href="/resources/faqs"
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              Every question, in one place <Arrow />
            </Link>
          </Reveal>
          <Accordion items={faqs} />
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "HR Analytics",
            href: "/solutions/hr-analytics",
            note: "Where goal-completion and review trends are read across the organisation.",
          },
          {
            label: "Employee Management",
            href: "/solutions/employee-management",
            note: "The record a rating, a confirmation and a promotion are all written against.",
          },
          {
            label: "HR Glossary",
            href: "/resources/glossary",
            note: "The wider vocabulary, beyond the performance terms defined above.",
          },
        ]}
      />
    </>
  );
}

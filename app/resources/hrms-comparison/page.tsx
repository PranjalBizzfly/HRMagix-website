import type { Metadata } from "next";
import Link from "next/link";
import { Band, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Integrated HRMS vs Point Tools vs Spreadsheets",
  description:
    "A structural comparison of the three ways Indian companies run HR: spreadsheets, separate point tools, and an integrated HRMS. Where each holds up, where each breaks, and how to tell which you are actually in.",
  keywords: [
    "best HRMS software",
    "HRMS software",
    "HR management system",
    "HRMS and payroll software",
    "HRMS system",
  ],
  alternates: { canonical: "/resources/hrms-comparison" },
  openGraph: {
    title: "Integrated HRMS vs Point Tools vs Spreadsheets · HRMagix",
    description:
      "Three approaches compared on the properties that decide the outcome: where the record lives, how data moves, and what can be proved later.",
    url: "/resources/hrms-comparison",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
  },
};

/**
 * THE COMPARISON.
 *
 * Compares three *approaches*, never three products. No competitor is named,
 * characterised or scored, because we have not evaluated anyone else's software
 * and a comparison table populated from guesswork is worse than no table.
 *
 * The page is table-first — the grid is the argument, and the prose beneath
 * explains each row rather than restating it. Spreadsheets and point tools are
 * described accurately including where they are genuinely the right answer,
 * since a comparison that finds against the alternatives in every row is an
 * advertisement wearing a table's clothes.
 */

type Verdict = "good" | "mixed" | "poor";

const approaches = ["Spreadsheets", "Point tools", "Integrated HRMS"] as const;

const rows: {
  criterion: string;
  cells: { verdict: Verdict; note: string }[];
  explain: string[];
}[] = [
  {
    criterion: "Where the employee record lives",
    cells: [
      { verdict: "poor", note: "In several files, none authoritative" },
      { verdict: "mixed", note: "Once per tool, synchronised by export" },
      { verdict: "good", note: "Once, read by every workflow" },
    ],
    explain: [
      "This is the property everything else follows from. With spreadsheets there is no single record — there is a joining sheet, a leave tracker and a payroll file, and each is authoritative for its own purpose until they disagree.",
      "Point tools improve on this by giving each domain a proper system, but the employee now exists three times. Keeping the copies in step becomes a monthly task, and the export is where errors enter.",
      "An integrated HRMS holds one record that attendance, leave, payroll and performance all read from. Nothing is re-keyed because there is nowhere to re-key it to.",
    ],
  },
  {
    criterion: "How attendance reaches payroll",
    cells: [
      { verdict: "poor", note: "Manual reconciliation each month" },
      { verdict: "mixed", note: "A monthly file, prepared under deadline" },
      { verdict: "good", note: "It is already an input" },
    ],
    explain: [
      "Paid days decide the salary, the provident fund wage and in some cases the ESI contribution, so the handover from attendance to payroll is the highest-consequence data movement in the month.",
      "It is also the one done under the most time pressure, in the same week the run has to close. That combination is why it is the most common source of payroll error regardless of company size.",
    ],
  },
  {
    criterion: "Statutory calculation",
    cells: [
      { verdict: "poor", note: "Formulas maintained by hand" },
      { verdict: "mixed", note: "Handled, if the wage base arrives correctly" },
      { verdict: "good", note: "Derived from the structure on the record" },
    ],
    explain: [
      "A payroll tool can compute EPF, ESI and TDS perfectly well on its own. What it cannot do is verify the wage base it was given, and the wage base is where these calculations actually go wrong.",
      "In a spreadsheet the risk is different in kind: the formula is correct until somebody copies a row, and nothing announces that it has stopped being correct.",
    ],
  },
  {
    criterion: "Cost of adding an employee",
    cells: [
      { verdict: "mixed", note: "A row, plus every other sheet" },
      { verdict: "poor", note: "Created in each tool separately" },
      { verdict: "good", note: "Created once" },
    ],
    explain: [
      "This is the row where point tools do worst and it is worth being explicit about why: each system needs the person, and the person is only genuinely onboarded when the slowest of them has them.",
      "It is also the row that scales most brutally. The work per joiner is constant, so it grows exactly in step with hiring.",
    ],
  },
  {
    criterion: "Answering a question about a past date",
    cells: [
      { verdict: "poor", note: "The file has been edited in place" },
      { verdict: "mixed", note: "Per tool, if each retained history" },
      { verdict: "good", note: "One history, effective-dated" },
    ],
    explain: [
      "An inspection, a dispute or a diligence exercise asks what the position was on a specific date, not what it is now. That is a different question, and only a system that records when a change took effect can answer it.",
      "A spreadsheet edited in place cannot answer it at all — not because the data is gone, but because the file only knows its current state.",
    ],
  },
  {
    criterion: "Employee self-service",
    cells: [
      { verdict: "poor", note: "Every request is a person" },
      { verdict: "mixed", note: "Several logins, several places" },
      { verdict: "good", note: "One login, own record" },
    ],
    explain: [
      "Most of what an HR team is asked in a week is a request for access to information the company already holds about the person asking: a payslip, a balance, a Form 16, a salary certificate.",
      "Splitting those across several portals technically provides self-service and practically does not, because the employee has to know which system holds what.",
    ],
  },
  {
    criterion: "Reporting across domains",
    cells: [
      { verdict: "poor", note: "Collation, then reconciliation" },
      { verdict: "poor", note: "Exports that disagree by timing" },
      { verdict: "good", note: "A read on live data" },
    ],
    explain: [
      "The questions leadership asks tend to cross domains: overtime cost against attrition risk in the same department, payroll variance attributable to joiners versus revisions.",
      "Those are straightforward when both figures come from one record and genuinely hard when they arrive as two exports taken at different moments.",
    ],
  },
  {
    criterion: "Setup effort and immediate cost",
    cells: [
      { verdict: "good", note: "None — it already exists" },
      { verdict: "mixed", note: "Per tool, and they accumulate" },
      { verdict: "mixed", note: "One configuration exercise" },
    ],
    explain: [
      "This is the row where spreadsheets genuinely win, and it is why almost every company starts there. There is no procurement, no configuration and no licence.",
      "It is a real advantage for a real period. The question is not whether spreadsheets are wrong in principle — it is when the cost of the reconciliation exceeds the cost of the system.",
    ],
  },
  {
    criterion: "Fit for a very small team",
    cells: [
      { verdict: "good", note: "Entirely adequate under about ten" },
      { verdict: "mixed", note: "Often more tool than the problem" },
      { verdict: "mixed", note: "Worth it once statute applies" },
    ],
    explain: [
      "Below roughly ten people, with no statutory registrations and everyone visible to everyone, a spreadsheet is not a compromise. It is the proportionate answer.",
      "What changes the calculation is not headcount as such but the arrival of obligations with dates attached: professional tax registration, ESI coverage, provident fund. Those do not care how small you are.",
    ],
  },
  {
    criterion: "Behaviour when you become two entities",
    cells: [
      { verdict: "poor", note: "The file set doubles" },
      { verdict: "mixed", note: "Depends entirely on the tool" },
      { verdict: "good", note: "Entity is a field on the record" },
    ],
    explain: [
      "A second legal entity brings its own provident fund code, its own professional tax registrations and its own returns, while people continue to move between the two.",
      "The property that matters is whether a transfer preserves continuity of service. Recreating somebody in a second system means that, on paper, they started again — and gratuity eligibility and leave accrual both count from the original date of joining.",
    ],
  },
];

const marks: Record<Verdict, { label: string; className: string }> = {
  good: { label: "Strong", className: "bg-ok-soft text-ok ring-ok-line/60" },
  mixed: { label: "Depends", className: "bg-surface-raised text-accent-strong ring-line-accent/50" },
  poor: { label: "Weak", className: "bg-surface-sunken text-subtle ring-line" },
};

export default function ComparisonPage() {
  return (
    <>
      <OnThisPage exclude={["Talk it through"]} />

      <header className="border-b border-line bg-surface pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "HRMS comparison" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8 max-w-3xl">
            <h1 className="display display-lg text-balance">
              Spreadsheets, point tools, or one integrated system
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              Three ways of running HR, compared on the structural properties that decide how each
              behaves — not on feature counts. Spreadsheets win a row outright and are the right
              answer for a genuinely small team; the comparison says so, because one that found
              against them everywhere would not be a comparison.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-7 max-w-3xl rounded-2xl bg-surface-sunken p-6 ring-1 ring-line">
            <p className="text-[15.5px] leading-[1.7] text-muted">
              <strong className="font-semibold text-heading">No product is named here but ours.</strong>{" "}
              We have not evaluated other vendors&rsquo; software, so we do not score it. What follows
              compares approaches, and every claim about an approach is one you can test against your
              own setup rather than take on trust.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ---- The grid ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">The comparison</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Ten properties. Each is explained underneath, in the same order.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-11 overflow-x-auto rounded-[22px] bg-surface p-1 shadow-soft ring-1 ring-line"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Spreadsheets, point tools and an integrated HRMS compared across ten structural
              properties
            </caption>
            <thead>
              <tr className="border-b border-line-strong">
                <th
                  scope="col"
                  className="px-5 py-5 text-[12px] font-bold uppercase tracking-[0.14em] text-subtle"
                >
                  Property
                </th>
                {approaches.map((a) => (
                  <th
                    key={a}
                    scope="col"
                    className="px-5 py-5 font-display text-[15px] font-bold text-heading"
                  >
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.criterion} className={i ? "border-t border-line" : ""}>
                  <th
                    scope="row"
                    className="px-5 py-5 align-top font-display text-[14.5px] font-bold leading-snug text-heading"
                  >
                    <a
                      href={`#row-${i + 1}`}
                      className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {row.criterion}
                    </a>
                  </th>
                  {row.cells.map((cell, j) => (
                    <td key={j} className="px-5 py-5 align-top">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] ring-1 ${marks[cell.verdict].className}`}
                      >
                        {marks[cell.verdict].label}
                      </span>
                      <span className="mt-2 block text-[14px] leading-[1.6] text-muted">
                        {cell.note}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Band>

      {/* ---- Row by row ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Why each row lands where it does</h2>
        </Reveal>

        <div className="mt-11 max-w-[72ch]">
          {rows.map((row, i) => (
            <Reveal
              as="section"
              key={row.criterion}
              id={`row-${i + 1}`}
              delay={30}
              y={12}
              className="scroll-mt-[130px] border-t border-line py-8"
            >
              <h3 className="font-display text-[19px] font-bold leading-snug tracking-[-0.02em] text-heading">
                <span className="mr-3 font-mono text-[13px] font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {row.criterion}
              </h3>
              {row.explain.map((p, j) => (
                <p key={j} className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ---- Which one are you in ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">How to tell which you are actually in</h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
              Most companies describe themselves as one thing and operate as another. Four questions
              settle it faster than an audit.
            </p>
          </Reveal>

          <div className="min-w-0">
            <section className="border-t border-line-strong pt-7">
              <h3 className="font-display text-[18px] font-bold text-heading">
                Ask what happens when somebody joins on the 20th
              </h3>
              <p className="mt-3.5 text-[16.5px] leading-[1.72] text-muted">
                Count the places their details have to be entered before their first payslip is
                correct. One is an integrated system. Three or four is a point-tool estate, whatever
                the licences say.
              </p>
            </section>

            <section className="mt-8 border-t border-line pt-7">
              <h3 className="font-display text-[18px] font-bold text-heading">
                Ask who reconciles attendance to payroll, and when
              </h3>
              <p className="mt-3.5 text-[16.5px] leading-[1.72] text-muted">
                If the answer is a named person in the last week of the month, that reconciliation is
                the system — and it is being performed by someone who could be doing something else.
              </p>
            </section>

            <section className="mt-8 border-t border-line pt-7">
              <h3 className="font-display text-[18px] font-bold text-heading">
                Ask for last March&rsquo;s position, not last March&rsquo;s file
              </h3>
              <p className="mt-3.5 text-[16.5px] leading-[1.72] text-muted">
                Specifically: what was this person&rsquo;s salary structure, reporting line and leave
                balance on a named date. If the honest answer is &ldquo;whatever the file says now&rdquo;,
                the records are not effective-dated, and a diligence exercise will find that out
                before you do.
              </p>
            </section>

            <section className="mt-8 border-t border-line pt-7">
              <h3 className="font-display text-[18px] font-bold text-heading">
                Ask what an employee does to get a payslip from two years ago
              </h3>
              <p className="mt-3.5 text-[16.5px] leading-[1.72] text-muted">
                If the answer involves asking a person, the self-service is nominal. This is the
                cheapest of the four questions to fix and the one that most reliably indicates how
                the rest of the estate is arranged.
              </p>
            </section>

            <section className="mt-8 border-t border-line pt-7">
              <h3 className="font-display text-[18px] font-bold text-heading">
                And when spreadsheets are still right
              </h3>
              <p className="mt-3.5 text-[16.5px] leading-[1.72] text-muted">
                Under about ten people, with no statutory registrations yet and everyone visible to
                everyone, the reconciliation cost is genuinely lower than the cost of running a
                system. Move when obligations with fixed dates arrive — not because a spreadsheet is
                embarrassing.
              </p>
            </section>
          </div>
        </div>
      </Band>

      <Band ground="surface" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[22ch]">
              Test the four questions against HRMagix
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              The published rates are on the pricing page and the trial includes every module, so
              the comparison above can be checked rather than accepted. Bring the awkward month.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/pricing" variant="outline">
              See pricing
            </Button>
          </div>
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "HRMS",
            href: "/solutions/hrms",
            note: "What the single-record approach looks like in practice.",
          },
          {
            label: "First payroll run",
            href: "/resources/guides/first-payroll-run",
            note: "The guide for actually making the move, including the parallel month.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            note: "What the integrated approach costs, published per employee.",
          },
        ]}
      />
    </>
  );
}

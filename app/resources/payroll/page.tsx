import type { Metadata } from "next";
import Link from "next/link";
import { Band, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Payroll Resources",
  description:
    "Everything on this site about Indian payroll, indexed by what you are trying to do: work out a figure, understand why a number came out wrong, set something up, or find the statutory rule.",
  keywords: [
    "payroll software",
    "payroll processing system",
    "employee payroll system",
    "payroll software with PF ESI TDS",
    "online payroll software",
  ],
  alternates: { canonical: "/resources/payroll" },
  openGraph: {
    title: "Payroll Resources · HRMagix",
    description:
      "Calculators, explanations, guides and statutory reference for Indian payroll — indexed by task rather than by format.",
    url: "/resources/payroll",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
  },
};

/**
 * PAYROLL RESOURCES.
 *
 * A router, not a library. Everything linked from here already exists
 * elsewhere on the site; what this page adds is an index organised by the
 * reader's intent — work out a number, diagnose one, set something up, look up
 * a rule — rather than by whether the destination happens to be a calculator,
 * an article or a module page.
 *
 * That is deliberately the opposite arrangement to /resources, which groups by
 * format. Somebody arriving mid-problem does not know or care which format
 * holds the answer.
 */

const sections: {
  intent: string;
  lead: string;
  items: { label: string; href: string; note: string }[];
}[] = [
  {
    intent: "I need to work out a figure",
    lead: "Each calculator runs in your browser on numbers you type in. Nothing is submitted, and the working is shown beneath every result so the arithmetic can be checked by hand.",
    items: [
      {
        label: "Salary breakup calculator",
        href: "/calculators/salary",
        note: "One monthly gross in; basic, statutory deductions on both sides, take-home before income tax, and cost to company out.",
      },
      {
        label: "PF calculator",
        href: "/calculators/pf",
        note: "The provident fund wage base first, then the employee's 12%, the employer's 12%, and the 8.33% pension split within it.",
      },
      {
        label: "ESI calculator",
        href: "/calculators/esi",
        note: "The eligibility test against the ₹21,000 gross threshold, then the 0.75% and 3.25% contributions.",
      },
      {
        label: "Gratuity calculator",
        href: "/calculators/gratuity",
        note: "The Payment of Gratuity Act formula, with the five-year qualifying rule and the 26-day divisor applied.",
      },
      {
        label: "Payroll cost calculator",
        href: "/calculators/payroll-cost",
        note: "Works upward from gross to the total an employer actually commits to for a headcount.",
      },
      {
        label: "All six calculators",
        href: "/resources/calculator",
        note: "The directory, including plan cost and a note on which calculators deliberately do not exist.",
      },
    ],
  },
  {
    intent: "A number came out wrong and I need to know why",
    lead: "Short diagnostic pieces. Each takes one mechanism that routinely produces a surprising figure and works through what actually happened.",
    items: [
      {
        label: "Why payroll takes four days",
        href: "/blog/why-payroll-takes-four-days",
        note: "The four days go on establishing what happened, not on calculating it. Where they actually go.",
      },
      {
        label: "Reading an Indian payslip",
        href: "/blog/reading-an-indian-payslip",
        note: "Line by line, and which components sit inside which statutory base.",
      },
      {
        label: "The ESI wage threshold mid-year",
        href: "/blog/esi-threshold-moving-wage-base",
        note: "Why eligibility is fixed for the contribution period rather than retested every month.",
      },
      {
        label: "Professional tax in February",
        href: "/blog/professional-tax-february",
        note: "The state where one month's deduction differs from the other eleven.",
      },
      {
        label: "Old regime or new",
        href: "/blog/old-vs-new-regime",
        note: "Why the answer differs between two people on identical salaries.",
      },
      {
        label: "Full and final settlement",
        href: "/blog/full-and-final-settlement",
        note: "The one payroll event that reads from every other module at once.",
      },
      {
        label: "Shifts that cross midnight",
        href: "/blog/shift-detection-across-midnight",
        note: "The most common reason an attendance report and a payroll run disagree.",
      },
    ],
  },
  {
    intent: "I am setting payroll up, or moving it",
    lead: "Longer and instructional. These are written for somebody who has been handed the work rather than the topic.",
    items: [
      {
        label: "Guide 01 — Running your first payroll in a new system",
        href: "/resources/guides/first-payroll-run",
        note: "Switch timing, the data that must be right first, carrying year-to-date figures, and running a parallel month.",
      },
      {
        label: "Guide 03 — Attendance for a workforce that is not at a desk",
        href: "/resources/guides/attendance-for-shift-workforces",
        note: "Paid days are decided upstream of payroll. This is where they are decided.",
      },
      {
        label: "What setup involves",
        href: "/how-it-works",
        note: "The sequence end to end, including which parts of the work are yours.",
      },
      {
        label: "Spreadsheets, point tools or one system",
        href: "/resources/hrms-comparison",
        note: "If you are still deciding on the approach rather than the implementation.",
      },
    ],
  },
  {
    intent: "I need the statutory rule itself",
    lead: "Reference. Rates appear only where central statute fixes them; state heads are described as varying rather than given a number.",
    items: [
      {
        label: "The statutory engine",
        href: "/solutions/compliance",
        note: "EPF, ESI, PT, LWF and TDS: what applies when, the basis each is computed on, and the file the run produces.",
      },
      {
        label: "Payroll module",
        href: "/solutions/payroll",
        note: "How a payroll month runs in order, and what leaves the building at the end of it.",
      },
      {
        label: "HR and payroll glossary",
        href: "/resources/glossary",
        note: "PF wage, contribution period, arrears, LOP, CTC — defined plainly, with the distinctions people get wrong.",
      },
      {
        label: "Gratuity policy",
        href: "/policy/workplace-policies/gratuity",
        note: "The approved policy document, alongside the statutory position.",
      },
    ],
  },
  {
    intent: "I am explaining payroll to someone else",
    lead: "For a board pack, a policy note, or a conversation with a finance lead who wants the reasoning rather than the output.",
    items: [
      {
        label: "The chain of custody from punch to payslip",
        href: "/resources/white-papers/chain-of-custody",
        note: "Why the handovers between systems, not the arithmetic, are where payroll goes wrong.",
      },
      {
        label: "The exceptions engine",
        href: "/resources/white-papers/exceptions-engine",
        note: "Attendance systems are judged on their exceptions rather than their happy path.",
      },
      {
        label: "State by state",
        href: "/resources/white-papers/state-by-state",
        note: "What multi-state employment actually costs administratively.",
      },
      {
        label: "Questions and answers",
        href: "/resources/faqs",
        note: "Every question on the site in one place, including the payroll ones.",
      },
    ],
  },
];

export default function PayrollResourcesPage() {
  return (
    <>
      <OnThisPage exclude={["Talk it through"]} />

      <header className="border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Payroll" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8 max-w-3xl">
            <h1 className="display display-lg text-balance">
              Payroll, indexed by what you are trying to do
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              Everything on this site about Indian payroll, arranged by intent rather than by
              format. Somebody arriving mid-problem does not know whether the answer is a
              calculator, an article or a statutory reference — so this page is organised by the
              question instead.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ---- The router ---- */}
      {sections.map((section, i) => (
        <Band key={section.intent} ground={i % 2 === 0 ? "surface" : "sunken"} size="md">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
            <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
              <p className="font-mono text-[12.5px] font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="display display-md mt-3">{section.intent}</h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted">{section.lead}</p>
            </Reveal>

            <ul className="min-w-0 divide-y divide-line border-y border-line-strong">
              {section.items.map((item, j) => (
                <Reveal as="li" key={item.href} delay={j * 40} y={10}>
                  <Link
                    href={item.href}
                    className="group block py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-display text-[16.5px] font-bold leading-snug text-heading transition-colors group-hover:text-accent">
                        {item.label}
                      </span>
                      <span className="shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        <Arrow />
                      </span>
                    </span>
                    <span className="mt-1.5 block max-w-2xl text-[15px] leading-[1.68] text-muted">
                      {item.note}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </Band>
      ))}

      <Band ground="raised" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="display display-md">What is deliberately not here</h2>
          <p className="mt-6 text-[16.5px] leading-[1.72] text-muted">
            There is no TDS, professional tax or labour welfare fund calculator, and their absence is
            a decision rather than an omission. Tax under Section 192 depends on the employee&rsquo;s
            regime election, on slab rates set by Finance Act each year and on verified declarations;
            professional tax and the welfare fund are state subjects whose slabs and periodicity
            differ across India.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            All three are computed inside the payroll run, where the registrations and declarations
            that make them answerable actually exist. A standalone calculator for any of them would
            produce a confident number from assumptions the page could not state.
          </p>
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "All resources",
            href: "/resources",
            note: "The same material grouped by format rather than by task.",
          },
          {
            label: "Compliance",
            href: "/solutions/compliance",
            note: "The statutory engine in full, head by head.",
          },
          {
            label: "Book a demo",
            href: "/company/contact",
            note: "Run your own payroll month against it rather than reading about ours.",
          },
        ]}
      />
    </>
  );
}

import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Payroll Resources",
  description:
    "Everything on this site about Indian payroll, indexed by what you are trying to do: work out a figure, understand why a number came out wrong, set something up, or find the statutory rule.",
  keywords: [

  ],
  alternates: { canonical: "/resources/payroll-resources" },
  openGraph: {
    title: "Payroll Resources · HRMagix",
    description:
      "Calculators, explanations, guides and statutory reference for Indian payroll, indexed by task rather than by format.",
    url: "/resources/payroll-resources",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
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
        label: "PF Calculator",
        href: "/calculators/pf",
        note: "The provident fund wage base first, then the employee's 12%, the employer's 12%, and the 8.33% pension split within it.",
      },
      {
        label: "ESI Calculator",
        href: "/calculators/esi",
        note: "The eligibility test against the ₹21,000 gross threshold, then the 0.75% and 3.25% contributions.",
      },
      {
        label: "Gratuity Calculator",
        href: "/calculators/gratuity",
        note: "The Payment of Gratuity Act formula, with the five-year qualifying rule and the 26-day divisor applied.",
      },
      {
        label: "Payroll Cost Calculator",
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
        href: "/insights/why-payroll-takes-four-days",
        note: "The four days go on establishing what happened, not on calculating it. Where they actually go.",
      },
      {
        label: "Reading an Indian payslip",
        href: "/insights/reading-an-indian-payslip",
        note: "Line by line, and which components sit inside which statutory base.",
      },
      {
        label: "The ESI wage threshold mid-year",
        href: "/insights/esi-threshold-moving-wage-base",
        note: "Why eligibility is fixed for the contribution period rather than retested every month.",
      },
      {
        label: "Professional tax in February",
        href: "/insights/professional-tax-february",
        note: "The state where one month's deduction differs from the other eleven.",
      },
      {
        label: "Old regime or new",
        href: "/insights/old-vs-new-regime",
        note: "Why the answer differs between two people on identical salaries.",
      },
      {
        label: "Full and final settlement",
        href: "/insights/full-and-final-settlement",
        note: "The one payroll event that reads from every other module at once.",
      },
      {
        label: "Shifts that cross midnight",
        href: "/insights/shift-detection-across-midnight",
        note: "The most common reason an attendance report and a payroll run disagree.",
      },
    ],
  },
  {
    intent: "I am setting payroll up, or moving it",
    lead: "Longer and instructional. These are written for somebody who has been handed the work rather than the topic.",
    items: [
      {
        label: "Guide 01, Running your first payroll in a new system",
        href: "/resources/hr-guides/first-payroll-run",
        note: "Switch timing, the data that must be right first, carrying year-to-date figures, and running a parallel month.",
      },
      {
        label: "Guide 03, Attendance for a workforce that is not at a desk",
        href: "/resources/hr-guides/attendance-for-shift-workforces",
        note: "Paid days are decided upstream of payroll. This is where they are decided.",
      },
      {
        label: "What setup involves",
        href: "/how-setup-works",
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
        href: "/resources/hr-and-payroll-glossary",
        note: "PF wage, contribution period, arrears, LOP, CTC, defined plainly, with the distinctions people get wrong.",
      },
      {
        label: "Gratuity policy",
        href: "/policy-centre/workplace-policy-library/gratuity",
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
        href: "/resources/questions-and-answers",
        note: "Every question on the site in one place, including the payroll ones.",
      },
    ],
  },
];

export default function PayrollResourcesPage() {
  return (
    <>
      <OnThisPage exclude={["Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="resources-payroll-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
                { label: "Payroll Resources" },
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
              calculator, an article or a statutory reference, so this page is organised by the
              question instead.
            </p>
          </Reveal>
        </div>
      </header>

      <SiteStats />

      {/* ---- The router ---- */}
      {sections.map((section, i) => (
        <Block
          key={section.intent}
          eyebrow={["Work it out", "Diagnose", "Set up", "Reference", "Explain"][i] ?? String(i + 1).padStart(2, "0")}
          title={section.intent}
          intro={section.lead}
          ground={i % 2 === 0 ? "canvas" : "sunken"}
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {section.items.map((item, j) => (
              <Reveal as="li" key={item.href} delay={j * 40} y={10}>
                <Link href={item.href} className="card card-hover group flex h-full flex-col p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                    <Icon name="compass" className="h-5 w-5" />
                  </span>
                  <span className="mt-5 font-display text-[16.5px] font-bold leading-snug text-heading transition-colors group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="mt-2 flex-1 text-[14.5px] leading-[1.6] text-muted">{item.note}</span>
                  <span className="mt-5 inline-flex items-center text-accent" aria-hidden="true">
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Block>
      ))}

      <Block eyebrow="Scope" title="What is deliberately not here" ground="sunken">
        <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
          <p className="text-[16.5px] leading-[1.72] text-muted">
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
      </Block>

      <FaqSection items={resourcesFaqs["/resources/payroll-resources"]} ground="canvas" />

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
            href: "/company/contact-hrmagix",
            note: "Run your own payroll month against it rather than reading about ours.",
          },
        ]}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Band, Opening, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import StatutoryCalculators from "@/components/StatutoryCalculators";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Salary, PF, ESI & Gratuity Calculators",
  description:
    "Free calculators for Indian payroll: monthly salary breakup with EPF and ESI contributions on both sides, gratuity under the Payment of Gratuity Act, and HRMagix plan cost.",
  keywords: [
    "employee salary calculator",
    "PF calculation",
    "ESI calculation",
    "salary calculation software",
    "payslip generator",
  ],
  alternates: { canonical: "/resources/calculator" },
};

/**
 * Calculators.
 *
 * The constraint that shapes this page is stated on it, twice: only central
 * statutory heads with fixed rates are computed. Income tax, Professional Tax
 * and Labour Welfare Fund are named and explicitly excluded, with the reason,
 * rather than being approximated. A calculator that quietly guesses at a TDS
 * figure is worse than no calculator.
 */
export default function CalculatorPage() {
  return (
    <>
      <header className="border-b border-line bg-surface-sunken pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Calculators" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[18ch] text-balance">
                Work the numbers <strong>before anyone quotes you one</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                Three calculators, all arithmetic you can check by hand. Nothing here is modelled,
                estimated or projected — and where a figure genuinely cannot be computed without
                information we do not have, the page says so instead of guessing.
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="calculator" ratio="3 / 2" sizes="(max-width: 1024px) 100vw, 420px" />
            </Reveal>
          </div>
        </div>
      </header>

      {/* ---- Statutory calculators ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
            Statutory
          </p>
          <h2 className="display display-md mt-5">Salary breakup and gratuity</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Both use rates fixed by central statute: the 12% provident fund contribution and its
            ₹15,000 wage ceiling, the 8.33% pension share within the employer&rsquo;s contribution,
            ESI at 0.75% and 3.25% against the ₹21,000 gross threshold, and the fifteen-days-per-year
            gratuity formula on a twenty-six day divisor.
          </p>
        </Reveal>

        <div className="mt-12">
          <StatutoryCalculators />
        </div>
      </Band>

      {/* ---- What is deliberately excluded ---- */}
      <Band ground="sunken" size="md">
        <Opening
          label="What is not here"
          paragraphs={[
            "Three heads that appear on a real Indian payslip are missing from the calculators above, and each is missing for a reason rather than an oversight.",
            "Income tax under Section 192 depends on whether the employee has elected the old or the new regime and on their declarations under 80C, 80D, HRA and home-loan interest. A number produced without those inputs would not be an approximation — it would be a different number entirely, and people make decisions on these figures.",
            "Professional Tax and Labour Welfare Fund are state subjects. Slabs, exemptions and periodicity differ by state, and Maharashtra's Professional Tax carries a different amount in February. Hard-coding one state's schedule into a calculator labelled \"India\" would be misleading in every other state.",
            "All three are calculated inside an actual HRMagix payroll run, where the employee's work location, salary structure and verified declarations are known.",
          ]}
        />
        <Reveal delay={200} className="mt-8">
          <Link
            href="/solutions/payroll"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            How each statutory head is treated in a run <Arrow />
          </Link>
        </Reveal>
      </Band>

      {/* ---- Plan cost ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
            Subscription
          </p>
          <h2 className="display display-md mt-5">What HRMagix itself would cost</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            The published per-employee rate multiplied by your headcount. No modelled savings, no
            projected ROI, no discount that appears when you ask.
          </p>
        </Reveal>
        <div className="mt-12">
          <Calculator />
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "Every statutory head, and what each produces as filing output.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            note: "What sits on each of the three plans.",
          },
          {
            label: "White papers",
            href: "/resources/white-papers",
            note: "The reasoning behind these figures, at length.",
          },
        ]}
      />
    </>
  );
}

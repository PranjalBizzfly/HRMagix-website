import type { Metadata } from "next";
import Link from "next/link";
import { modules, plans, site } from "@/lib/content";
import { Band, Opening, Onward } from "@/components/editorial";
import { Check, Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three published plans, priced per employee per month: Starter $3, Growth $6, Enterprise custom. Fourteen-day trial, no setup fee, and every module on one platform.",
  keywords: ["HRMS software", "payroll software", "HR SaaS platform"],
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
      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          </Reveal>
          <h1 className="display display-lg mt-8 max-w-[16ch] text-balance">
            Published rates, <strong>before you speak to anyone</strong>
          </h1>
          <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            Per employee, per month, across three plans. Every module lives on one platform — your
            plan decides which are switched on, and switching one on later is a setting rather than a
            migration.
          </p>
          <p className="mt-6 text-[14.5px] text-subtle">{site.trial}</p>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <Pricing />
      </Band>

      {/* ---- Comparison ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">What is included where</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Exactly what each published plan lists — no asterisks, and nothing that appears only
            after a sales call.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12 overflow-x-auto rounded-[24px] bg-surface p-1 shadow-soft ring-1 ring-line">
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
      </Band>

      {/* ---- Estimator ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Work out your monthly number</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Published rate times headcount. Nothing modelled, no projected savings, no ROI
            calculation dressed up as arithmetic.
          </p>
        </Reveal>
        <div className="mt-12">
          <Calculator />
        </div>
      </Band>

      {/* ---- What the price does and does not include ---- */}
      <Band ground="raised" size="md">
        <Opening
          label="On the price"
          paragraphs={[
            "There is no setup fee and no implementation charge. The two-to-three-day setup, the Excel import templates, the policy validation and the dry-run payroll are part of getting started, not a separately priced professional-services engagement.",
            "The fourteen-day trial gives full access to every module rather than a restricted version, because a payroll product cannot honestly be evaluated with payroll switched off. Cancellation is available at any point; if you do cancel, export your data while you can still log in.",
          ]}
        />
        <Reveal delay={200} className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            href="/policy/terms"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Read the terms <Arrow />
          </Link>
          <Link
            href="/how-it-works"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            What setup involves <Arrow />
          </Link>
        </Reveal>
      </Band>

      <Band ground="surface" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[17ch]">
              Enterprise pricing is quoted, not hidden
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              It is quoted because it depends on entity count, module scope and whether single
              sign-on and a dedicated success manager are required — not because there is a number
              we would rather you did not see until later.
            </p>
          </div>
          <Button href="/company/contact">Get a quote</Button>
        </div>
      </Band>

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
            label: "Questions & answers",
            href: "/resources/faqs",
            note: "Migration, hosting, support and statutory handling.",
          },
        ]}
      />
    </>
  );
}

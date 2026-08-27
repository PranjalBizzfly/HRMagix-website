import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import { Check, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { modules, plans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing. Starter $3/emp/mo, Growth $6/emp/mo, Enterprise custom. Start free and scale as you grow.",
};

/** Derived directly from what each published plan lists. */
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
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        boldFrom={1}
        lede="Start free and scale as you grow. No hidden fees — pay per employee, per month, and switch plans whenever your team does."
        crumb="Pricing"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <Pricing />
        </div>
      </section>

      <section className="bg-violet-50/70 py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Cost calculator"
            title={
              <>
                Work out your <strong>monthly number</strong>
              </>
            }
            sub="Published rate times headcount — nothing modelled, nothing hidden."
          />
          <div className="mt-12">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Compare plans"
            title={
              <>
                What is included <strong>where</strong>
              </>
            }
          />

          <Reveal delay={140} className="mt-12 overflow-x-auto rounded-[24px] bg-white p-1 shadow-soft ring-1 ring-violet-100">
            <table className="w-full min-w-[580px] border-collapse text-left">
              <caption className="sr-only">HRMagix plan comparison</caption>
              <thead>
                <tr className="border-b border-violet-100">
                  <th scope="col" className="px-5 py-5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-violet-400">
                    Included
                  </th>
                  {plans.map((p) => (
                    <th key={p.name} scope="col" className="px-5 py-5">
                      <span className="block font-display text-[14.5px] font-bold text-violet-950">
                        {p.name}
                      </span>
                      <span className="mt-0.5 block text-[12px] font-normal text-ink-faint">
                        {p.price}
                        {p.unit ?? ""}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-violet-50 last:border-b-0 hover:bg-violet-50/60">
                    <th scope="row" className="px-5 py-4 text-[14px] font-medium text-ink">
                      {row.label}
                    </th>
                    {row.plans.map((on, i) => (
                      <td key={i} className="px-5 py-4">
                        {on ? (
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-500 text-white">
                            <Check className="h-3 w-3" />
                          </span>
                        ) : (
                          <span className="block h-px w-4 bg-violet-200" aria-label="Not included" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={180} className="mt-6 text-center">
            <p className="text-[13.5px] text-ink-faint">
              All {modules.length} modules live on one platform — your plan decides which are switched
              on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-violet-50/70 py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <SectionHead
              align="left"
              eyebrow="Pricing FAQ"
              title={
                <>
                  Before you <strong>commit</strong>
                </>
              }
            />
          </div>
          <Faq limit={4} />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

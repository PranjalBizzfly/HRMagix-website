import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Automated Payroll Module | HRMagix",
  description:
    "Run 100% compliant Indian payroll in 3 minutes. EPF Act 1952, ESI Act 1948, Multi-State PT, Section 192 TDS dual-regime calculator, and 1-click bank batch transfer files.",
};

const payrollHighlights = [
  {
    title: "100% Indian Statutory Engine",
    badge: "EPF · ESI · PT · LWF",
    desc: "Automated calculation of employee and employer EPF (12% up to ₹15,000 ceiling), ESI (0.75% / 3.25% up to ₹21,000 ceiling), and state-wise Professional Tax slabs.",
    icon: "shield",
  },
  {
    title: "Dual Tax Regime Calculator",
    badge: "Section 192 TDS",
    desc: "Employees compare Old vs. New Tax Regimes in real-time, submit investment declarations under Section 80C, 80D, and HRA, and download verified Form 16 Part B.",
    icon: "calculator",
  },
  {
    title: "One-Click Bank Batch Files",
    badge: "NEFT · RTGS · IMPS",
    desc: "Direct bank transfer batch files formatted for HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra, and Yes Bank with salary disbursement tracking.",
    icon: "wallet",
  },
  {
    title: "Full & Final (F&F) Settlement",
    badge: "Offboarding & Gratuity",
    desc: "Automated exit settlements including unavailed leave encashment, Payment of Gratuity Act 1972 15-day formula calculations, notice period adjustments, and asset recoveries.",
    icon: "check",
  },
];

const salaryBreakdown = [
  { component: "Basic Salary", type: "Earnings", rule: "40% - 50% of CTC (Statutory wage base)" },
  { component: "House Rent Allowance (HRA)", type: "Earnings", rule: "40% - 50% of Basic (Tax exempt under Sec 10(13A))" },
  { component: "Special Allowance", type: "Earnings", rule: "Balancing component to fulfill total CTC" },
  { component: "Employee Provident Fund (EPF)", type: "Deduction", rule: "12% of Basic (Max ₹1,800/mo under statutory ceiling)" },
  { component: "Professional Tax (PT)", type: "Deduction", rule: "State slab (e.g. ₹200/mo in MH, ₹300 in Feb)" },
  { component: "TDS (Income Tax)", type: "Deduction", rule: "Computed under selected Old or New Tax Regime" },
];

export default function PayrollModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 03 · Payroll & Finance"
        title="Indian Statutory Payroll Engine"
        boldFrom={2}
        lede="Execute multi-branch Indian payroll in minutes. Fully audited for EPF, ESI, Multi-State PT, and Section 192 TDS with zero spreadsheet risk."
        crumb="Payroll"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Payroll Demo
            </Button>
            <Button href="/compliance" variant="outline" size="lg">
              Statutory Guide
            </Button>
          </>
        }
      />

      {/* Core Capabilities */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Statutory Excellence"
            title={
              <>
                Payroll that <strong>never fails an audit</strong>
              </>
            }
            sub="HRMagix replaces error-prone Excel macros with a certified Indian statutory engine that handles complex multi-state salary structures automatically."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {payrollHighlights.map((hl, i) => (
              <Reveal
                key={hl.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={hl.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {hl.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {hl.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {hl.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-ok">
                  <TickCircle className="h-4 w-4 text-ok" />
                  <span>Generates electronic challan files (ECR & Form 24Q)</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTC Structure Breakdown */}
      <section className="bg-violet-950 py-20 text-white sm:py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
              Salary Architecture
            </span>
            <h2 className="display display-lg mt-4 !text-white">
              Standard Indian CTC Structure & Statutory Deductions
            </h2>
            <p className="mt-3 text-[16px] text-violet-200/90">
              HRMagix automatically structures gross earnings, statutory employer costs, and employee deductions to optimize tax efficiency.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[24px] bg-white/5 p-1 ring-1 ring-white/15">
            <table className="w-full min-w-[580px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-[12px] font-bold uppercase tracking-wider text-violet-300">
                  <th className="p-5">Salary Component</th>
                  <th className="p-5">Classification</th>
                  <th className="p-5">Statutory & Tax Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[14px]">
                {salaryBreakdown.map((row) => (
                  <tr key={row.component} className="hover:bg-white/5">
                    <td className="p-5 font-bold text-white">{row.component}</td>
                    <td className="p-5">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-bold ${
                        row.type === "Earnings" ? "bg-emerald-500/20 text-emerald-300" : "bg-danger/20 text-rose-300"
                      }`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-5 text-violet-200">{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

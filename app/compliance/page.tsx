import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import IndianCompliance from "@/components/sections/IndianCompliance";
import { Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { indianCompliance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Indian Statutory Compliance Engine",
  description:
    "100% automated Indian payroll compliance for EPF, ESI, Multi-State PT, TDS Section 192, Payment of Gratuity Act, and Labour Welfare Fund.",
};

const complianceRules = [
  {
    law: "Employees' Provident Fund Act, 1952 (EPF)",
    authority: "EPFO (Ministry of Labour & Employment)",
    keyRules: [
      "12% employee contribution deducted from basic wage + dearness allowance (DA)",
      "12% employer contribution split into 8.33% EPS (capped at ₹15,000 wage ceiling) and 3.67% EPF",
      "0.50% EPF Admin Charges (A/C 2) and 0.50% EDLI Contribution (A/C 21)",
      "Direct Electronic Challan cum Return (ECR) text file generated for single-click EPFO portal filing",
    ],
  },
  {
    law: "Employees' State Insurance Act, 1948 (ESI)",
    authority: "ESIC (Ministry of Labour & Employment)",
    keyRules: [
      "Applicable to all employees with monthly gross wages up to ₹21,000 (₹25,000 for persons with disabilities)",
      "0.75% employee contribution deducted from gross wage",
      "3.25% employer contribution computed automatically on covered employees",
      "Auto-generated monthly ESIC monthly contribution statement and challan breakdown",
    ],
  },
  {
    law: "Multi-State Professional Tax (PT)",
    authority: "State Commercial Tax Departments",
    keyRules: [
      "Maharashtra: ₹200/mo (₹300 in February for annual total of ₹2,500 for male employees earning >₹10k, women earning >₹25k)",
      "Karnataka: ₹200/mo for employees with gross salary exceeding ₹25,000/mo",
      "Telangana: Slab-based deductions from ₹150 to ₹200 based on gross salary tiers",
      "Tamil Nadu & West Bengal: Semi-annual and monthly customized state slab tables pre-configured",
    ],
  },
  {
    law: "Income Tax Act, 1961 — Section 192 (TDS on Salary)",
    authority: "Income Tax Department (CBDT)",
    keyRules: [
      "Simultaneous tax calculation comparing Old Tax Regime (with 80C, 80D, HRA, LTA, Home Loan interest) vs. New Tax Regime (Section 115BAC with standard deduction of ₹75,000)",
      "Monthly average tax deduction spread evenly across the financial year (April to March)",
      "Quarterly Form 24Q text files with Annexure II computation for quarterly tax filing",
      "Annual Form 16 Part A and Part B generation with digital signature integration",
    ],
  },
  {
    law: "Payment of Gratuity Act, 1972",
    authority: "Ministry of Labour & Employment",
    keyRules: [
      "Mandatory benefit for employees completing 5 or more continuous years of service",
      "Statutory calculation formula: (15 × Last Drawn Basic Salary × Number of Completed Years) / 26",
      "Automated gratuity provisioning tracker for corporate balance sheet auditing",
      "Tax-exempt gratuity ceiling up to ₹20 Lakhs automatically handled upon full and final (F&F) settlement",
    ],
  },
  {
    law: "Labour Welfare Fund (LWF) & State Shops Act",
    authority: "State Labour Welfare Boards",
    keyRules: [
      "State-specific contribution frequencies: Annual, half-yearly, or monthly deductions based on state board rules",
      "Automated employer and employee split for Maharashtra, Gujarat, Haryana, Tamil Nadu, and Karnataka",
      "Shops and Commercial Establishments Act overtime, working hours, and mandatory weekly off compliance tracking",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Statutory Compliance"
        title="100% Indian labor law and payroll compliance"
        boldFrom={4}
        lede="Engineered specifically for Indian enterprise tax and employment regulations. Zero manual spreadsheet calculations, zero compliance penalties, and direct government portal export files."
        crumb="Compliance"
        actions={
          <Button href="/contact" size="lg">
            Schedule Compliance Walkthrough
          </Button>
        }
      />

      {/* Interactive Compliance Section */}
      <IndianCompliance />

      {/* Statutory Legal Architecture */}
      <section className="bg-surface-sunken/70 py-24 sm:py-28">
        <div className="shell space-y-16">
          <SectionHead
            eyebrow="Regulatory Coverage"
            title={
              <>
                Every Indian labor law <strong>pre-configured in the platform</strong>
              </>
            }
            sub="Understand the exact statutory rules, formula logic, and government filing formats automatically managed by HRMagix."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {complianceRules.map((rule, idx) => (
              <Reveal key={rule.law} delay={idx * 60} y={20}>
                <article className="flex h-full flex-col justify-between rounded-[26px] bg-surface p-7 shadow-soft ring-1 ring-line sm:p-9">
                  <div>
                    <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
                      <span className="rounded-full bg-surface-raised px-3 py-1 text-[11px] font-bold text-accent-deep">
                        Rule 0{idx + 1}
                      </span>
                      <span className="text-[12px] font-semibold text-subtle">
                        {rule.authority}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[19px] font-bold text-heading">
                      {rule.law}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {rule.keyRules.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted">
                          <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-ok" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-xl bg-surface-sunken/80 p-3.5 text-center">
                    <p className="text-[12.5px] font-bold text-accent-deep">
                      Auto-generated ECR & Challan export ready
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full & Final Settlement (F&F) Workflow */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="shell">
          <div className="overflow-hidden rounded-[32px] bg-violet-950 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
                <Icon name="shield" className="h-3.5 w-3.5 text-violet-300" />
                Full & Final (F&F) Settlement Engine
              </span>
              <h2 className="display display-lg mt-5 !text-white">
                Smooth offboarding with zero statutory disputes
              </h2>
              <p className="mt-4 text-[16.5px] leading-relaxed text-violet-200/90 sm:text-[18px]">
                When an employee departs, HRMagix automatically consolidates unpaid salary days, encashable leave balances, gratuity entitlements, notice period recovery/waiver, and loan deductions into an audited single-sheet F&F settlement statement with Form 16 Part B generation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="light" size="md">
                  Consult with Compliance Team
                </Button>
                <Button href="/pricing" variant="outline" size="md" className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70">
                  Explore Enterprise Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

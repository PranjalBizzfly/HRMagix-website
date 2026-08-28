import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Leaves & Holidays Module | HRMagix",
  description:
    "Custom multi-tier leave approval chains, multi-state Indian holiday calendars, auto-accrual policies, comp-off management, and leave encashment workflows.",
};

const leaveFeatures = [
  {
    title: "Multi-Tier Approval Chains",
    tag: "Flexible Hierarchies",
    desc: "Configure 1-step, 2-step, or department-head approval chains with auto-escalation timeouts if a manager is out of office.",
    icon: "layers",
  },
  {
    title: "Multi-State Holiday Calendars",
    tag: "Pan-India Compliance",
    desc: "Assign state-specific holiday lists (Maharashtra, Karnataka, Tamil Nadu, Telangana, Delhi NCR) to branch locations with optional restricted holidays.",
    icon: "calendar",
  },
  {
    title: "Automated Monthly Accruals",
    tag: "Policy leavers",
    desc: "Auto-credit Privilege Leaves (PL), Casual Leaves (CL), and Sick Leaves (SL) on the 1st of every month or quarter with custom probation restrictions.",
    icon: "clock",
  },
  {
    title: "Comp-Off & Encashment Rules",
    tag: "Payroll Sync",
    desc: "Grant compensatory leaves when employees work on designated holidays or weekends. Run automated fiscal year-end leave encashment into payroll.",
    icon: "wallet",
  },
];

const leaveCategories = [
  { name: "Privilege / Earned Leave (PL)", quota: "15-18 Days / Year", rules: "Accrued monthly (1.5 days/mo), carry-forward up to 45 days, encashable at F&F" },
  { name: "Casual Leave (CL)", quota: "8-12 Days / Year", rules: "Lapses at calendar year-end, maximum 3 consecutive days allowed" },
  { name: "Sick Leave (SL)", quota: "7-10 Days / Year", rules: "Medical certificate mandatory for 3+ consecutive sick days" },
  { name: "Maternity Leave", quota: "26 Weeks (182 Days)", rules: "Maternity Benefit Act 2017 compliant with 100% paid wages" },
  { name: "Paternity Leave", quota: "5-15 Working Days", rules: "Usable within 6 months of child's birth" },
];

export default function LeavesModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 02 · Time & Work"
        title="Leave Management & State Holiday Engine"
        boldFrom={2}
        lede="Eliminate email chains and leave confusion. Provide your employees with instant self-service balance checks and managers with 1-click approvals."
        crumb="Leaves & Holidays"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Leaves Demo
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Core Capabilities */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Leave Governance"
            title={
              <>
                Leave policies tailored to <strong>every Indian state and entity</strong>
              </>
            }
            sub="Set clear boundaries for leave requests, document attachments for medical leaves, sandwich rule enforcement, and team leave overlap limits."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {leaveFeatures.map((feat, i) => (
              <Reveal
                key={feat.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={feat.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Instant push notification & Slack/Email alerts</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Leave Categories & Statutory Rules */}
      <section className="bg-violet-950 py-20 text-white sm:py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
              Statutory Quotas
            </span>
            <h2 className="display display-lg mt-4 !text-white">
              Compliant with the Factories Act & Shops & Establishments Act.
            </h2>
            <p className="mt-3 text-[16px] text-violet-200/90">
              Pre-configured leave policy templates that automatically align with your company’s registered state jurisdiction.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[24px] bg-white/5 p-1 ring-1 ring-white/15">
            <table className="w-full min-w-[580px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-[12px] font-bold uppercase tracking-wider text-violet-300">
                  <th className="p-5">Leave Category</th>
                  <th className="p-5">Typical Indian Quota</th>
                  <th className="p-5">Accrual & Carryover Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[14px]">
                {leaveCategories.map((cat) => (
                  <tr key={cat.name} className="hover:bg-white/5">
                    <td className="p-5 font-bold text-white">{cat.name}</td>
                    <td className="p-5 text-emerald-400 font-semibold">{cat.quota}</td>
                    <td className="p-5 text-violet-200 leading-relaxed">{cat.rules}</td>
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

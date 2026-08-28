import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Objectives & OKRs Module | HRMagix",
  description:
    "Align company vision with department and individual quarterly sprints. Real-time OKR cascading, milestone weighting, confidence scores, and sprint health check-ins.",
};

const okrFeatures = [
  {
    title: "Multi-Level OKR Cascades",
    badge: "Company · Dept · Individual",
    desc: "Connect executive company quarterly objectives directly to team initiatives and individual contributor Key Results for clear company-wide visibility.",
    icon: "target",
  },
  {
    title: "Weighted Key Results & Milestones",
    badge: "Dynamic Weightings",
    desc: "Assign fractional weights to critical deliverables. Supports numeric targets (₹ revenue, % growth), boolean milestones, and metric threshold ranges.",
    icon: "chart",
  },
  {
    title: "Confidence Scoring & Health Alerts",
    badge: "Early Risk Detection",
    desc: "Owners score their confidence (High, Medium, At-Risk) weekly. Flag blocked initiatives before quarter-end with automated executive Slack notifications.",
    icon: "sparkle",
  },
  {
    title: "Continuous Sprint Check-ins",
    badge: "Bi-Weekly Sync",
    desc: "Eliminate stressful annual performance reviews. Keep goals alive with bi-weekly progress updates, blockers discussion, and real-time manager feedback.",
    icon: "chat",
  },
];

const sampleOkrs = [
  {
    objective: "Scale Annual Recurring Revenue to ₹15 Cr in Q3",
    level: "Company Level",
    owner: "Executive Leadership",
    progress: 78,
    krs: [
      "Close 45 new mid-market enterprise deals (Target: 45 · Achieved: 38)",
      "Maintain net revenue retention above 115% across existing SaaS cohorts",
      "Launch automated direct bank payment gateway partnership",
    ],
  },
  {
    objective: "Achieve 99.95% Core Platform Availability & ISO 27001 Readiness",
    level: "Engineering & Infra",
    owner: "Platform Team",
    progress: 92,
    krs: [
      "Migrate Redis cluster to multi-AZ AWS Mumbai deployment",
      "Reduce 95th percentile API response time to <120ms",
      "Complete Stage-2 ISO 27001 external audit with zero major non-conformities",
    ],
  },
];

export default function OkrsModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 04 · Performance"
        title="Continuous Objectives & OKR Engine"
        boldFrom={2}
        lede="Turn high-level corporate strategy into actionable, transparent team sprints. Foster alignment, accountability, and measurable results."
        crumb="Objectives & OKRs"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book OKR Walkthrough
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Core Features */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Strategic Alignment"
            title={
              <>
                Goal setting that <strong>drives real execution</strong>
              </>
            }
            sub="Most goal frameworks fail because goals are set in January and forgotten until December. HRMagix embeds OKRs into everyday weekly workflows."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {okrFeatures.map((feat, i) => (
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
                      {feat.badge}
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
                  <span>Integrates with 1-on-1s and quarterly appraisals</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live OKR Hierarchy Preview */}
      <section className="bg-violet-950 py-20 text-white sm:py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
              OKR Cascade Architecture
            </span>
            <h2 className="display display-lg mt-4 !text-white">
              Transparent, measurable progress at every layer.
            </h2>
            <p className="mt-3 text-[16px] text-violet-200/90">
              See how corporate objectives break down into tangible team deliverables with live completion tracking.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {sampleOkrs.map((okr) => (
              <div key={okr.objective} className="rounded-[24px] bg-white/5 p-7 ring-1 ring-white/15 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-brand/30 px-3 py-0.5 text-[11.5px] font-bold text-violet-300">
                        {okr.level}
                      </span>
                      <span className="text-[13px] text-violet-300">Owner: {okr.owner}</span>
                    </div>
                    <h3 className="mt-2 font-display text-[20px] font-bold text-white">
                      {okr.objective}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-display text-[24px] font-bold text-emerald-400">
                      {okr.progress}%
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11.5px] font-bold text-emerald-300">
                      On Track
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-violet-300">
                    Key Results & Deliverables
                  </p>
                  {okr.krs.map((kr) => (
                    <div key={kr} className="flex items-start gap-2.5 text-[14px] text-violet-100">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ok-dot" />
                      <span>{kr}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

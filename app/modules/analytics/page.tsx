import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "People Analytics Module | HRMagix",
  description:
    "Executive HR dashboards, department headcount growth, voluntary vs. involuntary attrition heatmaps, gender diversity ratios, and payroll cost trends.",
};

const analyticsMetrics = [
  {
    title: "Headcount Growth & Capacity",
    badge: "Workforce Planning",
    desc: "Track hiring velocity, departmental expansion rates, contractor vs. full-time ratios, and planned vs. actual capacity in real-time.",
    icon: "chart",
  },
  {
    title: "Attrition & Turnover Heatmaps",
    badge: "Retention Insights",
    desc: "Analyze voluntary and involuntary turnover by tenure, manager, location, and seniority band to spot root causes of talent attrition.",
    icon: "layers",
  },
  {
    title: "Diversity & Demographic Metrics",
    badge: "DEI Reporting",
    desc: "Monitor gender diversity ratios across leadership tiers, age distribution, tenure cohorts, and salary equity across demographic segments.",
    icon: "sparkle",
  },
  {
    title: "Payroll & Compensation Trends",
    badge: "Financial Health",
    desc: "Visualize monthly gross salary spend, overtime payouts, statutory employer contributions (PF/ESI), and average cost per employee.",
    icon: "wallet",
  },
];

export default function AnalyticsModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 12 · Executive Analytics"
        title="People Analytics & Executive Insights"
        boldFrom={2}
        lede="Turn raw workforce data into actionable leadership decisions. Real-time dashboards for headcount trends, attrition risks, and compensation costs."
        crumb="Analytics"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Analytics Walkthrough
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
            eyebrow="Data-Driven HR"
            title={
              <>
                Executive insights at <strong>your fingertips</strong>
              </>
            }
            sub="No more waiting days for HR teams to stitch together Excel reports. Access live executive dashboards with 1-click PDF/Excel export."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {analyticsMetrics.map((am, i) => (
              <Reveal
                key={am.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={am.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {am.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {am.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {am.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Scheduled weekly/monthly email executive summaries</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

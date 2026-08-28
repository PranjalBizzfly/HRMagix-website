import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "PIPs & Growth Module | HRMagix",
  description:
    "Structured 30/60/90-day Performance Improvement Plans (PIPs), objective milestone turnaround criteria, confidential coaching logs, and transparent outcome documentation.",
};

const pipStages = [
  {
    step: "01",
    title: "PIP Formulation & Objective Benchmarks",
    desc: "Manager and HR define specific competency gaps, concrete deliverables, required turnaround standards, and weekly checkpoint dates.",
  },
  {
    step: "02",
    title: "Weekly Coaching & Documentation Logs",
    desc: "Private journal entries tracking 1-on-1 mentorship sessions, resources provided, skill workshops attended, and incremental progress.",
  },
  {
    step: "03",
    title: "Mid-Term 30/45-Day Progress Review",
    desc: "Interim evaluation assessing whether the employee is trending towards successful turnaround with formal acknowledgment by both parties.",
  },
  {
    step: "04",
    title: "Final Calibration & Outcome Sign-Off",
    desc: "Objective evaluation against original baseline criteria leading to successful PIP completion, role realignment, or structured exit.",
  },
];

export default function PipsModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 06 · Performance"
        title="Constructive Performance Improvement & Growth"
        boldFrom={2}
        lede="Turn underperformance into structured growth opportunities. Provide struggling team members with transparent turnaround benchmarks and fair coaching records."
        crumb="PIPs & Growth"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book PIP Walkthrough
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Structured PIP Lifecycle */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Growth Governance"
            title={
              <>
                Fair, transparent, and <strong>legally defensible workflows</strong>
              </>
            }
            sub="Ensure every performance improvement initiative follows a standard, unbiased operational protocol with complete digital documentation."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pipStages.map((stage, i) => (
              <Reveal
                key={stage.step}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[24px] bg-surface-sunken/70 p-7 ring-1 ring-line"
              >
                <div>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand font-display text-[15px] font-bold text-white shadow-soft">
                    {stage.step}
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold text-heading">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[12px] font-bold text-accent">
                  <TickCircle className="h-3.5 w-3.5" />
                  <span>Audit trail verified</span>
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

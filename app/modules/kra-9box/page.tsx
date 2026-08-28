import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "KRA & 9-Box Talent Matrix Module | HRMagix",
  description:
    "Role-specific Key Result Area (KRA) competency rubrics, multi-rater appraisal cycles, and interactive 9-box talent matrix calibration for high-potential leadership identifying.",
};

const kraCapabilities = [
  {
    title: "Role-Specific Competency Rubrics",
    badge: "KRA Framework",
    desc: "Define custom technical, managerial, and cultural competencies tailored to each job family and seniority band with objective 1-5 rating rubrics.",
    icon: "target",
  },
  {
    title: "Interactive 9-Box Talent Matrix",
    badge: "Performance vs Potential",
    desc: "Plot employee performance against growth potential on an interactive 9-quadrant grid. Instantly identify high-potentials, core performers, and talent at risk.",
    icon: "grid",
  },
  {
    title: "Bias-Free Calibration Sessions",
    badge: "Executive Reviews",
    desc: "Enable department heads and HR leaders to calibrate ratings across teams, normalize bell curves, and ensure fair merit-based compensation revisions.",
    icon: "layers",
  },
  {
    title: "Continuous 360-Degree Feedback",
    badge: "Multi-Rater Input",
    desc: "Gather confidential peer reviews, upward manager ratings, and cross-functional feedback to provide a well-rounded appraisal perspective.",
    icon: "chat",
  },
];

const nineBoxGrid = [
  { quadrant: "Enigma / High Potential", pos: "Low Perf · High Pot", action: "Identify blockers, assign senior mentor, test with stretch project" },
  { quadrant: "Growth Star", pos: "Med Perf · High Pot", action: "Fast-track development, provide domain training, prep for team lead" },
  { quadrant: "Future Leader / Star", pos: "High Perf · High Pot", action: "Critical retention priority, key leadership succession, equity grants" },
  { quadrant: "Dilemma", pos: "Low Perf · Med Pot", action: "Review role fit, clarify expectations, initiate structured 30-day PIP" },
  { quadrant: "Core Contributor", pos: "Med Perf · Med Pot", action: "Acknowledge consistent delivery, provide incremental skill upgrades" },
  { quadrant: "High Performer", pos: "High Perf · Med Pot", action: "Deep functional specialist, leverage as domain authority/coach" },
  { quadrant: "Underperformer", pos: "Low Perf · Low Pot", action: "Actionable 60-day PIP or transition planning" },
  { quadrant: "Effective Worker", pos: "Med Perf · Low Pot", action: "Stable role execution, maintain clear task boundaries" },
  { quadrant: "Trusted Professional", pos: "High Perf · Low Pot", action: "High subject matter expertise, value stability in key position" },
];

export default function Kra9BoxModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 05 · Performance"
        title="KRA & 9-Box Talent Calibration Matrix"
        boldFrom={2}
        lede="Eliminate subjective appraisals. Evaluate competencies with structured rubrics and calibrate high-potential future leaders on interactive 9-box grids."
        crumb="KRA & 9-Box"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Appraisal Walkthrough
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
            eyebrow="Talent Meritocracy"
            title={
              <>
                Appraisals that <strong>reward true impact</strong>
              </>
            }
            sub="Transform annual performance reviews into a structured, continuous meritocracy with role-based Key Result Areas and objective talent calibration."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {kraCapabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={cap.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {cap.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Feeds directly into merit bonus & succession planning</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9-Box Calibration Grid Breakdown */}
      <section className="bg-violet-950 py-20 text-white sm:py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
              Talent Matrix Framework
            </span>
            <h2 className="display display-lg mt-4 !text-white">
              The 9-Box Talent Calibration Model
            </h2>
            <p className="mt-3 text-[16px] text-violet-200/90">
              Categorize talent by comparing demonstrated performance against future growth capacity to make informed promotion, succession, and retention decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nineBoxGrid.map((box, i) => (
              <div
                key={box.quadrant}
                className="rounded-[20px] bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-violet-300">
                    Quadrant 0{i + 1}
                  </span>
                  <span className="rounded-full bg-brand/30 px-2 py-0.5 text-[10.5px] font-semibold text-violet-200">
                    {box.pos}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[18px] font-bold text-white">
                  {box.quadrant}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-violet-200/80">
                  <strong>Action:</strong> {box.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

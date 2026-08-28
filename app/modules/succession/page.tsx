import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Succession Planning Module | HRMagix",
  description:
    "Identify critical single-point-of-failure roles, build internal leadership candidate benches, assess flight-risk talent, and track executive readiness timelines.",
};

const successionPillars = [
  {
    title: "Critical Role Risk Assessment",
    badge: "Business Continuity",
    desc: "Map mission-critical engineering, sales, and executive roles to evaluate immediate vacancy vulnerability and revenue risk impact.",
    icon: "shield",
  },
  {
    title: "Leadership Bench Strength",
    badge: "Readiness Timelines",
    desc: "Categorize potential successors by readiness horizons: Ready Now (&lt;6 months), Ready 1-2 Years, and Emerging Talent for long-term pipelines.",
    icon: "compass",
  },
  {
    title: "Flight Risk & Retention Matrix",
    badge: "Proactive Interventions",
    desc: "Cross-reference compensation competitiveness, tenure, engagement scores, and appraisal ratings to identify high-value talent at risk of departure.",
    icon: "target",
  },
  {
    title: "Tailored Executive Development",
    badge: "Mentorship Tracks",
    desc: "Create bespoke developmental roadmaps, executive shadowing assignments, and leadership rotations to accelerate bench readiness.",
    icon: "sparkle",
  },
];

export default function SuccessionModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 11 · People & Leadership"
        title="Succession Planning & Talent Pipeline"
        boldFrom={2}
        lede="Protect organizational continuity. Identify key person dependencies, evaluate bench strength, and prepare high-potential leaders for executive roles."
        crumb="Succession"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Succession Walkthrough
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
            eyebrow="Leadership Continuity"
            title={
              <>
                Build a leadership bench that <strong>ensures long-term growth</strong>
              </>
            }
            sub="Never get caught off guard when key leaders transition. Build a systematic talent pipeline that secures critical institutional knowledge."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {successionPillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={p.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Linked with 9-Box calibration and OKR performance</span>
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

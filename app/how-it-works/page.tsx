import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import Contrast from "@/components/sections/Contrast";
import StepTrail from "@/components/StepTrail";
import Workspace from "@/components/Workspace";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Parallax, Reveal } from "@/components/motion";
import { showcases, site, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Get started with HRMagix in three steps — add your team, switch on modules, then let reminders, approvals and reports run themselves.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Get started in 3 simple steps"
        boldFrom={3}
        lede="No implementation project, no consultants. Import your people, choose your modules, and the platform starts doing the busywork."
        crumb="How it works"
        actions={
          <>
            <Button href="/contact" variant="outline" arrow={false} size="lg">
              Watch Demo
            </Button>
            <Button href="/contact" size="lg">
              Book a Demo
            </Button>
          </>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <StepTrail />
        </div>
      </section>

      {/* Day one */}
      <section className="bg-violet-50/70 py-20 sm:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <SectionHead
              align="left"
              eyebrow="Inside the workspace"
              title={
                <>
                  Day one <strong>looks like this</strong>
                </>
              }
              sub={site.hero.lede}
            />
            <ol className="mt-10 space-y-6">
              {steps.map((s) => (
                <Reveal as="li" key={s.n} y={14} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-500 font-display text-[13px] font-bold text-white">
                    {s.n}
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-bold text-violet-950">
                      {s.title}
                    </span>
                    <span className="mt-1.5 block max-w-[44ch] text-[14.5px] leading-relaxed text-ink-soft">
                      {s.copy}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <Parallax speed={0.028}>
            <Reveal y={26} scale={0.97}>
              <Workspace />
            </Reveal>
          </Parallax>
        </div>
      </section>

      <Contrast />

      {/* Automation */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Then it runs itself"
            title={
              <>
                Automation that <strong>gives the week back</strong>
              </>
            }
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {showcases.map((sc, i) => (
              <Reveal
                key={sc.key}
                delay={i * 90}
                y={20}
                className="rounded-[26px] bg-violet-50/70 p-7 ring-1 ring-violet-100 sm:p-9"
              >
                <p className="font-display text-[14px] font-bold text-violet-600">{sc.kicker}</p>
                <h3 className="mt-3 font-display text-[clamp(1.15rem,2.6vw,1.5rem)] font-bold leading-snug">
                  {sc.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{sc.copy}</p>
                <ul className="mt-6 space-y-3 border-t border-violet-200/70 pt-6">
                  {sc.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <TickCircle className="mt-0.5 text-violet-500" />
                      <span className="text-[14.5px] text-ink">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

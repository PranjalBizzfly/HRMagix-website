import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import Contrast from "@/components/sections/Contrast";
import StepTrail from "@/components/StepTrail";
import Workspace from "@/components/Workspace";
import Media from "@/components/Media";
import { BrowserFrame } from "@/components/Frames";
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
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              Browse modules
            </Button>
            <Button href="/contact" size="lg">
              Book a Demo
            </Button>
          </>
        }
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <StepTrail />
        </div>
      </section>

      {/* Day one */}
      <section className="bg-surface-sunken/70 py-20 sm:py-24">
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
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-display text-[13.5px] font-bold text-white">
                    {s.n}
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-bold text-heading">
                      {s.title}
                    </span>
                    <span className="mt-1.5 block max-w-[44ch] text-[15.5px] leading-relaxed text-muted">
                      {s.copy}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal y={26} scale={0.98}>
            <div className="overflow-hidden rounded-[26px] bg-surface p-7 shadow-lift ring-1 ring-line-strong sm:p-8">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-ok-dot animate-pulse" />
                  <span className="font-display text-[15px] font-bold text-heading">
                    Day 1 Deployment Progress
                  </span>
                </div>
                <span className="rounded-full bg-ok-soft px-2.5 py-1 text-[11.5px] font-bold text-ok">
                  Ready in 24 Hours
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                <div className="rounded-xl bg-surface-sunken/70 p-4 ring-1 ring-line">
                  <div className="flex items-center justify-between">
                    <span className="text-[13.5px] font-bold text-heading">Step 1: Employee Directory Import</span>
                    <span className="text-[11.5px] font-bold text-ok">✓ Completed</span>
                  </div>
                  <p className="mt-1 text-[12.5px] text-muted">820 profiles synced from Excel with PAN, Aadhaar & Bank Details.</p>
                </div>

                <div className="rounded-xl bg-surface-sunken/70 p-4 ring-1 ring-line">
                  <div className="flex items-center justify-between">
                    <span className="text-[13.5px] font-bold text-heading">Step 2: Biometric & Shift Policy Sync</span>
                    <span className="text-[11.5px] font-bold text-ok">✓ Completed</span>
                  </div>
                  <p className="mt-1 text-[12.5px] text-muted">eSSL/Matrix hardware connected with rotational shift rules.</p>
                </div>

                <div className="rounded-xl bg-surface-sunken/70 p-4 ring-1 ring-line">
                  <div className="flex items-center justify-between">
                    <span className="text-[13.5px] font-bold text-heading">Step 3: Indian Statutory Payroll Activation</span>
                    <span className="text-[11.5px] font-bold text-ok">✓ Completed</span>
                  </div>
                  <p className="mt-1 text-[12.5px] text-muted">EPF, ESI, Multi-State PT, and Section 192 TDS slabs configured.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Contrast />

      {/* Automation */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Autonomous Workflows"
            title={
              <>
                Automation that <strong>gives your HR team the week back</strong>
              </>
            }
            sub="Set your organization policies once — then let automated approval workflows, compliance reminders, and payroll runs execute themselves."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {showcases.map((sc, i) => (
              <Reveal
                key={sc.key}
                delay={i * 90}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3 py-1 text-[12px] font-bold text-accent-deep">
                    Workflow 0{i + 1}
                  </span>
                  <p className="mt-4 font-display text-[14px] font-bold uppercase tracking-wider text-accent">
                    {sc.kicker}
                  </p>
                  <h3 className="mt-1 font-display text-[22px] font-bold text-heading">
                    {sc.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {sc.copy}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-surface p-4 shadow-sm ring-1 ring-line">
                  <div className="flex items-center gap-2.5 text-[13px] font-bold text-ok-strong">
                    <span className="h-2 w-2 rounded-full bg-ok-dot animate-pulse" />
                    <span>Active 24/7 background scheduler</span>
                  </div>
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

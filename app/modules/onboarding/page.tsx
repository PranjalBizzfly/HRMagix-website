import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Onboarding & Lifecycle Module | HRMagix",
  description:
    "Self-service pre-boarding portal for Indian candidates, automated offer letter generation with e-signatures, IT asset provisioning, and 30-day orientation checklists.",
};

const onboardingSteps = [
  {
    step: "01",
    title: "Digital Offer Letter & e-Signatures",
    desc: "Generate customized appointment letters with Aadhaar/PAN-linked digital signature workflows for instant candidate acceptance.",
    icon: "sparkle",
  },
  {
    step: "02",
    title: "Self-Service Pre-Boarding Vault",
    desc: "Candidates upload Aadhaar, PAN, educational certificates, previous employer Relieving Letters, and cancelled cheque before Day 1.",
    icon: "folder",
  },
  {
    step: "03",
    title: "Automated IT & Asset Provisioning",
    desc: "Auto-trigger hardware requests to IT teams for laptops, monitors, email accounts, and security badges with serial tracking.",
    icon: "rocket",
  },
  {
    step: "04",
    title: "30-60-90 Day Orientation Trail",
    desc: "Structured milestone checklists, buddy assignments, introductory team meetings, and automated 30-day feedback surveys.",
    icon: "target",
  },
];

export default function OnboardingModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 09 · People & Lifecycle"
        title="Paperless Onboarding & Employee Lifecycle"
        boldFrom={2}
        lede="Deliver a world-class candidate pre-boarding experience. Automate document collection, appointment letters, and IT asset allocation before Day 1."
        crumb="Onboarding"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Onboarding Walkthrough
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Core Onboarding Journey */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Candidate Experience"
            title={
              <>
                From signed offer to <strong>productive team member</strong>
              </>
            }
            sub="Eliminate first-day paperwork chaos. Ensure every new employee feels welcomed, equipped, and productive from their very first hour."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {onboardingSteps.map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[24px] bg-surface-sunken/70 p-7 ring-1 ring-line"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand font-display text-[15px] font-bold text-white shadow-soft">
                      {s.step}
                    </span>
                    <IconTile name={s.icon as any} size="sm" className="!bg-surface shadow-sm" />
                  </div>
                  <h3 className="mt-5 font-display text-[18px] font-bold text-heading">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[12px] font-bold text-accent">
                  <TickCircle className="h-3.5 w-3.5" />
                  <span>Auto-creates payroll profile</span>
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

import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import Contrast from "@/components/sections/Contrast";
import Capabilities from "@/components/sections/Capabilities";
import Pillars from "@/components/sections/Pillars";
import ClosingCta from "@/components/sections/ClosingCta";
import AreaPanels from "@/components/AreaPanels";
import ModuleExplorer from "@/components/ModuleExplorer";
import StepTrail from "@/components/StepTrail";
import TestimonialDeck from "@/components/TestimonialDeck";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Marquee from "@/components/Marquee";
import { Arrow, Button, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { assurances, modules } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Contrast />
      <Capabilities />
      <Pillars />

      {/* Workspace areas — tabbed panel */}
      <section className="bg-violet-50/70 py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Built for every part of people ops"
            title={
              <>
                One workspace, <strong>every HR workflow</strong>
              </>
            }
            sub="Attendance, performance, payroll and engagement each get their own home in the same platform — switched on to match your policies."
          />
          <div className="mt-12">
            <AreaPanels />
          </div>
        </div>
      </section>

      {/* Module wall */}
      <section id="modules" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="All modules included"
            title={
              <>
                Twelve modules. <strong>One login.</strong>
              </>
            }
            sub="Filter by the part of the workspace you are setting up — every module is part of the platform."
          />
          <div className="mt-12">
            <ModuleExplorer />
          </div>
          <Reveal delay={160} className="mt-10 flex justify-center">
            <Button href="/modules" variant="outline">
              Browse the module map
            </Button>
          </Reveal>
        </div>
        <div className="mt-16">
          <Marquee items={modules.map((m) => m.name)} duration={52} />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-violet-50/70 py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="How it works"
            title={
              <>
                Get started in <strong>3 simple steps</strong>
              </>
            }
            sub="Import your people, switch on the modules that match your policies, and let the platform take the busywork from there."
          />
          <div className="mt-14">
            <StepTrail />
          </div>
          <Reveal delay={180} className="mt-10 flex justify-center">
            <Button href="/how-it-works" variant="outline">
              See the full walkthrough
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Cost calculator */}
      <section id="calculator" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Transparent pricing"
            title={
              <>
                Know the cost <strong>before you talk to us</strong>
              </>
            }
            sub="Per employee, per month, published up front. No hidden fees and no quote required until you reach Enterprise."
          />
          <div className="mt-12">
            <Calculator />
          </div>
          <Reveal delay={160} className="mt-8 flex justify-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-violet-600"
            >
              Compare all three plans <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-violet-50/70 py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Testimonials"
            title={
              <>
                Loved by <strong>teams everywhere</strong>
              </>
            }
          />
          <div className="mt-12">
            <TestimonialDeck />
          </div>
        </div>
      </section>

      {/* Assurances */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Built to be trusted"
            title={
              <>
                Built for scale. <strong>Audited by design.</strong>
              </>
            }
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 80}
                y={18}
                className="rounded-[22px] bg-violet-50 p-6 ring-1 ring-violet-100"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-violet-600 ring-1 ring-violet-100">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2.5 16.5 5v5c0 3.6-2.6 6.6-6.5 7.5C6.1 16.6 3.5 13.6 3.5 10V5L10 2.5Z" />
                    <path d="M7.4 10.2 9.3 12l3.4-3.8" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-[16.5px] font-bold">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{a.copy}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-violet-50/70 py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <SectionHead
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Answers <strong>before you ask</strong>
                </>
              }
            />
            <Reveal delay={180} className="mt-7">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-violet-600"
              >
                Read all questions <Arrow />
              </Link>
            </Reveal>
          </div>
          <Faq limit={5} />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

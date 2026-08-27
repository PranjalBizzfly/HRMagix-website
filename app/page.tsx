import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import Contrast from "@/components/sections/Contrast";
import Capabilities from "@/components/sections/Capabilities";
import Pillars from "@/components/sections/Pillars";
import ProductGallery from "@/components/sections/ProductGallery";
import QuoteBand from "@/components/sections/QuoteBand";
import ClosingCta from "@/components/sections/ClosingCta";
import AreaPanels from "@/components/AreaPanels";
import ModuleExplorer from "@/components/ModuleExplorer";
import StepTrail from "@/components/StepTrail";
import TestimonialDeck from "@/components/TestimonialDeck";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Marquee from "@/components/Marquee";
import { KudosWall } from "@/components/ProductVisuals";
import { Arrow, Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { assurances, modules } from "@/lib/content";

/**
 * Section rhythm is deliberately uneven: tall storytelling blocks (pillars,
 * modules) alternate with short focused bands (quote, assurances) and change
 * ground — wash, white, brand gradient, deep violet, two different tints — so
 * the page never settles into a repeating pattern.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Contrast />
      <Capabilities />
      <Pillars />

      {/* Product showcase — device gallery of the module views */}
      <section id="showcase" className="relative overflow-hidden bg-violet-50/70 py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 dotted opacity-50" aria-hidden="true" />
        <div className="shell relative">
          <SectionHead
            eyebrow="Inside the product"
            title={
              <>
                See the workspace <strong>screen by screen</strong>
              </>
            }
            sub="Step through the views your team lives in — attendance, goals, payroll and recognition."
          />
          <div className="mt-14">
            <ProductGallery />
          </div>
        </div>
      </section>

      {/* Short dark break between the two longest sections */}
      <QuoteBand index={0} />

      {/* Workspace areas — medium, light tint */}
      <section className="bg-violet-50/70 py-20 sm:py-24">
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
          <div className="mt-14">
            <AreaPanels />
          </div>
        </div>
      </section>

      {/* Modules — the page's tallest block, white */}
      <section id="modules" className="bg-white py-24 sm:py-28 lg:py-32">
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
          <div className="mt-14">
            <ModuleExplorer />
          </div>
          <Reveal delay={160} className="mt-12 flex justify-center">
            <Button href="/modules" variant="outline">
              Browse the module map
            </Button>
          </Reveal>
        </div>
        <div className="mt-16">
          <Marquee items={modules.map((m) => m.name)} duration={52} />
        </div>
      </section>

      {/* Steps — deeper tint with a dotted ground, medium height */}
      <section className="relative overflow-hidden bg-violet-100/60 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
        <div className="shell relative">
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
          <Reveal delay={180} className="mt-12 flex justify-center">
            <Button href="/how-it-works" variant="outline">
              See the full walkthrough
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Recognition — short, asymmetric, no section heading block */}
      <section className="bg-white py-16 sm:py-20">
        <div className="shell grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHead
              align="left"
              size="md"
              eyebrow="Recognition"
              title={
                <>
                  Culture you can <strong>see in the workspace</strong>
                </>
              }
              sub="Celebrate wins with kudos, badges and a culture wall your team loves — right where the work already happens."
            />
            <Reveal delay={200} className="mt-9">
              <Link
                href="/modules"
                className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-violet-600"
              >
                See the engagement modules <Arrow />
              </Link>
            </Reveal>
          </div>
          <Reveal y={22} delay={120}>
            <KudosWall />
          </Reveal>
        </div>
      </section>

      {/* Calculator — dark panel on white, medium */}
      <section id="calculator" className="bg-white pb-24 pt-4 sm:pb-28">
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
          <div className="mt-14">
            <Calculator />
          </div>
          <Reveal delay={160} className="mt-8 flex justify-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-violet-600"
            >
              Compare all three plans <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials — light tint, medium */}
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
          <div className="mt-14">
            <TestimonialDeck />
          </div>
        </div>
      </section>

      {/* Assurances — slim strip, four inline items, no big heading */}
      <section className="border-y border-violet-100 bg-white py-12 sm:py-14">
        <div className="shell">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 70} y={12} className="flex items-start gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100">
                  <Icon name={["scale", "shield", "lock", "layers"][i] as "shield"} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-[15.5px] font-bold text-violet-950">
                    {a.title}
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-ink-soft">
                    {a.copy}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ — tinted, split, tall */}
      <section className="bg-violet-50/70 py-20 sm:py-24 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
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
            <Reveal delay={180} className="mt-9">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-violet-600"
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

import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import Manifesto from "@/components/sections/Manifesto";
import Pillars from "@/components/sections/Pillars";
import IndianCompliance from "@/components/sections/IndianCompliance";
import IndustryShowcase from "@/components/sections/IndustryShowcase";
import Contrast from "@/components/sections/Contrast";
import Calculator from "@/components/Calculator";
import TestimonialDeck from "@/components/TestimonialDeck";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/sections/ClosingCta";
import { SectionHead } from "@/components/ui";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { assurances } from "@/lib/content";
import { Icon } from "@/components/icons";

/**
 * Bespoke, content-rich homepage architecture inspired by Trivana:
 * 1. Editorial Hero (Single authentic Indian workplace photograph)
 * 2. Trust Band (Key enterprise scale facts)
 * 3. Philosophy & Manifesto (Deep centered thought leadership narrative)
 * 4. The Three Operational Pillars (Bespoke split narrative treatments)
 * 5. Indian Statutory & Labor Law Engine (Interactive regulatory breakdown)
 * 6. Solutions by Sector (Targeted operational workflows)
 * 7. Before / After Operational Contrast
 * 8. Transparent Indian Enterprise Pricing & Estimator
 * 9. Verified Indian HR Leadership Case Stories
 * 10. In-Depth Operational FAQs
 * 11. Closing Consultation & Demo Invitation
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Editorial Hero */}
      <Hero />

      {/* 2. Trust Band */}
      <TrustBand />

      {/* 3. Thought-Leadership Philosophy & Manifesto */}
      <Manifesto />

      {/* 4. Three Strategic Operational Pillars */}
      <Pillars />

      {/* 5. Indian Statutory Compliance & Multi-State Labor Laws */}
      <IndianCompliance />

      {/* 6. Solutions by Industry */}
      <IndustryShowcase />

      {/* 7. Operational Contrast */}
      <Contrast />

      {/* 8. Transparent Pricing & Cost Estimator */}
      <section id="calculator" className="bg-surface py-24 sm:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Transparent Enterprise Pricing"
            title={
              <>
                Predictable pricing <strong>before you speak with sales</strong>
              </>
            }
            sub="Published per-employee rates with zero setup fees and zero hidden maintenance charges. Every plan includes a 14-day full access trial."
          />
          <div className="mt-14">
            <Calculator />
          </div>
          <Reveal delay={160} className="mt-8 flex justify-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              Compare all three plans in detail <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 9. Verified Customer Voices from Indian Enterprises */}
      <section className="bg-surface-sunken/70 py-24 sm:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Verified Indian Enterprise Stories"
            title={
              <>
                Trusted by <strong>People Operations leaders across India</strong>
              </>
            }
            sub="See how HR and Finance leaders in Mumbai, Pune, Bangalore, and Delhi NCR eliminated operational fragmentation."
          />
          <div className="mt-14">
            <TestimonialDeck />
          </div>
        </div>
      </section>

      {/* 10. Assurances */}
      <section className="border-y border-line bg-surface py-14 sm:py-16">
        <div className="shell">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 70} y={12} className="flex items-start gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-sunken text-accent ring-1 ring-line">
                  <Icon name={["scale", "shield", "lock", "layers"][i] as "shield"} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-[15.5px] font-bold text-heading">
                    {a.title}
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">
                    {a.copy}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. In-Depth Operational FAQs */}
      <section className="bg-surface-sunken/70 py-24 sm:py-28 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <SectionHead
              align="left"
              eyebrow="Statutory & Technical FAQ"
              title={
                <>
                  In-depth answers <strong>to your compliance & technical questions</strong>
                </>
              }
              sub="Got questions about biometric sync, PF/ESI challans, multi-state PT, or historical Excel data migration? Find detailed answers here."
            />
            <Reveal delay={180} className="mt-9">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
              >
                Read complete FAQ knowledgebase <Arrow />
              </Link>
            </Reveal>
          </div>
          <Faq limit={6} />
        </div>
      </section>

      {/* 12. Leadership Consultation Closing */}
      <ClosingCta />
    </>
  );
}

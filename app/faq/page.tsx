import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import Faq from "@/components/Faq";
import { Arrow, Button, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { faqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about HRMagix pricing, the 14-day free trial, modules, setup, SSO and payroll compliance.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="FAQ"
        title="Answers before you ask"
        boldFrom={1}
        lede="Pricing, trials, modules and setup — the questions people teams put to us most often."
        crumb="FAQ"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <SectionHead
              align="left"
              eyebrow="Still curious?"
              title={
                <>
                  Talk to a <strong>real person</strong>
                </>
              }
              sub={site.contact.blurb}
            />
            <Reveal delay={180} className="mt-7 space-y-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-2 text-[15px] font-semibold text-violet-600"
              >
                {site.contact.email} <Arrow />
              </a>
              <Button href="/contact" variant="outline" size="md">
                Send us a message
              </Button>
            </Reveal>
          </div>

          <Faq />
        </div>
      </section>

      <section className="bg-violet-50/70 py-14">
        <div className="shell flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 className="display text-[clamp(1.3rem,3vw,1.9rem)]">
            Ready to <strong>see it live?</strong>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-violet-600"
          >
            Book a demo <Arrow />
          </Link>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

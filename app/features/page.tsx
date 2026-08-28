import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Capabilities from "@/components/sections/Capabilities";
import Pillars from "@/components/sections/Pillars";
import ProductGallery from "@/components/sections/ProductGallery";
import ClosingCta from "@/components/sections/ClosingCta";
import AreaPanels from "@/components/AreaPanels";
import Marquee from "@/components/Marquee";
import { Button, SectionHead } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Counter, Reveal } from "@/components/motion";
import { features, modules, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Smart attendance, leaves, automated payroll, performance & OKRs, recognition and lifecycle — everything you need to manage your people.",
};

/** Which of the twelve modules deliver each capability. */
const relatedModules: Record<string, string[]> = {
  attendance: ["Attendance & Shifts", "Analytics"],
  leaves: ["Leaves & Holidays"],
  payroll: ["Payroll", "Documents"],
  performance: ["Objectives & OKRs", "KRA & 9-Box", "PIPs & Growth"],
  recognition: ["Recognition", "1-on-1s & Meetings"],
  lifecycle: ["Onboarding", "Documents", "Succession"],
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Why HRMagix"
        title="Everything you need to manage your people"
        boldFrom={4}
        lede="Six capabilities that cover the working week — from the first punch-in to the payslip, the review and the kudos that follow."
        crumb="Features"
        actions={
          <>
            <Button href="/how-it-works" variant="outline" arrow={false} size="lg">
              See how it works
            </Button>
            <Button href="/contact" size="lg">
              Get Started
            </Button>
          </>
        }
      />

      {/* Counters */}
      <section className="border-b border-line bg-surface">
        <div className="shell grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4 sm:py-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} y={12} className="text-center">
              <p className="display text-[clamp(1.8rem,4vw,2.6rem)] font-bold">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-[13.5px] text-subtle">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Capabilities />

      {/* Capability detail — tinted rows with module chips */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="In detail"
            title={
              <>
                What each capability <strong>actually does</strong>
              </>
            }
          />
          <div className="mt-14 space-y-3">
            {features.map((f, i) => (
              <Reveal key={f.key} delay={i * 60} y={18}>
                <article className="grid gap-5 rounded-[24px] bg-surface-sunken/70 p-6 ring-1 ring-line sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-center lg:gap-12">
                  <div className="flex items-center gap-4">
                    <IconTile name={f.icon} size="lg" className="!bg-surface shadow-soft" />
                    <div>
                      <p className="font-display text-[12px] font-bold tabular-nums text-label">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display text-[clamp(1.15rem,2.6vw,1.6rem)] font-bold leading-tight">
                        {f.title}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-[16px] leading-relaxed text-muted">{f.copy}</p>
                    <ul className="mt-5 flex flex-wrap gap-2.5">
                      {modules
                        .filter((m) => relatedModules[f.key].includes(m.name))
                        .map((m) => (
                          <li key={m.name} className="chip">
                            <Icon name={m.icon} className="h-4 w-4 text-accent-soft" />
                            {m.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pillars />

      <section className="bg-surface pb-20 sm:pb-24">
        <div className="shell">
          <SectionHead
            eyebrow="Inside the product"
            title={
              <>
                See the workspace <strong>screen by screen</strong>
              </>
            }
          />
          <div className="mt-14">
            <ProductGallery />
          </div>
        </div>
      </section>

      <section className="bg-surface-sunken/70 py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="By workspace area"
            title={
              <>
                Where each capability <strong>lives</strong>
              </>
            }
          />
          <div className="mt-12">
            <AreaPanels />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <Marquee items={modules.map((m) => m.name)} duration={48} />
      </section>

      <ClosingCta />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import ModuleExplorer from "@/components/ModuleExplorer";
import AreaPanels from "@/components/AreaPanels";
import { Button, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { moduleGroups, modules } from "@/lib/content";

export const metadata: Metadata = {
  title: "Modules",
  description:
    "All twelve HRMagix modules — attendance, leaves, payroll, OKRs, KRA & 9-box, PIPs, recognition, 1-on-1s, onboarding, documents, succession and analytics.",
};

export default function ModulesPage() {
  return (
    <>
      <PageHero
        eyebrow="All modules included"
        title="One platform. Every HR workflow."
        boldFrom={2}
        lede="Twelve modules grouped by the way people teams actually work. Switch on what you need — each one is configured to your policies, no code."
        crumb="Modules"
        actions={
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        }
      />

      {/* Filterable wall */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Filter by area"
            title={
              <>
                Find the modules <strong>for your team</strong>
              </>
            }
          />
          <div className="mt-12">
            <ModuleExplorer />
          </div>
        </div>
      </section>

      {/* Grouped map */}
      <section className="bg-violet-50/70 py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="The module map"
            title={
              <>
                Grouped the way <strong>the workspace is</strong>
              </>
            }
          />

          <div className="mt-14 space-y-4">
            {moduleGroups.map((group, gi) => {
              const inGroup = modules.filter((m) => m.group === group);
              if (!inGroup.length) return null;
              return (
                <Reveal key={group} delay={gi * 60} y={20}>
                  <div className="grid gap-6 rounded-[26px] bg-white p-6 shadow-soft ring-1 ring-violet-100 sm:p-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:items-center lg:gap-12">
                    <div>
                      <p className="font-display text-[12px] font-bold tabular-nums text-violet-400">
                        {String(gi + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 font-display text-[clamp(1.3rem,3vw,1.9rem)] font-bold leading-tight">
                        {group}
                      </h3>
                      <p className="mt-2 text-[13px] text-ink-faint">
                        {inGroup.length} {inGroup.length === 1 ? "module" : "modules"}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-2.5">
                      {inGroup.map((m) => (
                        <li key={m.name} className="chip !bg-violet-50 !ring-violet-100">
                          <span aria-hidden="true" className="text-[15px]">
                            {m.glyph}
                          </span>
                          {m.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="In the workspace"
            title={
              <>
                See the modules <strong>side by side</strong>
              </>
            }
          />
          <div className="mt-12">
            <AreaPanels />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

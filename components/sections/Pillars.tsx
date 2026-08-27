import { modules, pillars } from "@/lib/content";
import { Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import {
  GoalsBoard,
  PayslipCard,
  PresenceBoard,
  PunchInPhone,
} from "@/components/ProductVisuals";
import { Reveal } from "@/components/motion";
import SpotlightPanel from "@/components/SpotlightPanel";
import Media from "@/components/Media";
import { BrowserFrame } from "@/components/Frames";

/**
 * Three tinted panels, media and copy alternating sides, each closing with the
 * modules it includes as white chips.
 */
export default function Pillars() {
  return (
    <section id="platform" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="The platform"
          title={
            <>
              Hire <strong>faster.</strong> Pay <strong>accurately.</strong> Grow{" "}
              <strong>everyone.</strong>
            </>
          }
          sub="We cover the whole employee journey — attendance and leave, payroll and compliance, goals and recognition — through one workspace and one login."
        />

        <div className="mt-14 space-y-5 sm:space-y-6">
          {pillars.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.key} y={26} delay={i * 60}>
                <SpotlightPanel as="article" className={`panel ${p.tint} p-5 sm:p-8 lg:p-10`}>
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      flip ? "" : ""
                    }`}
                  >
                    <div className={flip ? "lg:order-2" : ""}>
                      <h3 className="display display-lg">{p.name}</h3>
                      <p className="mt-3 font-display text-[clamp(1rem,2.2vw,1.25rem)] font-semibold text-violet-700">
                        {p.tagline}
                      </p>
                      <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-ink-soft">
                        {p.copy}
                      </p>

                      <p className="mt-7 text-[13.5px] font-bold uppercase tracking-[0.14em] text-violet-500">
                        Included modules
                      </p>
                      <ul className="mt-3.5 flex flex-wrap gap-2.5">
                        {p.includes.map((name) => {
                          const mod = modules.find((m) => m.name === name);
                          return (
                            <li key={name} className="chip">
                              {mod && <Icon name={mod.icon} className="h-4 w-4 text-violet-500" />}
                              {name}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button href="/modules" variant="outline" size="md">
                          Read more
                        </Button>
                        <Button href="/contact" size="md">
                          Get Started
                        </Button>
                      </div>
                    </div>

                    <div className={flip ? "lg:order-1" : ""}>
                      {/* Each visual is a media slot: drop a screenshot into
                          lib/media.ts and it replaces the live rendering. */}
                      {p.key === "time" && (
                        <div className="relative">
                          <BrowserFrame url="app.hrmagix.com/attendance">
                            <Media slot="attendance" rounded="rounded-none" hover={false}>
                              <div className="p-4 sm:p-5">
                                <PresenceBoard />
                              </div>
                            </Media>
                          </BrowserFrame>
                          <PunchInPhone className="pointer-events-none absolute -bottom-10 -right-4 hidden w-[188px] origin-bottom-right scale-[0.82] xl:block" />
                        </div>
                      )}
                      {p.key === "growth" && (
                        <Media slot="performance" rounded="rounded-[20px]">
                          <GoalsBoard />
                        </Media>
                      )}
                      {p.key === "payroll" && (
                        <Media slot="payroll" rounded="rounded-[20px]">
                          <PayslipCard />
                        </Media>
                      )}
                    </div>
                  </div>
                </SpotlightPanel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


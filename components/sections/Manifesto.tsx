import { manifesto } from "@/lib/content";
import { Reveal, Words } from "@/components/motion";
import { Icon } from "@/components/icons";

/**
 * Editorial Philosophy & Manifesto Section (inspired by Trivana's centered thought-leadership narrative).
 * Provides deep textual substance on the cost of fragmented HR software in India.
 */
export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal y={12}>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-sunken px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-accent-strong ring-1 ring-line-strong/60">
              <Icon name="sparkle" className="h-3.5 w-3.5 text-accent-soft" />
              The HRMagix Philosophy
            </span>
          </Reveal>

          <h2 className="display display-lg mx-auto mt-7 text-heading">
            <Words text="Most growing companies in India don't have a lack of tools." />{" "}
            <span className="text-accent font-bold">
              <Words text="They have an orchestration crisis." delay={160} />
            </span>
          </h2>

          <Reveal delay={240} className="mt-8">
            <p className="text-[18px] font-medium leading-relaxed text-body sm:text-[20px]">
              {manifesto.lead}
            </p>
          </Reveal>
        </div>

        {/* Deep narrative text columns */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-10 border-y border-line py-12 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={300} className="space-y-5 text-[16px] leading-relaxed text-muted">
            <p>{manifesto.paragraphs[0]}</p>
            <p>{manifesto.paragraphs[1]}</p>
          </Reveal>
          <Reveal delay={380} className="flex flex-col justify-between space-y-6">
            <p className="text-[16px] leading-relaxed text-muted">
              {manifesto.paragraphs[2]}
            </p>
            <div className="rounded-2xl bg-gradient-to-br from-surface-sunken via-surface to-surface-raised/50 p-6 shadow-soft ring-1 ring-line-strong/80">
              <p className="font-display text-[15px] font-bold text-heading">
                The Unified Operational Standard
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                By unifying biometric hardware logs, leave balances, multi-state tax slabs, and OKR cascades under a single database, HR teams in Mumbai, Pune, Bangalore, and Delhi save an average of 38 hours every month on operational busywork.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Three core architectural pillars */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {manifesto.pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 100} y={16}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-surface-sunken/60 p-7 ring-1 ring-line transition-all hover:bg-surface-sunken hover:shadow-soft">
                <div>
                  <span className="font-display text-[13px] font-bold text-accent-soft">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[18px] font-bold text-heading">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

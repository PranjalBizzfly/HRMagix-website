import { site, workspace } from "@/lib/content";
import { Button, Pill, Stars } from "@/components/ui";
import { Parallax, Reveal, Words } from "@/components/motion";
import Workspace from "@/components/Workspace";

/**
 * Centered hero: trust pills, an oversized mixed-weight headline, two pill
 * CTAs, then a collage of the product with small floating cards around it.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden wash pb-20 pt-[112px] sm:pb-24 sm:pt-[132px]">
      <div className="pointer-events-none absolute inset-0 dotted opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-violet-300/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <Reveal y={12} className="flex flex-wrap items-center justify-center gap-2.5">
          <Pill>
            <Stars className="text-[11px]" />
            <span className="text-ink-soft">Loved by {site.proof.companies}</span>
          </Pill>
          <Pill>
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            {site.hero.eyebrow}
          </Pill>
        </Reveal>

        <h1 className="display mx-auto mt-8 max-w-[16ch] text-center text-[clamp(2.35rem,7vw,4.6rem)]">
          <Words as="span" text="Smart HR for" className="block" />
          <Words as="span" text="modern teams" className="block font-bold" delay={160} />
        </h1>

        <Reveal delay={260} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-[clamp(1rem,2.4vw,1.2rem)] leading-relaxed text-ink-soft">
            {site.hero.lede}
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="outline" size="lg" arrow={false}>
            Watch Demo
          </Button>
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        </Reveal>

        <Reveal delay={440} className="mt-6 text-center">
          <p className="text-[13px] text-ink-faint">{site.trial}</p>
        </Reveal>

        {/* Product collage — the panel is centred, the callouts live in the gutters */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          <div className="mx-auto max-w-3xl lg:max-w-[46rem]">
            <Parallax speed={0.028}>
              <Reveal y={34} scale={0.97} delay={120}>
                <Workspace />
              </Reveal>
            </Parallax>
          </div>

          <FloatCard
            className="left-0 top-[22%] hidden lg:flex xl:-left-6"
            delay={700}
            duration={7.5}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-50 text-[16px] ring-1 ring-violet-100">
              🕒
            </span>
            <span>
              <span className="block font-display text-[15px] font-bold leading-none text-violet-950">
                {workspace.attendance[0].value}
              </span>
              <span className="mt-1 block text-[11px] text-ink-faint">Present today</span>
            </span>
          </FloatCard>

          <FloatCard
            className="right-0 top-[6%] hidden lg:flex xl:-right-6"
            delay={840}
            duration={8.5}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-50 text-[16px] ring-1 ring-violet-100">
              🎉
            </span>
            <span>
              <span className="block text-[12.5px] font-semibold text-violet-950">New kudos</span>
              <span className="block text-[11px] text-ink-faint">Priya → Rohan</span>
            </span>
          </FloatCard>

          <FloatCard
            className="bottom-[12%] left-0 hidden lg:flex xl:-left-10"
            delay={960}
            duration={9}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-50 text-[16px] ring-1 ring-violet-100">
              💰
            </span>
            <span>
              <span className="block text-[12.5px] font-semibold text-violet-950">Payroll run</span>
              <span className="block text-[11px] text-ink-faint">Done in 2 min</span>
            </span>
          </FloatCard>

          <FloatCard
            className="bottom-[26%] right-0 hidden lg:flex xl:-right-10"
            delay={1080}
            duration={7}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-50 text-[16px] ring-1 ring-violet-100">
              🎯
            </span>
            <span>
              <span className="block font-display text-[15px] font-bold leading-none text-violet-950">
                {workspace.okrs[0].pct}%
              </span>
              <span className="mt-1 block text-[11px] text-ink-faint">Time-to-hire OKR</span>
            </span>
          </FloatCard>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className = "",
  delay,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  duration: number;
}) {
  return (
    <Reveal
      delay={delay}
      y={18}
      scale={0.92}
      className={`absolute z-[1] items-center gap-3 rounded-2xl bg-white px-3.5 py-3 shadow-lift ring-1 ring-violet-100 ${className}`}
    >
      <span
        className="flex animate-float items-center gap-3"
        style={{ "--float-duration": `${duration}s` } as React.CSSProperties}
      >
        {children}
      </span>
    </Reveal>
  );
}

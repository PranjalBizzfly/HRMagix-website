import { site, workspace } from "@/lib/content";
import { Button, Pill, Stars } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { Parallax, Reveal, Words } from "@/components/motion";
import Workspace from "@/components/Workspace";
import Media from "@/components/Media";
import { BrowserFrame } from "@/components/Frames";
import { PunchInPhone } from "@/components/ProductVisuals";

/**
 * Centered hero: trust pills, the page's one oversized type moment, two pill
 * CTAs, then the workspace flanked by the phone view and small live callouts.
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
            <Stars size="h-3 w-3" />
            <span className="text-ink-soft">Loved by {site.proof.companies}</span>
          </Pill>
          <Pill>
            <Icon name="sparkle" className="h-3.5 w-3.5 text-violet-500" />
            {site.hero.eyebrow}
          </Pill>
        </Reveal>

        <h1 className="display display-xl mx-auto mt-8 max-w-[15ch] text-center">
          <Words as="span" text="Smart HR for" className="block" />
          <Words as="span" text="modern teams" className="block font-bold" delay={160} />
        </h1>

        <Reveal delay={260} className="mx-auto mt-[38px] max-w-2xl text-center">
          <p className="lede">{site.hero.lede}</p>
        </Reveal>

        <Reveal delay={360} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {/* HRMagix publishes no demo video — this points at the walkthrough,
              which is where its own "Watch Demo" button goes. */}
          <Button href="/how-it-works" variant="outline" size="lg" arrow={false}>
            <Icon name="play" className="h-3 w-3 text-violet-500" />
            See how it works
          </Button>
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        </Reveal>

        <Reveal delay={440} className="mt-6 text-center">
          <p className="text-[13.5px] text-ink-faint">{site.trial}</p>
        </Reveal>

        {/* Product collage — panel centred, phone and callouts in the gutters */}
        <div className="relative mx-auto mt-16 max-w-5xl xl:max-w-6xl">
          <div className="mx-auto max-w-3xl lg:max-w-[46rem]">
            <Parallax speed={0.028}>
              <Reveal y={34} scale={0.97} delay={120}>
                <BrowserFrame>
                  <Media
                    slot="hero"
                    rounded="rounded-none"
                    hover={false}
                    sizes="(max-width: 1024px) 100vw, 736px"
                  >
                    <Workspace chrome={false} />
                  </Media>
                </BrowserFrame>
              </Reveal>
            </Parallax>
          </div>

          {/* The mobile view sits alongside the desktop one from lg up */}
          <Parallax
            speed={0.055}
            className="pointer-events-none absolute -bottom-8 -right-2 hidden w-[196px] lg:block xl:right-0 xl:w-[212px]"
          >
            <Reveal y={30} scale={0.94} delay={520}>
              <PunchInPhone />
            </Reveal>
          </Parallax>

          <FloatCard className="left-0 top-[20%] hidden lg:flex" delay={700} duration={7.5} icon="users">
            <span className="block font-display text-[15.5px] font-bold leading-none text-violet-950">
              {workspace.attendance[0].value}
            </span>
            <span className="mt-1 block text-[11.5px] text-ink-faint">Present today</span>
          </FloatCard>

          <FloatCard className="left-0 top-[56%] hidden lg:flex" delay={860} duration={9} icon="wallet">
            <span className="block text-[12.5px] font-semibold text-violet-950">Payroll run</span>
            <span className="block text-[11.5px] text-ink-faint">Done in 2 min</span>
          </FloatCard>

          <FloatCard className="right-0 top-[2%] hidden lg:flex" delay={980} duration={8} icon="target">
            <span className="block font-display text-[15.5px] font-bold leading-none text-violet-950">
              {workspace.okrs[0].pct}%
            </span>
            <span className="mt-1 block text-[11.5px] text-ink-faint">Time-to-hire OKR</span>
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
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  duration: number;
  icon: IconName;
}) {
  return (
    <Reveal
      delay={delay}
      y={18}
      scale={0.92}
      className={`absolute z-[1] rounded-2xl bg-white px-3.5 py-3 shadow-lift ring-1 ring-violet-100 ${className}`}
    >
      <span
        className="flex animate-float items-center gap-3"
        style={{ "--float-duration": `${duration}s` } as React.CSSProperties}
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100">
          <Icon name={icon} className="h-[18px] w-[18px]" />
        </span>
        <span>{children}</span>
      </span>
    </Reveal>
  );
}

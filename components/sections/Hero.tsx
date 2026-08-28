import Image from "next/image";
import { site } from "@/lib/content";
import { Button, Pill, Stars } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal, Words } from "@/components/motion";

/**
 * Editorial Hero for HRMagix:
 * High-impact typography, rich narrative text, verified Indian enterprise proof,
 * and a single wide real-world workplace photograph.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden wash pb-20 pt-[116px] sm:pb-28 sm:pt-[136px]">
      <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[880px] max-w-[130vw] -translate-x-1/2 rounded-full bg-glow/30 blur-[130px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        {/* Top Trust Pills */}
        <Reveal y={10} className="flex flex-wrap items-center justify-center gap-3">
          <Pill className="!py-1 !pl-1.5 !pr-3.5 shadow-sm">
            <div className="flex -space-x-2">
              {site.proof.avatars.map((av, idx) => (
                <div
                  key={idx}
                  className="relative h-6 w-6 overflow-hidden rounded-full ring-2 ring-surface"
                >
                  <Image
                    src={av}
                    alt="Indian HR professional avatar"
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Stars size="h-3 w-3" />
            <span className="text-[13px] font-medium text-muted">
              Trusted by 120+ Indian Enterprises
            </span>
          </Pill>
          <Pill>
            <Icon name="shield" className="h-3.5 w-3.5 text-accent" />
            <span>100% Indian Statutory Compliance</span>
          </Pill>
        </Reveal>

        {/* Main Headline */}
        <h1 className="display display-xl mx-auto mt-8 max-w-[16ch] text-center text-heading">
          <Words as="span" text="Smart People Operations for" className="block" />
          <span className="text-accent font-bold">
            <Words as="span" text="India's growing teams" className="block" delay={160} />
          </span>
        </h1>

        {/* Narrative Copy */}
        <Reveal delay={260} className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-[18px] leading-relaxed text-muted sm:text-[20px]">
            {site.hero.lede}
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={340} className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <Button href="/contact" size="lg">
            Schedule a 1-on-1 Walkthrough
          </Button>
          <Button href="/modules" variant="outline" size="lg" arrow={false}>
            Explore All 12 Modules
          </Button>
        </Reveal>

        <Reveal delay={420} className="mt-5 text-center">
          <p className="text-[13px] text-subtle">{site.trial}</p>
        </Reveal>

        {/* Real-World Editorial Workplace Photograph */}
        <Reveal y={28} scale={0.98} delay={480} className="relative mx-auto mt-14 max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] shadow-lift ring-1 ring-line-strong">
            <div className="relative aspect-[16/8.8] w-full overflow-hidden bg-surface-raised">
              <Image
                src="/media/hero-workspace.png"
                alt="HRMagix All-in-One People Operations Platform Workspace"
                width={1600}
                height={880}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-950/75 via-violet-950/20 to-transparent" />
              
              {/* Bottom Information Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand font-bold text-white shadow-md">
                    HR
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold text-white">
                      HRMagix All-in-One People Operations Platform
                    </p>
                    <p className="text-[12.5px] text-violet-200">
                      Attendance & Shifts · Indian Statutory Payroll · OKRs & 9-Box · Recognition
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur-md ring-1 ring-white/25">
                  <span className="h-2 w-2 rounded-full bg-ok-dot animate-pulse" />
                  <span className="text-[12px] font-semibold text-white">
                    Live across Pune, Mumbai, Bangalore & NCR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

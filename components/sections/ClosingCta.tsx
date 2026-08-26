import { site } from "@/lib/content";
import { Button } from "@/components/ui";
import { Reveal, Words } from "@/components/motion";

/** Closing band: violet ground, oversized mixed-weight type, two pill CTAs. */
export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-violet-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dotted opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-violet-500/30 blur-[110px]"
        aria-hidden="true"
      />

      <div className="shell relative text-center">
        <h2 className="display mx-auto max-w-[18ch] text-[clamp(2rem,6vw,3.8rem)] !text-white">
          <Words text="Ready to delight" className="block" />
          <Words text="your team?" className="block font-bold" delay={140} />
        </h2>

        <Reveal delay={220} className="mx-auto mt-6 max-w-xl">
          <p className="text-[clamp(0.98rem,2vw,1.12rem)] leading-relaxed text-violet-200/85">
            Join {site.proof.companies} already running modern HR on {site.name} — from hire to retire.
          </p>
        </Reveal>

        <Reveal delay={320} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="light" size="lg">
            Get Started Free
          </Button>
          <Button href="/contact" variant="outline" size="lg" arrow={false} className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70">
            Book a Demo
          </Button>
        </Reveal>

        <Reveal delay={400} className="mt-7">
          <p className="text-[12.5px] text-violet-300/75">{site.trial}</p>
        </Reveal>
      </div>
    </section>
  );
}

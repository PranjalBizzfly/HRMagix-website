import { testimonials } from "@/lib/content";
import { Stars } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";

/**
 * Short, dark, full-bleed break between two long sections: one published quote
 * set as a statement. Deliberately the shortest band on the page.
 */
export default function QuoteBand({ index = 0 }: { index?: number }) {
  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-violet-950 py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 dotted opacity-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[900px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-[110px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <figure className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-violet-200 ring-1 ring-inset ring-white/15">
            <Icon name="chat" className="h-6 w-6" />
          </span>

          <Reveal y={14} className="flex-1">
            <blockquote className="display display-md !text-white">{t.quote}</blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              <span className="text-[13.5px] font-semibold text-white">{t.name}</span>
              <span className="text-[13.5px] text-violet-300/80">{t.role}</span>
              <Stars size="h-3 w-3" />
            </figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}

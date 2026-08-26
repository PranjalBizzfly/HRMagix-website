import Link from "next/link";
import { features } from "@/lib/content";
import { Arrow, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/motion";

/**
 * Six capability tiles on a soft ground — white rounded cards that lift on
 * hover, matching the tile rhythm used across the site.
 */
export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-violet-50/70 py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="Why HRMagix"
          title={
            <>
              Everything you need to <strong>manage your people</strong>
            </>
          }
          sub="Six capabilities that cover the working week — from the first punch-in to the payslip, the review and the kudos that follow."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.key} delay={i * 70} y={20}>
              <Link
                href="/features"
                className="group flex h-full flex-col rounded-[24px] bg-white p-7 shadow-soft ring-1 ring-violet-100 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift hover:ring-violet-300 motion-reduce:hover:translate-y-0"
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-[22px] ring-1 ring-violet-100 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:group-hover:transform-none"
                  aria-hidden="true"
                >
                  {f.glyph}
                </span>
                <h3 className="mt-6 font-display text-[19px] font-bold">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{f.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-violet-600">
                  Learn more <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

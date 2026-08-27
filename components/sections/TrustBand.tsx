import { site, stats } from "@/lib/content";
import { Counter, Reveal } from "@/components/motion";

/** Slim proof band: the trust line, then the four platform counters. */
export default function TrustBand() {
  return (
    <section className="border-y border-violet-100 bg-white">
      <div className="shell py-10 sm:py-12">
        <Reveal y={10} className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-violet-400">
            {site.proof.trustline}
          </p>
        </Reveal>

        <dl className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              y={14}
              className="border-l border-violet-100 px-4 text-center first:border-l-0 sm:px-6"
            >
              <dd className="display text-[clamp(2rem,4.6vw,2.9rem)] font-bold">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-[13.5px] text-ink-faint">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

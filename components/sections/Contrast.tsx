import { contrast } from "@/lib/content";
import { CrossCircle, SectionHead, TickCircle } from "@/components/ui";
import { Reveal } from "@/components/motion";

/**
 * Full-bleed brand band holding two white cards: the day-to-day HRMagix
 * describes replacing, and what it puts in its place.
 */
export default function Contrast() {
  return (
    <section className="contrast-band relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 dotted opacity-30" aria-hidden="true" />
      <div className="shell relative">
        <SectionHead
          tone="light"
          eyebrow="The difference"
          title={
            <>
              Feel the difference. <strong>See it in a week.</strong>
            </>
          }
          sub="One workspace replaces the spreadsheets, the inbox approvals and the four other tools your people team is holding together."
        />

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <Reveal y={24}>
            <Card
              label={contrast.before.label}
              tone="before"
              points={contrast.before.points}
            />
          </Reveal>
          <Reveal y={24} delay={140}>
            <Card label={contrast.after.label} tone="after" points={contrast.after.points} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({
  label,
  points,
  tone,
}: {
  label: string;
  points: string[];
  tone: "before" | "after";
}) {
  const after = tone === "after";
  return (
    <div
      className={`panel h-full bg-surface p-6 shadow-lift sm:p-8 ${
        after ? "ring-2 ring-line-accent" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 place-items-center rounded-full ${
            after ? "bg-brand text-white" : "bg-surface-sunken text-subtle"
          }`}
        >
          {after ? <TickCircle className="h-5 w-5" /> : <CrossCircle className="h-5 w-5" />}
        </span>
        <h3 className="font-display text-[19px] font-bold sm:text-[22px]">{label}</h3>
      </div>

      <ul className="mt-7 space-y-4">
        {points.map((p, i) => (
          <Reveal
            as="li"
            key={p}
            delay={i * 70}
            y={10}
            className="flex items-start gap-3 border-b border-line pb-4 last:border-b-0 last:pb-0"
          >
            <span className={after ? "text-accent-soft" : "text-subtle/60"}>
              {after ? <TickCircle /> : <CrossCircle />}
            </span>
            <span
              className={`text-[15.5px] leading-relaxed ${
                after ? "font-medium text-heading" : "text-muted"
              }`}
            >
              {p}
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

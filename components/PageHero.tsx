import Link from "next/link";
import type { ReactNode } from "react";
import { Pill } from "./ui";
import { Reveal, Words } from "./motion";

/** Centered interior-page opener on the soft wash used by the homepage hero. */
export default function PageHero({
  eyebrow,
  title,
  boldFrom,
  lede,
  crumb,
  actions,
}: {
  eyebrow: string;
  /** Rendered word by word; words from `boldFrom` onward are bold. */
  title: string;
  boldFrom?: number;
  lede: string;
  crumb?: string;
  actions?: ReactNode;
}) {
  const words = title.split(" ");
  const cut = boldFrom ?? words.length;
  const light = words.slice(0, cut).join(" ");
  const bold = words.slice(cut).join(" ");

  return (
    <section className="relative overflow-hidden wash pb-16 pt-[112px] sm:pb-20 sm:pt-[136px]">
      <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-30%] h-[420px] w-[760px] max-w-[130vw] -translate-x-1/2 rounded-full bg-violet-300/25 blur-[110px]"
        aria-hidden="true"
      />

      <div className="shell relative text-center">
        <Reveal y={10} className="flex justify-center">
          <Pill>
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            {eyebrow}
          </Pill>
        </Reveal>

        <h1 className="display mx-auto mt-7 max-w-[20ch] text-[clamp(2.1rem,6vw,3.9rem)]">
          <Words as="span" text={light} />
          {bold && (
            <>
              {" "}
              <Words as="span" text={bold} className="font-bold" delay={140} />
            </>
          )}
        </h1>

        <Reveal delay={240} className="mx-auto mt-6 max-w-2xl">
          <p className="text-[clamp(0.98rem,2.2vw,1.15rem)] leading-relaxed text-ink-soft">{lede}</p>
        </Reveal>

        {actions && (
          <Reveal delay={340} className="mt-9 flex flex-wrap justify-center gap-3">
            {actions}
          </Reveal>
        )}

        {crumb && (
          <Reveal delay={420} className="mt-8">
            <p className="text-[12.5px] text-ink-faint">
              <Link href="/" className="transition-colors hover:text-violet-600">
                Home
              </Link>{" "}
              <span aria-hidden="true">/</span> {crumb}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

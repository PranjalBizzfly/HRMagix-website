"use client";

import { useState } from "react";
import { areas, modules, testimonials } from "@/lib/content";
import { Button, Stars } from "./ui";
import { Reveal } from "./motion";

/**
 * Workspace areas as a tabbed panel. Each row pairs a module with what it does,
 * joined by the equals badge — capability on the left, outcome on the right.
 */
export default function AreaPanels() {
  const [active, setActive] = useState(0);
  const area = areas[active];
  const quote = testimonials[area.quote];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Workspace areas"
        className="mask-fade-x -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:justify-center sm:px-0"
      >
        {areas.map((a, i) => (
          <button
            key={a.key}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`shrink-0 snap-start rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
              i === active
                ? "bg-violet-500 text-white shadow-glow"
                : "bg-white text-ink-soft ring-1 ring-inset ring-violet-200 hover:ring-violet-400"
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>

      <div className="panel mt-8 bg-gradient-to-br from-violet-50 via-white to-violet-100 p-6 shadow-soft ring-1 ring-violet-100 sm:p-9 lg:p-11">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h3 key={`h-${area.key}`} className="display text-[clamp(1.7rem,4.4vw,2.8rem)]">
              {area.name}
            </h3>
            <p className="mt-3 max-w-[34ch] font-display text-[clamp(1rem,2.2vw,1.2rem)] font-semibold text-violet-700">
              {area.tagline}
            </p>
            <div className="mt-7">
              <Button href="/contact">Get Started</Button>
            </div>

            <figure className="mt-9 rounded-[20px] bg-white p-5 shadow-soft ring-1 ring-violet-100">
              <Stars />
              <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink">
                “{quote.quote}”
              </blockquote>
              <figcaption className="mt-3 text-[12.5px] font-semibold text-violet-600">
                — {quote.name}, {quote.role}
              </figcaption>
            </figure>
          </div>

          <ul key={area.key} className="space-y-3">
            {area.pairs.map(([name, outcome], i) => {
              const mod = modules.find((m) => m.name === name);
              return (
                <Reveal
                  as="li"
                  key={name}
                  delay={i * 90}
                  y={14}
                  className="grid items-stretch gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] sm:gap-0"
                >
                  <span className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-[14px] font-semibold text-violet-950 shadow-soft ring-1 ring-violet-100">
                    <span aria-hidden="true" className="text-[17px]">
                      {mod?.glyph}
                    </span>
                    {name}
                  </span>
                  <span
                    className="z-[1] mx-auto grid h-9 w-9 place-items-center self-center rounded-full bg-violet-950 text-white sm:-mx-4"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 6.5h8M4 10h8" />
                    </svg>
                  </span>
                  <span className="flex items-center rounded-2xl bg-white px-4 py-4 text-[14px] leading-snug text-ink-soft shadow-soft ring-1 ring-violet-100 sm:pl-7">
                    {outcome}
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

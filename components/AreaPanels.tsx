"use client";

import { useState } from "react";
import { areas, modules, testimonials } from "@/lib/content";
import { Button, Stars } from "./ui";
import { Icon, IconTile } from "./icons";
import { Reveal, useSpotlight } from "./motion";
import TabRail from "./TabRail";

/**
 * Workspace areas as a tabbed panel. Each row pairs a module with what it does,
 * joined by the equals badge — capability on the left, outcome on the right.
 */
export default function AreaPanels() {
  const [active, setActive] = useState(0);
  const area = areas[active];
  const quote = testimonials[area.quote];
  const { ref: spotRef, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <div>
      <TabRail
        items={areas.map((a) => a.name)}
        active={active}
        onChange={setActive}
        label="Workspace areas"
        mode="tabs"
        idBase="areas"
      />

      <div
        ref={spotRef}
        {...spotlightProps}
        id="areas-panel"
        role="tabpanel"
        aria-labelledby={`areas-tab-${active}`}
        tabIndex={0}
        className="spotlight panel mt-8 bg-gradient-to-br from-violet-50 via-white to-violet-100 p-6 shadow-soft ring-1 ring-violet-100 sm:p-9 lg:p-11">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h3 key={`h-${area.key}`} className="display display-lg">
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
              <blockquote className="mt-3 text-[15.5px] leading-relaxed text-ink">
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
                    {mod && <IconTile name={mod.icon} size="sm" />}
                    {name}
                  </span>
                  <span
                    className="z-[1] mx-auto grid h-9 w-9 place-items-center self-center rounded-full bg-violet-950 text-white sm:-mx-4"
                    aria-hidden="true"
                  >
                    <Icon name="equals" className="h-4 w-4" />
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

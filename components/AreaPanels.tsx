"use client";

import { useState } from "react";
import Image from "next/image";
import { areas, modules, testimonials } from "@/lib/content";
import { Button, Stars } from "./ui";
import { Icon, IconTile } from "./icons";
import { Reveal, useSpotlight } from "./motion";
import TabRail from "./TabRail";

const areaImages: Record<string, string> = {
  time: "/media/module-attendance.png",
  performance: "/media/module-performance.png",
  payroll: "/media/module-payroll.png",
  engagement: "/media/module-recognition.png",
};

/**
 * Workspace areas as a tabbed panel. Each row pairs a module with what it does,
 * joined by the equals badge — capability on the left, outcome on the right.
 */
export default function AreaPanels() {
  const [active, setActive] = useState(0);
  const area = areas[active];
  const quote = testimonials[area.quote];
  const { ref: spotRef, spotlightProps } = useSpotlight<HTMLDivElement>();
  const imageSrc = areaImages[area.key] || "/media/module-attendance.png";

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
        className="spotlight panel mt-8 bg-gradient-to-br from-surface-sunken/80 via-surface to-surface-raised/60 p-6 shadow-soft ring-1 ring-line sm:p-8 lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left info & testimonial */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 key={`h-${area.key}`} className="display display-lg">
                {area.name}
              </h3>
              <p className="mt-3 max-w-[34ch] font-display text-[clamp(1rem,2.2vw,1.2rem)] font-semibold text-accent-strong">
                {area.tagline}
              </p>
              <div className="mt-6">
                <Button href="/contact">Get Started with {area.name}</Button>
              </div>
            </div>

            <figure className="mt-8 rounded-[22px] bg-surface p-5 shadow-soft ring-1 ring-line">
              <div className="flex items-center gap-1">
                <Stars />
              </div>
              <blockquote className="mt-3 text-[14.5px] leading-relaxed text-body">
                “{quote.quote}”
              </blockquote>
              <figcaption className="mt-3.5 flex items-center gap-3 border-t border-line pt-3">
                {quote.avatar ? (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-line-strong">
                    <Image
                      src={quote.avatar}
                      alt={quote.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface-raised text-[12px] font-bold text-accent-strong">
                    {quote.initials}
                  </span>
                )}
                <div>
                  <p className="text-[13px] font-bold text-heading">{quote.name}</p>
                  <p className="text-[11.5px] text-subtle">{quote.role}</p>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Right: Workflow pairs and outcomes */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="rounded-[20px] bg-surface-raised/50 p-5 ring-1 ring-line-strong/60">
              <p className="text-[12px] font-bold uppercase tracking-wider text-accent-strong">
                Automated Policy Engine
              </p>
              <p className="mt-1 font-display text-[16px] font-bold text-heading">
                Zero manual data re-entry between modules
              </p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-muted">
                Every policy rule configured in {area.name} directly updates downstream attendance reconciliation, payroll salary computation, and employee records in real time.
              </p>
            </div>

            <ul key={area.key} className="space-y-3">
              {area.pairs.map(([name, outcome], i) => {
                const mod = modules.find((m) => m.name === name);
                return (
                  <Reveal
                    as="li"
                    key={name}
                    delay={i * 80}
                    y={12}
                    className="grid items-stretch gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.25fr)] sm:gap-0"
                  >
                    <span className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3.5 text-[14px] font-semibold text-heading shadow-soft ring-1 ring-line">
                      {mod && <IconTile name={mod.icon} size="sm" />}
                      {name}
                    </span>
                    <span
                      className="z-[1] mx-auto grid h-8 w-8 place-items-center self-center rounded-full bg-violet-950 text-white sm:-mx-4 shadow-sm"
                      aria-hidden="true"
                    >
                      <Icon name="equals" className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex items-center rounded-2xl bg-surface px-4 py-3.5 text-[13.5px] leading-snug text-muted shadow-soft ring-1 ring-line sm:pl-7">
                      {outcome}
                    </span>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

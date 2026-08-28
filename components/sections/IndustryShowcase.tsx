"use client";

import { useState } from "react";
import Image from "next/image";
import { industries } from "@/lib/content";
import { Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal, useSpotlight } from "@/components/motion";
import TabRail from "@/components/TabRail";

/**
 * Picky Assist-style Industry Showcase:
 * Interactive tabbed sector solutions with real-world enterprise imagery,
 * tailored metrics, and specific HR Magix workflow highlights.
 */
export default function IndustryShowcase() {
  const [active, setActive] = useState(0);
  const ind = industries[active];
  const { ref: spotRef, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <section id="industries" className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="Solutions by Industry"
          title={
            <>
              Tailored for <strong>how your industry works</strong>
            </>
          }
          sub="From fast-moving tech startups to compliance-heavy financial institutions — HRMagix adapts to your team's exact operational rhythm."
        />

        {/* Tab Rail */}
        <div className="mt-12">
          <TabRail
            items={industries.map((i) => i.name)}
            active={active}
            onChange={setActive}
            label="Industry solutions"
            mode="tabs"
            idBase="industries"
          />
        </div>

        {/* Industry Active Card */}
        <div
          ref={spotRef}
          {...spotlightProps}
          id="industries-panel"
          role="tabpanel"
          aria-labelledby={`industries-tab-${active}`}
          tabIndex={0}
          className="spotlight panel mt-8 overflow-hidden rounded-[28px] bg-gradient-to-br from-surface-sunken/70 via-surface to-surface-raised/50 p-6 shadow-soft ring-1 ring-line sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy & Features */}
            <div className="lg:col-span-6 xl:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3 py-1 text-[12px] font-bold text-accent-deep">
                <Icon name="sparkle" className="h-3.5 w-3.5 text-accent" />
                {ind.name}
              </span>

              <h3 className="display display-md mt-4 text-heading">{ind.tagline}</h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{ind.copy}</p>

              {/* Stat Metrics Bar */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-surface p-3.5 shadow-sm ring-1 ring-line">
                {ind.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-[18px] font-bold text-accent-deep">{m.value}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-subtle">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlights List */}
              <ul className="mt-6 space-y-3">
                {ind.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-body">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ok-soft text-ok">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/contact" size="md">
                  Get Started for {ind.name}
                </Button>
                <Button href="/modules" variant="outline" size="md">
                  Explore Features
                </Button>
              </div>
            </div>

            {/* Right: Operational Execution Blueprint */}
            <div className="lg:col-span-6 xl:col-span-7">
              <Reveal y={18} scale={0.98} className="overflow-hidden rounded-[26px] bg-surface p-7 shadow-lift ring-1 ring-line-strong sm:p-8">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-md">
                      <Icon name="sparkle" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-[16px] font-bold text-heading">
                        {ind.name} Architecture
                      </p>
                      <p className="text-[12px] text-subtle">
                        Verified Indian Enterprise Deployment
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-surface-sunken px-3 py-1 text-[11.5px] font-bold text-accent-strong">
                    Production Ready
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-surface-sunken/70 p-5 ring-1 ring-line-strong/60">
                    <p className="text-[11.5px] font-bold uppercase tracking-wider text-accent-strong">
                      Primary Workflow Routing
                    </p>
                    <p className="mt-1 font-display text-[15px] font-bold text-heading">
                      {ind.tagline}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                      {ind.copy}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-line bg-surface p-4 shadow-sm">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-accent">
                        Audit & Security
                      </p>
                      <p className="mt-1 text-[13px] font-semibold text-heading">
                        100% Indian Data Sovereignty (AWS Mumbai)
                      </p>
                    </div>
                    <div className="rounded-xl border border-line bg-surface p-4 shadow-sm">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-ok">
                        Statutory Engine
                      </p>
                      <p className="mt-1 text-[13px] font-semibold text-heading">
                        EPF, ESI, TDS 192 & PT Pre-Configured
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-[13px] font-semibold text-muted">
                    Need a custom sector deployment?
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-accent hover:text-accent-deep"
                  >
                    Consult an Engineer &rarr;
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

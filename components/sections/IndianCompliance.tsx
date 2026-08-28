"use client";

import { useState } from "react";
import { indianCompliance } from "@/lib/content";
import { SectionHead, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";

/**
 * In-depth Indian Statutory Compliance & Multi-State Tax section.
 * Rich text breakdown with interactive statutory selector.
 */
export default function IndianCompliance() {
  const [active, setActive] = useState(0);
  const current = indianCompliance.aspects[active];

  return (
    <section id="compliance" className="relative overflow-hidden bg-gradient-to-b from-surface via-surface-sunken/40 to-surface py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHead
          eyebrow={indianCompliance.eyebrow}
          title={
            <>
              Built specifically for <strong>Indian labor laws & statutory tax rules</strong>
            </>
          }
          sub={indianCompliance.sub}
        />

        {/* Interactive Regulatory Breakdown */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {indianCompliance.aspects.map((aspect, idx) => {
              const isSelected = active === idx;
              return (
                <button
                  key={aspect.key}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`group flex w-full items-center justify-between rounded-2xl p-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-violet-950 text-white shadow-lift ring-1 ring-violet-950"
                      : "bg-surface text-muted shadow-soft ring-1 ring-line hover:bg-surface-sunken/80 hover:text-heading"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-xl transition-colors ${
                        isSelected ? "bg-violet-800 text-white" : "bg-surface-sunken text-accent"
                      }`}
                    >
                      <Icon name="shield" className="h-4 w-4" />
                    </span>
                    <span
                      className={`font-display text-[15px] font-bold ${
                        isSelected ? "text-white" : "text-heading"
                      }`}
                    >
                      {aspect.title}
                    </span>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${
                      isSelected
                        ? "bg-violet-800 text-violet-200"
                        : "bg-surface-raised text-accent-strong"
                    }`}
                  >
                    {aspect.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Narrative Panel */}
          <div className="lg:col-span-7">
            <Reveal key={current.key} y={16}>
              <div className="rounded-[28px] bg-surface p-7 shadow-lift ring-1 ring-line-strong sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-accent-soft">
                      Indian Statutory Engine
                    </span>
                    <h3 className="display display-md mt-1 text-heading">
                      {current.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ok-soft px-3 py-1 text-[12px] font-bold text-ok ring-1 ring-ok-line">
                    <Icon name="check" className="h-3.5 w-3.5" />
                    {current.badge}
                  </span>
                </div>

                <p className="mt-6 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                  {current.details}
                </p>

                {/* Statutory Operational Guarantees */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-surface-sunken/70 p-4 ring-1 ring-line">
                    <p className="text-[12.5px] font-bold text-heading">100% Audit Readiness</p>
                    <p className="mt-1 text-[13px] leading-snug text-muted">
                      Complete electronic audit trails matching Indian labor commissioner inspection standards.
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-sunken/70 p-4 ring-1 ring-line">
                    <p className="text-[12.5px] font-bold text-heading">1-Click Portal Export</p>
                    <p className="mt-1 text-[13px] leading-snug text-muted">
                      Direct text & XML format exports ready for unified EPFO, ESIC, and TRACES government portals.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/contact" size="md">
                    Schedule Statutory Consultation
                  </Button>
                  <Button href="/pricing" variant="outline" size="md">
                    View Pricing Plans
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

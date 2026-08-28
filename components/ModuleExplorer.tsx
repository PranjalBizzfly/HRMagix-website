"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { moduleGroups, modules } from "@/lib/content";
import { Icon, IconTile } from "./icons";
import TabRail from "./TabRail";
import { EmptyState } from "./states";
import { Reveal } from "./motion";

/**
 * Rich, content-dense module directory.
 * Provides multi-paragraph operational context, feature bullets, and statutory compliance hooks.
 */
export default function ModuleExplorer() {
  const filters = useMemo(() => ["All", ...moduleGroups], []);
  const [activeFilter, setActiveFilter] = useState(0);
  const group = filters[activeFilter];
  const shown = modules.filter((m) => group === "All" || m.group === group);

  return (
    <div>
      <TabRail
        items={filters}
        active={activeFilter}
        onChange={setActiveFilter}
        label="Filter modules by area"
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((m, i) => (
          <Reveal key={m.name} delay={i * 40} y={16}>
            <div className="flex h-full flex-col justify-between rounded-[24px] bg-surface p-6 shadow-soft ring-1 ring-line transition-all duration-300 hover:shadow-lift hover:ring-line-accent sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <IconTile name={m.icon} className="!bg-surface-sunken text-accent shadow-sm" />
                  <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[11px] font-bold text-accent-strong ring-1 ring-line">
                    {m.group}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[18px] font-bold text-heading">
                  {m.name}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {m.desc}
                </p>

                <div className="mt-5 space-y-2 border-t border-line/70 pt-4">
                  {m.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[13px] text-body">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-line/70 pt-4 flex items-center justify-between">
                <Link
                  href={m.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-accent hover:text-accent-deep transition-colors"
                >
                  <span>Explore {m.name}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-[12px] font-semibold text-subtle hover:text-accent"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        {group === "All"
          ? `Showing all ${modules.length} modules`
          : `Showing ${shown.length} ${group} modules`}
      </p>
    </div>
  );
}

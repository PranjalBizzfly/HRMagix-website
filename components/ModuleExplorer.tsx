"use client";

import { useMemo, useState } from "react";
import { moduleGroups, modules } from "@/lib/content";
import { IconTile } from "./icons";
import TabRail from "./TabRail";

/**
 * Filterable module wall. The filter rail swipes on touch and drags on mouse;
 * the grid below re-flows in place and announces the count.
 */
export default function ModuleExplorer() {
  const filters = useMemo(() => ["All", ...moduleGroups], []);
  const [activeFilter, setActiveFilter] = useState(0);
  const group = filters[activeFilter];
  const shown = modules.filter((m) => group === "All" || m.group === group);

  return (
    <div>
      <TabRail items={filters} active={activeFilter} onChange={setActiveFilter} label="Filter modules by area" />

      <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {modules.map((m, i) => {
          const on = group === "All" || m.group === group;
          return (
            <li
              key={m.name}
              className={`transition-all duration-500 ease-out ${on ? "opacity-100" : "opacity-30 saturate-0"}`}
              style={{ transitionDelay: `${(i % 6) * 30}ms` }}
            >
              <div className="group flex h-full items-center gap-3 rounded-[20px] bg-white px-4 py-4 shadow-soft ring-1 ring-violet-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-violet-300 motion-reduce:hover:translate-y-0 sm:px-5 sm:py-5">
                <IconTile
                  name={m.icon}
                  className="transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:transform-none"
                />
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-bold leading-tight text-violet-950">
                    {m.name}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] text-ink-faint">{m.group}</span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <p aria-live="polite" className="sr-only">
        {group === "All"
          ? `Showing all ${modules.length} modules`
          : `Showing ${shown.length} ${group} modules`}
      </p>
    </div>
  );
}

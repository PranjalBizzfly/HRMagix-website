"use client";

import { useMemo, useState } from "react";
import { moduleGroups, modules } from "@/lib/content";

/** Filterable module wall — white tiles on the section ground. */
export default function ModuleExplorer() {
  const [group, setGroup] = useState("All");
  const filters = useMemo(() => ["All", ...moduleGroups], []);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter modules by area"
        className="mask-fade-x -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {filters.map((f) => {
          const active = f === group;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setGroup(f)}
              className={`shrink-0 snap-start rounded-full px-4.5 px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 ${
                active
                  ? "bg-violet-500 text-white shadow-glow"
                  : "bg-white text-ink-soft ring-1 ring-inset ring-violet-200 hover:-translate-y-0.5 hover:ring-violet-400 motion-reduce:hover:translate-y-0"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

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
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-[18px] ring-1 ring-violet-100 transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:transform-none"
                  aria-hidden="true"
                >
                  {m.glyph}
                </span>
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-bold leading-tight text-violet-950">
                    {m.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-ink-faint">{m.group}</span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

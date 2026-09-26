"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { modules, moduleGroups } from "@/lib/content";
import { Icon } from "./icons";

/**
 * The twelve modules, grouped into tabs by workspace area.
 *
 * A proper ARIA tablist: arrow keys move between tabs, Home/End jump to the
 * ends, and only the active tab is in the tab order. On narrow screens the tab
 * row scrolls horizontally rather than wrapping into a wall of pills.
 */
export default function ModuleTabs() {
  const tabs = ["All", ...moduleGroups];
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();

  const shown =
    active === 0 ? modules : modules.filter((m) => m.group === tabs[active]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % tabs.length
        : e.key === "ArrowLeft"
          ? (active - 1 + tabs.length) % tabs.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Module groups"
        className="track track-start -mx-5 mb-8 gap-2 px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {tabs.map((t, i) => {
          const count = i === 0 ? modules.length : modules.filter((m) => m.group === t).length;
          const selected = i === active;
          return (
            <button
              key={t}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${base}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKey}
              className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 text-[13.5px] font-semibold transition-colors duration-300 ${
                selected
                  ? "bg-brand text-white shadow-glow"
                  : "bg-surface text-body ring-1 ring-inset ring-line hover:text-accent hover:ring-line-accent"
              }`}
            >
              {t}
              <span
                className={`rounded-full px-1.5 text-[11px] tabular-nums ${
                  selected ? "bg-white/20" : "bg-surface-sunken text-subtle"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${active}`}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      >
        {shown.map((m) => (
          <article key={m.slug} className="card card-hover flex flex-col p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-label ring-1 ring-line">
                {m.group}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[18px] font-bold text-heading">{m.name}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-muted">{m.desc}</p>
            <ul className="mt-5 space-y-2 border-t border-line pt-4">
              {m.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[13.5px] leading-snug text-body">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useDragScroll } from "./motion";

type Props = {
  items: string[];
  active: number;
  onChange: (i: number) => void;
  label: string;
  /**
   * "tabs" wires the WAI-ARIA tab pattern (roving tabindex + aria-controls);
   * "filters" is a set of toggle buttons that filter a list in place.
   */
  mode?: "tabs" | "filters";
  /** Base id for aria-controls when mode is "tabs". */
  idBase?: string;
  align?: "start" | "center";
};

/**
 * Horizontal rail of pills. Scrolls with native swipe on touch, click-drag on
 * mouse, and arrow keys on keyboard; the active pill is always scrolled into
 * view so keyboard users never lose it off-screen.
 */
export default function TabRail({
  items,
  active,
  onChange,
  label,
  mode = "filters",
  idBase = "rail",
  align = "center",
}: Props) {
  const { ref, dragging, didDrag, dragProps } = useDragScroll<HTMLDivElement>();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  // Keep the selected pill visible when it changes from the keyboard.
  useEffect(() => {
    const el = buttons.current[active];
    const track = ref.current;
    if (!el || !track) return;
    if (track.scrollWidth <= track.clientWidth) return;
    const left = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? ("auto" as const)
      : ("smooth" as const);
    track.scrollTo({ left, behavior });
  }, [active, ref]);

  const move = (next: number) => {
    const i = (next + items.length) % items.length;
    onChange(i);
    if (mode === "tabs") buttons.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        move(active + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        move(active - 1);
        break;
      case "Home":
        e.preventDefault();
        move(0);
        break;
      case "End":
        e.preventDefault();
        move(items.length - 1);
        break;
    }
  };

  const isTabs = mode === "tabs";

  return (
    <div
      ref={ref}
      {...dragProps}
      onKeyDown={onKeyDown}
      role={isTabs ? "tablist" : "group"}
      aria-label={label}
      className={`track track-start -mx-5 gap-2 px-5 pb-2 sm:mx-0 sm:px-0 ${
        align === "center" ? "sm:justify-center" : ""
      } ${dragging ? "track-grabbing" : "track-grab"}`}
    >
      {items.map((item, i) => {
        const on = i === active;
        return (
          <button
            key={item}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            role={isTabs ? "tab" : undefined}
            id={isTabs ? `${idBase}-tab-${i}` : undefined}
            aria-controls={isTabs ? `${idBase}-panel` : undefined}
            aria-selected={isTabs ? on : undefined}
            aria-pressed={isTabs ? undefined : on}
            tabIndex={isTabs && !on ? -1 : 0}
            onClick={() => {
              if (didDrag()) return;
              onChange(i);
            }}
            className={`shrink-0 rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 ${
              on
                ? "bg-brand text-white shadow-glow"
                : "bg-surface text-muted ring-1 ring-inset ring-line-strong hover:-translate-y-0.5 hover:ring-line-accent motion-reduce:hover:translate-y-0"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

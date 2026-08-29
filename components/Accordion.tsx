"use client";

import { useId, useState } from "react";
import { Icon } from "./icons";
import { Reveal } from "./motion";

export type AccordionItem = { q: string; a: string };

/**
 * A disclosure list.
 *
 * Built on real buttons rather than `<details>` so the open/close transition can
 * be animated and so `aria-expanded` and `aria-controls` describe the
 * relationship precisely. Rows are ruled rather than boxed — a stack of cards
 * would turn a reference list into a grid, which is exactly the pattern this
 * site avoids.
 *
 * `single` collapses the previously open row, which suits a short list. Left
 * off, rows open independently, which suits a long one the reader is scanning.
 */
export default function Accordion({
  items,
  single = false,
  className = "",
}: {
  items: AccordionItem[];
  single?: boolean;
  className?: string;
}) {
  const uid = useId();
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = single ? new Set<number>() : new Set(prev);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <ul className={`border-t border-line ${className}`}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-button-${i}`;
        return (
          <Reveal as="li" key={item.q} delay={i * 40} y={10} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent sm:py-6"
              >
                <span className="font-display text-[16px] font-bold leading-snug text-heading transition-colors group-hover:text-accent sm:text-[17.5px]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ring-1 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-brand text-white ring-brand"
                      : "text-accent ring-line group-hover:ring-line-accent"
                  }`}
                >
                  <Icon name="chevronDown" className="h-3.5 w-3.5" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="max-w-3xl text-[15.5px] leading-[1.75] text-muted">{item.a}</p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}

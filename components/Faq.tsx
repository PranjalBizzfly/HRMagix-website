"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

/** Single-open accordion built from rounded white cards. */
export default function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-[20px] bg-surface transition-all duration-300 ${
              isOpen ? "shadow-lift ring-2 ring-line-accent" : "shadow-soft ring-1 ring-line"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <span className="flex-1 font-display text-[16px] font-bold leading-snug text-heading sm:text-[18px]">
                  {item.q}
                </span>
                <span
                  className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 bg-brand text-white" : "bg-surface-sunken text-accent"
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-[1.6px] w-3 rounded-full bg-current" />
                  <span className="absolute h-3 w-[1.6px] rounded-full bg-current" />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[70ch] px-5 pb-6 text-[15.5px] leading-relaxed text-muted sm:px-7 sm:pb-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

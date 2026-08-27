"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/lib/content";

/**
 * Three numbered cards with a rule running through them that fills as the
 * section crosses the viewport.
 */
export default function StepTrail() {
  const ref = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const tick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const span = rect.height + window.innerHeight * 0.5;
        const travelled = window.innerHeight * 0.85 - rect.top;
        setProgress(Math.max(0, Math.min(1, travelled / span)));
      });
    };
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <ol ref={ref} className="relative grid gap-4 lg:grid-cols-3 lg:gap-5">
      <div
        className="pointer-events-none absolute left-[38px] top-6 hidden h-[calc(100%-3rem)] w-px overflow-hidden bg-violet-100 sm:block lg:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full w-full origin-top bg-violet-400 transition-transform duration-150 ease-out"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
      <div
        className="pointer-events-none absolute left-0 top-[62px] hidden h-px w-full overflow-hidden bg-violet-100 lg:block"
        aria-hidden="true"
      >
        <div
          className="h-full w-full origin-left bg-violet-400 transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {steps.map((s, i) => {
        const reached = progress > i * 0.28 + 0.03;
        return (
          <li
            key={s.n}
            className="relative rounded-[24px] bg-white p-7 shadow-soft ring-1 ring-violet-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0 sm:p-8"
          >
            <span
              className={`relative z-[1] grid h-14 w-14 place-items-center rounded-2xl font-display text-[20px] font-bold transition-all duration-500 ${
                reached ? "bg-violet-500 text-white shadow-glow" : "bg-violet-50 text-violet-300"
              }`}
            >
              {s.n}
            </span>
            <h3 className="mt-6 font-display text-[20px] font-bold sm:text-[22px]">{s.title}</h3>
            <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink-soft">{s.copy}</p>
          </li>
        );
      })}
    </ol>
  );
}

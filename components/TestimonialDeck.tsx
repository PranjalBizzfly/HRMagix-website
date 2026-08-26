"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { Stars } from "./ui";
import { useReducedMotion } from "./motion";

/**
 * Quote carousel: one card at a time on small screens, three-up from lg, with
 * arrow and dot controls. Auto-advances only while visible.
 */
export default function TestimonialDeck() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || !visible) return;
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [reduced, paused, visible]);

  const go = (dir: -1 | 1) =>
    setActive((a) => (a + dir + testimonials.length) % testimonials.length);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* lg and up: all three side by side, the active one raised */}
      <ul className="hidden gap-5 lg:grid lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <li key={t.name}>
            <Card t={t} raised={i === active} onFocus={() => setActive(i)} />
          </li>
        ))}
      </ul>

      {/* below lg: one at a time */}
      <div className="relative overflow-hidden lg:hidden">
        <div
          className="flex transition-transform duration-600 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translate3d(-${active * 100}%,0,0)` }}
        >
          {testimonials.map((t, i) => (
            <div key={t.name} className="w-full shrink-0 px-0.5" aria-hidden={i !== active}>
              <Card t={t} raised />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-violet-700 ring-1 ring-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-violet-400 motion-reduce:hover:translate-y-0"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h9M8.5 4l4 4-4 4" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-pressed={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-violet-500" : "w-2 bg-violet-200 hover:bg-violet-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-violet-700 ring-1 ring-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-violet-400 motion-reduce:hover:translate-y-0"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h9M8.5 4l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Card({
  t,
  raised,
  onFocus,
}: {
  t: (typeof testimonials)[number];
  raised: boolean;
  onFocus?: () => void;
}) {
  return (
    <figure
      onMouseEnter={onFocus}
      className={`flex h-full flex-col rounded-[24px] bg-white p-7 transition-all duration-500 sm:p-8 ${
        raised ? "shadow-lift ring-2 ring-violet-300" : "shadow-soft ring-1 ring-violet-100"
      }`}
    >
      <span
        className="font-display text-[44px] font-bold leading-[0.6] text-violet-200"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink">{t.quote}</blockquote>
      <Stars className="mt-6" />
      <figcaption className="mt-4 flex items-center gap-3 border-t border-violet-100 pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-[13px] font-bold text-white">
          {t.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-display text-[14.5px] font-bold text-violet-950">
            {t.name}
          </span>
          <span className="block truncate text-[12.5px] text-ink-faint">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

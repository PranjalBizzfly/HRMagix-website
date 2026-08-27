"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { Stars } from "./ui";
import { Icon } from "./icons";
import { useDragScroll, useReducedMotion, useSnapIndex } from "./motion";

/**
 * Quote carousel.
 *
 * One scroll-snap track drives every input: native swipe and momentum on touch,
 * click-drag on mouse, arrow keys and the prev/next buttons on keyboard. The
 * active dot is derived from scroll position, so all four stay in sync without
 * a carousel library. From lg the three cards fit and the track stops scrolling.
 */
export default function TestimonialDeck() {
  const count = testimonials.length;
  const { ref: snapRef, index, scrollTo } = useSnapIndex<HTMLDivElement>(count);
  const { ref: dragRef, dragging, didDrag, dragProps } = useDragScroll<HTMLDivElement>();
  const reduced = useReducedMotion();

  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollable, setScrollable] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // One node, two hooks.
  const setTrack = useCallback(
    (node: HTMLDivElement | null) => {
      snapRef.current = node;
      dragRef.current = node;
    },
    [snapRef, dragRef],
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Controls only matter while the track actually overflows.
  useEffect(() => {
    const el = snapRef.current;
    if (!el) return;
    const check = () => setScrollable(el.scrollWidth - el.clientWidth > 8);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [snapRef]);

  useEffect(() => {
    if (reduced || paused || !visible || !scrollable || dragging) return;
    const id = setInterval(() => scrollTo((index + 1) % count), 6500);
    return () => clearInterval(id);
  }, [reduced, paused, visible, scrollable, dragging, index, count, scrollTo]);

  const go = (dir: -1 | 1) => scrollTo((index + dir + count) % count);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollTo(count - 1);
    }
  };

  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={setTrack}
        {...dragProps}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
        className={`track -mx-5 gap-4 px-5 pb-2 sm:mx-0 sm:px-0 lg:gap-5 ${
          scrollable ? (dragging ? "track-grabbing" : "track-grab") : ""
        }`}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className="w-[86%] sm:w-[62%] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <Card
              t={t}
              raised={i === index}
              onClickCapture={(e) => {
                // A click that ends a drag shouldn't select text or follow.
                if (didDrag()) e.preventDefault();
              }}
            />
          </div>
        ))}
      </div>

      {scrollable && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-violet-700 ring-1 ring-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-violet-400 motion-reduce:hover:translate-y-0"
          >
            <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-violet-500" : "w-2 bg-violet-200 hover:bg-violet-300"
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
            <Icon name="arrowRight" className="h-4 w-4" />
          </button>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {`Testimonial ${index + 1} of ${count}: ${testimonials[index].name}`}
      </p>
    </div>
  );
}

function Card({
  t,
  raised,
  onClickCapture,
}: {
  t: (typeof testimonials)[number];
  raised: boolean;
  onClickCapture?: (e: React.MouseEvent) => void;
}) {
  return (
    <figure
      onClickCapture={onClickCapture}
      className={`flex h-full select-none flex-col rounded-[24px] bg-white p-7 transition-all duration-500 sm:p-8 ${
        raised ? "shadow-lift ring-2 ring-violet-300" : "shadow-soft ring-1 ring-violet-100"
      }`}
    >
      <span
        className="font-display text-[44px] font-bold leading-[0.6] text-violet-200"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 flex-1 text-[16.5px] leading-relaxed text-ink">{t.quote}</blockquote>
      <Stars className="mt-6" />
      <figcaption className="mt-4 flex items-center gap-3 border-t border-violet-100 pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-[13.5px] font-bold text-white">
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

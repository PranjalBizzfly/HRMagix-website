"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./motion";

/**
 * Types its text out once, the first time it scrolls into view, with a
 * blinking caret. Screen readers get the whole text immediately; with
 * reduced motion the text simply appears.
 */
export default function Typewriter({
  text,
  speed = 65,
  delay = 300,
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { rootMargin: "-40px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setShown(text.length);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setShown(i);
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [started, reduced, text, speed, delay]);

  const done = shown >= text.length;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, shown)}
        {/* Holds the line's full width so the layout does not shift while typing. */}
        <span className="invisible">{text.slice(shown)}</span>
        {!done && !reduced && <span className="type-caret" />}
      </span>
    </span>
  );
}

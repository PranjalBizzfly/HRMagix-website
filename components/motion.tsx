"use client";

import {
  createElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/** True once the user has asked for reduced motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

/**
 * Fires once when the element scrolls into view. One observer per element keeps
 * the scroll thread free — nothing runs on scroll itself.
 */
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, shown };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
  /** Travel distance in px; negative values slide down into place. */
  y?: number;
  scale?: number;
  blur?: number;
  style?: CSSProperties;
};

/** Staggered scroll reveal. Styling lives in globals.css so SSR output is stable. */
export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 22,
  scale = 1,
  blur = 6,
  style,
}: RevealProps) {
  const { ref, shown } = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      "data-shown": shown ? "true" : "false",
      className: `reveal ${className}`,
      style: {
        ...style,
        "--reveal-d": `${delay}ms`,
        "--reveal-y": `${y}px`,
        "--reveal-s": scale,
        "--reveal-b": `${blur}px`,
      } as CSSProperties,
    },
    children,
  );
}

/** Word-by-word headline reveal. Whitespace is preserved with real spaces. */
export function Words({
  text,
  className = "",
  as = "span",
  delay = 0,
  highlight,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** Words matching this string get the brand gradient. */
  highlight?: string;
}) {
  const { ref, shown } = useInView<HTMLElement>();
  const words = text.split(" ");
  return createElement(
    as,
    { ref, "data-shown": shown ? "true" : "false", className },
    words.map((word, i) => (
      <span key={`${word}-${i}`}>
        <span
          className={`word ${highlight && word.includes(highlight) ? "text-gradient" : ""}`}
          style={{ "--i": i, transitionDelay: `${delay + i * 45}ms` } as CSSProperties}
        >
          {word}
        </span>
        {i < words.length - 1 ? " " : null}
      </span>
    )),
  );
}

/**
 * Subtle parallax driven by rAF-throttled scroll reads.
 * `speed` is a fraction of scroll distance; 0.08 is a whisper, 0.3 is obvious.
 */
export function Parallax({
  children,
  speed = 0.1,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let frame = 0;
    let visible = false;

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) tick();
    });
    io.observe(el);

    const tick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!visible) return;
        const rect = el.getBoundingClientRect();
        const middle = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${(-middle * speed).toFixed(2)}px, 0)`;
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [speed, reduced]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/** Counts up to a number once visible. Non-numeric suffixes are preserved. */
export function Counter({
  to,
  suffix = "",
  decimals = 0,
  duration = 1400,
  className = "",
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, shown } = useInView<HTMLSpanElement>();
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shown) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [shown, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/** Pointer-following highlight used on interactive panels. */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const onPointerMove = useCallback((e: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
  return { ref, onPointerMove };
}

/** Progress of the page, 0 → 1. Used by the nav scroll rail. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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
  return progress;
}

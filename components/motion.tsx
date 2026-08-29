"use client";

import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
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
  /** Anchor target, for revealed sections that are linked to directly. */
  id?: string;
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
  id,
}: RevealProps) {
  const { ref, shown } = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      id,
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

/**
 * Gives its direct children a reveal cadence.
 *
 * The site previously hand-tuned a `delay` on every Reveal, which meant the
 * rhythm of a section was a set of magic numbers spread across its markup and
 * drifted between pages. Here the sequence is a property of the container: the
 * children arrive in document order — heading, then supporting text, then the
 * image, then the action — which is the order that reads as one thought rather
 * than as several elements appearing at once.
 *
 * The delay itself is applied in CSS from `--i`, so nothing is computed at
 * runtime and the server output is stable.
 */
export function Stagger({
  children,
  as = "div",
  className = "",
  /** Milliseconds between children. */
  step = 90,
  /** Milliseconds before the first child. */
  from = 0,
  style,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  step?: number;
  from?: number;
  style?: CSSProperties;
  id?: string;
}) {
  const items = Children.toArray(children);
  return createElement(
    as,
    {
      id,
      className: `stagger ${className}`,
      style: {
        ...style,
        "--stagger-step": `${step}ms`,
        "--stagger-from": `${from}ms`,
      } as CSSProperties,
    },
    items.map((child, i) =>
      isValidElement<{ style?: CSSProperties }>(child)
        ? cloneElement(child, {
            style: { ...(child.props.style ?? {}), ["--i" as string]: i } as CSSProperties,
          })
        : child,
    ),
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

/**
 * Pointer-following highlight for panels. Writes --mx/--my (and --spot for the
 * fade) which the `.spotlight` class in globals.css paints. Fine-pointer only —
 * the CSS opts out under `pointer: coarse` and reduced motion, and the handlers
 * below never run on touch because they are pointer-type gated.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const frame = useRef(0);

  const onPointerMove = useCallback((e: React.PointerEvent<T>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  }, []);

  const onPointerEnter = useCallback((e: React.PointerEvent<T>) => {
    if (e.pointerType !== "mouse") return;
    ref.current?.style.setProperty("--spot", "1");
  }, []);

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    ref.current?.style.setProperty("--spot", "0");
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return { ref, spotlightProps: { onPointerMove, onPointerEnter, onPointerLeave } };
}

/**
 * Drag-to-scroll for a horizontal track.
 *
 * Touch is left to the browser (native momentum + scroll-snap); this only adds
 * mouse dragging, so desktop gets the same affordance without fighting inertia.
 * Returns handlers plus a `dragging` flag so callers can suppress click-through.
 */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const state = useRef({ down: false, startX: 0, startLeft: 0, moved: 0 });
  const [dragging, setDragging] = useState(false);

  const onPointerDown = useCallback((e: React.PointerEvent<T>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    state.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: 0 };
    setDragging(true);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el || !state.current.down) return;
    const dx = e.clientX - state.current.startX;
    state.current.moved = Math.max(state.current.moved, Math.abs(dx));
    el.scrollLeft = state.current.startLeft - dx;
  }, []);

  const end = useCallback(() => {
    if (!state.current.down) return;
    state.current.down = false;
    setDragging(false);
  }, []);

  /** True right after a drag, so a click that ends a drag can be ignored. */
  const didDrag = useCallback(() => state.current.moved > 6, []);

  return {
    ref,
    dragging,
    didDrag,
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
      onPointerLeave: end,
      onPointerCancel: end,
    },
  };
}

/**
 * Tracks which snap child of a scroll container is centred, so a track can
 * drive dots and arrows without a carousel library.
 */
export function useSnapIndex<T extends HTMLElement>(count: number) {
  const ref = useRef<T | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const read = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const children = [...el.children] as HTMLElement[];
        if (!children.length) return;
        const mid = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((c, i) => {
          const centre = c.offsetLeft + c.offsetWidth / 2;
          const d = Math.abs(centre - mid);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setIndex((prev) => (prev === best ? prev : best));
      });
    };
    el.addEventListener("scroll", read, { passive: true });
    read();
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", read);
    };
  }, [count]);

  /** Scrolls the nth child into view, honouring reduced motion. */
  const scrollTo = useCallback((i: number) => {
    const el = ref.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? ("auto" as const)
      : ("smooth" as const);
    el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior });
  }, []);

  return { ref, index, scrollTo };
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

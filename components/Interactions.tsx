"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide interaction layer. Adds behaviour to elements that already exist,
 * without changing any markup or layout:
 *
 *  - `.card`       a cursor spotlight (CSS vars --mx / --my, see globals.css)
 *  - `.card-hover` a 3D tilt toward the cursor (--rx / --ry)
 *  - `.group.rounded-full` buttons/links are pulled slightly toward the cursor
 *  - a thin scroll-progress bar at the top of the viewport
 *
 * Everything is driven by one delegated pointermove listener. It is disabled
 * on touch devices and when the visitor prefers reduced motion.
 */
export default function Interactions() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Scroll progress. */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!fine || reduced) return () => window.removeEventListener("scroll", onScroll);

    document.documentElement.classList.add("fx");
    let card: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;

    const reset = (el: HTMLElement | null) => {
      el?.style.removeProperty("--rx");
      el?.style.removeProperty("--ry");
      el?.style.removeProperty("--tx");
      el?.style.removeProperty("--ty");
    };

    const onMove = (e: PointerEvent) => {
      const t = e.target as Element | null;

      const c = t?.closest<HTMLElement>(".card") ?? null;
      if (c !== card) {
        reset(card);
        card = c;
      }
      if (card) {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
        // Big cards tilt less, so long text blocks stay readable.
        if (card.classList.contains("card-hover")) {
          const k = Math.min(1, 380 / Math.max(r.width, r.height)) * 6;
          card.style.setProperty("--rx", `${((0.5 - y) * k).toFixed(2)}deg`);
          card.style.setProperty("--ry", `${((x - 0.5) * k).toFixed(2)}deg`);
        }
      }

      const m = t?.closest<HTMLElement>("a.group.rounded-full, button.group.rounded-full") ?? null;
      if (m !== magnet) {
        reset(magnet);
        magnet = m;
      }
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        magnet.style.setProperty("--tx", `${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px`);
        magnet.style.setProperty("--ty", `${((e.clientY - r.top - r.height / 2) * 0.25).toFixed(1)}px`);
      }
    };

    const onLeave = () => {
      reset(card);
      reset(magnet);
      card = magnet = null;
    };

    /* Cursor aura: a soft glow that eases after the pointer. */
    const aura = document.createElement("div");
    aura.className = "fx-aura";
    aura.setAttribute("aria-hidden", "true");
    document.body.appendChild(aura);
    let ax = -500, ay = -500, tx = -500, ty = -500, raf = 0;
    const follow = () => {
      ax += (tx - ax) * 0.12;
      ay += (ty - ay) * 0.12;
      aura.style.transform = `translate3d(${ax - 200}px, ${ay - 200}px, 0)`;
      raf = Math.abs(tx - ax) + Math.abs(ty - ay) > 0.5 ? requestAnimationFrame(follow) : 0;
    };
    const onAura = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(follow);
    };

    /* Click ripple on round buttons. */
    const onDown = (e: PointerEvent) => {
      const b = (e.target as Element | null)?.closest<HTMLElement>(
        "a.rounded-full, button.rounded-full",
      );
      if (!b) return;
      const r = b.getBoundingClientRect();
      const s = Math.max(r.width, r.height) * 2.2;
      const dot = document.createElement("span");
      dot.className = "fx-ripple";
      dot.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      if (getComputedStyle(b).position === "static") b.style.position = "relative";
      b.style.overflow = "hidden";
      b.style.isolation = "isolate";
      b.appendChild(dot);
      dot.addEventListener("animationend", () => dot.remove());
    };

    /* Images sharpen into focus as they enter the viewport. */
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("fx-in");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    const watch = () =>
      document.querySelectorAll("main img:not(.fx-img)").forEach((img) => {
        const r = img.getBoundingClientRect();
        if (r.top < window.innerHeight) return; // already on screen: leave it alone
        if (img.closest(".photo-skeleton")) return; // <Photo> has its own reveal
        img.classList.add("fx-img");
        io.observe(img);
      });
    watch();
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointermove", onAura, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      aura.remove();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("pointermove", onAura);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("fx");
    };
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-brand to-gold"
    />
  );
}

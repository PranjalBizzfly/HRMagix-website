"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/**
 * Theme system.
 *
 * Three states are tracked, not two: "light" and "dark" are explicit visitor
 * choices, "system" means follow the OS. A first-time visitor starts on
 * "system", so the site matches whatever they already run; the moment they use
 * the toggle their choice is stored and stops tracking the OS.
 *
 * The class is applied by the blocking script in `app/layout.tsx` before first
 * paint — this provider only keeps React in sync with what is already on the
 * document and writes changes back.
 */

export type ThemeChoice = "light" | "dark" | "system";
export type Resolved = "light" | "dark";

export const THEME_KEY = "hrmagix-theme";

type Ctx = {
  /** What the visitor picked. */
  choice: ThemeChoice;
  /** What is actually painted right now. */
  theme: Resolved;
  setChoice: (c: ThemeChoice) => void;
  toggle: () => void;
  /** False until after hydration — used to avoid rendering a guessed icon. */
  ready: boolean;
};

const ThemeContext = createContext<Ctx | null>(null);

function systemTheme(): Resolved {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readChoice(): ThemeChoice {
  if (typeof window === "undefined") return "system";
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    // Private mode / storage disabled — fall back to the OS preference.
    return "system";
  }
}

/** Single place that touches the DOM, so the script and React agree. */
function paint(theme: Resolved, animate: boolean) {
  const root = document.documentElement;
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 280);
  }
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  // Keeps the mobile browser chrome in step with the page.
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#080716" : "#ffffff");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoiceState] = useState<ThemeChoice>("system");
  const [theme, setTheme] = useState<Resolved>("light");
  const [ready, setReady] = useState(false);

  // Adopt whatever the blocking script already decided.
  useEffect(() => {
    const c = readChoice();
    setChoiceState(c);
    setTheme(c === "system" ? systemTheme() : c);
    setReady(true);
  }, []);

  // Track the OS only while the visitor has not made a choice.
  useEffect(() => {
    if (choice !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = mq.matches ? "dark" : "light";
      setTheme(next);
      paint(next, true);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [choice]);

  const setChoice = useCallback((next: ThemeChoice) => {
    const resolved = next === "system" ? systemTheme() : next;
    setChoiceState(next);
    setTheme(resolved);
    paint(resolved, true);
    try {
      if (next === "system") localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage unavailable — the choice still applies for this page session.
    }
  }, []);

  const toggle = useCallback(() => {
    setChoice(document.documentElement.classList.contains("dark") ? "light" : "dark");
  }, [setChoice]);

  return (
    <ThemeContext.Provider value={{ choice, theme, setChoice, toggle, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

/**
 * Runs before first paint, so the correct theme is on <html> by the time the
 * browser has anything to show. Inlined in <head> — never a module, or the
 * wrong theme flashes while it downloads.
 */
export const themeScript = `(function(){try{
var k=${JSON.stringify(THEME_KEY)};var s=localStorage.getItem(k);
var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);
var r=document.documentElement;
if(d)r.classList.add("dark");
r.style.colorScheme=d?"dark":"light";
}catch(e){}})();`;

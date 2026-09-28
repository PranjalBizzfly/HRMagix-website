"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IndexGroup, IndexedPage } from "@/lib/siteIndex";
import { Icon } from "./icons";

/**
 * Site search, opened from the header or with Ctrl/⌘ K.
 *
 * Empty, it offers a short "Start here" list. Typing searches every page on
 * the site (titles, groups and a few hidden keywords), ranked so that titles
 * starting with the query come first. ↑/↓ move, Enter opens, Esc closes.
 */

const START_HERE: { title: string; href: string }[] = [
  { title: "Platform overview", href: "/solutions" },
  { title: "Every feature in the app", href: "/solutions#app-features" },
  { title: "Industries", href: "/industries" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
];

const normalise = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\w\s&-]/g, "");

function search(pages: IndexedPage[], query: string): IndexedPage[] {
  const q = normalise(query.trim());
  if (!q) return [];
  const words = q.split(/\s+/);
  return pages
    .map((p) => {
      const title = normalise(p.title);
      const hay = `${title} ${normalise(p.group)} ${normalise(p.keywords ?? "")}`;
      if (!words.every((w) => hay.includes(w))) return null;
      const score = title.startsWith(q) ? 0 : title.includes(q) ? 1 : 2;
      return { p, score };
    })
    .filter((x): x is { p: IndexedPage; score: number } => x !== null)
    .sort((a, b) => a.score - b.score || a.p.title.length - b.p.title.length)
    .slice(0, 8)
    .map((x) => x.p);
}

export default function SearchDialog({
  open,
  onClose,
  groups,
}: {
  open: boolean;
  onClose: () => void;
  groups: IndexGroup[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const pages = useMemo(() => groups.flatMap((g) => g.pages), [groups]);
  const total = pages.length;
  const results = useMemo(() => search(pages, query), [pages, query]);
  const rows: { title: string; href: string; group?: string }[] = query.trim()
    ? results
    : START_HERE;

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, rows.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && rows[active]) {
      e.preventDefault();
      go(rows[active].href);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
    {open && (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Search the site">
      <motion.button
        type="button"
        aria-label="Close search"
        tabIndex={-1}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-ink/55 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className="relative mx-auto mt-[12vh] w-[calc(100%-2rem)] max-w-xl overflow-hidden rounded-[20px] border border-line bg-surface shadow-float">
        {/* Input row */}
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-subtle" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search solutions, industries, resources…"
            aria-label="Search"
            aria-controls="search-results"
            aria-activedescendant={rows[active] ? `search-row-${active}` : undefined}
            className="h-14 min-w-0 flex-1 bg-transparent text-[15.5px] text-heading outline-none placeholder:text-subtle [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md px-2 py-1 text-[12px] font-semibold text-muted ring-1 ring-line transition-colors hover:text-heading"
          >
            Esc
          </button>
        </div>

        {/* Rows */}
        <div className="max-h-[52vh] overflow-y-auto px-2 py-3">
          <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-label">
            {query.trim() ? `Results · ${results.length}` : "Start here"}
          </p>

          {rows.length === 0 ? (
            <p className="px-3 py-6 text-[14px] text-muted">
              No page matches &ldquo;{query}&rdquo;. Try a module, a statute or an industry.
            </p>
          ) : (
            <ul id="search-results" role="listbox" aria-label="Pages">
              {rows.map((r, i) => (
                <li key={r.href} id={`search-row-${i}`} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onClick={() => go(r.href)}
                    onMouseMove={() => setActive(i)}
                    className={`group flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      i === active ? "bg-surface-raised" : ""
                    }`}
                  >
                    <span className="min-w-0 truncate text-[14.5px] text-heading">{r.title}</span>
                    <span className="flex shrink-0 items-center gap-3">
                      {r.group && (
                        <span className="hidden text-[12px] text-subtle sm:inline">{r.group}</span>
                      )}
                      <span className={i === active ? "text-accent" : "text-accent-soft"}>
                        <Icon name="arrowRight" className="h-4 w-4" />
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <p className="px-3 pt-3 text-[12.5px] text-subtle">
            Type to search every page on the site. Use ↑ ↓ to move, Enter to open.
          </p>
        </div>

        {/* Footer */}
        <button
          type="button"
          onClick={() => go("/explore-all-pages")}
          className="flex w-full items-center justify-between gap-4 border-t border-line bg-surface-sunken px-5 py-3.5 text-left transition-colors hover:bg-surface-raised"
        >
          <span className="flex items-center gap-2.5 text-[14px] font-semibold text-heading">
            <Icon name="grid" className="h-4 w-4 text-accent" />
            Explore all pages
          </span>
          <span className="flex items-center gap-2 text-[12.5px] text-muted">
            {total} pages
            <Icon name="arrowRight" className="h-4 w-4 text-accent" />
          </span>
        </button>
      </motion.div>
    </div>
    )}
    </AnimatePresence>
  );
}

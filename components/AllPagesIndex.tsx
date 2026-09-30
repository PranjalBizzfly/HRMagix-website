"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { IndexGroup } from "@/lib/siteIndex";
import { Icon } from "./icons";

/**
 * The "Explore all pages" index: a filter field, one chip per group with its
 * count, and every group as a collapsible section of links in three columns.
 */
export default function AllPagesIndex({ groups }: { groups: IndexGroup[] }) {
  const [query, setQuery] = useState("");
  const [only, setOnly] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const total = groups.reduce((n, g) => n + g.pages.length, 0);
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      groups
        .filter((g) => !only || g.name === only)
        .map((g) => ({
          ...g,
          pages: q
            ? g.pages.filter((p) =>
                `${p.title} ${p.keywords ?? ""}`.toLowerCase().includes(q),
              )
            : g.pages,
        }))
        .filter((g) => g.pages.length > 0),
    [groups, only, q],
  );

  const shownCount = visible.reduce((n, g) => n + g.pages.length, 0);
  const allCollapsed = visible.length > 0 && visible.every((g) => collapsed.has(g.name));

  const toggle = (name: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  const chip = (active: boolean) =>
    `inline-flex min-h-[36px] items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium transition-colors ${
      active
        ? "bg-brand/10 text-accent ring-2 ring-inset ring-brand/60"
        : "bg-surface text-body ring-1 ring-inset ring-line hover:ring-line-accent"
    }`;

  return (
    <div>
      {/* ---- Controls ---- */}
      <div className="rounded-[20px] bg-surface-sunken p-5 ring-1 ring-line sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="relative block w-full sm:max-w-md">
            <span className="sr-only">Search pages</span>
            <Icon
              name="search"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages…"
              className="h-12 w-full rounded-full bg-surface pl-11 pr-4 text-[14.5px] text-heading outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand/60"
            />
          </label>
          <div className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-[0.16em]">
            <span className="text-heading" aria-live="polite">
              {q || only ? `${shownCount} of ${total}` : total} pages
            </span>
            <button
              type="button"
              onClick={() =>
                setCollapsed(allCollapsed ? new Set() : new Set(visible.map((g) => g.name)))
              }
              className="border-b border-heading/60 text-heading transition-colors hover:border-accent hover:text-accent"
            >
              {allCollapsed ? "Expand all" : "Collapse all"}
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by section">
          <button type="button" aria-pressed={!only} onClick={() => setOnly(null)} className={chip(!only)}>
            All
          </button>
          {groups.map((g) => (
            <button
              key={g.name}
              type="button"
              aria-pressed={only === g.name}
              onClick={() => setOnly(only === g.name ? null : g.name)}
              className={chip(only === g.name)}
            >
              {g.name}
              <span className="text-[11.5px] tabular-nums text-subtle">{g.pages.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ---- Sections ---- */}
      {visible.length === 0 ? (
        <p className="py-16 text-center text-[15px] text-muted">
          No page matches &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="mt-10 space-y-12">
          {visible.map((g) => {
            const isCollapsed = collapsed.has(g.name);
            const id = `group-${g.name.replace(/\W+/g, "-").toLowerCase()}`;
            return (
              <section key={g.name} aria-labelledby={`${id}-h`}>
                <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
                  <h2 id={`${id}-h`} className="display display-md">
                    {g.name}
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggle(g.name)}
                    aria-expanded={!isCollapsed}
                    aria-controls={id}
                    className="inline-flex min-h-[40px] items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
                  >
                    {g.pages.length} {g.pages.length === 1 ? "page" : "pages"}
                    <Icon
                      name="chevronDown"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        isCollapsed ? "-rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>

                {!isCollapsed && (
                  <ul id={id} className="grid-strict mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2 md:grid-cols-3">
                    {/* Three even columns, filled row by row; one line per title keeps
                        every row level so each column lines up vertically. */}
                    {g.pages.map((p) => (
                      <li key={p.href} className="min-w-0">
                        <Link
                          href={p.href}
                          title={p.title}
                          className="group flex min-h-[36px] max-w-full items-center gap-2 py-1 text-[14.5px] text-body transition-colors hover:text-accent"
                        >
                          <span className="truncate">{p.title}</span>
                          <span className="shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100">
                            <Icon name="arrowRight" className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

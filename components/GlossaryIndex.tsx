"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { glossary, byLetter, type Term } from "@/lib/glossary";
import { Arrow } from "./ui";

/** Same rule as lib/related.ts slugify — kept local so this client component
 *  does not pull the server-side content corpus into the browser bundle. */
const termSlug = (s: string) =>
  s.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * The glossary index.
 *
 * A search field and an A–Z rail over one definition list. Deliberately not
 * paginated and not collapsed into accordions: a glossary is most useful when
 * the whole thing is on the page and the browser's own find-in-page works
 * across it, so filtering narrows the same list rather than replacing it.
 *
 * The match runs over the term, its expansion and the definition body, because
 * people arrive looking for "provident fund" as often as for "EPF".
 */
export default function GlossaryIndex() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter((t) =>
      [t.term, t.expands ?? "", t.definition, t.confusedWith ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const groups = useMemo(() => byLetter(matches), [matches]);
  const present = new Set(groups.map(([letter]) => letter));
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {/* ---- Search ---- */}
      <div className="flex flex-col gap-5 border-b border-line-strong pb-7 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="w-full max-w-md">
          <label
            htmlFor="glossary-search"
            className="block text-[12px] font-bold uppercase tracking-[0.14em] text-subtle"
          >
            Search the glossary
          </label>
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="EPF, sandwich rule, arrears…"
            className="mt-3 h-[52px] w-full rounded-2xl border border-line-strong bg-surface-field px-5 text-[15.5px] text-heading outline-none transition-colors placeholder:text-subtle focus:border-line-accent focus:ring-4 focus:ring-brand/15"
          />
        </div>

        <p aria-live="polite" className="text-[14px] text-muted">
          {matches.length === glossary.length
            ? `${glossary.length} terms`
            : `${matches.length} of ${glossary.length} terms`}
        </p>
      </div>

      {/* ---- A–Z rail ---- */}
      <nav aria-label="Jump to letter" className="mt-6 flex flex-wrap gap-1.5">
        {alphabet.map((letter) =>
          present.has(letter) ? (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="grid h-8 w-8 place-items-center rounded-lg text-[13px] font-bold text-accent ring-1 ring-line transition-colors hover:bg-surface-raised hover:ring-line-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-lg text-[13px] font-semibold text-subtle/50"
            >
              {letter}
            </span>
          ),
        )}
      </nav>

      {/* ---- The list ---- */}
      {matches.length === 0 ? (
        <p className="mt-14 max-w-xl text-[16.5px] leading-[1.7] text-muted">
          Nothing matches &ldquo;{query.trim()}&rdquo;. The glossary covers Indian statutory terms,
          ordinary payroll vocabulary and the words this site uses for parts of the platform, if a
          term you expected is missing, it is worth asking rather than assuming it means what it
          looks like.
        </p>
      ) : (
        <div className="mt-12">
          {groups.map(([letter, terms]) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-[140px] pt-8">
              <h2 className="border-b border-line-accent pb-2 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-accent">
                {letter}
              </h2>
              <dl>
                {terms.map((t) => (
                  <Entry key={t.term} term={t} />
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function Entry({ term }: { term: Term }) {
  return (
    <div className="grid gap-2 border-b border-line py-7 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12">
      <dt className="lg:sticky lg:top-[110px] lg:self-start">
        <Link
          href={`/resources/hr-and-payroll-glossary/${termSlug(term.term)}`}
          className="font-display text-[17px] font-bold leading-snug tracking-[-0.02em] text-heading underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          {term.term}
        </Link>
        {term.expands && (
          <span className="mt-1 block text-[13px] leading-snug text-subtle">{term.expands}</span>
        )}
      </dt>
      <dd className="min-w-0 max-w-2xl">
        <p className="text-[16px] leading-[1.72] text-body">{term.definition}</p>

        {term.confusedWith && (
          <p className="mt-3.5 border-l-2 border-line-accent pl-4 text-[15px] leading-[1.68] text-muted">
            <span className="font-semibold text-accent">Often confused: </span>
            {term.confusedWith}
          </p>
        )}

        {term.see && (
          <Link
            href={term.see.href}
            className="group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-accent"
          >
            {term.see.label} <Arrow />
          </Link>
        )}
      </dd>
    </div>
  );
}

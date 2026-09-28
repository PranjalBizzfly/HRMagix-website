"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js/min";
import { Icon } from "./icons";

/**
 * Phone number with a searchable country-code picker.
 *
 * Every country libphonenumber knows (245) is listed with its flag, English
 * name and dial code. Search matches name, ISO code or dial code ("india",
 * "IN", "+91", "91"). The picker is an accessible combobox: arrow keys move,
 * Enter selects, Escape closes. The number itself is validated against the
 * chosen country's numbering plan by checkPhone() in lib/forms.ts, which also
 * produces the E.164 value that is submitted.
 */

type Country = { code: CountryCode; name: string; dial: string; flag: string };

const flagOf = (iso: string) =>
  String.fromCodePoint(...[...iso.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

let cache: Country[] | null = null;
function allCountries(): Country[] {
  if (cache) return cache;
  const names = new Intl.DisplayNames(["en"], { type: "region" });
  cache = getCountries()
    .map((code) => ({
      code,
      name: names.of(code) ?? code,
      dial: getCountryCallingCode(code),
      flag: flagOf(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return cache;
}

export default function PhoneInput({
  id,
  country,
  onCountryChange,
  value,
  onChange,
  invalid,
  describedBy,
  inputClassName,
  placeholder = "98765 43210",
}: {
  id: string;
  country: CountryCode;
  onCountryChange: (c: CountryCode) => void;
  value: string;
  onChange: (v: string) => void;
  invalid?: boolean;
  describedBy?: string;
  /** Classes for the number field, so each form keeps its own input look. */
  inputClassName: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const countries = useMemo(allCountries, []);
  const current = countries.find((c) => c.code === country) ?? countries[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return countries;
    return countries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase() === q || c.dial.startsWith(q),
    );
  }, [query, countries]);

  useEffect(() => {
    if (!open) return;
    setActive(Math.max(0, results.findIndex((c) => c.code === country)));
    searchRef.current?.focus();
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const choose = (c: Country) => {
    onCountryChange(c.code);
    setOpen(false);
    setQuery("");
    document.getElementById(id)?.focus();
  };

  const onSearchKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) choose(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative flex min-w-0 gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${current.name} +${current.dial}. Change country`}
        className={`${inputClassName} !w-auto shrink-0 !px-3 inline-flex items-center gap-1.5`}
      >
        <span aria-hidden="true" className="text-[18px] leading-none">{current.flag}</span>
        <span className="text-[14.5px] tabular-nums">+{current.dial}</span>
        <Icon name="chevronDown" className="h-3.5 w-3.5 text-subtle" />
      </button>

      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        placeholder={placeholder}
        className={`${inputClassName} min-w-0 flex-1`}
      />

      {open && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-50 w-[min(340px,calc(100vw-48px))] overflow-hidden rounded-xl border border-line-strong bg-surface shadow-float">
          <div className="border-b border-line p-2">
            <input
              ref={searchRef}
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-controls={listId}
              aria-activedescendant={results[active] ? `${listId}-${results[active].code}` : undefined}
              aria-label="Search country or code"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onSearchKey}
              placeholder="Search country or code"
              className="h-10 w-full rounded-lg bg-surface-field px-3 text-[14px] text-heading outline-none ring-1 ring-line placeholder:text-subtle focus:ring-2 focus:ring-brand"
            />
          </div>
          <ul ref={listRef} id={listId} role="listbox" aria-label="Countries" className="max-h-64 overflow-y-auto py-1">
            {results.length === 0 && <li className="px-3 py-3 text-[13.5px] text-muted">No matching country</li>}
            {results.map((c, i) => (
              <li
                key={c.code}
                id={`${listId}-${c.code}`}
                data-i={i}
                role="option"
                aria-selected={c.code === country}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(c)}
                className={`flex cursor-pointer items-center gap-2.5 px-3 py-2 text-[14px] ${
                  i === active ? "bg-surface-raised" : ""
                } ${c.code === country ? "font-semibold text-heading" : "text-body"}`}
              >
                <span aria-hidden="true" className="text-[18px] leading-none">{c.flag}</span>
                <span className="min-w-0 flex-1 truncate">{c.name}</span>
                <span className="tabular-nums text-subtle">+{c.dial}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

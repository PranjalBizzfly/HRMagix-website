"use client";

import { useMemo, useState } from "react";
import { calculatorBySlug, type Field, type Result } from "@/lib/calculators";
import { Icon } from "./icons";

/**
 * The interactive part of a dedicated calculator page.
 *
 * FLOW. Inputs on the left, an explicit Calculate button, results on the right.
 * Nothing is computed until the button is pressed the first time, so the page
 * answers "what do I enter?" before it answers "what is my result?" — the order
 * a first-time visitor actually needs. After the first calculation the result
 * tracks the inputs live, because by then the reader knows what they are
 * looking at and re-pressing a button is friction.
 *
 * WHY IT LOOKS UP ITS OWN SPEC. A calculator's `compute` is a function, and
 * functions cannot cross the server/client boundary as props. The page passes a
 * slug; this component resolves the spec from the shared module, which is
 * bundled to the client because this file imports it.
 *
 * VALIDATION. Every field is a real text input, so invalid states are possible
 * and are handled explicitly: an error is shown per field, results are
 * suppressed entirely while any field is invalid, and a stale result is never
 * left on screen next to a broken input.
 */

type Values = Record<string, string>;

function validateField(raw: string, f: Field): string | null {
  if (f.toggle || f.options) return null;
  const t = raw.trim();
  if (t === "") return `Enter ${f.label.toLowerCase()}`;
  if (!/^\d+(\.\d+)?$/.test(t)) return `${f.label} must be a number`;
  const n = Number(t);
  if (!Number.isFinite(n)) return `${f.label} must be a number`;
  if (f.integer && !Number.isInteger(n)) return `${f.label} must be a whole number`;
  if (n < f.min) return `${f.label} must be at least ${f.min.toLocaleString("en-IN")}`;
  if (n > f.max) return `${f.label} must be ${f.max.toLocaleString("en-IN")} or less`;
  return null;
}

export default function CalculatorRunner({ slug }: { slug: string }) {
  const calc = calculatorBySlug(slug);

  const [values, setValues] = useState<Values>(() =>
    Object.fromEntries((calc?.fields ?? []).map((f) => [f.name, f.initial])),
  );
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [calculated, setCalculated] = useState(false);

  const errors = useMemo(() => {
    const out: Record<string, string> = {};
    for (const f of calc?.fields ?? []) {
      const e = validateField(values[f.name] ?? "", f);
      if (e) out[f.name] = e;
    }
    return out;
  }, [values, calc]);

  const invalid = Object.keys(errors).length > 0;

  const result: Result | null = useMemo(() => {
    if (!calc || !calculated || invalid) return null;
    const parsed: Record<string, number | string | boolean> = {};
    for (const f of calc.fields) {
      const raw = values[f.name] ?? "";
      if (f.toggle) parsed[f.name] = raw === "1";
      else if (f.options) parsed[f.name] = raw;
      else parsed[f.name] = Number(raw);
    }
    return calc.compute(parsed);
  }, [calc, calculated, invalid, values]);

  if (!calc) return null;

  const set = (name: string) => (v: string) => {
    setValues((prev) => ({ ...prev, [name]: v }));
  };

  const onCalculate = () => {
    setTouched(Object.fromEntries(calc.fields.map((f) => [f.name, true])));
    if (invalid) {
      const first = calc.fields.find((f) => errors[f.name]);
      if (first) document.getElementById(`calc-${first.name}`)?.focus();
      return;
    }
    setCalculated(true);
  };

  const onReset = () => {
    setValues(Object.fromEntries(calc.fields.map((f) => [f.name, f.initial])));
    setTouched({});
    setCalculated(false);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-12">
      {/* ---------------- Inputs ---------------- */}
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          onCalculate();
        }}
        className="min-w-0 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-7"
      >
        <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
          What you enter
        </h2>

        <div className="mt-6 space-y-6">
          {calc.fields.map((f) => (
            <FieldControl
              key={f.name}
              field={f}
              value={values[f.name] ?? ""}
              onChange={set(f.name)}
              onBlur={() => setTouched((t) => ({ ...t, [f.name]: true }))}
              error={touched[f.name] ? (errors[f.name] ?? null) : null}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-[15px] font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-12 items-center justify-center rounded-full bg-surface px-6 text-[15px] font-semibold text-body ring-1 ring-inset ring-line-strong transition-colors hover:ring-line-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Reset
          </button>
        </div>
      </form>

      {/* ---------------- Results ---------------- */}
      <div className="min-w-0">
        <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
          Your result
        </h2>

        {!result ? (
          <div className="mt-6 rounded-2xl border border-dashed border-line-strong bg-surface-sunken p-7 sm:p-9">
            <p className="font-display text-[17.5px] font-bold text-heading">
              {invalid && Object.keys(touched).length > 0
                ? "Fix the highlighted fields to calculate"
                : "Enter your figures, then press Calculate"}
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-[1.7] text-muted">
              {invalid && Object.keys(touched).length > 0
                ? "Nothing is estimated here. While an input is invalid no result is shown, rather than a figure that looks plausible and is not."
                : `Your ${calc.fields.length} input${calc.fields.length === 1 ? "" : "s"} become a full breakdown, with every step of the working shown beneath the headline figures.`}
            </p>
            {Object.keys(touched).length > 0 && invalid && (
              <ul className="mt-5 space-y-2">
                {Object.values(errors).map((e) => (
                  <li key={e} className="flex items-center gap-2 text-[14px] font-medium text-danger">
                    <Icon name="cross" className="h-3.5 w-3.5 shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="mt-6" aria-live="polite">
            {/* Headline figures */}
            <ul className="grid gap-4 sm:grid-cols-3">
              {result.cards.map((c) => (
                <li
                  key={c.label}
                  className={`rounded-2xl p-5 ring-1 ${
                    c.primary ? "bg-surface ring-line-accent" : "bg-surface-sunken ring-line"
                  }`}
                >
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-subtle">
                    {c.label}
                  </p>
                  <p
                    className={`mt-2 font-display font-bold tabular-nums tracking-[-0.03em] text-heading ${
                      c.primary ? "text-[28px] sm:text-[32px]" : "text-[22px] sm:text-[24px]"
                    }`}
                  >
                    {c.value}
                  </p>
                  {c.note && (
                    <p className="mt-2 text-[12.5px] leading-snug text-muted">{c.note}</p>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-start gap-3 rounded-xl bg-surface-sunken p-4 text-[14px] leading-[1.65] text-muted ring-1 ring-line">
              <Icon name="sparkle" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
              {result.summary}
            </p>

            {/* Full working */}
            <div className="mt-9">
              <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-subtle">
                The breakdown
              </h3>
              <div className="mt-5 space-y-8">
                {result.lines.map((group) => (
                  <section key={group.heading}>
                    <h4 className="border-b border-line-accent pb-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                      {group.heading}
                    </h4>
                    <dl>
                      {group.rows.map((row) => (
                        <div
                          key={row.term}
                          className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-3.5 ${
                            row.total ? "border-line-strong" : "border-line"
                          }`}
                        >
                          <dt className="min-w-0">
                            <span
                              className={`block text-[15px] leading-snug ${
                                row.total ? "font-display font-bold text-heading" : "text-body"
                              }`}
                            >
                              {row.term}
                            </span>
                            {row.note && (
                              <span className="mt-1 block max-w-lg text-[12.5px] leading-snug text-subtle">
                                {row.note}
                              </span>
                            )}
                          </dt>
                          <dd
                            className={`shrink-0 font-display tabular-nums ${
                              row.total
                                ? "text-[18px] font-bold text-heading"
                                : row.muted
                                  ? "text-[15px] font-semibold text-subtle"
                                  : "text-[15.5px] font-semibold text-accent-strong"
                            }`}
                          >
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function FieldControl({
  field,
  value,
  onChange,
  onBlur,
  error,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: string | null;
}) {
  const id = `calc-${field.name}`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  if (field.toggle) {
    return (
      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-surface-sunken p-4 ring-1 ring-line">
        <input
          id={id}
          type="checkbox"
          checked={value === "1"}
          onChange={(e) => onChange(e.target.checked ? "1" : "0")}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[rgb(var(--c-brand))]"
        />
        <span>
          <span className="block text-[14px] font-semibold text-heading">{field.label}</span>
          {field.hint && (
            <span className="mt-1 block text-[12.5px] leading-snug text-muted">{field.hint}</span>
          )}
        </span>
      </label>
    );
  }

  if (field.options) {
    return (
      <div>
        <label htmlFor={id} className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
          {field.label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={field.hint ? hintId : undefined}
          className="mt-2.5 w-full appearance-none rounded-xl bg-surface-field px-4 py-3.5 font-display text-[16px] font-semibold text-heading outline-none ring-1 ring-line transition-colors focus:ring-2 focus:ring-brand"
        >
          {field.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {field.hint && (
          <p id={hintId} className="mt-2 text-[12.5px] leading-snug text-subtle">
            {field.hint}
          </p>
        )}
      </div>
    );
  }

  const prefix = field.unit === "inr" ? "₹" : null;
  const suffix =
    field.unit === "percent" ? "%" : field.unit === "years" ? "years" : field.unit === "count" ? null : null;

  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
        {field.label}
      </label>
      <div
        className={`mt-2.5 flex items-center gap-2 rounded-xl bg-surface-field px-4 ring-1 transition-colors focus-within:ring-2 ${
          error ? "ring-danger" : "ring-line focus-within:ring-brand"
        }`}
      >
        {prefix && <span className="text-[16px] font-semibold text-subtle">{prefix}</span>}
        <input
          id={id}
          type="text"
          inputMode={field.integer ? "numeric" : "decimal"}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : field.hint ? hintId : undefined}
          placeholder="0"
          className="w-full bg-transparent py-3.5 font-display text-[19px] font-bold tabular-nums text-heading outline-none placeholder:font-normal placeholder:text-subtle"
        />
        {suffix && <span className="text-[15px] font-semibold text-subtle">{suffix}</span>}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-danger">
          <Icon name="cross" className="h-3.5 w-3.5" />
          {error}
        </p>
      ) : (
        field.hint && (
          <p id={hintId} className="mt-2 text-[12.5px] leading-snug text-subtle">
            {field.hint}
          </p>
        )
      )}
    </div>
  );
}

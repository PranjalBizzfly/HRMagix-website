"use client";

import { useId, useMemo, useState } from "react";
import { Icon } from "./icons";

/**
 * Salary and statutory calculators.
 *
 * WHAT IS AND IS NOT CALCULATED HERE, AND WHY.
 *
 * Everything computed below is a provision of central Indian statute with a
 * fixed rate — the EPF contribution rate and its ₹15,000 wage ceiling, the EPS
 * split within the employer's share, the ESI employee and employer rates and
 * the ₹21,000 gross applicability threshold, and the Payment of Gratuity Act
 * formula of fifteen days' wages per completed year on a 26-day divisor. Those
 * are the same figures cited on the payroll page and in the white papers.
 *
 * Three things are deliberately NOT calculated, and the interface says so
 * rather than showing a zero that could be mistaken for a result:
 *
 *   - Income tax / TDS under Section 192, because liability depends on the
 *     employee's election between the old and new regimes and on declarations
 *     under 80C, 80D, HRA and home-loan interest.
 *   - Professional Tax, a state subject with different slabs and periodicity in
 *     each state — and a different amount in one month of the year in
 *     Maharashtra.
 *   - Labour Welfare Fund, for the same reason.
 *
 * INPUT HANDLING. Every field is a real numeric text input, not a slider, so a
 * user can type an exact figure and so invalid input is possible and must be
 * handled. Values are held as strings while typing (an empty field is a legal
 * intermediate state), validated on every change, and only converted once they
 * parse. Results are suppressed entirely while any field is invalid.
 *
 * ROUNDING. Each statutory head is rounded to the nearest rupee independently,
 * at the point it is computed, and totals are summed from the rounded parts —
 * which is how a payslip is actually produced. Summing unrounded values and
 * rounding the total produces a figure that does not reconcile to its own lines.
 */

const EPF_RATE = 0.12;
const EPS_RATE = 0.0833;
const EPF_CEILING = 15000;
const ESI_EMPLOYEE = 0.0075;
const ESI_EMPLOYER = 0.0325;
const ESI_THRESHOLD = 21000;
const GRATUITY_DIVISOR = 26;
const GRATUITY_DAYS = 15;
const GRATUITY_MIN_YEARS = 5;

const inr = (n: number) =>
  n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

type Tab = "salary" | "gratuity";

export default function StatutoryCalculators() {
  const [tab, setTab] = useState<Tab>("salary");

  return (
    <div>
      <div role="tablist" aria-label="Calculators" className="flex flex-wrap gap-2">
        {(
          [
            ["salary", "Monthly salary & statutory"],
            ["gratuity", "Gratuity"],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            role="tab"
            type="button"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setTab(id)}
            className={`rounded-full px-5 py-3 text-[13.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              tab === id
                ? "bg-brand text-white shadow-glow"
                : "bg-surface text-body ring-1 ring-inset ring-line hover:ring-line-accent"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-7">{tab === "salary" ? <SalaryBreakup /> : <Gratuity />}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

type Check = { min: number; max: number; label: string; integer?: boolean };

/** Returns an error message, or null when the raw string is a valid value. */
function validate(raw: string, { min, max, label, integer }: Check): string | null {
  const trimmed = raw.trim();
  if (trimmed === "") return `Enter ${label}`;
  if (!/^\d+(\.\d+)?$/.test(trimmed)) return `${label} must be a number`;
  const n = Number(trimmed);
  if (!Number.isFinite(n)) return `${label} must be a number`;
  if (integer && !Number.isInteger(n)) return `${label} must be a whole number`;
  if (n < min) return `${label} must be at least ${min.toLocaleString("en-IN")}`;
  if (n > max) return `${label} must be ${max.toLocaleString("en-IN")} or less`;
  return null;
}

/* ------------------------------------------------------------------ */
/* Monthly salary and statutory breakup                                */
/* ------------------------------------------------------------------ */

function SalaryBreakup() {
  const uid = useId();
  const [grossRaw, setGrossRaw] = useState("35000");
  const [basicPctRaw, setBasicPctRaw] = useState("50");
  const [applyCeiling, setApplyCeiling] = useState(true);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const grossCheck: Check = { min: 1, max: 10_000_000, label: "monthly gross salary" };
  const basicCheck: Check = { min: 1, max: 100, label: "basic percentage" };

  const grossError = validate(grossRaw, grossCheck);
  const basicError = validate(basicPctRaw, basicCheck);
  const hasError = Boolean(grossError || basicError);

  const result = useMemo(() => {
    if (hasError) return null;
    const gross = Number(grossRaw);
    const basicPct = Number(basicPctRaw);

    // Each head is rounded where it is computed, and totals sum the rounded parts.
    const basic = Math.round((gross * basicPct) / 100);
    const pfBase = applyCeiling ? Math.min(basic, EPF_CEILING) : basic;

    const employeePf = Math.round(pfBase * EPF_RATE);
    const employerTotal = Math.round(pfBase * EPF_RATE);
    const eps = Math.round(Math.min(pfBase, EPF_CEILING) * EPS_RATE);
    const employerPf = employerTotal - eps;

    const esiApplies = gross <= ESI_THRESHOLD;
    const employeeEsi = esiApplies ? Math.round(gross * ESI_EMPLOYEE) : 0;
    const employerEsi = esiApplies ? Math.round(gross * ESI_EMPLOYER) : 0;

    const deductions = employeePf + employeeEsi;

    return {
      gross,
      basicPct,
      basic,
      pfBase,
      ceilingBit: applyCeiling && basic > EPF_CEILING,
      employeePf,
      employerPf,
      eps,
      employerTotal,
      esiApplies,
      employeeEsi,
      employerEsi,
      deductions,
      netBeforeTax: gross - deductions,
      employerCost: gross + employerTotal + employerEsi,
    };
  }, [grossRaw, basicPctRaw, applyCeiling, hasError]);

  return (
    <div
      role="tabpanel"
      id="panel-salary"
      aria-labelledby="tab-salary"
      className="grid gap-8 lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:gap-12"
    >
      {/* ---- Inputs ---- */}
      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-7"
      >
        <Field
          id={`${uid}-gross`}
          label="Monthly gross salary"
          prefix="₹"
          value={grossRaw}
          onChange={setGrossRaw}
          onBlur={() => setTouched((t) => ({ ...t, gross: true }))}
          error={touched.gross ? grossError : null}
          hint="Everything earned in the month before any deduction."
          inputMode="numeric"
        />

        <Field
          id={`${uid}-basic`}
          label="Basic as a share of gross"
          suffix="%"
          value={basicPctRaw}
          onChange={setBasicPctRaw}
          onBlur={() => setTouched((t) => ({ ...t, basic: true }))}
          error={touched.basic ? basicError : null}
          hint="Most Indian salary structures set basic between 40% and 50%."
          inputMode="decimal"
        />

        <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-surface-sunken p-4 ring-1 ring-line">
          <input
            type="checkbox"
            checked={applyCeiling}
            onChange={(e) => setApplyCeiling(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[rgb(var(--c-brand))]"
          />
          <span>
            <span className="block text-[14px] font-semibold text-heading">
              Apply the ₹15,000 EPF wage ceiling
            </span>
            <span className="mt-1 block text-[13px] leading-snug text-muted">
              Employers may restrict provident fund contributions to the statutory ceiling, or
              contribute on full basic. Both are configurable in HRMagix.
            </span>
          </span>
        </label>

        {result && (
          <p className="text-[13px] leading-snug text-subtle">
            Calculating on a gross of {inr(result.gross)} with basic at {result.basicPct}% (
            {inr(result.basic)}).
          </p>
        )}
      </form>

      {/* ---- Output ---- */}
      <div>
        {!result ? (
          <EmptyState
            title="Enter a valid salary to see the breakup"
            body="Both fields need a number before anything can be calculated. Nothing is estimated here, if a figure cannot be computed, it is not shown."
            errors={[grossError, basicError].filter((e): e is string => Boolean(e))}
          />
        ) : (
          <>
            <h3 className="border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
              Employee side
            </h3>
            <dl>
              <Row
                term="Basic (and DA)"
                value={inr(result.basic)}
                note={`${result.basicPct}% of gross`}
              />
              <Row
                term="Employee PF contribution"
                value={`− ${inr(result.employeePf)}`}
                note={`12% of ${inr(result.pfBase)}${result.ceilingBit ? ", ceiling applied" : ""}`}
              />
              <Row
                term="Employee ESI contribution"
                value={result.esiApplies ? `− ${inr(result.employeeEsi)}` : "Not applicable"}
                note={
                  result.esiApplies
                    ? "0.75% of gross"
                    : `Gross exceeds the ₹${ESI_THRESHOLD.toLocaleString("en-IN")} threshold`
                }
                muted={!result.esiApplies}
              />
              <Row
                term="Total employee deductions"
                value={`− ${inr(result.deductions)}`}
                note="PF plus ESI, before income tax"
              />
              <Row
                term="Take-home before income tax"
                value={inr(result.netBeforeTax)}
                note="Excludes TDS, Professional Tax and LWF, see the note below"
                emphasis
              />
            </dl>

            <h3 className="mt-10 border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
              Employer side
            </h3>
            <dl>
              <Row
                term="Employer PF (EPF share)"
                value={inr(result.employerPf)}
                note="12% of the PF base, less the pension share below"
              />
              <Row
                term="Employer pension (EPS)"
                value={inr(result.eps)}
                note="8.33% of the PF base, capped at the ₹15,000 ceiling"
              />
              <Row
                term="Employer ESI contribution"
                value={result.esiApplies ? inr(result.employerEsi) : "Not applicable"}
                note={result.esiApplies ? "3.25% of gross" : "Employee is outside the ESI threshold"}
                muted={!result.esiApplies}
              />
              <Row
                term="Total monthly cost to employer"
                value={inr(result.employerCost)}
                note="Gross plus employer statutory contributions"
                emphasis
              />
            </dl>
          </>
        )}

        <Caveat />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Gratuity                                                            */
/* ------------------------------------------------------------------ */

function Gratuity() {
  const uid = useId();
  const [basicRaw, setBasicRaw] = useState("30000");
  const [yearsRaw, setYearsRaw] = useState("7");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const basicCheck: Check = { min: 1, max: 10_000_000, label: "last drawn basic" };
  const yearsCheck: Check = { min: 0, max: 60, label: "completed years of service", integer: true };

  const basicError = validate(basicRaw, basicCheck);
  const yearsError = validate(yearsRaw, yearsCheck);
  const hasError = Boolean(basicError || yearsError);

  const result = useMemo(() => {
    if (hasError) return null;
    const basic = Number(basicRaw);
    const years = Number(yearsRaw);
    const eligible = years >= GRATUITY_MIN_YEARS;
    return {
      basic,
      years,
      eligible,
      amount: eligible ? Math.round((GRATUITY_DAYS / GRATUITY_DIVISOR) * basic * years) : 0,
      shortfall: GRATUITY_MIN_YEARS - years,
    };
  }, [basicRaw, yearsRaw, hasError]);

  return (
    <div
      role="tabpanel"
      id="panel-gratuity"
      aria-labelledby="tab-gratuity"
      className="grid gap-8 lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:gap-12"
    >
      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-7"
      >
        <Field
          id={`${uid}-basic`}
          label="Last drawn monthly basic (and DA)"
          prefix="₹"
          value={basicRaw}
          onChange={setBasicRaw}
          onBlur={() => setTouched((t) => ({ ...t, basic: true }))}
          error={touched.basic ? basicError : null}
          hint="Basic salary plus dearness allowance, as at the last working day."
          inputMode="numeric"
        />
        <Field
          id={`${uid}-years`}
          label="Completed years of continuous service"
          value={yearsRaw}
          onChange={setYearsRaw}
          onBlur={() => setTouched((t) => ({ ...t, years: true }))}
          error={touched.years ? yearsError : null}
          hint="Whole completed years. The Act requires five before gratuity becomes payable."
          inputMode="numeric"
        />
      </form>

      <div>
        {!result ? (
          <EmptyState
            title="Enter a salary and a length of service"
            body="Both fields need a number before the statutory formula can be applied."
            errors={[basicError, yearsError].filter((e): e is string => Boolean(e))}
          />
        ) : (
          <div
            className={`rounded-2xl p-7 ring-1 sm:p-9 ${
              result.eligible ? "bg-surface ring-line-accent" : "bg-surface-sunken ring-line"
            }`}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-subtle">
              {result.eligible ? "Gratuity payable" : "Not yet eligible"}
            </p>
            <p
              className={`mt-3 font-display font-bold tabular-nums tracking-[-0.03em] ${
                result.eligible
                  ? "text-[40px] text-heading sm:text-[52px]"
                  : "text-[24px] leading-snug text-muted sm:text-[28px]"
              }`}
            >
              {result.eligible
                ? inr(result.amount)
                : `${result.shortfall} more ${result.shortfall === 1 ? "year" : "years"} of service required`}
            </p>

            {result.eligible ? (
              <>
                <p className="mt-5 max-w-lg text-[14.5px] leading-[1.7] text-muted">
                  Fifteen days&rsquo; wages for every completed year of service. The twenty-six day
                  divisor reflects working days in a month under the Act.
                </p>
                <p className="mt-4 rounded-lg bg-surface-sunken px-4 py-3 font-mono text-[13.5px] text-accent-strong">
                  ({GRATUITY_DAYS} ÷ {GRATUITY_DIVISOR}) × {inr(result.basic)} × {result.years} ={" "}
                  {inr(result.amount)}
                </p>
              </>
            ) : (
              <p className="mt-5 max-w-lg text-[14.5px] leading-[1.7] text-muted">
                Under the Payment of Gratuity Act, gratuity becomes payable on completing five years
                of continuous service. HRMagix provisions for the liability before that point, so it
                is visible on the books rather than arriving as a surprise.
              </p>
            )}
          </div>
        )}

        <Caveat gratuity />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared UI                                                           */
/* ------------------------------------------------------------------ */

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  hint,
  prefix,
  suffix,
  inputMode = "numeric",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: string | null;
  hint?: string;
  prefix?: string;
  suffix?: string;
  inputMode?: "numeric" | "decimal";
}) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
        {label}
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
          inputMode={inputMode}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className="w-full bg-transparent py-3.5 font-display text-[19px] font-bold tabular-nums text-heading outline-none placeholder:font-normal placeholder:text-subtle"
          placeholder="0"
        />
        {suffix && <span className="text-[16px] font-semibold text-subtle">{suffix}</span>}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-danger">
          <Icon name="cross" className="h-3.5 w-3.5" />
          {error}
        </p>
      ) : (
        hint && (
          <p id={hintId} className="mt-2 text-[12.5px] leading-snug text-subtle">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

function EmptyState({
  title,
  body,
  errors,
}: {
  title: string;
  body: string;
  errors: string[];
}) {
  return (
    <div className="rounded-2xl border border-dashed border-line-strong bg-surface-sunken p-7 sm:p-9">
      <p className="font-display text-[17px] font-bold text-heading">{title}</p>
      <p className="mt-3 max-w-lg text-[15px] leading-[1.7] text-muted">{body}</p>
      {errors.length > 0 && (
        <ul className="mt-5 space-y-2">
          {errors.map((e) => (
            <li key={e} className="flex items-center gap-2 text-[14px] font-medium text-danger">
              <Icon name="cross" className="h-3.5 w-3.5 shrink-0" />
              {e}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Row({
  term,
  value,
  note,
  emphasis = false,
  muted = false,
}: {
  term: string;
  value: string;
  note?: string;
  emphasis?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-4 ${
        emphasis ? "border-line-strong" : "border-line"
      }`}
    >
      <dt className="min-w-0">
        <span
          className={`block text-[15px] leading-snug ${
            emphasis ? "font-display font-bold text-heading" : "text-body"
          }`}
        >
          {term}
        </span>
        {note && <span className="mt-1 block text-[12.5px] leading-snug text-subtle">{note}</span>}
      </dt>
      <dd
        className={`shrink-0 font-display tabular-nums ${
          emphasis
            ? "text-[20px] font-bold text-heading"
            : muted
              ? "text-[15px] font-semibold text-subtle"
              : "text-[16px] font-semibold text-accent-strong"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function Caveat({ gratuity = false }: { gratuity?: boolean }) {
  return (
    <div className="mt-8 rounded-xl bg-surface-sunken p-5 ring-1 ring-line">
      <p className="flex items-start gap-3 text-[13.5px] leading-[1.65] text-muted">
        <Icon name="scale" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
        <span>
          {gratuity ? (
            <>
              This applies the Payment of Gratuity Act formula to the figures you entered. Whether an
              establishment is covered by the Act, and how continuous service is computed in a
              specific case, are questions for your own advisers.
            </>
          ) : (
            <>
              <strong className="font-semibold text-heading">
                Income tax, Professional Tax and Labour Welfare Fund are not included above.
              </strong>{" "}
              TDS under Section 192 depends on the employee&rsquo;s election between the old and new
              regimes and on their declarations, so a figure here would mislead. Professional Tax and
              LWF are state subjects with different slabs and periodicity, in Maharashtra, for
              instance, PT carries a different amount in one month of the year. All three are
              calculated inside a real HRMagix payroll run against your actual locations and
              declarations.
            </>
          )}
        </span>
      </p>
    </div>
  );
}

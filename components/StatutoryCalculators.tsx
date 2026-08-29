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
 * formula of fifteen days' wages per completed year on a 26-day divisor.
 * Those are the same numbers cited on the payroll page.
 *
 * Three things are deliberately NOT calculated:
 *
 *   - Income tax / TDS under Section 192, because the liability depends on the
 *     employee's election between the old and new regimes and on declarations
 *     under 80C, 80D, HRA and home-loan interest. A number produced without
 *     those would be misleading, and inventing slab logic here would be worse.
 *   - Professional Tax, because it is a state subject with different slabs and
 *     periodicity in each state. The Maharashtra schedule is shown as a
 *     reference note rather than folded into the arithmetic.
 *   - Labour Welfare Fund, for the same reason.
 *
 * Where a figure is not calculated, the interface says so rather than showing
 * a zero that could be mistaken for a result.
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
            className={`rounded-full px-4 py-2.5 text-[13.5px] font-semibold transition-colors ${
              tab === id
                ? "bg-brand text-white shadow-glow"
                : "bg-surface text-body ring-1 ring-inset ring-line hover:ring-line-accent"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-7">
        {tab === "salary" ? <SalaryBreakup /> : <Gratuity />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function SalaryBreakup() {
  const uid = useId();
  const [gross, setGross] = useState(35000);
  const [basicPct, setBasicPct] = useState(50);
  const [applyCeiling, setApplyCeiling] = useState(true);

  const r = useMemo(() => {
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
    const employerCost = gross + employerTotal + employerEsi;

    return {
      basic,
      pfBase,
      employeePf,
      employerPf,
      eps,
      employerTotal,
      esiApplies,
      employeeEsi,
      employerEsi,
      deductions,
      netBeforeTax: gross - deductions,
      employerCost,
    };
  }, [gross, basicPct, applyCeiling]);

  return (
    <div
      role="tabpanel"
      id="panel-salary"
      aria-labelledby="tab-salary"
      className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12"
    >
      {/* ---- Inputs ---- */}
      <div className="space-y-7 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-7">
        <Field
          id={`${uid}-gross`}
          label="Monthly gross salary"
          value={gross}
          display={inr(gross)}
          min={8000}
          max={200000}
          step={1000}
          onChange={setGross}
        />

        <Field
          id={`${uid}-basic`}
          label="Basic as a share of gross"
          value={basicPct}
          display={`${basicPct}%`}
          min={30}
          max={70}
          step={1}
          onChange={setBasicPct}
          hint="Most Indian salary structures set basic between 40% and 50% of gross."
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
      </div>

      {/* ---- Output ---- */}
      <div>
        <dl className="border-t border-line-strong">
          <Row term="Basic (and DA)" value={inr(r.basic)} note={`${basicPct}% of gross`} />
          <Row
            term="Employee PF contribution"
            value={`− ${inr(r.employeePf)}`}
            note={`12% of ${inr(r.pfBase)}${applyCeiling && r.basic > EPF_CEILING ? " (ceiling applied)" : ""}`}
          />
          <Row
            term="Employee ESI contribution"
            value={r.esiApplies ? `− ${inr(r.employeeEsi)}` : "Not applicable"}
            note={
              r.esiApplies
                ? "0.75% of gross"
                : `Gross exceeds the ₹${ESI_THRESHOLD.toLocaleString("en-IN")} threshold`
            }
            muted={!r.esiApplies}
          />
          <Row
            term="Take-home before income tax"
            value={inr(r.netBeforeTax)}
            note="Excludes TDS, Professional Tax and LWF — see the note below"
            emphasis
          />
        </dl>

        <h3 className="mt-10 border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
          Employer side
        </h3>
        <dl>
          <Row
            term="Employer PF (EPF share)"
            value={inr(r.employerPf)}
            note="12% of the PF base, less the pension share below"
          />
          <Row
            term="Employer pension (EPS)"
            value={inr(r.eps)}
            note="8.33% of the PF base, capped at the ₹15,000 ceiling"
          />
          <Row
            term="Employer ESI contribution"
            value={r.esiApplies ? inr(r.employerEsi) : "Not applicable"}
            note={r.esiApplies ? "3.25% of gross" : "Employee is outside the ESI threshold"}
            muted={!r.esiApplies}
          />
          <Row
            term="Total monthly cost to employer"
            value={inr(r.employerCost)}
            note="Gross plus employer statutory contributions"
            emphasis
          />
        </dl>

        <Caveat />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Gratuity() {
  const uid = useId();
  const [basic, setBasic] = useState(30000);
  const [years, setYears] = useState(7);

  const eligible = years >= GRATUITY_MIN_YEARS;
  const amount = eligible
    ? Math.round((GRATUITY_DAYS / GRATUITY_DIVISOR) * basic * years)
    : 0;

  return (
    <div
      role="tabpanel"
      id="panel-gratuity"
      aria-labelledby="tab-gratuity"
      className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12"
    >
      <div className="space-y-7 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-7">
        <Field
          id={`${uid}-basic`}
          label="Last drawn monthly basic (and DA)"
          value={basic}
          display={inr(basic)}
          min={8000}
          max={200000}
          step={1000}
          onChange={setBasic}
        />
        <Field
          id={`${uid}-years`}
          label="Completed years of continuous service"
          value={years}
          display={`${years} ${years === 1 ? "year" : "years"}`}
          min={1}
          max={40}
          step={1}
          onChange={setYears}
          hint="The Act requires five years of continuous service before gratuity becomes payable."
        />
      </div>

      <div>
        <div
          className={`rounded-2xl p-7 ring-1 sm:p-9 ${
            eligible
              ? "bg-surface ring-line-accent"
              : "bg-surface-sunken ring-line"
          }`}
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-subtle">
            {eligible ? "Gratuity payable" : "Not yet eligible"}
          </p>
          <p
            className={`mt-3 font-display font-bold tabular-nums tracking-[-0.03em] ${
              eligible ? "text-[40px] text-heading sm:text-[52px]" : "text-[26px] text-muted"
            }`}
          >
            {eligible
              ? inr(amount)
              : `${GRATUITY_MIN_YEARS - years} more ${
                  GRATUITY_MIN_YEARS - years === 1 ? "year" : "years"
                } of service required`}
          </p>
          <p className="mt-5 max-w-lg text-[14.5px] leading-[1.7] text-muted">
            {eligible ? (
              <>
                Calculated as fifteen days&rsquo; wages for every completed year of service:{" "}
                <span className="font-semibold text-heading">
                  ({GRATUITY_DAYS} ÷ {GRATUITY_DIVISOR}) × {inr(basic)} × {years}
                </span>
                . The twenty-six day divisor reflects working days in a month under the Payment of
                Gratuity Act.
              </>
            ) : (
              <>
                Under the Payment of Gratuity Act, gratuity becomes payable on completing five years
                of continuous service. HRMagix provisions for the liability before that point, so it
                is visible on the books rather than arriving as a surprise.
              </>
            )}
          </p>
        </div>

        <Caveat gratuity />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Field({
  id,
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
          {label}
        </label>
        <output htmlFor={id} className="font-display text-[19px] font-bold tabular-nums text-heading">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-strong accent-[rgb(var(--c-brand))]"
      />
      {hint && <p className="mt-2.5 text-[12.5px] leading-snug text-subtle">{hint}</p>}
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
              LWF are state subjects with different slabs and periodicity — in Maharashtra, for
              instance, PT carries a different amount in February. All three are calculated inside a
              real HRMagix payroll run against your actual locations and declarations.
            </>
          )}
        </span>
      </p>
    </div>
  );
}

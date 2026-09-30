/**
 * Indian statutory payroll rules — the single source every calculator uses.
 *
 * When a rate, ceiling or threshold changes, change it here and every
 * calculator (and the hub's quick calculators) follows. Each value names the
 * provision it comes from.
 *
 *   EPF   Employees' Provident Funds & MP Act 1952 and schemes:
 *         12% employee + 12% employer on PF wages (basic + DA), statutory wage
 *         ceiling ₹15,000/month. Of the employer's 12%, 8.33% goes to EPS on
 *         wages up to ₹15,000 (max ₹1,250); the rest to EPF. Employer also pays
 *         EDLI 0.5% on wages up to ₹15,000 (max ₹75) and EPF admin charges 0.5%
 *         of PF wages. Contributions rounded to the nearest rupee.
 *   ESI   ESI Act 1948: coverage for employees whose wages are up to ₹21,000/month
 *         (overtime is excluded when testing coverage, but contributions are
 *         payable on all wages including overtime); employee 0.75%, employer
 *         3.25%; each contribution rounded UP to the next higher rupee.
 *   Gratuity  Payment of Gratuity Act 1972 s.4: 15 days' wages (basic + DA,
 *         last drawn, ÷ 26) per completed year of service, a final part-year
 *         of more than six months counting as a full year; payable after five
 *         years' continuous service; maximum ₹20,00,000.
 *   Overtime  Factories Act 1948 s.59: twice the ordinary rate of wages.
 */

export const RULES = {
  epf: {
    employeeRate: 0.12,
    employerRate: 0.12,
    epsRate: 0.0833,
    wageCeiling: 15000,
    edliRate: 0.005,
    adminRate: 0.005,
  },
  esi: {
    employeeRate: 0.0075,
    employerRate: 0.0325,
    wageThreshold: 21000,
  },
  gratuity: {
    days: 15,
    divisor: 26,
    minYears: 5,
    /** A final part-year beyond this many months counts as a full year. */
    partYearMonths: 6,
    maxAmount: 2_000_000,
  },
  overtime: { multiplier: 2 },
} as const;

/** Safe number: anything non-finite or negative becomes 0, so no NaN reaches the page. */
export const safe = (n: unknown) => {
  const x = typeof n === "number" ? n : Number(n);
  return Number.isFinite(x) && x > 0 ? x : 0;
};

/** Indian-grouped rupees, no paise: ₹1,23,456. */
export const inr = (n: number) =>
  safe(Math.abs(n)).toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

const roundUp = (n: number) => Math.ceil(n - 1e-9);

/* ---------------- EPF ---------------- */

export type PfResult = {
  /** Wage the 12% is applied to (capped if the ceiling is applied). */
  pfWage: number;
  /** Wage the pension and EDLI shares are applied to (always capped). */
  cappedWage: number;
  employee: number;
  vpf: number;
  employerTotal: number;
  eps: number;
  employerEpf: number;
  edli: number;
  admin: number;
  /** Employer's full statutory PF cost: 12% + EDLI + admin charges. */
  employerCost: number;
};

export function computePf(basic: number, applyCeiling = true, vpfPct = 0): PfResult {
  const r = RULES.epf;
  const b = safe(basic);
  const pfWage = applyCeiling ? Math.min(b, r.wageCeiling) : b;
  const cappedWage = Math.min(b, r.wageCeiling);
  const employee = Math.round(pfWage * r.employeeRate);
  const vpf = Math.round(pfWage * (safe(vpfPct) / 100));
  const employerTotal = Math.round(pfWage * r.employerRate);
  const eps = Math.min(Math.round(cappedWage * r.epsRate), employerTotal);
  const employerEpf = employerTotal - eps;
  const edli = Math.round(cappedWage * r.edliRate);
  const admin = Math.round(pfWage * r.adminRate);
  return {
    pfWage,
    cappedWage,
    employee,
    vpf,
    employerTotal,
    eps,
    employerEpf,
    edli,
    admin,
    employerCost: employerTotal + edli + admin,
  };
}

/* ---------------- ESI ---------------- */

export type EsiResult = { applies: boolean; coverageWage: number; employee: number; employer: number };

/**
 * @param gross      all wages for the month, including overtime
 * @param overtime   the overtime part of gross (excluded from the coverage test)
 */
export function computeEsi(gross: number, overtime = 0): EsiResult {
  const r = RULES.esi;
  const g = safe(gross);
  const coverageWage = Math.max(0, g - Math.min(safe(overtime), g));
  const applies = g > 0 && coverageWage <= r.wageThreshold;
  return {
    applies,
    coverageWage,
    employee: applies ? roundUp(g * r.employeeRate) : 0,
    employer: applies ? roundUp(g * r.employerRate) : 0,
  };
}

/* ---------------- Gratuity ---------------- */

export type GratuityResult = {
  eligible: boolean;
  /** Years counted in the formula (completed years, plus one for > 6 months). */
  countedYears: number;
  perYear: number;
  uncapped: number;
  amount: number;
  capped: boolean;
};

export function computeGratuity(lastBasic: number, years: number, months = 0): GratuityResult {
  const r = RULES.gratuity;
  const b = safe(lastBasic);
  const y = Math.floor(safe(years));
  const m = Math.min(11, Math.floor(safe(months)));
  const eligible = y >= r.minYears;
  const countedYears = y + (m > r.partYearMonths ? 1 : 0);
  const perYear = (r.days / r.divisor) * b;
  const uncapped = eligible ? Math.round(perYear * countedYears) : 0;
  const amount = Math.min(uncapped, r.maxAmount);
  return { eligible, countedYears, perYear: Math.round(perYear), uncapped, amount, capped: uncapped > r.maxAmount };
}

/** Monthly gratuity provision used in CTC: 15/26 of basic a year, spread over 12 months (≈ 4.81% of basic). */
export const gratuityProvision = (basic: number) =>
  Math.round((safe(basic) * RULES.gratuity.days) / RULES.gratuity.divisor / 12);

/* ---------------- Overtime ---------------- */

export function computeOvertime(monthlyWage: number, days: number, hoursPerDay: number, otHours: number) {
  const d = safe(days);
  const h = safe(hoursPerDay);
  const daily = d ? safe(monthlyWage) / d : 0;
  const hourly = h ? daily / h : 0;
  const otRate = hourly * RULES.overtime.multiplier;
  return { daily, hourly, otRate, pay: Math.round(otRate * safe(otHours)) };
}

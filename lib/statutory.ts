/**
 * Indian statutory payroll rules — the single source every calculator uses.
 *
 * When a rate, ceiling or threshold changes, change it here and every
 * calculator (and the hub's quick calculators) follows. Each value names the
 * provision it comes from. Audited 2026-10-01.
 *
 *   EPF   Employees' Provident Funds & MP Act 1952 and schemes (continued under
 *         the Code on Social Security 2020): 12% employee + 12% employer on PF
 *         wages (basic + DA), statutory wage ceiling ₹15,000/month. Of the
 *         employer's 12%, 8.33% goes to EPS on wages up to ₹15,000 (max ₹1,250);
 *         the rest to EPF. Employer also pays EDLI 0.5% on wages up to ₹15,000
 *         (max ₹75) and EPF admin charges 0.5% of PF wages (minimum ₹500 per
 *         establishment per month). Contributions rounded to the nearest rupee.
 *   ESI   ESI Act 1948 / ESI (Central) Rules: coverage for employees whose wages
 *         are up to ₹21,000/month (overtime excluded when testing coverage, but
 *         contributions are payable on all wages including overtime); employee
 *         0.75%, employer 3.25% (w.e.f. 1 Jul 2019); each rounded UP to the next
 *         rupee. Employee share waived where average daily wage ≤ ₹176
 *         (w.e.f. 1 Sep 2019); the employer share is still payable.
 *   Gratuity  Payment of Gratuity Act 1972 s.4, now Chapter V of the Code on
 *         Social Security 2020 (in force 21 Nov 2025, PIB PRID 2192524):
 *         15 days' wages (last drawn ÷ 26) per completed year, a final part-year
 *         of more than six months counting as a full year; payable after five
 *         years' continuous service (one year for fixed-term employees, pro
 *         rata); maximum ₹20,00,000 (unchanged). "Wages" = basic + DA, plus any
 *         excluded allowances above 50% of total remuneration (Code on Wages
 *         2019 s.2(y)).
 *   Overtime  Factories Act 1948 s.59, carried into the OSH Code 2020 / Code on
 *         Wages 2019 s.14: not less than twice the ordinary rate of wages.
 */

export const RULES = {
  epf: {
    /** EPF Scheme 1952 para 29 — 12% employee and employer. */
    employeeRate: 0.12,
    employerRate: 0.12,
    /** EPS 1995 para 3 — 8.33% of pay up to the ceiling. */
    epsRate: 0.0833,
    /** EPF/EPS wage ceiling ₹15,000 w.e.f. 1 Sep 2014. */
    wageCeiling: 15000,
    /** EDLI Scheme 1976 — 0.5% of wages up to ₹15,000 (max ₹75); EDLI admin charge nil since 1 Apr 2017. */
    edliRate: 0.005,
    /** EPF admin charges 0.5% w.e.f. 1 Jun 2018 (MoL&E notification). */
    adminRate: 0.005,
    /** Minimum admin charge per establishment per month — establishment-level, not per employee (2018). */
    adminMinPerEstablishment: 500,
  },
  esi: {
    /** Rates w.e.f. 1 Jul 2019 (esic.gov.in/contribution). */
    employeeRate: 0.0075,
    employerRate: 0.0325,
    /** Coverage wage ceiling ₹21,000/month w.e.f. 1 Jan 2017 (₹25,000 for persons with disability). */
    wageThreshold: 21000,
    /** Employee share waived where average daily wage ≤ ₹176 (w.e.f. 1 Sep 2019, esic.gov.in/contribution). */
    exemptDailyWage: 176,
  },
  gratuity: {
    days: 15,
    divisor: 26,
    /** Continuous service required (Gratuity Act s.4 / CoSS 2020 s.53). */
    minYears: 5,
    /** Fixed-term employees: one year, pro rata (CoSS 2020 s.53, in force 21 Nov 2025). */
    fixedTermMinYears: 1,
    /** A final part-year beyond this many months counts as a full year. */
    partYearMonths: 6,
    /** ₹20 lakh ceiling (notified 29 Mar 2018; unchanged under the Code as of 2026). */
    maxAmount: 2_000_000,
    /** Code on Wages 2019 s.2(y): allowances above 50% of remuneration count as wages. */
    wageFloorShare: 0.5,
  },
  /** Factories Act s.59 / Code on Wages s.14: twice the ordinary rate. */
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
  const vpf = Math.round(pfWage * (Math.min(safe(vpfPct), 100) / 100));
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

/** Establishment-level EPF admin charge: 0.5% of total PF wages, minimum ₹500 a month. */
export const establishmentPfAdmin = (totalAdmin: number) =>
  safe(totalAdmin) > 0 ? Math.max(RULES.epf.adminMinPerEstablishment, Math.round(safe(totalAdmin))) : 0;

/* ---------------- ESI ---------------- */

export type EsiResult = {
  applies: boolean;
  coverageWage: number;
  /** Average daily wage: gross ÷ days in the wage period. */
  dailyWage: number;
  /** Employee share waived (average daily wage ≤ ₹176); employer still pays. */
  employeeExempt: boolean;
  employee: number;
  employer: number;
};

/**
 * @param gross      all wages for the month, including overtime
 * @param overtime   the overtime part of gross (excluded from the coverage test)
 * @param wageDays   days in the wage period, for the ₹176 daily-wage test (monthly-rated: 30)
 */
export function computeEsi(gross: number, overtime = 0, wageDays = 30): EsiResult {
  const r = RULES.esi;
  const g = safe(gross);
  const coverageWage = Math.max(0, g - Math.min(safe(overtime), g));
  const applies = g > 0 && coverageWage <= r.wageThreshold;
  const days = safe(wageDays) || 30;
  const dailyWage = g / days;
  const employeeExempt = applies && dailyWage <= r.exemptDailyWage;
  return {
    applies,
    coverageWage,
    dailyWage,
    employeeExempt,
    employee: applies && !employeeExempt ? roundUp(g * r.employeeRate) : 0,
    employer: applies ? roundUp(g * r.employerRate) : 0,
  };
}

/* ---------------- Gratuity ---------------- */

export type GratuityResult = {
  eligible: boolean;
  /** Wage used: basic + DA, raised to the 50% floor where gross is given. */
  wage: number;
  /** Qualifying service applied: 5 years, or 1 for a fixed-term employee. */
  minYears: number;
  /** Years counted in the formula (completed years, plus one for > 6 months). */
  countedYears: number;
  perYear: number;
  uncapped: number;
  amount: number;
  capped: boolean;
};

/**
 * Wages for gratuity under the Labour Codes: basic + DA, raised to 50% of total
 * monthly remuneration when excluded allowances exceed half of it. gross 0 = not given.
 */
export const gratuityWage = (basic: number, gross = 0) => {
  const b = safe(basic);
  const g = safe(gross);
  return g > b ? Math.max(b, Math.round(g * RULES.gratuity.wageFloorShare)) : b;
};

/** Same Labour Codes wage rule, used as the PF base (CoSS 2020 s.2(88)) where gross is known. */
export const codeWages = gratuityWage;

export function computeGratuity(
  lastBasic: number,
  years: number,
  months = 0,
  opts: { gross?: number; fixedTerm?: boolean } = {},
): GratuityResult {
  const r = RULES.gratuity;
  const b = gratuityWage(lastBasic, opts.gross);
  const y = Math.floor(safe(years));
  const m = Math.min(11, Math.floor(safe(months)));
  const minYears = opts.fixedTerm ? r.fixedTermMinYears : r.minYears;
  const eligible = b > 0 && y >= minYears;
  const countedYears = y + (m > r.partYearMonths ? 1 : 0);
  const perYear = (r.days / r.divisor) * b;
  const uncapped = eligible ? Math.round(perYear * countedYears) : 0;
  const amount = Math.min(uncapped, r.maxAmount);
  return { eligible, wage: b, minYears, countedYears, perYear: Math.round(perYear), uncapped, amount, capped: uncapped > r.maxAmount };
}

/** Monthly gratuity provision used in CTC: 15/26 of gratuity wage a year, over 12 months (≈ 4.81%). */
export const gratuityProvision = (basic: number, gross = 0) =>
  Math.round((gratuityWage(basic, gross) * RULES.gratuity.days) / RULES.gratuity.divisor / 12);

/* ---------------- Overtime ---------------- */

export function computeOvertime(monthlyWage: number, days: number, hoursPerDay: number, otHours: number) {
  const d = safe(days);
  const h = safe(hoursPerDay);
  const daily = d ? safe(monthlyWage) / d : 0;
  const hourly = h ? daily / h : 0;
  const otRate = hourly * RULES.overtime.multiplier;
  return { daily, hourly, otRate, pay: Math.round(otRate * safe(otHours)) };
}

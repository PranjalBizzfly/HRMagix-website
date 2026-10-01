/**
 * The calculator suite.
 *
 * WHAT MAY BE CALCULATED HERE.
 *
 * Every figure produced by a calculator in this file comes from a provision of
 * central Indian statute with a fixed rate, or from a price HRMagix publishes.
 * Nothing is modelled, estimated or projected.
 *
 *   EPF      12% employee, 12% employer, ₹15,000 statutory wage ceiling
 *   EPS      8.33% within the employer share, capped at the ceiling
 *   ESI      0.75% employee, 3.25% employer, ₹21,000 gross threshold
 *   Gratuity 15 days' wages per completed year, 26-day divisor, 5-year rule
 *   Plans    the published per-employee monthly rates
 *
 * WHAT MAY NOT.
 *
 * There is no TDS calculator, and there must not be one built on guessed
 * numbers. Income tax on salary under Section 192 depends on the employee's
 * election between the old and new regimes, on slab rates that change by
 * Finance Act each year, and on verified declarations under 80C, 80D, HRA and
 * home-loan interest. HRMagix publishes none of those, so the hub names TDS
 * explicitly as unavailable and states what would be required — rather than
 * shipping a page that produces a confident wrong number.
 *
 * Professional Tax and Labour Welfare Fund are excluded for the same class of
 * reason: both are state subjects whose slabs, exemptions and periodicity
 * differ by state.
 *
 * STRUCTURE. Each calculator owns its own inputs, its own pure `compute`, its
 * own result cards, its own worked explanation and its own FAQs. `compute` is
 * deliberately pure and dependency-free so it can be exercised directly in a
 * test as well as through the interface.
 */

import type { IconName } from "@/components/icons";
import { formatPrice, rateOf } from "@/lib/pricing";
import {
  RULES,
  computePf,
  establishmentPfAdmin,
  type EsiResult,
  computeEsi,
  computeGratuity,
  computeOvertime,
  gratuityProvision,
  gratuityWage,
  codeWages,
  inr as inrFmt,
  safe,
} from "@/lib/statutory";
import { calculatorsMoreA } from "./calculatorsMoreA";
import { calculatorsMoreB } from "./calculatorsMoreB";
import { calculatorsMoreC } from "./calculatorsMoreC";

/* ---------------- Statutory constants (from lib/statutory.ts) ---------------- */

export const EPF_RATE = RULES.epf.employeeRate;
export const EPS_RATE = RULES.epf.epsRate;
export const EPF_CEILING = RULES.epf.wageCeiling;
export const ESI_EMPLOYEE = RULES.esi.employeeRate;
export const ESI_EMPLOYER = RULES.esi.employerRate;
export const ESI_THRESHOLD = RULES.esi.wageThreshold;
export const GRATUITY_DAYS = RULES.gratuity.days;
export const GRATUITY_DIVISOR = RULES.gratuity.divisor;
export const GRATUITY_MIN_YEARS = RULES.gratuity.minYears;
/** Factories Act, 1948: overtime at twice the ordinary rate of wages. */
export const OVERTIME_MULTIPLIER = RULES.overtime.multiplier;

/** Published per-employee monthly rates. Enterprise is quoted, so it has none. */
export const PLAN_RATES: { name: string; rate: number | null; blurb: string }[] = [
  { name: "Starter", rate: rateOf("Starter"), blurb: "Attendance, leaves, directory and documents" },
  { name: "Growth", rate: rateOf("Growth"), blurb: "Adds payroll, performance, OKRs, recognition and analytics" },
  { name: "Enterprise", rate: rateOf("Enterprise"), blurb: "Adds SSO, succession, lifecycle and a success manager" },
];

/* ---------------- Types ---------------- */

export type Unit = "inr" | "percent" | "years" | "count" | "plan";

export type Field = {
  name: string;
  label: string;
  unit: Unit;
  /** Starting value, as a string because the input is text. */
  initial: string;
  min: number;
  max: number;
  integer?: boolean;
  hint?: string;
  /** Rendered as a checkbox rather than a number field. */
  toggle?: boolean;
  /** Rendered as a select. Values are the option labels. */
  options?: string[];
};

export type Card = { label: string; value: string; note?: string; primary?: boolean };
export type Line = { term: string; value: string; note?: string; total?: boolean; muted?: boolean };

export type Result = {
  cards: Card[];
  /** The full working, shown under the cards. */
  lines: { heading: string; rows: Line[] }[];
  /** One sentence naming what was applied, so the number is never unexplained. */
  summary: string;
};

export type Calculator = {
  /**
   * The one-line framing above the worked method. Written per calculator so
   * the six pages do not open the same section with the same sentence.
   */
  methodIntro: string;
  slug: string;
  /** Menu and card label. */
  name: string;
  /** H1 on the dedicated page. */
  title: string;
  /** One line under the H1. */
  standfirst: string;
  /** What it calculates, in two or three sentences, above the tool. */
  intro: string[];
  icon: IconName;
  fields: Field[];
  compute: (v: Record<string, number | string | boolean>) => Result;
  /** "How is this calculated?" — the formula and the reasoning. */
  method: {
    formula: string;
    steps: { label: string; text: string }[];
    notes: string[];
  };
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; keywords: string[] };
  /** Other calculators worth reaching from here. */
  related: string[];
};

/* ---------------- Helpers ---------------- */

const inr = inrFmt;

const usd = formatPrice;

/** Never NaN or negative, so no calculator can print NaN, Infinity or undefined. */
const num = safe;

const pct = (r: number) => `${+(r * 100).toFixed(2)}%`;

/** ESI employee row: covered, waived (daily wage ≤ ₹176) or not applicable. */
function esiEmployeeRow(esi: EsiResult, gross: number, minus = false): Line {
  if (!esi.applies) return { term: "ESI", value: "Not applicable", note: `Wages above ${inr(ESI_THRESHOLD)}`, muted: true };
  if (esi.employeeExempt)
    return { term: "ESI", value: "Not applicable", note: `Average daily wage ≤ ₹${RULES.esi.exemptDailyWage}: employee share waived`, muted: true };
  return { term: "ESI", value: `${minus ? "− " : ""}${inr(esi.employee)}`, note: `0.75% × ${inr(gross)}, rounded up` };
}

/** ESI employer row. */
function esiEmployerRow(esi: EsiResult, gross: number): Line {
  return esi.applies
    ? { term: "ESI", value: inr(esi.employer), note: `3.25% × ${inr(gross)}, rounded up` }
    : { term: "ESI", value: "Not applicable", note: `Wages above ${inr(ESI_THRESHOLD)}`, muted: true };
}

/* ================================================================== */
/* The calculators                                                     */
/* ================================================================== */

export const baseCalculators: Calculator[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "salary",
    methodIntro:
      "Every line of a CTC breakdown, in the order a payslip presents it. The arithmetic is ordinary; the part worth reading is which components sit inside which base.",
    name: "Salary Calculator",
    title: "Salary breakup calculator",
    standfirst:
      "Enter a monthly gross and see the whole structure: basic, statutory deductions on both sides, take-home before income tax, and what the employee actually costs.",
    intro: [
      "A salary has three different totals and they are routinely confused. Gross is everything earned before deduction. Take-home is gross minus the employee's own statutory contributions. Cost to company is gross plus the employer's contributions, higher than gross, and never an amount anyone receives.",
      "This calculator produces all three from one figure, along with the provident fund and ESI lines that sit between them.",
    ],
    icon: "wallet",
    fields: [
      {
        name: "gross",
        label: "Monthly gross salary",
        unit: "inr",
        initial: "35000",
        min: 1,
        max: 10_000_000,
        hint: "Everything earned in the month before any deduction.",
      },
      {
        name: "basicPct",
        label: "Basic as a share of gross",
        unit: "percent",
        initial: "50",
        min: 1,
        max: 100,
        hint: "Most Indian structures set basic between 40% and 50% of gross.",
      },
      {
        name: "ceiling",
        label: "Apply the ₹15,000 EPF wage ceiling",
        unit: "count",
        initial: "1",
        min: 0,
        max: 1,
        toggle: true,
        hint: "Employers may cap provident fund contributions at the statutory ceiling, or contribute on full basic.",
      },
    ],
    compute: (v) => {
      const gross = num(v.gross);
      const basicPct = num(v.basicPct);
      const ceiling = Boolean(v.ceiling);

      const basic = Math.round((gross * basicPct) / 100);
      const pf = computePf(codeWages(basic, gross), ceiling);
      const esi = computeEsi(gross);

      const deductions = pf.employee + esi.employee;
      const net = gross - deductions;
      const employer = pf.employerCost + esi.employer;
      const cost = gross + employer;

      return {
        summary: `Basic ${basicPct}% of gross · PF on ${inr(pf.pfWage)}${
          ceiling && basic > EPF_CEILING ? " (₹15,000 ceiling)" : ""
        } · ESI ${esi.applies ? "applies" : "not applicable"}.`,
        cards: [
          { label: "Monthly take-home (before income tax & PT)", value: inr(net), primary: true, note: "Gross − employee PF − employee ESI" },
          { label: "Employee deductions", value: inr(deductions), note: "PF + ESI" },
          { label: "Cost to employer", value: inr(cost), note: "Gross + employer contributions" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly gross salary", value: inr(gross) },
              { term: "Basic as a share of gross", value: `${basicPct}%` },
              { term: "₹15,000 EPF wage ceiling", value: ceiling ? "Applied" : "Not applied" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Basic (and DA)", value: inr(basic), note: `${basicPct}% × ${inr(gross)}` },
              { term: "Other allowances", value: inr(gross - basic), note: "Gross − basic" },
              { term: "PF wage", value: inr(pf.pfWage), note: `${codeWages(basic, gross) > basic ? "50% of gross (Labour Codes wage rule)" : "Basic + DA"}${ceiling ? ", capped at ₹15,000" : ""}` },
              { term: "ESI coverage test", value: esi.applies ? "Covered" : "Not covered", note: `Gross ≤ ${inr(ESI_THRESHOLD)}` },
            ],
          },
          {
            heading: "Employee deduction",
            rows: [
              { term: "Provident fund", value: `− ${inr(pf.employee)}`, note: `12% × ${inr(pf.pfWage)}` },
              esiEmployeeRow(esi, gross, true),
              { term: "Total deductions", value: `− ${inr(deductions)}`, total: true },
            ],
          },
          {
            heading: "Employer contribution",
            rows: [
              { term: "EPF", value: inr(pf.employerEpf), note: `12% × ${inr(pf.pfWage)} − EPS` },
              { term: "Pension (EPS)", value: inr(pf.eps), note: `8.33% × ${inr(pf.cappedWage)} (max ₹1,250)` },
              { term: "EDLI insurance", value: inr(pf.edli), note: `0.5% × ${inr(pf.cappedWage)} (max ₹75)` },
              { term: "EPF admin charges", value: inr(pf.admin), note: `0.5% × ${inr(pf.pfWage)}` },
              esiEmployerRow(esi, gross),
              { term: "Total employer contributions", value: inr(employer), total: true },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Take-home (before income tax & PT)", value: inr(net), total: true },
              { term: "Cost to employer", value: inr(cost), note: "Gross + employer contributions" },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Take-home = Gross − (12% × PF base) − (0.75% × Gross, where ESI applies)",
      steps: [
        { label: "Basic is derived from gross", text: "Basic (with dearness allowance where it applies) is the share of gross you set. It is the figure provident fund and gratuity are both computed on." },
        { label: "The PF base is capped, or not", text: "Where the ₹15,000 statutory wage ceiling is applied, the provident fund base is the lower of basic and ₹15,000. Without the cap, it is full basic." },
        { label: "Provident fund is 12% on each side", text: "The employee contributes 12% of the PF base. The employer contributes 12% as well, of which 8.33% (capped at the ceiling) is diverted to the pension scheme and the remainder to provident fund." },
        { label: "ESI applies only below the threshold", text: "Where monthly gross is ₹21,000 or less, the employee contributes 0.75% and the employer 3.25% of gross." },
        { label: "Each head is rounded before it is summed", text: "PF lines are rounded to the nearest rupee and ESI lines up to the next rupee, as EPFO and ESIC require, and totals sum the rounded parts, which is how a payslip is actually produced." },
      ],
      notes: [
        "Income tax under Section 192 is not included. Liability depends on the employee's election between the old and new regimes and on their verified declarations, so any figure here would mislead.",
        "Professional Tax and Labour Welfare Fund are not included. Both are state subjects with different slabs, exemptions and periodicity in each state.",
        "The ESI test here uses monthly gross. In a live payroll, contribution-period rules also apply, so an employee covered at the start of a period continues through it even if wages rise within it.",
      ],
    },
    faqs: [
      {
        q: "Why is cost to employer higher than the gross salary?",
        a: "Because the employer's own statutory contributions sit on top of gross rather than inside it. The 12% provident fund contribution and, where applicable, the 3.25% ESI contribution are the employer's cost and do not reduce the employee's take-home. That money belongs to the employee, but it goes to their provident fund and ESI account rather than their bank.",
      },
      {
        q: "Should I apply the ₹15,000 EPF ceiling or not?",
        a: "Both are permitted. Capping at the statutory wage ceiling reduces the contribution on both sides for anyone whose basic exceeds ₹15,000; contributing on full basic increases the employee's retirement corpus and the employer's cost. It is a policy decision, applied consistently across the organisation, and it is configurable in HRMagix.",
      },
      {
        q: "Why does changing the basic percentage change my take-home?",
        a: "Provident fund is computed on basic rather than on gross. A higher basic means a larger PF base, a larger deduction and therefore a lower take-home, while increasing what accumulates in the provident fund and, at exit, the gratuity computed on last drawn basic.",
      },
      {
        q: "Does the take-home figure include income tax?",
        a: "No. Income tax under Section 192 depends on the employee's choice between the old and new regimes and on their verified declarations, so the figure shown is take-home before income tax.",
      },
      {
        q: "Is Professional Tax deducted in this salary breakup?",
        a: "No. Professional Tax and Labour Welfare Fund are state subjects with different slabs, exemptions and periodicity in each state, so neither is included.",
      },
      {
        q: "When does ESI appear in the salary breakup?",
        a: "Only where monthly gross is ₹21,000 or less. In that case the employee contributes 0.75% and the employer 3.25% of gross; above it, both ESI lines show as not applicable.",
      },
      {
        q: "What basic percentage should I enter?",
        a: "Enter the share your salary structure actually uses. Most Indian structures set basic between 40% and 50% of gross, and the calculator defaults to 50%.",
      },
      {
        q: "How are the figures rounded?",
        a: "PF lines are rounded to the nearest rupee and ESI lines up to the next rupee, as EPFO and ESIC require, and totals sum the rounded parts, which is how a payslip is actually produced.",
      },
    ],
    seo: {
      title: "Salary Breakup Calculator: Take-Home and Cost to Company",
      description:
        "Free salary calculator for India: enter monthly gross to see basic, employee and employer PF, ESI, take-home before income tax and total cost to employer.",
      keywords: [
        "salary calculation software",
        "employee salary calculator",
        "take home salary calculator",
        "CTC calculator",
        "salary breakup calculator",
      ],
    },
    related: ["pf", "esi", "payroll-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "pf",
    methodIntro:
      "The wage base first, because that is where PF calculations actually go wrong, and then the split between the employee's contribution and the employer's two.",
    name: "Provident Fund (PF) Calculator",
    title: "Employees' Provident Fund (EPF) and pension contribution calculator",
    standfirst:
      "Provident fund is 12% on each side, but the employer's 12% splits between provident fund and pension, and the split is capped even when the contribution is not.",
    intro: [
      "Most provident fund confusion is about the employer's share rather than the employee's. The employee contributes a flat 12%. The employer contributes 12% as well, but 8.33% of it is diverted to the Employees' Pension Scheme, and that pension share is capped at the statutory wage ceiling even where the employer has chosen to contribute on full basic.",
      "This calculator shows both sides separately, the split within the employer share, and what accumulates in a year before interest.",
    ],
    icon: "shield",
    fields: [
      {
        name: "basic",
        label: "Monthly basic (and DA)",
        unit: "inr",
        initial: "25000",
        min: 1,
        max: 10_000_000,
        hint: "Basic salary plus dearness allowance, not gross.",
      },
      {
        name: "ceiling",
        label: "Apply the ₹15,000 EPF wage ceiling",
        unit: "count",
        initial: "1",
        min: 0,
        max: 1,
        toggle: true,
        hint: "When off, contributions are computed on full basic. The pension share stays capped either way.",
      },
      {
        name: "vpf",
        label: "Voluntary provident fund (extra employee %)",
        unit: "percent",
        initial: "0",
        min: 0,
        max: 88,
        hint: "An employee may contribute above the statutory 12%. The employer's share does not change.",
      },
    ],
    compute: (v) => {
      const basic = num(v.basic);
      const ceiling = Boolean(v.ceiling);
      const vpfPct = num(v.vpf);

      const pf = computePf(basic, ceiling, vpfPct);
      const empTotal = pf.employee + pf.vpf;
      // EPS goes to the pension fund, not the member's PF account.
      const intoAccount = empTotal + pf.employerEpf;

      return {
        summary: `PF wage ${inr(pf.pfWage)}${
          ceiling && basic > EPF_CEILING ? " (₹15,000 ceiling)" : ""
        } · pension share always on max ${inr(EPF_CEILING)}.`,
        cards: [
          { label: "Into the PF account each month", value: inr(intoAccount), primary: true, note: "Employee share + employer EPF share" },
          { label: "Employee contribution", value: inr(empTotal), note: vpfPct > 0 ? `12% + ${vpfPct}% voluntary` : "12% of PF wage" },
          { label: "Employer contribution", value: inr(pf.employerTotal), note: `EPF ${inr(pf.employerEpf)} + EPS ${inr(pf.eps)}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly basic (and DA)", value: inr(basic) },
              { term: "₹15,000 EPF wage ceiling", value: ceiling ? "Applied" : "Not applied" },
              { term: "Voluntary PF", value: vpfPct > 0 ? `${vpfPct}%` : "None", muted: vpfPct === 0 },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              {
                term: "PF wage used",
                value: inr(pf.pfWage),
                note: ceiling ? (basic > EPF_CEILING ? "Capped at ₹15,000" : "Below the ceiling, full basic") : "Ceiling not applied",
              },
              { term: "Pension / EDLI wage", value: inr(pf.cappedWage), note: "min(basic, ₹15,000), always capped" },
            ],
          },
          {
            heading: "Employee deduction",
            rows: [
              { term: "Provident fund", value: inr(pf.employee), note: `12% × ${inr(pf.pfWage)}` },
              {
                term: "Voluntary PF (VPF)",
                value: vpfPct > 0 ? inr(pf.vpf) : "Not applicable",
                note: vpfPct > 0 ? `${vpfPct}% × ${inr(pf.pfWage)}` : undefined,
                muted: vpfPct === 0,
              },
              { term: "Total employee contribution", value: inr(empTotal), total: true },
            ],
          },
          {
            heading: "Employer contribution",
            rows: [
              { term: "EPF", value: inr(pf.employerEpf), note: "12% − EPS" },
              { term: "Pension (EPS)", value: inr(pf.eps), note: `8.33% × ${inr(pf.cappedWage)} (max ₹1,250)` },
              { term: "EDLI insurance", value: inr(pf.edli), note: `0.5% × ${inr(pf.cappedWage)} (max ₹75)` },
              { term: "EPF admin charges", value: inr(pf.admin), note: `0.5% × ${inr(pf.pfWage)}` },
              { term: "Total employer PF cost", value: inr(pf.employerCost), total: true },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Into the PF account each month", value: inr(intoAccount), total: true },
              { term: "Into the PF account over 12 months", value: inr(intoAccount * 12), note: "Before interest" },
              { term: "Into the pension fund (EPS) each month", value: inr(pf.eps), note: "Held by EPFO for the pension, not the PF balance" },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Employee = 12% × PF base   ·   Employer = 12% × PF base, of which EPS = 8.33% × min(PF base, ₹15,000)",
      steps: [
        { label: "Establish the PF base", text: "The base is basic salary plus dearness allowance. Where the employer applies the statutory wage ceiling, the base is the lower of that figure and ₹15,000." },
        { label: "Employee contributes 12%", text: "A flat 12% of the PF base. An employee may add a voluntary contribution above this; the employer's share is unaffected by it." },
        { label: "Employer contributes 12%, split two ways", text: "8.33% of the base, capped at the ₹15,000 ceiling regardless of the employer's ceiling choice, goes to the Employees' Pension Scheme. The remainder goes to provident fund." },
        { label: "Both sides land in the same account", text: "The monthly total is the sum of both contributions. Interest is credited by EPFO at a rate declared each year and is not included here." },
      ],
      notes: [
        "Interest is not calculated. The EPFO declares a rate annually; applying a past or assumed rate to a future balance would produce a projection rather than a calculation.",
        "The pension share is capped at the statutory ceiling even where the employer contributes on full basic. This is why the EPS figure stops rising once basic passes ₹15,000.",
        "Applicability of the scheme to a particular establishment and employee is a question for your advisers or the EPFO.",
      ],
    },
    faqs: [
      {
        q: "Why does the pension figure stop increasing?",
        a: "Because the pension share is computed on the PF base capped at the ₹15,000 statutory ceiling, even when the employer has chosen to contribute on full basic. Once basic passes ₹15,000 the EPS figure holds steady and the additional employer contribution goes to provident fund instead.",
      },
      {
        q: "What is voluntary provident fund?",
        a: "An employee may contribute more than the statutory 12% of their PF base. The employer's contribution does not increase to match. It is included here as a separate line so the effect on take-home is visible.",
      },
      {
        q: "Does this include the interest my PF earns?",
        a: "No. EPFO declares an interest rate each year, and applying an assumed rate to future balances would be a projection rather than a calculation. The annual figure shown is contributions only.",
      },
      {
        q: "What is the PF base, and should I enter basic or gross?",
        a: "Enter monthly basic plus dearness allowance, not gross. Where the ₹15,000 wage ceiling is applied, the PF base is the lower of that figure and ₹15,000.",
      },
      {
        q: "How is the employer's 12% split between EPF and EPS?",
        a: "8.33% of the PF base, capped at the ₹15,000 ceiling, goes to the Employees' Pension Scheme. The remainder of the employer's 12% goes to provident fund.",
      },
      {
        q: "What changes if I switch the ₹15,000 ceiling off?",
        a: "Contributions on both sides are computed on full basic instead of the capped figure. The pension share stays capped at the ceiling either way.",
      },
      {
        q: "How much goes into the PF account in a year?",
        a: "The calculator totals the employee and employer contributions each month and multiplies by twelve. That annual figure is contributions only, before any interest credited by EPFO.",
      },
      {
        q: "Does EPF apply to my establishment and employees?",
        a: "The calculator does not determine that. Applicability of the scheme to a particular establishment and employee is a question for your advisers or the EPFO.",
      },
    ],
    seo: {
      title: "EPF Calculator: Provident Fund and Pension Contributions",
      description:
        "PF calculation for Indian payroll: employee and employer provident fund at 12%, the 8.33% pension split, the ₹15,000 wage ceiling and voluntary provident fund.",
      keywords: [
        "PF calculation",
        "EPF calculator",
        "provident fund calculator",
        "EPS calculation",
      ],
    },
    related: ["salary", "gratuity", "esi"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "esi",
    methodIntro:
      "The contribution rates are the easy half. The eligibility test, and the fact that it is fixed for a contribution period rather than checked monthly, is the half that costs employers money.",
    name: "Employees' State Insurance (ESI) Calculator",
    title: "Employees' State Insurance (ESI) eligibility and contribution calculator",
    standfirst:
      "ESI turns on a threshold, tested against gross wages excluding overtime, while the contribution itself is charged on every rupee paid, overtime included.",
    intro: [
      "Employees' State Insurance is contributed at 0.75% by the employee and 3.25% by the employer, on gross wages, for employees within the statutory wage threshold of ₹21,000 a month.",
      "The part that catches payroll teams out is not the rate. It is that two different wage figures are in play: coverage is tested on gross excluding overtime, but the 0.75% and 3.25% are applied to gross including it.",
    ],
    icon: "scale",
    fields: [
      {
        name: "gross",
        label: "Monthly gross wages",
        unit: "inr",
        initial: "18000",
        min: 1,
        max: 10_000_000,
        hint: "Total wages for the month, including overtime and allowances.",
      },
      {
        name: "overtime",
        label: "Of which overtime",
        unit: "inr",
        initial: "0",
        min: 0,
        max: 10_000_000,
        hint: "Overtime is left out when testing the ₹21,000 coverage limit, but ESI is still paid on it.",
      },
    ],
    compute: (v) => {
      const gross = num(v.gross);
      const ot = Math.min(num(v.overtime), gross);
      const esi = computeEsi(gross, ot);
      const headroom = ESI_THRESHOLD - esi.coverageWage;
      const total = esi.employee + esi.employer;

      return {
        summary: esi.applies
          ? `Wages for coverage ${inr(esi.coverageWage)} ≤ ${inr(ESI_THRESHOLD)} · ESI applies, on full gross including overtime.`
          : `Wages for coverage ${inr(esi.coverageWage)} > ${inr(ESI_THRESHOLD)} · ESI not applicable.`,
        cards: [
          {
            label: "Total ESI payable this month",
            value: esi.applies ? inr(total) : "Not applicable",
            primary: true,
            note: esi.applies
              ? `${inr(Math.max(0, headroom))} below the ${inr(ESI_THRESHOLD)} threshold`
              : `${inr(Math.abs(headroom))} above the ${inr(ESI_THRESHOLD)} threshold`,
          },
          {
            label: "Employee contribution",
            value: esi.applies && !esi.employeeExempt ? inr(esi.employee) : "Not applicable",
            note: !esi.applies ? undefined : esi.employeeExempt ? "Waived: daily wage ≤ ₹176" : "0.75% of gross",
          },
          { label: "Employer contribution", value: esi.applies ? inr(esi.employer) : "Not applicable", note: esi.applies ? "3.25% of gross" : undefined },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly gross wages", value: inr(gross) },
              { term: "Of which overtime", value: inr(ot), muted: ot === 0 },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Regular wages", value: inr(gross - ot), note: "Gross − overtime" },
              {
                term: "Coverage test",
                value: esi.applies ? "Covered" : "Not covered",
                note: `${inr(esi.coverageWage)} ${esi.applies ? "≤" : ">"} ${inr(ESI_THRESHOLD)} (overtime excluded)`,
              },
              {
                term: "Average daily wage",
                value: inr(esi.dailyWage),
                note: `Gross ÷ 30 · employee share waived at ₹${RULES.esi.exemptDailyWage} or less`,
              },
            ],
          },
          { heading: "Employee deduction", rows: [esiEmployeeRow(esi, gross)] },
          { heading: "Employer contribution", rows: [esiEmployerRow(esi, gross)] },
          {
            heading: "Final result",
            rows: [
              { term: "Total remitted to ESIC", value: esi.applies ? inr(total) : "Not applicable", total: true, muted: !esi.applies },
            ],
          },
        ],
      };
    },
    method: {
      formula: "If (Gross − Overtime) ≤ ₹21,000 → Employee = 0.75% × Gross, Employer = 3.25% × Gross (each rounded up)",
      steps: [
        { label: "Find the wages for coverage", text: "Gross wages for the month less overtime. ESIC leaves overtime out when deciding coverage, and tests gross rather than basic." },
        { label: "Compare against the threshold", text: "Where those wages are ₹21,000 or less, the scheme applies. The threshold is inclusive, an employee at exactly ₹21,000 is covered." },
        { label: "Apply both rates to full gross", text: "The employee contributes 0.75% and the employer 3.25% of all wages paid, overtime included, each rounded up to the next rupee." },
      ],
      notes: [
        "Employees whose average daily wage is ₹176 or less are exempt from the 0.75% employee share (ESIC, w.e.f. 1 September 2019); the employer still pays 3.25%. This calculator takes the daily wage as monthly gross ÷ 30.",
        "This applies a monthly test. A live payroll must also respect contribution periods: an employee covered at the start of a period continues to contribute through it even if wages rise above the threshold within it.",
        "A system that re-tests applicability month by month, with no memory of the period, produces under-deduction, over-deduction and disrupted benefit entitlement in turn.",
        "Whether a specific allowance forms part of the wage base for ESI purposes is a question for your advisers or the ESIC.",
      ],
    },
    faqs: [
      {
        q: "My employee crossed ₹21,000 this month because of overtime. Do they stop contributing?",
        a: "No. Overtime is left out when testing coverage, so overtime alone cannot take an employee out of ESI; contributions are still paid on the overtime. ESI also runs on contribution periods: an employee covered at the start of a period continues through it even if wages rise above the threshold within it.",
      },
      {
        q: "Is the threshold tested on gross or on basic?",
        a: "On gross wages excluding overtime. Allowances such as shift and attendance allowances count towards it; overtime does not, although ESI is still paid on overtime.",
      },
      {
        q: "What does the employer's 3.25% pay for?",
        a: "Contributions fund the medical and cash benefits available to insured employees and their dependants under the scheme. The contribution is the employer's cost and does not reduce the employee's take-home.",
      },
      {
        q: "What are the ESI contribution rates?",
        a: "The employee contributes 0.75% and the employer 3.25% of gross wages, each rounded up to the next rupee, for employees within the ₹21,000 monthly threshold.",
      },
      {
        q: "Is an employee earning exactly ₹21,000 covered by ESI?",
        a: "Yes. The threshold is inclusive, so monthly gross wages of ₹21,000 or less fall within the scheme.",
      },
      {
        q: "Why does the calculator ask for overtime separately?",
        a: "Because overtime is excluded when testing the ₹21,000 coverage limit but included when calculating the contribution. Entering it separately lets the calculator apply both rules correctly.",
      },
      {
        q: "Does every allowance count towards the ESI wage base?",
        a: "Shift differentials and attendance-linked allowances count towards gross. Overtime counts for contributions but not for the coverage test. Whether a specific allowance forms part of the wage base is a question for your advisers or the ESIC.",
      },
      {
        q: "What goes wrong if payroll re-tests ESI every month?",
        a: "A system that re-tests applicability month by month, with no memory of the contribution period, produces under-deduction, over-deduction and disrupted benefit entitlement in turn.",
      },
    ],
    seo: {
      title: "ESI Calculator: Eligibility and Contribution",
      description:
        "ESI calculation for Indian payroll: test the ₹21,000 wage threshold, compute 0.75% employee and 3.25% employer contributions, and see overtime's effect.",
      keywords: [
        "ESI calculation",
        "ESIC contribution calculator",
        "employee state insurance",
      ],
    },
    related: ["salary", "pf", "payroll-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "gratuity",
    methodIntro:
      "The statutory formula under the Payment of Gratuity Act, then each term in it: what counts as continuous service, what counts as last drawn wages, and how part-years are rounded.",
    name: "Gratuity Calculator",
    title: "Gratuity calculator",
    standfirst:
      "Fifteen days' wages for every completed year of service, on a twenty-six day divisor, once five years of continuous service are complete.",
    intro: [
      "Gratuity is a statutory entitlement under the Payment of Gratuity Act rather than a discretionary benefit, and its formula is fixed. What varies between employers is the administration, how a claim is processed, how continuous service is computed across a break, and whether the liability has been provisioned before it falls due.",
      "This calculator applies the statutory formula to the figures you enter, and shows the position for an employee who has not yet reached the qualifying period.",
    ],
    icon: "trophy",
    fields: [
      {
        name: "basic",
        label: "Last drawn monthly basic (and DA)",
        unit: "inr",
        initial: "30000",
        min: 1,
        max: 10_000_000,
        hint: "Basic salary plus dearness allowance as at the last working day, not gross.",
      },
      {
        name: "years",
        label: "Completed years of continuous service",
        unit: "years",
        initial: "7",
        min: 0,
        max: 60,
        integer: true,
        hint: "Whole completed years. Five are required before gratuity becomes payable.",
      },
      {
        name: "months",
        label: "Additional months of service",
        unit: "count",
        initial: "0",
        min: 0,
        max: 11,
        integer: true,
        hint: "Months beyond the completed years. More than six counts as a full year.",
      },
      {
        name: "gross",
        label: "Last drawn monthly gross (optional)",
        unit: "inr",
        initial: "0",
        min: 0,
        max: 10_000_000,
        hint: "Under the Labour Codes, allowances above 50% of pay count as wages. Leave at 0 to use basic and DA as entered.",
      },
      {
        name: "fixedTerm",
        label: "Fixed-term employee",
        unit: "count",
        initial: "0",
        min: 0,
        max: 1,
        toggle: true,
        hint: "Fixed-term employees qualify after one year of service, pro rata (Code on Social Security 2020).",
      },
    ],
    compute: (v) => {
      const basic = num(v.basic);
      const years = Math.floor(num(v.years));
      const months = Math.min(11, Math.floor(num(v.months)));
      const gross = num(v.gross);
      const fixedTerm = Boolean(v.fixedTerm);
      const g = computeGratuity(basic, years, months, { gross, fixedTerm });
      const shortfall = Math.max(0, g.minYears - years);
      const floored = g.wage > basic;
      const service = `${years} ${years === 1 ? "year" : "years"}${months ? ` ${months} ${months === 1 ? "month" : "months"}` : ""}`;
      const qualifying = `${g.minYears} ${g.minYears === 1 ? "year" : "years"}${fixedTerm ? " (fixed-term)" : ""}`;

      return {
        summary: g.eligible
          ? `${service} of service → ${g.countedYears} years counted${months > 6 ? " (over six months rounds up)" : ""}${floored ? " · wage raised to 50% of gross" : ""}${g.capped ? " · capped at ₹20,00,000" : ""}.`
          : `${service} of service · ${qualifying} of continuous service required.`,
        cards: [
          {
            label: g.eligible ? "Gratuity payable" : "Not yet eligible",
            value: g.eligible ? inr(g.amount) : "Not applicable",
            primary: true,
            note: g.eligible
              ? g.capped
                ? "Capped at the ₹20,00,000 statutory maximum"
                : `${g.countedYears} years × ${inr(g.perYear)}`
              : basic <= 0
                ? "Enter last drawn basic"
                : `${shortfall} more ${shortfall === 1 ? "year" : "years"} of service needed`,
          },
          { label: "Per year of service", value: inr(g.perYear), note: "15 × wage ÷ 26" },
          { label: "Years counted", value: `${g.countedYears}`, note: months > 6 ? "Part-year over six months counts" : "Completed years" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Last drawn basic (and DA)", value: inr(basic) },
              { term: "Last drawn gross", value: gross ? inr(gross) : "Not given", muted: !gross },
              { term: "Service", value: service },
              { term: "Employment type", value: fixedTerm ? "Fixed-term" : "Permanent" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              {
                term: "Wage for gratuity",
                value: inr(g.wage),
                note: floored ? `50% × ${inr(gross)} (allowances above 50% added back)` : "Basic + DA",
              },
              { term: "Qualifying period", value: g.eligible ? "Met" : "Not met", note: qualifying },
              { term: "15 days' wages", value: inr(g.perYear), note: `${inr(g.wage)} × 15 ÷ 26` },
              { term: "Years counted", value: `× ${g.countedYears}`, note: months > 6 ? `${years} + 1 (over six months)` : "Completed years only" },
              {
                term: "Statutory cap",
                value: g.capped ? `${inr(g.uncapped)} capped` : "Not applicable",
                note: "Maximum payable is ₹20,00,000",
                muted: !g.capped,
              },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Gratuity payable", value: g.eligible ? inr(g.amount) : "Not applicable", total: true, muted: !g.eligible },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Gratuity = (15 ÷ 26) × Last drawn (basic + DA) × Years of service, capped at ₹20,00,000",
      steps: [
        { label: "Check the qualifying period", text: "Gratuity becomes payable on completing five years of continuous service. The Act also prescribes circumstances in which the five-year condition does not apply." },
        { label: "Derive a daily wage", text: "Last drawn basic plus dearness allowance divided by twenty-six. The Act uses a twenty-six day month, reflecting working days rather than calendar days." },
        { label: "Take fifteen days per completed year", text: "Fifteen times the daily wage gives the entitlement for one completed year of service." },
        { label: "Multiply by years of service", text: "Completed years, with a final part-year of more than six months counted as a full year (Section 4(2))." },
        { label: "Apply the statutory maximum", text: "The amount payable under the Act is capped at ₹20,00,000." },
      ],
      notes: [
        "From 21 November 2025 the Payment of Gratuity Act is part of the Code on Social Security 2020. The formula and the ₹20,00,000 ceiling are unchanged; fixed-term employees qualify after one year, and where allowances exceed 50% of total pay the excess counts as wages.",
        "Continuous service across a break or statutory leave, and coverage of a particular establishment, are questions for your advisers.",
        "The tax treatment of gratuity in a full-and-final settlement has its own rules and is not addressed by this calculator.",
        "Whether an establishment is covered by the Act, and how continuous service is computed where there has been a break or a period of statutory leave, are questions for your own advisers.",
      ],
    },
    faqs: [
      {
        q: "Why is the divisor 26 rather than 30?",
        a: "The Payment of Gratuity Act computes a daily wage on a twenty-six day month, reflecting working days rather than calendar days. Using thirty would understate the entitlement.",
      },
      {
        q: "Is gratuity computed on gross or on basic?",
        a: "On last drawn basic salary plus dearness allowance, not on gross. This is why a salary structure with an unusually low basic reduces both present provident fund contributions and future gratuity.",
      },
      {
        q: "What happens to gratuity before five years?",
        a: "It is not payable, but the liability is accruing. The calculator shows what would be payable at five years on the current basic, which is the figure worth provisioning against, so that a long-serving employee reaching eligibility is a settlement rather than a surprise on the books.",
      },
      {
        q: "What is the gratuity formula used here?",
        a: "Gratuity = (15 ÷ 26) × last drawn basic plus DA × years of service, payable once five years of continuous service are complete, and capped at ₹20,00,000.",
      },
      {
        q: "Does the calculator apply the statutory maximum on gratuity?",
        a: "Yes. The amount payable under the Payment of Gratuity Act is capped at ₹20,00,000, and the calculator shows the uncapped figure alongside when the cap applies.",
      },
      {
        q: "How are part years of service counted?",
        a: "A final part-year of more than six months counts as a full year. Six months or less is ignored. So 7 years 7 months is paid as 8 years, and 7 years 6 months as 7.",
      },
      {
        q: "Is the five-year rule absolute?",
        a: "Gratuity becomes payable on completing five years of continuous service, but the Act also prescribes circumstances in which the five-year condition does not apply.",
      },
      {
        q: "Does the calculator show the tax on gratuity?",
        a: "No. The tax treatment of gratuity in a full-and-final settlement has its own rules and is not addressed by this calculator.",
      },
    ],
    seo: {
      title: "Gratuity Calculator: Payment of Gratuity Act Formula",
      description:
        "Gratuity calculator for India: fifteen days' wages per completed year on a 26-day divisor, with the five-year service rule and per-year accrual shown.",
      keywords: [
        "gratuity calculator",
        "payment of gratuity act",
        "employee gratuity calculation",
        "full and final settlement",
      ],
    },
    related: ["salary", "pf", "payroll-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "payroll-cost",
    methodIntro:
      "Gross pay is where an employer's cost starts, not where it ends. This works upward from the salary to the total the company actually commits to.",
    name: "Payroll Cost Calculator",
    title: "Monthly payroll cost calculator",
    standfirst:
      "What a team of a given size actually costs each month once employer provident fund, pension and ESI contributions are added to the salary bill.",
    intro: [
      "A salary budget built on gross alone understates the real monthly outlay, because the employer's statutory contributions sit on top of it rather than inside it.",
      "This calculator applies the same statutory rules used for an individual salary to a whole team, so a headcount and an average salary produce the figure finance actually has to fund.",
    ],
    icon: "chart",
    fields: [
      {
        name: "headcount",
        label: "Number of employees",
        unit: "count",
        initial: "50",
        min: 1,
        max: 100000,
        integer: true,
        hint: "Employees on this salary band.",
      },
      {
        name: "gross",
        label: "Average monthly gross per employee",
        unit: "inr",
        initial: "30000",
        min: 1,
        max: 10_000_000,
        hint: "The average across the band. Run the calculator once per band for a mixed workforce.",
      },
      {
        name: "basicPct",
        label: "Basic as a share of gross",
        unit: "percent",
        initial: "50",
        min: 1,
        max: 100,
        hint: "Provident fund is computed on basic, so this changes the employer's cost.",
      },
      {
        name: "ceiling",
        label: "Apply the ₹15,000 EPF wage ceiling",
        unit: "count",
        initial: "1",
        min: 0,
        max: 1,
        toggle: true,
      },
    ],
    compute: (v) => {
      const n = num(v.headcount);
      const gross = num(v.gross);
      const basicPct = num(v.basicPct);
      const ceiling = Boolean(v.ceiling);

      const basic = Math.round((gross * basicPct) / 100);
      const pf = computePf(codeWages(basic, gross), ceiling);
      const esi = computeEsi(gross);

      const salaryBill = gross * n;
      // EPF admin charges are levied per establishment: 0.5% of total PF wages, minimum ₹500 a month.
      const adminBill = establishmentPfAdmin(pf.admin * n);
      const pfBill = (pf.employerTotal + pf.edli) * n + adminBill;
      const esiBill = esi.employer * n;
      const total = salaryBill + pfBill + esiBill;
      const perHead = n ? total / n : 0;
      const employer = perHead - gross;
      const loading = gross ? (employer / gross) * 100 : 0;

      return {
        summary: `${n.toLocaleString("en-IN")} employees × ${inr(gross)} average gross · employer contributions add ${loading.toFixed(1)}%.`,
        cards: [
          { label: "Total monthly payroll cost", value: inr(total), primary: true, note: `${inr(perHead)} per employee · ${inr(total * 12)} a year` },
          { label: "Salary bill", value: inr(salaryBill), note: "Gross × headcount" },
          { label: "Employer contributions", value: inr(pfBill + esiBill), note: `${loading.toFixed(1)}% on top of gross` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Number of employees", value: n.toLocaleString("en-IN") },
              { term: "Average monthly gross", value: inr(gross) },
              { term: "Basic as a share of gross", value: `${basicPct}%` },
              { term: "₹15,000 EPF wage ceiling", value: ceiling ? "Applied" : "Not applied" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Basic (and DA)", value: inr(basic), note: `${basicPct}% × ${inr(gross)}` },
              { term: "PF wage", value: inr(pf.pfWage), note: `${codeWages(basic, gross) > basic ? "50% of gross (Labour Codes wage rule)" : "Basic + DA"}${ceiling ? ", capped at ₹15,000" : ""}` },
              { term: "ESI coverage test", value: esi.applies ? "Covered" : "Not covered", note: `Gross ≤ ${inr(ESI_THRESHOLD)}` },
              {
                term: "EPF admin (establishment)",
                value: inr(adminBill),
                note: `max(0.5% × total PF wages, ₹${RULES.epf.adminMinPerEstablishment})`,
              },
            ],
          },
          {
            heading: "Employer contribution",
            rows: [
              { term: "EPF", value: inr(pf.employerEpf), note: `12% × ${inr(pf.pfWage)} − EPS` },
              { term: "Pension (EPS)", value: inr(pf.eps), note: `8.33% × ${inr(pf.cappedWage)} (max ₹1,250)` },
              { term: "EDLI insurance", value: inr(pf.edli), note: `0.5% × ${inr(pf.cappedWage)} (max ₹75)` },
              { term: "EPF admin charges", value: inr(adminBill / (n || 1)), note: "Establishment admin ÷ headcount" },
              esiEmployerRow(esi, gross),
              { term: "Cost per employee", value: inr(perHead), total: true },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Salary bill", value: inr(salaryBill), note: `${inr(gross)} × ${n.toLocaleString("en-IN")}` },
              { term: "PF, pension, EDLI & admin", value: inr(pfBill) },
              { term: "ESI", value: esi.applies ? inr(esiBill) : "Not applicable", muted: !esi.applies },
              { term: "Total monthly payroll cost", value: inr(total), total: true },
              { term: "Annual payroll cost", value: inr(total * 12), note: "× 12 months" },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Cost per employee = Gross + 12% PF + 0.5% EDLI + 0.5% admin + 3.25% ESI (where it applies)",
      steps: [
        { label: "Compute one employee first", text: "The statutory rules are per employee, so the calculation runs once for the average and is then multiplied by headcount." },
        { label: "Add the employer's provident fund", text: "12% of the PF wage (8.33% of it, up to ₹1,250, goes to the pension scheme), plus EDLI at 0.5% of wages up to ₹15,000 and EPF admin charges at 0.5%." },
        { label: "Add ESI where the threshold is met", text: "3.25% of gross, where average gross is within the ₹21,000 threshold." },
        { label: "Multiply by headcount", text: "Because every input is an average, run the calculator once per salary band for a workforce with meaningfully different pay levels." },
      ],
      notes: [
        "This is an averaged figure. A workforce spanning the ESI threshold will not be represented accurately by a single average, run each band separately.",
        "Employee-side deductions do not appear here, because they reduce take-home rather than adding to employer cost.",
        "Professional Tax, Labour Welfare Fund and gratuity provisioning are not included. The first two are state subjects; the third depends on individual service length.",
      ],
    },
    faqs: [
      {
        q: "Why is my cost higher than the salary budget I approved?",
        a: "Because a salary budget expressed in gross omits the employer's own statutory contributions, which sit on top of gross rather than inside it. On a typical structure that is an additional twelve to sixteen per cent, and it is the single most common gap between an approved headcount budget and the actual monthly outlay.",
      },
      {
        q: "Our salaries vary widely. Is one average accurate?",
        a: "No, and particularly not across the ESI threshold. An average that straddles ₹21,000 will apply ESI either to everyone or to nobody, when in reality it applies to part of the workforce. Run the calculator once per salary band and add the results.",
      },
      {
        q: "Does this include gratuity?",
        a: "No. Gratuity accrues per employee against their length of service rather than as a flat monthly percentage, so it cannot be represented by a headcount average. The gratuity calculator handles it per employee.",
      },
      {
        q: "What does the monthly payroll cost include?",
        a: "Gross salary plus the employer's statutory contributions: 12% provident fund on the PF base (including the 8.33% pension share) and 3.25% ESI where average gross is within the ₹21,000 threshold.",
      },
      {
        q: "Why are employee PF and ESI deductions not shown?",
        a: "Because they come out of the employee's gross and reduce take-home rather than adding to the employer's cost.",
      },
      {
        q: "Are Professional Tax and Labour Welfare Fund included?",
        a: "No. Both are state subjects, so they are left out, as is gratuity provisioning, which depends on individual service length.",
      },
      {
        q: "Why does the basic percentage change the payroll cost?",
        a: "Employer provident fund is computed on basic, so a higher basic share raises the PF base and the employer's contribution, unless the ₹15,000 ceiling caps it.",
      },
      {
        q: "Does the calculator give an annual payroll figure?",
        a: "Yes. It annualises the total monthly cost as twelve months at the current run rate.",
      },
    ],
    seo: {
      title: "Payroll Cost Calculator: Total Monthly Employer Cost",
      description:
        "Calculate total monthly payroll cost for a team in India: salary bill plus employer provident fund, pension and ESI contributions, per employee and annualised.",
      keywords: [
        "payroll cost calculator",
        "employer cost calculator",
        "salary budget calculator",
      ],
    },
    related: ["salary", "esi", "plan-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "plan-cost",
    methodIntro:
      "Published rate times headcount, and nothing else. No modelled savings, no projected return, the arithmetic is deliberately trivial so the number is checkable.",
    name: "HRMagix Plan Cost",
    title: "HRMagix subscription cost calculator",
    standfirst:
      "The published per-employee rate multiplied by your headcount. No modelled savings, no projected return, and no discount that appears when you ask.",
    intro: [
      "HRMagix publishes its rates per employee per month across three plans. This calculator does one thing: multiplies the published rate by the number of people you would put on the platform.",
      "Enterprise is quoted rather than listed, because it depends on entity count, module scope and whether single sign-on and a dedicated success manager are required, so this calculator returns no figure for it.",
    ],
    icon: "layers",
    fields: [
      {
        name: "headcount",
        label: "Number of employees",
        unit: "count",
        initial: "50",
        min: 1,
        max: 100000,
        integer: true,
        hint: "Everyone you would put on the platform.",
      },
      {
        name: "plan",
        label: "Plan",
        unit: "plan",
        initial: "Growth",
        min: 0,
        max: 0,
        options: PLAN_RATES.map((p) => p.name),
        hint: "Which modules each plan includes is set out on the pricing page.",
      },
    ],
    compute: (v) => {
      const n = num(v.headcount);
      const planName = String(v.plan);
      const plan = PLAN_RATES.find((p) => p.name === planName) ?? PLAN_RATES[1];

      if (plan.rate === null) {
        return {
          summary: "Enterprise is quoted rather than published, so this calculator returns no figure for it.",
          cards: [
            { label: "Monthly cost", value: "Quoted", primary: true, note: "Depends on entities, module scope and SSO" },
            { label: "Employees", value: n.toLocaleString("en-IN") },
            { label: "Plan", value: plan.name, note: plan.blurb },
          ],
          lines: [
            {
              heading: "Input",
              rows: [
                { term: "Employees", value: n.toLocaleString("en-IN") },
                { term: "Plan", value: plan.name },
              ],
            },
            {
              heading: "Final result",
              rows: [
                {
                  term: "Enterprise pricing",
                  muted: true,
                  value: "On application",
                  note: "It is quoted because it depends on entity count, module scope and whether single sign-on and a dedicated success manager are required, not because there is a number we would rather you did not see.",
                },
              ],
            },
          ],
        };
      }

      const monthly = plan.rate * n;
      return {
        summary: `${n.toLocaleString("en-IN")} employees on the ${plan.name} plan at the published rate of ${usd(plan.rate)} per employee per month.`,
        cards: [
          { label: "Monthly cost", value: usd(monthly), primary: true, note: `${usd(plan.rate)} per employee per month` },
          { label: "Annual cost", value: usd(monthly * 12), note: "Twelve months at this headcount" },
          { label: "Plan", value: plan.name, note: plan.blurb },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Employees", value: n.toLocaleString("en-IN") },
              { term: "Plan", value: plan.name },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Published rate", value: `${usd(plan.rate)} per employee per month` },
              { term: "Monthly subscription", value: usd(monthly), note: `${usd(plan.rate)} × ${n.toLocaleString("en-IN")}` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Monthly cost", value: usd(monthly), total: true },
              { term: "Annual cost", value: usd(monthly * 12), note: "× 12 months" },
            ],
          },
          {
            heading: "What the price includes",
            rows: [
              { term: "Setup fee", value: "None", note: "Excel import, policy validation and a dry-run payroll are part of getting started" },
              { term: "Trial", value: "14 days", note: "Full access to every module, rather than a restricted version" },
              { term: "Modules", value: plan.blurb },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Monthly cost = Published per-employee rate × Number of employees",
      steps: [
        { label: "Pick the plan", text: "Which modules sit on which plan is published on the pricing page. Starter covers attendance, leaves, directory and documents; Growth adds payroll, performance, OKRs, recognition and analytics." },
        { label: "Enter your headcount", text: "Pricing is per employee per month, so headcount is the only other variable." },
        { label: "Multiply", text: "That is the entire calculation. There is no tiering, no minimum commitment applied here and no setup fee." },
      ],
      notes: [
        "Rates are published in US dollars, as HRMagix lists them.",
        "No saving, payback period or return on investment is calculated. Any such figure would be modelled rather than computed, and modelled figures do not belong in a calculator.",
        "Enterprise returns no figure because it is quoted against entity count, module scope and security requirements.",
      ],
    },
    faqs: [
      {
        q: "Is there a setup or implementation fee?",
        a: "No. The two-to-three-day setup, the Excel import templates, the policy validation and the dry-run payroll are part of getting started rather than a separately priced engagement.",
      },
      {
        q: "Why is there no saving or ROI figure?",
        a: "Because any such number would be modelled rather than calculated. A projected saving depends on assumptions about your current process that we have no way to verify, and presenting one alongside real arithmetic would devalue both.",
      },
      {
        q: "Can I switch plans later?",
        a: "Every module lives on one platform, and your plan decides which are switched on. Moving between plans changes what is available rather than requiring a migration.",
      },
      {
        q: "Why does Enterprise show no price?",
        a: "Enterprise is quoted rather than published, because it depends on entity count, module scope and whether single sign-on and a dedicated success manager are required.",
      },
      {
        q: "What currency are the plan rates in?",
        a: "Rates are published in US dollars, as HRMagix lists them, and are charged per employee per month.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. The trial runs for 14 days with full access to every module, rather than a restricted version.",
      },
      {
        q: "What is the difference between the Starter and Growth plans?",
        a: "Starter covers attendance, leaves, directory and documents. Growth adds payroll, performance, OKRs, recognition and analytics; the full module list is on the pricing page.",
      },
      {
        q: "Does the calculation apply tiering or a minimum commitment?",
        a: "No. It is the published per-employee rate multiplied by headcount, with no tiering, no minimum commitment and no setup fee applied.",
      },
    ],
    seo: {
      title: "HRMagix Plan Cost Calculator: Per Employee Pricing",
      description:
        "Work out your HRMagix subscription cost: published per-employee monthly rates across the Starter, Growth and Enterprise plans, multiplied by your headcount.",
      keywords: [
        "HRMS pricing",
        "HR software cost calculator",
        "payroll software pricing",
      ],
    },
    related: ["payroll-cost", "salary", "gratuity"],
  },
  /* ---------------------------------------------------------------- */
  {
    slug: "overtime",
    methodIntro:
      "The statutory multiplier is fixed; the hourly rate it multiplies is not. So the working is shown in that order, the rate you supply, then the doubling the Act requires.",
    name: "Overtime Calculator",
    title: "Overtime pay calculator",
    standfirst:
      "Overtime at twice the ordinary rate of wages, the Factories Act rule for work beyond nine hours in a day or forty-eight in a week.",
    intro: [
      "Under the Factories Act, a worker who works more than nine hours in a day or more than forty-eight hours in a week is entitled to wages for the extra time at twice the ordinary rate of wages. The multiplier is set by statute. How the hourly rate is derived from a monthly wage is not uniform, so this calculator asks you for the basis instead of assuming one.",
      "Establishments outside the Factories Act, shops, offices and commercial establishments, are governed by the Shops and Establishments Act of their state, whose overtime provisions vary. Check which applies before relying on the figure.",
    ],
    icon: "clock",
    fields: [
      {
        name: "wage",
        label: "Monthly ordinary rate of wages",
        unit: "inr",
        initial: "24000",
        min: 1,
        max: 10_000_000,
        hint: "Basic and allowances that count as ordinary wages, not bonus, and not earlier overtime.",
      },
      {
        name: "days",
        label: "Working days used to derive a daily rate",
        unit: "count",
        initial: "26",
        min: 1,
        max: 31,
        integer: true,
        hint: "The divisor your establishment applies. Many use 26; confirm yours.",
      },
      {
        name: "hours",
        label: "Normal working hours per day",
        unit: "count",
        initial: "8",
        min: 1,
        max: 12,
        hint: "Used to turn the daily rate into an hourly one.",
      },
      {
        name: "ot",
        label: "Overtime hours in the month",
        unit: "count",
        initial: "10",
        min: 0,
        max: 300,
        hint: "Hours beyond nine in a day or forty-eight in a week.",
      },
    ],
    compute: (v) => {
      const wage = num(v.wage);
      const days = num(v.days);
      const hours = num(v.hours);
      const ot = num(v.ot);
      const { daily, hourly, otRate, pay } = computeOvertime(wage, days, hours, ot);
      // Show paise on per-hour rates so the working reconciles exactly.
      const rs2 = (n: number) =>
        safe(n).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return {
        summary: `${ot} OT ${ot === 1 ? "hour" : "hours"} × ${rs2(otRate)} (2 × ${rs2(hourly)} ordinary hourly rate).`,
        cards: [
          { label: "Overtime pay for the month", value: ot ? inr(pay) : "Not applicable", primary: true, note: ot ? "At twice the ordinary rate" : "No overtime hours entered" },
          { label: "Overtime rate per hour", value: rs2(otRate), note: "2 × ordinary hourly rate" },
          { label: "Ordinary hourly rate", value: rs2(hourly), note: `${inr(wage)} ÷ ${days} ÷ ${hours}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly ordinary wages", value: inr(wage) },
              { term: "Working days", value: `${days}` },
              { term: "Normal hours per day", value: `${hours}` },
              { term: "Overtime hours", value: `${ot}`, muted: !ot },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Daily rate", value: rs2(daily), note: `${inr(wage)} ÷ ${days} days` },
              { term: "Ordinary hourly rate", value: rs2(hourly), note: `Daily rate ÷ ${hours} hours` },
              { term: "Overtime rate", value: rs2(otRate), note: "2 × ordinary hourly rate (Factories Act s.59 / Code on Wages s.14)" },
              { term: "Overtime pay", value: rs2(otRate * ot), note: `${rs2(otRate)} × ${ot} hours, rounded to the rupee` },
            ],
          },
          {
            heading: "Final result",
            rows: [{ term: "Overtime pay", value: ot ? inr(pay) : "Not applicable", total: true, muted: !ot }],
          },
        ],
      };
    },
    method: {
      formula: "Overtime pay = 2 × (Monthly ordinary wages ÷ Working days ÷ Normal hours) × Overtime hours",
      steps: [
        { label: "Confirm the hours are overtime", text: "Under the Factories Act, overtime is work beyond nine hours in a day or forty-eight hours in a week." },
        { label: "Establish the ordinary rate of wages", text: "Basic wages plus the allowances that count as ordinary wages. Bonus and wages for earlier overtime are excluded." },
        { label: "Derive an hourly rate", text: "Divide by the working days and normal hours your establishment applies. This basis is an input here rather than an assumption, because it is not uniform." },
        { label: "Apply the statutory multiplier", text: "Twice the ordinary hourly rate, for each overtime hour." },
      ],
      notes: [
        "Only the multiplier and the nine-hour and forty-eight-hour limits come from the Factories Act. The divisor for the hourly rate is yours to supply.",
        "Shops and commercial establishments are governed by their state's Shops and Establishments Act, whose overtime rules differ from state to state.",
        "Statutory limits on the total overtime a worker may do in a quarter are not checked here.",
      ],
    },
    faqs: [
      {
        q: "When does overtime start under the Factories Act?",
        a: "After nine hours of work in a day or forty-eight hours in a week. Hours beyond either limit are paid at twice the ordinary rate of wages.",
      },
      {
        q: "Why does the calculator ask for working days and hours?",
        a: "Because the Act fixes the multiplier, but a single divisor for converting a monthly wage into an hourly one is not something this calculator can assume for every establishment. Entering your own basis keeps the arithmetic honest and checkable.",
      },
      {
        q: "Does this apply to office staff?",
        a: "Not necessarily. Offices and shops fall under the Shops and Establishments Act of their state, which sets its own overtime rules. The Factories Act rule shown here applies to workers in factories.",
      },
      {
        q: "How is overtime pay calculated?",
        a: "Overtime pay = 2 × (monthly ordinary wages ÷ working days ÷ normal hours per day) × overtime hours. The daily, hourly and overtime rates are each shown on their own line.",
      },
      {
        q: "What counts as the ordinary rate of wages?",
        a: "Basic wages plus the allowances that count as ordinary wages. Bonus and wages for earlier overtime are excluded.",
      },
      {
        q: "Which working-day divisor should I use?",
        a: "The one your establishment applies. Many use 26, which is the calculator's default, but confirm yours before relying on the figure.",
      },
      {
        q: "Does the calculator check the limit on total overtime in a quarter?",
        a: "No. Statutory limits on the total overtime a worker may do in a quarter are not checked here.",
      },
      {
        q: "Which parts of the calculation come from the Factories Act?",
        a: "Only the twice-the-ordinary-rate multiplier and the nine-hour daily and forty-eight-hour weekly limits. The divisor for the hourly rate is yours to supply.",
      },
    ],
    seo: {
      title: "Overtime Calculator India: Factories Act Twice the Ordinary Rate",
      description:
        "Overtime pay calculator for India: twice the ordinary wage rate for work beyond nine hours a day or 48 a week under the Factories Act, on your own basis.",
      keywords: [
        "overtime calculator",
        "factories act overtime",
        "overtime pay india",
        "double wages overtime",
      ],
    },
    related: ["salary", "payroll-cost", "ctc"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "ctc",
    methodIntro:
      "CTC is the gross salary plus what the employer pays on top of it. Each addition is shown on its own line, so a CTC figure can be traced back to the salary it came from.",
    name: "Cost to Company (CTC) Calculator",
    title: "CTC (cost to company) calculator",
    standfirst:
      "From a monthly gross salary to an annual cost to company: employer provident fund, employer ESI where it applies, a gratuity provision and any annual bonus.",
    intro: [
      "Cost to company is not a statutory term. It is the convention of quoting a salary as everything the employer spends on the employee in a year, which is why two offers with the same CTC can mean different take-home pay.",
      "This calculator builds a CTC upward from a monthly gross using the statutory contribution rates for provident fund and ESI, and optionally a gratuity provision on the Payment of Gratuity Act formula and an annual bonus you enter.",
    ],
    icon: "wallet",
    fields: [
      {
        name: "gross",
        label: "Monthly gross salary",
        unit: "inr",
        initial: "40000",
        min: 1,
        max: 10_000_000,
      },
      {
        name: "basicPct",
        label: "Basic as a share of gross",
        unit: "percent",
        initial: "50",
        min: 1,
        max: 100,
        hint: "Provident fund and gratuity are both computed on basic.",
      },
      {
        name: "ceiling",
        label: "Apply the ₹15,000 EPF wage ceiling",
        unit: "count",
        initial: "1",
        min: 0,
        max: 1,
        toggle: true,
      },
      {
        name: "gratuity",
        label: "Include a gratuity provision",
        unit: "count",
        initial: "1",
        min: 0,
        max: 1,
        toggle: true,
        hint: "Common practice when quoting CTC, not a statutory requirement.",
      },
      {
        name: "bonus",
        label: "Annual bonus or variable pay",
        unit: "inr",
        initial: "0",
        min: 0,
        max: 100_000_000,
      },
    ],
    compute: (v) => {
      const gross = num(v.gross);
      const basicPct = num(v.basicPct);
      const basic = Math.round((gross * basicPct) / 100);
      const pf = computePf(codeWages(basic, gross), Boolean(v.ceiling));
      const esi = computeEsi(gross);
      // Labour Codes (21 Nov 2025): gratuity wage is at least 50% of gross.
      const gratWage = gratuityWage(basic, gross);
      const grat = Boolean(v.gratuity) ? gratuityProvision(basic, gross) : 0;
      const bonus = num(v.bonus);
      const employer = pf.employerCost + esi.employer + grat;
      const monthly = gross + employer;
      const annual = monthly * 12 + bonus;
      return {
        summary: `Gross ${inr(gross)}/month + employer PF${esi.applies ? " + ESI" : ""}${grat ? " + gratuity provision" : ""}${bonus ? " + annual bonus" : ""}.`,
        cards: [
          { label: "Annual CTC", value: inr(annual), primary: true, note: `${inr(Math.round(annual / 12))} a month` },
          { label: "Annual gross salary", value: inr(gross * 12), note: "What the employee earns before deductions" },
          { label: "Employer additions a year", value: inr(employer * 12 + bonus), note: "On top of gross" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly gross salary", value: inr(gross) },
              { term: "Basic as a share of gross", value: `${basicPct}%` },
              { term: "₹15,000 EPF wage ceiling", value: v.ceiling ? "Applied" : "Not applied" },
              { term: "Gratuity provision", value: v.gratuity ? "Included" : "Not included" },
              { term: "Annual bonus or variable pay", value: inr(bonus), muted: !bonus },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Basic (and DA)", value: inr(basic), note: `${basicPct}% × ${inr(gross)}` },
              { term: "Other allowances", value: inr(gross - basic), note: "Gross − basic" },
              { term: "PF wage", value: inr(pf.pfWage), note: `${codeWages(basic, gross) > basic ? "50% of gross (Labour Codes wage rule)" : "Basic + DA"}${v.ceiling ? ", capped at ₹15,000" : ""}` },
              {
                term: "Gratuity wage",
                value: inr(gratWage),
                note: gratWage > basic ? "Raised to 50% of gross (Labour Codes wage rule)" : "Basic + DA",
              },
              { term: "ESI coverage test", value: esi.applies ? "Covered" : "Not covered", note: `Gross ≤ ${inr(ESI_THRESHOLD)}` },
            ],
          },
          {
            heading: "Employer contribution",
            rows: [
              { term: "Provident fund (EPF + EPS)", value: inr(pf.employerTotal), note: `12% × ${inr(pf.pfWage)}` },
              { term: "EDLI insurance", value: inr(pf.edli), note: `0.5% × ${inr(pf.cappedWage)} (max ₹75)` },
              { term: "EPF admin charges", value: inr(pf.admin), note: `0.5% × ${inr(pf.pfWage)}` },
              esiEmployerRow(esi, gross),
              {
                term: "Gratuity provision",
                value: grat ? inr(grat) : "Not included",
                note: grat ? `${inr(gratWage)} × 15 ÷ 26 ÷ 12 (≈ 4.81% of gratuity wage)` : undefined,
                muted: !grat,
              },
              { term: "Total employer contributions", value: inr(employer), total: true },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Monthly cost × 12", value: inr(monthly * 12), note: `${inr(monthly)} × 12` },
              { term: "Annual bonus or variable pay", value: bonus ? inr(bonus) : "Not included", muted: !bonus },
              { term: "Annual CTC", value: inr(annual), total: true },
            ],
          },
        ],
      };
    },
    method: {
      formula: "CTC = 12 × (Gross + Employer PF + EDLI + PF admin + Employer ESI + Gratuity provision) + Annual bonus",
      steps: [
        { label: "Start from gross", text: "The monthly gross salary, basic plus allowances, before any deduction." },
        { label: "Add employer provident fund", text: "Twelve per cent of the PF wage, with the ₹15,000 ceiling applied if you choose it. The split between EPF and EPS does not change the total." },
        { label: "Add employer ESI where it applies", text: "3.25% of gross when gross is within the ₹21,000 threshold; nothing above it." },
        { label: "Add a gratuity provision", text: "Fifteen twenty-sixths of monthly basic per year of service, spread across twelve months, the amount an employer sets aside each month against the eventual liability." },
        { label: "Annualise and add bonus", text: "Twelve months of the monthly cost plus any annual bonus or variable pay you enter." },
      ],
      notes: [
        "CTC is a convention, not a statutory definition. Employers differ in what they include, insurance premiums, meal cards and reimbursements are common additions not modelled here.",
        "EDLI (0.5% of wages up to ₹15,000) and EPF admin charges (0.5% of PF wages) payable by the employer are included.",
        "The gratuity provision is an accounting convention for spreading a future liability; gratuity itself is only payable after five years of continuous service.",
      ],
    },
    faqs: [
      {
        q: "Why is my in-hand salary so much lower than my CTC?",
        a: "Because CTC includes amounts the employer pays that never reach your account in the month, its own provident fund and ESI contributions, a gratuity provision and any variable pay, and your own deductions come off gross before you are paid. The salary calculator shows the take-home side.",
      },
      {
        q: "Is gratuity always part of CTC?",
        a: "No. Including a gratuity provision in a quoted CTC is a common practice rather than a rule, which is why the calculator lets you switch it off.",
      },
      {
        q: "Does a higher basic change the CTC?",
        a: "It can. Provident fund and gratuity are both computed on basic, so a larger basic raises the employer's contributions, unless the EPF wage ceiling caps the provident fund side.",
      },
      {
        q: "Is CTC a legal or statutory term?",
        a: "No. Cost to company is a convention for quoting a salary as everything the employer spends on the employee in a year, which is why two offers with the same CTC can mean different take-home pay.",
      },
      {
        q: "What does this CTC calculation leave out?",
        a: "Insurance premiums, meal cards and reimbursements, which some employers add, are not modelled. EDLI and EPF admin charges payable by the employer are included.",
      },
      {
        q: "How is the gratuity provision in CTC worked out?",
        a: "Fifteen twenty-sixths of monthly basic per year of service, spread across twelve months. It is an accounting convention; gratuity itself is only payable after five years of continuous service.",
      },
      {
        q: "Is employer ESI included in every CTC?",
        a: "Only where monthly gross is within the ₹21,000 threshold, in which case 3.25% of gross is added. Above the threshold, nothing is added for ESI.",
      },
      {
        q: "Does the EPF and EPS split affect CTC?",
        a: "No. The employer's 12% provident fund contribution is added in full, and how it divides between EPF and EPS does not change the total.",
      },
    ],
    seo: {
      title: "CTC Calculator India: Cost to Company from Gross Salary",
      description:
        "CTC calculator for India: build annual cost to company from monthly gross with employer PF, employer ESI, a gratuity provision and bonus, every line shown.",
      keywords: [
        "ctc calculator",
        "cost to company calculator",
        "ctc to gross",
        "salary ctc india",
      ],
    },
    related: ["salary", "pf", "gratuity"],
  },
];

export const calculators: Calculator[] = [...baseCalculators, ...calculatorsMoreA, ...calculatorsMoreB, ...calculatorsMoreC];

export const calculatorBySlug = (slug: string) => calculators.find((c) => c.slug === slug);

/**
 * Calculators deliberately not built, and what each would require.
 *
 * These are surfaced on the hub rather than hidden, so a visitor looking for a
 * TDS calculator learns why there isn't one instead of assuming it was missed.
 */
export const unavailable: { name: string; why: string; needs: string }[] = [
  {
    name: "TDS on salary",
    why: "Income tax under Section 192 depends on the employee's election between the old and new regimes, on slab rates set by Finance Act each year, and on verified declarations under 80C, 80D, HRA and home-loan interest.",
    needs:
      "Current-year slab rates and the individual's verified declarations. Both exist inside a real payroll run against a specific employee, which is where HRMagix computes the monthly TDS schedule, quarterly Form 24Q and annual Form 16 Part B.",
  },
  {
    name: "Professional Tax",
    why: "Professional Tax is a state subject. Slabs, exemptions and periodicity differ by state, and Maharashtra deducts a different amount in one month of the year.",
    needs:
      "The current notified schedule for each state you operate in. HRMagix configures these per work location so applicability follows the employee record.",
  },
  {
    name: "Labour Welfare Fund",
    why: "LWF runs on state calendars, half-yearly in some states, annual in others, on dates unrelated to the payroll cycle.",
    needs: "The current state-notified amounts and due dates for each location.",
  },
];

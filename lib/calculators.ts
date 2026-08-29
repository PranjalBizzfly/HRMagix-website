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

/* ---------------- Statutory constants ---------------- */

export const EPF_RATE = 0.12;
export const EPS_RATE = 0.0833;
export const EPF_CEILING = 15000;
export const ESI_EMPLOYEE = 0.0075;
export const ESI_EMPLOYER = 0.0325;
export const ESI_THRESHOLD = 21000;
export const GRATUITY_DAYS = 15;
export const GRATUITY_DIVISOR = 26;
export const GRATUITY_MIN_YEARS = 5;

/** Published per-employee monthly rates. Enterprise is quoted, so it has none. */
export const PLAN_RATES: { name: string; rate: number | null; blurb: string }[] = [
  { name: "Starter", rate: 3, blurb: "Attendance, leaves, directory and documents" },
  { name: "Growth", rate: 6, blurb: "Adds payroll, performance, OKRs, recognition and analytics" },
  { name: "Enterprise", rate: null, blurb: "Adds SSO, succession, lifecycle and a success manager" },
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

const inr = (n: number) =>
  n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const num = (v: unknown) => (typeof v === "number" ? v : Number(v));

/* ================================================================== */
/* The calculators                                                     */
/* ================================================================== */

export const calculators: Calculator[] = [
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
      "A salary has three different totals and they are routinely confused. Gross is everything earned before deduction. Take-home is gross minus the employee's own statutory contributions. Cost to company is gross plus the employer's contributions — higher than gross, and never an amount anyone receives.",
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
      const pfBase = ceiling ? Math.min(basic, EPF_CEILING) : basic;

      const empPf = Math.round(pfBase * EPF_RATE);
      const erTotal = Math.round(pfBase * EPF_RATE);
      const eps = Math.round(Math.min(pfBase, EPF_CEILING) * EPS_RATE);
      const erPf = erTotal - eps;

      const esiApplies = gross <= ESI_THRESHOLD;
      const empEsi = esiApplies ? Math.round(gross * ESI_EMPLOYEE) : 0;
      const erEsi = esiApplies ? Math.round(gross * ESI_EMPLOYER) : 0;

      const deductions = empPf + empEsi;
      const net = gross - deductions;
      const cost = gross + erTotal + erEsi;

      return {
        summary: `Basic taken at ${basicPct}% of gross. Provident fund computed on ${inr(pfBase)}${
          ceiling && basic > EPF_CEILING ? " after applying the ₹15,000 ceiling" : ""
        }. ESI ${esiApplies ? "applies" : "does not apply"} at this gross.`,
        cards: [
          { label: "Take-home before income tax", value: inr(net), primary: true, note: "Gross less employee PF and ESI" },
          { label: "Total employee deductions", value: inr(deductions), note: "PF plus ESI" },
          { label: "Cost to employer", value: inr(cost), note: "Gross plus employer contributions" },
        ],
        lines: [
          {
            heading: "Earnings",
            rows: [
              { term: "Monthly gross", value: inr(gross) },
              { term: "Basic (and DA)", value: inr(basic), note: `${basicPct}% of gross` },
            ],
          },
          {
            heading: "Employee deductions",
            rows: [
              { term: "Provident fund", value: `− ${inr(empPf)}`, note: `12% of ${inr(pfBase)}` },
              {
                term: "ESI",
                value: esiApplies ? `− ${inr(empEsi)}` : "Not applicable",
                note: esiApplies
                  ? "0.75% of gross"
                  : `Gross is above the ${inr(ESI_THRESHOLD)} threshold`,
                muted: !esiApplies,
              },
              { term: "Take-home before income tax", value: inr(net), total: true },
            ],
          },
          {
            heading: "Employer contributions",
            rows: [
              { term: "Provident fund (EPF share)", value: inr(erPf), note: "12% of the PF base, less the pension share" },
              { term: "Pension scheme (EPS)", value: inr(eps), note: "8.33% of the PF base, capped at the ceiling" },
              {
                term: "ESI",
                value: esiApplies ? inr(erEsi) : "Not applicable",
                note: esiApplies ? "3.25% of gross" : "Employee is outside the ESI threshold",
                muted: !esiApplies,
              },
              { term: "Total cost to employer", value: inr(cost), total: true },
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
        { label: "Each head is rounded before it is summed", text: "Every statutory line is rounded to the nearest rupee where it is computed, and totals sum the rounded parts — which is how a payslip is actually produced." },
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
        a: "Provident fund is computed on basic rather than on gross. A higher basic means a larger PF base, a larger deduction and therefore a lower take-home — while increasing what accumulates in the provident fund and, at exit, the gratuity computed on last drawn basic.",
      },
    ],
    seo: {
      title: "Salary Breakup Calculator — Take-Home and Cost to Company",
      description:
        "Free salary calculator for India: enter a monthly gross to see basic, employee and employer provident fund, ESI, take-home before income tax and total cost to employer.",
      keywords: [
        "employee salary calculator",
        "salary calculation software",
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
    name: "PF Calculator",
    title: "EPF and pension contribution calculator",
    standfirst:
      "Provident fund is 12% on each side, but the employer's 12% splits between provident fund and pension — and the split is capped even when the contribution is not.",
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
        hint: "Basic salary plus dearness allowance — not gross.",
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

      const pfBase = ceiling ? Math.min(basic, EPF_CEILING) : basic;

      const empStatutory = Math.round(pfBase * EPF_RATE);
      const vpf = Math.round(pfBase * (vpfPct / 100));
      const empTotal = empStatutory + vpf;

      const erTotal = Math.round(pfBase * EPF_RATE);
      const eps = Math.round(Math.min(pfBase, EPF_CEILING) * EPS_RATE);
      const erPf = erTotal - eps;

      const monthly = empTotal + erTotal;

      return {
        summary: `Contributions computed on ${inr(pfBase)}${
          ceiling && basic > EPF_CEILING ? ", after applying the ₹15,000 ceiling" : ""
        }. The pension share is capped at the ceiling in every case.`,
        cards: [
          { label: "Employee contribution", value: inr(empTotal), primary: true, note: vpfPct > 0 ? `12% statutory plus ${vpfPct}% voluntary` : "12% of the PF base" },
          { label: "Employer contribution", value: inr(erTotal), note: "12%, split between EPF and pension" },
          { label: "Total into the account each month", value: inr(monthly), note: `${inr(monthly * 12)} over twelve months, before interest` },
        ],
        lines: [
          {
            heading: "Basis",
            rows: [
              { term: "Monthly basic (and DA)", value: inr(basic) },
              {
                term: "PF base used",
                value: inr(pfBase),
                note: ceiling
                  ? basic > EPF_CEILING
                    ? "Capped at the ₹15,000 statutory ceiling"
                    : "Basic is below the ceiling, so full basic is used"
                  : "Ceiling not applied — full basic used",
              },
            ],
          },
          {
            heading: "Employee side",
            rows: [
              { term: "Statutory provident fund", value: inr(empStatutory), note: "12% of the PF base" },
              {
                term: "Voluntary provident fund",
                value: vpfPct > 0 ? inr(vpf) : "None",
                note: vpfPct > 0 ? `${vpfPct}% of the PF base` : "No voluntary contribution set",
                muted: vpfPct === 0,
              },
              { term: "Total employee contribution", value: inr(empTotal), total: true },
            ],
          },
          {
            heading: "Employer side",
            rows: [
              { term: "Pension scheme (EPS)", value: inr(eps), note: "8.33% of the PF base, capped at ₹15,000" },
              { term: "Provident fund (EPF)", value: inr(erPf), note: "The balance of the employer's 12%" },
              { term: "Total employer contribution", value: inr(erTotal), total: true },
            ],
          },
          {
            heading: "Annual",
            rows: [
              { term: "Contributed over twelve months", value: inr(monthly * 12), note: "Before any interest credited by EPFO", total: true },
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
        { label: "Employer contributes 12%, split two ways", text: "8.33% of the base — capped at the ₹15,000 ceiling regardless of the employer's ceiling choice — goes to the Employees' Pension Scheme. The remainder goes to provident fund." },
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
    ],
    seo: {
      title: "EPF Calculator — Provident Fund and Pension Contributions",
      description:
        "PF calculation for Indian payroll: employee and employer provident fund at 12%, the 8.33% pension split, the ₹15,000 wage ceiling and voluntary provident fund.",
      keywords: ["PF calculation", "EPF calculator", "provident fund calculator", "EPS calculation", "payroll compliance"],
    },
    related: ["salary", "gratuity", "esi"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "esi",
    methodIntro:
      "The contribution rates are the easy half. The eligibility test — and the fact that it is fixed for a contribution period rather than checked monthly — is the half that costs employers money.",
    name: "ESI Calculator",
    title: "ESI eligibility and contribution calculator",
    standfirst:
      "ESI turns on a threshold, and the threshold is tested against gross wages — which means overtime and allowances can move an employee in or out of coverage.",
    intro: [
      "Employees' State Insurance is contributed at 0.75% by the employee and 3.25% by the employer, on gross wages, for employees within the statutory wage threshold of ₹21,000 a month.",
      "The part that catches payroll teams out is not the rate. It is that the wage base moves — overtime, night differentials and attendance-linked allowances all count towards gross — so an employee near the line can appear to cross it in a heavy month.",
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
        label: "Of which overtime and allowances",
        unit: "inr",
        initial: "0",
        min: 0,
        max: 10_000_000,
        hint: "Shown separately so you can see whether it is the variable pay pushing the employee over the line.",
      },
    ],
    compute: (v) => {
      const gross = num(v.gross);
      const variable = Math.min(num(v.overtime), gross);
      const fixed = gross - variable;

      const applies = gross <= ESI_THRESHOLD;
      const emp = applies ? Math.round(gross * ESI_EMPLOYEE) : 0;
      const er = applies ? Math.round(gross * ESI_EMPLOYER) : 0;

      const fixedOnlyApplies = fixed <= ESI_THRESHOLD;
      const crossedByVariable = fixedOnlyApplies && !applies;
      const headroom = ESI_THRESHOLD - gross;

      return {
        summary: applies
          ? `Gross of ${inr(gross)} is within the ${inr(ESI_THRESHOLD)} threshold, so ESI applies this month.`
          : `Gross of ${inr(gross)} is above the ${inr(ESI_THRESHOLD)} threshold, so ESI does not apply on a monthly test.`,
        cards: [
          {
            label: "ESI applicable this month",
            value: applies ? "Yes" : "No",
            primary: true,
            note: applies
              ? `${inr(Math.max(0, headroom))} of headroom before the threshold`
              : `${inr(Math.abs(headroom))} above the threshold`,
          },
          { label: "Employee contribution", value: applies ? inr(emp) : "—", note: applies ? "0.75% of gross" : "Outside the threshold" },
          { label: "Employer contribution", value: applies ? inr(er) : "—", note: applies ? "3.25% of gross" : "Outside the threshold" },
        ],
        lines: [
          {
            heading: "Wage base",
            rows: [
              { term: "Fixed wages", value: inr(fixed) },
              { term: "Overtime and allowances", value: inr(variable), muted: variable === 0 },
              { term: "Gross wages tested", value: inr(gross), total: true },
              { term: "Statutory threshold", value: inr(ESI_THRESHOLD), note: "Monthly gross wages" },
            ],
          },
          {
            heading: "Contributions",
            rows: [
              { term: "Employee — 0.75%", value: applies ? inr(emp) : "Not applicable", muted: !applies },
              { term: "Employer — 3.25%", value: applies ? inr(er) : "Not applicable", muted: !applies },
              { term: "Total remitted to ESIC", value: applies ? inr(emp + er) : "Nil", total: true },
            ],
          },
          {
            heading: "Interpretation",
            rows: [
              {
                term: crossedByVariable ? "Crossed the threshold on variable pay" : "Position on the threshold",
                value: crossedByVariable ? "Yes" : "No",
                note: crossedByVariable
                  ? "Fixed wages alone are within the threshold — it is this month's overtime and allowances that took gross above it. Contribution-period rules matter here."
                  : applies
                    ? "Within the threshold on fixed wages and total gross alike."
                    : "Above the threshold on fixed wages alone, not only because of variable pay.",
              },
            ],
          },
        ],
      };
    },
    method: {
      formula: "If Gross ≤ ₹21,000 → Employee = 0.75% × Gross, Employer = 3.25% × Gross",
      steps: [
        { label: "Total the wage base", text: "Gross wages for the month, including overtime, shift differentials and attendance-linked allowances. ESI is tested on gross rather than on basic." },
        { label: "Compare against the threshold", text: "Where monthly gross wages are ₹21,000 or less, the scheme applies. The threshold is inclusive — an employee at exactly ₹21,000 is covered." },
        { label: "Apply both rates to gross", text: "The employee contributes 0.75% and the employer 3.25%, each rounded to the nearest rupee and each computed on gross rather than on the capped figure." },
        { label: "Check whether variable pay moved the result", text: "If fixed wages alone are within the threshold but total gross is not, the crossing was caused by this month's overtime — which is exactly the case where contribution periods matter." },
      ],
      notes: [
        "This applies a monthly test. A live payroll must also respect contribution periods: an employee covered at the start of a period continues to contribute through it even if wages rise above the threshold within it.",
        "A system that re-tests applicability month by month, with no memory of the period, produces under-deduction, over-deduction and disrupted benefit entitlement in turn.",
        "Whether a specific allowance forms part of the wage base for ESI purposes is a question for your advisers or the ESIC.",
      ],
    },
    faqs: [
      {
        q: "My employee crossed ₹21,000 this month because of overtime. Do they stop contributing?",
        a: "Not necessarily, and this is the most common ESI error. ESI operates on contribution periods rather than isolated months. An employee covered at the start of a contribution period continues through that period even if wages rise above the threshold within it. This calculator applies a monthly test and flags when it was variable pay that caused the crossing, precisely so that case is visible.",
      },
      {
        q: "Is the threshold tested on gross or on basic?",
        a: "On gross wages. That is why overtime, shift differentials and attendance-linked allowances all affect ESI applicability, while provident fund — computed on basic — is unaffected by them.",
      },
      {
        q: "What does the employer's 3.25% pay for?",
        a: "Contributions fund the medical and cash benefits available to insured employees and their dependants under the scheme. The contribution is the employer's cost and does not reduce the employee's take-home.",
      },
    ],
    seo: {
      title: "ESI Calculator — Eligibility and Contribution",
      description:
        "ESI calculation for Indian payroll: test the ₹21,000 gross wage threshold, compute 0.75% employee and 3.25% employer contributions, and see when overtime moves the wage base.",
      keywords: ["ESI calculation", "ESIC contribution calculator", "payroll compliance", "employee state insurance"],
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
      "Gratuity is a statutory entitlement under the Payment of Gratuity Act rather than a discretionary benefit, and its formula is fixed. What varies between employers is the administration — how a claim is processed, how continuous service is computed across a break, and whether the liability has been provisioned before it falls due.",
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
        hint: "Basic salary plus dearness allowance as at the last working day — not gross.",
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
    ],
    compute: (v) => {
      const basic = num(v.basic);
      const years = num(v.years);
      const eligible = years >= GRATUITY_MIN_YEARS;
      const perYear = Math.round((GRATUITY_DAYS / GRATUITY_DIVISOR) * basic);
      const amount = eligible ? Math.round((GRATUITY_DAYS / GRATUITY_DIVISOR) * basic * years) : 0;
      const shortfall = GRATUITY_MIN_YEARS - years;

      return {
        summary: eligible
          ? `${years} completed years at ${inr(basic)} last drawn basic, on the statutory fifteen-days-per-year formula.`
          : `${years} completed ${years === 1 ? "year" : "years"} of service — ${shortfall} more ${shortfall === 1 ? "year is" : "years are"} required before gratuity becomes payable.`,
        cards: [
          {
            label: eligible ? "Gratuity payable" : "Not yet eligible",
            value: eligible ? inr(amount) : `${shortfall} more ${shortfall === 1 ? "year" : "years"}`,
            primary: true,
            note: eligible ? "On the statutory formula" : "Five years of continuous service required",
          },
          { label: "Accrued per completed year", value: inr(perYear), note: "Fifteen days' wages on a 26-day divisor" },
          {
            label: "Payable at five years",
            value: inr(Math.round((GRATUITY_DAYS / GRATUITY_DIVISOR) * basic * GRATUITY_MIN_YEARS)),
            note: "At the current last drawn basic",
          },
        ],
        lines: [
          {
            heading: "Inputs",
            rows: [
              { term: "Last drawn basic (and DA)", value: inr(basic) },
              { term: "Completed years of continuous service", value: `${years}` },
              { term: "Qualifying period", value: `${GRATUITY_MIN_YEARS} years`, note: eligible ? "Met" : "Not yet met" },
            ],
          },
          {
            heading: "Working",
            rows: [
              { term: "Daily wage basis", value: `${inr(basic)} ÷ ${GRATUITY_DIVISOR}`, note: "The Act uses a 26-day month" },
              { term: "Fifteen days' wages", value: inr(perYear), note: `${GRATUITY_DAYS} × daily wage, per completed year` },
              {
                term: eligible ? `× ${years} completed years` : "Not yet payable",
                value: eligible ? inr(amount) : "Nil",
                total: true,
                muted: !eligible,
              },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Gratuity = (15 ÷ 26) × Last drawn basic + DA × Completed years of service",
      steps: [
        { label: "Check the qualifying period", text: "Gratuity becomes payable on completing five years of continuous service. The Act also prescribes circumstances in which the five-year condition does not apply." },
        { label: "Derive a daily wage", text: "Last drawn basic plus dearness allowance divided by twenty-six. The Act uses a twenty-six day month, reflecting working days rather than calendar days." },
        { label: "Take fifteen days per completed year", text: "Fifteen times the daily wage gives the entitlement for one completed year of service." },
        { label: "Multiply by completed years", text: "Only completed years count in this calculation. How a part year is treated in a specific case, and how continuous service is computed across a break, are matters for your advisers." },
      ],
      notes: [
        "The statutory maximum payable under the Act is not applied here. Where a computed figure is large, confirm the current ceiling before settling.",
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
        a: "It is not payable, but the liability is accruing. The calculator shows what would be payable at five years on the current basic, which is the figure worth provisioning against — so that a long-serving employee reaching eligibility is a settlement rather than a surprise on the books.",
      },
    ],
    seo: {
      title: "Gratuity Calculator — Payment of Gratuity Act Formula",
      description:
        "Gratuity calculator for India: fifteen days' wages per completed year on a 26-day divisor, with the five-year continuous service rule and per-year accrual shown.",
      keywords: ["gratuity calculator", "payment of gratuity act", "employee gratuity calculation", "full and final settlement"],
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
      const pfBase = ceiling ? Math.min(basic, EPF_CEILING) : basic;

      const erPfTotal = Math.round(pfBase * EPF_RATE);
      const eps = Math.round(Math.min(pfBase, EPF_CEILING) * EPS_RATE);
      const erPf = erPfTotal - eps;

      const esiApplies = gross <= ESI_THRESHOLD;
      const erEsi = esiApplies ? Math.round(gross * ESI_EMPLOYER) : 0;

      const perHead = gross + erPfTotal + erEsi;
      const salaryBill = gross * n;
      const pfBill = erPfTotal * n;
      const esiBill = erEsi * n;
      const total = perHead * n;
      const loading = ((perHead - gross) / gross) * 100;

      return {
        summary: `${n.toLocaleString("en-IN")} employees at ${inr(gross)} average gross. Employer statutory contributions add ${loading.toFixed(1)}% on top of the salary bill.`,
        cards: [
          { label: "Total monthly payroll cost", value: inr(total), primary: true, note: `${inr(perHead)} per employee` },
          { label: "Salary bill", value: inr(salaryBill), note: "Gross before employer contributions" },
          { label: "Employer statutory cost", value: inr(pfBill + esiBill), note: `${loading.toFixed(1)}% on top of gross` },
        ],
        lines: [
          {
            heading: "Per employee",
            rows: [
              { term: "Monthly gross", value: inr(gross) },
              { term: "Basic (and DA)", value: inr(basic), note: `${basicPct}% of gross` },
              { term: "Employer provident fund", value: inr(erPf), note: "Employer 12% less the pension share" },
              { term: "Employer pension (EPS)", value: inr(eps), note: "8.33%, capped at the ₹15,000 ceiling" },
              {
                term: "Employer ESI",
                value: esiApplies ? inr(erEsi) : "Not applicable",
                note: esiApplies ? "3.25% of gross" : "Average gross is above the ₹21,000 threshold",
                muted: !esiApplies,
              },
              { term: "Cost per employee", value: inr(perHead), total: true },
            ],
          },
          {
            heading: `Across ${n.toLocaleString("en-IN")} employees`,
            rows: [
              { term: "Salary bill", value: inr(salaryBill) },
              { term: "Provident fund and pension", value: inr(pfBill) },
              { term: "ESI", value: esiApplies ? inr(esiBill) : "Nil", muted: !esiApplies },
              { term: "Total monthly cost", value: inr(total), total: true },
              { term: "Annualised", value: inr(total * 12), note: "Twelve months at this run rate" },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Cost per employee = Gross + (12% × PF base) + (3.25% × Gross, where ESI applies)",
      steps: [
        { label: "Compute one employee first", text: "The statutory rules are per employee, so the calculation runs once for the average and is then multiplied by headcount." },
        { label: "Add the employer's provident fund", text: "12% of the PF base, of which 8.33% capped at the ceiling goes to the pension scheme. Both are employer cost." },
        { label: "Add ESI where the threshold is met", text: "3.25% of gross, where average gross is within the ₹21,000 threshold." },
        { label: "Multiply by headcount", text: "Because every input is an average, run the calculator once per salary band for a workforce with meaningfully different pay levels." },
      ],
      notes: [
        "This is an averaged figure. A workforce spanning the ESI threshold will not be represented accurately by a single average — run each band separately.",
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
    ],
    seo: {
      title: "Payroll Cost Calculator — Total Monthly Employer Cost",
      description:
        "Calculate total monthly payroll cost for a team in India: salary bill plus employer provident fund, pension and ESI contributions, per employee and annualised.",
      keywords: ["payroll cost calculator", "employer cost calculator", "payroll management system", "salary budget calculator"],
    },
    related: ["salary", "esi", "plan-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "plan-cost",
    methodIntro:
      "Published rate times headcount, and nothing else. No modelled savings, no projected return — the arithmetic is deliberately trivial so the number is checkable.",
    name: "HRMagix Plan Cost",
    title: "HRMagix subscription cost calculator",
    standfirst:
      "The published per-employee rate multiplied by your headcount. No modelled savings, no projected return, and no discount that appears when you ask.",
    intro: [
      "HRMagix publishes its rates per employee per month across three plans. This calculator does one thing: multiplies the published rate by the number of people you would put on the platform.",
      "Enterprise is quoted rather than listed, because it depends on entity count, module scope and whether single sign-on and a dedicated success manager are required — so this calculator returns no figure for it.",
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
              heading: "Why there is no number here",
              rows: [
                {
                  term: "Enterprise pricing",
                  value: "On application",
                  note: "It is quoted because it depends on entity count, module scope and whether single sign-on and a dedicated success manager are required — not because there is a number we would rather you did not see.",
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
            heading: "Working",
            rows: [
              { term: "Employees", value: n.toLocaleString("en-IN") },
              { term: "Published rate", value: `${usd(plan.rate)} per employee per month` },
              { term: "Monthly subscription", value: usd(monthly), total: true },
              { term: "Annualised", value: usd(monthly * 12) },
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
    ],
    seo: {
      title: "HRMagix Plan Cost Calculator — Per Employee Pricing",
      description:
        "Work out your HRMagix subscription cost: published per-employee monthly rates across the Starter, Growth and Enterprise plans, multiplied by your headcount.",
      keywords: ["HRMS pricing", "HR software cost calculator", "payroll software pricing", "HR SaaS platform"],
    },
    related: ["payroll-cost", "salary", "gratuity"],
  },
];

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
    why: "LWF runs on state calendars — half-yearly in some states, annual in others — on dates unrelated to the payroll cycle.",
    needs: "The current state-notified amounts and due dates for each location.",
  },
];

/**
 * Additional calculators (set A): leave encashment, notice pay, HRA exemption,
 * statutory bonus, attrition, absenteeism, LOP, pro-rata salary and arrears.
 *
 * Rules for this file:
 *   - Only formulas with a statutory or standard basis. Where practice varies
 *     by employer (divisors, wage basis), the user chooses and the page says
 *     that the choice is policy, not law.
 *   - Thresholds that can be revised by notification (bonus eligibility and
 *     calculation ceilings) are inputs with their commonly cited central
 *     values as defaults, never hard-coded truths.
 *   - Runtime values are not imported from ./calculators (circular import).
 */

import type { Calculator } from "./calculators";
import { inr, safe, RULES } from "./statutory";
import { HRA_RULES, HRA_CURRENT, LEAVE_ENCASHMENT_EXEMPT_LIMIT, BONUS_RULES } from "./rules/setA";

/* ---------------- Local helpers ---------------- */

const num = safe;
const pct = (r: number) => `${+(r * 100).toFixed(2)}%`;
const fmt = (n: number, dp = 2) => `${+safe(n).toFixed(dp)}`;
const days = (n: number) => `${fmt(n)} ${n === 1 ? "day" : "days"}`;

/** Divisor choices shared by the per-day salary calculators. */
const DIV_CAL = "Calendar days in the month";
const DIV_WORK = "Working days in the month";
const DIV_30 = "Fixed 30 days";
const DIV_26 = "Fixed 26 days";

function pickDivisor(choice: string, daysInMonth: number, workingDays: number) {
  if (choice === DIV_WORK) return { divisor: Math.floor(workingDays), basis: "working days in the month" };
  if (choice === DIV_30) return { divisor: 30, basis: "a fixed 30-day month" };
  if (choice === DIV_26) return { divisor: 26, basis: "a fixed 26-day month" };
  return { divisor: Math.floor(daysInMonth), basis: "calendar days in the month" };
}

const CITY_OLD4 = "Delhi, Mumbai, Kolkata or Chennai";
const CITY_NEW4 = "Bengaluru, Hyderabad, Pune or Ahmedabad";
const CITY_OTHER = "Any other city";
const PF_CAPPED = "PF wages capped at ₹15,000";
const PF_FULL = "Full basic + DA (above ceiling)";

/* ================================================================== */

export const calculatorsMoreA: Calculator[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "leave-encashment",
    methodIntro:
      "A per-day wage, multiplied by the days being encashed. The only real decision is the divisor that turns a monthly wage into a daily one, and that is set by your leave policy.",
    name: "Leave Encashment Calculator",
    title: "Leave encashment calculator",
    standfirst:
      "Turn an unused earned-leave balance into a rupee amount, using the wage and the day-rate divisor your leave policy specifies.",
    intro: [
      "Leave encashment pays an employee for earned leave they have not taken, either at exit or, where the policy allows, during service. The arithmetic is a daily wage multiplied by the days encashed.",
      "What differs between employers is the wage the day rate is built on (basic and DA, or gross) and whether the month is divided by 26 or 30. This leave encashment calculator lets you set both so the result matches your own policy.",
    ],
    icon: "calendar",
    fields: [
      {
        name: "wage",
        label: "Monthly wage for encashment",
        unit: "inr",
        initial: "30000",
        min: 1,
        max: 10_000_000,
        hint: "The component your policy encashes on: often basic plus DA, sometimes gross. Check the leave policy or appointment letter.",
      },
      {
        name: "balance",
        label: "Leave days to encash",
        unit: "count",
        initial: "18",
        min: 0,
        max: 1000,
        hint: "Unused earned leave eligible for encashment. Half days are allowed.",
      },
      {
        name: "divisor",
        label: "Day-rate divisor",
        unit: "count",
        initial: DIV_30,
        min: 0,
        max: 0,
        options: [DIV_30, DIV_26],
        hint: "30 treats every day of the month as paid. 26 excludes weekly offs and gives a higher day rate. Use what your policy states.",
      },
    ],
    compute: (v) => {
      const wage = num(v.wage);
      const bal = num(v.balance);
      const divisor = String(v.divisor) === DIV_26 ? 26 : 30;
      const perDay = wage / divisor;
      const amount = Math.round(perDay * bal);
      const other = divisor === 26 ? 30 : 26;
      const otherAmount = Math.round((wage / other) * bal);

      return {
        summary: `${inr(wage)} ÷ ${divisor} = ${inr(perDay)} a day, for ${days(bal)} of leave.`,
        cards: [
          { label: "Leave encashment amount", value: inr(amount), primary: true, note: `${days(bal)} × ${inr(perDay)}` },
          { label: "Per-day wage", value: inr(perDay), note: `Monthly wage ÷ ${divisor}` },
          { label: `Same balance on a ${other}-day divisor`, value: inr(otherAmount), note: "For comparison only" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly wage", value: inr(wage) },
              { term: "Days encashed", value: fmt(bal) },
              { term: "Divisor", value: `${divisor}`, note: divisor === 26 ? "Working-day month (policy)" : "Calendar month (policy)" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Per-day wage", value: inr(perDay), note: `${inr(wage)} ÷ ${divisor}` },
              { term: "Encashment", value: inr(amount), note: `${inr(perDay)} × ${fmt(bal)} days, rounded to the rupee` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Leave encashment (before tax)", value: inr(amount), total: true },
              {
                term: "Tax-exempt ceiling at retirement / resignation",
                value: inr(LEAVE_ENCASHMENT_EXEMPT_LIMIT),
                note: "s.10(10AA)(ii), non-government employees, lifetime limit from 1 Apr 2023. Exempt amount is the least of four limits; not computed here.",
                muted: true,
              },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Leave encashment = (Monthly wage ÷ Divisor) × Leave days encashed, where the divisor is 26 or 30 as your policy states",
      steps: [
        { label: "Identify the encashment wage", text: "Leave policies usually encash on basic plus dearness allowance, and some on gross. Use the component your policy names, as at the date of encashment." },
        { label: "Convert it to a daily rate", text: "Divide by 30 for a calendar-month day rate, or by 26 where the policy treats weekly offs as unpaid days for this purpose. The 26-day figure is higher per day." },
        { label: "Multiply by eligible days", text: "Only the balance your policy allows to be encashed. Many policies cap the days that can be carried forward or encashed in a year." },
      ],
      notes: [
        "Neither divisor is prescribed as a universal rule. For factories, the Factories Act 1948 (s.79 and s.80) governs annual leave with wages and how the leave wage is worked out; elsewhere the state Shops and Establishments Act and your own policy apply.",
        "Income tax on encashment received at retirement or resignation has a separate exemption under s.10(10AA) of the Income-tax Act. For non-government employees the limit is ₹25,00,000 over a lifetime (CBDT notification, from 1 April 2023). This calculator does not compute tax.",
        "Whether leave lapses, carries forward or must be encashed at exit is a policy and state-law question. Check the rule that applies to your establishment.",
      ],
    },
    faqs: [
      {
        q: "Should I divide by 26 or by 30?",
        a: "Use the divisor your leave policy or appointment letter states. Dividing by 30 spreads the monthly wage across every calendar day. Dividing by 26 spreads it across working days only, so each day is worth more. Apply the same choice to everyone covered by the policy.",
      },
      {
        q: "Is leave encashment calculated on basic or gross salary?",
        a: "It depends on the policy. Many employers encash on basic plus DA; some use gross. The wage you enter here should be the one your policy names, as at the date of encashment.",
      },
      {
        q: "Is leave encashment paid on sick or casual leave?",
        a: "Usually only earned or privilege leave is encashable. Sick and casual leave typically lapse at year end, but the policy decides, subject to the state law that applies.",
      },
      {
        q: "Is leave encashment taxable?",
        a: "Encashment during service is taxed as salary. Encashment at retirement or resignation may be partly exempt under s.10(10AA) of the Income-tax Act, within a notified limit. Check the current limit before computing tax.",
      },
      {
        q: "Does leave encashment form part of the full and final settlement?",
        a: "Yes, where the policy allows unused leave to be encashed at exit it is one of the earnings lines in the settlement, alongside salary for days worked and, where eligible, gratuity.",
      },
    ],
    seo: {
      title: "Leave Encashment Calculator: Value of Unused Earned Leave",
      description:
        "Leave encashment calculator for Indian employers: convert an earned leave balance into rupees using your policy's wage and a 26 or 30-day divisor.",
      keywords: ["leave encashment calculator", "leave encashment formula", "earned leave encashment", "leave encashment on resignation"],
    },
    related: ["gratuity", "notice-pay", "pro-rata-salary"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "notice-pay",
    methodIntro:
      "Notice pay is the unserved part of the notice period, priced at a daily rate. The contract decides the wage and the day count; the calculator only does the arithmetic consistently.",
    name: "Notice Pay Calculator",
    title: "Notice period recovery and payment in lieu calculator",
    standfirst:
      "Work out the amount recovered from an employee who leaves before serving notice, or paid by an employer who releases someone early.",
    intro: [
      "When notice is cut short, someone owes the other side for the days not served. If the employee leaves early, the employer usually recovers notice pay in the final settlement. If the employer ends employment without full notice, it pays salary in lieu of the unserved days.",
      "This notice period recovery calculator uses the wage and day basis your employment contract specifies, and works in both directions.",
    ],
    icon: "scale",
    fields: [
      {
        name: "wage",
        label: "Monthly wage for notice pay",
        unit: "inr",
        initial: "40000",
        min: 1,
        max: 10_000_000,
        hint: "The amount the contract names for notice: commonly gross monthly salary, sometimes basic. Use what the contract says.",
      },
      {
        name: "notice",
        label: "Notice period required (days)",
        unit: "count",
        initial: "60",
        min: 0,
        max: 365,
        integer: true,
        hint: "As per the appointment letter or standing orders. Convert months to days the way your contract does.",
      },
      {
        name: "served",
        label: "Days of notice actually served",
        unit: "count",
        initial: "30",
        min: 0,
        max: 365,
        integer: true,
        hint: "Days from the notice date to the last working day, including any leave set off against notice if your policy allows.",
      },
      {
        name: "divisor",
        label: "Day-rate divisor",
        unit: "count",
        initial: DIV_30,
        min: 0,
        max: 0,
        options: [DIV_30, DIV_26],
        hint: "Most contracts price notice on a 30-day month. Some use 26 working days. Use the contract's basis.",
      },
      {
        name: "direction",
        label: "Who cut the notice short",
        unit: "count",
        initial: "Employee left early (recovery)",
        min: 0,
        max: 0,
        options: ["Employee left early (recovery)", "Employer released early (payment in lieu)"],
      },
    ],
    compute: (v) => {
      const wage = num(v.wage);
      const notice = Math.floor(num(v.notice));
      const served = Math.min(Math.floor(num(v.served)), notice);
      const divisor = String(v.divisor) === DIV_26 ? 26 : 30;
      const recovery = String(v.direction).startsWith("Employee");
      const shortfall = Math.max(0, notice - served);
      const perDay = wage / divisor;
      const amount = Math.round(perDay * shortfall);

      return {
        summary:
          shortfall === 0
            ? "The full notice period has been served, so nothing is recovered or paid in lieu."
            : `${shortfall} unserved days × ${inr(perDay)} (${inr(wage)} ÷ ${divisor}) ${recovery ? "recovered from the employee" : "paid by the employer"}.`,
        cards: [
          {
            label: recovery ? "Notice pay recoverable from employee" : "Payment in lieu of notice",
            value: inr(amount),
            primary: true,
            note: `${shortfall} days × ${inr(perDay)}`,
          },
          { label: "Unserved notice", value: days(shortfall), note: `${notice} required − ${served} served` },
          { label: "Per-day rate", value: inr(perDay), note: `Monthly wage ÷ ${divisor}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly wage", value: inr(wage) },
              { term: "Notice required", value: days(notice) },
              { term: "Notice served", value: days(served), note: num(v.served) > notice ? "Limited to the notice required" : undefined },
              { term: "Divisor", value: `${divisor}`, note: "Contract basis" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Unserved days", value: days(shortfall), note: `${notice} − ${served}` },
              { term: "Per-day rate", value: inr(perDay), note: `${inr(wage)} ÷ ${divisor}` },
              { term: "Notice pay", value: inr(amount), note: `${inr(perDay)} × ${shortfall}, rounded to the rupee` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              {
                term: recovery ? "Recovered in the final settlement" : "Paid in lieu of notice",
                value: inr(amount),
                total: true,
              },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Notice pay = (Monthly wage ÷ Divisor) × (Notice days required − Notice days served)",
      steps: [
        { label: "Find the unserved days", text: "Required notice less the days actually served. If the full period was served, nothing is due either way." },
        { label: "Take the contract's daily rate", text: "Divide the wage the contract names by 30, or by 26 where the contract prices notice on working days." },
        { label: "Multiply", text: "The result is recovered from the employee's final settlement where they left early, or paid to them where the employer released them early." },
      ],
      notes: [
        "Notice periods and notice pay are contractual, and for workmen also governed by the Industrial Disputes Act, the Industrial Employment (Standing Orders) Act and state Shops and Establishments Acts. No single statutory divisor applies to all employers.",
        "An employer may waive recovery in whole or part. Recovery is normally adjusted against dues in the full and final settlement rather than demanded separately.",
        "Retrenchment of a workman has its own notice and compensation conditions under the Industrial Disputes Act. Take advice for those cases.",
      ],
    },
    faqs: [
      {
        q: "Is notice pay recovered on gross or basic salary?",
        a: "Whatever the employment contract names. Many contracts specify gross monthly salary; some specify basic. If the contract is silent, the policy that has been applied consistently in the past is the practical reference, and an adviser should confirm it.",
      },
      {
        q: "Can leave be adjusted against the notice period?",
        a: "Some policies allow earned leave to be set off against unserved notice, which reduces the shortfall. Others do not. Enter served days after any adjustment your policy permits.",
      },
      {
        q: "Does an employer have to pay notice pay when it ends employment early?",
        a: "Where the contract or applicable law requires notice and the employer does not give it in full, salary in lieu of the unserved days is the usual remedy. For workmen under the Industrial Disputes Act, retrenchment carries additional conditions.",
      },
      {
        q: "Is GST payable on notice pay recovered from an employee?",
        a: "This has been a disputed point with differing rulings. Take current tax advice before deciding how to treat it; the calculator computes only the amount.",
      },
      {
        q: "Where does notice recovery appear in the settlement?",
        a: "As a deduction in the full and final settlement, set against salary for days worked, leave encashment and any other dues.",
      },
    ],
    seo: {
      title: "Notice Period Recovery Calculator: Notice Pay and Shortfall",
      description:
        "Notice period recovery calculator: price unserved notice days at your contract's daily rate, for employee buyouts or employer payment in lieu of notice.",
      keywords: ["notice period recovery calculator", "notice pay calculator", "notice period buyout calculator", "payment in lieu of notice"],
    },
    related: ["leave-encashment", "pro-rata-salary", "gratuity"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "hra-exemption",
    methodIntro:
      "Three amounts are computed from the same year's figures, and the lowest of them is exempt. Everything turns on the definition of salary used in two of the three.",
    name: "House Rent Allowance (HRA) Exemption Calculator",
    title: "House rent allowance (HRA) exemption calculator (old tax regime)",
    standfirst:
      "The exempt part of house rent allowance under section 10(13A) and Rule 2A: the least of actual HRA, rent above 10% of salary, and 50% or 40% of salary.",
    intro: [
      "House rent allowance is partly exempt from income tax for a salaried employee who pays rent for accommodation they live in, under s.10(13A) of the Income-tax Act read with Rule 2A. The exempt amount is the least of three figures, and the rest of the HRA is taxable.",
      "The exemption is available only under the old tax regime. An employee who has opted for the new regime under s.115BAC cannot claim it, so this HRA exemption calculator is useful only for old-regime employees.",
    ],
    icon: "pin",
    fields: [
      {
        name: "salary",
        label: "Monthly salary for HRA (basic + DA)",
        unit: "inr",
        initial: "40000",
        min: 1,
        max: 10_000_000,
        hint: "Basic plus DA where DA forms part of retirement benefits, plus any commission fixed as a percentage of turnover. Not gross.",
      },
      {
        name: "hra",
        label: "Monthly HRA received",
        unit: "inr",
        initial: "20000",
        min: 0,
        max: 10_000_000,
      },
      {
        name: "rent",
        label: "Monthly rent paid",
        unit: "inr",
        initial: "18000",
        min: 0,
        max: 10_000_000,
        hint: "Rent actually paid for the accommodation the employee lives in.",
      },
      {
        name: "city",
        label: "City of the rented home",
        unit: "count",
        initial: CITY_OLD4,
        min: 0,
        max: 0,
        options: [CITY_OLD4, CITY_NEW4, CITY_OTHER],
        hint: "From FY 2026-27 (Income-tax Rules 2026) the 50% limit covers Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad; 40% elsewhere. Up to FY 2025-26 only the first four got 50%.",
      },
      {
        name: "year",
        label: "Financial year",
        unit: "count",
        initial: HRA_CURRENT,
        min: 0,
        max: 0,
        options: Object.keys(HRA_RULES).reverse(),
        hint: "The year the rent was paid. The 50% city list changed from 1 April 2026.",
      },
      {
        name: "months",
        label: "Months in the year HRA was received and rent paid",
        unit: "count",
        initial: "12",
        min: 1,
        max: 12,
        integer: true,
      },
    ],
    compute: (v) => {
      const months = Math.max(1, Math.min(12, Math.floor(num(v.months))));
      const salary = num(v.salary) * months;
      const hra = num(v.hra) * months;
      const rent = num(v.rent) * months;
      const yearKey = (String(v.year) in HRA_RULES ? String(v.year) : HRA_CURRENT) as keyof typeof HRA_RULES;
      const rule = HRA_RULES[yearKey];
      const cityStr = String(v.city);
      const cityGroup = cityStr === CITY_NEW4 ? "new4" : cityStr === CITY_OTHER || cityStr === "Non-metro" ? "other" : "old4";
      const metro = cityGroup === "old4" || (cityGroup === "new4" && rule.highRateCities.length > 4);
      const capRate = metro ? rule.highRate : rule.otherRate;

      const a = hra;
      const b = Math.max(0, rent - rule.rentExcessPct * salary);
      const c = capRate * salary;
      const exempt = Math.round(Math.min(a, b, c));
      const taxable = Math.max(0, Math.round(hra) - exempt);
      const least = exempt === Math.round(a) ? "actual HRA" : exempt === Math.round(b) ? "rent minus 10% of salary" : `${pct(capRate)} of salary`;

      return {
        summary:
          rent === 0
            ? "No rent is paid, so no HRA exemption is available and the whole HRA is taxable."
            : `Least of the three amounts is ${least}, over ${months} ${months === 1 ? "month" : "months"} · old regime only.`,
        cards: [
          { label: "Exempt HRA for the period", value: inr(exempt), primary: true, note: `Least of three · ${months} months` },
          { label: "Taxable HRA", value: inr(taxable), note: "HRA received − exempt HRA" },
          { label: "Exempt HRA per month", value: inr(exempt / months), note: "Average over the period" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: `Salary (basic + DA) × ${months}`, value: inr(salary) },
              { term: `HRA received × ${months}`, value: inr(hra) },
              { term: `Rent paid × ${months}`, value: inr(rent) },
              { term: "Rule version", value: yearKey, note: `${pct(capRate)} limit for ${cityGroup === "other" ? "this city" : cityStr}` },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "1. Actual HRA received", value: inr(a) },
              { term: "2. Rent paid − 10% of salary", value: inr(b), note: `${inr(rent)} − ${inr(rule.rentExcessPct * salary)}, not below zero` },
              { term: `3. ${pct(capRate)} of salary`, value: inr(c), note: metro ? "50% city" : "40%, other cities" },
              { term: "Exempt HRA (least of the three)", value: inr(exempt), total: true },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Exempt HRA", value: inr(exempt), total: true },
              { term: "Taxable HRA", value: inr(taxable) },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Exempt HRA = least of (Actual HRA; Rent paid − 10% of salary; 50% of salary in a notified city or 40% elsewhere), where salary = basic + DA (retirement-linked) + turnover commission",
      steps: [
        { label: "Fix the salary definition", text: "For Rule 2A, salary means basic plus dearness allowance where the terms of employment count DA for retirement benefits, plus commission fixed as a percentage of turnover. Other allowances are excluded." },
        { label: "Compute the three amounts", text: "Actual HRA received for the period; rent paid less 10% of salary for the same period; and 50% of salary for the notified cities (from FY 2026-27: Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad; earlier years only the first four), 40% elsewhere." },
        { label: "Take the least", text: "The lowest of the three is exempt under s.10(13A). The remainder of the HRA is added to taxable salary." },
        { label: "Work period by period", text: "Each amount is computed for the months in which HRA was received and rent paid. If salary, HRA, rent or city changes during the year, compute each stretch separately and add them." },
      ],
      notes: [
        "Applies under the old tax regime only. Employees in the new regime under s.115BAC cannot claim the HRA exemption.",
        "The exemption is not available for accommodation the employee owns, or where no rent is paid. Employers commonly require the landlord's PAN where annual rent exceeds the limit set in the current CBDT guidance; check the current limit.",
        "This computes the exemption only. It does not compute income tax, which depends on slabs, other deductions and the regime chosen.",
      ],
    },
    faqs: [
      {
        q: "Can I claim HRA exemption under the new tax regime?",
        a: "No. The s.10(13A) exemption is one of the benefits given up under the new regime in s.115BAC. If an employee has opted for the new regime, the whole HRA is taxable.",
      },
      {
        q: "Which cities count as metro for HRA?",
        a: "From 1 April 2026 (FY 2026-27), the Income-tax Rules 2026 give the 50% limit for Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad. Up to FY 2025-26, Rule 2A gave 50% only for Delhi, Mumbai, Kolkata and Chennai. Every other city uses 40%.",
      },
      {
        q: "What is salary for the HRA calculation?",
        a: "Basic plus dearness allowance where DA forms part of retirement benefits, plus any commission fixed as a percentage of turnover. Gross salary and other allowances are not included.",
      },
      {
        q: "What if my rent is less than 10% of my salary?",
        a: "Then the second amount is zero, so the exemption is zero and all HRA is taxable.",
      },
      {
        q: "My rent changed in the middle of the year. How should I calculate?",
        a: "Compute each period separately with the months it covers and add the exempt amounts. The calculator handles one set of figures at a time, so run it once per period.",
      },
    ],
    seo: {
      title: "HRA Exemption Calculator: Section 10(13A) Old Regime",
      description:
        "HRA exemption calculator for salaried employees on the old tax regime: least of actual HRA, rent minus 10% of salary, and 50% or 40% of salary.",
      keywords: ["hra exemption calculator", "hra calculation", "house rent allowance exemption", "section 10(13a) hra"],
    },
    related: ["salary", "ctc", "pro-rata-salary"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "statutory-bonus",
    methodIntro:
      "Two tests and a rate. Is the employee eligible on their wage, what wage is the bonus calculated on, and what percentage between the statutory minimum and maximum applies.",
    name: "Statutory Bonus Calculator",
    title: "Statutory bonus calculator under the Payment of Bonus Act",
    standfirst:
      "Bonus between 8.33% and 20% of salary or wage, calculated on the lower of actual wage and the calculation ceiling, for employees within the eligibility threshold.",
    intro: [
      "The Payment of Bonus Act 1965 requires covered establishments to pay an annual bonus of at least 8.33% of the salary or wage earned in the accounting year, up to a maximum of 20%, to employees whose wage is within the eligibility threshold and who have worked at least 30 days in the year.",
      "The eligibility threshold and calculation ceiling are set by the Act and can be changed by amendment, and the minimum wage that may raise the ceiling is notified by the appropriate government. This bonus calculator for India takes all of them as inputs so you can set the values that apply to you.",
    ],
    icon: "gift",
    fields: [
      {
        name: "salary",
        label: "Monthly salary or wage (basic + DA)",
        unit: "inr",
        initial: "18000",
        min: 1,
        max: 10_000_000,
        hint: "Wages under the Code on Wages: basic + DA + retaining allowance, plus any excluded allowances above 50% of total pay. Overtime and bonus are excluded.",
      },
      {
        name: "months",
        label: "Months of salary earned in the accounting year",
        unit: "count",
        initial: "12",
        min: 0,
        max: 12,
        hint: "Bonus is a share of salary earned in the year, so a part-year employee earns a proportionate bonus.",
      },
      {
        name: "rate",
        label: "Bonus rate",
        unit: "percent",
        initial: "8.33",
        min: 8.33,
        max: 20,
        hint: "Statutory minimum 8.33% (s.10), maximum 20% (s.11). Above the minimum depends on allocable surplus.",
      },
      {
        name: "threshold",
        label: "Eligibility threshold (monthly salary)",
        unit: "inr",
        initial: "21000",
        min: 1,
        max: 10_000_000,
        hint: "Commonly cited central figure: ₹21,000 a month (s.2(13), as amended in 2015). Verify the current value before relying on it.",
      },
      {
        name: "ceiling",
        label: "Calculation ceiling (monthly)",
        unit: "inr",
        initial: "7000",
        min: 1,
        max: 10_000_000,
        hint: "Commonly cited central figure: ₹7,000 a month (s.12). It is raised to the scheduled-employment minimum wage where that is higher.",
      },
      {
        name: "minWage",
        label: "Applicable monthly minimum wage (optional)",
        unit: "inr",
        initial: "0",
        min: 0,
        max: 10_000_000,
        hint: "Minimum wages are notified by the state (or Centre) and change, often twice a year. Enter the current figure for the employment, or leave at 0.",
      },
      {
        name: "daysWorked",
        label: "Days worked in the accounting year",
        unit: "count",
        initial: "240",
        min: 0,
        max: 366,
        integer: true,
        hint: "At least 30 working days in the year are needed to be eligible for statutory bonus.",
      },
    ],
    compute: (v) => {
      const salary = num(v.salary);
      const months = Math.min(12, num(v.months));
      const rate = Math.min(BONUS_RULES.maxRate, Math.max(BONUS_RULES.minRate, num(v.rate))) / 100;
      const threshold = num(v.threshold) || BONUS_RULES.eligibilityCeiling;
      const ceiling = num(v.ceiling) || BONUS_RULES.calculationCeiling;
      const minWage = num(v.minWage);
      // Older links without the field are treated as having met the 30-day test.
      const daysRaw = v.daysWorked === undefined || v.daysWorked === "" ? 365 : num(v.daysWorked);
      const daysOk = daysRaw >= BONUS_RULES.minDaysWorked;

      const wageOk = salary > 0 && salary <= threshold;
      const eligible = wageOk && daysOk && months > 0;
      const effectiveCeiling = Math.max(ceiling, minWage);
      const bonusWage = Math.min(salary, effectiveCeiling);
      const capped = salary > effectiveCeiling;
      const annualWage = bonusWage * months;
      const bonus = eligible ? Math.round(annualWage * rate) : 0;
      const minBonus = eligible ? Math.round(annualWage * 0.0833) : 0;
      const maxBonus = eligible ? Math.round(annualWage * 0.2) : 0;

      return {
        summary: eligible
          ? `Salary ${inr(salary)} is within the ${inr(threshold)} threshold · bonus on ${inr(bonusWage)} a month${capped ? ` (ceiling ${inr(effectiveCeiling)})` : ""} × ${fmt(months)} months at ${pct(rate)}.`
          : !wageOk
            ? `Salary ${inr(salary)} is above the ${inr(threshold)} eligibility threshold, so the law does not require a bonus.`
            : !daysOk
              ? `Fewer than ${BONUS_RULES.minDaysWorked} days worked in the year, so the employee is not eligible for statutory bonus.`
              : "No salary was earned in the year, so there is no bonus.",
        cards: [
          {
            label: eligible ? "Statutory bonus for the year" : "Not eligible under the Act",
            value: eligible ? inr(bonus) : "Not applicable",
            primary: true,
            note: eligible ? `${pct(rate)} × ${inr(annualWage)}` : "Any bonus paid is contractual, not statutory",
          },
          { label: "Monthly wage used", value: inr(bonusWage), note: capped ? `Capped at ${inr(effectiveCeiling)}` : "Actual salary, below the ceiling" },
          { label: "Range at 8.33% to 20%", value: eligible ? `${inr(minBonus)} to ${inr(maxBonus)}` : "Not applicable", note: "Statutory minimum and maximum" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly salary (wages)", value: inr(salary) },
              { term: "Eligibility threshold", value: inr(threshold), note: wageOk ? "Within threshold" : "Above threshold" },
              { term: "Days worked", value: fmt(daysRaw, 0), note: daysOk ? `At least ${BONUS_RULES.minDaysWorked}` : `Below ${BONUS_RULES.minDaysWorked}: not eligible` },
              { term: "Months earned", value: fmt(months) },
              { term: "Calculation ceiling", value: inr(ceiling) },
              { term: "Minimum wage entered", value: minWage ? inr(minWage) : "Not entered", muted: !minWage },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Ceiling applied", value: inr(effectiveCeiling), note: "Higher of calculation ceiling and minimum wage" },
              { term: "Monthly wage for bonus", value: inr(bonusWage), note: "Lower of actual salary and ceiling applied" },
              { term: "Annual wage for bonus", value: inr(annualWage), note: `${inr(bonusWage)} × ${fmt(months)} months` },
              { term: `Bonus at ${pct(rate)}`, value: eligible ? inr(bonus) : "Not applicable", note: eligible ? `${inr(annualWage)} × ${pct(rate)}` : undefined, muted: !eligible },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: `Bonus at ${pct(rate)}`, value: eligible ? inr(bonus) : "Not applicable", total: true, muted: !eligible },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Bonus = Rate (8.33% to 20%) × min(Monthly salary, max(Calculation ceiling, Minimum wage)) × Months earned, if Monthly salary ≤ Eligibility threshold",
      steps: [
        { label: "Test eligibility", text: "An employee drawing salary or wage up to the eligibility threshold in s.2(13) is covered, provided they worked at least 30 working days in the accounting year (s.8). Disqualifications under s.9 (such as dismissal for fraud) are not tested here." },
        { label: "Fix the wage for calculation", text: "Under s.12, where salary exceeds the calculation ceiling or the minimum wage for the scheduled employment, whichever is higher, bonus is calculated as if the salary were that higher figure." },
        { label: "Apply the rate", text: "At least 8.33% under s.10, even without profit, and up to 20% under s.11 depending on the allocable surplus for the year." },
        { label: "Pro-rate for the year", text: "Bonus is a share of salary earned in the accounting year, so months without salary reduce it." },
      ],
      notes: [
        "The Code on Wages 2019 replaced the Payment of Bonus Act from 21 November 2025. Ministry of Labour notifications of 25 August 2026 (effective from 21 November 2025) kept the ₹21,000 eligibility ceiling and the ₹7,000 or minimum wage (whichever is higher) calculation ceiling. Bonus is now computed on 'wages' as defined in the Code, where excluded allowances above 50% of total pay are added back. Thresholds and minimum wage stay editable because they can be revised by notification.",
        "Whether an establishment is covered (generally 20 or more persons, with exemptions for new establishments and certain sectors) is a legal question this calculator does not decide.",
        "The rate above 8.33% depends on available and allocable surplus computed under the Act's schedules. That computation is not attempted here.",
      ],
    },
    faqs: [
      {
        q: "What is the minimum and maximum statutory bonus?",
        a: "At least 8.33% of the salary or wage earned in the accounting year (s.10), and no more than 20% (s.11). Where the allocable surplus is enough, the employer pays above the minimum up to the maximum.",
      },
      {
        q: "Who is eligible for statutory bonus?",
        a: "Employees in a covered establishment whose salary or wage is within the eligibility threshold, commonly cited as ₹21,000 a month, and who worked at least 30 working days in the year. Verify the current threshold before relying on it.",
      },
      {
        q: "Why is bonus calculated on ₹7,000 when the employee earns more?",
        a: "Because s.12 calculates bonus as if salary were the calculation ceiling, commonly cited as ₹7,000, or the scheduled-employment minimum wage if higher, whenever actual salary exceeds that figure. Eligibility and calculation use different numbers.",
      },
      {
        q: "Which minimum wage should I enter?",
        a: "The current minimum wage notified for the employee's scheduled employment and location. Minimum wages are set by states and revised periodically, often with a variable DA component, so check the latest notification.",
      },
      {
        q: "When must statutory bonus be paid?",
        a: "Within eight months of the close of the accounting year under s.19, unless an extension applies. Check the Act for the exceptions.",
      },
      {
        q: "Does the Code on Wages change statutory bonus?",
        a: "Yes, from 21 November 2025 the Code on Wages 2019 replaced the Payment of Bonus Act. The August 2026 notifications kept the ₹21,000 eligibility ceiling and the ₹7,000 (or minimum wage, if higher) calculation ceiling, but bonus is now worked out on the Code's wider definition of wages.",
      },
    ],
    seo: {
      title: "Bonus Calculator India: Payment of Bonus Act 8.33% to 20%",
      description:
        "Bonus calculator India: test eligibility, apply the wage ceiling or minimum wage, and compute statutory bonus from 8.33% to 20% under the Payment of Bonus Act.",
      keywords: ["bonus calculator india", "statutory bonus calculator", "payment of bonus act calculation", "8.33 bonus calculation"],
    },
    related: ["salary", "ctc", "payroll-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "attrition-rate",
    methodIntro:
      "Separations over average headcount, the most widely used definition. Because definitions vary, the working shows each number so you can reconcile it with any other report.",
    name: "Attrition Rate Calculator",
    title: "Employee attrition rate calculator",
    standfirst:
      "Separations as a percentage of average headcount for the period, with a simple annualised figure for comparing months and quarters.",
    intro: [
      "Attrition rate measures how many people left relative to the size of the workforce. The usual formula divides separations in a period by the average of opening and closing headcount.",
      "This attrition rate calculator gives the rate for the period you enter and scales it to a twelve-month figure, so a quarter can be compared with a year. Decide in advance whether you count voluntary exits only or all exits, and keep it consistent.",
    ],
    icon: "users",
    fields: [
      { name: "start", label: "Headcount at the start of the period", unit: "count", initial: "200", min: 0, max: 10_000_000, integer: true },
      { name: "end", label: "Headcount at the end of the period", unit: "count", initial: "210", min: 0, max: 10_000_000, integer: true },
      {
        name: "leavers",
        label: "Separations during the period",
        unit: "count",
        initial: "12",
        min: 0,
        max: 10_000_000,
        integer: true,
        hint: "Everyone who left, or voluntary exits only, depending on the measure you report. Exclude internal transfers.",
      },
      {
        name: "months",
        label: "Length of the period (months)",
        unit: "count",
        initial: "3",
        min: 1,
        max: 12,
        integer: true,
      },
    ],
    compute: (v) => {
      const start = Math.floor(num(v.start));
      const end = Math.floor(num(v.end));
      const leavers = Math.floor(num(v.leavers));
      const months = Math.max(1, Math.min(12, Math.floor(num(v.months))));
      const avg = (start + end) / 2;
      const rate = avg > 0 ? leavers / avg : 0;
      const annual = rate * (12 / months);
      const monthly = rate / months;

      return {
        summary:
          avg > 0
            ? `${leavers} separations ÷ average headcount ${fmt(avg, 1)} over ${months} ${months === 1 ? "month" : "months"}.`
            : "Average headcount is zero, so no attrition rate can be calculated.",
        cards: [
          { label: `Attrition for the ${months}-month period`, value: avg > 0 ? pct(rate) : "Not available", primary: true, note: "Separations ÷ average headcount" },
          { label: "Annualised attrition", value: avg > 0 ? pct(annual) : "Not available", note: `Period rate × 12 ÷ ${months}` },
          { label: "Average monthly attrition", value: avg > 0 ? pct(monthly) : "Not available", note: `Period rate ÷ ${months}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Opening headcount", value: start.toLocaleString("en-IN") },
              { term: "Closing headcount", value: end.toLocaleString("en-IN") },
              { term: "Separations", value: leavers.toLocaleString("en-IN") },
              { term: "Period", value: `${months} ${months === 1 ? "month" : "months"}` },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Average headcount", value: fmt(avg, 1), note: "(Opening + closing) ÷ 2" },
              { term: "Period attrition", value: avg > 0 ? pct(rate) : "Not available", note: "Separations ÷ average headcount × 100 (standard practice, no statute)" },
              { term: "Annualised", value: avg > 0 ? pct(annual) : "Not available", note: `Period rate × 12 ÷ ${months}` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Period attrition rate", value: avg > 0 ? pct(rate) : "Not available", total: true },
              { term: "Annualised", value: avg > 0 ? pct(annual) : "Not available", note: "Assumes the same pace for the rest of the year" },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Attrition rate = Separations ÷ ((Opening headcount + Closing headcount) ÷ 2) × 100   ·   Annualised = Period rate × 12 ÷ Months in period",
      steps: [
        { label: "Count separations", text: "Everyone whose employment ended in the period, or only voluntary leavers if that is the measure you report. Transfers between entities in the same group are usually excluded." },
        { label: "Average the headcount", text: "Opening plus closing headcount, divided by two. For a long period with large swings, averaging the month-end headcounts is more accurate." },
        { label: "Divide and annualise", text: "Separations over average headcount gives the period rate. Multiplying by twelve over the number of months gives a simple annual equivalent." },
      ],
      notes: [
        "There is no statutory definition of attrition. Organisations differ on whether to include involuntary exits, interns, contract staff or exits during probation, so compare figures only when the definition matches.",
        "Annualising a short period assumes the same pace continues. Seasonal exits, such as after bonus payouts or appraisals, make a single quarter a weak predictor.",
      ],
    },
    faqs: [
      {
        q: "What is the formula for attrition rate?",
        a: "Separations in the period divided by average headcount for the period, multiplied by 100. Average headcount is usually opening plus closing headcount divided by two.",
      },
      {
        q: "Should I include involuntary exits?",
        a: "Report both if you can. Total attrition includes terminations and retrenchments; voluntary attrition counts only resignations and is the better measure of retention. Use the same definition every period.",
      },
      {
        q: "How do I calculate annual attrition from a monthly figure?",
        a: "A simple method multiplies the monthly rate by twelve, which this calculator does. A more exact method adds the twelve actual monthly rates, or divides the year's separations by the year's average headcount.",
      },
      {
        q: "Is attrition the same as turnover?",
        a: "The words are often used interchangeably. Some organisations use turnover for all exits including those that are backfilled, and attrition for roles that are not replaced. State your definition when you report the number.",
      },
    ],
    seo: {
      title: "Attrition Rate Calculator: Monthly and Annualised Attrition",
      description:
        "Attrition rate calculator: divide separations by average headcount to get the period rate, the annualised figure and average monthly attrition for your team.",
      keywords: ["attrition rate calculator", "attrition rate formula", "employee turnover rate", "annualised attrition"],
    },
    related: ["turnover-cost", "absenteeism-rate", "payroll-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "absenteeism-rate",
    methodIntro:
      "Days lost divided by days that should have been worked. The care goes into what counts as lost: approved leave usually does not, unplanned absence does.",
    name: "Absenteeism Rate Calculator",
    title: "Workforce absenteeism rate calculator",
    standfirst:
      "Unplanned absence as a share of scheduled working days, for a team or the whole organisation, over any period you choose.",
    intro: [
      "Absenteeism rate shows what share of scheduled working time was lost to unplanned absence. It is calculated as days lost divided by employees multiplied by working days in the period.",
      "This absenteeism rate calculator also shows the average days lost per employee, which is often easier to discuss with managers than a percentage.",
    ],
    icon: "clock",
    fields: [
      { name: "employees", label: "Number of employees", unit: "count", initial: "100", min: 1, max: 10_000_000, integer: true },
      {
        name: "workdays",
        label: "Working days in the period",
        unit: "count",
        initial: "22",
        min: 1,
        max: 366,
        integer: true,
        hint: "Scheduled working days after weekly offs and holidays.",
      },
      {
        name: "lost",
        label: "Days lost to unplanned absence",
        unit: "count",
        initial: "88",
        min: 0,
        max: 100_000_000,
        hint: "Total across all employees. Count unplanned absence such as unapproved leave, LOP and short-notice sick days. Half days are allowed.",
      },
    ],
    compute: (v) => {
      const emp = Math.floor(num(v.employees));
      const wd = Math.floor(num(v.workdays));
      const scheduled = emp * wd;
      const rawLost = num(v.lost);
      const lost = Math.min(rawLost, scheduled);
      const rate = scheduled > 0 ? lost / scheduled : 0;
      const perEmp = emp > 0 ? lost / emp : 0;

      return {
        summary:
          rawLost > scheduled
            ? `Days lost exceeds the ${scheduled.toLocaleString("en-IN")} scheduled days, so it has been limited to that figure. Check the inputs.`
            : `${fmt(lost)} days lost out of ${scheduled.toLocaleString("en-IN")} scheduled (${emp} employees × ${wd} days).`,
        cards: [
          { label: "Absenteeism rate", value: pct(rate), primary: true, note: "Days lost ÷ scheduled days" },
          { label: "Days lost per employee", value: fmt(perEmp), note: "In this period" },
          { label: "Scheduled working days", value: scheduled.toLocaleString("en-IN"), note: "Employees × working days" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Employees", value: emp.toLocaleString("en-IN") },
              { term: "Working days in period", value: `${wd}` },
              { term: "Days lost", value: fmt(lost), note: rawLost > scheduled ? "Limited to scheduled days" : undefined },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Scheduled working days", value: scheduled.toLocaleString("en-IN"), note: "Employees × working days" },
              { term: "Absenteeism rate", value: pct(rate), note: "Days lost ÷ scheduled days × 100 (standard practice, no statute)" },
              { term: "Days lost per employee", value: fmt(perEmp), note: "Days lost ÷ employees" },
            ],
          },
          {
            heading: "Final result",
            rows: [{ term: "Absenteeism rate", value: pct(rate), total: true }],
          },
        ],
      };
    },
    method: {
      formula: "Absenteeism rate = Days lost to unplanned absence ÷ (Employees × Working days in period) × 100",
      steps: [
        { label: "Fix the scheduled days", text: "Working days in the period after weekly offs and holidays, multiplied by the number of employees expected to work them." },
        { label: "Total the days lost", text: "Unplanned absence across everyone in the period. Approved planned leave is usually excluded, because it was scheduled time off rather than lost time." },
        { label: "Divide", text: "Days lost over scheduled days gives the share of working time lost." },
      ],
      notes: [
        "There is no statutory definition. Organisations differ on whether sick leave, half days or late arrivals count, so fix your definition and keep it consistent across periods and teams.",
        "Employees who joined or left mid-period should be counted for the days they were scheduled. Using full headcount for the whole period understates the rate.",
      ],
    },
    faqs: [
      {
        q: "Does approved leave count as absenteeism?",
        a: "Usually not. Planned leave approved in advance is scheduled time off. Absenteeism normally covers unplanned or unapproved absence, including short-notice sick leave if that is your definition.",
      },
      {
        q: "What working days should I use?",
        a: "The days employees were scheduled to work in the period, after weekly offs and holidays. For shift workforces, use scheduled shifts per person.",
      },
      {
        q: "How do I count half days?",
        a: "As 0.5 of a day lost. The calculator accepts decimals for days lost.",
      },
      {
        q: "Is a lower absenteeism rate always better?",
        a: "Not necessarily. A very low rate alongside high sick-leave lapses can mean people are working while unwell. Read it alongside leave balances and overtime.",
      },
    ],
    seo: {
      title: "Absenteeism Rate Calculator: Days Lost to Unplanned Absence",
      description:
        "Absenteeism rate calculator: divide days lost to unplanned absence by scheduled working days, and see the average days lost per employee for any period.",
      keywords: ["absenteeism rate calculator", "absenteeism rate formula", "employee absence rate", "absenteeism calculation"],
    },
    related: ["attrition-rate", "lop-deduction", "working-days"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "lop-deduction",
    methodIntro:
      "A day's salary multiplied by the days without pay. What a day is worth depends on the divisor, and that is where policies differ.",
    name: "Loss of Pay (LOP) Deduction Calculator",
    title: "Loss of pay (LOP) deduction calculator",
    standfirst:
      "The salary deducted for loss-of-pay days, using the divisor your payroll policy sets: calendar days, working days, or a fixed 30 or 26.",
    intro: [
      "Loss of pay applies when an employee is absent without leave to cover it. Payroll deducts a day's salary for each LOP day, and the day's salary is the monthly figure divided by a chosen number of days.",
      "Employers use different divisors, and each produces a different deduction for the same absence. This LOP calculator shows the result on the basis you choose, so you can match what your payroll actually does.",
    ],
    icon: "calendar",
    fields: [
      {
        name: "salary",
        label: "Monthly salary subject to LOP",
        unit: "inr",
        initial: "30000",
        min: 1,
        max: 10_000_000,
        hint: "Usually gross monthly salary. Some policies exclude certain fixed reimbursements.",
      },
      {
        name: "lop",
        label: "Loss-of-pay days",
        unit: "count",
        initial: "2",
        min: 0,
        max: 31,
        hint: "Half days are allowed.",
      },
      {
        name: "divisor",
        label: "Per-day basis",
        unit: "count",
        initial: DIV_CAL,
        min: 0,
        max: 0,
        options: [DIV_CAL, DIV_WORK, DIV_30, DIV_26],
        hint: "Calendar days varies from 28 to 31 by month. Working days excludes weekly offs and holidays. Fixed divisors keep the day rate the same every month.",
      },
      {
        name: "daysInMonth",
        label: "Calendar days in the month",
        unit: "count",
        initial: "30",
        min: 28,
        max: 31,
        integer: true,
        hint: "Used only for the calendar-days basis.",
      },
      {
        name: "workingDays",
        label: "Working days in the month",
        unit: "count",
        initial: "22",
        min: 1,
        max: 31,
        integer: true,
        hint: "Used only for the working-days basis.",
      },
    ],
    compute: (v) => {
      const salary = num(v.salary);
      const { divisor, basis } = pickDivisor(String(v.divisor), num(v.daysInMonth), num(v.workingDays));
      const d = divisor > 0 ? divisor : 30;
      const rawLop = num(v.lop);
      const lop = Math.min(rawLop, d);
      const perDay = salary / d;
      const deduction = Math.min(salary, Math.round(perDay * lop));
      const payable = salary - deduction;

      return {
        summary: `${inr(salary)} ÷ ${d} (${basis}) = ${inr(perDay)} a day × ${fmt(lop)} LOP days${rawLop > d ? `, limited to ${d} days` : ""}.`,
        cards: [
          { label: "LOP deduction", value: inr(deduction), primary: true, note: `${fmt(lop)} days × ${inr(perDay)}` },
          { label: "Salary payable after LOP", value: inr(payable), note: "Before PF, ESI, PT and TDS" },
          { label: "Per-day salary", value: inr(perDay), note: `Monthly salary ÷ ${d}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly salary", value: inr(salary) },
              { term: "LOP days", value: fmt(lop), note: rawLop > d ? `Limited to ${d}` : undefined },
              { term: "Divisor", value: `${d}`, note: `${basis} (payroll policy)` },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Per-day salary", value: inr(perDay), note: `${inr(salary)} ÷ ${d}` },
              { term: "LOP deduction", value: inr(deduction), note: `${inr(perDay)} × ${fmt(lop)}, rounded to the rupee` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "LOP deduction", value: `− ${inr(deduction)}` },
              { term: "Salary payable for the month", value: inr(payable), total: true },
            ],
          },
        ],
      };
    },
    method: {
      formula: "LOP deduction = (Monthly salary ÷ Divisor) × LOP days, where the divisor is calendar days, working days, 30 or 26 as your policy sets",
      steps: [
        { label: "Choose the per-day basis", text: "Calendar days makes a day worth less in a 31-day month than in February. Working days gives a higher day rate and treats weekly offs as paid regardless. Fixed 30 or 26 keeps the rate constant across months." },
        { label: "Compute the day's salary", text: "Monthly salary divided by the chosen divisor." },
        { label: "Multiply by LOP days", text: "The deduction cannot exceed the month's salary, so LOP days are limited to the divisor." },
      ],
      notes: [
        "No central law prescribes one divisor for LOP. It is a payroll policy choice, constrained by the Payment of Wages Act 1936 (s.7 and s.9), which permits deductions for absence from duty only in proportion to the period of absence.",
        "Whether weekly offs or holidays falling between LOP days are also treated as unpaid (sandwich rules) is a policy matter. Count them in LOP days only if your policy says so.",
        "Statutory contributions such as PF and ESI are computed on wages actually paid after LOP, which this calculator does not show.",
      ],
    },
    faqs: [
      {
        q: "Which divisor is correct for LOP?",
        a: "None is mandated for all employers. Calendar days, working days and a fixed 30 or 26 are all in use. The Payment of Wages Act requires the deduction to be proportionate to the absence, so pick a basis, write it into policy and apply it consistently.",
      },
      {
        q: "Why does the LOP amount change from month to month?",
        a: "On a calendar-day or working-day basis the divisor changes with the month, so the same salary gives a different day rate. A fixed 30 or 26 divisor removes that variation.",
      },
      {
        q: "Are weekends between LOP days also deducted?",
        a: "Only if your policy has a sandwich rule that treats intervening weekly offs or holidays as LOP. Otherwise they remain paid days.",
      },
      {
        q: "Does LOP reduce PF and ESI?",
        a: "Yes, indirectly. PF is calculated on basic and DA actually paid and ESI on wages actually paid, so a lower paid amount after LOP lowers both contributions for that month.",
      },
    ],
    seo: {
      title: "LOP Calculator: Loss of Pay Salary Deduction in India",
      description:
        "LOP calculator for Indian payroll: work out the loss of pay deduction and salary payable using calendar days, working days, or a fixed 30 or 26-day divisor.",
      keywords: ["lop calculator", "loss of pay calculation", "lop deduction formula", "salary deduction for leave without pay"],
    },
    related: ["pro-rata-salary", "salary", "absenteeism-rate"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "pro-rata-salary",
    methodIntro:
      "Paid days over the month's divisor, times the monthly salary. The divisor is the only judgement, and it should be the same one your payroll uses for LOP.",
    name: "Pro-rata Salary Calculator",
    title: "Pro-rata salary calculator for joiners and leavers",
    standfirst:
      "The salary due for a part month, when someone joins after the 1st or leaves before the month ends.",
    intro: [
      "An employee who joins or leaves mid-month is paid for the days they were on the rolls, not the whole month. The pro-rata salary is the monthly salary multiplied by paid days over the month's divisor.",
      "This pro rata salary calculator lets you choose the divisor your payroll uses, so the joiner's first payslip and the leaver's settlement are worked out the same way as every other month.",
    ],
    icon: "wallet",
    fields: [
      {
        name: "salary",
        label: "Monthly salary",
        unit: "inr",
        initial: "45000",
        min: 1,
        max: 10_000_000,
        hint: "The full-month figure being pro-rated, usually gross. Pro-rate each component the same way.",
      },
      {
        name: "paidDays",
        label: "Paid days in the month",
        unit: "count",
        initial: "18",
        min: 0,
        max: 31,
        hint: "Days on the rolls in the month, counted on the same basis as the divisor. For a joiner on the 13th of a 30-day month, that is 18.",
      },
      {
        name: "divisor",
        label: "Per-day basis",
        unit: "count",
        initial: DIV_CAL,
        min: 0,
        max: 0,
        options: [DIV_CAL, DIV_WORK, DIV_30, DIV_26],
        hint: "Use the same basis as your payroll's LOP calculation.",
      },
      {
        name: "daysInMonth",
        label: "Calendar days in the month",
        unit: "count",
        initial: "30",
        min: 28,
        max: 31,
        integer: true,
        hint: "Used only for the calendar-days basis.",
      },
      {
        name: "workingDays",
        label: "Working days in the month",
        unit: "count",
        initial: "22",
        min: 1,
        max: 31,
        integer: true,
        hint: "Used only for the working-days basis. Paid days must then be counted as working days too.",
      },
    ],
    compute: (v) => {
      const salary = num(v.salary);
      const { divisor, basis } = pickDivisor(String(v.divisor), num(v.daysInMonth), num(v.workingDays));
      const d = divisor > 0 ? divisor : 30;
      const raw = num(v.paidDays);
      const paid = Math.min(raw, d);
      const amount = Math.round((salary * paid) / d);

      return {
        summary: `${inr(salary)} × ${fmt(paid)} ÷ ${d} (${basis})${raw > d ? `, paid days limited to ${d}` : ""}.`,
        cards: [
          { label: "Pro-rata salary for the month", value: inr(amount), primary: true, note: `${fmt(paid)} of ${d} days` },
          { label: "Per-day salary", value: inr(salary / d), note: `Monthly salary ÷ ${d}` },
          { label: "Share of the month", value: pct(paid / d), note: "Paid days ÷ divisor" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly salary", value: inr(salary) },
              { term: "Paid days", value: fmt(paid), note: raw > d ? `Limited to ${d}` : undefined },
              { term: "Divisor", value: `${d}`, note: `${basis} (payroll policy)` },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Per-day salary", value: inr(salary / d), note: `${inr(salary)} ÷ ${d}` },
              { term: "Pro-rata salary", value: inr(amount), note: `${inr(salary)} × ${fmt(paid)} ÷ ${d}, rounded to the rupee` },
            ],
          },
          {
            heading: "Final result",
            rows: [{ term: "Pro-rata salary (before deductions)", value: inr(amount), total: true }],
          },
        ],
      };
    },
    method: {
      formula: "Pro-rata salary = Monthly salary × Paid days ÷ Divisor",
      steps: [
        { label: "Count paid days", text: "For a joiner, from the joining date to the month end. For a leaver, from the 1st to the last working day. Count them on the same basis as the divisor: calendar days with calendar days, working days with working days." },
        { label: "Choose the divisor", text: "Calendar days in the month, working days, or a fixed 30 or 26. It should match your LOP basis so that part months and absences are treated alike." },
        { label: "Pro-rate", text: "Multiply the monthly salary by paid days and divide by the divisor. Apply the same fraction to each salary component." },
      ],
      notes: [
        "The divisor is employer policy, not law. Under a fixed 26-day basis, a joiner on the rolls for 27 or more calendar days may reach the full month; the calculator limits paid days to the divisor.",
        "Statutory deductions are computed on the pro-rated wages. PF is on basic and DA actually paid; ESI on wages actually paid.",
      ],
    },
    faqs: [
      {
        q: "How do I calculate salary for a mid-month joiner?",
        a: "Count the days from the joining date to the end of the month, inclusive, then multiply the monthly salary by those days and divide by the month's divisor. A joiner on the 13th of a 30-day month has 18 paid days.",
      },
      {
        q: "Should I use 30 days or the actual days in the month?",
        a: "Either is used in practice. Actual calendar days gives a slightly different day rate each month; a fixed 30 keeps it constant. Use whichever your payroll uses for LOP so the two stay consistent.",
      },
      {
        q: "Are weekly offs counted as paid days for a joiner?",
        a: "On a calendar-day basis, yes: weekly offs that fall after the joining date are paid. On a working-day basis, count only working days in both the paid days and the divisor.",
      },
      {
        q: "Is the last working day paid for a leaver?",
        a: "Yes. Paid days run up to and including the last working day.",
      },
    ],
    seo: {
      title: "Pro Rata Salary Calculator: Part-Month Pay for Joiners",
      description:
        "Pro rata salary calculator: work out part-month pay for a mid-month joiner or leaver from paid days and your payroll's calendar, working-day or fixed divisor.",
      keywords: ["pro rata salary calculator", "prorated salary calculation", "salary for mid month joining", "part month salary"],
    },
    related: ["lop-deduction", "salary", "full-and-final"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "arrears",
    methodIntro:
      "Arrears are the difference between what should have been paid and what was paid, for each month the revision covered. Whole months first, then any part month.",
    name: "Salary Arrears Calculator",
    title: "Back-dated salary revision arrears calculator",
    standfirst:
      "When a revision is approved with an earlier effective date, the monthly difference multiplied by the months already paid at the old rate.",
    intro: [
      "A salary revision is often approved weeks or months after its effective date. The months already paid at the old salary then carry arrears: the difference between the revised and old monthly salary for each of those months.",
      "This salary arrears calculator adds whole months and, where the effective date fell mid-month, the pro-rated part of that first month.",
    ],
    icon: "chart",
    fields: [
      { name: "oldSalary", label: "Old monthly salary", unit: "inr", initial: "40000", min: 0, max: 10_000_000 },
      {
        name: "newSalary",
        label: "Revised monthly salary",
        unit: "inr",
        initial: "45000",
        min: 0,
        max: 10_000_000,
        hint: "Use the same component basis as the old figure (both gross, or both basic).",
      },
      {
        name: "months",
        label: "Full months paid at the old salary",
        unit: "count",
        initial: "3",
        min: 0,
        max: 120,
        integer: true,
        hint: "Complete months between the effective date and the month the revision is first paid.",
      },
      {
        name: "partDays",
        label: "Days in a part month at the start (optional)",
        unit: "count",
        initial: "0",
        min: 0,
        max: 31,
        integer: true,
        hint: "If the revision took effect mid-month, the days from the effective date to that month's end.",
      },
      {
        name: "partMonthDays",
        label: "Calendar days in that part month",
        unit: "count",
        initial: "30",
        min: 28,
        max: 31,
        integer: true,
      },
      {
        name: "oldBasic",
        label: "Old monthly basic + DA (PF wages)",
        unit: "inr",
        initial: "12000",
        min: 0,
        max: 10_000_000,
        hint: "Used for PF on arrears. Enter 0 for both basic fields if the employee is not a PF member.",
      },
      {
        name: "newBasic",
        label: "Revised monthly basic + DA (PF wages)",
        unit: "inr",
        initial: "14000",
        min: 0,
        max: 10_000_000,
      },
      {
        name: "pfBasis",
        label: "PF contribution basis",
        unit: "count",
        initial: PF_CAPPED,
        min: 0,
        max: 0,
        options: [PF_CAPPED, PF_FULL],
        hint: "Most employers contribute on PF wages up to ₹15,000. Choose full wages only if your establishment contributes above the ceiling.",
      },
    ],
    compute: (v) => {
      const oldS = num(v.oldSalary);
      const newS = num(v.newSalary);
      const months = Math.floor(num(v.months));
      const pmd = Math.max(28, Math.min(31, Math.floor(num(v.partMonthDays)) || 30));
      const partDays = Math.min(Math.floor(num(v.partDays)), pmd);
      const diff = Math.max(0, newS - oldS);
      const fullArrears = diff * months;
      const partArrears = Math.round((diff * partDays) / pmd);
      const total = Math.round(fullArrears + partArrears);
      const decrease = newS < oldS;
      const periodFactor = months + partDays / pmd;

      // PF on arrears (EPF Act 1952): contributions on the increase in basic + DA for the
      // arrears months, within the ₹15,000 ceiling unless contributing on full wages.
      const E = RULES.epf;
      const oldB = num(v.oldBasic);
      const newB = num(v.newBasic);
      const full = String(v.pfBasis) === PF_FULL;
      const cap = (x: number) => Math.min(x, E.wageCeiling);
      const pfDiffMonthly = Math.max(0, full ? newB - oldB : cap(newB) - cap(oldB));
      const cappedDiffMonthly = Math.max(0, cap(newB) - cap(oldB));
      const pfArrearsWage = Math.min(total, Math.round(pfDiffMonthly * periodFactor));
      const cappedArrearsWage = Math.min(pfArrearsWage, Math.round(cappedDiffMonthly * periodFactor));
      const pfApplies = newB > 0 && pfArrearsWage > 0;
      const pfEmp = pfApplies ? Math.round(pfArrearsWage * E.employeeRate) : 0;
      const pfEr = pfApplies ? Math.round(pfArrearsWage * E.employerRate) : 0;
      const eps = pfApplies ? Math.min(Math.round(cappedArrearsWage * E.epsRate), pfEr) : 0;
      const edli = pfApplies ? Math.round(cappedArrearsWage * E.edliRate) : 0;
      const admin = pfApplies ? Math.round(pfArrearsWage * E.adminRate) : 0;

      // ESI on arrears: payable on arrears for months in which the employee was covered
      // (old monthly wages within ₹21,000). Contributions rounded up to the next rupee.
      const S = RULES.esi;
      const esiApplies = total > 0 && oldS > 0 && oldS <= S.wageThreshold;
      const esiEmp = esiApplies ? Math.ceil(total * S.employeeRate - 1e-9) : 0;
      const esiEr = esiApplies ? Math.ceil(total * S.employerRate - 1e-9) : 0;
      const na = "Not applicable";

      return {
        summary: decrease
          ? "The revised salary is lower than the old one, so there are no arrears to pay. Any recovery is a separate question."
          : `${inr(diff)} a month × ${months} full months${partDays ? ` + ${partDays} of ${pmd} days` : ""}.`,
        cards: [
          { label: "Total arrears payable", value: inr(total), primary: true, note: "Before PF, ESI and TDS" },
          { label: "Monthly difference", value: inr(diff), note: "Revised − old salary" },
          { label: "Period covered", value: `${months} ${months === 1 ? "month" : "months"}${partDays ? ` + ${partDays} days` : ""}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Old monthly salary", value: inr(oldS) },
              { term: "Revised monthly salary", value: inr(newS) },
              { term: "Period", value: `${months} full ${months === 1 ? "month" : "months"}${partDays ? ` + ${partDays} of ${pmd} days` : ""}` },
              { term: "Old / revised basic + DA", value: `${inr(oldB)} / ${inr(newB)}` },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Monthly difference", value: inr(diff), note: "Revised − old, not below zero" },
              { term: "Full months", value: inr(fullArrears), note: `${inr(diff)} × ${months}` },
              {
                term: "Part month",
                value: partDays ? inr(partArrears) : "None",
                note: partDays ? `${inr(diff)} × ${partDays} ÷ ${pmd}` : undefined,
                muted: !partDays,
              },
              {
                term: "PF wages in arrears",
                value: pfApplies ? inr(pfArrearsWage) : na,
                note: pfApplies ? `${inr(pfDiffMonthly)} a month × ${fmt(periodFactor)} months${full ? "" : ", within ₹15,000 ceiling"}` : "No increase in PF wages",
                muted: !pfApplies,
              },
            ],
          },
          {
            heading: "Employee deduction",
            rows: [
              { term: "PF (12%)", value: pfApplies ? inr(pfEmp) : na, note: pfApplies ? `${inr(pfArrearsWage)} × 12%` : undefined, muted: !pfApplies },
              {
                term: "ESI (0.75%)",
                value: esiApplies ? inr(esiEmp) : na,
                note: esiApplies ? `${inr(total)} × 0.75%, rounded up` : "Old wages above ₹21,000 or no arrears",
                muted: !esiApplies,
              },
            ],
          },
          {
            heading: "Employer contribution",
            rows: [
              { term: "PF total (12%)", value: pfApplies ? inr(pfEr) : na, note: pfApplies ? `EPS 8.33% ${inr(eps)} + EPF ${inr(pfEr - eps)}` : undefined, muted: !pfApplies },
              { term: "EDLI (0.5%)", value: pfApplies ? inr(edli) : na, note: pfApplies ? "On wages within ₹15,000" : undefined, muted: !pfApplies },
              { term: "EPF admin charges (0.5%)", value: pfApplies ? inr(admin) : na, muted: !pfApplies },
              {
                term: "ESI (3.25%)",
                value: esiApplies ? inr(esiEr) : na,
                note: esiApplies ? `${inr(total)} × 3.25%, rounded up` : undefined,
                muted: !esiApplies,
              },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Total arrears (gross)", value: inr(total), total: true },
              { term: "Net arrears after PF and ESI (before TDS)", value: inr(Math.max(0, total - pfEmp - esiEmp)) },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Arrears = (Revised monthly salary − Old monthly salary) × Full months + Difference × Part-month days ÷ Days in that month",
      steps: [
        { label: "Find the monthly difference", text: "Revised salary less old salary, on the same component basis. If each component changed differently, work each one separately and add them." },
        { label: "Count the months already paid", text: "Full months from the effective date up to, but not including, the first month paid at the new rate." },
        { label: "Add any part month", text: "If the revision took effect mid-month, pro-rate that month's difference by days from the effective date over the calendar days in the month." },
        { label: "Adjust for LOP", text: "If the employee had loss-of-pay days in the arrears months, the arrears for those months should be pro-rated in the same way their salary was." },
      ],
      notes: [
        "Arrears of basic and DA attract provident fund contributions (12% + 12%, EPS 8.33% and EDLI 0.5% on wages within ₹15,000), and arrears of wages attract ESI (0.75% + 3.25%) for months in which the employee was covered. The calculator shows both; it treats ESI coverage by the old monthly wage, which is a simplification of the contribution-period rule.",
        "Arrears are taxed in the year received. An employee may claim relief under s.89 of the Income-tax Act by filing Form 10E. This calculator does not compute tax or relief.",
        "Arrears from a revision are a contractual payment; arrears under a minimum wage revision or wage settlement follow the notification or settlement terms.",
      ],
    },
    faqs: [
      {
        q: "How are salary arrears calculated?",
        a: "Multiply the monthly difference between the revised and old salary by the number of months already paid at the old rate, and add a pro-rated amount for any part month at the start.",
      },
      {
        q: "Is PF deducted on arrears?",
        a: "Yes, on the basic and DA part of the arrears, subject to the wage ceiling your establishment applies. Employee and employer contributions are both due.",
      },
      {
        q: "How is tax on arrears handled?",
        a: "Arrears are added to salary and taxed in the year they are paid. Because that can push income into a higher bracket, the employee can claim relief under s.89 by filing Form 10E.",
      },
      {
        q: "What if the employee had leave without pay during the arrears period?",
        a: "Arrears for those months should be pro-rated the same way the salary was, so a month with LOP days carries proportionately less arrears.",
      },
      {
        q: "Does a decrease in salary create negative arrears?",
        a: "The calculator shows nothing payable. Recovering past salary from an employee is a separate question that depends on the contract and the Payment of Wages Act rules on deductions.",
      },
    ],
    seo: {
      title: "Salary Arrears Calculator: Back-Dated Revision Arrears",
      description:
        "Salary arrears calculator: compute back-dated revision arrears from the old and revised monthly salary, full months at the old rate and any part month.",
      keywords: ["salary arrears calculator", "arrears calculation", "back dated salary arrears", "salary revision arrears"],
    },
    related: ["salary-hike", "pro-rata-salary", "pf"],
  },
];

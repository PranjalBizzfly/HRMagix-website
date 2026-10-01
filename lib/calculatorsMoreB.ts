/**
 * Calculators, set B: salary hike, full and final, turnover cost, overtime
 * leakage, manual HR cost, working days, leave balance, notice period end
 * date and EPS pension.
 *
 * Statutory values come from lib/statutory.ts. The three cost models
 * (turnover-cost, overtime-leakage, manual-hr-cost) contain no benchmarks:
 * every rate and hour figure is an input the user sets, and the defaults are
 * neutral examples, not industry data.
 */

import type { Calculator } from "./calculators";
import { RULES, computeGratuity, inr, safe } from "./statutory";
import { SET_B_RULES } from "./rules/setB";

const num = safe;
const r2 = (n: number) => Math.round(n * 100) / 100;
const fmt = (n: number, dp = 0) => r2(n).toLocaleString("en-IN", { maximumFractionDigits: dp });
const pct = (n: number) => `${fmt(n, 2)}%`;

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_MS = 86_400_000;

/** UTC date so day arithmetic is never shifted by a time zone or DST. */
const utc = (y: number, m: number, d: number) => new Date(Date.UTC(y, m, d));
const fmtDate = (d: Date) =>
  `${WEEKDAYS[(d.getUTCDay() + 6) % 7]}, ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * DAY_MS);
/** Monday = 0 … Sunday = 6 */
const weekdayIndex = (d: Date) => (d.getUTCDay() + 6) % 7;

const offPatterns: Record<string, number[]> = {
  "Sunday only": [6],
  "Saturday and Sunday": [5, 6],
  "Friday only": [4],
  "No weekly off": [],
};

export const calculatorsMoreB: Calculator[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "salary-hike",
    methodIntro:
      "A hike is a percentage applied to a base. The only decision that changes the answer is which base you apply it to, so the method starts there.",
    name: "Salary Hike Calculator",
    title: "Salary hike calculator: new pay from an increment percentage",
    standfirst:
      "Enter current pay and the increment percentage to see the revised monthly and annual figure, and the rupee difference the hike makes.",
    intro: [
      "Increment letters usually state a percentage, while employees and finance teams think in rupees. This salary hike calculator converts one into the other, monthly and annually.",
      "It also works in reverse: enter a target salary and it shows the percentage hike that target represents, which is useful when a counter-offer is quoted as a figure.",
    ],
    icon: "chart",
    fields: [
      { name: "current", label: "Current monthly salary", unit: "inr", initial: "40000", min: 1, max: 10_000_000, hint: "Use the same basis throughout: gross, CTC or basic, whichever the increment is applied to." },
      { name: "hike", label: "Increment percentage", unit: "percent", initial: "10", min: 0, max: 500, hint: "The percentage stated in the increment letter." },
      { name: "target", label: "Or a target monthly salary (optional)", unit: "inr", initial: "0", min: 0, max: 10_000_000, hint: "Leave at 0 to use the percentage. Enter a figure to see the hike it implies." },
    ],
    compute: (v) => {
      const current = num(v.current);
      const target = num(v.target);
      // A target needs a current salary to measure against; without one, fall back to the percentage.
      const useTarget = target > 0 && current > 0;
      const hikePct = useTarget ? ((target - current) / current) * 100 : num(v.hike);
      const revised = useTarget ? target : current * (1 + hikePct / 100);
      const diff = revised - current;
      const negative = useTarget && target < current;
      return {
        summary: current <= 0
          ? "Enter a current monthly salary above zero to calculate the hike."
          : useTarget
          ? `${inr(current)} to ${inr(target)} is a ${negative ? "reduction" : "hike"} of ${pct(Math.abs(hikePct))}.`
          : `${pct(hikePct)} on ${inr(current)} a month gives ${inr(revised)} a month.`,
        cards: [
          { label: "Revised monthly salary", value: inr(revised), primary: true, note: `${inr(revised * 12)} a year` },
          { label: negative ? "Reduction" : "Hike percentage", value: pct(Math.abs(hikePct)), note: useTarget ? "Implied by the target" : "As entered" },
          { label: negative ? "Monthly decrease" : "Monthly increase", value: inr(Math.abs(diff)), note: `${inr(Math.abs(diff) * 12)} a year` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Current monthly salary", value: inr(current), note: `${inr(current * 12)} a year` },
              useTarget
                ? { term: "Target monthly salary", value: inr(target) }
                : { term: "Increment percentage", value: pct(hikePct) },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              useTarget
                ? { term: negative ? "Reduction percentage" : "Hike percentage", value: pct(Math.abs(hikePct)), note: `(${inr(target)} − ${inr(current)}) ÷ ${inr(current)} × 100` }
                : { term: "Revised monthly salary", value: inr(revised), note: `${inr(current)} × (1 + ${pct(hikePct)} ÷ 100)` },
              { term: negative ? "Monthly decrease" : "Monthly increase", value: inr(Math.abs(diff)), note: "Revised − current" },
              { term: negative ? "Annual decrease" : "Annual increase", value: inr(Math.abs(diff) * 12), note: "Monthly difference × 12" },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Revised monthly salary", value: inr(revised), total: true },
              { term: "Revised annual salary", value: inr(revised * 12) },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Revised salary = Current salary × (1 + Hike % ÷ 100); Hike % = (Revised − Current) ÷ Current × 100",
      steps: [
        { label: "Fix the base", text: "Apply the percentage to the same figure the increment letter names. A 10% hike on basic is a much smaller rupee increase than 10% on CTC." },
        { label: "Apply the percentage", text: "Multiply current pay by one plus the percentage as a decimal." },
        { label: "Annualise", text: "Multiply the monthly figure by twelve. Annual components such as bonus or variable pay are not included unless they are in the base you entered." },
      ],
      notes: [
        "If basic rises, linked items such as PF on basic, gratuity accrual and HRA move with it. Use the CTC or salary calculator to see the revised structure.",
        "Take-home after the hike depends on deductions and tax, which this calculator does not compute.",
      ],
    },
    faqs: [
      { q: "How do I calculate a salary hike percentage?", a: "Subtract the current salary from the new salary, divide by the current salary and multiply by 100. Enter both figures in the calculator and it does this for you." },
      { q: "Is the hike applied to CTC, gross or basic?", a: "Whatever the increment letter says. Many letters state the hike on CTC; some revise basic and let other components follow. Use the same base in the calculator that the letter uses." },
      { q: "Will my take-home pay rise by the same percentage?", a: "Usually not exactly. PF, tax and other deductions change with the new structure, so the in-hand increase can be smaller or larger in percentage terms than the headline hike." },
      { q: "How do two hikes in a row combine?", a: "They compound. A 10% hike followed by another 10% is 21% over the original, not 20%, because the second hike applies to the already-revised figure." },
    ],
    seo: {
      title: "Salary Hike Calculator: Increment % to New Monthly Pay",
      description:
        "Salary hike calculator: turn an increment percentage into revised monthly and annual pay, or find the hike percentage a target salary represents.",
      keywords: ["salary hike calculator", "increment calculator", "salary increment percentage", "hike percentage calculator"],
    },
    related: ["ctc", "salary", "arrears"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "full-and-final",
    methodIntro:
      "A settlement is a list of amounts owed each way. The method adds what the employer owes, subtracts what the employee owes, and keeps tax out of it.",
    name: "Full and Final Settlement Calculator",
    title: "Full and final settlement estimate",
    standfirst:
      "Add unpaid salary, leave encashment, gratuity and other dues, then subtract notice recovery and other recoveries, to estimate a leaver's settlement before tax.",
    intro: [
      "This full and final settlement calculator builds an estimate from the components you enter. It is not a payslip: TDS is not computed, and the figures for leave, bonus and recoveries come from your own policy and records.",
      "Gratuity is worked out using the Payment of Gratuity Act formula, and only when the five-year service condition is met.",
    ],
    icon: "wallet",
    fields: [
      { name: "monthly", label: "Monthly gross salary", unit: "inr", initial: "50000", min: 0, max: 10_000_000, hint: "Used for unpaid salary days." },
      { name: "basic", label: "Monthly basic (and DA)", unit: "inr", initial: "25000", min: 0, max: 10_000_000, hint: "Used for gratuity and, by default, for leave encashment." },
      { name: "monthDays", label: "Days in the final month", unit: "count", initial: "30", min: 28, max: 31, integer: true, hint: "Divisor for the per-day salary. Some employers use a fixed 26 or 30; use your policy." },
      { name: "unpaidDays", label: "Unpaid salary days", unit: "count", initial: "15", min: 0, max: 31, integer: true, hint: "Days worked in the final month not yet paid." },
      { name: "leaveDays", label: "Leave days to encash", unit: "count", initial: "10", min: 0, max: 365, hint: "Encashable balance under your leave policy." },
      { name: "leaveBasis", label: "Leave encashment wage", unit: "count", initial: "Basic (and DA)", min: 0, max: 0, options: ["Basic (and DA)", "Gross"] },
      { name: "leaveDivisor", label: "Leave encashment divisor (days)", unit: "count", initial: "30", min: 1, max: 31, integer: true, hint: "Per your policy, commonly 26 or 30." },
      { name: "years", label: "Completed years of service", unit: "years", initial: "6", min: 0, max: 60, integer: true },
      { name: "months", label: "Additional months of service", unit: "count", initial: "4", min: 0, max: 11, integer: true },
      { name: "otherDues", label: "Bonus, reimbursements and other dues", unit: "inr", initial: "0", min: 0, max: 100_000_000 },
      { name: "noticeShort", label: "Notice days not served (recoverable)", unit: "count", initial: "0", min: 0, max: 365, hint: "Only if your contract allows recovery and it has not been waived." },
      { name: "recoveries", label: "Other recoveries", unit: "inr", initial: "0", min: 0, max: 100_000_000, hint: "Advances, loans, unreturned assets." },
      { name: "empType", label: "Employment type", unit: "count", initial: "Permanent", min: 0, max: 0, options: ["Permanent", "Fixed-term"], hint: "Fixed-term employees qualify for gratuity after one year under the Code on Social Security 2020." },
      { name: "noticePaid", label: "Notice days paid in lieu by employer", unit: "count", initial: "0", min: 0, max: 365, hint: "If the employer releases the employee early and pays for the unserved notice." },
    ],
    compute: (v) => {
      const T = SET_B_RULES;
      const monthly = num(v.monthly);
      const basic = num(v.basic);
      const md = Math.max(1, Math.floor(num(v.monthDays)) || 30);
      const perDay = monthly / md;
      const unpaidDays = Math.min(md, num(v.unpaidDays));
      const unpaid = perDay * unpaidDays;
      const leaveWage = v.leaveBasis === "Gross" ? monthly : basic;
      const ld = Math.max(1, num(v.leaveDivisor));
      const leaveDays = num(v.leaveDays);
      const leave = (leaveWage / ld) * leaveDays;
      const years = Math.floor(num(v.years));
      const months = Math.min(11, Math.floor(num(v.months)));
      // Code on Social Security 2020: wages = basic + DA; if excluded allowances exceed 50% of
      // total remuneration, the excess is added back, so wages are at least 50% of gross.
      const gWage = Math.max(basic, monthly * T.gratuityCode.wagesFloorShare);
      const g = computeGratuity(gWage, years, months);
      const fixedTerm = v.empType === "Fixed-term";
      const countedYears = years + (months > RULES.gratuity.partYearMonths ? 1 : 0);
      const gEligible = fixedTerm ? years >= T.gratuityCode.fixedTermMinYears : g.eligible;
      const gUncapped = gEligible ? Math.round((RULES.gratuity.days / RULES.gratuity.divisor) * gWage * countedYears) : 0;
      const gratuity = Math.min(gUncapped, RULES.gratuity.maxAmount);
      const other = num(v.otherDues);
      const noticePaid = perDay * num(v.noticePaid);
      const notice = perDay * num(v.noticeShort);
      const rec = num(v.recoveries);
      const payable = unpaid + leave + gratuity + noticePaid + other;
      const deductions = notice + rec;
      const net = payable - deductions;
      // Tax: gratuity exempt up to ₹20 lakh; leave encashment on leaving exempt up to the least of
      // actual, 10 months' average salary, 30 days per completed year, ₹25 lakh (private sector).
      const gExempt = Math.min(gratuity, T.tax.gratuityExemptCap);
      const leaveDailyAvg = leaveWage / ld;
      const leaveExempt = Math.min(
        leave,
        leaveWage * T.tax.leaveAvgSalaryMonths,
        leaveDailyAvg * T.tax.leaveDaysPerYear * years,
        T.tax.leaveEncashExemptCap,
      );
      const taxable = Math.max(0, payable - gExempt - leaveExempt);
      const minY = fixedTerm ? T.gratuityCode.fixedTermMinYears : RULES.gratuity.minYears;
      return {
        summary: `${inr(payable)} payable less ${inr(deductions)} recoveries${gEligible ? ", gratuity included" : ", gratuity not yet payable"}. Estimate before TDS.`,
        cards: [
          { label: net >= 0 ? "Estimated net settlement" : "Net recoverable from employee", value: inr(net), primary: true, note: "Before TDS" },
          { label: "Total payable", value: inr(payable) },
          { label: "Gratuity", value: gEligible ? inr(gratuity) : "Not applicable", note: gEligible ? `${countedYears} years counted` : `${minY} ${minY === 1 ? "year's" : "years'"} service required` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Monthly gross salary", value: inr(monthly) },
              { term: "Monthly basic (and DA)", value: inr(basic) },
              { term: "Service", value: `${years} years ${months} months`, note: v.empType === "Fixed-term" ? "Fixed-term" : "Permanent" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Unpaid salary", value: inr(unpaid), note: `${inr(monthly)} ÷ ${md} × ${unpaidDays} days` },
              { term: "Leave encashment", value: inr(leave), note: `${inr(leaveWage)} ÷ ${ld} × ${leaveDays} days` },
              {
                term: "Gratuity",
                value: gEligible ? inr(gratuity) : "Not applicable",
                muted: !gEligible,
                note: gEligible
                  ? `15 ÷ 26 × ${inr(gWage)} × ${countedYears}${gUncapped > RULES.gratuity.maxAmount ? `, capped at ${inr(RULES.gratuity.maxAmount)}` : ""}${gWage > basic ? " (wages raised to 50% of gross, Code on Social Security)" : ""}`
                  : `${minY} ${minY === 1 ? "year's" : "years'"} continuous service not met`,
              },
              { term: "Notice pay in lieu (paid by employer)", value: noticePaid ? inr(noticePaid) : "Not applicable", muted: !noticePaid, note: noticePaid ? `${inr(perDay)} a day × ${num(v.noticePaid)} days` : undefined },
              { term: "Bonus and other dues", value: inr(other) },
              { term: "Total payable", value: inr(payable), total: true },
              { term: "Gratuity exempt from tax (indicative)", value: gEligible ? inr(gExempt) : "Not applicable", muted: !gEligible, note: `Up to ${inr(T.tax.gratuityExemptCap)} lifetime (formerly s.10(10))` },
              { term: "Leave encashment exempt (indicative)", value: inr(leaveExempt), note: `Least of actual, 10 × monthly wage, 30 days × ${years} years, ${inr(T.tax.leaveEncashExemptCap)} (formerly s.10(10AA), private sector)` },
              { term: "Taxable portion (indicative)", value: inr(taxable), note: "Payable − exemptions; TDS depends on regime and annual income" },
            ],
          },
          {
            heading: "Employee deduction",
            rows: [
              { term: "Notice shortfall recovery", value: notice ? inr(notice) : "Not applicable", muted: !notice, note: notice ? `${inr(perDay)} a day × ${num(v.noticeShort)} days` : undefined },
              { term: "Other recoveries", value: inr(rec) },
              { term: "Total recoveries", value: inr(deductions), total: true },
            ],
          },
          {
            heading: "Final result",
            rows: [{ term: net >= 0 ? "Estimated net settlement (before TDS)" : "Net recoverable from employee", value: inr(net), total: true, note: `${inr(payable)} − ${inr(deductions)}` }],
          },
        ],
      };
    },
    method: {
      formula:
        "F&F = Unpaid salary + Leave encashment + Gratuity (if eligible) + Other dues − Notice recovery − Other recoveries",
      steps: [
        { label: "Unpaid salary", text: "Monthly gross divided by the days in the month (or your fixed divisor), times days worked but not paid." },
        { label: "Leave encashment", text: "Encashable leave days times the daily wage your policy specifies. Whether basic or gross is used, and the divisor, are policy choices." },
        { label: "Gratuity", text: "Fifteen twenty-sixths of last drawn basic and DA per year counted, once five years of continuous service are complete, with a part-year over six months counted as a year and the ₹20,00,000 maximum applied (Payment of Gratuity Act 1972, s.4)." },
        { label: "Add other dues", text: "Bonus, pending reimbursements and any other amounts owed." },
        { label: "Subtract recoveries", text: "Notice shortfall at the per-day salary, where the contract allows it and it has not been waived, plus advances and other recoveries." },
      ],
      notes: [
        "This is an estimate. TDS is not computed. Indicative exemptions: gratuity up to ₹20,00,000 and, for private-sector employees, leave encashment on leaving up to the least of the actual amount, ten months' average salary, 30 days' leave per completed year and ₹25,00,000 (Income-tax Act 2025; formerly s.10(10) and s.10(10AA) of the 1961 Act). The 10-month test uses the wage entered, not a true 10-month average.",
        "Gratuity follows the Code on Social Security 2020, in force from 21 November 2025: wages are basic and DA, raised to half of total remuneration where excluded allowances exceed 50%; fixed-term employees qualify after one year. The five-year condition does not apply on death or disablement.",
        "Under the Code on Wages 2019, wages due on separation are payable within two working days.",
        "Statutory bonus, if due, should be computed under the Payment of Bonus Act and entered under other dues.",
        "Leave encashment eligibility and wage basis are set by your leave policy and any applicable state law.",
      ],
    },
    faqs: [
      { q: "Does this calculator deduct TDS?", a: "No. The figure is before tax. TDS on a settlement depends on the employee's regime, declarations and the rest of the year's income, and should be computed in payroll." },
      { q: "When is gratuity included in full and final?", a: "When the employee has completed five years of continuous service, subject to the exceptions in the Act. The calculator includes it only when the completed years entered are five or more." },
      { q: "Is leave encashed on basic or gross?", a: "Your leave policy decides. Many policies use basic (and DA); some use gross. Choose the option that matches your policy and set the divisor it uses." },
      { q: "Can an employer recover pay for unserved notice?", a: "Only where the appointment terms provide for it and the employer has not waived the shortfall. Enter zero notice days if no recovery applies." },
      { q: "What else commonly goes into a settlement?", a: "Pending reimbursements, bonus or incentive due under the plan, and recoveries for advances or company assets not returned. PF is settled separately through the EPFO and is not part of this figure." },
    ],
    seo: {
      title: "Full and Final Settlement Calculator: F&F Estimate India",
      description:
        "Full and final settlement calculator: estimate unpaid salary, leave encashment, gratuity and dues less notice and other recoveries. Shown before TDS.",
      keywords: ["full and final settlement calculator", "f&f calculator", "full and final settlement india", "final settlement calculation"],
    },
    related: ["gratuity", "leave-encashment", "notice-pay", "statutory-bonus"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "turnover-cost",
    methodIntro:
      "This is a cost model, not a benchmark. Each line is an amount or hour count you supply, and the method shows how they add up per leaver and across a year.",
    name: "Employee Turnover Cost Calculator",
    title: "What one leaver costs: employee turnover cost model",
    standfirst:
      "Put your own figures against hiring, onboarding and lost productivity to see the cost of employee turnover per leaver and for the leavers you expect in a year.",
    intro: [
      "The cost of employee turnover is mostly made of things a business already pays for: recruiter fees or job ads, interview hours, a vacancy someone covers, and a new hire who takes time to reach full output.",
      "Every figure here is your own estimate. The defaults are placeholders to show how the model works, not industry averages, so replace each one with numbers from your own records.",
    ],
    icon: "users",
    fields: [
      { name: "salary", label: "Monthly cost of the role (CTC)", unit: "inr", initial: "50000", min: 0, max: 10_000_000 },
      { name: "hiring", label: "Direct hiring spend per hire", unit: "inr", initial: "20000", min: 0, max: 10_000_000, hint: "Agency fee, job ads, assessments, background checks. Your estimate." },
      { name: "interviewHours", label: "Interview and screening hours per hire", unit: "count", initial: "10", min: 0, max: 1000, hint: "Total across everyone involved. Your estimate." },
      { name: "hourCost", label: "Hourly cost of those interviewers", unit: "inr", initial: "500", min: 0, max: 100_000, hint: "Your estimate of their CTC per hour." },
      { name: "onboarding", label: "Onboarding and training spend per hire", unit: "inr", initial: "10000", min: 0, max: 10_000_000, hint: "Equipment set-up, training, induction time. Your estimate." },
      { name: "vacancyDays", label: "Days the role stays vacant", unit: "count", initial: "30", min: 0, max: 365, integer: true },
      { name: "vacancyLoss", label: "Share of the role's value lost while vacant", unit: "percent", initial: "50", min: 0, max: 100, hint: "Your judgement of output not covered by others. Example value only." },
      { name: "rampMonths", label: "Months for the new hire to reach full output", unit: "count", initial: "3", min: 0, max: 24 },
      { name: "rampLoss", label: "Average output shortfall during ramp-up", unit: "percent", initial: "50", min: 0, max: 100, hint: "Your judgement. Example value only." },
      { name: "leavers", label: "Leavers expected in a year", unit: "count", initial: "10", min: 0, max: 100_000, integer: true },
    ],
    compute: (v) => {
      const salary = num(v.salary);
      const hiring = num(v.hiring);
      const interview = num(v.interviewHours) * num(v.hourCost);
      const onboarding = num(v.onboarding);
      const vacancy = (salary * 12 / 365) * num(v.vacancyDays) * (Math.min(100, num(v.vacancyLoss)) / 100);
      const ramp = salary * num(v.rampMonths) * (Math.min(100, num(v.rampLoss)) / 100);
      const per = hiring + interview + onboarding + vacancy + ramp;
      const leavers = Math.floor(num(v.leavers));
      const annual = per * leavers;
      return {
        summary: `${inr(per)} per leaver on your inputs, ${inr(annual)} across ${leavers} leavers a year.`,
        cards: [
          { label: "Cost per leaver", value: inr(per), primary: true, note: salary ? `${fmt(per / salary, 1)} months of the role's CTC` : undefined },
          { label: "Annual turnover cost", value: inr(annual), note: `${leavers} leavers` },
          { label: "Lost productivity share", value: per ? pct(((vacancy + ramp) / per) * 100) : "0%", note: "Vacancy and ramp-up" },
        ],
        lines: [
          {
            heading: "Calculation",
            rows: [
              { term: "Direct hiring spend", value: inr(hiring) },
              { term: "Interview time", value: inr(interview), note: `${num(v.interviewHours)} hours × ${inr(num(v.hourCost))}` },
              { term: "Onboarding and training", value: inr(onboarding) },
              { term: "Vacancy cost", value: inr(vacancy), note: `Daily CTC × ${num(v.vacancyDays)} days × ${pct(num(v.vacancyLoss))}` },
              { term: "Ramp-up shortfall", value: inr(ramp), note: `${inr(salary)} × ${num(v.rampMonths)} months × ${pct(num(v.rampLoss))}` },
              { term: "Cost per leaver", value: inr(per), total: true },
            ],
          },
          { heading: "Final result", rows: [{ term: "Annual turnover cost (estimate)", value: inr(annual), total: true, note: `${inr(per)} × ${leavers} leavers; a cost model on your inputs, not a benchmark` }] },
        ],
      };
    },
    method: {
      formula:
        "Cost per leaver = Hiring spend + (Interview hours × Hourly cost) + Onboarding + (Daily CTC × Vacant days × Vacancy loss %) + (Monthly CTC × Ramp months × Ramp shortfall %)",
      steps: [
        { label: "Direct costs", text: "Money paid out for the replacement: agency fees, adverts, assessments, checks, onboarding and training." },
        { label: "Interview time", text: "Hours spent screening and interviewing, valued at the hourly cost of the people doing it." },
        { label: "Vacancy cost", text: "The role's daily CTC (monthly × 12 ÷ 365) for the days it is empty, scaled by the share of output you judge is not covered." },
        { label: "Ramp-up cost", text: "The new hire's monthly CTC for the months before full output, scaled by your estimate of the average shortfall." },
        { label: "Scale to a year", text: "Multiply by the number of leavers you expect." },
      ],
      notes: [
        "All percentages and hours are your own estimates. The defaults are examples, not benchmarks, and the result is only as good as the figures entered.",
        "Final settlement amounts such as gratuity and leave encashment are dues already earned, not turnover cost, so they are left out.",
      ],
    },
    faqs: [
      { q: "Are the default percentages industry averages?", a: "No. They are placeholders to show how the model works. Replace them with your own estimates, ideally from past hires in the same role." },
      { q: "Why value lost productivity as a share of salary?", a: "Salary is the one figure every employer has for the role. It is a conservative proxy: if the role produces more than it costs, the true loss is higher." },
      { q: "How do I get the number of leavers?", a: "From your attrition rate applied to headcount, or from last year's exits. The attrition rate calculator works out the rate from headcount and exits." },
      { q: "Should notice period and handover time be included?", a: "If a leaver's last weeks are less productive, or someone spends time on handover, you can add that under onboarding spend or extend the vacancy days." },
    ],
    seo: {
      title: "Cost of Employee Turnover Calculator: Per-Leaver Cost",
      description:
        "Model the cost of employee turnover from your own hiring spend, interview hours, vacancy days and ramp-up time, per leaver and across a year.",
      keywords: ["cost of employee turnover", "employee turnover cost calculator", "cost of attrition", "replacement cost of employee"],
    },
    related: ["attrition-rate", "payroll-cost", "manual-hr-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "overtime-leakage",
    methodIntro:
      "Leakage here means overtime paid for hours that were not approved or not worked. The method values those hours at the statutory overtime rate and scales them to a year.",
    name: "Overtime Leakage Calculator",
    title: "Overtime leakage: what unapproved paid hours cost",
    standfirst:
      "Estimate how much of your overtime bill goes on hours nobody approved or that attendance records do not support, using your own share and wage figures.",
    intro: [
      "The overtime calculator works out what a single employee is owed. This overtime leakage calculator looks the other way: at the part of the overtime bill that should not have been paid.",
      "The share of hours that are unapproved or unsupported is your own estimate, ideally from a sample audit of overtime claims against attendance. The default is an example only.",
    ],
    icon: "clock",
    fields: [
      { name: "employees", label: "Employees claiming overtime", unit: "count", initial: "50", min: 0, max: 1_000_000, integer: true },
      { name: "otHours", label: "Overtime hours paid per employee per month", unit: "count", initial: "20", min: 0, max: 500 },
      { name: "wage", label: "Average monthly ordinary rate of wages", unit: "inr", initial: "20000", min: 0, max: 10_000_000, hint: "The wage overtime is calculated on under your policy or the applicable law." },
      { name: "days", label: "Working days in the month", unit: "count", initial: "26", min: 1, max: 31, integer: true },
      { name: "hours", label: "Normal working hours per day", unit: "count", initial: "8", min: 1, max: 24 },
      { name: "leak", label: "Share of paid overtime hours unapproved or unsupported", unit: "percent", initial: "10", min: 0, max: 100, hint: "Your estimate, for example from an audit sample. Example value only." },
    ],
    compute: (v) => {
      const emp = Math.floor(num(v.employees));
      const otHours = num(v.otHours);
      const days = Math.max(1, num(v.days));
      const hours = Math.max(1, num(v.hours));
      const hourly = num(v.wage) / days / hours;
      const otRate = hourly * RULES.overtime.multiplier;
      const monthlyBill = otRate * otHours * emp;
      const share = Math.min(100, num(v.leak)) / 100;
      const leakMonthly = monthlyBill * share;
      const leakHours = otHours * emp * share;
      return {
        summary: `${pct(share * 100)} of a ${inr(monthlyBill)} monthly overtime bill is ${inr(leakMonthly)} a month, ${inr(leakMonthly * 12)} a year.`,
        cards: [
          { label: "Estimated annual leakage", value: inr(leakMonthly * 12), primary: true },
          { label: "Monthly leakage", value: inr(leakMonthly), note: `${fmt(leakHours, 1)} hours` },
          { label: "Monthly overtime bill", value: inr(monthlyBill), note: `${inr(otRate)} an hour` },
        ],
        lines: [
          {
            heading: "Calculation",
            rows: [
              { term: "Ordinary hourly rate", value: inr(hourly), note: `${inr(num(v.wage))} ÷ ${days} ÷ ${hours}` },
              { term: "Overtime hourly rate", value: inr(otRate), note: `${inr(hourly)} × ${SET_B_RULES.overtime.multiplier} (at least twice: Code on Wages 2019 s.14; formerly Factories Act s.59)` },
              { term: "Overtime hours paid a month", value: fmt(otHours * emp, 1), note: `${otHours} × ${emp} employees` },
              { term: "Monthly overtime bill", value: inr(monthlyBill), note: `${inr(otRate)} × ${fmt(otHours * emp, 1)} hours` },
              { term: "Unapproved or unsupported share", value: pct(share * 100) },
              { term: "Monthly leakage", value: inr(leakMonthly), note: "Monthly bill × unapproved share" },
            ],
          },
          { heading: "Final result", rows: [{ term: "Annual leakage (estimate)", value: inr(leakMonthly * 12), total: true, note: "Monthly leakage × 12, on your estimated share" }] },
        ],
      };
    },
    method: {
      formula:
        "Leakage = (Monthly wage ÷ Working days ÷ Hours a day) × 2 × OT hours × Employees × Unapproved share × 12",
      steps: [
        { label: "Ordinary hourly rate", text: "Monthly ordinary rate of wages divided by working days and normal daily hours." },
        { label: "Overtime rate", text: "Twice the ordinary rate: the Code on Wages 2019 (s.14, in force from 21 November 2025) sets overtime at not less than twice the normal rate, as s.59 of the Factories Act 1948 did. Your establishment's rate may differ under other laws or policy." },
        { label: "Monthly bill", text: "Overtime rate times hours paid per employee times employees." },
        { label: "Leakage", text: "The bill times your estimated share of hours that were unapproved or not supported by attendance records, then times twelve." },
      ],
      notes: [
        "The unapproved share is your estimate. Without an audit of claims against attendance, treat the result as a range to test, not a finding.",
        "Ordinary rate of wages under the Factories Act includes basic and allowances as defined in s.59(2); check what your payroll uses.",
        "State Shops and Establishments Acts set their own overtime rules, which vary by state.",
      ],
    },
    faqs: [
      { q: "What is overtime leakage?", a: "Overtime paid for hours that were not approved in advance, were not actually worked, or are not supported by attendance records. It usually comes from manual timesheets and claims entered after the fact." },
      { q: "Where does the leakage percentage come from?", a: "From you. A practical way is to sample a month's overtime claims and check each against approvals and punch records. The default is only an example." },
      { q: "Why is overtime valued at twice the ordinary rate?", a: "Section 59 of the Factories Act 1948 sets overtime at twice the ordinary rate of wages. If your establishment is under a different law or pays a different rate, the leakage scales accordingly." },
      { q: "How is this different from the overtime calculator?", a: "The overtime calculator computes what one employee is owed for hours worked. This one estimates what the organisation pays for hours it should not have paid." },
    ],
    seo: {
      title: "Overtime Leakage Calculator: Cost of Unapproved OT Hours",
      description:
        "Overtime leakage calculator: estimate the monthly and annual cost of unapproved or unsupported overtime hours at twice the ordinary rate of wages.",
      keywords: ["overtime leakage calculator", "unapproved overtime cost", "overtime cost leakage", "overtime audit"],
    },
    related: ["overtime", "payroll-cost", "manual-hr-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "manual-hr-cost",
    methodIntro:
      "Time is the cost in manual HR work. The method counts hours per task each month, values them at the cost of the people doing them, and adds a year.",
    name: "Manual HR Cost Calculator",
    title: "Manual HR admin: hours and cost per year",
    standfirst:
      "Enter the hours your team spends each month on attendance, payroll inputs, leave and queries to see the cost of manual HR work in time and rupees.",
    intro: [
      "The cost of manual HR rarely appears as a line item. It sits inside salaries: hours spent reconciling attendance, keying payroll inputs, tracking leave in spreadsheets and answering the same questions.",
      "Every hour figure here is your own estimate. The defaults are illustrative only; replace them with what your team actually spends.",
    ],
    icon: "folder",
    fields: [
      { name: "attendance", label: "Attendance reconciliation hours a month", unit: "count", initial: "10", min: 0, max: 10_000, hint: "Your estimate." },
      { name: "payroll", label: "Payroll input and checking hours a month", unit: "count", initial: "10", min: 0, max: 10_000, hint: "Your estimate." },
      { name: "leave", label: "Leave tracking hours a month", unit: "count", initial: "5", min: 0, max: 10_000, hint: "Your estimate." },
      { name: "queries", label: "Employee query and letter hours a month", unit: "count", initial: "5", min: 0, max: 10_000, hint: "Your estimate." },
      { name: "other", label: "Other manual HR hours a month", unit: "count", initial: "0", min: 0, max: 10_000, hint: "Onboarding paperwork, reports, compliance filings." },
      { name: "ctc", label: "Monthly CTC of the person doing the work", unit: "inr", initial: "40000", min: 0, max: 10_000_000 },
      { name: "workHours", label: "Working hours in their month", unit: "count", initial: "208", min: 1, max: 744, hint: "For example 26 days × 8 hours." },
    ],
    compute: (v) => {
      const hours = num(v.attendance) + num(v.payroll) + num(v.leave) + num(v.queries) + num(v.other);
      const wh = num(v.workHours);
      const hourCost = wh > 0 ? num(v.ctc) / wh : 0;
      const monthly = hours * hourCost;
      const share = wh > 0 ? (hours / wh) * 100 : 0;
      return {
        summary: `${fmt(hours, 1)} hours a month at ${inr(hourCost)} an hour is ${inr(monthly * 12)} a year.`,
        cards: [
          { label: "Annual cost of manual HR work", value: inr(monthly * 12), primary: true },
          { label: "Hours a year", value: fmt(hours * 12, 1), note: `${fmt(hours, 1)} a month` },
          { label: "Share of one person's month", value: pct(share), note: share > 100 ? "More than one full-time person" : undefined },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Attendance", value: fmt(num(v.attendance), 1) },
              { term: "Payroll inputs", value: fmt(num(v.payroll), 1) },
              { term: "Leave tracking", value: fmt(num(v.leave), 1) },
              { term: "Queries and letters", value: fmt(num(v.queries), 1) },
              { term: "Other", value: fmt(num(v.other), 1) },
              { term: "Total", value: fmt(hours, 1), total: true },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Hourly cost", value: inr(hourCost), note: `${inr(num(v.ctc))} ÷ ${wh} hours` },
              { term: "Monthly cost", value: inr(monthly), note: `${fmt(hours, 1)} hours × ${inr(hourCost)}` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Annual cost (estimate)", value: inr(monthly * 12), total: true, note: "Monthly cost × 12; time cost on your own hour estimates" },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Annual cost = (Sum of monthly task hours) × (Monthly CTC ÷ Working hours a month) × 12",
      steps: [
        { label: "List the tasks", text: "Add up the hours each month spent on each manual activity. A week's time log gives a better figure than a guess." },
        { label: "Hourly cost", text: "Monthly CTC of the person doing the work divided by their working hours in the month." },
        { label: "Value and annualise", text: "Hours times hourly cost gives the monthly figure; multiply by twelve." },
      ],
      notes: [
        "All hours are your estimates; the defaults are examples. If several people share the work, use a weighted average CTC or run the calculator per person.",
        "This counts time cost only. It does not value errors, rework, late filings or penalties.",
      ],
    },
    faqs: [
      { q: "How do I estimate the hours?", a: "Ask the people doing the work to log time against each task for one or two payroll cycles. Month-end and payroll weeks usually take more than an average week suggests." },
      { q: "Why use CTC rather than salary for the hourly cost?", a: "CTC includes employer PF, gratuity provision and other costs of employing the person, so it reflects what an hour of their time actually costs the organisation." },
      { q: "Does the result mean those hours can be saved?", a: "Not automatically. It shows where time goes. How much of it a system can remove depends on the process and on how the system is set up." },
      { q: "Can I include managers' time?", a: "Yes. Add their hours under other, but use a separate run if their hourly cost is very different, so the average is not distorted." },
    ],
    seo: {
      title: "Cost of Manual HR Calculator: Hours and Rupees per Year",
      description:
        "Work out the cost of manual HR admin from your own hours on attendance, payroll inputs, leave and queries, valued at the CTC of the person doing it.",
      keywords: ["cost of manual hr", "manual hr cost calculator", "hr admin time cost", "manual payroll cost"],
    },
    related: ["plan-cost", "payroll-cost", "overtime-leakage"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "working-days",
    methodIntro:
      "The count walks through each date in the period, drops the weekly offs, then subtracts holidays that fall on a working day. The method sets out each rule.",
    name: "Working Days Calculator",
    title: "Working days in a period, after week-offs and holidays",
    standfirst:
      "Choose a start date, a number of calendar days and your weekly-off pattern, then subtract holidays, to count the working days in any period.",
    intro: [
      "Working days drive pay for part-months, leave counts and notice periods. This working days calculator counts them date by date so the week-offs fall on the right days.",
      "Holidays are entered as a number because they are set by your holiday list and by state notifications, which vary by state. Count only holidays that fall on a working day.",
    ],
    icon: "calendar",
    fields: [
      { name: "day", label: "Start day", unit: "count", initial: "1", min: 1, max: 31, integer: true },
      { name: "month", label: "Start month", unit: "count", initial: "October", min: 0, max: 0, options: MONTHS },
      { name: "year", label: "Start year", unit: "count", initial: "2026", min: 2000, max: 2100, integer: true },
      { name: "length", label: "Calendar days in the period", unit: "count", initial: "31", min: 1, max: 3660, integer: true, hint: "Including the start day." },
      { name: "offs", label: "Weekly off pattern", unit: "count", initial: "Sunday only", min: 0, max: 0, options: Object.keys(offPatterns) },
      { name: "holidays", label: "Holidays falling on working days", unit: "count", initial: "0", min: 0, max: 366, integer: true, hint: "From your holiday list. Do not count holidays that fall on a weekly off." },
    ],
    compute: (v) => {
      const mi = Math.max(0, MONTHS.indexOf(String(v.month)));
      const y = Math.floor(num(v.year)) || 2026;
      const daysInMonth = utc(y, mi + 1, 0).getUTCDate();
      const d = Math.min(Math.max(1, Math.floor(num(v.day))), daysInMonth);
      const start = utc(y, mi, d);
      const len = Math.max(1, Math.floor(num(v.length)));
      const end = addDays(start, len - 1);
      const offs = offPatterns[String(v.offs ?? "Sunday only")] ?? [6];
      let weekOffs = 0;
      for (let i = 0; i < len; i++) if (offs.includes(weekdayIndex(addDays(start, i)))) weekOffs++;
      const before = len - weekOffs;
      const hol = Math.min(Math.floor(num(v.holidays)), before);
      const working = before - hol;
      return {
        summary: `${fmtDate(start)} to ${fmtDate(end)}: ${len} days, ${weekOffs} weekly offs, ${hol} holidays, ${working} working days.`,
        cards: [
          { label: "Working days", value: `${working}`, primary: true },
          { label: "Weekly offs", value: `${weekOffs}`, note: String(v.offs ?? "Sunday only") },
          { label: "Period ends", value: fmtDate(end) },
        ],
        lines: [
          {
            heading: "Calculation",
            rows: [
              { term: "Calendar days", value: `${len}`, note: `${fmtDate(start)} to ${fmtDate(end)}` },
              { term: "Less weekly offs", value: `− ${weekOffs}` },
              { term: "Less holidays on working days", value: `− ${hol}` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Working days", value: `${working}`, total: true, note: `${len} − ${weekOffs} − ${hol}` },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Working days = Calendar days in the period − Weekly offs in the period − Holidays falling on working days",
      steps: [
        { label: "Fix the period", text: "The start date and the number of calendar days, counting both the first and last day." },
        { label: "Count weekly offs", text: "Each date is checked against the weekly-off pattern, so a 31-day month with five Sundays gives five, not four." },
        { label: "Subtract holidays", text: "Only holidays that fall on a working day reduce the count. A holiday on a Sunday under a Sunday-off pattern is already excluded." },
      ],
      notes: [
        "Alternate-Saturday patterns (such as second and fourth Saturdays off) are not built in; subtract those Saturdays as holidays.",
        "Public and festival holidays vary by state and by establishment; use your notified holiday list.",
        "Whether pay is calculated on working days, calendar days or a fixed divisor is a payroll policy choice.",
      ],
    },
    faqs: [
      { q: "How many working days are in a month?", a: "It depends on the month and the weekly-off pattern. A 30-day month with Sunday off has 25 or 26 working days before holidays, depending on how many Sundays fall in it." },
      { q: "Should holidays on a Sunday be subtracted?", a: "No, if Sunday is already your weekly off. Subtract only holidays that fall on days that would otherwise be worked." },
      { q: "How do I handle second and fourth Saturdays off?", a: "Choose Sunday only as the pattern, then add the number of off Saturdays in the period to the holidays figure." },
      { q: "Is pay calculated on working days?", a: "Some employers divide monthly pay by working days, others by calendar days or a fixed 26 or 30. The pro-rata and LOP calculators let you choose the divisor." },
    ],
    seo: {
      title: "Working Days Calculator: Count Days After Offs and Holidays",
      description:
        "Working days calculator: count working days in any period from a start date, number of days and weekly-off pattern, then subtract holidays you enter.",
      keywords: ["working days calculator", "working days in a month", "business days calculator india", "count working days"],
    },
    related: ["pro-rata-salary", "lop-deduction", "notice-period-end-date", "leave-balance"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "leave-balance",
    methodIntro:
      "Leave balance is what has been credited, plus what was carried forward, less what has been used. The method shows accrual month by month or as an upfront credit.",
    name: "Leave Balance Calculator",
    title: "Leave balance to date: accrual, carry-forward and leave taken",
    standfirst:
      "Enter the annual entitlement, how it is credited, months completed in the leave year, carry-forward and leave taken to see the balance available today.",
    intro: [
      "Most leave policies credit earned leave either monthly in arrears or as a lump sum at the start of the year. This leave balance calculator handles both and shows the accrued figure alongside the balance.",
      "Entitlement, accrual method, carry-forward limits and rounding are set by your leave policy and, for some establishments, by state Shops and Establishments law or the Factories Act, which vary.",
    ],
    icon: "calendar",
    fields: [
      { name: "annual", label: "Annual leave entitlement (days)", unit: "count", initial: "18", min: 0, max: 365 },
      { name: "method", label: "How leave is credited", unit: "count", initial: "Monthly accrual", min: 0, max: 0, options: ["Monthly accrual", "Credited at start of year"] },
      { name: "months", label: "Months completed in the leave year", unit: "count", initial: "6", min: 0, max: 12, integer: true },
      { name: "carried", label: "Carried forward from last year", unit: "count", initial: "5", min: 0, max: 1000 },
      { name: "taken", label: "Leave taken this year", unit: "count", initial: "4", min: 0, max: 1000 },
      { name: "rounding", label: "Round accrued leave to", unit: "count", initial: "Half day", min: 0, max: 0, options: ["No rounding", "Half day", "Full day (down)"] },
    ],
    compute: (v) => {
      const annual = num(v.annual);
      const months = Math.min(12, Math.floor(num(v.months)));
      const upfront = v.method === "Credited at start of year";
      let accrued = upfront ? annual : (annual / 12) * months;
      if (!upfront) {
        if (v.rounding === "Half day") accrued = Math.floor(accrued * 2) / 2;
        else if (v.rounding === "Full day (down)") accrued = Math.floor(accrued);
      }
      const carried = num(v.carried);
      const taken = num(v.taken);
      const available = accrued + carried;
      const balance = available - taken;
      return {
        summary: `${fmt(accrued, 2)} accrued + ${fmt(carried, 2)} carried − ${fmt(taken, 2)} taken = ${fmt(balance, 2)} days.`,
        cards: [
          { label: balance >= 0 ? "Leave balance" : "Leave taken in advance", value: `${fmt(Math.abs(balance), 2)} days`, primary: true },
          { label: "Accrued this year", value: `${fmt(accrued, 2)} days`, note: upfront ? "Full year credited upfront" : `${fmt(annual / 12, 2)} a month × ${months}` },
          { label: "Year-end accrual", value: `${fmt(annual + carried - taken, 2)} days`, note: "If no more leave is taken" },
        ],
        lines: [
          {
            heading: "Calculation",
            rows: [
              { term: "Accrued this year", value: fmt(accrued, 2), note: upfront ? "Credited at start of year" : `${annual} ÷ 12 × ${months}${v.rounding && v.rounding !== "No rounding" ? `, rounded (${v.rounding})` : ""}` },
              { term: "Carried forward", value: `+ ${fmt(carried, 2)}` },
              { term: "Available", value: fmt(available, 2) },
              { term: "Taken", value: `− ${fmt(taken, 2)}` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: balance >= 0 ? "Balance" : "Overdrawn", value: fmt(Math.abs(balance), 2), total: true },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Balance = (Annual entitlement ÷ 12 × Months completed, or the full entitlement if credited upfront) + Carried forward − Leave taken",
      steps: [
        { label: "Accrue", text: "Under monthly accrual, one-twelfth of the annual entitlement is credited for each completed month. Under upfront credit, the full year is available from day one." },
        { label: "Round", text: "Many policies round accrued leave to half or whole days. Choose the rule your policy uses." },
        { label: "Add carry-forward", text: "Leave carried from the previous year, after any cap your policy applies." },
        { label: "Subtract leave taken", text: "Approved leave already availed in the current leave year." },
      ],
      notes: [
        "Carry-forward caps, lapse rules and encashment are policy matters, and statutory minimums for some establishments vary by state.",
        "Under the Factories Act, annual leave with wages accrues on days worked in the previous calendar year rather than months; this calculator uses the monthly policy method. Check which rule applies to your workers.",
      ],
    },
    faqs: [
      { q: "How is monthly leave accrual calculated?", a: "Divide the annual entitlement by twelve and multiply by completed months. Eighteen days a year accrues 1.5 days a month, so 9 days after six months." },
      { q: "What if the balance is negative?", a: "It means more leave has been taken than accrued so far. Some policies allow this against future accrual; others treat the excess as loss of pay." },
      { q: "Does carry-forward have a limit?", a: "Usually, under the leave policy, and for some establishments under state law, which varies. Enter the carried-forward figure after any cap has been applied." },
      { q: "Is the balance the same as the encashable amount?", a: "Not always. Policies often limit how many days can be encashed. Use the leave encashment calculator once you know the encashable days." },
    ],
    seo: {
      title: "Leave Balance Calculator: Accrued Leave to Date",
      description:
        "Leave balance calculator: work out accrued leave from annual entitlement and months completed, add carry-forward, subtract leave taken, see days left.",
      keywords: ["leave balance calculator", "leave accrual calculator", "earned leave calculation", "accrued leave calculator"],
    },
    related: ["leave-encashment", "working-days", "lop-deduction"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "notice-period-end-date",
    methodIntro:
      "The last working day depends on two policy choices: whether notice runs in calendar days, months or working days, and whether the resignation day itself counts. The method applies both.",
    name: "Notice Period End Date Calculator",
    title: "Last working day from a resignation date",
    standfirst:
      "Enter the resignation date and notice period to find the last working day, counted in calendar days, months or working days as your policy specifies.",
    intro: [
      "Appointment letters state notice in days or months, and teams often disagree by a day or two on when it ends. This last working day calculator applies the counting rule you choose and shows the date.",
      "Which rule applies is set by the employment contract or policy, and for some workers by the standing orders that cover them. Check the document, then choose the matching options.",
    ],
    icon: "calendar",
    fields: [
      { name: "day", label: "Resignation day", unit: "count", initial: "1", min: 1, max: 31, integer: true },
      { name: "month", label: "Resignation month", unit: "count", initial: "October", min: 0, max: 0, options: MONTHS },
      { name: "year", label: "Resignation year", unit: "count", initial: "2026", min: 2000, max: 2100, integer: true },
      { name: "length", label: "Notice period length", unit: "count", initial: "30", min: 0, max: 365, integer: true },
      { name: "unit", label: "Notice counted in", unit: "count", initial: "Calendar days", min: 0, max: 0, options: ["Calendar days", "Months", "Working days"] },
      { name: "startRule", label: "Notice starts", unit: "count", initial: "On the resignation day", min: 0, max: 0, options: ["On the resignation day", "On the next day"] },
      { name: "offs", label: "Weekly off pattern (working-day notice only)", unit: "count", initial: "Sunday only", min: 0, max: 0, options: Object.keys(offPatterns) },
      { name: "waived", label: "Days waived or bought out", unit: "count", initial: "0", min: 0, max: 365, integer: true, hint: "Counted in the same unit as the notice; months are not reduced this way." },
    ],
    compute: (v) => {
      const mi = Math.max(0, MONTHS.indexOf(String(v.month)));
      const y = Math.floor(num(v.year)) || 2026;
      const dim = utc(y, mi + 1, 0).getUTCDate();
      const d = Math.min(Math.max(1, Math.floor(num(v.day))), dim);
      const resign = utc(y, mi, d);
      const start = v.startRule === "On the next day" ? addDays(resign, 1) : resign;
      const unit = String(v.unit ?? "Calendar days");
      const len = Math.floor(num(v.length));
      const waived = unit === "Months" ? 0 : Math.min(Math.floor(num(v.waived)), len);
      const n = len - waived;
      let last: Date;
      let rule: string;
      if (n <= 0) {
        last = start;
        rule = "No notice to serve: the last working day is the start date";
      } else if (unit === "Months") {
        const sy = start.getUTCFullYear();
        const sm = start.getUTCMonth() + n;
        const sd = start.getUTCDate();
        const dimTarget = utc(sy, sm + 1, 0).getUTCDate();
        const sameDate = utc(sy, sm, Math.min(sd, dimTarget));
        last = sd > dimTarget ? sameDate : addDays(sameDate, -1);
        rule = `${n} ${n === 1 ? "month" : "months"} from the start date, ending the day before the same date`;
      } else if (unit === "Working days") {
        const offs = offPatterns[String(v.offs ?? "Sunday only")] ?? [6];
        let count = 0;
        let cur = start;
        let guard = 0;
        while (guard < 5000) {
          if (!offs.includes(weekdayIndex(cur))) count++;
          if (count >= n) break;
          cur = addDays(cur, 1);
          guard++;
        }
        last = cur;
        rule = `${n} working days from the start date, skipping ${String(v.offs ?? "Sunday only").toLowerCase()} offs`;
      } else {
        last = addDays(start, n - 1);
        rule = `${n} calendar days counting the start date as day 1`;
      }
      const calDays = Math.round((last.getTime() - start.getTime()) / DAY_MS) + (n > 0 ? 1 : 0);
      return {
        summary: `Resigned ${fmtDate(resign)}; ${rule}.`,
        cards: [
          { label: "Last working day", value: fmtDate(last), primary: true },
          { label: "Notice starts", value: fmtDate(start) },
          { label: "Calendar days served", value: `${calDays}`, note: waived ? `${waived} waived or bought out` : undefined },
        ],
        lines: [
          {
            heading: "Calculation",
            rows: [
              { term: "Resignation date", value: fmtDate(resign) },
              { term: "Notice starts", value: fmtDate(start), note: String(v.startRule ?? "On the resignation day") },
              { term: "Notice to serve", value: `${n} ${unit === "Months" ? (n === 1 ? "month" : "months") : unit.toLowerCase()}`, note: waived ? `${len} less ${waived} waived` : undefined },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Last working day", value: fmtDate(last), total: true, note: rule },
            ],
          },
        ],
      };
    },
    method: {
      formula:
        "Calendar days: Start + (N − 1) days. Months: the day before the same date N months later. Working days: the Nth day from the start that is not a weekly off.",
      steps: [
        { label: "Fix the start", text: "Some policies count the resignation day as day one; others start the next day. The contract or policy decides." },
        { label: "Apply the unit", text: "Calendar-day notice counts every day. Month notice ends the day before the same date in the later month (1 October to 31 October for one month); where that date does not exist, the month's last day is used. Working-day notice skips weekly offs." },
        { label: "Adjust for waiver or buy-out", text: "Days the employer waives or the employee buys out shorten the period. Enter them in the same unit as the notice." },
      ],
      notes: [
        "Holidays are not skipped in working-day notice; if your policy excludes them, add them to the notice length.",
        "Whether leave taken during notice extends it is a policy question; this calculator does not extend the period for leave.",
        "The month rule used here is a common convention, not a statutory one. Check your contract's wording.",
      ],
    },
    faqs: [
      { q: "Does the resignation day count as the first day of notice?", a: "It depends on the contract or policy. Many count the day the resignation is accepted or submitted; some start the next day. The calculator offers both." },
      { q: "Is a 30-day notice the same as one month?", a: "Not always. Thirty calendar days from 1 February ends on 2 March, while one month ends on 28 February or 29 February. Check whether the contract says days or months." },
      { q: "Do weekends count in the notice period?", a: "For calendar-day or month notice, yes. They are skipped only if the contract defines notice in working days." },
      { q: "Can the notice period be shortened?", a: "Yes, if the employer waives part of it or the contract allows the employee to pay in lieu. The notice pay calculator values the shortfall." },
    ],
    seo: {
      title: "Last Working Day Calculator: Notice Period End Date",
      description:
        "Last working day calculator: find when notice ends from the resignation date, counted in calendar days, months or working days, with waived days.",
      keywords: ["last working day calculator", "notice period end date calculator", "notice period calculator", "resignation last date calculator"],
    },
    related: ["notice-pay", "full-and-final", "working-days"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "eps-pension",
    methodIntro:
      "The Employees' Pension Scheme sets a fixed formula. The method applies it to the pensionable salary and service you enter and states what the estimate leaves out.",
    name: "Employees' Pension Scheme (EPS) Calculator",
    title: "Employees' Pension Scheme (EPS) pension estimate under the 1995 scheme",
    standfirst:
      "Pensionable salary times pensionable service, divided by 70, once ten years of service are complete, with the salary capped at the EPF wage ceiling.",
    intro: [
      "Part of the employer's PF contribution goes to the Employees' Pension Scheme 1995, which pays a monthly pension from age 58. This EPS pension calculator applies the scheme formula to the figures you enter.",
      "It applies the 1995 scheme rules: the ten-year condition, rounding of service, two years' weightage for 20 or more years, the reduction for early pension from 50, the increase for deferment to 60, and the ₹1,000 minimum pension. Higher-pension cases and pre-2014 service on the ₹6,500 ceiling are outside it.",
    ],
    icon: "shield",
    fields: [
      { name: "salary", label: "Average monthly pensionable salary", unit: "inr", initial: "15000", min: 0, max: 10_000_000, hint: "Average basic and DA over the final 60 months of membership." },
      { name: "years", label: "Pensionable service (years)", unit: "years", initial: "25", min: 0, max: 60, integer: true },
      { name: "months", label: "Additional months of service", unit: "count", initial: "0", min: 0, max: 11, integer: true, hint: "Six months or more is rounded up to a year in pensionable service." },
      { name: "cap", label: "Cap salary at the wage ceiling", unit: "count", initial: "1", min: 0, max: 0, toggle: true, hint: "On for most members. Off only for a higher-pension case." },
      { name: "age", label: "Age when pension starts", unit: "years", initial: "58", min: 50, max: 60, integer: true, hint: "58 is normal. 50 to 57 gives a reduced early pension; 59 to 60 a deferred, higher pension." },
    ],
    compute: (v) => {
      const E = SET_B_RULES.eps;
      const ceiling = E.wageCeiling;
      const raw = num(v.salary);
      const capOn = v.cap !== false && v.cap !== "0";
      const salary = capOn ? Math.min(raw, ceiling) : raw;
      const years = Math.floor(num(v.years));
      const months = Math.min(11, Math.floor(num(v.months)));
      const ageRaw = Math.floor(num(v.age)) || E.normalAge;
      const age = Math.min(E.latestAge, Math.max(E.earliestAge, ageRaw));
      // Para 10: a part-year of six months or more counts as a full year.
      const service = years + (months >= E.roundUpMonths ? 1 : 0);
      const eligible = service >= E.minServiceYears;
      // Weightage of 2 years for 20+ years' pensionable service, on superannuation (58 or later).
      const weightage = eligible && service >= E.weightageMinService && age >= E.normalAge ? E.weightageYears : 0;
      const counted = service + weightage;
      const base = eligible ? (salary * counted) / E.divisor : 0;
      const yearsEarly = Math.max(0, E.normalAge - age);
      const yearsLate = Math.max(0, age - E.normalAge);
      const factor = yearsEarly
        ? Math.pow(1 - E.earlyReductionRate, yearsEarly)
        : Math.pow(1 + E.deferIncreaseRate, yearsLate);
      const adjusted = base * factor;
      const minApplied = eligible && adjusted < E.minPension;
      const pension = eligible ? Math.round(Math.max(adjusted, E.minPension)) : 0;
      const ageNote = yearsEarly
        ? `Reduced 4% a year (compounded) for ${yearsEarly} ${yearsEarly === 1 ? "year" : "years"} before 58: × ${fmt(factor, 4)}`
        : yearsLate
        ? `Deferred ${yearsLate} ${yearsLate === 1 ? "year" : "years"} beyond 58, 4% a year: × ${fmt(factor, 4)}`
        : "Pension at 58, no adjustment";
      return {
        summary: eligible
          ? `${inr(salary)} × ${counted} years ÷ 70${factor !== 1 ? ` × ${fmt(factor, 4)}` : ""} = ${inr(pension)} a month from age ${age}${minApplied ? " (minimum pension)" : ""}.`
          : `${years} years ${months} months of service. Ten years are needed for a monthly pension; a withdrawal benefit applies instead.`,
        cards: [
          { label: eligible ? "Estimated monthly pension" : "Monthly pension not yet payable", value: eligible ? inr(pension) : "Not applicable", primary: true, note: eligible ? `From age ${age}${minApplied ? `, raised to the ${inr(E.minPension)} minimum` : ""}` : "Ten years' service required" },
          { label: "Pensionable salary", value: inr(salary), note: capOn && raw > ceiling ? `Capped at ${inr(ceiling)}` : undefined },
          { label: "Pensionable service", value: `${counted} years`, note: weightage ? `${service} + ${weightage} years' weightage` : months ? (months >= 6 ? "Six months or more rounds up" : "Under six months ignored") : undefined },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Average monthly salary (last 60 months)", value: inr(raw) },
              { term: "Service", value: `${years} years ${months} months` },
              { term: "Age when pension starts", value: `${age}`, note: ageRaw !== age ? `Limited to ${E.earliestAge} to ${E.latestAge}` : undefined },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Pensionable salary", value: inr(salary), note: capOn ? `Lower of ${inr(raw)} and ${inr(ceiling)}` : "Not capped (higher-pension case)" },
              { term: "Pensionable service", value: `${service} years`, note: `Completed years, plus one if ${E.roundUpMonths} months or more` },
              { term: "Weightage", value: weightage ? `+ ${weightage} years` : "Not applicable", muted: !weightage, note: `${E.weightageYears} years if service is ${E.weightageMinService}+ and pension starts at 58 or later` },
              { term: "Pension at 58", value: eligible ? inr(base) : "Not applicable", muted: !eligible, note: `${inr(salary)} × ${counted} ÷ ${E.divisor}` },
              { term: "Age adjustment", value: eligible && factor !== 1 ? inr(adjusted) : "Not applicable", muted: !eligible || factor === 1, note: ageNote },
              { term: "Minimum pension", value: minApplied ? inr(E.minPension) : "Not applicable", muted: !minApplied, note: `${inr(E.minPension)} a month from 1 September 2014` },
            ],
          },
          {
            heading: "Final result",
            rows: [{ term: "Monthly pension", value: eligible ? inr(pension) : "Not applicable", total: true, muted: !eligible }],
          },
        ],
      };
    },
    method: {
      formula: `Monthly pension = Pensionable salary × Pensionable service ÷ 70 (salary capped at ${inr(RULES.epf.wageCeiling)} for most members)`,
      steps: [
        { label: "Pensionable salary", text: "The average monthly pay (basic and DA) on which contributions were made over the last 60 months of membership, capped at the statutory wage ceiling for members not covered by a higher-pension option." },
        { label: "Pensionable service", text: "Years of contributory service, with six months or more counted as a full year." },
        { label: "Check eligibility", text: "A monthly pension needs at least ten years of pensionable service. Below that, a withdrawal benefit is paid instead." },
        { label: "Apply the formula", text: "Salary times service (plus any weightage), divided by 70, adjusted for age at start and raised to the ₹1,000 minimum." },
      ],
      notes: [
        "Higher-pension cases (contributions on wages above the ceiling under a joint option) follow different salary rules and are outside this estimate.",
        "Early pension from age 50 is reduced by 4% for each year short of 58, applied compounding as in the EPFO reduction table (unverified against a primary EPFO table: some sources apply 4% × years simply). Deferment to 59 or 60 adds 4% a year (compounding assumed, unverified). Weightage of two years for 20+ years' service is given only on pension at 58 or later.",
        "A minimum pension of ₹1,000 a month applies from 1 September 2014 and is applied here, including to a reduced early pension. Members with service before 1 September 2014 have that part valued on the ₹6,500 ceiling (pro-rata formula), not modelled here. Service before 16 November 1995 (past service benefit) is not included.",
        "Pension is not paid where service is under ten years. The withdrawal benefit uses a separate table and is not calculated here.",
      ],
    },
    faqs: [
      { q: "What is the EPS pension formula?", a: "Monthly pension = pensionable salary × pensionable service ÷ 70. For most members the pensionable salary is capped at the EPF wage ceiling of ₹15,000 a month." },
      { q: "What is the maximum EPS pension on a ₹15,000 ceiling?", a: "It depends on service. At 35 years, ₹15,000 × 35 ÷ 70 gives ₹7,500 a month. Service beyond that adds proportionally on the same formula." },
      { q: "What if I have less than ten years of service?", a: "A monthly pension is not payable. You can claim a withdrawal benefit through the EPFO, or carry the service forward to a new employer through a scheme certificate." },
      { q: "Can I take EPS pension before 58?", a: "From 50, as a reduced early pension. The pension is reduced by 4% for each year short of 58. Set the age field to see the reduced figure." },
      { q: "Does this cover the higher pension option?", a: "Not reliably. Higher-pension cases use pay above the ceiling and their own averaging rules. Switch off the cap only for a rough indication, and confirm with the EPFO." },
    ],
    seo: {
      title: "EPS Pension Calculator: Monthly Pension Under EPS 1995",
      description:
        "EPS pension calculator: estimate the monthly pension under EPS 1995 from pensionable salary and service ÷ 70, with the wage ceiling and ten-year rule.",
      keywords: ["eps pension calculator", "employee pension scheme calculator", "eps 1995 pension formula", "pf pension calculator"],
    },
    related: ["pf", "gratuity", "ctc"],
  },
];

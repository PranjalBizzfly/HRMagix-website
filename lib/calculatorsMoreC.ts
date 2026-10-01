/**
 * Calculators, set C: HR to employee ratio, revenue per employee, eNPS and
 * leave liability.
 *
 * None of these is statutory and none carries a benchmark. Every figure is
 * an input the user sets; the defaults are neutral examples, not industry
 * data. Leave liability values the accrued balance at a wage basis the user
 * chooses as a policy matter. It is not an actuarial valuation.
 */

import type { Calculator } from "./calculators";
import { inr, safe } from "./statutory";

const num = safe;
const r2 = (n: number) => Math.round(n * 100) / 100;
const fmt = (n: number, dp = 0) => r2(n).toLocaleString("en-IN", { maximumFractionDigits: dp });
const pct = (n: number) => `${fmt(n, 2)}%`;
const signed = (n: number) => `${n > 0 ? "+" : ""}${fmt(n, 1)}`;

const PERIODS: Record<string, number> = {
  "Annual": 1,
  "Half-year": 2,
  "Quarter": 4,
  "Month": 12,
};

export const calculatorsMoreC: Calculator[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "hr-to-employee-ratio",
    methodIntro:
      "Two counts and one division. The care goes into deciding who counts as HR and who counts as an employee, because that choice moves the answer more than anything else.",
    name: "HR to Employee Ratio Calculator",
    title: "HR to employee ratio: HR staff per head of workforce",
    standfirst:
      "Enter HR staff in full-time equivalents and the number of employees to see the HR to employee ratio, HR staff per 100 employees and employees served per HR person.",
    intro: [
      "The HR to employee ratio compares the size of the HR function with the workforce it supports. It is usually stated as HR staff per 100 employees, or as one HR person for every so many employees.",
      "Use it to track your own organisation over time, or to test a hiring plan before headcount changes. It says nothing on its own about whether HR is doing a good job.",
    ],
    icon: "users",
    fields: [
      { name: "hr", label: "HR staff (full-time equivalent)", unit: "count", initial: "4", min: 0, max: 100_000, hint: "Count part-time HR roles as fractions, for example a half-time payroll executive as 0.5." },
      { name: "employees", label: "Total employees", unit: "count", initial: "350", min: 0, max: 10_000_000, integer: true, hint: "Use the same population every time: on-roll only, or including contract staff HR also supports." },
    ],
    compute: (v) => {
      const hr = num(v.hr);
      const emp = Math.floor(num(v.employees));
      const per100 = emp > 0 ? (hr / emp) * 100 : 0;
      const served = hr > 0 ? emp / hr : 0;
      const ok = hr > 0 && emp > 0;
      return {
        summary: ok
          ? `${fmt(hr, 2)} HR FTE for ${fmt(emp)} employees is ${fmt(per100, 2)} HR staff per 100 employees, or 1 to ${fmt(served, 1)}.`
          : "Enter HR staff and employees above zero to see the ratio.",
        cards: [
          { label: "HR staff per 100 employees", value: ok ? fmt(per100, 2) : "Not available", primary: true },
          { label: "Ratio", value: ok ? `1 : ${fmt(served, 1)}` : "Not available", note: "One HR FTE per this many employees" },
          { label: "HR as a share of workforce", value: ok ? pct(per100) : "Not available" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "HR staff (FTE)", value: fmt(hr, 2) },
              { term: "Employees", value: fmt(emp) },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Employees per HR FTE", value: ok ? fmt(served, 1) : "Not available", note: `Employees ÷ HR FTE = ${fmt(emp)} ÷ ${fmt(hr, 2)}` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "HR staff per 100 employees", value: ok ? fmt(per100, 2) : "Not available", note: `HR FTE ÷ Employees × 100 = ${fmt(hr, 2)} ÷ ${fmt(emp)} × 100`, total: true },
            ],
          },
        ],
      };
    },
    method: {
      formula: "HR staff per 100 employees = HR FTE ÷ Employees × 100; Employees per HR FTE = Employees ÷ HR FTE",
      steps: [
        { label: "Define HR", text: "Decide which roles count: generalists, payroll, recruitment, learning, HR operations. Roles outsourced to a vendor are not in the count, which is one reason ratios differ between organisations." },
        { label: "Convert to FTE", text: "Add part-time and shared roles as fractions of a full-time role, so one person splitting time between HR and admin counts only for the HR share." },
        { label: "Fix the employee base", text: "Use headcount on a stated date, and say whether contract and fixed-term staff are included. Keep the definition the same each time you measure." },
        { label: "Divide", text: "Divide HR FTE by employees for the per-100 figure, and employees by HR FTE for the one-to-many form." },
      ],
      notes: [
        "The ratio describes capacity, not quality. A lower ratio can reflect good tooling and self-service as easily as an overstretched team.",
        "Comparisons between organisations are weak because the definition of HR, the use of outsourcing and the complexity of the workforce all differ. Trend within your own organisation is the more useful reading.",
      ],
    },
    faqs: [
      { q: "How do I calculate the HR to employee ratio?", a: "Divide the number of HR staff, in full-time equivalents, by the total number of employees and multiply by 100 to get HR staff per 100 employees. Dividing employees by HR staff gives the one-to-many form." },
      { q: "What is a good HR to employee ratio?", a: "There is no single right figure. It depends on how much work is automated or outsourced, how many locations and states you operate in, and how complex your workforce is. Track your own ratio over time and read it alongside service measures." },
      { q: "Should payroll staff be counted as HR?", a: "If payroll sits in HR in your organisation, count it. If it sits in finance, leave it out. What matters is applying the same definition each time." },
      { q: "Does the ratio fall as the company grows?", a: "Often, because some HR work does not grow in step with headcount. But new locations, new states or a shift to more complex hiring can push it the other way." },
    ],
    seo: {
      title: "HR to Employee Ratio Calculator: HR Staff per 100 Employees",
      description:
        "HR to employee ratio calculator: enter HR staff in FTE and total employees to see HR per 100 employees, the one-to-many ratio and what it can tell you.",
      keywords: ["hr to employee ratio", "hr to employee ratio calculator", "hr staffing ratio", "hr per 100 employees"],
    },
    related: ["manual-hr-cost", "payroll-cost", "attrition-rate"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "revenue-per-employee",
    methodIntro:
      "Revenue for a period divided by the people who earned it over that period. The method spends most of its time on the denominator, because average headcount and FTE give different answers.",
    name: "Revenue per Employee Calculator",
    title: "Revenue per employee: revenue per head and per FTE",
    standfirst:
      "Enter revenue for a period and average headcount to see revenue per employee, per full-time equivalent if you have it, and an annualised figure for comparison.",
    intro: [
      "Revenue per employee is a broad measure of workforce productivity: how much revenue the organisation generates for each person on the payroll. This revenue per employee calculator works it out per head and, optionally, per FTE.",
      "It is most useful as a trend within one organisation. Business model, outsourcing and pricing move it as much as productivity does.",
    ],
    icon: "chart",
    fields: [
      { name: "revenue", label: "Revenue for the period", unit: "inr", initial: "120000000", min: 0, max: 1e13, hint: "Operating revenue from your accounts for the period selected below." },
      { name: "period", label: "Period the revenue covers", unit: "count", initial: "Annual", min: 0, max: 0, options: Object.keys(PERIODS) },
      { name: "start", label: "Headcount at start of period", unit: "count", initial: "95", min: 0, max: 10_000_000, integer: true },
      { name: "end", label: "Headcount at end of period", unit: "count", initial: "105", min: 0, max: 10_000_000, integer: true },
      { name: "fte", label: "Average FTE (optional)", unit: "count", initial: "0", min: 0, max: 10_000_000, hint: "Leave at 0 to skip. Counts part-time staff as fractions of a full-time role." },
    ],
    compute: (v) => {
      const rev = num(v.revenue);
      const period = typeof v.period === "string" && PERIODS[v.period] ? v.period : "Annual";
      const factor = PERIODS[period];
      const start = Math.floor(num(v.start));
      const end = Math.floor(num(v.end));
      const avg = (start + end) / 2;
      const fte = num(v.fte);
      const perHead = avg > 0 ? rev / avg : 0;
      const perFte = fte > 0 ? rev / fte : 0;
      return {
        summary: avg > 0
          ? `${inr(rev)} over an average of ${fmt(avg, 1)} employees is ${inr(perHead)} per employee for the ${period.toLowerCase()} period.`
          : "Enter headcount above zero to see revenue per employee.",
        cards: [
          { label: "Revenue per employee", value: avg > 0 ? inr(perHead) : "Not available", primary: true, note: `${period} period` },
          { label: "Annualised per employee", value: avg > 0 ? inr(perHead * factor) : "Not available", note: factor === 1 ? "Already annual" : `× ${factor}, assumes the period is typical` },
          { label: "Revenue per FTE", value: fte > 0 ? inr(perFte) : "Not entered" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Revenue", value: inr(rev), note: `${period} period` },
              { term: "Headcount at start", value: fmt(start) },
              { term: "Headcount at end", value: fmt(end) },
              { term: "Average FTE", value: fte > 0 ? fmt(fte, 1) : "Not entered", muted: fte <= 0 },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Average headcount", value: fmt(avg, 1), note: `(Start + End) ÷ 2 = (${fmt(start)} + ${fmt(end)}) ÷ 2` },
              { term: "Revenue per FTE", value: fte > 0 ? inr(perFte) : "Not entered", muted: fte <= 0, note: fte > 0 ? `Revenue ÷ Average FTE = ${inr(rev)} ÷ ${fmt(fte, 1)}` : "No FTE entered" },
              { term: "Annualised revenue per employee", value: avg > 0 ? inr(perHead * factor) : "Not available", note: `Revenue per employee × ${factor} period(s) a year` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "Revenue per employee", value: avg > 0 ? inr(perHead) : "Not available", note: `Revenue ÷ Average headcount = ${inr(rev)} ÷ ${fmt(avg, 1)}`, total: true },
            ],
          },
        ],
      };
    },
    method: {
      formula: "Revenue per employee = Revenue for the period ÷ Average headcount; Average headcount = (Start + End) ÷ 2",
      steps: [
        { label: "Take revenue for one period", text: "Use operating revenue from the accounts for the period. Exclude one-off income such as asset sales if you want the figure to reflect the operating business." },
        { label: "Average the headcount", text: "Average the opening and closing headcount, so a company that hired heavily during the year is not judged against its year-end size. Monthly averages are more precise if you have them." },
        { label: "Divide", text: "Divide revenue by average headcount. If you have average FTE, divide by that as well to remove the effect of part-time staff." },
        { label: "Annualise only to compare", text: "Multiplying a quarter or month by the number of periods in a year assumes that period was typical. Seasonal businesses should compare like periods instead." },
      ],
      notes: [
        "Contract and outsourced workers produce revenue but often sit outside headcount, which flatters the figure. State who is included.",
        "The measure ignores cost and margin. Revenue per employee can rise while profit per employee falls.",
        "Comparisons across industries mean little: asset-heavy and trading businesses naturally show different figures from service businesses.",
      ],
    },
    faqs: [
      { q: "How is revenue per employee calculated?", a: "Divide revenue for a period by the average number of employees over the same period. Average the opening and closing headcount, or use a monthly average for more precision." },
      { q: "Should I use headcount or FTE?", a: "Headcount is simpler and more common. FTE is fairer when many staff are part-time, because each part-time employee counts only for the fraction of a role they fill. The calculator shows both if you enter FTE." },
      { q: "Should contract workers be included?", a: "Include them if they do the work that generates the revenue and you want a fuller picture of the workforce. Whatever you choose, use the same definition each time you measure." },
      { q: "Is a higher revenue per employee always better?", a: "Not necessarily. It can rise because work was outsourced, prices rose or a low-margin product grew. Read it alongside payroll cost and profit." },
    ],
    seo: {
      title: "Revenue per Employee Calculator: Per Head and per FTE",
      description:
        "Revenue per employee calculator: divide period revenue by average headcount or FTE, annualise the result and see what the measure does and does not show.",
      keywords: ["revenue per employee calculator", "revenue per employee", "revenue per fte", "workforce productivity ratio"],
    },
    related: ["payroll-cost", "attrition-rate", "hr-to-employee-ratio"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "enps",
    methodIntro:
      "The score comes from one question answered on a 0 to 10 scale. Responses are sorted into three groups, and only two of them enter the arithmetic.",
    name: "eNPS Calculator",
    title: "Employee net promoter score from survey responses",
    standfirst:
      "Enter the number of promoters, passives and detractors from your survey to get the eNPS score on its scale of minus 100 to plus 100, with the share in each group.",
    intro: [
      "eNPS asks employees how likely they are to recommend the organisation as a place to work, on a scale of 0 to 10. Those who answer 9 or 10 are promoters, 7 or 8 are passives, and 0 to 6 are detractors.",
      "This eNPS calculator takes the count in each group and returns the score. Passives are counted in the total but do not add to or subtract from the result.",
    ],
    icon: "chat",
    fields: [
      { name: "promoters", label: "Promoters (scored 9 or 10)", unit: "count", initial: "48", min: 0, max: 10_000_000, integer: true },
      { name: "passives", label: "Passives (scored 7 or 8)", unit: "count", initial: "35", min: 0, max: 10_000_000, integer: true },
      { name: "detractors", label: "Detractors (scored 0 to 6)", unit: "count", initial: "27", min: 0, max: 10_000_000, integer: true },
    ],
    compute: (v) => {
      const p = Math.floor(num(v.promoters));
      const pa = Math.floor(num(v.passives));
      const d = Math.floor(num(v.detractors));
      const total = p + pa + d;
      const pp = total > 0 ? (p / total) * 100 : 0;
      const pap = total > 0 ? (pa / total) * 100 : 0;
      const dp = total > 0 ? (d / total) * 100 : 0;
      const score = pp - dp;
      return {
        summary: total > 0
          ? `${pct(pp)} promoters less ${pct(dp)} detractors from ${fmt(total)} responses gives an eNPS of ${signed(score)}.`
          : "Enter at least one response to calculate eNPS.",
        cards: [
          { label: "eNPS", value: total > 0 ? signed(score) : "Not available", primary: true, note: "Scale of −100 to +100" },
          { label: "Responses", value: fmt(total) },
          { label: "Promoters / Passives / Detractors", value: total > 0 ? `${fmt(pp, 1)}% / ${fmt(pap, 1)}% / ${fmt(dp, 1)}%` : "Not available" },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Promoters (9 to 10)", value: fmt(p) },
              { term: "Passives (7 to 8)", value: fmt(pa) },
              { term: "Detractors (0 to 6)", value: fmt(d) },
              { term: "Total responses", value: fmt(total), note: "Promoters + Passives + Detractors" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "% Promoters", value: pct(pp), note: `Promoters ÷ Responses × 100 = ${fmt(p)} ÷ ${fmt(total)} × 100` },
              { term: "% Passives", value: pct(pap), note: `${fmt(pa)} ÷ ${fmt(total)} × 100, counted in responses but not in the score`, muted: true },
              { term: "% Detractors", value: pct(dp), note: `Detractors ÷ Responses × 100 = ${fmt(d)} ÷ ${fmt(total)} × 100` },
            ],
          },
          {
            heading: "Final result",
            rows: [
              { term: "eNPS", value: total > 0 ? signed(score) : "Not available", note: `% Promoters − % Detractors = ${fmt(pp, 2)} − ${fmt(dp, 2)}`, total: true },
            ],
          },
        ],
      };
    },
    method: {
      formula: "eNPS = % Promoters − % Detractors, where each percentage is of all responses including passives",
      steps: [
        { label: "Ask one question", text: "\"On a scale of 0 to 10, how likely are you to recommend this organisation as a place to work?\" Keep the wording identical between surveys." },
        { label: "Sort the answers", text: "9 and 10 are promoters, 7 and 8 are passives, 0 to 6 are detractors." },
        { label: "Convert to percentages", text: "Divide each group by the total number of responses, passives included." },
        { label: "Subtract", text: "Take the detractor percentage from the promoter percentage. The result is a whole score from −100 (all detractors) to +100 (all promoters), not a percentage." },
      ],
      notes: [
        "The score is sensitive to response rate. If only engaged employees answer, the result flatters the organisation. Record the response rate alongside the score.",
        "Small teams produce volatile scores, since one person moving group shifts the result by several points. Avoid reporting scores for groups small enough to identify individuals.",
        "eNPS tells you how people feel, not why. Pair it with an open follow-up question and read the comments.",
      ],
    },
    faqs: [
      { q: "How do you calculate eNPS?", a: "Divide promoters (9 or 10) and detractors (0 to 6) by the total number of responses, convert each to a percentage, and subtract the detractor percentage from the promoter percentage." },
      { q: "Why are passives left out?", a: "They are not left out of the total. They count in the number of responses, which lowers both percentages, but they do not add to or subtract from the score directly." },
      { q: "Can eNPS be negative?", a: "Yes. When detractors outnumber promoters the score is below zero. The full range is −100 to +100." },
      { q: "What is a good eNPS score?", a: "There is no fixed threshold that applies everywhere. Survey wording, timing, anonymity and response rate all move the number, so the most reliable reading is your own trend over repeated surveys run the same way." },
      { q: "How often should eNPS be measured?", a: "Often enough to see a trend, but not so often that people stop answering. Many organisations run it quarterly or twice a year. Keep the method the same so scores are comparable." },
    ],
    seo: {
      title: "eNPS Calculator: Employee Net Promoter Score from Responses",
      description:
        "eNPS calculator: enter promoters, passives and detractors from your survey to get the employee net promoter score from −100 to +100 and the group shares.",
      keywords: ["enps calculator", "employee net promoter score", "enps score calculation", "how to calculate enps"],
    },
    related: ["attrition-rate", "absenteeism-rate", "turnover-cost"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "leave-liability",
    methodIntro:
      "The accrued balance multiplied by a daily wage. Two policy choices, the wage basis and the divisor, decide the daily wage, so the method sets those out before the multiplication.",
    name: "Leave Liability Calculator",
    title: "Leave liability: valuing the accrued leave balance",
    standfirst:
      "Enter employees, their average unused leave and average monthly wage to value the organisation's accrued leave balance as a liability for provisioning.",
    intro: [
      "Unused earned leave that employees can carry forward or encash is an amount the organisation may have to pay. This leave liability calculator puts a rupee value on that balance across the workforce, using the wage basis and divisor your policy sets.",
      "It values the balance as it stands today. It is not an actuarial valuation: it does not project salary growth, discount future payments or estimate how much leave will actually be encashed rather than taken.",
    ],
    icon: "calendar",
    fields: [
      { name: "employees", label: "Employees with an encashable balance", unit: "count", initial: "200", min: 0, max: 10_000_000, integer: true },
      { name: "days", label: "Average unused leave days per employee", unit: "count", initial: "12", min: 0, max: 1000, hint: "Only leave that can be carried forward or encashed under your policy." },
      { name: "basis", label: "Wage basis for valuation", unit: "count", initial: "Basic (and DA)", min: 0, max: 0, options: ["Basic (and DA)", "Gross"] },
      { name: "wage", label: "Average monthly wage on that basis", unit: "inr", initial: "30000", min: 0, max: 10_000_000, hint: "The average monthly basic or gross, matching the basis chosen above." },
      { name: "divisor", label: "Days divisor", unit: "count", initial: "30", min: 0, max: 0, options: ["26", "30"] },
    ],
    compute: (v) => {
      const emp = Math.floor(num(v.employees));
      const days = num(v.days);
      const wage = num(v.wage);
      const div = v.divisor === "26" ? 26 : 30;
      const basis = v.basis === "Gross" ? "Gross" : "Basic (and DA)";
      const daily = wage / div;
      const perEmp = daily * days;
      const total = perEmp * emp;
      const totalDays = days * emp;
      return {
        summary: `${fmt(totalDays, 1)} leave days valued at ${inr(daily)} a day (${basis.toLowerCase()} ÷ ${div}) gives a liability of ${inr(total)}.`,
        cards: [
          { label: "Estimated leave liability", value: inr(total), primary: true, note: "Undiscounted, at current wages" },
          { label: "Per employee", value: inr(perEmp), note: `${fmt(days, 1)} days` },
          { label: "Daily wage used", value: inr(daily), note: `${basis} ÷ ${div}` },
        ],
        lines: [
          {
            heading: "Input",
            rows: [
              { term: "Employees", value: fmt(emp) },
              { term: "Average unused leave days", value: fmt(days, 1) },
              { term: "Average monthly wage", value: inr(wage), note: `${basis} basis (policy choice)` },
              { term: "Days divisor", value: String(div), note: "Policy choice: 26 working days or 30 calendar days" },
            ],
          },
          {
            heading: "Calculation",
            rows: [
              { term: "Daily wage", value: inr(daily), note: `Monthly wage ÷ Divisor = ${inr(wage)} ÷ ${div}` },
              { term: "Value per employee", value: inr(perEmp), note: `Daily wage × Leave days = ${inr(daily)} × ${fmt(days, 1)}` },
              { term: "Total leave days", value: fmt(totalDays, 1), note: `Employees × Leave days = ${fmt(emp)} × ${fmt(days, 1)}` },
            ],
          },
          {
            heading: "Final result",
            rows: [{ term: "Leave liability", value: inr(total), note: `Value per employee × Employees = ${inr(perEmp)} × ${fmt(emp)}`, total: true }],
          },
        ],
      };
    },
    method: {
      formula: "Leave liability = Employees × Average unused leave days × (Monthly wage ÷ Divisor)",
      steps: [
        { label: "Count the encashable balance", text: "Include only leave that the policy lets employees carry forward or encash. Leave that lapses at year-end is not a liability." },
        { label: "Choose the wage basis", text: "Encashment is usually paid on basic (and DA) or on gross, as the leave policy or standing orders state. Value the balance on the same basis you would pay it." },
        { label: "Set the divisor", text: "Divide the monthly wage by 26 or 30, matching the divisor your policy uses for encashment, to get a daily wage." },
        { label: "Multiply", text: "Multiply the daily wage by average unused days and by the number of employees. For more accuracy, run it by grade or salary band and add the results." },
      ],
      notes: [
        "An average wage hides spread. If senior staff hold larger balances than junior staff, valuing each band separately gives a more accurate figure.",
        "This is a current-value estimate for internal provisioning and budgeting. For financial statements, accounting standards may require an actuarial valuation of leave benefits that allows for salary growth, attrition, leave usage and discounting. Whether that applies, and the method, is for your auditor or actuary to decide.",
        "For a single employee's payout on exit, use the leave encashment calculator.",
      ],
    },
    faqs: [
      { q: "What is leave liability?", a: "It is the value of earned leave that employees have accrued and can carry forward or encash, which the organisation may have to pay in future. Valuing it lets finance provide for it rather than meet it unexpectedly." },
      { q: "Should leave liability be valued on basic or gross?", a: "Use the basis on which your policy pays encashment. Many policies use basic (and DA); some use gross. The calculator lets you choose either." },
      { q: "Is this figure enough for the financial statements?", a: "Not necessarily. This is a straightforward current-value estimate. Accounting standards may call for an actuarial valuation of leave benefits. Your auditor or actuary decides whether that is needed and how it is done." },
      { q: "Does leave that lapses count?", a: "No. Leave that lapses unused at the end of the year without encashment is not an amount the organisation will pay, so leave it out of the average." },
      { q: "How is this different from the leave encashment calculator?", a: "Leave encashment works out one employee's payout. Leave liability values the whole organisation's accrued balance at once." },
    ],
    seo: {
      title: "Leave Liability Calculator: Value Accrued Leave Balances",
      description:
        "Leave liability calculator: value your accrued leave balance across employees on basic or gross with a 26 or 30 day divisor, for provisioning and budgets.",
      keywords: ["leave liability calculator", "leave liability", "accrued leave provision", "leave encashment liability"],
    },
    related: ["leave-encashment", "leave-balance", "payroll-cost"],
  },
];

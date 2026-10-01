/**
 * Tests for calculator set A (lib/calculatorsMoreA.ts), hand-worked values.
 *   npx tsx scripts/test_calculators_a.mts
 */
import { calculatorsMoreA } from "../lib/calculatorsMoreA";
import { inr } from "../lib/statutory";

let pass = 0;
let fail = 0;
const eq = (name: string, got: unknown, want: unknown) => {
  if (got === want) pass++;
  else {
    fail++;
    console.log(`FAIL ${name}: got ${got}, want ${want}`);
  }
};

type V = Record<string, string | number | boolean>;
const calc = (slug: string) => {
  const c = calculatorsMoreA.find((x) => x.slug === slug);
  if (!c) throw new Error(`missing ${slug}`);
  return c;
};
const defaults = (slug: string): V => Object.fromEntries(calc(slug).fields.map((f) => [f.name, f.initial]));
const run = (slug: string, over: V = {}) => {
  const r = calc(slug).compute({ ...defaults(slug), ...over });
  const json = JSON.stringify(r);
  eq(`${slug} ${JSON.stringify(over)} clean output`, /NaN|Infinity|undefined|-₹/.test(json), false);
  return r;
};
const primary = (r: ReturnType<typeof run>) => r.cards.find((c) => c.primary)!.value;
const row = (r: ReturnType<typeof run>, heading: string, term: string) =>
  r.lines.find((l) => l.heading === heading)?.rows.find((x) => x.term.startsWith(term))?.value;

// Bad inputs for every calculator
const junk = ["", "abc", -5, 0, "1e309"];
for (const c of calculatorsMoreA) {
  for (const j of junk) run(c.slug, Object.fromEntries(c.fields.map((f) => [f.name, j])));
  run(c.slug, {});
  // Result group order
  const order = ["Input", "Calculation", "Employee deduction", "Employer contribution", "Final result"];
  const hs = run(c.slug).lines.map((l) => order.indexOf(l.heading));
  eq(`${c.slug} headings valid`, hs.every((h, i) => h >= 0 && (i === 0 || h > hs[i - 1])), true);
}

/* Leave encashment */
eq("leave 30", primary(run("leave-encashment")), inr(18000));
eq("leave 26", primary(run("leave-encashment", { divisor: "Fixed 26 days" })), inr(20769));
eq("leave zero", primary(run("leave-encashment", { balance: 0 })), inr(0));
eq("leave half day", primary(run("leave-encashment", { balance: 0.5 })), inr(500));

/* Notice pay */
eq("notice", primary(run("notice-pay")), inr(40000));
eq("notice 26", primary(run("notice-pay", { divisor: "Fixed 26 days" })), inr(46154));
eq("notice served > required", primary(run("notice-pay", { served: 90 })), inr(0));
eq("notice none served", primary(run("notice-pay", { served: 0 })), inr(80000));

/* HRA */
eq("hra metro", primary(run("hra-exemption")), inr(168000));
eq("hra metro taxable", row(run("hra-exemption"), "Final result", "Taxable HRA"), inr(72000));
const capCase = { salary: 20000, hra: 15000, rent: 20000 };
eq("hra other 40%", primary(run("hra-exemption", { ...capCase, city: "Any other city" })), inr(96000));
eq("hra old4 50%", primary(run("hra-exemption", { ...capCase })), inr(120000));
eq("hra Bengaluru FY26-27 50%", primary(run("hra-exemption", { ...capCase, city: "Bengaluru, Hyderabad, Pune or Ahmedabad" })), inr(120000));
eq("hra Bengaluru FY25-26 40%", primary(run("hra-exemption", { ...capCase, city: "Bengaluru, Hyderabad, Pune or Ahmedabad", year: "FY2025-26" })), inr(96000));
eq("hra legacy Non-metro", primary(run("hra-exemption", { ...capCase, city: "Non-metro" })), inr(96000));
eq("hra no rent", primary(run("hra-exemption", { rent: 0 })), inr(0));
eq("hra rent < 10%", primary(run("hra-exemption", { rent: 3000 })), inr(0));
eq("hra 1 month", primary(run("hra-exemption", { months: 1 })), inr(14000));

/* Statutory bonus */
eq("bonus 8.33% ceiling", primary(run("statutory-bonus")), inr(6997));
eq("bonus 20%", primary(run("statutory-bonus", { rate: 20 })), inr(16800));
eq("bonus at threshold", primary(run("statutory-bonus", { salary: 21000 })), inr(6997));
eq("bonus above threshold", primary(run("statutory-bonus", { salary: 21001 })), "Not applicable");
eq("bonus min wage", primary(run("statutory-bonus", { minWage: 12000 })), inr(11995));
eq("bonus below ceiling", primary(run("statutory-bonus", { salary: 5000 })), inr(4998));
eq("bonus 29 days", primary(run("statutory-bonus", { daysWorked: 29 })), "Not applicable");
eq("bonus 30 days", primary(run("statutory-bonus", { daysWorked: 30, months: 1 })), inr(583));
eq("bonus rate clamp", primary(run("statutory-bonus", { rate: 50 })), inr(16800));

/* Attrition */
eq("attrition", primary(run("attrition-rate")), "5.85%");
eq("attrition annual", run("attrition-rate").cards[1].value, "23.41%");
eq("attrition zero hc", primary(run("attrition-rate", { start: 0, end: 0 })), "Not available");
eq("attrition 12m", primary(run("attrition-rate", { start: 100, end: 100, leavers: 15, months: 12 })), "15%");

/* Absenteeism */
eq("absent", primary(run("absenteeism-rate")), "4%");
eq("absent per emp", run("absenteeism-rate").cards[1].value, "0.88");
eq("absent capped", primary(run("absenteeism-rate", { lost: 999999 })), "100%");

/* LOP */
eq("lop cal", primary(run("lop-deduction")), inr(2000));
eq("lop working", primary(run("lop-deduction", { divisor: "Working days in the month" })), inr(2727));
eq("lop 31-day", primary(run("lop-deduction", { daysInMonth: 31, lop: 1 })), inr(968));
eq("lop over cap", primary(run("lop-deduction", { lop: 40 })), inr(30000));

/* Pro-rata */
eq("prorata", primary(run("pro-rata-salary")), inr(27000));
eq("prorata 26 cap", primary(run("pro-rata-salary", { divisor: "Fixed 26 days", paidDays: 27 })), inr(45000));
eq("prorata zero", primary(run("pro-rata-salary", { paidDays: 0 })), inr(0));

/* Arrears */
const a = run("arrears");
eq("arrears total", primary(a), inr(15000));
eq("arrears PF emp", row(a, "Employee deduction", "PF"), inr(720));
eq("arrears PF er", row(a, "Employer contribution", "PF total"), inr(720));
eq("arrears EDLI", row(a, "Employer contribution", "EDLI"), inr(30));
eq("arrears ESI n/a", row(a, "Employee deduction", "ESI"), "Not applicable");
eq("arrears net", row(a, "Final result", "Net arrears"), inr(14280));
const e = run("arrears", { oldSalary: 18000, newSalary: 20000, months: 2, oldBasic: 0, newBasic: 0 });
eq("arrears ESI emp", row(e, "Employee deduction", "ESI"), inr(30));
eq("arrears ESI er", row(e, "Employer contribution", "ESI"), inr(130));
eq("arrears PF n/a", row(e, "Employee deduction", "PF"), "Not applicable");
eq("arrears part month", primary(run("arrears", { months: 0, partDays: 15, partMonthDays: 30 })), inr(2500));
const c1 = run("arrears", { oldBasic: 15000, newBasic: 17000 });
eq("arrears PF above ceiling", row(c1, "Employee deduction", "PF"), "Not applicable");
const c2 = run("arrears", { oldBasic: 15000, newBasic: 17000, pfBasis: "Full basic + DA (above ceiling)" });
eq("arrears PF full wages", row(c2, "Employee deduction", "PF"), inr(720));
eq("arrears decrease", primary(run("arrears", { newSalary: 30000 })), inr(0));

console.log(`${pass} passed, ${fail} failed`);
if (fail) process.exit(1);

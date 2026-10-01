import { calculatorsMoreB } from "../lib/calculatorsMoreB";

type V = Record<string, number | string | boolean>;
let fails = 0;
let passes = 0;

const calc = (slug: string) => {
  const c = calculatorsMoreB.find((x) => x.slug === slug);
  if (!c) throw new Error(`missing ${slug}`);
  return c;
};
const defaults = (slug: string): V =>
  Object.fromEntries(calc(slug).fields.map((f) => [f.name, f.toggle ? f.initial !== "0" : f.initial]));
const run = (slug: string, over: V = {}) => calc(slug).compute({ ...defaults(slug), ...over });
const primary = (r: ReturnType<typeof run>) => r.cards.find((c) => c.primary)!.value;
const norm = (s: string) => s.replace(/\s/g, " ");

function check(name: string, ok: boolean, detail = "") {
  if (ok) passes++;
  else {
    fails++;
    console.error(`FAIL ${name} ${detail}`);
  }
}
function eq(name: string, got: string, want: string) {
  check(name, norm(got) === norm(want), `got "${got}" want "${want}"`);
}
function clean(name: string, r: unknown) {
  const s = JSON.stringify(r);
  check(`${name} clean`, !/NaN|Infinity|undefined|Invalid Date/.test(s), s.slice(0, 300));
  const res = r as { cards: { primary?: boolean }[] };
  check(`${name} one primary`, res.cards.filter((c) => c.primary).length === 1);
}
const order = ["Input", "Calculation", "Employee deduction", "Employer contribution", "Final result"];
function headings(name: string, r: { lines: { heading: string }[] }) {
  const idx = r.lines.map((l) => order.indexOf(l.heading));
  check(`${name} headings`, idx.every((i, k) => i >= 0 && (k === 0 || i > idx[k - 1])), JSON.stringify(r.lines.map((l) => l.heading)));
}

// Salary hike
eq("hike 10%", primary(run("salary-hike")), "₹44,000");
eq("hike target", run("salary-hike", { target: 50000 }).cards[1].value, "25%");
eq("hike target lower", run("salary-hike", { target: 30000 }).cards[1].label, "Reduction");
eq("hike zero current", primary(run("salary-hike", { current: 0, target: 50000 })), "₹0");
eq("hike max", primary(run("salary-hike", { current: 10_000_000, hike: 500 })), "₹6,00,00,000");

// Full and final
eq("ff default", primary(run("full-and-final")), "₹1,19,871");
eq("ff ineligible 4y", run("full-and-final", { years: 4, months: 7 }).cards[2].value, "Not applicable");
eq("ff 4y7m none", primary(run("full-and-final", { years: 4, months: 7 })), "₹33,333");
eq("ff fixed-term 2y", run("full-and-final", { empType: "Fixed-term", years: 2, months: 0 }).cards[2].value, "₹28,846");
eq("ff 50% wage rule", run("full-and-final", { monthly: 100000, basic: 25000, years: 5, months: 0 }).cards[2].value, "₹1,44,231");
eq("ff gratuity cap", run("full-and-final", { basic: 500000, monthly: 500000, years: 40 }).cards[2].value, "₹20,00,000");
const neg = run("full-and-final", { unpaidDays: 0, leaveDays: 0, years: 0, months: 0, noticeShort: 30 });
eq("ff recoverable", neg.cards[0].label, "Net recoverable from employee");
eq("ff recoverable amt", primary(neg), "₹50,000");
eq("ff notice paid", primary(run("full-and-final", { noticePaid: 30 })), "₹1,69,871");

// Turnover
eq("turnover per leaver", primary(run("turnover-cost")), "₹1,34,658");
eq("turnover annual", run("turnover-cost").cards[1].value, "₹13,46,575");
eq("turnover zero", primary(run("turnover-cost", { salary: 0, hiring: 0, interviewHours: 0, onboarding: 0 })), "₹0");

// Overtime leakage
eq("ot leak annual", primary(run("overtime-leakage")), "₹2,30,769");
eq("ot leak zero emp", primary(run("overtime-leakage", { employees: 0 })), "₹0");

// Manual HR
eq("manual hr", primary(run("manual-hr-cost")), "₹69,231");
eq("manual hr zero hours", primary(run("manual-hr-cost", { workHours: 0 })), "₹0");

// Working days
eq("wd oct 2026", primary(run("working-days")), "27");
eq("wd sat-sun", primary(run("working-days", { offs: "Saturday and Sunday" })), "22");
eq("wd leap feb", primary(run("working-days", { month: "February", year: 2028, length: 29, offs: "No weekly off" })), "29");
eq("wd day clamp", run("working-days", { month: "February", year: 2027, day: 31, length: 1 }).cards[2].value, "Sunday, 28 February 2027");
eq("wd holidays capped", primary(run("working-days", { holidays: 400 })), "0");

// Leave balance
eq("leave monthly", primary(run("leave-balance")), "10 days");
eq("leave upfront", primary(run("leave-balance", { method: "Credited at start of year" })), "19 days");
eq("leave half day", run("leave-balance", { annual: 15, months: 5 }).cards[1].value, "6 days");
eq("leave overdrawn", run("leave-balance", { taken: 20 }).cards[0].label, "Leave taken in advance");

// Notice end date
eq("notice 30 cal", primary(run("notice-period-end-date")), "Friday, 30 October 2026");
eq("notice next day", primary(run("notice-period-end-date", { startRule: "On the next day" })), "Saturday, 31 October 2026");
eq("notice 1 month", primary(run("notice-period-end-date", { unit: "Months", length: 1 })), "Saturday, 31 October 2026");
eq("notice month end", primary(run("notice-period-end-date", { unit: "Months", length: 1, day: 31, month: "January", year: 2026 })), "Saturday, 28 February 2026");
eq("notice leap", primary(run("notice-period-end-date", { unit: "Months", length: 1, day: 1, month: "February", year: 2028 })), "Tuesday, 29 February 2028");
eq("notice working", primary(run("notice-period-end-date", { unit: "Working days", length: 6 })), "Wednesday, 7 October 2026");
eq("notice zero", primary(run("notice-period-end-date", { length: 0 })), "Thursday, 1 October 2026");
eq("notice waived", primary(run("notice-period-end-date", { waived: 29 })), "Thursday, 1 October 2026");

// EPS
eq("eps 25y weightage", primary(run("eps-pension")), "₹5,786");
eq("eps 35y", primary(run("eps-pension", { years: 35 })), "₹7,929");
eq("eps early 50", primary(run("eps-pension", { years: 10, age: 50 })), "₹1,546");
eq("eps no weightage early", primary(run("eps-pension", { years: 25, age: 57 })), "₹5,143");
eq("eps deferred 60", primary(run("eps-pension", { years: 10, age: 60 })), "₹2,318");
eq("eps minimum", primary(run("eps-pension", { salary: 5000, years: 10 })), "₹1,000");
eq("eps 9y6m eligible", primary(run("eps-pension", { years: 9, months: 6 })), "₹2,143");
eq("eps 9y5m", primary(run("eps-pension", { years: 9, months: 5 })), "Not applicable");
eq("eps capped", primary(run("eps-pension", { salary: 50000, years: 10 })), "₹2,143");
eq("eps uncapped", primary(run("eps-pension", { salary: 50000, years: 10, cap: false })), "₹7,143");

// Empty / invalid inputs for every calculator
for (const c of calculatorsMoreB) {
  const variants: V[] = [
    defaults(c.slug),
    Object.fromEntries(c.fields.map((f) => [f.name, f.options ? f.options[0] : f.toggle ? false : 0])),
    Object.fromEntries(c.fields.map((f) => [f.name, f.options ? "bogus" : ""])),
    Object.fromEntries(c.fields.map((f) => [f.name, f.options ? f.options[f.options.length - 1] : -5])),
    Object.fromEntries(c.fields.map((f) => [f.name, f.options ? f.options[0] : "abc"])),
    Object.fromEntries(c.fields.map((f) => [f.name, f.options ? f.options[0] : f.max || 1e9])),
    {},
  ];
  variants.forEach((v, i) => {
    const r = c.compute(v);
    clean(`${c.slug}#${i}`, r);
    headings(`${c.slug}#${i}`, r);
  });
}

console.log(`${passes} passed, ${fails} failed`);
if (fails) process.exit(1);

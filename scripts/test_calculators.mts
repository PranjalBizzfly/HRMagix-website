/**
 * Calculator tests: normal, minimum, maximum and threshold values for every
 * calculator, checked against hand-worked figures from the statutory rules.
 *
 *   npx tsx scripts/test_calculators.mts
 */
import { calculators, calculatorBySlug } from "../lib/calculators";
import { computePf, computeEsi, computeGratuity, computeOvertime, gratuityProvision, establishmentPfAdmin } from "../lib/statutory";

let pass = 0;
let fail = 0;
const eq = (name: string, got: unknown, want: unknown) => {
  if (got === want) pass++;
  else {
    fail++;
    console.log(`FAIL ${name}: got ${got}, want ${want}`);
  }
};

/* ---- EPF ---- */
let p = computePf(25000, true);
eq("pf capped wage", p.pfWage, 15000);
eq("pf employee 12% of 15000", p.employee, 1800);
eq("pf EPS max 1250", p.eps, 1250);
eq("pf employer EPF 550", p.employerEpf, 550);
eq("pf EDLI max 75", p.edli, 75);
eq("pf admin 0.5%", p.admin, 75);
p = computePf(25000, false);
eq("pf uncapped employee", p.employee, 3000);
eq("pf uncapped EPS still 1250", p.eps, 1250);
eq("pf uncapped EPF share", p.employerEpf, 1750);
eq("pf uncapped EDLI still 75", p.edli, 75);
eq("pf uncapped admin", p.admin, 125);
p = computePf(10000, true);
eq("pf below ceiling EPS 833", p.eps, 833);
eq("pf below ceiling EPF 367", p.employerEpf, 367);
p = computePf(15000, true, 10);
eq("pf VPF 10%", p.vpf, 1500);
p = computePf(0, true);
eq("pf zero", p.employerCost, 0);

/* ---- ESI ---- */
let e = computeEsi(21000);
eq("esi at threshold applies", e.applies, true);
eq("esi employee 157.5 → 158 (rounded up)", e.employee, 158);
eq("esi employer 682.5 → 683", e.employer, 683);
e = computeEsi(21001);
eq("esi above threshold", e.applies, false);
eq("esi above → 0", e.employee, 0);
e = computeEsi(23000, 3000);
eq("esi overtime excluded from coverage", e.applies, true);
eq("esi contribution on full gross 172.5 → 173", e.employee, 173);
eq("esi employer on full gross 747.5 → 748", e.employer, 748);
e = computeEsi(1);
eq("esi ₹1 gross: employee share waived (daily ≤ ₹176)", e.employee, 0);
eq("esi ₹1 gross: employer 0.0325 → ₹1 (rounded up)", e.employer, 1);
e = computeEsi(5280); // 176 × 30
eq("esi daily wage exactly ₹176 → employee waived", e.employee, 0);
eq("esi daily ₹176 employer still pays 171.6 → 172", e.employer, 172);
e = computeEsi(5281);
eq("esi just above ₹176/day → employee 39.6 → 40", e.employee, 40);
e = computeEsi(18000);
eq("esi normal 18000 employee 135", e.employee, 135);
eq("esi normal 18000 employer 585", e.employer, 585);
e = computeEsi(0);
eq("esi zero not applicable", e.applies, false);
eq("esi NaN input safe", computeEsi(NaN).employer, 0);
e = computeEsi(30000, 9000);
eq("esi OT bringing coverage to 21000 applies", e.applies, true);
eq("esi on full 30000 incl. OT employee 225", e.employee, 225);

/* ---- EPF admin minimum (establishment) ---- */
eq("pf admin min ₹500 per establishment", establishmentPfAdmin(75), 500);
eq("pf admin above min", establishmentPfAdmin(3750), 3750);
eq("pf admin zero", establishmentPfAdmin(0), 0);
eq("pf negative basic safe", computePf(-5000).employee, 0);
eq("pf exactly ceiling EPS 1250", computePf(15000).eps, 1250);
eq("pf 15000 EDLI 75", computePf(15000).edli, 75);

/* ---- Gratuity ---- */
let g = computeGratuity(30000, 7, 0);
eq("grat 7y", g.amount, 121154); // 30000*15/26*7 = 121153.85
g = computeGratuity(30000, 7, 7);
eq("grat 7y7m counts 8", g.countedYears, 8);
eq("grat 7y7m amount", g.amount, 138462); // 30000*15/26*8
g = computeGratuity(30000, 7, 6);
eq("grat 7y6m counts 7", g.countedYears, 7);
g = computeGratuity(30000, 4, 11);
eq("grat 4y11m not eligible", g.eligible, false);
eq("grat not eligible → 0", g.amount, 0);
g = computeGratuity(500000, 40, 0);
eq("grat capped at 20 lakh", g.amount, 2_000_000);
eq("grat capped flag", g.capped, true);
eq("grat provision", gratuityProvision(26000), 1250); // 26000*15/26/12
eq("grat provision 50% floor", gratuityProvision(13000, 52000), 1250); // wage = 26000
eq("grat provision basic ≥ 50% unchanged", gratuityProvision(26000, 40000), 1250);
g = computeGratuity(30000, 5, 0);
eq("grat exactly 5y eligible", g.amount, 86538); // 30000*15/26*5 = 86538.46
g = computeGratuity(20000, 10, 0, { gross: 60000 });
eq("grat 50% wage floor → wage 30000", g.wage, 30000);
eq("grat 50% floor amount", g.amount, 173077); // 30000*15/26*10
g = computeGratuity(40000, 10, 0, { gross: 60000 });
eq("grat basic above 50% kept", g.wage, 40000);
g = computeGratuity(26000, 1, 0, { fixedTerm: true });
eq("grat fixed-term 1y eligible", g.eligible, true);
eq("grat fixed-term 1y amount", g.amount, 15000);
g = computeGratuity(26000, 0, 11, { fixedTerm: true });
eq("grat fixed-term 0y11m not eligible", g.eligible, false);
g = computeGratuity(26000, 3, 0);
eq("grat permanent 3y not eligible", g.eligible, false);
eq("grat zero basic not eligible", computeGratuity(0, 10).eligible, false);
eq("grat NaN years", computeGratuity(30000, NaN).amount, 0);
g = computeGratuity(4_000_000 / 15 * 26 / 10, 10); // uncapped exactly 40 lakh
eq("grat cap boundary", g.amount, 2_000_000);

/* ---- Overtime ---- */
const o = computeOvertime(24000, 26, 8, 10);
eq("ot pay", o.pay, 2308); // 24000/26/8 = 115.38 × 2 × 10 = 2307.69
eq("ot zero hours", computeOvertime(24000, 26, 8, 0).pay, 0);

/* ---- Every calculator: sane output at min, normal and max inputs ---- */
const bad = /NaN|Infinity|undefined|null/;
for (const c of calculators) {
  for (const mode of ["min", "initial", "max"] as const) {
    const v: Record<string, number | string | boolean> = {};
    for (const f of c.fields) {
      if (f.toggle) v[f.name] = true;
      else if (f.options) v[f.name] = f.options[0];
      else v[f.name] = mode === "min" ? f.min : mode === "max" ? f.max : Number(f.initial);
    }
    const r = c.compute(v);
    const text = JSON.stringify(r);
    eq(`${c.slug} ${mode} has no NaN/Infinity/undefined`, bad.test(text), false);
    eq(`${c.slug} ${mode} has a primary card`, r.cards.some((x) => x.primary), true);
  }
}

/* ---- End-to-end: salary calculator at ₹35,000 ---- */
const s = calculatorBySlug("salary")!.compute({ gross: 35000, basicPct: 50, ceiling: true });
eq("salary take-home 35k", s.cards[0].value, "₹33,200"); // 35000 − 1800 PF, ESI n/a

const calc = (slug: string, v: Record<string, number | string | boolean>) => calculatorBySlug(slug)!.compute(v);
const card0 = (slug: string, v: Record<string, number | string | boolean>) => calc(slug, v).cards[0].value;
const heads = (slug: string, v: Record<string, number | string | boolean>) => calc(slug, v).lines.map((l) => l.heading).join("|");

// Salary at ₹20,000 / 50%: basic 10000, PF 1200, ESI 150 → 18,650
eq("salary 20k take-home", card0("salary", { gross: 20000, basicPct: 50, ceiling: true }), "₹18,650");
// Salary ₹5,000 (daily ≤ 176): ESI employee waived → 5000 − 300 = 4,700
eq("salary 5k ESI waived", card0("salary", { gross: 5000, basicPct: 50, ceiling: true }), "₹4,700");
eq("salary empty → ₹0", card0("salary", { gross: "", basicPct: "", ceiling: true }), "₹0");
eq("salary headings", heads("salary", { gross: 35000, basicPct: 50, ceiling: true }), "Input|Calculation|Employee deduction|Employer contribution|Final result");

// PF: basic 25000 capped → 1800 + 550 = 2,350 into account
eq("pf calc into account", card0("pf", { basic: 25000, ceiling: true, vpf: 0 }), "₹2,350");
eq("pf calc uncapped", card0("pf", { basic: 25000, ceiling: false, vpf: 0 }), "₹4,750"); // 3000 + 1750
eq("pf calc invalid", card0("pf", { basic: "abc", ceiling: true, vpf: -3 }), "₹0");

// ESI: 18000 → 135 + 585 = 720
eq("esi calc 18000", card0("esi", { gross: 18000, overtime: 0 }), "₹720");
eq("esi calc 25000 n/a", card0("esi", { gross: 25000, overtime: 0 }), "Not applicable");
eq("esi calc threshold 21000", card0("esi", { gross: 21000, overtime: 0 }), "₹841"); // 158 + 683
eq("esi calc 4000 employee waived", card0("esi", { gross: 4000, overtime: 0 }), "₹130"); // 0 + 130

// Gratuity
eq("gratuity calc 7y", card0("gratuity", { basic: 30000, years: 7, months: 0, gross: 0, fixedTerm: false }), "₹1,21,154");
eq("gratuity calc fixed-term 2y", card0("gratuity", { basic: 26000, years: 2, months: 0, gross: 0, fixedTerm: true }), "₹30,000");
eq("gratuity calc 4y n/a", card0("gratuity", { basic: 30000, years: 4, months: 0, gross: 0, fixedTerm: false }), "Not applicable");
eq("gratuity calc empty", card0("gratuity", { basic: "", years: "", months: "" }), "Not applicable");

// Payroll cost: 1 employee × ₹30,000, 50% basic, capped → PF 1800 + EDLI 75 + admin max(75, 500)=500, ESI n/a
eq("payroll 1 employee admin min", card0("payroll-cost", { headcount: 1, gross: 30000, basicPct: 50, ceiling: true }), "₹32,375");
// 100 × ₹30,000: (1800 + 75) × 100 + max(7500, 500) = 195000 → 3,000,000 + 195,000
eq("payroll 100 employees", card0("payroll-cost", { headcount: 100, gross: 30000, basicPct: 50, ceiling: true }), "₹31,95,000");
eq("payroll zero headcount", card0("payroll-cost", { headcount: 0, gross: 30000, basicPct: 50, ceiling: true }), "₹0");

// Overtime: 24000/26/8 × 2 × 10 = 2,308
eq("overtime calc", card0("overtime", { wage: 24000, days: 26, hours: 8, ot: 10 }), "₹2,308");
eq("overtime zero days safe", card0("overtime", { wage: 24000, days: 0, hours: 8, ot: 10 }), "₹0");

// CTC: 40000, 50% basic (20000) capped: PF 1800 + EDLI 75 + admin 75 + grat 20000×15/26/12 = 962 → 42,912 × 12
eq("ctc 40k", card0("ctc", { gross: 40000, basicPct: 50, ceiling: true, gratuity: true, bonus: 0 }), "₹5,14,944");
// CTC with 30% basic: gratuity wage floored to 20000 → same 962 provision
const ctc30 = calc("ctc", { gross: 40000, basicPct: 30, ceiling: true, gratuity: true, bonus: 0 });
eq("ctc 50% floor gratuity", ctc30.lines.find((l) => l.heading === "Employer contribution")?.rows.find((r) => r.term === "Gratuity provision")?.value, "₹962");
eq("ctc bonus added", card0("ctc", { gross: 40000, basicPct: 50, ceiling: true, gratuity: false, bonus: 100000 }), "₹6,03,400"); // 41950×12+100000

// Salary with 30% basic: PF wage raised to 50% of gross (10000) → PF 1200, ESI 150
eq("salary 50% wage rule PF", card0("salary", { gross: 20000, basicPct: 30, ceiling: true }), "₹18,650");

// Plan cost
eq("plan-cost enterprise quoted", card0("plan-cost", { headcount: 50, plan: "Enterprise" }), "Quoted");

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);

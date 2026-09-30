/**
 * Calculator tests: normal, minimum, maximum and threshold values for every
 * calculator, checked against hand-worked figures from the statutory rules.
 *
 *   npx tsx scripts/test_calculators.mts
 */
import { calculators, calculatorBySlug } from "../lib/calculators";
import { computePf, computeEsi, computeGratuity, computeOvertime, gratuityProvision } from "../lib/statutory";

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
eq("esi minimum rounds up to ₹1", e.employee, 1);

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

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);

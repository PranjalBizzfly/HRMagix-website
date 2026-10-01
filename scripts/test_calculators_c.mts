import { calculatorsMoreC } from "../lib/calculatorsMoreC";

let fail = 0;
const get = (slug: string) => calculatorsMoreC.find((c) => c.slug === slug)!;
const run = (slug: string, v: Record<string, unknown>) => {
  const r = get(slug).compute(v as never);
  const j = JSON.stringify(r);
  if (/NaN|Infinity|undefined/.test(j)) { fail++; console.error(`FAIL ${slug} bad value`, v, j); }
  return r;
};
const primary = (r: any) => r.cards.find((c: any) => c.primary).value as string;
const final = (r: any) => r.lines.find((l: any) => l.heading === "Final result").rows[0].value as string;
const eq = (name: string, a: unknown, b: unknown) => {
  if (a !== b) { fail++; console.error(`FAIL ${name}: got ${a} expected ${b}`); } else console.log(`ok ${name}`);
};
const rupee = (n: number) => n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// HR to employee ratio: 4 / 350 * 100 = 1.142857 -> 1.14 ; 350/4 = 87.5
let r = run("hr-to-employee-ratio", { hr: 4, employees: 350 });
eq("hr normal", primary(r), "1.14"); eq("hr final", final(r), "1.14");
eq("hr 1:n", r.cards[1].value, "1 : 87.5");
r = run("hr-to-employee-ratio", { hr: 0, employees: 350 }); eq("hr zero hr", primary(r), "Not available");
r = run("hr-to-employee-ratio", { hr: 5, employees: 0 }); eq("hr zero emp", primary(r), "Not available");
r = run("hr-to-employee-ratio", { hr: "abc", employees: -5 }); eq("hr invalid", primary(r), "Not available");
r = run("hr-to-employee-ratio", { hr: 100000, employees: 10000000 }); eq("hr max", primary(r), "1");
r = run("hr-to-employee-ratio", { hr: 0.5, employees: 1 }); eq("hr min", primary(r), "50");

// Revenue per employee: 12 crore / 100 = 12,00,000 ; quarter ×4
r = run("revenue-per-employee", { revenue: 120000000, period: "Annual", start: 95, end: 105, fte: 0 });
eq("rpe normal", primary(r), rupee(1200000)); eq("rpe final", final(r), rupee(1200000));
r = run("revenue-per-employee", { revenue: 30000000, period: "Quarter", start: 100, end: 100, fte: 80 });
eq("rpe quarter", primary(r), rupee(300000)); eq("rpe annualised", r.cards[1].value, rupee(1200000));
eq("rpe fte", r.cards[2].value, rupee(375000));
r = run("revenue-per-employee", { revenue: 1000, start: 0, end: 0 }); eq("rpe zero hc", primary(r), "Not available");
r = run("revenue-per-employee", { revenue: 1000, period: "bogus", start: 0, end: 1 }); eq("rpe start0", primary(r), rupee(2000));
r = run("revenue-per-employee", { revenue: NaN, start: "x", end: undefined, fte: -1 }); eq("rpe invalid", primary(r), "Not available");
r = run("revenue-per-employee", { revenue: 1e13, period: "Month", start: 1e7, end: 1e7 }); eq("rpe max", primary(r), rupee(1e6));

// eNPS: 48/110=43.636 − 27/110=24.545 = 19.09 -> +19.1
r = run("enps", { promoters: 48, passives: 35, detractors: 27 });
eq("enps normal", primary(r), "+19.1"); eq("enps final", final(r), "+19.1");
r = run("enps", { promoters: 0, passives: 0, detractors: 10 }); eq("enps min", primary(r), "-100");
r = run("enps", { promoters: 10, passives: 0, detractors: 0 }); eq("enps max", primary(r), "+100");
r = run("enps", { promoters: 10, passives: 5, detractors: 25 }); eq("enps negative", primary(r), "-37.5");
r = run("enps", { promoters: 5, passives: 90, detractors: 5 }); eq("enps zero score", primary(r), "0");
r = run("enps", { promoters: 0, passives: 0, detractors: 0 }); eq("enps empty", primary(r), "Not available");
r = run("enps", { promoters: "x", passives: -3, detractors: null }); eq("enps invalid", primary(r), "Not available");

// Leave liability: 30000/30=1000 ×12 = 12000 ×200 = 24,00,000 ; /26 = 1153.85×12=13846.15×200=2769230.77
r = run("leave-liability", { employees: 200, days: 12, basis: "Basic (and DA)", wage: 30000, divisor: "30" });
eq("ll normal", primary(r), rupee(2400000)); eq("ll final", final(r), rupee(2400000));
r = run("leave-liability", { employees: 200, days: 12, basis: "Gross", wage: 30000, divisor: "26" });
eq("ll 26", primary(r), rupee(2769231));
r = run("leave-liability", { employees: 0, days: 0, wage: 0 }); eq("ll zero", primary(r), rupee(0));
r = run("leave-liability", { employees: "a", days: -1, wage: NaN, divisor: "99" }); eq("ll invalid", primary(r), rupee(0));
r = run("leave-liability", { employees: 1, days: 1, wage: 30, divisor: "30" }); eq("ll min", primary(r), rupee(1));

if (fail) { console.error(`${fail} failure(s)`); process.exit(1); }
console.log("All set C calculator tests passed");

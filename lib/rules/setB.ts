/**
 * Rule constants for calculator set B (lib/calculatorsMoreB.ts).
 * Versioned so a change in law means editing one value here.
 * Checked 2026-10-01.
 */

export const SET_B_RULES = {
  /** Employees' Pension Scheme 1995 (EPFO). */
  eps: {
    divisor: 70,
    /** Pensionable salary ceiling since 1 Sep 2014 (₹6,500 before). */
    wageCeiling: 15000,
    minServiceYears: 10,
    /** Part-year of 6 months or more counts as a full year. */
    roundUpMonths: 6,
    /** Minimum member pension, w.e.f. 1 Sep 2014. */
    minPension: 1000,
    normalAge: 58,
    earliestAge: 50,
    /** Deferment allowed up to this age. */
    latestAge: 60,
    /** Early pension: reduced 4% for each year short of 58 (applied compounding, as in EPFO's reduction table). */
    earlyReductionRate: 0.04,
    /** Deferred pension: increased 4% for each year beyond 58 (compounding; flagged unverified). */
    deferIncreaseRate: 0.04,
    /** Weightage: 2 years added where pensionable service is 20 years or more, pension at 58 or later. */
    weightageYears: 2,
    weightageMinService: 20,
  },
  /** Gratuity under the Code on Social Security 2020 (in force 21 Nov 2025). */
  gratuityCode: {
    /** Fixed-term employees qualify after one year of service. */
    fixedTermMinYears: 1,
    /** Wages = basic + DA + retaining allowance; excluded items above 50% of total remuneration are added back. */
    wagesFloorShare: 0.5,
  },
  /** Income-tax exemptions on separation (Income-tax Act 2025, formerly s.10(10) and s.10(10AA) of the 1961 Act). */
  tax: {
    gratuityExemptCap: 2_000_000,
    leaveEncashExemptCap: 2_500_000,
    /** Leave encashment tests: 10 months' average salary; 30 days' leave per completed year. */
    leaveAvgSalaryMonths: 10,
    leaveDaysPerYear: 30,
  },
  overtime: { multiplier: 2 },
} as const;

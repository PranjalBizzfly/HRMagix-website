/**
 * Rule constants for calculator set A (lib/calculatorsMoreA.ts).
 * Versioned by financial / tax year so the next change is one new entry.
 * Verified 2026-10-01.
 */

/** HRA exemption (s.10(13A) of the 1961 Act read with Rule 2A; carried into the
 *  Income-tax Act 2025 and Income-tax Rules 2026, notified 20 Mar 2026, in force 1 Apr 2026). */
export const HRA_RULES = {
  "FY2025-26": {
    highRateCities: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    highRate: 0.5,
    otherRate: 0.4,
    rentExcessPct: 0.1,
  },
  "FY2026-27": {
    highRateCities: ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bengaluru", "Hyderabad", "Pune", "Ahmedabad"],
    highRate: 0.5,
    otherRate: 0.4,
    rentExcessPct: 0.1,
  },
} as const;
export type HraYear = keyof typeof HRA_RULES;
export const HRA_CURRENT: HraYear = "FY2026-27";

/** Leave encashment exemption limit for non-government employees at retirement /
 *  resignation: ₹25,00,000 (CBDT Notification 31/2023, from 1 Apr 2023; lifetime aggregate). */
export const LEAVE_ENCASHMENT_EXEMPT_LIMIT = 2_500_000;

/** Statutory bonus: Code on Wages 2019 s.26 (in force 21 Nov 2025) and MoLE
 *  notifications of 25 Aug 2026 (retrospective from 21 Nov 2025). Same values as the
 *  earlier Payment of Bonus Act 1965 (as amended 2015). */
export const BONUS_RULES = {
  eligibilityCeiling: 21000,
  calculationCeiling: 7000,
  minRate: 8.33,
  maxRate: 20,
  minDaysWorked: 30,
} as const;

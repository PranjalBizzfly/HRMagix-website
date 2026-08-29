/**
 * The HR and payroll glossary.
 *
 * WHAT IS DEFINED HERE, AND ON WHAT AUTHORITY.
 *
 * Three kinds of term, and no others:
 *
 *   1. Provisions of Indian statute — EPF, ESI, gratuity, Section 192, the
 *      Maternity Benefit Act. Definitions state what the law provides. Rates
 *      appear only where central statute fixes them; anything a state sets is
 *      described as varying rather than given a number.
 *
 *   2. Ordinary payroll and HR vocabulary — CTC, LOP, arrears, full and final.
 *      These are industry terms with settled meanings, defined plainly.
 *
 *   3. Terms HRMagix itself uses on this site — regularisation, the employee
 *      record, comp-off — defined as the platform uses them.
 *
 * No definition asserts a product capability that is not published elsewhere on
 * this site, and none carries a statistic. Where a term is commonly confused
 * with another, the entry says so, because that confusion is usually why
 * somebody looked it up.
 */

export type Term = {
  term: string;
  /** Expansion of an abbreviation, where the term is one. */
  expands?: string;
  definition: string;
  /** The distinction people most often get wrong. Optional and used sparingly. */
  confusedWith?: string;
  /** An internal page that treats the subject properly. */
  see?: { label: string; href: string };
};

export const glossary: Term[] = [
  {
    term: "Arrears",
    definition:
      "Pay owed for an earlier period and settled in a later one, most often because an increment was agreed after its effective date. The affected months are recomputed, the difference is paid as an identified line in the current month, and the original payslips stand as issued.",
    confusedWith:
      "Not the same as a correction. An arrear says the earlier payslip was right under the salary then in force; a correction says it was wrong.",
    see: { label: "Payroll", href: "/solutions/payroll" },
  },
  {
    term: "Attrition",
    definition:
      "The rate at which employees leave an organisation over a period. Read on its own it says little; read by department, tenure band or grade it usually shows that what felt like a company-wide problem is concentrated in one place.",
  },
  {
    term: "Basic pay",
    definition:
      "The core fixed component of a salary, before allowances. It matters far beyond its own size, because the provident fund wage and the gratuity calculation are both computed on it — which makes the split between basic and allowances a cost decision rather than a formatting one.",
  },
  {
    term: "Calibration",
    definition:
      "The step in a review cycle where draft ratings are compared across managers before they are finalised. It exists because two managers assessing comparable work rarely arrive at the same rating unaided.",
    see: { label: "Performance & OKRs", href: "/solutions/performance" },
  },
  {
    term: "Comp-off",
    expands: "Compensatory off",
    definition:
      "Leave earned by working on a day that was not a working day — a weekly off or a public holiday — granted instead of paying an overtime premium. It is a consequence of the attendance record rather than a discretionary grant, and it normally carries an expiry.",
    confusedWith:
      "Not a leave type an employee applies for from a balance. It has to be earned first, and it lapses if unused by the date the policy sets.",
    see: { label: "Leave Management", href: "/solutions/leave-management" },
  },
  {
    term: "Continuous service",
    definition:
      "Unbroken service with the same employer, counted from the date of joining. It is the qualifying test for gratuity and it underlies leave accrual, which is why an internal transfer should be a dated change on an existing record rather than a new record.",
  },
  {
    term: "Contribution period",
    definition:
      "The fixed half-yearly window over which ESI eligibility is determined. An employee covered at the start of a period remains covered for its duration, even if a mid-period revision takes their gross above the threshold.",
    confusedWith:
      "Not a monthly test. Treating it as one is among the most common and most expensive payroll errors in India.",
  },
  {
    term: "CTC",
    expands: "Cost to company",
    definition:
      "The employer's total annual cost of employing someone: gross pay plus the employer's own contributions and any other costs attributed to the role. It is higher than gross, and it is never an amount the employee receives.",
    confusedWith:
      "Frequently quoted as though it were salary. Gross is what is earned before deduction; take-home is what reaches the bank; CTC is what the employer spends.",
    see: { label: "Salary calculator", href: "/calculators/salary" },
  },
  {
    term: "Dearness allowance",
    expands: "DA",
    definition:
      "A cost-of-living component paid alongside basic. Where it is paid, it forms part of the provident fund wage together with basic, and part of the wages used in the gratuity calculation.",
  },
  {
    term: "ECR",
    expands: "Electronic Challan cum Return",
    definition:
      "The monthly return file uploaded to the EPFO portal, carrying each member's wages and contributions for the month. It should be produced by the payroll run that computed those contributions rather than assembled separately.",
    see: { label: "Compliance", href: "/solutions/compliance" },
  },
  {
    term: "Effective dating",
    definition:
      "Recording when a change takes effect rather than only that it happened, so a past period can be read as it stood at the time. A salary revision, a policy change and a reporting-line move should all carry a date the change applies from.",
    confusedWith:
      "Not the same as an edit history. Effective dating changes what the system calculates for a period; an audit log only records who typed what.",
  },
  {
    term: "EPF",
    expands: "Employees' Provident Fund",
    definition:
      "A statutory retirement savings scheme. The employee contributes 12% of the PF wage and the employer 12%, of which 8.33% is diverted to the pension scheme within the statutory ceiling. Coverage generally begins at twenty employees in a covered establishment, with voluntary coverage possible below that.",
    see: { label: "PF calculator", href: "/calculators/pf" },
  },
  {
    term: "EPS",
    expands: "Employees' Pension Scheme",
    definition:
      "The pension component funded from within the employer's provident fund contribution at 8.33%, subject to the statutory wage ceiling. It is not an additional cost on top of the employer's 12%; it is a split of it.",
  },
  {
    term: "ESI",
    expands: "Employees' State Insurance",
    definition:
      "A contributory health and social security scheme for employees earning at or below the wage threshold, currently ₹21,000 gross a month. The employee contributes 0.75% of gross and the employer 3.25%. Coverage generally begins at ten employees in a covered establishment.",
    see: { label: "ESI calculator", href: "/calculators/esi" },
  },
  {
    term: "Form 16",
    definition:
      "The annual certificate an employer issues to an employee summarising salary paid and tax deducted at source for the financial year. Part B carries the salary breakdown and the computation. It must reconcile across the whole year regardless of how many payroll systems produced it.",
  },
  {
    term: "Form 24Q",
    definition:
      "The quarterly return through which an employer reports tax deducted at source on salary under Section 192. It reconciles to the deductions the payroll runs actually made in the quarter.",
  },
  {
    term: "Full and final settlement",
    expands: "F&F",
    definition:
      "The closing payment when employment ends. It draws on every other record at once: salary to the last working day from attendance, leave encashment from the leave ledger, notice pay or recovery from the resignation record, gratuity where the qualifying service is complete, less advances and unreturned assets.",
    see: { label: "Onboarding & Lifecycle", href: "/solutions/onboarding" },
  },
  {
    term: "Gratuity",
    definition:
      "A statutory payment on separation to employees who have completed five years of continuous service, calculated as fifteen days' wages for each completed year on the last drawn basic, using a twenty-six day divisor. The five-year condition does not apply in the case of death or disablement.",
    see: { label: "Gratuity calculator", href: "/calculators/gratuity" },
  },
  {
    term: "Gross salary",
    definition:
      "Everything earned in a month before any deduction: basic, allowances and any variable components. Statutory deductions and taxes are applied to it or to components within it, so it is the figure most rules are anchored to.",
  },
  {
    term: "Grace period",
    definition:
      "A short window after the shift start within which arrival is not treated as late. It is an employer policy rather than a statutory concept, and its length is one of the few settings that visibly changes attendance behaviour.",
  },
  {
    term: "HRMS",
    expands: "Human Resource Management System",
    definition:
      "A system that holds one authoritative record per employee and runs the workflows that read from it — attendance, leave, payroll, performance, documents. The defining property is the single record, not the number of features.",
    confusedWith:
      "Often used interchangeably with payroll software. Payroll is a calculation that reads the record; an HRMS is the record itself plus everything else that reads it.",
    see: { label: "HRMS", href: "/solutions/hrms" },
  },
  {
    term: "KRA",
    expands: "Key Result Area",
    definition:
      "An ongoing area of accountability attached to a role, stable across quarters. It describes what a person is responsible for by virtue of the job they hold rather than what they are trying to change this period.",
    confusedWith:
      "Not an OKR. An OKR is time-bound and ambitious; a KRA is continuous and role-bound. Appraisals go wrong when an organisation measures only one of the two.",
  },
  {
    term: "LOP",
    expands: "Loss of pay",
    definition:
      "An unpaid day, arising from absence without an approved application or from leave taken against an exhausted balance. It reduces paid days for the month, and therefore the salary, the PF wage and in some cases the ESI contribution.",
    confusedWith:
      "Not a penalty or a fine. It is simply the withholding of pay for a day not worked and not covered by leave.",
  },
  {
    term: "LWF",
    expands: "Labour Welfare Fund",
    definition:
      "A state-administered welfare fund operated in some states, with employer and employee shares and a periodicity set by the state. Half-yearly and annual cycles are both common, so deadlines differ across a multi-state employer.",
  },
  {
    term: "Maternity benefit",
    definition:
      "Paid leave and associated protections provided under the Maternity Benefit Act. Because it is a statutory entitlement rather than a company policy, it is tracked as its own leave type and does not draw down the ordinary leave pool.",
  },
  {
    term: "Muster roll",
    definition:
      "The attendance register an establishment is required to maintain. Whether kept on paper or digitally, it must be able to answer a specific question about a specific person on a specific date — which is the form an inspection almost always takes.",
  },
  {
    term: "New tax regime",
    definition:
      "The alternative personal income tax structure with different slab rates and substantially fewer exemptions and deductions than the old regime. The election belongs to the employee and drives their TDS for the year, which is why the comparison is best made on their own numbers.",
    confusedWith:
      "Not automatically better or worse. Which regime costs less depends on the individual's declarations, and the answer differs between two people on identical salaries.",
  },
  {
    term: "Notice period",
    definition:
      "The period a party must serve after resignation or termination, set by the employment contract. It interacts with leave and with the last working day, and it may in some cases be bought out by agreement.",
  },
  {
    term: "9-box",
    definition:
      "A three-by-three matrix plotting demonstrated performance against assessed potential. Its value is comparative — it shows where a team is dense and where it is thin. A single person's position, read alone, tells you very little.",
  },
  {
    term: "OKR",
    expands: "Objective and Key Result",
    definition:
      "A goal-setting structure pairing a qualitative objective with quantitative key results that measure progress toward it. Objectives are written to be memorable; key results exist to be read rather than argued about.",
    see: { label: "Performance & OKRs", href: "/solutions/performance" },
  },
  {
    term: "Payslip",
    definition:
      "The statement issued to an employee for a pay period, showing earnings, deductions and net pay. A reissued payslip should be the original document rather than a regenerated approximation, since the period it covers has already been filed against.",
    see: { label: "Reading an Indian payslip", href: "/blog/reading-an-indian-payslip" },
  },
  {
    term: "PF wage",
    definition:
      "The wage base on which provident fund contributions are computed: basic plus dearness allowance, subject to the ₹15,000 statutory ceiling where the employer applies it. Getting this base wrong is the usual cause of a PF figure being wrong.",
  },
  {
    term: "PIP",
    expands: "Performance Improvement Plan",
    definition:
      "A defined period with milestones, structured support and a decision at the end. HRMagix structures it across 30, 60 and 90 days with a manager coaching log. A plan with an end date and no interim checkpoints is a countdown rather than an improvement plan.",
  },
  {
    term: "Probation",
    definition:
      "An initial period during which suitability is assessed, ending in confirmation, extension or separation. The failure mode is not a harsh decision but no decision — the period lapses, nothing is recorded, and the ambiguity surfaces at an increment or an exit.",
  },
  {
    term: "Professional tax",
    expands: "PT",
    definition:
      "A tax on employment levied by some Indian states. Slabs, exemptions and periodicity are set by each state, and at least one state deducts a different amount in a single month of the year, so a multi-state employer runs several schedules rather than one.",
  },
  {
    term: "Regularisation",
    definition:
      "A correction to an attendance record raised against a specific day with a reason attached and routed for approval. The original capture is kept alongside the correction rather than replaced, because a ledger that can be overwritten is not evidence of anything.",
    see: { label: "Attendance & Shifts", href: "/solutions/attendance" },
  },
  {
    term: "Sandwich rule",
    definition:
      "A leave policy under which non-working days falling between two leave days are themselves counted as leave. It is an employer choice rather than a statutory requirement, and most organisations discover their own position on it only when somebody disputes a deduction.",
    see: { label: "The sandwich rule", href: "/blog/sandwich-rule" },
  },
  {
    term: "Section 192",
    definition:
      "The provision of the Income Tax Act requiring an employer to deduct tax at source from salary. The deduction is projected across the financial year against the employee's regime election and verified declarations, and reported quarterly on Form 24Q.",
  },
  {
    term: "Self-service",
    expands: "ESS, employee self service portal",
    definition:
      "The employee's own access to their record: payslips, Form 16, leave balances and applications, attendance regularisation, personal detail updates and investment declarations. Its scope is deliberately narrow — applying is not approving.",
    see: { label: "Employee Self-Service", href: "/solutions/ess" },
  },
  {
    term: "Shift",
    definition:
      "A defined working window that attendance is measured against. A shift crossing midnight is treated as one unit attributed to the day it began; splitting it at the date boundary produces two short days and an incorrect overtime figure.",
    see: {
      label: "Shifts across midnight",
      href: "/blog/shift-detection-across-midnight",
    },
  },
  {
    term: "Take-home",
    expands: "Net pay",
    definition:
      "What actually reaches the employee's bank account: gross less the employee's own statutory contributions, tax deducted at source and any other authorised deductions.",
  },
  {
    term: "TDS",
    expands: "Tax deducted at source",
    definition:
      "Tax withheld by the payer and deposited with the government on the recipient's behalf. On salary it is governed by Section 192, projected across the financial year, and certified annually to the employee on Form 16.",
  },
  {
    term: "Tenure",
    definition:
      "Time from date of joining to today, or to the last working day for those who have left. Reported as a distribution by grade, function or location rather than as a single average, which tends to conceal exactly the pattern worth seeing.",
  },
  {
    term: "UAN",
    expands: "Universal Account Number",
    definition:
      "The permanent identifier issued to a provident fund member, which stays with the individual across employers and links their member IDs. It is one of the identifiers that has to be correct before a first payroll run, not after it.",
  },
  {
    term: "Wage register",
    definition:
      "The record of wages paid, maintained in the form the applicable legislation prescribes and produced on demand. Like the muster roll, it is tested on a specific person and date rather than on its totals.",
  },
];

/** Grouped A–Z, skipping letters with no entries. */
export function byLetter(terms: Term[] = glossary) {
  const map = new Map<string, Term[]>();
  for (const t of [...terms].sort((a, b) => a.term.localeCompare(b.term, "en"))) {
    const first = t.term[0].toUpperCase();
    // Numerals group under a single heading rather than one per digit.
    const key = /[A-Z]/.test(first) ? first : "#";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(t);
  }
  return [...map.entries()].sort(([a], [b]) => (a === "#" ? -1 : b === "#" ? 1 : a.localeCompare(b)));
}

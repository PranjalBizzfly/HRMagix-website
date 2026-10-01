import type { Term } from "./glossary";

/** Terms added in the 400-page expansion. Each needs an explicit `slug`. */
export const glossaryMore: Term[] = [
  {
    term: "HRIS",
    slug: "hris",
    expands: "Human resource information system",
    definition:
      "Software that holds the core employee record: personal details, job history, reporting lines, documents and the dated changes to each. The term usually describes the system of record itself rather than the processes built on it, such as payroll runs, leave approvals or reviews.",
    confusedWith:
      "Often used interchangeably with HRMS. In common usage an HRIS is the record, while an HRMS adds the day-to-day processes that read from and write to it.",
    see: { label: "HRMS vs HRIS vs HCM: HR Software Terms Explained", href: "/resources/compare/hrms-vs-hris-vs-hcm" },
  },
  {
    term: "HCM",
    slug: "hcm",
    expands: "Human capital management",
    definition:
      "A category name for software and practice covering the whole of managing people, from hiring and records through pay, performance, development and succession. Vendors use it for broad suites, so the label says more about scope than about any particular feature.",
    see: { label: "HRMS vs HRIS vs HCM: HR Software Terms Explained", href: "/resources/compare/hrms-vs-hris-vs-hcm" },
  },
  {
    term: "PEO",
    slug: "peo",
    expands: "Professional employer organisation",
    definition:
      "A firm that becomes the employer of record for a client's staff on paper, running payroll, statutory contributions and HR administration under its own registrations, while the client directs the day-to-day work. The arrangement is called co-employment, and the contract decides who carries which liability.",
    confusedWith:
      "Not the same as outsourcing payroll processing. A payroll bureau runs your payroll under your registrations; a PEO employs the people under its own.",
    see: { label: "In-House vs Outsourced Payroll", href: "/resources/compare/in-house-vs-outsourced-payroll" },
  },
  {
    term: "ATS",
    slug: "ats",
    expands: "Applicant tracking system",
    definition:
      "Software that manages candidates from application to offer: job postings, CVs, interview stages, feedback and the offer itself. Its job ends at acceptance, when the candidate's details should pass into the employee record so nothing is keyed in twice before the first day.",
    see: { label: "Employee Onboarding Guide", href: "/hr/topics/employee-onboarding" },
  },
  {
    term: "HRA",
    slug: "hra",
    expands: "House rent allowance",
    definition:
      "A salary component paid towards the employee's rent. An employee who pays rent can claim part of it as exempt under Section 10(13A) of the Income-tax Act and Rule 2A, the exempt amount being the lowest of three limits worked out from actual HRA, rent paid and salary. The exemption is available only under the old tax regime.",
    see: { label: "House Rent Allowance (HRA) Exemption Calculator", href: "/calculators/hra-exemption" },
  },
  {
    term: "LTA",
    slug: "lta",
    expands: "Leave travel allowance",
    definition:
      "An allowance towards the cost of travel within India while on leave, exempt under Section 10(5) of the Income-tax Act for the actual fare on the shortest route, under the old tax regime. The exemption can be claimed for a limited number of journeys in each block of years, so payroll needs travel proof and a record of which block each claim falls in.",
  },
  {
    term: "Special allowance",
    slug: "special-allowance",
    definition:
      "The balancing figure in an Indian salary structure: once basic, HRA and the named allowances are set, whatever remains of the agreed gross is paid as special allowance. It is fully taxable, and because it usually sits outside the PF wage, how large it is becomes a contribution question as well as a presentation one.",
    see: { label: "Salary Structure Guide", href: "/hr/topics/salary-structure" },
  },
  {
    term: "Variable pay",
    slug: "variable-pay",
    definition:
      "The part of compensation that depends on individual, team or company performance, paid after the performance period rather than monthly. It is usually quoted inside CTC at its target value, so the amount actually paid can be lower or higher than the figure in the offer letter.",
    confusedWith:
      "Not the same as a statutory bonus, which is a legal entitlement under the Payment of Bonus Act for eligible employees regardless of individual performance.",
    see: { label: "Cost to Company (CTC) Calculator", href: "/calculators/ctc" },
  },
  {
    term: "Reimbursements",
    slug: "reimbursements",
    definition:
      "Amounts paid back to an employee for expenses incurred for work, such as travel, fuel or a phone bill, against bills or a claim. Where the expense is genuinely for the employer's business and supported by proof, it is not income; a fixed monthly amount paid without proof is an allowance and is taxed as one.",
  },
  {
    term: "Perquisites",
    slug: "perquisites",
    definition:
      "Benefits in kind given to an employee, such as a company car, rent-free accommodation, a concessional loan or stock options, which are taxed as salary under Section 17(2) of the Income-tax Act. Their taxable value is worked out under Rule 3, and the employer reports them and deducts tax on them through payroll.",
    see: { label: "TDS on Salary Guide", href: "/hr/topics/tds-on-salary" },
  },
  {
    term: "Form 12BB",
    slug: "form-12bb",
    definition:
      "The statement an employee gives the employer under Rule 26C of the Income-tax Rules, listing rent paid, travel claims, interest on a housing loan and deductions such as Section 80C, with the evidence for each. The employer relies on it to compute tax deducted at source for the year, so it drives both the monthly TDS and the year-end figures.",
    see: { label: "Collecting Investment Declarations and Proofs From Employees", href: "/resources/hr-guides/collecting-investment-declarations" },
  },
  {
    term: "TAN",
    slug: "tan",
    expands: "Tax deduction and collection account number",
    definition:
      "The ten-character number an employer must hold under Section 203A of the Income-tax Act before deducting tax at source. It is quoted on every TDS payment challan, on Form 24Q and on Form 16, and an entity with several deducting branches may hold more than one.",
    confusedWith:
      "Not the company's PAN. PAN identifies the taxpayer; TAN identifies the deductor for TDS purposes, and both appear on Form 16.",
    see: { label: "TDS on Salary Guide", href: "/hr/topics/tds-on-salary" },
  },
  {
    term: "Standard deduction",
    slug: "standard-deduction",
    definition:
      "A flat deduction from salary income under Section 16(ia) of the Income-tax Act, allowed without any proof of expense. It applies under both the old and new regimes, but the amount has differed between them and is set by the Finance Act, so payroll should take the current year's figure rather than carry one forward.",
    see: { label: "The Declaration That Decides Twelve Months of TDS", href: "/insights/old-vs-new-regime" },
  },
  {
    term: "Section 87A rebate",
    slug: "section-87a-rebate",
    definition:
      "A rebate under Section 87A of the Income-tax Act that reduces the tax payable by a resident individual whose total income is within a set limit, in many cases to nil. The income limit and the maximum rebate differ by regime and are revised in Finance Acts, so payroll must apply the figures for the year in question when projecting TDS.",
    see: { label: "TDS on Salary Guide", href: "/hr/topics/tds-on-salary" },
  },
  {
    term: "Section 80C",
    slug: "section-80c",
    definition:
      "The provision of the Income-tax Act allowing a deduction from total income for specified savings and payments, including the employee's own provident fund contribution, life insurance premiums, PPF, ELSS funds, children's tuition fees and housing loan principal. It is available only under the old regime, up to a ceiling set in the Act, and employees declare it through Form 12BB.",
    see: { label: "Collecting Investment Declarations and Proofs From Employees", href: "/resources/hr-guides/collecting-investment-declarations" },
  },
  {
    term: "NPS",
    slug: "nps",
    expands: "National Pension System",
    definition:
      "A voluntary, market-linked retirement scheme regulated by PFRDA, to which employees and employers can both contribute. The employer's contribution can be deducted by the employee under Section 80CCD(2) within a percentage of salary set in the Act, which is why some employers offer it as a component in the salary structure.",
    confusedWith:
      "Not a substitute for EPF where EPF applies. Covered establishments must still contribute to EPF; NPS sits alongside it.",
  },
  {
    term: "VPF",
    slug: "vpf",
    expands: "Voluntary provident fund",
    definition:
      "A contribution an employee chooses to make to their provident fund account above the statutory 12% of PF wage, deducted through payroll. The employer is not required to match it, and it earns the same interest as the rest of the EPF balance.",
    see: { label: "Provident Fund (PF) Calculator", href: "/calculators/pf" },
  },
  {
    term: "EDLI",
    slug: "edli",
    expands: "Employees' Deposit Linked Insurance",
    definition:
      "Life insurance for EPF members under the Employees' Deposit Linked Insurance Scheme 1976, paid to the nominee if the member dies while in service. The employer funds it at 0.5% of wages up to ₹15,000 a month; employees contribute nothing.",
    see: { label: "Provident Fund (PF) Calculator", href: "/calculators/pf" },
  },
  {
    term: "EPF admin charges",
    slug: "epf-admin-charges",
    definition:
      "The administrative charge the employer pays to the EPFO on top of contributions, at 0.5% of PF wages, remitted through the same monthly challan. It is an employer cost only and never deducted from the employee, so it belongs in CTC and payroll cost workings rather than on the payslip.",
    see: { label: "Payroll Cost Calculator", href: "/calculators/payroll-cost" },
  },
  {
    term: "Leave encashment",
    slug: "leave-encashment",
    definition:
      "Payment for earned leave that has not been taken, either during service where the policy allows or on separation. It is computed on the wage the policy or applicable law specifies, typically basic plus DA, and on exit its tax treatment is governed by Section 10(10AA) of the Income-tax Act.",
    see: { label: "Leave Encashment Calculator", href: "/calculators/leave-encashment" },
  },
  {
    term: "Leave accrual",
    slug: "leave-accrual",
    definition:
      "The way leave is earned over time, such as a fixed number of days credited each month or quarter, rather than granted in full on the first day of the leave year. Accrual ties the balance to service actually worked, so a mid-year joiner or leaver holds only what they have earned.",
    see: { label: "Leave Management Guide", href: "/hr/topics/leave-management" },
  },
  {
    term: "Leave carry forward",
    slug: "leave-carry-forward",
    definition:
      "Moving unused leave from one leave year into the next, usually up to a cap, with anything above the cap lapsing or being encashed. The Factories Act and state Shops and Establishments Acts set limits on how much earned leave can be accumulated, and the policy must sit within them.",
    see: { label: "Closing the Leave Year: Carry-Forward, Lapse and Encashment", href: "/resources/hr-guides/leave-year-end" },
  },
  {
    term: "Earned leave",
    slug: "earned-leave",
    expands: "EL, also called privilege leave",
    definition:
      "Paid leave that builds up with days worked, usually available for planned absence and usually the type that can be carried forward and encashed. The Factories Act and state Shops and Establishments Acts set minimum entitlements, which vary by state and type of establishment.",
    confusedWith:
      "Not casual leave. Earned leave accumulates and is normally planned in advance; casual leave is short, unplanned and usually lapses at year-end.",
    see: { label: "Leave Policy", href: "/policy-centre/workplace-policy-library/leave" },
  },
  {
    term: "Casual leave",
    slug: "casual-leave",
    expands: "CL",
    definition:
      "Short paid leave for unforeseen personal matters, typically taken a day or two at a time and often without long notice. It usually cannot be carried forward or encashed, and many policies cap how many consecutive days can be taken; minimum entitlements, where they exist, vary by state.",
    see: { label: "Writing a Leave Policy That Survives Contact With a Year", href: "/resources/hr-guides/writing-a-leave-policy" },
  },
  {
    term: "Sick leave",
    slug: "sick-leave",
    expands: "SL",
    definition:
      "Paid leave for illness, often requiring a medical certificate beyond a set number of consecutive days. Statutory minimums, where they exist, come from state Shops and Establishments rules and vary by state; for employees covered by ESI, longer illness is compensated by sickness benefit from the ESIC rather than by the employer.",
    see: { label: "Leave Management Guide", href: "/hr/topics/leave-management" },
  },
  {
    term: "Restricted holiday",
    slug: "restricted-holiday",
    expands: "RH, also called optional holiday",
    definition:
      "A holiday the employee picks from a published list, up to a set number in the year, instead of a day the whole organisation takes off. It lets an employer recognise many festivals across a diverse workforce without closing for all of them.",
    see: { label: "Holiday Calendars Guide", href: "/hr/topics/holiday-calendars" },
  },
  {
    term: "Weekly off",
    slug: "weekly-off",
    definition:
      "The rest day each employee is entitled to in a week, required by the Factories Act and by state Shops and Establishments Acts. It need not be Sunday or the same day for everyone, which matters for rostered teams, and whether a weekly off between two leave days counts as leave is decided by the sandwich rule in the policy.",
    see: { label: "The Sandwich Rule Is Not Unfair. Applying It Inconsistently Is.", href: "/insights/sandwich-rule" },
  },
  {
    term: "Half-day",
    slug: "half-day",
    definition:
      "A day on which the employee worked or took leave for roughly half the shift, recorded as 0.5 of a day. Policies define what counts, usually by hours present or by first and second half, and the same definition has to drive both the attendance record and the leave debit or LOP.",
    see: { label: "Attendance Management Guide", href: "/hr/topics/attendance-management" },
  },
  {
    term: "Shift allowance",
    slug: "shift-allowance",
    definition:
      "An additional payment for working night, early or rotating shifts, paid per shift or as a monthly amount. It is a contractual or policy entitlement, taxable as salary, and needs the shift actually worked from attendance rather than the shift rostered.",
    see: { label: "Shift Management Guide", href: "/hr/topics/shift-management" },
  },
  {
    term: "Geo-fencing",
    slug: "geo-fencing",
    definition:
      "Restricting where attendance can be marked from a phone to a defined radius around a work location. A punch outside the boundary is either blocked or flagged for review, which makes mobile attendance usable for site, field and branch staff.",
    see: { label: "Biometric vs Mobile Attendance", href: "/resources/compare/biometric-vs-mobile-attendance" },
  },
  {
    term: "Biometric attendance",
    slug: "biometric-attendance",
    definition:
      "Marking attendance on a device that identifies the employee by fingerprint or face, so one person cannot punch for another. The device records the punch; the attendance system still has to apply the shift, grace period and regularisation rules to turn punches into a day's status.",
    see: { label: "Biometric vs Mobile Attendance", href: "/resources/compare/biometric-vs-mobile-attendance" },
  },
  {
    term: "Timesheet",
    slug: "timesheet",
    definition:
      "A record of hours spent on work, usually split by project, client or task, filled in by the employee and approved by a manager. It answers what the time was spent on, which attendance alone does not, and is the basis for client billing and utilisation.",
    confusedWith:
      "Not the attendance record. Attendance shows presence for pay; a timesheet allocates the hours worked.",
  },
  {
    term: "Roster",
    slug: "roster",
    expands: "Also called duty roster",
    definition:
      "A published schedule of which employee works which shift on which day over a period, including their weekly offs. It is the plan against which actual attendance is compared, so late marks, overtime and absence are only as accurate as the roster.",
    see: { label: "Shift Management Guide", href: "/hr/topics/shift-management" },
  },
  {
    term: "Headcount",
    slug: "headcount",
    definition:
      "The number of people employed at a point in time. Counts differ between reports because of what is included: interns, contract staff, people serving notice, those on long leave, and whether the count is taken on the first or last day of the month, so every headcount figure should state its rules.",
    see: { label: "Producing a Headcount Number Everyone Agrees On", href: "/resources/hr-guides/monthly-headcount-report" },
  },
  {
    term: "FTE",
    slug: "fte",
    expands: "Full-time equivalent",
    definition:
      "A measure that converts part-time and partial-period work into whole full-time positions: two people each working half the standard hours make one FTE. It is the right unit for cost and capacity planning, where headcount would overstate the workforce.",
    confusedWith:
      "Not headcount. Headcount counts people; FTE counts the work they are contracted for.",
  },
  {
    term: "Utilisation rate",
    slug: "utilisation-rate",
    definition:
      "Billable hours as a share of available hours over a period, used mainly in services firms. Available hours should exclude leave and holidays, and the definition of billable has to be agreed, otherwise two teams' rates cannot be compared.",
    see: { label: "Professional Services", href: "/industries/professional-services" },
  },
  {
    term: "Absenteeism",
    slug: "absenteeism",
    definition:
      "Unplanned absence from scheduled work, measured as absent days as a share of scheduled working days. Approved planned leave is usually excluded, so the measure isolates the absence that disrupts rosters and output.",
    see: { label: "Absenteeism Rate Calculator", href: "/calculators/absenteeism-rate" },
  },
  {
    term: "Retention rate",
    slug: "retention-rate",
    definition:
      "The share of employees at the start of a period who are still employed at its end. People hired during the period are left out, which is why retention and attrition calculated for the same period do not always add up to one hundred per cent.",
    confusedWith:
      "Not simply the inverse of attrition. Attrition counts all leavers, including recent hires; retention follows only the starting group.",
    see: { label: "Employee Retention Guide", href: "/hr/topics/employee-retention" },
  },
  {
    term: "Cost per hire",
    slug: "cost-per-hire",
    definition:
      "Total recruitment spend in a period divided by the number of hires made. External costs such as agency fees, job boards and referral bonuses are easy to count; internal costs such as recruiter salaries and interviewer time are often left out, which makes figures from different sources hard to compare.",
  },
  {
    term: "Time to hire",
    slug: "time-to-hire",
    definition:
      "The number of days between a candidate entering the process, or the role being opened, and the candidate accepting the offer. Organisations measure from different starting points, so the definition should be fixed before the number is tracked.",
  },
  {
    term: "Offer acceptance rate",
    slug: "offer-acceptance-rate",
    definition:
      "Offers accepted as a share of offers made in a period. A low rate points to a gap between what the role offers and what candidates expect, or to a slow process, and is best read by role and level rather than as one company figure.",
  },
  {
    term: "eNPS",
    slug: "enps",
    expands: "Employee net promoter score",
    definition:
      "A measure from one question: how likely an employee is to recommend the organisation as a place to work, on a scale of 0 to 10. Those scoring 9 or 10 are promoters and 0 to 6 detractors; the score is the percentage of promoters minus the percentage of detractors, so it ranges from -100 to +100.",
    see: { label: "Employee Engagement Guide", href: "/hr/topics/employee-engagement" },
  },
  {
    term: "360-degree feedback",
    slug: "360-degree-feedback",
    definition:
      "Feedback on an employee gathered from several directions: their manager, peers, direct reports and sometimes clients, along with a self-assessment. It is most useful for development, because ratings from people who see different sides of the work are hard to turn into a single score.",
    see: { label: "Performance Reviews Guide", href: "/hr/topics/performance-reviews" },
  },
  {
    term: "Competency framework",
    slug: "competency-framework",
    definition:
      "A defined set of skills and behaviours expected in a role, with descriptions of what each looks like at different levels. It gives hiring, reviews and promotion decisions a shared language, so a rating refers to something observable rather than a general impression.",
    see: { label: "Performance & OKRs", href: "/solutions/performance-and-okrs" },
  },
  {
    term: "Bell curve",
    slug: "bell-curve",
    expands: "Also called forced distribution",
    definition:
      "A rating approach that requires a fixed share of employees in each rating band, so that most fall in the middle and fewer at the top and bottom. It controls rating inflation but can force distinctions in small teams where none exist.",
    confusedWith:
      "Not the same as calibration. Calibration compares ratings across managers; a bell curve imposes the proportions.",
    see: { label: "Calibration (Glossary)", href: "/resources/hr-and-payroll-glossary/calibration" },
  },
  {
    term: "Span of control",
    slug: "span-of-control",
    definition:
      "The number of direct reports a manager has. Too wide and the manager cannot give each person attention; too narrow and the organisation carries extra layers, so the right span depends on how similar and how independent the work is.",
  },
  {
    term: "Notice pay",
    slug: "notice-pay",
    definition:
      "Payment in place of the notice period, either by the employer to release an employee early or by the employee to leave without serving it. It is computed on the wage the contract specifies for the unserved days and settled through the full and final settlement.",
    confusedWith:
      "Not the notice period itself. The period is the time owed; notice pay is money paid instead of that time.",
    see: { label: "Notice Pay Calculator", href: "/calculators/notice-pay" },
  },
  {
    term: "Payroll cycle",
    slug: "payroll-cycle",
    definition:
      "The recurring window from one pay day to the next, usually a calendar month in India, covering the attendance cut-off, inputs, the run, approval, payment and statutory filings. Fixing each date in the cycle is what lets late inputs be carried into the next month rather than reopening the current one.",
    see: { label: "The Payroll Cutoff Guide", href: "/hr/topics/payroll-cutoff" },
  },
  {
    term: "Form 11",
    slug: "form-11",
    definition:
      "The declaration a new employee completes at joining, stating whether they were previously a member of EPF or EPS and, if so, their UAN and previous employment. The employer uses it to link the new employment to the existing UAN instead of creating a second one.",
    see: { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund" },
  },
  {
    term: "EPF nomination (Form 2)",
    slug: "epf-nomination",
    definition:
      "The nomination of family members to receive provident fund, pension and EDLI benefits if the member dies, made on Form 2 or online through the member portal (e-nomination). Without a valid nomination, settlement to the family can take considerably longer.",
    see: { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund" },
  },
  {
    term: "ESIC IP number",
    slug: "esic-ip-number",
    expands: "Insured person number",
    definition:
      "The unique number the Employees' State Insurance Corporation issues to each employee registered under ESI. It stays with the employee across employers, and the next employer should register the person against the existing number rather than create a new one.",
    see: { label: "Employee State Insurance (ESI) Guide", href: "/hr/topics/employee-state-insurance" },
  },
  {
    term: "EPF KYC",
    slug: "epf-kyc",
    definition:
      "Linking an EPF member's Aadhaar, PAN and bank account to their UAN, with the employer approving the details on the EPFO portal. Complete KYC is what allows online transfer and withdrawal claims, so missing KYC is a common reason claims are rejected.",
    see: { label: "Universal Account Number (UAN) (Glossary)", href: "/resources/hr-and-payroll-glossary/uan" },
  },
  {
    term: "PF transfer",
    slug: "pf-transfer",
    definition:
      "Moving the provident fund balance from a previous employer's account to the current one under the same UAN, usually by an online claim on Form 13. Transferring rather than withdrawing keeps service continuous for pension purposes.",
    see: { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund" },
  },
  {
    term: "PF withdrawal",
    slug: "pf-withdrawal",
    definition:
      "Taking money out of the provident fund, either in full on leaving employment under the conditions in the EPF Scheme 1952, or as a partial advance for specified purposes such as illness, housing or marriage. Withdrawals within five years of continuous service may attract tax, and claims are made online against the UAN.",
    see: { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund" },
  },
  {
    term: "Flexible benefit plan",
    slug: "flexible-benefit-plan",
    expands: "FBP",
    definition:
      "A part of the salary that the employee allocates among a menu of components, such as fuel, telephone, meal cards or books, within a fixed total. Claimed against bills, some components are tax-efficient under the old regime; any unclaimed amount is usually paid out as taxable salary at year-end.",
    see: { label: "Salary Structure Guide", href: "/hr/topics/salary-structure" },
  },
  {
    term: "ESOP",
    slug: "esop",
    expands: "Employee stock option plan",
    definition:
      "A right granted to an employee to buy company shares at a set price after a vesting period. Under Section 17(2) of the Income-tax Act, the difference between fair market value on exercise and the price paid is a perquisite taxed through payroll, and a further capital gain arises on sale.",
    see: { label: "Perquisites (Glossary)", href: "/resources/hr-and-payroll-glossary/perquisites" },
  },
  {
    term: "Joining bonus",
    slug: "joining-bonus",
    expands: "Also called sign-on bonus",
    definition:
      "A one-time payment made when a new employee joins, often to offset a bonus forgone at the previous employer. It is taxable as salary in the month paid and usually carries a clause requiring repayment if the employee leaves within a stated period.",
    see: { label: "Offer Letter Template", href: "/resources/hr-letter-templates/offer-letter" },
  },
  {
    term: "Retention bonus",
    slug: "retention-bonus",
    definition:
      "A payment promised to an employee for staying until a set date or through an event such as an acquisition or a project, paid when the condition is met. It is taxable as salary, and the agreement should state what happens if the employee is let go before the date.",
  },
  {
    term: "Clawback",
    slug: "clawback",
    definition:
      "A contractual right to recover money already paid, such as a joining bonus, relocation cost or training cost, if the employee leaves before a set period. Recovery is usually made in the full and final settlement, and how far it can be enforced depends on the clause being reasonable and agreed in writing.",
    see: { label: "Full and Final Settlement Calculator", href: "/calculators/full-and-final" },
  },
  {
    term: "Garden leave",
    slug: "garden-leave",
    definition:
      "Part or all of a notice period during which the employee remains employed and paid but is told not to come to work or contact clients. It keeps the person away from sensitive work and contacts while their contractual duties continue until the last day.",
    see: { label: "Notice Periods Guide", href: "/hr/topics/notice-periods" },
  },
  {
    term: "Moonlighting",
    slug: "moonlighting",
    definition:
      "Holding a second job or doing paid work outside the main employment. Whether it is permitted depends on the employment contract and standing orders; many contracts require exclusivity or prior approval, and simultaneous registration under another employer's UAN can bring it to light.",
    see: { label: "Work From Home Employee Exclusivity Policy", href: "/policy-centre/workplace-policy-library/work-from-home-exclusivity" },
  },
  {
    term: "Short leave",
    slug: "short-leave",
    definition:
      "Permission to be away for a few hours, such as arriving late or leaving early, without taking a half-day. Policies usually limit how many hours or instances are allowed in a month, after which the absence is treated as a half-day or LOP.",
    see: { label: "Late Coming Policy", href: "/policy-centre/workplace-policy-library/late-coming" },
  },
  {
    term: "Relocation allowance",
    slug: "relocation-allowance",
    definition:
      "Payment towards an employee's cost of moving for the job: travel, packing and shifting, and temporary accommodation. Where it reimburses actual expenses on transfer it is treated differently for tax from a fixed amount paid as salary, and it is often subject to a clawback clause.",
    see: { label: "Transfer Letter Template", href: "/resources/hr-letter-templates/transfer-letter" },
  },
  {
    term: "Conveyance allowance",
    slug: "conveyance-allowance",
    definition:
      "An allowance towards travel between home and work. Under current rules a fixed commuting allowance is generally taxable as salary, with exemptions limited to specific cases such as certain employees with disabilities, so its value in a salary structure is now mainly presentational.",
  },
  {
    term: "Payroll audit",
    slug: "payroll-audit",
    definition:
      "A check of payroll output against its inputs and the law: that every person paid exists and is active, that attendance and leave were applied correctly, and that PF, ESI, PT and TDS were computed and remitted on time. It is done periodically or before year-end, and reconciliation of totals is its core.",
    see: { label: "Payroll Reconciliation: Bank, Ledger and Statutory Returns", href: "/resources/hr-guides/payroll-reconciliation" },
  },
  {
    term: "Org chart",
    slug: "org-chart",
    expands: "Organisation chart",
    definition:
      "A diagram of reporting lines, showing who reports to whom from the head of the organisation down. Drawn from the employee record rather than kept as a separate file, it stays current as people join, move and leave.",
    see: { label: "Employee Records Guide", href: "/hr/topics/employee-records" },
  },
  {
    term: "Pay grade",
    slug: "pay-grade",
    definition:
      "A level in a pay structure that groups roles of similar size and sets a minimum and maximum salary for them, called the pay band. Grades keep offers and increments consistent, and show when an employee is paid outside the range for their role.",
    see: { label: "Salary Structure Guide", href: "/hr/topics/salary-structure" },
  },
  {
    term: "Cost centre",
    slug: "cost-centre",
    definition:
      "A unit, such as a department, branch or project, to which payroll cost is charged in the accounts. Tagging each employee to a cost centre, and splitting where people work across more than one, lets the payroll journal post salary cost where finance needs to see it.",
    see: { label: "HRMagix for Finance and Payroll Teams", href: "/solutions/for-finance-teams" },
  },
  {
    term: "HR audit",
    slug: "hr-audit",
    definition:
      "A review of HR records, policies and practice against law and the organisation's own rules: employee files, statutory registers, registrations, contracts, policy acknowledgements and processes such as POSH. Its purpose is to find gaps before an inspection or a dispute does.",
    see: { label: "Preparing for a Labour Inspection Before the Notice Arrives", href: "/resources/hr-guides/labour-inspection-preparation" },
  },
  {
    term: "Employee lifecycle",
    slug: "employee-lifecycle",
    definition:
      "The stages of an employee's time with an organisation: hiring, onboarding, probation and confirmation, development and moves, and exit. Each stage produces records the next one relies on, which is why a single employee record across the lifecycle matters.",
    see: { label: "Onboarding & Lifecycle", href: "/solutions/onboarding-and-lifecycle" },
  },
  {
    term: "Workforce planning",
    slug: "workforce-planning",
    definition:
      "Estimating the people the organisation will need, in number, skills and location, against expected demand, and deciding how to close the gap through hiring, development or redeployment. It starts from an accurate picture of current headcount and attrition.",
    see: { label: "HR Analytics Guide", href: "/hr/topics/hr-analytics" },
  },
  {
    term: "Gig workers",
    slug: "gig-workers",
    definition:
      "People who work outside a traditional employer-employee relationship and earn from that work, as defined in the Code on Social Security 2020, which separately defines platform workers as those working through an online platform. The Code provides for social security schemes for them, funded partly by aggregators, with details left to rules as notified.",
    see: { label: "Code on Social Security", href: "/resources/labour-law/social-security-code" },
  },
];

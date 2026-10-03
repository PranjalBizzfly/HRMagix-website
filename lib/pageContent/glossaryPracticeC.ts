/** "In practice" paragraphs for glossary terms, keyed by term slug. */
export const glossaryPracticeC: Record<string, string[]> = {
  lop: [
    "Loss of pay is settled in the last week before payroll lock, when HR reconciles the attendance register against approved leave. Every day that is neither worked nor covered by a leave balance becomes an LOP day, and the payroll person needs the final count before running salaries.",
    "Example: an employee on a ₹31,000 monthly gross in a 31-day month has two unapproved absences. Using calendar days as the divisor, the deduction is ₹2,000. If the company uses a fixed 30-day or 26-day divisor instead, the figure changes, so the divisor must be written into policy and applied the same way every month.",
    "The common mistake is deducting LOP for a day that was later approved as leave or regularised after cut-off, which then needs an arrears reversal next month. In HRMagix, attendance feeds payroll directly, so LOP days come from the same record the manager approved.",
  ],
  lta: [
    "LTA work clusters around the investment proof window near the end of the financial year, when employees submit tickets and boarding passes for journeys they want treated as exempt. Payroll checks that the journey was within India, that the travelling family members qualify, and that the block has not already been used up.",
    "Example: an employee with ₹40,000 of LTA in the salary structure submits a train fare of ₹28,000 for a family trip. Only the fare actually spent on the eligible route is considered for exemption under the old regime, and the remaining ₹12,000 stays taxable.",
    "A frequent error is accepting hotel bills or local sightseeing costs as LTA proof. Another is forgetting that an employee who has opted for the new tax regime gets no LTA exemption at all, so the whole amount is taxed as salary.",
  ],
  lwf: [
    "Labour Welfare Fund is one of the smallest deductions on a payslip, but it causes outsized trouble because each state that has the fund sets its own amounts, periodicity and due dates. Some states collect it half-yearly, some annually, and several states have no LWF at all.",
    "In practice, payroll keeps a state-wise calendar: the deduction is applied only in the specified month, alongside the employer's matching share, and remitted to the state board by its deadline. An employee who moves from one state's office to another mid-year needs the work location updated before the deduction month, or the contribution goes to the wrong state.",
    "The usual mistake is deducting LWF every month out of habit, or deducting it for a state where the company has no registration. Check the current rules of each state you operate in, because amounts are revised from time to time.",
  ],
  "maternity-benefit": [
    "When an employee informs HR of her pregnancy, the practical steps start well before the leave: confirming eligibility under the Maternity Benefit Act 1961 based on days worked in the preceding twelve months, recording the expected date, and planning the work handover with her manager.",
    "During the leave, payroll continues to pay her the average daily wage for the leave days rather than marking them as LOP. Where she is covered by ESI, the benefit is paid by ESIC instead of the employer, so payroll must know which route applies before the first month of leave is processed.",
    "Common mistakes include stopping salary and treating the period as unpaid, leaving her out of an increment cycle she would otherwise have been part of, and overlooking the creche or work-from-home provisions where applicable. Check the current provisions before finalising the policy.",
  ],
  moonlighting: [
    "Moonlighting usually surfaces in one of two ways: a background check or PF service history shows an overlapping employer, or a colleague reports a second job. HR's first step is to read the employment contract and code of conduct, because the response depends almost entirely on what the employee agreed to.",
    "A workable policy separates three cases: a second full-time job, paid freelance work for a competitor or client, and unrelated side activity such as teaching or writing. Many companies allow the last with prior written disclosure and prohibit the first two.",
    "The mistake to avoid is acting on suspicion alone. Collect the evidence, give the employee a chance to explain in writing, and follow the disciplinary process in the standing orders or policy. A dual PF contribution record is a signal worth discussing, not proof of misconduct on its own.",
  ],
  "muster-roll": [
    "The muster roll is often the first document a labour inspector asks for, so HR keeps it current every day rather than assembling it before an inspection. It lists each worker with daily attendance, and the format and retention period depend on the applicable state rules and the law the establishment is registered under.",
    "In a factory or contractor-heavy site, the HR executive compares the muster roll with the gate register and the contractor's own roll at month end. Differences point to proxy attendance or to workers who were never added to the contractor's PF and ESI records.",
    "The typical mistake is keeping attendance only in a biometric system and assuming that counts. It can, if the system produces the prescribed register on demand with the required columns. Confirm the form your state requires and test that it prints correctly before you need it.",
  ],
  "new-tax-regime": [
    "Each April, payroll asks every employee to state which regime they want TDS computed under for the year. If an employee says nothing, the new regime applies by default, so the declaration window matters for anyone who wants deductions such as HRA or 80C considered.",
    "The choice changes how payroll treats the salary structure. Under the new regime, HRA, LTA and most exemptions are ignored for TDS, while the standard deduction and the employer NPS contribution still apply as notified. A side-by-side projection for each employee helps them decide.",
    "A frequent mistake is treating the April choice as final. Salaried employees can generally choose differently when filing their return, so payroll should not refuse a proof submission merely because of the earlier choice. Slabs and rebates change with the Budget, so always check the current Finance Act figures.",
  ],
  "notice-pay": [
    "Notice pay comes up in the full and final settlement. When an employee leaves without serving the full notice, HR calculates the shortfall days and payroll either recovers the amount from final dues or, where the company releases someone early, pays it out.",
    "Example: an employee with a 60-day notice clause serves 40 days. If the contract defines notice pay on gross monthly salary, the recovery is 20 days of gross. If it defines it on basic, the figure is far smaller, so the contract wording decides the amount.",
    "Two errors recur. One is recovering more than the final dues and then chasing the former employee without a clear contractual basis. The other is ignoring GST: the treatment of notice pay recovery has been the subject of rulings, so confirm the current position with your tax adviser.",
  ],
  "notice-period": [
    "The notice period starts when HR records the resignation date, and that date drives several tasks at once: the last working day, the knowledge transfer plan, the asset return checklist and the exit interview slot. Logging resignations promptly avoids disputes over when the clock started.",
    "Managers often ask to waive or shorten notice. When they do, HR should confirm in writing whether the waiver is a company decision, in which case no recovery applies, or an employee request, in which case shortfall recovery may follow under the contract.",
    "A common mistake is approving leave during the notice period without deciding whether it extends the last working day. The policy should say plainly whether earned leave can be adjusted against notice, and payroll should know the answer before computing final settlement.",
  ],
  nps: [
    "NPS work for payroll has two parts: onboarding employees who opt in under the corporate model, and remitting the monthly employer and employee contributions through the point of presence by the due date.",
    "The employer contribution sits within the salary structure, and its tax treatment differs between the old and new regimes, with limits linked to basic plus DA as notified. Payroll reflects it in the TDS computation and shows it separately on the payslip.",
    "Example: on a basic of ₹50,000, an employer contribution of 10% of basic is ₹5,000 a month. The usual mistake is adding NPS to the structure before collecting the employee's PRAN, which leaves contributions unallocated. Check the current deduction limits each year, since they have been revised before.",
  ],
  "offer-acceptance-rate": [
    "Recruiters review offer acceptance rate monthly or at the end of each hiring drive, broken down by role, location and recruiter. A drop for one role usually means the band is below what candidates are getting elsewhere, while a drop across all roles points to a slow offer process.",
    "Example: in a quarter where 40 offers went out and 30 were accepted, the rate is 75%. If 6 of the 10 declines cited compensation, that is a pay band conversation with finance; if most cited a counter-offer, it is a time-to-offer problem.",
    "A frequent mistake is counting an accepted offer as success even if the candidate never joins. Track joining separately, because an acceptance followed by a no-show inflates the rate and hides a different problem.",
  ],
  okr: [
    "OKRs appear in the HR calendar at the start of each quarter, when teams draft objectives and key results, and again at quarter end, when progress is scored. HR's role is to keep the cadence running, check that key results are measurable, and spot teams whose OKRs simply restate their job descriptions.",
    "Example: an objective of improving payroll accuracy could carry key results such as cutting post-payroll corrections from twelve a month to three, and closing every attendance dispute before cut-off.",
    "The most common mistake is tying OKR scores directly to bonus, which pushes people to set easy targets. Many companies keep OKRs for direction and use separate KRAs for the appraisal. HRMagix includes objectives and OKRs as a module alongside KRA and 9-box.",
  ],
  "org-chart": [
    "The org chart matters most at points of change: a new joiner, a transfer, a promotion or a restructure. Each time, HR updates the reporting manager field, and every approval flow for leave, attendance regularisation and expenses follows that field.",
    "Before each appraisal cycle, HR runs a quick check: are there managers with no reports, employees reporting to someone who has left, or spans of twenty or more under one person? Each of these breaks review routing.",
    "The usual mistake is maintaining the org chart as a separate slide while the HR system holds different reporting lines. When the two disagree, approvals go to the wrong person. The chart should be generated from the employee record, not drawn by hand.",
  ],
  "pay-grade": [
    "Pay grades are used at three moments: when making an offer, at the annual increment and at promotion. The recruiter checks the offered salary against the grade's minimum and maximum, and compensation reviews flag anyone sitting outside the range.",
    "Example: in a grade with a range of ₹6 lakh to ₹9 lakh a year, an employee at ₹8.7 lakh has little room left, so a normal increment would push them over the ceiling. The options are a smaller increase, a one-time payment or a promotion case.",
    "A common mistake is creating grades on paper but letting offers exceed them for every hard-to-fill role. After a year, the grade no longer describes actual pay, and internal parity complaints follow. Review exceptions each quarter and either revise the range or stop approving them.",
  ],
  "payroll-audit": [
    "A payroll audit is usually done quarterly or before year-end, by someone who did not run the payroll. The auditor samples employees and traces each figure from the offer letter and attendance record through to the bank transfer and the statutory challans.",
    "Typical checks: employees paid after their exit date, the same bank account under two employee IDs, PF computed on the wrong base, and TDS that does not match the latest declarations. Each exception is logged with the corrective entry and the month it will be fixed in.",
    "The mistake is treating the audit as a reconciliation of totals only. Totals can match while some employees are overpaid and others underpaid. Sample at employee level and keep the working papers, because the same evidence is useful in an inspection or a statutory audit.",
  ],
  "payroll-cycle": [
    "A typical monthly cycle runs on fixed dates: attendance cut-off, input collection for joiners, exits, variable pay and reimbursements, then a draft run, review, lock, bank file and payslip release. Statutory deposits for PF, ESI and TDS follow on their own due dates in the next month.",
    "Example: a company paying on the last working day might set attendance cut-off on the 25th, close inputs on the 26th, run the draft on the 27th and send the bank file on the 29th. Inputs that arrive after cut-off move to next month's cycle as arrears.",
    "The common mistake is letting the cut-off drift every month to accommodate late approvals. Each exception compresses review time and raises error risk. Publish the calendar for the year and hold to it.",
  ],
  payslip: [
    "Payslips are released once payroll is locked and salaries are credited, and they generate a steady stream of employee questions in the first few days of the month. HR should be able to explain each line: earnings, statutory deductions, TDS, LOP and arrears.",
    "Example: an employee sees net pay lower than last month. The payslip shows ₹1,500 more TDS because a declared rent receipt was rejected at proof verification. A payslip that makes the reason visible saves a support ticket.",
    "The common mistake is issuing payslips without the employer PF contribution or the year-to-date tax position, which leaves employees unable to check their own records. In HRMagix, employees can download payslips and Form 16 from the mobile app.",
  ],
  peo: [
    "A company typically considers a PEO when it needs to hire where it has no entity yet, or when a small team wants payroll, statutory registrations and benefits handled under someone else's umbrella. HR's job is to compare what the PEO takes on with what stays with the company.",
    "In practice, the client company still assigns daily work and manages performance. The PEO runs payroll, files returns and holds the employment liabilities to the extent the contract states, so the service agreement deserves the same review as an employment contract.",
    "The common mistake is assuming the PEO absorbs all compliance risk. Under Indian law, the principal employer can still carry responsibility for contributions and wages in some situations. Read the indemnity clauses and confirm the current legal position before signing.",
  ],
  perquisites: [
    "Perquisites need attention whenever the company provides something other than cash: a company car, rent-free accommodation, an interest-free loan or a club membership. Payroll values each perquisite under the Income-tax rules and adds it to taxable salary for TDS.",
    "Example: an employee takes a ₹5 lakh interest-free loan from the employer. The taxable perquisite is worked out at the notified benchmark rate on the outstanding balance, less any interest the employee actually pays, and added to salary for each month the loan is outstanding.",
    "The usual mistake is leaving perquisites out of monthly TDS and adding them only at year-end, which produces a large deduction in March. Valuation rules are revised from time to time, so check the current Rule 3 provisions.",
  ],
  "pf-transfer": [
    "PF transfer comes up shortly after a new joiner's first salary, once their UAN is linked to the new establishment. HR reminds the employee to raise the transfer claim online for the previous employer's account, and the employer attests it where required.",
    "In practice, transfers fail most often because the previous employer never marked the date of exit, or because KYC details such as name and date of birth differ between the two records. HR can save weeks by checking these on the joiner's UAN at onboarding.",
    "The mistake HR makes is generating a fresh UAN for a joiner who already has one. Two UANs split the service history, which later affects pension eligibility and the tax treatment of withdrawals. Always collect the old UAN before the first PF return.",
  ],
  "pf-wage": [
    "PF wage is the base on which the 12% employee and 12% employer contributions are worked out, and payroll fixes it when the salary structure is designed. Which components go into it decides both the employee's take-home and the employer's cost.",
    "Example: an employee has basic of ₹25,000 within a total salary of ₹50,000. If the company restricts contributions to the ₹15,000 wage ceiling, the employee contribution is ₹1,800. If it contributes on the actual basic, the figure is ₹3,000. Either choice must be applied consistently and stated in the offer.",
    "The common mistake is keeping basic very low and loading allowances to cut PF. Allowances paid uniformly to all employees can be treated as wages, and the Code on Social Security, in force since 21 November 2025, adds back allowances above 50% of total pay to the wage definition. Check the current position before restructuring.",
  ],
  "pf-withdrawal": [
    "HR is usually involved in PF withdrawal at exit, or when an employee asks for a partial advance for a house, medical treatment or a wedding. The employee applies online; the employer's role is to have marked the date of exit correctly and to resolve any KYC mismatches.",
    "Withdrawal before five years of continuous service can attract TDS, so HR should encourage employees moving to another job to transfer their balance rather than withdraw it.",
    "The common mistake is an employer delaying the exit date update, which blocks the final claim for weeks. Another is confusing EPF withdrawal with EPS pension withdrawal, which follows different rules. Check the current withdrawal conditions before advising an employee.",
  ],
  pip: [
    "A PIP usually begins after an appraisal or a run of missed targets, and HR's role is to make sure the plan is specific: what must change, how it will be measured, the review dates and what support the manager will give.",
    "Example: a sales executive at 50% of target over two quarters gets a 60-day plan requiring 80% of target in each of the two months, with weekly pipeline reviews and a formal check-in at day 30. Each review is recorded with notes signed by both.",
    "The common mistake is using a PIP as a paper trail for a decision already made. If the targets are unattainable or the reviews never happen, the plan will not stand scrutiny. HRMagix includes PIPs and growth plans as a module.",
  ],
  probation: [
    "HR tracks probation end dates every month, sending each reporting manager a review form two or three weeks before the end. The manager either confirms the employee, extends the probation with stated reasons, or recommends separation.",
    "Confirmation often triggers changes: the notice period becomes longer, certain benefits begin and leave accrual may change. The confirmation date needs to be entered in the HR record so these apply from the right month and the confirmation letter goes out on time.",
    "The common mistake is letting probation lapse with no decision. Depending on the contract wording and any applicable standing orders, silence can amount to deemed confirmation. Set reminders, and record every extension in writing with the employee's acknowledgement.",
  ],
  "professional-tax": [
    "Professional Tax is deducted monthly in most states that levy it, but the slabs, amounts, frequency and filing dates vary by state, and some states do not levy it at all. Payroll maps each employee to the state of their work location and applies that state's slab.",
    "The employer needs a registration in each state where it has employees covered by PT, and returns are filed with that state's authority on its schedule. Some states collect a different amount in one month of the year, which payroll must build in.",
    "The common mistake is applying the head office state's rules to employees working elsewhere. Another is forgetting the employer's own enrolment, which some states require separately from the deduction registration. Check each state's current schedule.",
  ],
  regularisation: [
    "Regularisation requests arrive daily and peak in the days before attendance cut-off, when employees fix missed punches, forgotten check-outs or on-duty days at client sites. The manager approves or rejects each one, and HR clears pending requests before payroll runs.",
    "Example: an employee who spent the day at a client office shows as absent because they never punched in. They raise an on-duty regularisation, the manager approves it, and the day stops counting as LOP.",
    "The common mistake is allowing unlimited regularisations, which turns the biometric record into a formality. Many companies cap the number per month and require a reason for each. In HRMagix, regularisation requests go through the attendance module to the manager for approval.",
  ],
  reimbursements: [
    "Reimbursement claims are collected through the month and closed at a fixed cut-off before payroll, so approved claims can be paid with salary or in a separate run. Finance checks the bill, the policy limit and the manager's approval before payment.",
    "Example: an employee submits ₹3,200 in fuel bills against a ₹2,500 monthly limit. Payroll pays ₹2,500, and the remainder either lapses or carries forward, depending on the policy. Whether the amount is tax-free depends on the nature of the claim and the employee's tax regime.",
    "The usual mistake is treating every reimbursement as tax-free, including fixed amounts paid without bills. Without bills, or for a non-business purpose, the amount is often taxable salary. Check the current rules for each claim type.",
  ],
  "relocation-allowance": [
    "Relocation allowance is decided at offer stage for candidates moving cities, and HR records the amount, what it covers and any clawback condition in the offer letter. Payment is usually made in the first or second salary, or as a reimbursement against bills.",
    "Example: a new joiner gets ₹75,000 for moving from Pune to Bengaluru, with a clause that the full amount is recovered if they leave within twelve months. Payroll needs this clause on file so the recovery is applied in the full and final settlement.",
    "The common mistake is treating the whole allowance as tax-free. Certain actual transfer costs may be exempt, while lump sums paid without bills are generally taxable salary. Confirm the current tax treatment before setting up the pay component.",
  ],
  "restricted-holiday": [
    "Restricted holidays are published with the annual holiday calendar, usually in December or January. Employees choose a limited number from the list over the year, and HR sets the rules for how they are applied for and whether unused ones lapse.",
    "The employee applies through leave management like any other leave, and the manager approves it. Since holiday lists vary by state and location, a company with several offices often publishes a separate list for each.",
    "The common mistake is treating an unused restricted holiday as earned leave, either carrying it forward or encashing it. Unless the policy says otherwise, it lapses at year end. HRMagix covers leaves and holidays as a module.",
  ],
  "retention-bonus": [
    "A retention bonus is typically offered during an acquisition, a critical project or when a key person receives an outside offer. HR drafts an agreement with the amount, the vesting dates and what happens if the employee resigns or is terminated before then.",
    "Example: an engineer is offered ₹3 lakh payable in two parts, after 6 and 12 months. Payroll processes each instalment through regular salary, with TDS deducted in the month it is paid, and finance accrues the cost over the retention period.",
    "The common mistake is paying the full bonus upfront with a clawback clause, which is harder to recover than a deferred payment. Another is not stating whether the bonus counts toward gratuity, leave encashment or other benefit calculations.",
  ],
};

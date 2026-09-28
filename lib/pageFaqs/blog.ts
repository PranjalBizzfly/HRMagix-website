import type { PageFaq } from "./types";

/** Page FAQs for Insights articles (app/blog/[slug]), keyed by article slug. Strictly from lib/blog.ts article text. */
export const articleFaqs: Record<string, PageFaq[]> = {
  "why-payroll-takes-four-days": [
    {
      q: "Why does monthly payroll take so long in Indian companies?",
      a: "Not because of calculation. The time goes into establishing a single agreed figure for payable days per employee, before any computation can begin.",
    },
    {
      q: "Which records usually disagree before a payroll run?",
      a: "Four: the biometric device log, the leave tracker, the manager's recollection and the payroll sheet. Each is defensible alone, but together they cannot be reconciled without a person.",
    },
    {
      q: "Why is a typed payable-days figure in a payroll sheet a problem?",
      a: "Once it is typed, its provenance is gone. Months later nobody can say which record it came from, only re-derive it from records that have since changed.",
    },
    {
      q: "Does an overnight sync between attendance and payroll fix reconciliation?",
      a: "Not reliably. The test is whether a correction, such as a leave approval backdated on the 28th, propagates before the cutoff; under a sync model that depends on when the job last ran and whether anyone noticed.",
    },
    {
      q: "What is the difference between a sync model and a shared ledger?",
      a: "In a shared ledger, the loss-of-pay register is a view of the attendance data rather than a copy of it, so there is no second number to reconcile.",
    },
    {
      q: "How is payable days calculated in HRMagix?",
      a: "It is derived rather than entered. Punches, check-ins, regularisations, approved leave, sandwich-rule outcomes and comp-off credits resolve against one ledger, so payable days follows from it.",
    },
    {
      q: "Does integrating attendance and payroll remove the need for review?",
      a: "No. It removes reconciliation, not judgement. Someone still decides cases like an unexplained absence or a new joiner's ESI applicability, and review moves to a variance view of what changed since last month.",
    },
    {
      q: "Is the four-day figure an industry statistic?",
      a: "No. It is the observation payroll teams make about their own process. The article cites no benchmark or percentage improvement because HRMagix publishes none.",
    },
  ],
  "esi-threshold-moving-wage-base": [
    {
      q: "What is the ESI wage threshold?",
      a: "ESI applicability is tested against a gross wage threshold of ₹21,000.",
    },
    {
      q: "What are the employee and employer ESI contribution rates?",
      a: "The employee contributes 0.75% and the employer 3.25%, both applied to gross wages for the wage period.",
    },
    {
      q: "Does an employee drop out of ESI in a month their overtime takes them above ₹21,000?",
      a: "No. ESI works on contribution periods, so an employee covered at the start of a period continues to contribute through it even if wages rise above the threshold within it.",
    },
    {
      q: "What goes wrong if ESI applicability is tested every month?",
      a: "Under-deduction when an employee is dropped mid-period, over-deduction when they are re-added the next month, and disrupted coverage for the employee, whose benefit entitlement depends on it.",
    },
    {
      q: "Should overtime be included in the ESI wage base?",
      a: "The article advises confirming that overtime and allowances are in the gross the test uses; a test run on basic alone decides applicability on the wrong number. How a specific allowance is treated is a question for your advisers or the ESIC.",
    },
    {
      q: "How can I check whether my payroll applies ESI correctly?",
      a: "Find an employee near ₹21,000, locate a heavy overtime month where they crossed it, and look at the month after. If they dropped out and came back, your system is applying a monthly test.",
    },
    {
      q: "How does HRMagix handle ESI applicability?",
      a: "As a rule evaluated against the employee record each month, respecting contribution-period behaviour, using the same attendance ledger the overtime came from. It outputs the monthly contribution return and challan report.",
    },
    {
      q: "Why is ESI a bigger issue in shift-based operations than in offices?",
      a: "Overtime, night-shift differentials and attendance-linked allowances move the gross month to month on a production floor, whereas office salaries are usually fixed.",
    },
  ],
  "professional-tax-february": [
    {
      q: "Is Professional Tax the same across Indian states?",
      a: "No. It is levied by states, and each sets its own slabs, exemptions and filing calendar. Registration is per location.",
    },
    {
      q: "What differs in Professional Tax from state to state?",
      a: "Slabs, periodicity with due dates, and exemptions, including gender-based ones in some states.",
    },
    {
      q: "Why is February different for Professional Tax in Maharashtra?",
      a: "In Maharashtra, the amount deducted in one month of the year differs from the other eleven, so a flat monthly configuration ends up short once a year.",
    },
    {
      q: "What are the usual workarounds for multi-state Professional Tax?",
      a: "Running a separate instance per state, which loses the consolidated view and makes transfers re-onboarding, or one instance adjusted by hand every month, which nobody else can verify.",
    },
    {
      q: "How should multi-state payroll be configured for Professional Tax?",
      a: "Hold rules against entity, location and grade, and derive each employee's Professional Tax position from their work location on the record rather than a company-wide default.",
    },
    {
      q: "Which states does HRMagix configure Professional Tax for?",
      a: "Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat and West Bengal, including the February treatment and gender-specific exemptions where a state provides them.",
    },
    {
      q: "What happens to Professional Tax when an employee transfers between states?",
      a: "Because work location is an effective-dated field, a move from Pune to Bengaluru in August changes the Professional Tax position from August and leaves earlier months untouched.",
    },
    {
      q: "Does Labour Welfare Fund work the same way?",
      a: "Yes. LWF is another state-level deduction on its own calendar, half-yearly in some states and annual in others, and is best applied inside the payroll run rather than remembered.",
    },
  ],
  "reading-an-indian-payslip": [
    {
      q: "Where should I start if my payslip looks wrong?",
      a: "At payable days. Earnings are usually correct for the days recorded, and the real dispute is typically about a day of attendance.",
    },
    {
      q: "What is the difference between pay period and pay date?",
      a: "The pay period is the month the slip covers; the pay date is when money moved. A query about a missing credit is usually about the pay date.",
    },
    {
      q: "Why does basic salary matter so much on a payslip?",
      a: "Most statutory calculations reference it. Provident fund is computed on basic (with DA where applicable) and gratuity on last drawn basic, so a low basic reduces both present deductions and future gratuity.",
    },
    {
      q: "Is HRA on my payslip the same as the HRA exemption?",
      a: "No. The allowance is part of the salary structure; the exemption is claimed at tax time under the old regime, subject to the statutory computation and rent receipts.",
    },
    {
      q: "What statutory deductions appear on an Indian payslip?",
      a: "Employee provident fund at 12%, employee ESI at 0.75% where within the ₹21,000 threshold, Professional Tax per the state slab, and TDS under Section 192 per the employee's regime and declarations.",
    },
    {
      q: "Why don't employer PF and ESI contributions reduce my take-home?",
      a: "The employer's 12% PF and 3.25% ESI are paid on top of gross, so they do not come out of take-home and often do not appear in the deductions column.",
    },
    {
      q: "What is the difference between gross, net and CTC?",
      a: "Gross is everything earned before deductions, net is gross minus employee deductions, and CTC is gross plus the employer's contributions. CTC is never the amount anyone receives.",
    },
    {
      q: "Can employees see their payslips themselves in HRMagix?",
      a: "Yes. Employees can retrieve any payslip, see their leave balance, raise a regularisation and compare both tax regimes from their own login, on web and mobile.",
    },
  ],
  "old-vs-new-regime": [
    {
      q: "How does the tax regime choice affect monthly TDS?",
      a: "Under Section 192, the employer deducts tax on salary across the year based on estimated liability, which depends on the regime elected and what the employee has declared.",
    },
    {
      q: "What happens if an employee declares nothing in April?",
      a: "The employer must deduct as though nothing will be claimed. If proof arrives in December, the excess has to be corrected across only the remaining months.",
    },
    {
      q: "What if an employee declares investments but never submits proof?",
      a: "The employer is left with under-deducted tax that must be recovered before the year closes, often from one or two payslips.",
    },
    {
      q: "Which regime is better, old or new?",
      a: "It depends on what the individual can claim. Home loans, significant 80C investments and rent may favour the old regime; fewer claims may favour the new. The only way to know is to compute both on the employee's own numbers.",
    },
    {
      q: "Can employees compare the two regimes in HRMagix?",
      a: "Yes. The comparison sits in the employee's self-service portal, so it is made before the declaration, not discovered afterwards.",
    },
    {
      q: "What can employees declare and upload in the HRMagix portal?",
      a: "Declarations under Section 80C and 80D, HRA and home loan interest, with proof such as rent receipts and interest certificates uploaded for HR to verify.",
    },
    {
      q: "Should TDS follow the declared or the verified position?",
      a: "Once verification has happened, the monthly schedule should follow the verified position, since the employer's obligation is to deduct correctly.",
    },
    {
      q: "When should the investment proof deadline be set?",
      a: "Earlier than feels necessary. A December cut-off gives three months to absorb a correction; a January cut-off gives one and produces a difficult February payslip.",
    },
  ],
  "comp-off-entitlement": [
    {
      q: "Why should compensatory off be treated like a leave type?",
      a: "It has a credit event, a balance, consumption rules, an expiry and a settlement position on exit, every property that would otherwise demand a proper leave scheme.",
    },
    {
      q: "What goes wrong when comp-off is agreed informally?",
      a: "When the employee later asks for the day and the manager has changed, there is no usable record, so a small, cheap obligation turns into a dispute.",
    },
    {
      q: "Does comp-off need an expiry rule?",
      a: "Yes. Without one, the company carries an unbounded, unrecorded liability; with one that is undocumented, employees only discover it when their day is refused.",
    },
    {
      q: "How should comp-off be credited?",
      a: "Automatically, from the same attendance ledger, when an employee has an approved presence on a weekly off or holiday, rather than as a separate manual entry.",
    },
    {
      q: "How does HRMagix handle comp-off credits?",
      a: "The credit follows from the attendance record, carries its own expiry and consumption rules, and the balance is visible to the employee, the approving manager and payroll at the same time.",
    },
    {
      q: "Should weekend work be compensated with comp-off or overtime pay?",
      a: "It is a policy decision. Comp-off is time taken later and sits in the leave balance; overtime is cash in the next run on the payslip. The policy should state which applies and who may vary it.",
    },
    {
      q: "What is the risk of leaving comp-off untracked?",
      a: "The liability grows silently and indefinitely, whereas unpaid overtime surfaces immediately as a payroll dispute.",
    },
    {
      q: "How can I audit comp-off this month?",
      a: "Pull last quarter's weekly-off and holiday attendance, match it against comp-off credits, and check whether a written expiry rule exists and was issued.",
    },
  ],
  "shift-detection-across-midnight": [
    {
      q: "Which day does a night-shift punch belong to?",
      a: "The shift's day. A punch in at 22:40 on Tuesday and out at 06:50 on Wednesday is one Tuesday shift, not two days with missing punches.",
    },
    {
      q: "Why do calendar-day attendance systems fail on night shifts?",
      a: "They file each punch under the date it occurred, creating a day with no exit and a day with no entry, two exceptions where there was no problem.",
    },
    {
      q: "Why not assign shifts manually?",
      a: "With rotating shifts and hundreds of operators, it means thousands of tagging decisions a month by busy supervisors, where mistakes are least likely to be noticed.",
    },
    {
      q: "What is auto shift detection?",
      a: "Inference: given the shift definitions and punch timestamp, the system assigns the punch to the shift it must belong to, including one that started the previous calendar day.",
    },
    {
      q: "What breaks if a punch is assigned to the wrong shift?",
      a: "Late marks, night differentials, overtime boundaries and loss of pay, and through overtime's effect on the wage base, ESI applicability too.",
    },
    {
      q: "How should grace periods be applied?",
      a: "Configured per policy, so they apply to every punch identically, rather than by supervisor judgement, which varies by person and shift.",
    },
    {
      q: "Can different plants have different shift rules in HRMagix?",
      a: "Yes. Shift patterns, grace periods and weekly offs are configured per location while the organisation reports and files as one.",
    },
    {
      q: "Which biometric devices work with HRMagix?",
      a: "Existing eSSL, Matrix, Realtime and ZKTeco hardware pushes into the same ledger over a secure API or local sync service.",
    },
  ],
  "sandwich-rule": [
    {
      q: "What is the sandwich rule in leave policy?",
      a: "It counts intervening weekly offs and holidays as leave when leave is taken on both sides. Take Friday and Monday, and the Saturday and Sunday are charged too.",
    },
    {
      q: "Why do employers adopt the sandwich rule?",
      a: "Without it, an employee can turn two days of leave into a four-day absence repeatedly, which makes coverage hard to plan.",
    },
    {
      q: "Why does the sandwich rule cause grievances?",
      a: "Rarely because of the rule itself. It is usually applied inconsistently, or employees discover the extra days only on the payslip after applying.",
    },
    {
      q: "What should a leave policy state about the sandwich rule?",
      a: "Whether it applies at all, which leave types it covers, what counts as intervening (weekly offs, holidays or both), and who may vary it and on what grounds.",
    },
    {
      q: "Does the sandwich rule apply to sick leave?",
      a: "That is the employer's choice to state. Earned and casual leave are often treated differently, and sick leave usually differently again, so the policy should say which types it covers.",
    },
    {
      q: "How should the sandwich rule be enforced?",
      a: "Mechanically, as a policy setting that applies identically to every employee, with the outcome visible when applying rather than on the payslip.",
    },
    {
      q: "Can employees see the sandwich rule's cost before applying in HRMagix?",
      a: "Yes. Leave balances are computed from the accrual rule, so the employee, the approving manager and payroll see the same balance, and the real cost of a Friday-and-Monday is shown before committing.",
    },
    {
      q: "Do leave quotas differ across states?",
      a: "They can. Entitlements sit under state Shops and Establishments legislation and, for covered factories, the Factories Act, so a multi-state company may need different quotas per location.",
    },
  ],
  "full-and-final-settlement": [
    {
      q: "What earnings should a full-and-final settlement include?",
      a: "Salary for days worked in the final month, notice period treatment, leave encashment where the policy provides for it, and any crystallised but unpaid variable pay, incentive or arrear.",
    },
    {
      q: "On which date is leave encashment calculated?",
      a: "On the balance as at the last working day, not the resignation date.",
    },
    {
      q: "When is gratuity payable and how is it calculated?",
      a: "Under the Payment of Gratuity Act, after five years of continuous service, at fifteen days of last drawn wages for each completed year on a twenty-six day divisor.",
    },
    {
      q: "Where do most gratuity disputes come from?",
      a: "From computing continuous service incorrectly where there have been breaks or periods of statutory leave.",
    },
    {
      q: "What can be recovered in a final settlement?",
      a: "Notice shortfall, advances, loans or excess salary, unreturned assets at the value stated in the asset policy, and enforceable training or relocation bond amounts, each with a documented basis that existed before the exit.",
    },
    {
      q: "Are statutory deductions applied to the final settlement?",
      a: "Yes. It is a salary payment, carrying PF, ESI where applicable, Professional Tax and TDS under Section 192. Tax treatment of gratuity, encashment and notice buyout should be confirmed with advisers.",
    },
    {
      q: "What documents does an exiting employee need?",
      a: "A relieving letter and experience certificate, Form 16 for the year, the settlement statement showing the working, and provident fund details to transfer or withdraw against their UAN.",
    },
    {
      q: "Does HRMagix delete an employee's record after they leave?",
      a: "No. The login closes but the record is retained, the settlement is computed from the same attendance and leave ledger, and clearance and asset recovery run as a checklist against it.",
    },
  ],
};

/** Page FAQs for Insights categories (app/blog/category/[slug]), keyed by category slug. */
export const categoryFaqs: Record<string, PageFaq[]> = {
  "payroll-and-statutory": [
    {
      q: "What does the Payroll & statutory category cover?",
      a: "EPF, ESI, Professional Tax, TDS and the monthly filing chain: what the law requires and where the work actually goes.",
    },
    {
      q: "Why does payroll processing take days rather than hours?",
      a: "Establishing agreed payable days from disagreeing attendance, leave and payroll records is the slow part, not the calculation. See \"Your payroll does not take four days.\"",
    },
    {
      q: "Is ESI applicability decided month by month?",
      a: "No. ESI works on contribution periods, so crossing ₹21,000 in an overtime-heavy month does not by itself end coverage. The ESI threshold article explains the failure modes.",
    },
    {
      q: "How is Professional Tax handled for employees in several states?",
      a: "Professional Tax is a state subject with its own slabs, periodicity and exemptions, so it should follow each employee's work location. The multi-state Professional Tax article covers it.",
    },
    {
      q: "How does the old vs new tax regime choice affect payroll?",
      a: "The employee's election and declarations set the monthly TDS schedule under Section 192, and late or unproven declarations cause corrections late in the year.",
    },
    {
      q: "Do these articles include industry statistics or benchmarks?",
      a: "No. Articles draw only on provisions of Indian law, published HRMagix capability and the structural logic of the problem, with no survey data or benchmarks.",
    },
    {
      q: "Are these articles tax or legal advice?",
      a: "No. Statutory positions are stated as law, but specific cases, rates and filings should be confirmed with your advisers or the relevant authority.",
    },
    {
      q: "Where can I find definitions of the payroll terms used here?",
      a: "The HR & Payroll Glossary defines the terms these articles use, and HR guides offer longer, chaptered treatments.",
    },
  ],
  "attendance-and-time": [
    {
      q: "What does the Attendance & time category cover?",
      a: "Shifts, overtime, comp-off and the exceptions that decide whether a payroll input is trustworthy.",
    },
    {
      q: "How should night-shift punches that cross midnight be recorded?",
      a: "Against the shift they belong to, not the calendar date, using auto shift detection. See \"A punch at 22:40 belongs to yesterday's shift.\"",
    },
    {
      q: "How should comp-off for weekend work be tracked?",
      a: "As a real entitlement with credit, balance, consumption rules and expiry, credited automatically from attendance. The comp-off article explains why.",
    },
    {
      q: "Why do attendance errors affect payroll and compliance?",
      a: "A misassigned shift changes late marks, night differentials, overtime and loss of pay, and overtime moves the wage base that ESI applicability is tested on.",
    },
    {
      q: "Should grace periods be left to supervisors?",
      a: "No. The articles argue grace periods should be configured per policy so every punch is treated identically.",
    },
    {
      q: "Who are these attendance articles written for?",
      a: "Plant heads, operations managers and HR managers running rotating shifts, and the HR teams supporting them.",
    },
    {
      q: "Is comp-off better than overtime pay for weekend work?",
      a: "Neither is inherently better; it is a policy decision that should be made explicitly rather than left to whoever is in the room.",
    },
    {
      q: "Where can I read more about attendance beyond the blog?",
      a: "HR guides give longer, chaptered treatments with a checklist, and the glossary defines the terms these articles use.",
    },
  ],
  "leave-and-policy": [
    {
      q: "What does the Leave & policy category cover?",
      a: "Accruals, the sandwich rule, and writing rules down before they become precedents.",
    },
    {
      q: "Is the sandwich rule unfair to employees?",
      a: "The article argues the rule is defensible; the grievance comes from inconsistent application and employees discovering the cost only after applying.",
    },
    {
      q: "What should a written leave policy state about the sandwich rule?",
      a: "Whether it applies, which leave types it covers, what counts as intervening days, and who may vary it and on what grounds.",
    },
    {
      q: "Why write leave rules down rather than decide case by case?",
      a: "An unwritten discretion becomes a precedent and gets applied differently between employees, which is the inconsistency employees object to.",
    },
    {
      q: "Can leave quotas vary by state?",
      a: "Yes. Leave entitlements sit under state Shops and Establishments legislation and, for covered factories, the Factories Act.",
    },
    {
      q: "Who are the leave articles written for?",
      a: "HR teams writing or revising a leave policy.",
    },
    {
      q: "How can employees see what a leave application will cost?",
      a: "When balances are computed from the accrual rule, the employee, manager and payroll see the same balance, so the cost is visible at the point of applying.",
    },
    {
      q: "Where can I find related reading on comp-off and leave?",
      a: "The Attendance & time category covers comp-off as an entitlement, and HR guides offer longer treatments of leave topics.",
    },
  ],
  "people-operations": [
    {
      q: "What does the People operations category cover?",
      a: "The employee record, the lifecycle, and the administrative work nobody counts until it fails.",
    },
    {
      q: "How do I read an Indian payslip?",
      a: "Start with the header, especially payable days, then earnings, statutory deductions and the difference between gross, net and CTC. \"Reading an Indian payslip, line by line\" walks through every line.",
    },
    {
      q: "What must a full-and-final settlement include?",
      a: "Earnings due, gratuity where eligible, documented recoveries, statutory treatment of the final payment, exit documents and record retention. The settlement checklist article covers each.",
    },
    {
      q: "Why is gross salary different from take-home and CTC?",
      a: "Net is gross minus employee deductions, and CTC adds the employer's own PF and ESI contributions on top of gross.",
    },
    {
      q: "Should an employee's record be kept after they leave?",
      a: "Yes. Former employees ask for duplicate Form 16s, banks ask for verification, and statutory queries can arrive years later, so the record should outlive the login.",
    },
    {
      q: "Who are the people operations articles written for?",
      a: "HR and payroll teams processing exits and answering payslip questions, and employees who have those questions.",
    },
    {
      q: "Why does employee self-service matter for payslips?",
      a: "The person best placed to spot an error on a payslip is the person it belongs to, and they can only do that if they can see it.",
    },
    {
      q: "Where can I find definitions of terms like UAN or CTC?",
      a: "The HR & Payroll Glossary defines the terms these articles use.",
    },
  ],
};

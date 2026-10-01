/** "In practice" paragraphs for glossary terms, keyed by term slug. */
export const glossaryPracticeD: Record<string, string[]> = {
  "retention-rate": [
    "HR usually produces retention once a year for the management review, with a quarterly cut by department or manager. The work is in freezing the starting list: export the employee master as it stood on day one of the period and keep that file, because later corrections to joining or exit dates quietly change the answer.",
    "As an example, a plant starts April with 240 people. By March, 204 of those same 240 are still on the rolls, so retention is 204 / 240, or 85%. Forty people hired during the year and fifteen of them leaving does not move that figure at all.",
    "The common mistake is treating transfers between group entities as exits. If one legal entity's master shows the person leaving and another shows a new joiner, retention drops for no real reason. Agree in advance whether retention is measured per entity or per group, and tag inter-company moves so they can be filtered out.",
  ],
  roster: [
    "Supervisors normally publish the roster a week or a fortnight ahead, and HR needs it locked before the period starts, because attendance is checked against it every day. A night shift marked as an absence because nobody rostered it is the usual result of a roster that lives only in a WhatsApp group.",
    "The roster also decides each person's weekly off, which changes how leave and overtime are calculated. As an example, if a security guard's off day moves from Tuesday to Thursday mid-week without the roster being updated, the Thursday punch may be read as weekly-off work and paid as overtime.",
    "Changes after publication should be logged as swaps with an approver rather than overwritten, so that the record at month end shows both the plan and the change. HRMagix supports rotating multi-shift schedules and shift definitions per location within its Attendance and Shifts module.",
  ],
  "sandwich-rule": [
    "The rule only matters on the days it is applied, which is when a leave application spans or touches a non-working day. The HR person's job is to make sure the leave system and the written policy agree, because employees check the deduction against the handbook, not against the software setting.",
    "As an example, an employee applies for casual leave on Friday and Monday. With the rule applied, Saturday and Sunday are also debited and the request counts as four days; without it, two. If the balance is only three days, the difference also decides whether one day becomes loss of pay.",
    "Decisions to settle in the policy itself: whether the rule applies to holidays as well as weekly offs, whether it applies to sick leave, and whether a half-day on either side triggers it. Leaving these open is what leads to disputes over individual cases at payroll cut-off.",
  ],
  "section-192": [
    "Every month payroll re-estimates the employee's annual taxable salary, computes the year's tax, subtracts what has already been deducted, and spreads the balance over the months left. That is why the TDS line on a payslip moves through the year even when salary does not.",
    "The figure changes most in three moments: when a mid-year joiner hands over details of salary paid by the previous employer, when proofs are verified near the end of the year and unproved declarations drop out, and in the month an arrear or bonus is paid. The deducted amount is deposited by the due date for the month and later reported on Form 24Q.",
    "A frequent error is ignoring the previous employer's income for a joiner, which leaves both employers applying the lower slabs and the employee facing a demand on filing. HRMagix calculates TDS under Section 192 inside the payroll run and exports quarterly Form 24Q.",
  ],
  "section-80c": [
    "Payroll handles 80C in two passes. At the start of the year, employees on the old regime declare what they plan to invest, and TDS is projected on that. Towards the end of the year, usually around January, they submit proof, and anything not proved is removed before the last few months' TDS is recalculated.",
    "The employee's own PF and any VPF are picked up from payroll itself, so the employee should not declare them again. As an example, someone whose PF deduction is ₹1,800 a month already has ₹21,600 counted for the year before adding any insurance premium or ELSS.",
    "The common mistake is accepting a proof that does not qualify, such as a home loan statement showing only interest, or a tuition receipt that includes transport and development fees, which are typically not eligible. Check what the receipt actually shows, and confirm current eligibility rules before the proof window opens.",
  ],
  "section-87a-rebate": [
    "Payroll meets the rebate when projecting TDS for employees whose projected income sits close to the limit for their chosen regime. If the projection falls under the limit, the computed tax drops, often to nil, and no TDS is deducted that month.",
    "The difficulty is that payroll sees only salary. As an example, an employee projected just below the limit on salary alone gets no TDS all year, then earns interest or capital gains outside work, crosses the limit and loses the rebate entirely, with tax and possibly interest falling due when the return is filed.",
    "Two practical habits help. Re-run the projection after any increment, arrear or bonus, because a single payout can move an employee over the limit and make the remaining months' TDS jump. And tell affected employees in writing that the rebate in payroll assumes no other income, so that they can declare other income or plan for it themselves.",
  ],
  "self-service": [
    "Most of the questions HR answers by email in a typical month, such as balance enquiries, copies of payslips and missed-punch corrections, are what self-service exists to remove. The HR team's work shifts from answering them to configuring what employees can see and setting up who approves each kind of request.",
    "The busiest windows are predictable: the first days after payroll when payslips appear, the declaration window at the start of the financial year, the proof window towards the end of it, and the weeks after Form 16 is issued in June when employees are filing returns.",
    "The setup mistake to avoid is launching without clean master data. If a bank account, PAN or reporting manager is wrong, self-service puts the error in front of the employee and routes their requests to the wrong approver. HRMagix offers an employee self-service portal and mobile app for payslips, Form 16, leave, attendance and declarations.",
  ],
  shift: [
    "For HR, a shift is a configuration: a start time, an end time, a grace period, a break, a minimum duration for a full day and a half-day, and a rule for which calendar date a night shift belongs to. Each of these decides how a punch is read.",
    "As an example, a shift from 10 pm to 6 am usually belongs to the date it starts. If the system assigns the 6 am out-punch to the next day instead, the employee appears absent on one day and present without an in-punch on the next, and both days need manual correction before payroll.",
    "Plants and hospitals often run several shifts and let the system detect which one an employee worked from the in-punch, rather than relying on the roster alone. That works only if shift windows do not overlap. HRMagix supports auto-shift detection based on punch-in timestamps and custom grace periods per shift.",
  ],
  "shift-allowance": [
    "Payroll typically pays shift allowance from the attendance summary for the month: the number of qualifying shifts actually worked, multiplied by a per-shift rate the policy sets. The roster is not enough, because swaps and absences change who actually worked the night.",
    "As an example, if the policy pays ₹150 per night shift and attendance shows 11 night shifts in the month, the allowance is ₹1,650, shown as its own line on the payslip. If the employee was rostered for 13 but swapped two, paying 13 overstates it.",
    "Points to settle in the policy are the minimum hours inside the night window that count as a night shift, whether a half-worked shift qualifies, and whether leave or a holiday falling on a rostered night is paid. Night-shift rules for women employees are set by state law and conditions vary by state, so check them before rostering.",
  ],
  "short-leave": [
    "Short leave usually arrives as a request through the leave or attendance system for a stated window, for example 9:30 to 11:30 am. HR configures the monthly allowance and what happens beyond it, and the attendance engine then reads that day as a full day present rather than a late arrival.",
    "As an example, under a policy of two short leaves a month of up to two hours each, an employee who takes a third deducts half a day from casual leave, or loses half a day's pay if no balance is left. The conversion should happen automatically at month end, not when someone notices.",
    "A common problem is overlap with late-mark rules. If short leave is approved after the late mark has already been counted, the employee can be penalised twice. Process approvals before attendance is closed, and make sure short leave is checked against the late-mark count, not added on top of it.",
  ],
  "sick-leave": [
    "Sick leave is the one leave type usually taken without notice, so it is applied after the absence rather than approved beforehand. HR sets how long the employee has to record it once they are back, and whether a certificate is needed for a single day next to a weekend or holiday.",
    "For ESI-covered staff the practical question is what the employer pays and what ESIC pays. As an example, an employee off for three weeks with a certified illness may exhaust company sick leave in the first days and claim sickness benefit from ESIC for the rest, while payroll records the remaining days as unpaid by the employer.",
    "The statutory minimum, accrual and carry-forward for sick leave come from state Shops and Establishments rules and vary by state, so a company with offices in several states may need a different sick-leave scheme per location rather than one national policy.",
  ],
  "span-of-control": [
    "Span of control is pulled from the reporting-manager field in the employee master, so it is only as reliable as that field. Before using it, HR should check for managers who left but still have reports, and for people reporting to a department head on paper but to a supervisor in practice.",
    "As an example, a 300-person company with 60 people managers has an average span of 4 if 240 people report to those managers. That average hides the spread: a sales manager with 14 reps and three team leads with one report each produce the same average as a uniform team.",
    "It is most useful during an annual organisation review or before a restructure, when it shows which teams have a manager with too many reports to hold regular one-to-ones, and which layers exist mainly to provide a promotion title.",
  ],
  "special-allowance": [
    "Special allowance shows up most during offer and increment work. When HR fixes basic, HRA and named allowances first, special allowance becomes whatever is needed to reach the gross, and it absorbs every later tweak, so in older structures it can grow to be the largest single component.",
    "As an example, for a gross of ₹50,000 with basic at ₹20,000, HRA at ₹10,000 and conveyance plus other named allowances at ₹4,000, special allowance is ₹16,000. Raise gross to ₹55,000 at increment without touching the other components and special allowance alone rises to ₹21,000.",
    "Each increment cycle is a good point to check the ratio of basic to gross, since a structure in which special allowance keeps growing may move further from wage definitions under PF and, if notified, the labour codes. Document the structure rule rather than adjusting individual cases.",
  ],
  "standard-deduction": [
    "In payroll the standard deduction is a single setting applied in the annual tax projection, not a monthly line on the payslip. It reduces projected taxable salary for every employee and so lowers the TDS spread across the months.",
    "The yearly task is to confirm the amount for each regime after the Union Budget and the Finance Act, update the payroll tax settings before the April run, and then check one employee under each regime by hand. A setting carried over from the previous year is the usual reason a whole company's TDS is slightly wrong.",
    "Joiners need attention too. When an employee changes jobs mid-year, the deduction is allowed once for the year, so if the previous employer has already given it in their computation, the new payroll should apply it in the combined projection only once. Note the treatment in the joiner's tax file so Form 16 matches.",
  ],
  "take-home": [
    "Take-home is the figure employees check first on payday, so HR sees the questions within hours of salary credit. Most queries come from three causes: a TDS change after a declaration update, loss of pay from attendance, and a one-time deduction such as an advance recovery.",
    "As an example, an employee whose net is usually ₹42,000 receives ₹38,500. The payslip should let anyone trace the ₹3,500: perhaps two days of loss of pay and an increase in monthly TDS after unproved declarations were removed. If the reasons are not visible on the payslip, every one of these becomes an email to HR.",
    "Offers are the other place take-home matters. Candidates compare offers on monthly net pay, so recruiters should show an indicative take-home based on the structure, clearly labelled as depending on the tax regime and declarations, rather than leave the candidate to divide CTC by twelve.",
  ],
  tan: [
    "HR and payroll touch the TAN mostly in two places: every time monthly TDS is deposited through the challan, and each quarter when Form 24Q is filed. If the TAN on the challan and the return do not match, the deposit does not map to the return and employees' tax credits do not show in their records.",
    "The TAN also has to be registered on the TRACES portal, which is where Form 16 Part A is downloaded once the quarterly returns are processed. Someone in finance usually holds the login, and payroll should know who, because Form 16 issue depends on it in the weeks before employees file returns.",
    "Companies with several branches doing their own payroll sometimes hold separate TANs. In that case every employee's TDS must be deposited and reported under the TAN of the branch that paid them, and a transfer between branches mid-year should be planned so each branch reports only its own months.",
  ],
  tds: [
    "For salary, TDS is a monthly cycle: compute it in the payroll run, deduct it from pay, deposit it to the government by the due date for that month, then report it each quarter on Form 24Q and certify it to the employee on Form 16 after the year ends.",
    "As an example, if payroll for June is paid on 30 June, the TDS deducted is deposited in July under the employer's TAN, appears in the April to June Form 24Q, and later shows in the employee's tax credit statement. A gap anywhere in that chain shows up for the employee as missing tax credit.",
    "The common failures are late deposits, which carry interest, and PAN errors, which leave the credit stranded and may require deduction at a higher rate where no valid PAN is held. Validate PANs at onboarding rather than at the quarterly return. HRMagix generates Form 24Q and Form 16 from the payroll run.",
  ],
  tenure: [
    "Tenure is calculated from the date of joining in the employee master, so the first job is to make sure that date is right. Rehires, transfers from a group company and staff converted from contract to payroll are where it is most often wrong, and each has its own rule on whether earlier service counts.",
    "Tenure drives several decisions through the year: eligibility for leave entitlements that grow with service, long-service awards, notice periods that differ by service band, and gratuity, which under the Payment of Gratuity Act 1972 applies after five years of continuous service, with exceptions on death or disablement.",
    "As an example, an employee who joined on 10 August 2021 and leaves on 1 August 2026 is a few days short of five years. Whether that counts for gratuity turns on how continuous service and days worked are read under the Act, so check the case rather than rounding up.",
  ],
  "time-to-hire": [
    "Recruiters usually report time to hire monthly, by role family, from dates recorded at each stage: applied or sourced, screened, interviewed, offered, accepted. Without those stage dates, the figure can be produced but not explained.",
    "As an example, if accounts executive hires average 34 days, and the stage dates show 6 days to screen, 9 to schedule interviews and 14 waiting for the hiring manager's feedback, the problem is feedback rather than sourcing. Reporting the total alone would point the team at job boards.",
    "A common reporting mistake is mixing internal transfers and referrals that skip stages with full external hiring in one average. Report them separately, and track drop-offs between offer acceptance and joining on their own, since notice periods and counter-offers act after time to hire has stopped.",
  ],
  timesheet: [
    "Timesheets are usually filled weekly and approved by a project manager before the end of the month, because client invoices and project costing are built from approved hours. HR or operations chases the gaps, and the last working days of the month are when the chasing is heaviest.",
    "As an example, a consultant whose attendance shows 21 days present logs 152 hours: 120 to two client projects, 20 to internal work and 12 to training. Finance bills the 120, and the other 32 explain where the rest of the time went.",
    "The mistake is letting timesheet hours and attendance disagree without a check. If an employee was on approved leave but logs billable hours that day, or was present all week but logs nothing, one record is wrong. A simple monthly comparison of both before invoicing catches these cases early.",
  ],
  uan: [
    "The UAN is the number HR handles at joining for every PF member. The new joiner's existing UAN should be collected along with the joining documents. If they have one, it is linked to the new member ID; if not, a fresh UAN is generated when the joiner is registered, and they then need to activate it.",
    "Asking twice prevents the most common problem: a second UAN created for someone who already had one. Their earlier balance then sits under a different number and has to be merged later, which is slow for the employee. Ask for the previous payslip or PF statement rather than relying on memory.",
    "KYC linking is the other recurring task. PF withdrawals and transfers typically depend on Aadhaar, PAN and bank details being verified against the UAN, and the employer approves KYC submitted by employees through the employer portal. Clearing pending approvals regularly saves trouble at exit.",
  ],
  "utilisation-rate": [
    "Services firms usually review utilisation monthly, once timesheets for the month are approved, and they look at it by person, practice and grade. Each grade normally has a different target, because a senior manager carries sales and review work that a junior consultant does not.",
    "As an example, an analyst with 168 working hours in a month takes 16 hours of leave and a public holiday of 8 hours, leaving 144 available. With 115 billable hours, utilisation is 115 / 144, or about 80%. Dividing by 168 instead gives about 68% and misstates the month.",
    "Utilisation also shows bench time. When a person's rate drops for several months running, the question is whether they lack a project rather than whether they are working, and the answer belongs in resourcing and workforce planning, not in a performance review on its own.",
  ],
  "variable-pay": [
    "Variable pay runs on an annual or quarterly calendar separate from monthly payroll. After the performance period closes, ratings or business results come in, HR applies the plan formula, finance approves the total, and payroll adds the amounts to a chosen month's run.",
    "As an example, an employee with a target of ₹1,20,000 and a plan that pays 80% for a rating of meets expectations receives ₹96,000. If the company factor for the year is 0.9, it becomes ₹86,400. Recording both factors in the payout file lets anyone explain the figure later.",
    "Payroll's part is the tax effect: the payout is taxed in the month it is paid, and spreading the extra TDS sensibly means re-running the annual projection rather than taxing the whole amount in one month at the highest rate. Exits between the period close and the payout date follow the plan document.",
  ],
  vpf: [
    "Employees usually choose VPF at the start of the financial year, often at the same time as the tax declaration, and payroll then deducts the chosen amount each month along with the statutory 12%. It is reported in the ECR as part of the employee's contribution.",
    "As an example, an employee with a PF wage of ₹15,000 contributes ₹1,800 statutorily. Choosing VPF of 10% of that wage adds ₹1,500 a month, so ₹3,300 goes to the PF account in total, while the employer's contribution stays where it was.",
    "Payroll has to watch two points. Policies often allow changes to VPF only at set times, to stop monthly switching. And where combined employee contributions are high, interest on part of them may be taxable under current rules, so employees choosing large amounts should check how that applies to them.",
  ],
  "wage-register": [
    "The wage register is produced from each month's payroll run and kept for the period the applicable law requires. HR rarely looks at it until an inspector or an auditor asks for it, at which point it has to show each worker's rate, days worked, overtime, deductions and net pay for the month in question.",
    "In practice the risk is that the register is generated as a single report long after the event. If the attendance file or a deduction was corrected after salary was paid, the register produced later no longer matches what the worker actually received. Freeze each month's register when payroll is closed.",
    "Contractors' workers deserve a separate check. The principal employer may be expected to ensure their wages are paid and recorded, so ask contractors for their wage registers along with their monthly invoice, and check a few names against your own attendance records.",
  ],
  "weekly-off": [
    "Weekly offs are configured per employee or per shift group, and for rostered teams they are set through the roster. The attendance engine uses them to tell an absence from a rest day, and payroll uses them in counting paid days.",
    "As an example, a retail store open seven days gives staff staggered weekly offs. If an employee's off day is Wednesday but the system holds the company default of Sunday, a Sunday shift may be paid as weekly-off work and a Wednesday read as absence, leading to a payslip that is wrong in both directions.",
    "Working on a weekly off is the other case to handle. Most policies grant a compensatory off to be used within a set window or pay for the day as overtime, depending on the employee's category. State Shops and Establishments rules on weekly rest vary by state, so check them for each location.",
  ],
  "workforce-planning": [
    "In most Indian companies workforce planning happens alongside the annual budget, between January and March, when department heads propose headcount for the next financial year. HR's role is to bring the base numbers: current headcount by role, expected exits based on recent attrition, and open positions already approved.",
    "As an example, a sales team of 50 that expects to grow by 10 next year and has recently lost about 12 people a year needs to hire around 22, not 10. That number, and the time to hire for the role, decide when hiring has to start for people to be productive in the right quarter.",
    "Plans drift during the year, so revisit them each quarter against actual hiring and exits, rather than discovering in the next budget that the original plan was never met.",
  ],
};

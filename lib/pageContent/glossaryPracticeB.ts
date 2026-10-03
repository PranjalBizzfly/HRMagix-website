/** "In practice" paragraphs for glossary terms, keyed by term slug. */
export const glossaryPracticeB: Record<string, string[]> = {
  "epf-nomination": [
    "Nomination is usually chased in the first weeks after joining, once the UAN is linked and KYC is seeded, because the employee files it on the member portal and e-signs it with Aadhaar OTP. HR's job is less to fill it than to track who has not done it and to nudge them before the gap is forgotten.",
    "It matters again at life events. An employee who marries should file a fresh nomination, since a nomination made while single in favour of a parent may not hold once the member has a family. A tidy practice is to add a nomination reminder to the address or marital status change workflow.",
    "The common mistake is treating the nominee named in the company's own insurance or bank forms as if it covered PF. It does not: EPFO only recognises the nomination on its own record, so a missing one leaves the family facing a slower claim with more paperwork at the worst possible time.",
  ],
  eps: [
    "Payroll never deducts EPS from the employee. It is carved out of the employer's 12% PF share: 8.33% of PF wages, capped at the ₹15,000 wage ceiling, goes to the pension fund and the balance of the employer share goes to the employee's EPF account. The ECR file shows the two amounts separately each month.",
    "Example with illustrative figures: on PF wages of ₹25,000, the employer's 12% is ₹3,000. EPS is 8.33% of ₹15,000, about ₹1,250, so roughly ₹1,750 goes to EPF. On PF wages of ₹12,000, EPS is about ₹1,000 and the EPF portion about ₹440.",
    "The recurring error is computing EPS on actual wages above the ceiling without a valid higher pension option on record, or splitting it for a member who joined after the rules excluded new high earners. Both create ECR mismatches that surface later during a pension or transfer claim. Check the current EPFO position on higher pension before changing any split.",
  ],
  esi: [
    "Each payroll run, the team checks who falls at or under the ₹21,000 gross wage threshold and deducts 0.75% from the employee while the company adds 3.25%. Those amounts go into the monthly contribution return on the ESIC portal and are paid by the due date for that month.",
    "Example with illustrative figures: an employee earning ₹18,000 gross has ₹135 deducted and the employer pays ₹585. If a raise in the middle of a contribution period takes the same person to ₹22,000, contributions continue until that period ends, which surprises teams that stop the deduction in the month of the raise.",
    "Employees whose average daily wage is ₹176 or less pay nothing themselves, though the employer share still applies. HRMagix calculates the ESI split against the threshold and produces the monthly contribution report and challan data, per its published statutory module.",
  ],
  "esic-ip-number": [
    "At onboarding, HR asks every ESI-eligible joiner whether they already hold an insured person number from a previous job. If they do, the employee is registered against it on the ESIC portal; if not, a fresh registration generates one and the e-pehchan card details are shared with the employee.",
    "The number becomes practical the first time someone falls ill or has an accident. The employee or family needs it at the ESI dispensary or hospital, and HR may be asked for it when filing an accident report, so it should sit on the employee record, not only in the portal.",
    "The usual mistake is creating a second IP number for a returning or transferring employee because nobody asked. Duplicate numbers split contribution history, which can affect eligibility for cash benefits that depend on contributions paid. Correcting it later means a request to ESIC, so a one-line question on the joining form saves weeks of follow-up.",
  ],
  esop: [
    "For HR and payroll, ESOPs become real at two moments: the vesting date, which is mostly record keeping, and the exercise date, when the employee buys shares. The difference between the fair market value on exercise and the exercise price is a perquisite, so payroll must add it to taxable salary and deduct TDS in that month.",
    "Example with illustrative figures: 1,000 options exercised at ₹10 when the fair market value is ₹110 create a perquisite of ₹1,00,000 for that month. A sudden spike like this can push monthly TDS far above the employee's net pay, so coordinate the timing and the recovery plan in advance.",
    "The common gap is the cap table team and payroll not talking. If the exercise is not reported to payroll before the run closes, Form 16 understates income. Rules on deferral of tax for eligible startups exist but change; check the current provision before applying any deferral.",
  ],
  "flexible-benefit-plan": [
    "A flexible benefit plan is set up once a year, usually in April, when employees choose how to split a fixed flexi amount across heads such as meal cards, fuel, telephone, books or leave travel. Payroll then pays each head monthly or holds it until the employee submits bills.",
    "Example with illustrative figures: an employee with a ₹4,000 monthly flexi pool might take ₹2,200 as meal card and ₹1,800 against telephone bills. At year end, unclaimed amounts under bill-based heads are paid out as taxable salary, usually in the March run.",
    "These heads mostly help employees on the old tax regime, so the first conversation each year should be which regime the person has chosen. Offering a complex flexi menu to employees on the new regime adds proof collection work with little benefit to them. Exemption limits per head depend on current tax rules and should be checked before publishing the menu.",
  ],
  "form-11": [
    "Form 11 is collected on the joining day, before the first payroll run, because it answers the questions payroll needs to decide PF treatment: is there an existing UAN, was the person a PF or EPS member before, and is this an international worker. Today most companies capture it digitally and keep the signed declaration on file.",
    "The answers drive real decisions. A joiner with an existing UAN is linked to it rather than given a new one. A joiner earning above the ₹15,000 ceiling who has never been a PF member may, depending on company policy and the scheme rules, be treated differently from one who has.",
    "The usual mistake is skipping the form for a senior hire because they will obviously join PF. Then a second UAN is generated, the old balance is stranded, and the employee spends months on a transfer claim. Ask for the old UAN and previous employer details every time, even for rehires.",
  ],
  "form-12bb": [
    "Form 12BB has two moments in the year. At the start, usually April or at joining, employees declare intended investments, rent and loan interest so payroll can estimate TDS. Between December and February, HR runs the proof collection window and payroll replaces declared numbers with verified ones.",
    "Example with illustrative figures: an employee declares rent of ₹20,000 a month but submits receipts for only eight months. Payroll recomputes the HRA exemption on the verified amount and recovers the extra tax in the February and March runs, which is why the employee sees a lower salary then.",
    "The mistake teams make is leaving proofs until the March run. Last-minute recomputation squeezes all the extra TDS into one month and creates angry calls. Send the window notice early, accept proofs in batches, and tell employees on the new regime that most of these deductions will not reduce their tax.",
  ],
  "form-16": [
    "Form 16 is issued once a year, after the fourth quarter TDS return is filed and processed, typically by mid-June. Part A comes from the TRACES portal and must be downloaded for each employee; Part B is the salary breakup the employer prepares from its own payroll records.",
    "The practical work is reconciliation before release. The salary, exemptions and tax in Part B must agree with what was reported in the quarterly returns, or the employee's tax return will show a mismatch with their Form 26AS. Employees who left mid-year still need their Form 16 from this employer for the months they worked.",
    "A common slip is issuing Part B from a draft payroll that was corrected after the return was filed. Freeze the final data first, then generate. HRMagix lists annual Form 16 Part B generation among its published payroll compliance outputs.",
  ],
  "form-24q": [
    "Form 24Q is the quarterly return of salary TDS, filed after each quarter closes, with the challans already deposited mapped to each employee by PAN. The payroll team's monthly discipline of depositing TDS on time and recording challan details makes the quarterly filing quick; skipping that discipline makes it painful.",
    "The fourth quarter return is the heavy one because it carries the annexure with each employee's full year salary, exemptions and deductions. That annexure is what later feeds Form 16, so errors there flow straight into employees' tax returns.",
    "Typical errors are an invalid or unverified PAN, which pushes the employee into a higher deduction rate and a default notice, and a challan booked against the wrong quarter. Validate PANs at onboarding and check the justification report after each filing. HRMagix publishes quarterly Form 24Q generation as part of its TDS outputs.",
  ],
  fte: [
    "FTE shows up when finance asks what the team really costs or how much capacity a department has. HR converts each person's contracted hours into a fraction of the standard week and adds them up, usually at month end for the management report or during annual budgeting.",
    "Example with illustrative figures: a support team of 12 has eight full-timers, three people on 24-hour weeks against a 48-hour standard, and one person who joined mid-month. That is 8 + 1.5 + about 0.5 for the joiner, roughly 10 FTE, which is the figure to use when comparing cost per position with another team.",
    "The mistake is mixing units in the same report: budgets written in FTE, actuals pulled as headcount. Pick one per measure and label it. Note that statutory registers and contribution returns still work person by person, so FTE belongs in planning, never in compliance files.",
  ],
  "full-and-final-settlement": [
    "Settlement starts when resignation is accepted, not on the last day. HR collects clearances from IT, finance and the manager, payroll works out salary for days worked, leave encashment, any notice pay recovery, pending reimbursements, and gratuity if the person is eligible, and the final TDS is recalculated on the full year to date.",
    "Example with illustrative figures: an employee leaving on 20 June with 12 days of encashable leave and a ₹15,000 laptop recovery receives 20 days' salary plus 12 days' encashment, minus the recovery and the tax due. Gratuity, where payable, is a separate line with its own rules on timing.",
    "The common failure is letting settlement drift for months while clearances sit with one department. The Code on Wages, in force since 21 November 2025, requires wages due on separation to be paid within two working days (s.17(2)), so check the current requirement in your state as well. Share a written settlement statement so the employee can see every line.",
  ],
  "garden-leave": [
    "Garden leave is decided at the resignation meeting, usually for sales, client-facing or senior roles. HR issues a short letter stating the start date, that salary and benefits continue, that the employee must stay reachable and must not contact clients, and that system access is being withdrawn.",
    "Payroll treats the period as ordinary paid service: salary, PF, ESI where applicable, and leave accrual if the policy says so. The person is still an employee, so service for gratuity continues to count up to the last working day, which can matter when someone is close to completing a year that counts.",
    "The mistake is calling it garden leave while quietly stopping pay or treating it as an early exit date. That converts it into something else and invites a dispute. Also ensure IT revokes access on the first day, since the whole point is to keep the person away from data and customers.",
  ],
  "geo-fencing": [
    "Setting up geo-fencing is a one-time exercise per location: HR or the admin team pins the coordinates of each office, branch, warehouse or client site and picks a radius. A small radius suits a single building; a large campus or a site with weak GPS needs more room, or genuine punches get flagged.",
    "Day to day, the work is reviewing exceptions. A field sales executive who punches from a customer's office outside every fence will appear on the flagged list each morning, so roaming roles need either a wider policy or approval routing to their manager instead of a hard block.",
    "The common mistake is rolling out one radius for everyone and then letting managers approve every flag without looking, which defeats the control. HRMagix publishes GPS geo-fencing on its mobile app with configurable radius per location and optional selfie validation.",
  ],
  "gig-workers": [
    "Most HR teams meet gig workers through delivery, logistics, events or project work, engaged through a platform or on short task-based contracts. They are paid by the job against invoices or platform statements, not through salary payroll, and the documentation trail is the engagement terms, the work logs and the payout records.",
    "The Code on Social Security 2020 recognises gig and platform workers and provides for social security schemes for them, with contributions from aggregators, but how and when those provisions apply depends on what the government has notified. Check the current status before building anything into contracts or cost models.",
    "The real risk is misclassification. A gig worker given fixed shifts, a reporting manager and a monthly retainer for years starts to look like an employee, with PF, ESI and leave obligations attached. Review long-running arrangements once a year and move them onto proper employment terms where the reality has changed.",
  ],
  "grace-period": [
    "The grace period is configured once in the attendance policy, often 10 or 15 minutes after shift start as an example, and then applied silently every day. Its real effect shows up at month end, when late marks are counted and converted into deductions or half-days under the policy.",
    "Example with illustrative figures: a policy allows 15 minutes of grace and treats three late marks beyond grace in a month as half a day of leave. An employee who arrives at 9:20 four times sees one late mark rolled into a half-day debit, and the fourth noted for review.",
    "The mistake is applying grace unevenly: allowing it on the morning punch but not on the return from a break, or exempting one team by habit rather than by written rule. Shift workers also need the grace tied to their own shift start, not to a general office time.",
  ],
  gratuity: [
    "Payroll handles gratuity twice. Each month, finance sets aside a provision for it, typically 15/26 of monthly basic and DA over 12 months, about 4.81%. At exit, HR checks eligibility under the Payment of Gratuity Act 1972: at least five years of continuous service, with exceptions such as death or disablement.",
    "Example with illustrative figures: an employee leaving after 7 years and 8 months on last drawn basic and DA of ₹40,000 is credited with 8 years, because the part year exceeds six months. Gratuity is ₹40,000 × 15 ÷ 26 × 8, about ₹1,84,615, within the ₹20,00,000 statutory ceiling.",
    "Under the Code on Social Security, in force since 21 November 2025, fixed-term employees qualify after one year, pro rata, and allowances above 50% of total pay are added back to the wage used. Check the current position before settlement. The usual error is counting the part year wrongly or using gross instead of basic plus DA.",
  ],
  "gross-salary": [
    "Gross salary is the figure payroll works out first each month, before any deduction: earned basic, HRA, allowances, overtime, arrears and variable pay paid that month, after reducing for loss of pay days. Every statutory test then reads from some version of it.",
    "That is where errors start. ESI eligibility is checked on gross wages against ₹21,000, PF is calculated on basic and DA usually capped at ₹15,000, and Professional Tax slabs, which vary by state, also look at gross. Example with illustrative figures: a gross of ₹22,500 that includes a one-time ₹2,000 arrear may need careful treatment under ESI rules on what counts as wages.",
    "The common mistake is confusing monthly gross with annual CTC in offer conversations and payslips. CTC includes employer PF, gratuity provision and insurance, none of which the employee receives in hand, so show both figures clearly on offer letters.",
  ],
  "half-day": [
    "Half-days are mostly created automatically by attendance rules: a punch-in after a cut-off time, or total hours between set thresholds. HR's work is in the edge cases during the monthly attendance review, deciding whether a flagged half-day should be debited from leave or treated as loss of pay.",
    "Example with illustrative figures: a policy marks a day as half if hours worked fall between 4 and 7. An employee who logs 5 hours on a Friday has 0.5 casual leave debited if a balance exists, otherwise 0.5 day is deducted as LOP in that month's payroll.",
    "Mistakes cluster around split leave requests and holidays. An employee who applies for a second-half leave and then forgets to punch out can end up with both a half-day leave and an absent mark for the same date. Lock attendance only after these conflicts are cleared, so payroll does not deduct twice.",
  ],
  hcm: [
    "In practice, HCM is a label for how an organisation organises its people systems rather than a task anyone performs on a given day. It comes up when HR is choosing software, writing a requirements list or explaining to leadership why recruitment, onboarding, performance and learning should share one employee record.",
    "The useful question during selection is not whether a vendor calls itself HCM but which processes it truly runs end to end for an Indian employer: attendance into payroll, statutory deductions, performance cycles, and exits. A module that exists only as a form with no link to payroll adds data entry, not management.",
    "The common mistake is buying a broad suite and switching on every module at once. Teams usually do better starting with the core record, attendance and payroll, then adding performance and engagement once data is clean. HRMagix describes itself as covering attendance, payroll, statutory compliance and performance on one platform.",
  ],
  headcount: [
    "Headcount is pulled at a fixed cut-off, usually the last day of the month, for management reports and for statutory registers. HR needs to state who is in the count: confirmed employees, probationers, people on notice, interns, contract staff through an agency.",
    "Example with illustrative figures: a plant reports 240 employees, but the count includes 35 contract workers supplied by a contractor and 6 people serving notice. Finance may want 199 permanent staff for cost, while the safety team wants all 240 people present on site. Both are valid if labelled.",
    "The mistake is using whichever number is handy for thresholds that have legal meaning. Applicability of several labour laws depends on how many people are employed under the specific law's own definition, so test thresholds against that definition, not the dashboard figure. Opening, closing and average headcount also differ, so name the one used in attrition rates.",
  ],
  "hr-audit": [
    "A practical HR audit is usually run once a year or before a funding round, acquisition or inspection. The reviewer samples employee files and checks them against a list: offer and appointment letters, Form 11, PF and ESI registrations, nomination, policy acknowledgements, and exit paperwork for leavers.",
    "The statutory part compares registers and returns with payroll: whether PF and ESI challans match the wages paid, whether Professional Tax was deducted under the right state's slabs, and whether the TDS returns agree with Form 16. State-level registers and display requirements vary, so the checklist must be built per location.",
    "The common mistake is treating the audit as a report and stopping there. The value is in the action list: who fixes each gap and by when. Repeat the same sample checks a quarter later to confirm the fixes held, or the next audit finds the same issues.",
  ],
  hra: [
    "HRA appears in two places in payroll. It is a salary component fixed in the structure, often a share of basic, and it is also the basis for the exemption an employee on the old tax regime claims for rent paid. Payroll calculates the exemption each month from the rent declared, then corrects it once proofs arrive.",
    "Example with illustrative figures: basic is ₹40,000, HRA is ₹16,000 and rent is ₹18,000 in a metro city. The exemption is the least of actual HRA, rent minus 10% of basic, and 50% of basic for a metro, so ₹14,000. The balance ₹2,000 of HRA is taxable.",
    "Common errors include using the wrong city category, accepting rent receipts without the landlord's PAN where the rules require it, and continuing the exemption for employees who switched to the new regime. Check the current exemption rules before each year's declaration window.",
  ],
  hris: [
    "An HRIS earns its keep on ordinary days: an employee updates their bank account, a manager asks for a reporting line change, payroll needs the list of joiners since the last run. All of that reads from one employee record instead of email threads and separate spreadsheets.",
    "The work HR does inside it is mostly data stewardship. Somebody has to own field definitions, who can edit what, and the effective date of each change, so that a designation change on the 18th of the month does not quietly rewrite last month's history or the payroll already processed.",
    "The common mistake is migrating old spreadsheets in without cleaning them, which loads duplicate employees, blank PANs and wrong joining dates into the new system. Clean the core fields first: identity numbers, dates, bank details and statutory numbers such as UAN and IP number. Everything downstream trusts those values.",
  ],
  hrms: [
    "Day to day, an HRMS is where an employee applies for leave, a manager approves it, attendance is marked and the payroll team runs salary from the same data at month end. Its practical test is whether those steps happen without anyone exporting one file and importing it into another.",
    "When companies move to an HRMS, the timing matters. Going live at the start of a financial year or quarter keeps TDS and statutory returns simpler, because opening balances for tax, leave and loans are loaded once. Mid-year moves are possible but need careful year-to-date figures for each employee.",
    "The usual mistake is configuring the system to copy every old manual workaround. Use the move to retire rules nobody can explain. HRMagix publishes modules for attendance, leave, payroll with Indian statutory compliance, performance and employee self-service within one platform.",
  ],
  "joining-bonus": [
    "A joining bonus is agreed in the offer letter and paid through payroll, usually with the first or second salary, or in parts over the first months. It is taxable salary in the month paid, so payroll includes it in that month's TDS computation, which often makes a new joiner's first payslip look unexpectedly low.",
    "Most offers attach a clawback: if the employee leaves within a stated period, part or all of the bonus is recoverable. Example with illustrative figures: a ₹1,00,000 bonus with a 12 month clawback, where the employee leaves after 7 months, may be recovered in full or pro rata, depending entirely on what the offer letter says.",
    "The mistake is writing a vague clawback and then trying to recover it from the full and final settlement. Recovery against wages is restricted by wage law, so spell out the amount, period and method in the offer, and get the employee's written agreement at joining.",
  ],
  kra: [
    "KRAs are set at the start of the appraisal cycle, often April for companies on a financial year, and revisited if the role changes. The manager and employee agree three to six areas the role is accountable for, each with measures and a weight that together add up to the full score.",
    "Example with illustrative figures: a branch manager might hold revenue at 40%, collections at 25%, team retention at 20% and audit findings at 15%. At year end, each area is rated against its measure and weighted, producing the score that feeds increment and bonus decisions.",
    "The common mistake is copying last year's KRAs without checking whether the role changed, or writing them as activities such as attend meetings rather than outcomes. A mid-year review should adjust targets that became irrelevant. HRMagix lists goal and performance cycles among its published performance module features.",
  ],
  "leave-accrual": [
    "Accrual runs on a schedule set in the leave policy, often on the first of each month, crediting a fraction of the annual entitlement. HR's monthly check is that new joiners received a pro rata credit for their partial first month and that people on long unpaid leave did not accrue if the policy excludes that time.",
    "Example with illustrative figures: a policy grants 18 days of earned leave a year, credited at 1.5 days a month. An employee joining on the 16th of a month might receive 0.75 days for that month, and a leaver on the 10th none for the final month, depending on the rounding rule written in the policy.",
    "State Shops and Establishments Acts and the Factories Act set their own rules on earning leave, and these vary by state and establishment type, so the accrual schedule must meet the applicable law. The common mistake is letting accrual continue during notice periods or sabbaticals without a written rule either way.",
  ],
  "leave-carry-forward": [
    "Carry forward happens once a year at the close of the leave year, usually 31 December or 31 March. HR runs the year-end process: unused balances are moved to the new year up to the cap in the policy, anything above the cap lapses or is encashed, and employees are told their opening balance.",
    "Example with illustrative figures: a policy allows earned leave to carry forward up to 45 days. An employee with 38 days carried in and 12 days unused this year would reach 50, so 45 move forward and 5 lapse or are paid, depending on the policy.",
    "Caps and accumulation limits under the Factories Act and state Shops and Establishments Acts vary, and the labour codes, in force since 21 November 2025, and the state rules under them may change them, so check the rule that applies to each site. The common mistake is letting casual or sick leave carry forward by default when the policy intends them to lapse.",
  ],
  "leave-encashment": [
    "Encashment comes up in two situations. Some companies allow employees to encash part of their earned leave balance once a year, often in a fixed month, and nearly all pay out the unused encashable balance at exit as part of full and final settlement.",
    "Example with illustrative figures: an employee with basic and DA of ₹30,000 leaves with 20 days of encashable leave. If the policy divides by 30, the payout is ₹30,000 ÷ 30 × 20, or ₹20,000. A policy that uses 26 working days as the divisor gives a higher amount, so the divisor must be written down.",
    "Encashment during service is fully taxable. At retirement or resignation, an exemption may apply subject to limits that depend on current tax rules, so payroll should confirm the limit in force before computing TDS. The common mistake is encashing sick or casual leave the policy never made encashable.",
  ],
};

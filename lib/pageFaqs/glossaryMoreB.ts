import type { PageFaq } from "./types";

/**
 * FAQs for glossary terms added in the expansion (set B), keyed by term slug.
 * Answers add practical detail to the definitions in lib/glossaryMore.ts.
 * Statutory figures come only from lib/statutory.ts; state-set items are
 * described as varying, and labour-code points are worded as "as notified".
 */
export const glossaryMoreFaqsB: Record<string, PageFaq[]> = {
  absenteeism: [
    { q: "How is the absenteeism rate calculated?", a: "Divide the unplanned absent days in the period by the scheduled working days for the same people, and multiply by 100. Use scheduled days, not calendar days, so weekly offs and holidays do not dilute the figure." },
    { q: "Should approved leave count as absenteeism?", a: "Usually not. Planned leave that was applied for and approved is excluded, because the measure is meant to capture absence that disrupts the roster. Unapproved absence and same-day sick calls are the core of it." },
    { q: "How is absenteeism different from loss of pay?", a: "Absenteeism is a measurement; loss of pay is a payroll treatment. An unplanned absence may be covered by sick leave and paid in full, yet still count towards the absenteeism rate." },
    { q: "What is a common mistake when tracking absenteeism?", a: "Reporting one company-wide figure. Patterns such as absences clustered on Mondays, after paydays or in one shift only show up when the data is cut by team, day and shift." },
  ],
  "retention-rate": [
    { q: "How do you calculate employee retention rate?", a: "Take the number of employees at the start of the period who are still employed at the end, divide by the headcount at the start, and multiply by 100. People hired during the period are left out of both figures." },
    { q: "Is retention rate just 100 minus attrition?", a: "Not exactly. Attrition usually counts all leavers against average headcount, including people who joined and left within the period, while retention tracks only the starting group. The two can move differently in a year of heavy hiring." },
    { q: "Should new joiners be included in retention rate?", a: "No. Including them distorts the measure, because someone who joined in month ten has had little chance to leave. Track early leavers separately as new-hire retention, for example at 90 days or one year." },
    { q: "What period is best for measuring retention?", a: "Annual retention is the standard comparison, with quarterly figures for monitoring. Whatever period you choose, keep it fixed so year-on-year comparisons are like for like." },
  ],
  "cost-per-hire": [
    { q: "What goes into the cost per hire calculation?", a: "Add external costs such as agency fees, job board spend, assessments and background checks to internal costs such as recruiter time and referral bonuses. Divide the total by the number of hires made in the same period." },
    { q: "Should a joining bonus be included in cost per hire?", a: "Practice varies, so decide once and apply it consistently. Many organisations keep joining bonuses out, because they are part of the offer package rather than a cost of finding the candidate." },
    { q: "Why calculate cost per hire by source?", a: "A single average hides the difference between agency hires, referrals and direct applications. Splitting it by source shows where the recruitment budget actually buys hires." },
    { q: "Is a low cost per hire always good?", a: "Not on its own. It should be read alongside time to hire and how many hires stay past probation, since cheap hires who leave early cost more in the end." },
  ],
  "time-to-hire": [
    { q: "How is time to hire measured?", a: "It is the number of days from when a candidate enters the pipeline, by applying or being sourced, to when they accept the offer. Averaging it across hires shows how quickly the process moves a candidate through." },
    { q: "What is the difference between time to hire and time to fill?", a: "Time to fill starts when the requisition is approved and runs until the offer is accepted, so it includes the time spent finding candidates. Time to hire starts only once a specific candidate is in the process." },
    { q: "Does time to hire include the notice period?", a: "Normally no. It stops at offer acceptance, and the gap until the joining date is tracked separately, since notice periods in India can be long and are outside the recruiter's control." },
    { q: "Where does time to hire usually get lost?", a: "Between stages rather than within them, such as waiting for interview feedback or approval of the offer. Recording a date for each stage shows where candidates sit idle." },
  ],
  "offer-acceptance-rate": [
    { q: "How is offer acceptance rate calculated?", a: "Divide the number of offers accepted by the number of formal offers made in the period, and multiply by 100. Count only written offers, not verbal discussions." },
    { q: "Should offers accepted but not joined count as acceptances?", a: "They count as acceptances, but track them separately as a joining or no-show rate. In India a candidate may accept and then take a counter-offer during the notice period, which the acceptance rate alone will not reveal." },
    { q: "What does a falling offer acceptance rate usually indicate?", a: "Often a gap between what was discussed early and what the written offer contains, such as salary, role or location. Slow offers that let other employers move first are another common reason." },
    { q: "Should the reasons for declined offers be recorded?", a: "Yes. Logging the reason for each decline, by role and source, turns the rate into something you can act on rather than a number to report." },
  ],
  enps: [
    { q: "How is eNPS calculated?", a: "Employees answer how likely they are to recommend the organisation as a place to work on a 0 to 10 scale. The percentage scoring 0 to 6 is subtracted from the percentage scoring 9 or 10, giving a score from -100 to +100." },
    { q: "What happens to scores of 7 and 8 in eNPS?", a: "They are counted in the total responses but not in either group, so they pull the score towards zero without adding to or subtracting from it." },
    { q: "Should the eNPS survey be anonymous?", a: "Generally yes, because people are less likely to give a low score if they can be identified. Report results only for groups large enough that individuals cannot be picked out." },
    { q: "Is eNPS enough on its own?", a: "No. It shows sentiment but not the reason for it, so it is usually paired with an open follow-up question asking what drove the score." },
  ],
  "360-degree-feedback": [
    { q: "Who gives feedback in a 360-degree review?", a: "Typically the manager, a few peers, direct reports where there are any, and the employee through a self-assessment. Some organisations add internal or external customers who work closely with the person." },
    { q: "Should 360-degree feedback be used for ratings and pay?", a: "Many organisations keep it for development only. When it feeds pay, reviewers may soften or sharpen their comments for reasons that have nothing to do with the work." },
    { q: "How many reviewers are needed for a 360?", a: "Enough that individual responses cannot be identified, which is why peer and report feedback is usually shown only once a minimum number of responses is reached." },
    { q: "What is a common mistake with 360-degree feedback?", a: "Handing over the report without a conversation. The feedback is most useful when the manager helps the employee pick two or three themes and turn them into a development plan." },
  ],
  "competency-framework": [
    { q: "What does a competency framework contain?", a: "A list of competencies, a short definition of each, and descriptions of the observable behaviour expected at each level or grade. Good frameworks describe what people do, not personality traits." },
    { q: "How is a competency framework used in hiring?", a: "Interview questions and scorecards are built around the competencies the role needs, so every candidate is assessed against the same behaviours." },
    { q: "How many competencies should a framework have?", a: "Few enough that managers can actually use them, often a handful of core competencies plus a small number specific to a function. Long lists tend to be ignored in practice." },
    { q: "How does a competency framework relate to performance reviews?", a: "Reviews often assess the how alongside the what: goals measure results, and competencies measure the behaviour shown in achieving them." },
  ],
  "bell-curve": [
    { q: "How does a bell curve work in appraisals?", a: "Managers are asked to place a set share of employees in each rating band, with most in the middle and smaller groups at the top and bottom. The shares are fixed by the organisation in advance." },
    { q: "What is the main criticism of bell curve rating?", a: "It assumes every team has the same spread of performance. In a small or unusually strong team, someone may be pushed into a lower band just to fit the shape." },
    { q: "Is a bell curve the same as calibration?", a: "No. Calibration compares draft ratings across managers to make them consistent, while a bell curve forces the results into a fixed distribution. Calibration can be done without any forced curve." },
    { q: "Should the bell curve be applied to small teams?", a: "It is usually applied only to larger pooled groups, such as a department or grade, because a forced distribution makes little statistical sense across a handful of people." },
  ],
  "span-of-control": [
    { q: "How is span of control calculated?", a: "Count the direct reports of each manager. For the organisation, divide the number of employees who report to someone by the number of people managers to get the average span." },
    { q: "What is the difference between span of control and layers?", a: "Span is how wide each manager's team is; layers are how many levels sit between the top and the front line. Narrow spans usually mean more layers for the same headcount." },
    { q: "Is there an ideal span of control?", a: "It depends on the work. Teams doing similar, routine tasks can support a wider span, while specialised or new teams need a narrower one." },
    { q: "Why look at span of control in an org review?", a: "Very narrow spans, such as managers with one or two reports, often point to titles given for seniority rather than for managing people, which adds cost and slows decisions." },
  ],
  "notice-pay": [
    { q: "How is notice pay calculated?", a: "Take the wage the contract specifies for notice, often monthly gross or basic, divide it by the days the policy uses for a month, and multiply by the unserved notice days. Check the contract wording, because the wage base varies between employers." },
    { q: "Can an employer recover notice pay from the final settlement?", a: "If the contract provides for it, a shortfall in notice served is usually adjusted against the dues in the full and final settlement. Show the recovery as a separate line so the employee can see how it was computed." },
    { q: "Can leave balance be adjusted against the notice period?", a: "Only if the leave policy allows it. Many policies do not let earned leave be set off against notice, so the shortfall is recovered and the leave is encashed separately." },
    { q: "Is notice pay received by an employee taxable?", a: "Notice pay received in lieu of notice is generally treated as part of salary income and taxed through payroll. Confirm the current treatment with a tax adviser for unusual cases." },
  ],
  "payroll-cycle": [
    { q: "What dates make up a payroll cycle?", a: "The attendance and input cut-off, the payroll run, review and approval, salary payment, and the statutory payment and filing dates that follow. Each should be a fixed day of the month known to everyone who sends inputs." },
    { q: "Is there a legal deadline for paying monthly salary?", a: "The Payment of Wages Act 1936, s.5, sets deadlines for paying wages after the wage period ends for the employees it covers, and the Code on Wages, in force since 21 November 2025, replaced that Act with its own payment deadlines (s.17). Check which rule currently applies to your establishment." },
    { q: "What happens to inputs that arrive after the cut-off?", a: "They are carried into the next cycle and paid as arrears or recovered there, rather than reopening a run that has been approved. This keeps payslips and bank files stable." },
    { q: "Why should the attendance cut-off fall before month end?", a: "It gives time to process and approve the run before payday. Days after the cut-off are treated as present and corrected in the next cycle if they turn out otherwise." },
  ],
  "form-11": [
    { q: "When must Form 11 be filled?", a: "At joining, before the employer registers the new employee for PF. It tells the employer whether to link the person to an existing UAN or generate a new one." },
    { q: "What happens if Form 11 is not collected?", a: "The employer may create a fresh UAN for someone who already has one. The employee then holds two UANs, and the earlier balance and service have to be merged later." },
    { q: "Can someone with an earlier PF account opt out at a new employer?", a: "Generally no. A person who was already an EPF member must continue as a member in the new employment, which is exactly what Form 11 records." },
    { q: "Should Form 11 be kept on file?", a: "Yes. Keep the signed declaration with the joining records, since it supports the UAN and membership decisions if they are questioned in an inspection." },
  ],
  "epf-nomination": [
    { q: "How does an employee file an EPF nomination?", a: "Through e-nomination on the EPFO member portal using their UAN, with details of each nominee and their share. The nomination is authenticated with an Aadhaar-linked OTP." },
    { q: "Who can be nominated in EPF?", a: "Where the member has a family as defined in the scheme, the nomination has to be in favour of family members. A person outside the family can be nominated only if the member has no family." },
    { q: "Can an EPF nomination be changed?", a: "Yes. A fresh nomination can be filed at any time, for instance after marriage or the birth of a child, and the latest valid nomination is the one that applies." },
    { q: "Why should employers push for EPF nomination?", a: "Without a nominee, a claim after a member's death becomes slower and harder for the family. Checking nomination status during onboarding avoids that." },
  ],
  "esic-ip-number": [
    { q: "When is an ESIC IP number generated?", a: "When the employer registers a newly covered employee on the ESIC portal, within the time ESIC allows after joining. The number stays with the employee across employers." },
    { q: "Should a new employee get a fresh IP number if they had one before?", a: "No. If they were insured through an earlier employer, the existing IP number should be used. Creating a second one splits their contribution record and can affect their benefits." },
    { q: "What is the e-Pehchan card?", a: "It is the identity record generated with the IP number, used by the insured person and their dependants to access ESIC medical care." },
    { q: "What happens to the IP number if wages go above the ESI limit?", a: "The number remains with the employee. Once wages exceed ₹21,000 a month, contributions continue until the end of the current contribution period, after which the employee falls out of coverage until wages come back within the limit." },
  ],
  "epf-kyc": [
    { q: "Which KYC details are linked to a UAN?", a: "Aadhaar, PAN and bank account are the main ones, along with the member's name, date of birth and gender matching Aadhaar. Each detail has to be approved by the employer after the employee adds it." },
    { q: "Why do PF claims get rejected for KYC reasons?", a: "Common causes are a name or date of birth that does not match Aadhaar, an unverified bank account, or a KYC detail the employer has not approved. Fixing them before the employee leaves avoids delays later." },
    { q: "What is the employer's role in EPF KYC?", a: "The employer verifies and approves the KYC details on the establishment portal using its digital signature or another approved method. Pending approvals should be reviewed every month." },
    { q: "Does a missing PAN affect PF withdrawal?", a: "It can. Where tax is to be deducted on a withdrawal, a missing PAN can lead to deduction at a higher rate, so PAN should be seeded well before any claim." },
  ],
  "pf-transfer": [
    { q: "How does an employee transfer PF to a new employer?", a: "By filing an online transfer request on the EPFO member portal with their UAN, choosing the previous or present employer to attest it. Where details are fully linked, the transfer may happen automatically once the new employer starts contributions." },
    { q: "Is PF transfer needed if the UAN stays the same?", a: "Often yes. The UAN is the same, but each employment has its own member ID, and the balance from the old one has to be moved to the new one if it is not moved automatically." },
    { q: "Why does PF transfer matter for service?", a: "Transferring keeps the member's service continuous, which matters for pension eligibility and for the tax treatment of withdrawals that depends on continuous service." },
    { q: "What is the employer's role in PF transfer?", a: "Updating the exit date for the old member ID and attesting the claim where asked. A missing exit date is a common reason transfers stall." },
  ],
  "pf-withdrawal": [
    { q: "When can an employee withdraw the full PF balance?", a: "Final settlement is generally available on retirement, or after a period of unemployment following exit as the scheme sets out. Check the current EPFO rule before advising an employee." },
    { q: "What is the difference between PF withdrawal and a PF advance?", a: "A withdrawal settles the account, while an advance is a partial withdrawal for specific purposes such as illness, housing or marriage, with the member staying in service." },
    { q: "Is PF withdrawal taxable?", a: "It can be, depending mainly on whether the member has five years of continuous service. Withdrawals before that may attract tax and TDS, so check the current rules for the member's situation." },
    { q: "Why is withdrawal on changing jobs discouraged?", a: "Transferring the balance keeps service continuous and retirement savings intact. Withdrawing breaks that continuity and may bring tax that a transfer would have avoided." },
  ],
  "flexible-benefit-plan": [
    { q: "How does a flexible benefit plan work in payroll?", a: "A part of the CTC is set aside as a flexi pool, and the employee chooses how to allocate it among the heads the employer offers. Unclaimed amounts are usually paid out as taxable salary at a set point in the year." },
    { q: "Do employees need to submit proofs for flexi benefit claims?", a: "For reimbursement heads, yes. Bills or declarations are needed for the amount to be treated as a reimbursement rather than taxable salary." },
    { q: "Does a flexible benefit plan help under the new tax regime?", a: "Many exemptions that make flexi plans attractive are not available under the new regime, so the benefit depends on the regime the employee chooses. Review the plan each year against current tax rules." },
    { q: "Does the flexi pool affect PF?", a: "Flexi components are normally kept outside the PF wage, but the split between basic and allowances should still be reviewed so that the PF wage is not set artificially low." },
  ],
  esop: [
    { q: "What is the difference between grant, vesting and exercise?", a: "The grant is the promise of options, vesting is when the right to exercise them is earned, and exercise is when the employee pays the exercise price and receives the shares." },
    { q: "How are ESOPs taxed in India?", a: "Broadly, the difference between fair market value and the exercise price is taxed as a perquisite through payroll at exercise, and any later gain on sale is taxed as capital gains. Some eligible start-ups may defer the tax; check the current rules." },
    { q: "What happens to unvested ESOPs when an employee resigns?", a: "Unvested options usually lapse. Vested options normally have to be exercised within a window set by the scheme, after which they also lapse." },
    { q: "Is there a minimum vesting period for ESOPs?", a: "Company law rules generally require a minimum gap between grant and vesting, commonly one year. Confirm the current requirement and any exceptions with your company secretary." },
  ],
  "joining-bonus": [
    { q: "Is a joining bonus taxable?", a: "Yes. It is part of salary income and is taxed through payroll in the month it is paid, like other earnings." },
    { q: "Does a joining bonus attract PF?", a: "A one-time joining bonus is generally kept outside the PF wage, which is basic plus dearness allowance. Check how the offer letter describes it, since the label alone does not decide the treatment." },
    { q: "Should a joining bonus be paid on day one?", a: "Many employers pay it with the first salary or after probation, with a written clawback if the employee leaves within a set period. Paying later reduces the need to recover it." },
    { q: "How is a joining bonus recovered if the employee leaves early?", a: "Through the clawback clause, usually by adjusting it against dues in the full and final settlement. The recovery can be pro-rated by the time served if the clause says so." },
  ],
  "retention-bonus": [
    { q: "How is a retention bonus structured?", a: "A fixed amount is promised for staying until a set date or event, such as a merger completing or a project going live. It may be paid in one sum or in instalments." },
    { q: "What is the difference between a retention bonus and a joining bonus?", a: "A joining bonus rewards accepting the offer and is paid at the start; a retention bonus rewards staying and is paid at the end of the period." },
    { q: "Is a retention bonus paid if the employee is terminated?", a: "It depends on the agreement. Many say the bonus is still paid if the employment ends without cause, but not if the employee resigns or is dismissed for misconduct." },
    { q: "How should a retention bonus be documented?", a: "In a written letter that states the amount, the date or condition, what happens on resignation or termination, and that it is taxable salary when paid." },
  ],
  clawback: [
    { q: "What can be recovered under a clawback clause?", a: "Commonly a joining bonus, relocation support or the cost of sponsored training. The clause should name exactly what is recoverable and for how long." },
    { q: "Should a clawback be pro-rated?", a: "A pro-rated clawback, where the recoverable amount reduces with time served, is easier to defend as reasonable than a flat full recovery." },
    { q: "Can a clawback be deducted from monthly salary?", a: "Deductions from wages are limited by wage law for covered employees, so recovery is usually made against the full and final settlement, with the employee's written agreement on file." },
    { q: "What if the final settlement is not enough to cover the clawback?", a: "The employer has to ask the employee to repay the balance, and enforcement then depends on the contract and civil remedies. Many employers keep amounts modest for this reason." },
  ],
  "garden-leave": [
    { q: "Is an employee on garden leave paid in full?", a: "Yes. They remain an employee until the last working day, so salary, PF and other statutory contributions continue as normal." },
    { q: "How is garden leave different from notice pay?", a: "With garden leave the employment continues through the notice period while the employee stays away. With notice pay the employment ends early and the unserved period is paid out." },
    { q: "Can an employee on garden leave join another company?", a: "Not while still employed, because the contract and its duties continue until the last day. They can join only after the relieving date." },
    { q: "Does garden leave need a contract clause?", a: "It is safest to have one. Without it, telling someone to stay away still means paying them in full and keeping all other terms the same." },
  ],
  moonlighting: [
    { q: "Is moonlighting illegal in India?", a: "There is no general ban, but some statutes restrict it, for example the Factories Act 1948, s.60, for adult workers in factories. In most cases the employment contract and standing orders decide whether it is allowed." },
    { q: "How do employers find out about moonlighting?", a: "Overlapping PF contributions under the same UAN from two employers are a common signal. Conflicting attendance records and declarations can also reveal it." },
    { q: "What should a moonlighting policy say?", a: "Whether outside work needs approval, what is never allowed, such as working for a competitor or using company resources, and how disclosure is made and reviewed." },
    { q: "Is freelancing on weekends moonlighting?", a: "It counts as outside paid work. Whether it breaches the contract depends on the exclusivity clause and whether the work conflicts with the employer's interests." },
  ],
  "short-leave": [
    { q: "How many short leaves are usually allowed?", a: "Policies commonly allow a small number of instances or hours a month, for example two short leaves of up to two hours each. The limit is set by the employer's policy." },
    { q: "How is excess short leave treated?", a: "Beyond the monthly limit it is usually converted to a half-day leave, or to loss of pay if no leave balance is available." },
    { q: "Is short leave the same as a late mark?", a: "No. Short leave is approved in advance; unapproved late arrivals are usually handled under a separate late-mark rule, which may convert repeated instances into leave deductions." },
    { q: "Does short leave carry forward?", a: "Generally not. It is a monthly allowance that resets each month and is not encashed." },
  ],
  "relocation-allowance": [
    { q: "What does a relocation allowance usually cover?", a: "Travel for the employee and family, moving household goods, temporary accommodation and sometimes a lump sum for setting-up costs. The policy should say which items are reimbursed and which are paid as a fixed amount." },
    { q: "Is relocation allowance taxable?", a: "A fixed lump sum is generally taxed as salary, while reimbursement of actual moving costs against bills may be treated differently. Confirm the current treatment before setting up the payroll head." },
    { q: "Is relocation allowance part of CTC?", a: "Practice varies. Many employers treat it as a one-time cost outside CTC, but it should be stated clearly in the offer or transfer letter." },
    { q: "Can relocation costs be recovered if the employee leaves?", a: "Yes, if a written clawback clause provides for it, usually pro-rated over a period such as a year and adjusted in the full and final settlement." },
  ],
  "conveyance-allowance": [
    { q: "Is conveyance allowance taxable?", a: "A fixed conveyance allowance for commuting is generally taxable as salary under current rules. Amounts for official travel reimbursed against actuals are treated differently, so check the current position." },
    { q: "How is conveyance allowance different from reimbursement?", a: "An allowance is a fixed sum paid every month regardless of spend. A reimbursement pays back actual costs incurred on official work, against bills or claims." },
    { q: "Does conveyance allowance count for PF?", a: "As an allowance outside basic and dearness allowance it is generally excluded from the PF wage. Under the labour codes, in force since 21 November 2025, allowances above 50% of total pay are added back to wages, so review the structure." },
    { q: "Should conveyance allowance be pro-rated for LOP?", a: "If it is a fixed monthly allowance, it is usually reduced in proportion to loss-of-pay days, like other fixed components. The policy should state this." },
  ],
  "payroll-audit": [
    { q: "What does a payroll audit check?", a: "That everyone paid is a real, current employee, that pay matches approved salaries and inputs, that deductions and statutory contributions are correct, and that payments were filed and deposited on time." },
    { q: "How often should a payroll audit be done?", a: "A light review each month before release, with a fuller audit once or twice a year or on any change of payroll provider or system." },
    { q: "What are common payroll audit findings?", a: "Leavers still on the payroll, PF or ESI computed on the wrong wage base, missed arrears, LOP not applied, and differences between the payroll register and the bank file." },
    { q: "What records does a payroll audit need?", a: "The salary master and revision letters, attendance and leave records, the payroll register, bank transfer files, statutory challans and returns, and approvals for one-off payments." },
  ],
  "org-chart": [
    { q: "What information should an org chart show?", a: "At minimum the name, role and reporting line of each person. Many also show department, location and open positions." },
    { q: "How often should an org chart be updated?", a: "Whenever reporting lines change, which is easiest if it is generated from the employee records rather than drawn by hand." },
    { q: "How do org charts show dotted-line reporting?", a: "Usually as a secondary line to a functional manager alongside the solid line to the main manager. Keep the solid line as the one used for approvals and appraisals." },
    { q: "Should vacancies appear on an org chart?", a: "Showing approved open positions helps with workforce planning, as long as they are clearly marked as vacant." },
  ],
  "pay-grade": [
    { q: "How is a pay grade different from a job title?", a: "A title describes the role, while the grade places it in a salary band. Several titles of similar weight can share one grade." },
    { q: "What is a pay band within a grade?", a: "The minimum, midpoint and maximum salary for the grade. Where a person sits in the band reflects experience and performance." },
    { q: "What should happen when someone reaches the top of their grade?", a: "Further increments slow or stop unless they move to a higher grade. Some employers pay a one-off lump sum instead of a raise to the base." },
    { q: "How are pay grades set?", a: "Roles are evaluated for their size and complexity, grouped into levels, and each level is given a band based on salary benchmarks and internal budget." },
  ],
  "cost-centre": [
    { q: "How are employees mapped to cost centres?", a: "Each employee is assigned to one cost centre in their record, or split across several by percentage where they work for more than one unit." },
    { q: "Why does payroll need cost centres?", a: "So salary, employer PF, ESI and other costs post to the right department or project in the books, rather than to one general salary account." },
    { q: "What is the difference between a cost centre and a department?", a: "A department is an organisational unit; a cost centre is an accounting unit. They often match but need not, for example where one department runs several projects." },
    { q: "What happens when an employee moves cost centre mid-month?", a: "The cost is usually split by days in each cost centre, or the whole month is charged to the new one, as the finance policy decides." },
  ],
  "hr-audit": [
    { q: "What does an HR audit cover?", a: "Statutory compliance such as registers, returns and registrations, employee files and documents, policies and how they are applied, and HR processes such as hiring and exit." },
    { q: "How is an HR audit different from a payroll audit?", a: "A payroll audit checks pay and deductions; an HR audit is wider, covering employment documents, policies, registers and practices as well as payroll compliance." },
    { q: "How often should an HR audit be done?", a: "Commonly once a year, and before events such as fundraising, an acquisition or a major inspection." },
    { q: "What are common HR audit gaps?", a: "Missing appointment letters, unsigned policies, outdated registers, registrations not done in a new state, and exits without a documented settlement." },
  ],
  "employee-lifecycle": [
    { q: "What are the stages of the employee lifecycle?", a: "Usually recruitment, onboarding, development, performance and retention, and separation. Some models add alumni relations after exit." },
    { q: "Why map the employee lifecycle?", a: "It shows where records are created, where handovers happen and where employees have a poor experience, so process gaps can be fixed stage by stage." },
    { q: "Which lifecycle stages carry the most compliance work?", a: "Onboarding and exit. Joining needs PF, ESI and tax declarations; exit needs settlement, relieving and statutory updates such as the PF exit date." },
    { q: "How does the employee lifecycle connect to HR metrics?", a: "Each stage has its own measures, such as time to hire for recruitment, early attrition for onboarding and retention rate later on." },
  ],
  "workforce-planning": [
    { q: "What are the steps in workforce planning?", a: "Understand the current workforce, forecast what the business will need, identify the gap, and plan how to close it through hiring, development, redeployment or restructuring." },
    { q: "How is workforce planning different from headcount budgeting?", a: "Budgeting fixes how many people and how much cost for the year. Workforce planning also asks which skills are needed and how to get them over a longer horizon." },
    { q: "What data does workforce planning need?", a: "Headcount by role and location, attrition and retirement patterns, time to hire, and the business plan the forecast is based on." },
    { q: "How far ahead should workforce planning look?", a: "Typically one year in detail and two to three years at a high level, reviewed whenever the business plan changes." },
  ],
  "gig-workers": [
    { q: "Are gig workers employees?", a: "Generally no. They work on tasks or engagements outside a traditional employment relationship, so employee statutes such as EPF and ESI do not usually apply to them in the same way." },
    { q: "How does the Code on Social Security treat gig workers?", a: "It recognises gig and platform workers and provides for social security schemes for them, with aggregators contributing under schemes notified under the Code, which has been in force since 21 November 2025. Check the current schemes and rules before relying on any obligation." },
    { q: "How are gig workers paid?", a: "Usually through accounts payable against invoices or task records, not through payroll. Tax deduction at source on such payments follows the rules for contract or professional payments." },
    { q: "What is the risk of misclassifying gig workers?", a: "If the engagement looks like employment, with fixed hours, control and integration, the worker may be treated as an employee, bringing back statutory dues and benefits." },
  ],
};

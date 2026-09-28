import type { PageFaq } from "./types";

/**
 * Page-level FAQs for /resources/white-papers/[slug], keyed by paper slug.
 * Every answer restates what the paper itself says in lib/papers.ts.
 */
export const paperFaqs: Record<string, PageFaq[]> = {
  "chain-of-custody": [
    {
      q: "Where does the time in an Indian payroll cycle actually go?",
      a: "Mostly into establishing what happened rather than calculating. The paper describes reconciling four separate records of the same month: the biometric log, the leave tracker, the reporting manager's recollection and the payroll sheet.",
    },
    {
      q: "What are the eight handovers in a monthly payroll?",
      a: "Attendance settles into a ledger, leave and comp-off resolve, payable days derive, gross assembles, statutory heads evaluate, variance review, bank payment batch, and filings and payslips issue.",
    },
    {
      q: "Which payroll steps still need a person in an integrated system?",
      a: "The last three: variance review against the prior month, which needs judgement; the bank payment batch, which needs authorisation; and filings and payslips, which need submission. Steps one to five need nothing from the payroll team.",
    },
    {
      q: "Why is typing payable days into a payroll sheet a problem?",
      a: "Once payable days becomes a typed value, its provenance is lost. A query raised six months later can then only be answered by re-deriving it from records that have since moved on.",
    },
    {
      q: "What does each statutory head need beyond a rate?",
      a: "An applicability test, a base, a rate and a ceiling, each of which can move independently. Treating a head as a spreadsheet column captures the rate and loses the other three.",
    },
    {
      q: "Why is ESI the statutory head most often implemented incorrectly?",
      a: "Because coverage runs on contribution periods, not a monthly test. A system that re-tests every month drops and re-adds employees as overtime moves the wage base, causing under-deduction, over-deduction and disrupted benefit entitlement.",
    },
    {
      q: "What outputs should a completed payroll run produce?",
      a: "A NEFT, RTGS or IMPS bank batch file for a corporate banking portal, the EPFO ECR file, the ESIC contribution return and challan report, state-wise Professional Tax working, the LWF statement where due, and payslips in each employee's self-service login. HRMagix does not hold or move funds itself.",
    },
    {
      q: "How can I test whether a payroll system can reconstruct a past run?",
      a: "Pick an employee who received a mid-year increment and re-run a month before it. If the output uses the post-increment structure, the system stores a current state rather than an effective-dated history.",
    },
  ],
  "state-by-state": [
    {
      q: "What are the three axes of multi-state payroll configuration?",
      a: "Legal entity, work location and grade. Entity governs runs, registrations, filings and bank batches; location governs Professional Tax, LWF, leave quotas, holidays and shifts; grade governs approvals, leave scheme, overtime eligibility and notice period.",
    },
    {
      q: "Why does the same salary get a different Professional Tax deduction in two offices?",
      a: "Professional Tax is levied by states, each with its own wage bands, amounts, exemptions and remittance calendar. There is no national schedule, and registration is per location rather than per company.",
    },
    {
      q: "Which states does HRMagix configure Professional Tax rule sets for?",
      a: "Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat and West Bengal. The current schedule for any of them should still be confirmed against the state's notification or with your advisers before filing.",
    },
    {
      q: "What happens to Professional Tax when an employee transfers states mid-year?",
      a: "Applicability follows the work location on the employee record, so the transfer changes the position from the transfer date without rewriting earlier months.",
    },
    {
      q: "Can one national leave scheme work across several states?",
      a: "Usually not. Minimum entitlements come from each state's Shops and Establishments Act, or the Factories Act for covered establishments, so the paper recommends one policy with per-location quotas and holiday calendars.",
    },
    {
      q: "How do you get a consolidated view without merging statutory filings?",
      a: "Keep payroll runs distinct at entity level, because filing is per entity, and let reporting aggregate across them. Multi-entity structures sit under one login, with role-based permissions deciding who sees which entity.",
    },
    {
      q: "Why is Labour Welfare Fund so often missed?",
      a: "It is deducted half-yearly in some states and annually in others, on state-set dates that do not align with the monthly payroll. The paper recommends applying it inside the payroll run against the employee's work location.",
    },
    {
      q: "What reports does a multi-state company need from payroll?",
      a: "Consolidated headcount, department distribution and payroll cost for the board; entity-level statutory totals that reconcile to filings for finance; and location-level overtime and attendance for each site lead.",
    },
  ],
  "exceptions-engine": [
    {
      q: "Which day does a night shift that crosses midnight belong to?",
      a: "The day it began. A punch-in at 22:40 on Tuesday and punch-out at 06:50 on Wednesday is one Tuesday shift; filing punches by calendar date creates two false exceptions.",
    },
    {
      q: "Why not have supervisors tag each punch with its shift?",
      a: "With three rotating shifts across several hundred operators, that means thousands of tagging decisions a month. The paper argues that inference from the shift definition and punch timestamp is the only approach that scales.",
    },
    {
      q: "What goes wrong downstream when a shift is misassigned?",
      a: "Late marks, night differentials, overtime, loss of pay and ESI applicability can all be affected, because overtime moves the wage base and the wage base moves the ESI test.",
    },
    {
      q: "How can overtime and night differentials be made less disputed?",
      a: "By deriving them from the shift definition and the employee's eligibility on the record, against the same attendance ledger, so the system can show the working rather than a figure transcribed from a register.",
    },
    {
      q: "What properties should compensatory off have?",
      a: "A credit event, a balance, a consumption rule, an expiry and a settlement position at exit. Expiry is the one most often missing.",
    },
    {
      q: "How can a plant check for untracked comp-off obligations?",
      a: "Pull last quarter's attendance on weekly offs and declared holidays and match it against comp-off credits. Anything worked but not credited is an obligation still carried with no record.",
    },
    {
      q: "Do multiple plants need separate payroll systems?",
      a: "No. Shift patterns, grace periods, weekly offs, holiday calendars and leave schemes are configured per location while the organisation reports and files as one.",
    },
    {
      q: "Does the existing biometric hardware need replacing?",
      a: "No. Devices from eSSL, Matrix, Realtime and ZKTeco push into the same ledger over a secure API or a local sync service, so the capture layer stays.",
    },
  ],
  "policy-vacuum": [
    {
      q: "When does a growing company start needing written HR policies?",
      a: "The paper places the failure point at around forty people, when questions that were previously improvised start getting different answers depending on who was asked and when.",
    },
    {
      q: "When do EPF, ESI, Professional Tax and TDS obligations begin?",
      a: "Not at a threshold anyone notices passing. The paper advises setting up correct identifiers and rates from the first employee, because retrofitting them across months of history is a genuine project with genuine exposure.",
    },
    {
      q: "What employee details should be collected at joining?",
      a: "PAN, Aadhaar, UAN and bank details, collected at joining rather than at the first payroll run.",
    },
    {
      q: "In what order should a small company write its HR policies?",
      a: "First statutory registrations and identifiers, then the leave scheme, then notice period and probation, then remote working. Performance cycles, promotion criteria and succession can wait.",
    },
    {
      q: "What HR processes can a fifty-person company skip?",
      a: "Succession planning, a nine-box talent matrix, a formal performance improvement process and a structured career framework. Adopted early, they produce ceremony rather than clarity.",
    },
    {
      q: "How should leave balances be maintained?",
      a: "Computed from an accrual rule rather than kept by hand, so the employee, the approving manager and payroll all see the same number, with any sandwich-rule outcome visible when applying.",
    },
    {
      q: "Why does policy acknowledgement need to be versioned?",
      a: "Because an acceptance of an earlier version should not silently stand in for new wording. Publishing a new version should re-open acknowledgement for everyone it applies to.",
    },
    {
      q: "Does HRMagix provide workplace policy templates?",
      a: "Yes. Twenty-five workplace policy templates ship in the Documents module; the employer writes its own rules into them, issues them, and the platform records who accepted which version and when.",
    },
  ],
  "self-service-arithmetic": [
    {
      q: "How can an HR team measure whether self-service is worth rolling out?",
      a: "Log every inbound request for a week and sort each into lookups that need access and judgement calls that need a person. The paper notes the volume sits in the lookup column.",
    },
    {
      q: "Which HR requests are lookups rather than judgement?",
      a: "Examples include leave balances, a past payslip, a UAN, a regularisation's status and the holiday list for a location. Unpaid leave requests, rating disagreements, grievances and exits need a person.",
    },
    {
      q: "What can employees complete on their own through self-service?",
      a: "Apply for leave against an accrual-accurate balance, check live attendance, raise and track regularisations, download any payslip ever issued, retrieve documents and acknowledgements, and handle year-end tax declarations and Form 16 Part B.",
    },
    {
      q: "What is the most common mistake when launching employee self-service?",
      a: "Not stating what it does not cover. Employees who try a judgement question through the portal and fail conclude it does not work and revert to email for everything.",
    },
    {
      q: "What do managers need from a self-service portal?",
      a: "Leave and regularisation approvals in one queue, a live team presence view, 1-on-1 agendas with action items and goal progress updates, with grade-based routing and escalation when a manager is unreachable.",
    },
    {
      q: "Why is mobile treated as the primary self-service channel?",
      a: "For field staff, plant operators, drivers and site engineers, a phone is the entire interface, so a portal that is only adequate on mobile serves most of that workforce badly.",
    },
    {
      q: "What can employees do in the HRMagix mobile app?",
      a: "Punch in with GPS geo-fencing and optional selfie validation, apply for leave and check balances, view payslips and see the holiday calendar. Web and app are the same account, with access governed by role.",
    },
    {
      q: "How does self-service change the year-end tax declaration cycle?",
      a: "Employees compare both tax regimes in their own login, declare and upload proof for HR verification as a workflow, and monthly deductions follow the verified position. Form 24Q and Form 16 Part B come from the same data.",
    },
  ],
};

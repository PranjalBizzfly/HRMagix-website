/**
 * Per-policy detail pages.
 *
 * WHAT THIS FILE IS ALLOWED TO SAY, AND WHAT IT IS NOT.
 *
 * The supplied policy schedule gives twenty-five rows: a serial number, a policy
 * code, the department (HR), the policy name, and a PDF filename. It does not
 * contain the body of any policy. The PDFs themselves were not supplied.
 *
 * So each entry below states four things that follow from the policy's *name
 * and subject* and nothing more:
 *
 *   `purpose`   — why an employer has a policy on this subject at all.
 *   `appliesTo` — which population it governs.
 *   `defines`   — the decisions the employer must write into their own copy.
 *                 These are stated as QUESTIONS, never as answers, because the
 *                 answers are the employer's and are not in the source.
 *   `evidence`  — what HRMagix records so the policy can be proven in operation.
 *
 * There is no `rules` field, and there must never be one. A notice period, a
 * grace window, a leave quota or an increment cycle stated here would be an
 * invented rule attributed to a real employer's policy document.
 *
 * Statutory anchors are cited only where the policy name itself names a statute
 * (gratuity, maternity, sexual harassment), and are cited as law rather than as
 * the content of the employer's document.
 */

export type PolicyDetail = {
  /** Matches PolicyEntry.code in lib/policies.ts. */
  code: string;
  /** URL segment under /policy/workplace-policies/. */
  slug: string;
  /** Why this policy exists. Two or three sentences. */
  purpose: string[];
  /** Who it governs. */
  appliesTo: string;
  /** The decisions the employer writes in — stated as open questions. */
  defines: string[];
  /** What the platform records so the policy is provable. */
  evidence: string[];
  /** Where the policy names a statute, the statute is named here. */
  statute?: string;
  /** Related policies in the same register, by code. */
  seeAlso?: string[];
};

export const policyDetails: PolicyDetail[] = [
  /* ---------------- Conduct ---------------- */
  {
    code: "HRMAGIXCOC",
    slug: "code-of-conduct",
    purpose: [
      "A code of conduct is the document every other policy in the register is subordinate to. It states the standard of professional behaviour expected of everyone, the integrity expected in dealing with colleagues, customers and money, and the care expected in the use of company property and information.",
      "Its practical value is that it gives every later policy a footing. A specific policy on harassment or absconding is easier to apply consistently when there is a general standard it refers back to.",
    ],
    appliesTo: "Every employee, at every grade and location, from the date of joining.",
    defines: [
      "What standard of behaviour the organisation holds itself to, in its own words",
      "How company property, systems and information may and may not be used",
      "What conflicts of interest must be declared, and to whom",
      "How a breach is raised, investigated and concluded",
    ],
    evidence: [
      "Issued to every employee at onboarding and acknowledged per person",
      "Acknowledgement re-opened whenever the text is revised",
      "The acknowledgement record survives the employee's exit",
    ],
    seeAlso: ["HRMAGIX007", "HRMAGIX009", "HRMAGIX015"],
  },
  {
    code: "HRMAGIX007",
    slug: "workplace-harassment",
    purpose: [
      "This policy defines harassment in the workplace, states the obligation it places on every employee, and, the part that matters most in practice, sets out the route by which someone affected can raise it.",
      "A harassment policy that only defines the offence is half a policy. The reporting route, the confidentiality attached to it, and the assurance against retaliation are what make it usable by the person who needs it.",
    ],
    appliesTo:
      "Every employee, and conduct occurring at the workplace, at work-related events, and in work-related communication.",
    defines: [
      "What conduct the organisation treats as harassment",
      "Who a complaint is made to, and what alternative route exists if that person is the subject",
      "What confidentiality attaches to a complaint and an investigation",
      "What protection against retaliation is guaranteed",
    ],
    evidence: [
      "Policy issue and acknowledgement tracked per employee per version",
      "Document vault holds the current text and its revision history",
    ],
    seeAlso: ["HRMAGIX009", "HRMAGIX013", "HRMAGIX015"],
  },
  {
    code: "HRMAGIX009",
    slug: "sexual-harassment",
    purpose: [
      "This is the policy an Indian employer is statutorily required to have. It sets out the prevention and redressal obligations that fall on the employer, the complaints mechanism available to any woman at the workplace, and the confidentiality that attaches to it.",
      "It sits separately from the general workplace harassment policy because its obligations, timelines and complaints machinery are prescribed by statute rather than chosen by the employer.",
    ],
    appliesTo:
      "Every person at the workplace, including employees, and, as the statute requires, women engaged at the workplace regardless of employment status.",
    statute:
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 prescribes the employer's obligations, the constitution of the Internal Committee and the redressal process. The employer's policy document must reflect those requirements.",
    defines: [
      "The constitution of the Internal Committee, and who currently sits on it",
      "How a complaint is filed and within what period",
      "How enquiry proceedings are conducted and concluded",
      "What interim relief is available while an enquiry is pending",
    ],
    evidence: [
      "Policy issue and acknowledgement tracked per employee per version",
      "Committee membership changes reflected through document versioning",
    ],
    seeAlso: ["HRMAGIX007", "HRMAGIX011"],
  },
  {
    code: "HRMAGIX013",
    slug: "workplace-violence",
    purpose: [
      "This policy names the conduct, threat, intimidation, physical harm, that the organisation will not tolerate under any circumstance, and sets the immediate escalation path when it occurs.",
      "Unlike most policies in the register, its defining feature is speed. It exists so that nobody has to work out who to call while an incident is happening.",
    ],
    appliesTo: "Every employee, and conduct at any company premises or work-related location.",
    defines: [
      "What conduct is prohibited outright",
      "Who is contacted immediately, and how, when an incident occurs",
      "When an incident is escalated outside the organisation",
      "What action follows a substantiated incident",
    ],
    evidence: [
      "Policy issue and acknowledgement tracked per employee",
      "Current escalation contacts held in the document vault and versioned",
    ],
    seeAlso: ["HRMAGIX007", "HRMAGIXCOC"],
  },
  {
    code: "HRMAGIX011",
    slug: "equal-opportunity",
    purpose: [
      "This policy states the organisation's commitment to non-discrimination across the decisions where discrimination actually occurs: hiring, evaluation, promotion and remuneration.",
      "A commitment stated only at hiring is incomplete. The value of naming all four decision points is that it makes the commitment checkable at each of them.",
    ],
    appliesTo: "Every employment decision, and every candidate and employee those decisions touch.",
    defines: [
      "The grounds on which discrimination is prohibited",
      "How the commitment applies at each decision point, hiring, evaluation, promotion, pay",
      "How a concern about a specific decision is raised",
    ],
    evidence: [
      "Acknowledgement tracked per employee",
      "Grade, designation and compensation changes are effective-dated on the employee record, so a decision can be reconstructed with the position that applied at the time",
    ],
    seeAlso: ["HRMAGIX012", "HRMAGIX022", "HRMAGIX017"],
  },
  {
    code: "HRMAGIX015",
    slug: "open-door",
    purpose: [
      "An open door policy gives an employee a route to raise a concern beyond their immediate reporting line, and attaches an assurance to using it.",
      "It exists because the ordinary escalation path fails in exactly the situation where escalation matters most, when the concern is about the person it would ordinarily be raised with.",
    ],
    appliesTo: "Every employee, at every grade.",
    defines: [
      "Who an employee may approach beyond their reporting manager",
      "What assurance attaches to raising a concern this way",
      "What response the employee can expect, and in what timeframe",
    ],
    evidence: [
      "Policy issue and acknowledgement tracked per employee",
      "1-on-1 agendas and notes are recorded in the platform where the conversation continues there",
    ],
    seeAlso: ["HRMAGIXCOC", "HRMAGIX007"],
  },

  /* ---------------- Attendance, time and place ---------------- */
  {
    code: "HRMAGIX002",
    slug: "attendance",
    purpose: [
      "The attendance policy is the document payroll ultimately depends on. It states how presence is recorded, what counts as a full and a half working day, and how a missed or disputed record is corrected.",
      "Almost every payroll dispute in an Indian company traces back to an attendance policy that was either unwritten or applied inconsistently. This is the document that ends that.",
    ],
    appliesTo:
      "Every employee whose pay depends on days present, in practice, everyone, since loss of pay applies at every grade.",
    defines: [
      "Which capture methods are valid for which population, biometric, mobile, browser",
      "What constitutes a full working day and a half day",
      "How a missed or disputed punch is regularised, and who approves it",
      "By what date in the month regularisations must be raised",
    ],
    evidence: [
      "Biometric, mobile and browser punches settle into one attendance ledger",
      "Regularisation requests carry an approver and a timestamp",
      "The loss-of-pay register is derived from the same ledger the presence board is drawn from",
    ],
    seeAlso: ["HRMAGIX001", "HRMAGIX003", "HRMAGIX020"],
  },
  {
    code: "HRMAGIX001",
    slug: "late-coming",
    purpose: [
      "This policy states how late arrival is measured against the shift start, how a grace allowance operates where the employer grants one, and what follows from repeated lateness.",
      "Its purpose is consistency rather than punishment. Lateness handled by a written rule applies identically to everyone; lateness handled by a manager's judgement does not, and is noticed.",
    ],
    appliesTo: "Employees working to a defined shift or start time.",
    defines: [
      "How lateness is measured, and from which reference time",
      "Whether a grace allowance is granted, and of what length",
      "Over what period late marks accumulate",
      "What consequence attaches at each threshold",
    ],
    evidence: [
      "Grace periods are configured per policy and applied automatically to every punch",
      "Late marks accumulate against the configured rule rather than a manager's recollection",
      "Auto shift detection assigns each punch to the correct shift, including across midnight",
    ],
    seeAlso: ["HRMAGIX002", "HRMAGIX021"],
  },
  {
    code: "HRMAGIX003",
    slug: "leave",
    purpose: [
      "The leave policy is the document every employee reads. It sets out the leave categories available, how entitlement accrues, how applications are approved, and what happens to a balance at the end of the year.",
      "Leave entitlements in India sit under state Shops and Establishments legislation and, for covered factories, the Factories Act. An employer operating in more than one state may therefore need more than one set of quotas under one policy.",
    ],
    appliesTo: "Every employee, with quotas that may differ by location and grade.",
    statute:
      "Minimum leave entitlements are set by the applicable state Shops and Establishments Act, or the Factories Act for covered establishments. An employer's policy may be more generous than the statutory floor but not less.",
    defines: [
      "Which leave categories exist, earned or privilege, casual, sick, and any others",
      "How entitlement accrues, and from what date",
      "Whether unused leave carries forward, up to what cap, and whether it is encashable",
      "How the sandwich rule is applied, if it is applied",
      "Who approves, and whether a second level is required",
    ],
    evidence: [
      "Balances are computed from the accrual rule rather than stored, so employee, manager and payroll see the same number",
      "Approvals route on a configured hierarchy and escalate rather than stalling",
      "Unpaid days flow directly into the month's payable-days figure",
    ],
    seeAlso: ["HRMAGIX018", "HRMAGIX002"],
  },
  {
    code: "HRMAGIX018",
    slug: "maternity-leave",
    purpose: [
      "This policy sets out maternity entitlement, how it is notified and approved, and how the period of absence is treated in relation to continuous service and benefits.",
      "It is held separately from the general leave policy because its entitlement is statutory rather than discretionary, and because the treatment of service during the absence has consequences that ordinary leave does not.",
    ],
    appliesTo: "Employees entitled under the applicable statute and the employer's own policy.",
    statute:
      "The Maternity Benefit Act, 1961 (as amended) prescribes the minimum entitlement, notice and benefit obligations. The employer's policy document must reflect at least those requirements.",
    defines: [
      "The entitlement the employer provides, and how it relates to the statutory minimum",
      "How and when the employee notifies the organisation",
      "How the period is treated for continuous service, accrual and benefits",
      "What arrangements apply on return",
    ],
    evidence: [
      "Configured as its own leave category with its own entitlement and approval path",
      "Tracked against the employee record so continuous service is computed correctly for gratuity",
    ],
    seeAlso: ["HRMAGIX003", "HRMAGIX016"],
  },
  {
    code: "HRMAGIX005",
    slug: "work-from-home",
    purpose: [
      "This policy states when remote working is available, how it is requested and approved, and which obligations continue to apply while an employee is working away from an office.",
      "The clause that does the real work is the last one. Most remote-working disputes are not about whether remote work is allowed, but about which normal obligations people assumed were suspended.",
    ],
    appliesTo: "Employees in roles the employer designates as eligible for remote working.",
    defines: [
      "Which roles or grades are eligible, and on what basis",
      "How a remote day or period is requested and approved",
      "Which obligations continue to apply unchanged, availability, confidentiality, attendance recording",
      "What equipment and connectivity arrangements apply",
    ],
    evidence: [
      "Browser and mobile check-in record attendance without a geofence where none applies",
      "Approved remote days are visible on the shared team calendar",
    ],
    seeAlso: ["HRMAGIX023", "HRMAGIX024", "HRMAGIX002"],
  },
  {
    code: "HRMAGIX023",
    slug: "work-from-home-monitoring",
    purpose: [
      "This policy states what is recorded while an employee works remotely, how that record is used, and, importantly, the limits placed on it.",
      "A monitoring policy that only describes what is captured invites suspicion. Stating the limits and the permitted uses is what makes remote working workable for both sides.",
    ],
    appliesTo: "Employees working remotely under the work-from-home policy.",
    defines: [
      "What is recorded during remote working, and what is not",
      "Who may access those records, and for what purposes",
      "How long records are retained",
      "What the records will not be used for",
    ],
    evidence: [
      "Attendance capture is scoped to establishing payable days and reconciling leave",
      "Access to attendance and location data is governed by role-based permissions",
      "Geo-fencing and selfie validation apply only where the employer configures them for a specific site",
    ],
    seeAlso: ["HRMAGIX005", "HRMAGIX020", "HRMAGIX024"],
  },
  {
    code: "HRMAGIX024",
    slug: "work-from-home-exclusivity",
    purpose: [
      "This policy states the expectation that time recorded as working is worked exclusively for the employer, and sets out how concurrent engagements are treated.",
      "It exists because remote working removes the incidental visibility an office provides, and the expectation therefore has to be written down rather than assumed.",
    ],
    appliesTo: "Employees working remotely, and any employee with an outside engagement.",
    defines: [
      "What exclusivity means in the employer's terms",
      "Whether outside engagements are permitted, and under what declaration or approval",
      "How a conflict is identified and resolved",
    ],
    evidence: [
      "Acknowledgement tracked per employee per version",
      "Declarations filed against the employee record in the document vault",
    ],
    seeAlso: ["HRMAGIX005", "HRMAGIX023", "HRMAGIXCOC"],
  },
  {
    code: "HRMAGIX020",
    slug: "time-and-work-tracking-software",
    purpose: [
      "This policy sets out the employee's obligations in relation to the systems used to record time and work, and how the resulting records are treated.",
      "Its subject is the integrity of the record itself: that punches are the employee's own, that regularisations are truthful, and that the resulting data is what payroll relies on.",
    ],
    appliesTo: "Every employee whose time is recorded in a company system.",
    defines: [
      "Which systems are the systems of record",
      "The employee's obligation to record accurately and not on another's behalf",
      "How the records are used, and by whom",
      "What follows from a falsified record",
    ],
    evidence: [
      "Every punch carries its source, biometric device, mobile app or browser",
      "Mobile check-ins can carry location tagging and selfie validation where configured",
      "Regularisations record who requested and who approved",
    ],
    seeAlso: ["HRMAGIX002", "HRMAGIX023"],
  },

  /* ---------------- Performance, progression and pay ---------------- */
  {
    code: "HRMAGIX014",
    slug: "probationary-period",
    purpose: [
      "This policy states the purpose and duration of probation, how performance is assessed during it, and how confirmation, or its refusal, is communicated.",
      "The part most often missing is the last one. A probation period that ends without an explicit decision leaves both sides unclear about the employee's status, which becomes a problem precisely when it matters.",
    ],
    appliesTo: "Employees serving an initial probationary period.",
    defines: [
      "The length of probation, and whether it may be extended",
      "How performance is assessed during the period, and by whom",
      "How and by when confirmation is communicated",
      "What terms differ during probation, notice, leave, benefits",
    ],
    evidence: [
      "Probation end dates surface to the reporting manager ahead of time rather than after",
      "Confirmation is an effective-dated change on the employee record, so downstream terms follow automatically",
    ],
    seeAlso: ["HRMAGIX017", "HRMAGIX008"],
  },
  {
    code: "HRMAGIX017",
    slug: "annual-performance-review",
    purpose: [
      "This policy sets out the review cycle, who participates in an assessment, how ratings are calibrated across managers, and how outcomes are recorded and communicated.",
      "Calibration is the clause that distinguishes a working review policy from a ceremonial one. Without it, a rating means something different under each manager, and every downstream decision inherits that inconsistency.",
    ],
    appliesTo: "Employees eligible for review under the cycle the employer defines.",
    defines: [
      "The review cycle and its dates",
      "Who contributes to an assessment, self, manager, peers, skip-level",
      "How ratings are calibrated across managers and teams",
      "How the outcome is recorded, communicated and appealed",
    ],
    evidence: [
      "OKRs and KRAs carry live progress through the period, so a review references the quarter rather than a recollection of it",
      "The 9-box talent matrix and calibration views read the same underlying data",
    ],
    seeAlso: ["HRMAGIX012", "HRMAGIX022", "HRMAGIX011"],
  },
  {
    code: "HRMAGIX012",
    slug: "promotion",
    purpose: [
      "This policy states the basis on which a promotion is considered, who decides, and how a change in grade or designation takes effect.",
      "Its practical function is to make progression legible. Where the basis is unwritten, the absence of a promotion is read as a judgement about the person rather than about the criteria.",
    ],
    appliesTo: "Every employee eligible for progression under the employer's grade structure.",
    defines: [
      "What makes an employee eligible for consideration",
      "Who proposes, who reviews and who approves",
      "How the decision relates to the review cycle",
      "From what date a promotion takes effect, and how it is communicated",
    ],
    evidence: [
      "Grade and designation changes are effective-dated rather than overwritten, so the position that applied at any past date remains reconstructable",
      "The change reaches the next payroll run without a second entry",
    ],
    seeAlso: ["HRMAGIX017", "HRMAGIX022", "HRMAGIX011"],
  },
  {
    code: "HRMAGIX022",
    slug: "payment-increment",
    purpose: [
      "This policy states the circumstances in which compensation is reviewed, the basis on which a revision is decided, and when a revision takes effect.",
      "The effective-date clause matters more than it appears. A revision agreed in one month and effective in another has arrears consequences that need to be settled by policy rather than case by case.",
    ],
    appliesTo: "Every employee whose compensation is subject to review.",
    defines: [
      "When compensation is reviewed, and on what cycle",
      "What the revision is based on",
      "From what date a revision takes effect",
      "How arrears are treated where the effective date precedes the decision",
    ],
    evidence: [
      "Salary structures are effective-dated, so a mid-year revision does not rewrite the months before it",
      "A payroll run for a past month uses the structure that was in force in that month",
      "Arrears are handled as a payroll component within the run",
    ],
    seeAlso: ["HRMAGIX012", "HRMAGIX017"],
  },
  {
    code: "HRMAGIX021",
    slug: "timely-submission-of-reports",
    purpose: [
      "This policy sets out the reporting obligations attached to a role, the expectation of timeliness, and what follows from persistent delay.",
      "It exists because reporting deadlines are usually the first obligation to slip and the last to be addressed, and because downstream work, payroll cutoff among it, depends on them.",
    ],
    appliesTo: "Employees in roles carrying a defined reporting obligation.",
    defines: [
      "Which reports are due, from whom, and to whom",
      "The deadline for each, and how it relates to the payroll cutoff",
      "How an extension is requested",
      "What follows from persistent delay",
    ],
    evidence: [
      "Reminders and document deadlines are tracked rather than remembered",
      "Approval and submission actions leave a dated trail",
    ],
    seeAlso: ["HRMAGIX001", "HRMAGIX017"],
  },
  {
    code: "HRMAGIX016",
    slug: "gratuity",
    purpose: [
      "This policy sets out gratuity eligibility and computation, and how it is settled on separation.",
      "Because gratuity is a statutory entitlement with a fixed formula, the employer's policy is largely a restatement of the law plus the organisation's own administrative process. The provisioning question, recognising the liability before it falls due, is the part that is genuinely the employer's.",
    ],
    appliesTo: "Employees completing the qualifying period of continuous service.",
    statute:
      "Under the Payment of Gratuity Act, 1972, gratuity becomes payable on completing five years of continuous service, computed at fifteen days of last drawn wages for each completed year, on a twenty-six day divisor. The Act also prescribes the circumstances in which the five-year condition does not apply.",
    defines: [
      "How the organisation administers a gratuity claim, and within what period it settles",
      "How continuous service is computed where there has been a break",
      "Whether the organisation provides above the statutory formula",
      "How the liability is provisioned in the books",
    ],
    evidence: [
      "Provisioning runs before eligibility is reached, so the liability is visible rather than sudden",
      "Settlement is computed from the same attendance and salary history the rest of payroll uses",
      "The gratuity calculator on this site applies the statutory formula to figures you enter",
    ],
    seeAlso: ["HRMAGIX004", "HRMAGIX018"],
  },

  /* ---------------- Separation ---------------- */
  {
    code: "HRMAGIX004",
    slug: "employee-resignation",
    purpose: [
      "This policy states how a resignation is tendered and acknowledged, and the sequence of clearance, handover and settlement that follows it.",
      "An exit generates more obligations than a joining. Setting the sequence down in advance is what allows a departure to be handled without improvisation at a moment when goodwill is already thin.",
    ],
    appliesTo: "Every employee resigning from the organisation.",
    defines: [
      "How a resignation is tendered, and to whom",
      "Within what period it is acknowledged",
      "The handover expected, and to whom",
      "The clearance sequence across departments, and who signs off",
      "When the final settlement is paid",
    ],
    evidence: [
      "Clearance and asset recovery run as a checklist against the employee record",
      "Full-and-final settlement is computed from the same attendance and leave ledger used all year",
      "Documents are retained after the login closes, so a letter can still be issued later",
    ],
    seeAlso: ["HRMAGIX008", "HRMAGIX019", "HRMAGIX016"],
  },
  {
    code: "HRMAGIX008",
    slug: "notice-period",
    purpose: [
      "This policy states the notice obligation on each side, how notice is served, and how it interacts with leave and the final working day.",
      "The leave interaction is where most disputes arise. Whether leave may be taken or encashed during notice, and whether approved leave extends the last working day, are questions best settled in the policy rather than at the exit interview.",
    ],
    appliesTo: "Both parties, the employee resigning and the employer terminating.",
    defines: [
      "The notice period required from each side, and whether it varies by grade or by probation status",
      "How notice is served and from what date it runs",
      "Whether leave may be taken or encashed during notice",
      "How the last working day is determined",
    ],
    evidence: [
      "Notice dates are held on the employee record and drive the final settlement calculation",
      "Leave taken during notice is applied through the same leave scheme as any other period",
    ],
    seeAlso: ["HRMAGIX004", "HRMAGIX019", "HRMAGIX006"],
  },
  {
    code: "HRMAGIX019",
    slug: "notice-period-buyout",
    purpose: [
      "This policy states when notice may be bought out rather than served, who may agree to it, and how the amount is treated in the final settlement.",
      "It exists so that a buyout is a defined commercial option rather than a negotiation conducted under time pressure by whoever happens to be handling the exit.",
    ],
    appliesTo: "Employees seeking to shorten a notice period by agreement.",
    defines: [
      "Whether buyout is permitted, and in which direction",
      "How the buyout amount is calculated",
      "Who has authority to agree to it",
      "How the amount is treated in the full-and-final settlement, and its tax treatment",
    ],
    evidence: [
      "Buyout is handled as a component within the final settlement rather than outside payroll",
      "The settlement working is retained and reconstructable",
    ],
    seeAlso: ["HRMAGIX008", "HRMAGIX004"],
  },
  {
    code: "HRMAGIX006",
    slug: "employee-termination",
    purpose: [
      "This policy states the grounds and process for termination by the employer, including the procedural steps that must precede it.",
      "The procedural steps are the substance of the policy. Termination without a documented process is difficult to defend, and the documentation has to have been created at the time rather than assembled afterwards.",
    ],
    appliesTo: "Every employee, and every termination initiated by the employer.",
    defines: [
      "The grounds on which employment may be terminated",
      "The procedural steps that must precede a decision, notice of concern, opportunity to respond, enquiry where required",
      "Who decides, and at what level of authority",
      "What notice or payment in lieu applies",
    ],
    evidence: [
      "Performance history, review outcomes and improvement plans are recorded with their dates",
      "The employee record is versioned, so the position at each step remains reconstructable",
    ],
    seeAlso: ["HRMAGIX008", "HRMAGIX014", "HRMAGIX017"],
  },
  {
    code: "HRMAGIX010",
    slug: "employee-absconding",
    purpose: [
      "This policy states how unexplained absence is treated, what attempts at contact must be made, and the point at which employment is deemed to have ended.",
      "It is the least-used policy in most registers and the one most missed when it is absent. Without it, an unexplained absence has no defined end point, and the employee remains on the books indefinitely.",
    ],
    appliesTo: "Employees absent without approved leave or intimation.",
    defines: [
      "After how many days of unexplained absence the policy is triggered",
      "What attempts at contact must be made, through which channels, and over what period",
      "At what point employment is deemed to have ended",
      "How the final settlement and any recoveries are handled",
    ],
    evidence: [
      "Unexplained absence is visible in the attendance ledger from the first day, not at month end",
      "Contact attempts and notices are filed against the employee record with their dates",
    ],
    seeAlso: ["HRMAGIX002", "HRMAGIX006", "HRMAGIX004"],
  },
];

export const detailByCode = (code: string) => policyDetails.find((d) => d.code === code);
export const detailBySlug = (slug: string) => policyDetails.find((d) => d.slug === slug);

/**
 * Every policy in the register must have a detail page. Asserted in development
 * so a policy can never be added to the register and left unreachable.
 */
export const detailCount = policyDetails.length;

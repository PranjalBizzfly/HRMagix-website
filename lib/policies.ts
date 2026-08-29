/**
 * The policy centre.
 *
 * TWO DIFFERENT THINGS LIVE HERE AND THEY MUST NOT BE CONFUSED.
 *
 * 1. `legalPages` — HRMagix's own commitments to the people who use this
 *    website and this product: privacy, terms, security, cookies.
 *
 * 2. `policyRegister` — the workplace policy library HRMagix ships as
 *    templates inside the Documents module, so a customer can issue them to
 *    their own employees and track acknowledgement per person per version.
 *    These are a customer's policies, not HRMagix's.
 *
 * SOURCE AND ADAPTATION OF THE REGISTER
 * The register is adapted from a supplied HR policy schedule of twenty-five
 * rows — a code of conduct and twenty-four policies. The adaptation does three
 * things and
 * nothing else: it renumbers the codes to the HRMAGIX series, it removes the
 * originating company's name throughout, and it states in neutral terms what
 * subject each policy governs.
 *
 * It does NOT reproduce, paraphrase or invent the operative rules — the notice
 * period length, the grace window for late arrival, the increment cycle. Those
 * are decisions each employer makes and writes into their own copy of the
 * template. Publishing a specific rule here would be inventing policy, so the
 * `covers` field describes scope only.
 */

/* ------------------------------------------------------------------ */
/* The workplace policy library                                        */
/* ------------------------------------------------------------------ */

export type PolicyEntry = {
  code: string;
  name: string;
  /** Which part of the employment relationship this policy governs. */
  covers: string;
  /** Which HRMagix module enforces or evidences it, where one does. */
  enforcedBy?: { label: string; href: string };
};

export type PolicyGroup = {
  title: string;
  intro: string;
  entries: PolicyEntry[];
};

export const policyRegister: PolicyGroup[] = [
  {
    title: "Conduct and the working relationship",
    intro:
      "The policies that describe how people are expected to behave towards one another, and the routes available when that expectation is not met.",
    entries: [
      {
        code: "HRMAGIXCOC",
        name: "Code of Conduct",
        covers:
          "The overarching statement of expected professional behaviour, integrity and use of company resources, to which the remaining policies are subordinate.",
        enforcedBy: { label: "Documents", href: "/solutions/employee-management" },
      },
      {
        code: "HRMAGIX007",
        name: "Workplace Harassment Policy",
        covers:
          "Definition of harassment in the workplace, the obligations it places on every employee, and the reporting and investigation route available to anyone affected.",
      },
      {
        code: "HRMAGIX009",
        name: "Sexual Harassment Policy",
        covers:
          "The employer's obligations under Indian law on prevention and redressal of sexual harassment at the workplace, including the complaints mechanism and its confidentiality.",
      },
      {
        code: "HRMAGIX013",
        name: "Workplace Violence Policy",
        covers:
          "Prohibited conduct involving threat, intimidation or physical harm, and the immediate escalation path when it occurs.",
      },
      {
        code: "HRMAGIX011",
        name: "Equal Opportunity Employer Policy",
        covers:
          "The commitment to non-discrimination in hiring, evaluation, promotion and remuneration, and the grounds on which discrimination is prohibited.",
      },
      {
        code: "HRMAGIX015",
        name: "Open Door Policy",
        covers:
          "The route by which an employee may raise a concern beyond their immediate reporting line, and the assurance that attaches to using it.",
      },
    ],
  },
  {
    title: "Attendance, time and place of work",
    intro:
      "The policies governing when and where work happens. These are the ones the attendance and leave modules enforce mechanically rather than by reminder.",
    entries: [
      {
        code: "HRMAGIX002",
        name: "Attendance Policy",
        covers:
          "How presence is recorded, what constitutes a full and a half working day, and the process for regularising a missed or disputed record.",
        enforcedBy: { label: "Attendance & Shifts", href: "/solutions/attendance" },
      },
      {
        code: "HRMAGIX001",
        name: "Late Coming Policy",
        covers:
          "How late arrival is measured against the shift start, how a grace allowance operates where one is granted, and the consequence of repeated lateness.",
        enforcedBy: { label: "Attendance & Shifts", href: "/solutions/attendance" },
      },
      {
        code: "HRMAGIX003",
        name: "Leave Policy",
        covers:
          "The leave categories available, how entitlement accrues, how applications are approved, and how balances carry forward or lapse.",
        enforcedBy: { label: "Leave Management", href: "/solutions/leave-management" },
      },
      {
        code: "HRMAGIX018",
        name: "Maternity Leave Policy",
        covers:
          "Maternity entitlement, notification and approval, and the treatment of the period of absence in relation to service and benefits.",
        enforcedBy: { label: "Leave Management", href: "/solutions/leave-management" },
      },
      {
        code: "HRMAGIX005",
        name: "Work From Home Policy",
        covers:
          "When remote working is available, how it is requested and approved, and the obligations that continue to apply while working away from an office.",
        enforcedBy: { label: "Attendance & Shifts", href: "/solutions/attendance" },
      },
      {
        code: "HRMAGIX023",
        name: "Work From Home Monitoring Policy",
        covers:
          "What is recorded while an employee works remotely, how that record is used, and the limits placed on it.",
      },
      {
        code: "HRMAGIX024",
        name: "Work From Home Employee Exclusivity Policy",
        covers:
          "The expectation that time recorded as working is worked exclusively for the employer, and the treatment of concurrent engagements.",
      },
      {
        code: "HRMAGIX020",
        name: "Time and Work Tracking Software Policy",
        covers:
          "The employee's obligations in relation to the systems used to record time and work, and how the resulting records are treated.",
        enforcedBy: { label: "Employee Self-Service", href: "/solutions/ess" },
      },
    ],
  },
  {
    title: "Performance, progression and pay",
    intro:
      "The policies that govern how contribution is assessed and what follows from the assessment.",
    entries: [
      {
        code: "HRMAGIX014",
        name: "Employee Probationary Period Policy",
        covers:
          "The purpose and duration of probation, how performance is assessed during it, and how confirmation or its refusal is communicated.",
        enforcedBy: { label: "Onboarding & Lifecycle", href: "/solutions/onboarding" },
      },
      {
        code: "HRMAGIX017",
        name: "Annual Employee Performance Review Policy",
        covers:
          "The review cycle, who participates in an assessment, how ratings are calibrated, and how outcomes are recorded and communicated.",
        enforcedBy: { label: "HR Analytics", href: "/solutions/hr-analytics" },
      },
      {
        code: "HRMAGIX012",
        name: "Employee Promotion Policy",
        covers:
          "The basis on which a promotion is considered, who decides, and how a change in grade or designation takes effect.",
        enforcedBy: { label: "Employee Management", href: "/solutions/employee-management" },
      },
      {
        code: "HRMAGIX022",
        name: "Payment Increment Policy",
        covers:
          "The circumstances in which compensation is reviewed, the basis on which a revision is decided, and when a revision takes effect.",
        enforcedBy: { label: "Payroll", href: "/solutions/payroll" },
      },
      {
        code: "HRMAGIX021",
        name: "Timely Submission of Reports",
        covers:
          "The reporting obligations attached to a role, the expectation of timeliness, and the consequence of persistent delay.",
      },
      {
        code: "HRMAGIX016",
        name: "Gratuity Policy (Indian Labour Law)",
        covers:
          "Gratuity eligibility and computation under the Payment of Gratuity Act, and how it is settled on separation.",
        enforcedBy: { label: "Payroll", href: "/solutions/payroll" },
      },
    ],
  },
  {
    title: "Separation",
    intro:
      "The policies that apply when the relationship ends — the group most often missing from a policy set, and the one most often needed at short notice.",
    entries: [
      {
        code: "HRMAGIX004",
        name: "Employee Resignation Policy",
        covers:
          "How a resignation is tendered and acknowledged, and the sequence of clearance, handover and settlement that follows it.",
        enforcedBy: { label: "Onboarding & Lifecycle", href: "/solutions/onboarding" },
      },
      {
        code: "HRMAGIX008",
        name: "Notice Period Policy",
        covers:
          "The notice obligation on each side, how it is served, and how it interacts with leave and the final working day.",
        enforcedBy: { label: "Onboarding & Lifecycle", href: "/solutions/onboarding" },
      },
      {
        code: "HRMAGIX019",
        name: "Notice Period Buyout Policy",
        covers:
          "When notice may be bought out rather than served, who may agree to it, and how the amount is treated in the final settlement.",
        enforcedBy: { label: "Payroll", href: "/solutions/payroll" },
      },
      {
        code: "HRMAGIX006",
        name: "Employee Termination Policy",
        covers:
          "The grounds and process for termination by the employer, including the procedural steps that must precede it.",
      },
      {
        code: "HRMAGIX010",
        name: "Employee Absconding Policy",
        covers:
          "How unexplained absence is treated, the attempts at contact that must be made, and the point at which employment is deemed to have ended.",
        enforcedBy: { label: "Attendance & Shifts", href: "/solutions/attendance" },
      },
    ],
  },
];

export const policyCount = policyRegister.reduce((n, g) => n + g.entries.length, 0);

/** How the register is meant to be used, stated on the page itself. */
export const registerNotes = {
  what: [
    "These twenty-five templates — a code of conduct and twenty-four policies — are templates, not HRMagix's own staff handbook. They ship inside the Documents module so that a customer can issue them to their own employees, collect acknowledgement, and prove later that it was collected.",
    "Each employer writes the operative rules into their own copy — the notice period length, the grace window, the increment cycle. This page describes only what subject each policy governs, because publishing a specific rule here would be putting words into an employer's mouth.",
  ],
  how: [
    {
      step: "Adopt",
      body: "Take the templates you need. A fifty-person company genuinely does not need all twenty-five on day one; conduct, attendance, leave and separation are the usual starting set.",
    },
    {
      step: "Write in your rules",
      body: "Fill in the decisions that are yours: durations, thresholds, approval levels, and anything specific to your states of operation.",
    },
    {
      step: "Issue and acknowledge",
      body: "Publish to the employees each policy applies to. Acknowledgement is recorded per employee, per policy version.",
    },
    {
      step: "Version and re-issue",
      body: "When the text changes, a new version re-opens acknowledgement rather than letting an earlier acceptance stand for the new wording.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* HRMagix's own legal pages                                           */
/* ------------------------------------------------------------------ */

export type LegalSection = { heading: string; body: string[]; list?: string[] };

export type LegalPage = {
  slug: string;
  href: string;
  name: string;
  title: string;
  standfirst: string;
  seo: { title: string; description: string };
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    href: "/policy/privacy",
    name: "Privacy Policy",
    title: "What we hold, why we hold it, and for how long",
    standfirst:
      "HRMagix processes employee data on behalf of the companies that subscribe to it. This page separates what we do as a controller of our own website visitors from what we do as a processor of a customer's employee records — because the obligations are different.",
    seo: {
      title: "Privacy Policy",
      description:
        "How HRMagix handles personal data: the distinction between website visitors and customer employee records, what is stored, where it is hosted, and how long it is retained.",
    },
    sections: [
      {
        heading: "Two different roles",
        body: [
          "When you visit hrmagix.com or send an enquiry, HRMagix decides what to do with the information you give us. In data-protection language we are the controller of that information.",
          "When a subscribing company loads its employee records into the platform, that company decides what is collected and why. HRMagix processes it on their instruction and for their purposes. We are the processor, and we do not use a customer's employee data for our own ends.",
        ],
      },
      {
        heading: "What we collect from website visitors",
        body: [
          "If you submit an enquiry or request a demo, we collect what you type into the form — typically a name, a work email address, a phone number, a company name and whatever you tell us about your requirement — so that a member of the team can respond.",
        ],
        list: [
          "Contact details you provide in an enquiry or demo request",
          "The content of your message and any subsequent correspondence",
          "Basic technical information your browser sends with any web request",
        ],
      },
      {
        heading: "What the platform holds on behalf of customers",
        body: [
          "The employee record described across this site: identity and statutory identifiers such as PAN, Aadhaar, UAN and ESIC IP number; bank details for salary payment; employment history, compensation structure and leave balances; attendance records including, where a customer enables it, location and selfie validation on mobile check-in; and the documents evidencing all of the above.",
          "Each of these exists because an Indian employer is required or entitled to hold it in order to pay people correctly and meet its statutory obligations.",
        ],
      },
      {
        heading: "Where it is hosted",
        body: [
          "Platform data is hosted in Indian cloud data centres, encrypted at rest and in transit. Access within the platform is governed by role-based permissions set by the customer, with multi-factor authentication available and single sign-on on the Enterprise plan.",
          "Certifications held by the underlying hosting providers are theirs, and should be attributed to them rather than to HRMagix.",
        ],
      },
      {
        heading: "How long it is kept",
        body: [
          "Enquiry correspondence is kept for as long as it is useful to the conversation it belongs to, and then removed.",
          "Employee records are retained for as long as the subscribing company requires them — which, for statutory reasons, extends beyond the end of an individual's employment. Retention of a customer's data is the customer's decision, exercised through the platform.",
        ],
      },
      {
        heading: "Your rights, and who to ask",
        body: [
          "If you are an employee of a company using HRMagix and you want to see, correct or object to something in your record, the request goes to your employer rather than to us: they control that data and we act on their instruction. Your own self-service login already shows you most of it.",
          "If you are a website visitor and want your enquiry correspondence removed, write to us directly and we will do it.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "Where this policy changes materially, the change will be reflected here. It is worth reading it again if you are about to submit something you would not want kept.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    href: "/policy/terms",
    name: "Terms of Service",
    title: "The agreement behind a subscription",
    standfirst:
      "These terms set out the basis on which HRMagix is provided, what each side is responsible for, and what happens at the end. They are written to be read rather than to be survived.",
    seo: {
      title: "Terms of Service",
      description:
        "The terms on which HRMagix is provided: subscription and billing, acceptable use, data ownership, statutory responsibility, availability and termination.",
    },
    sections: [
      {
        heading: "What is being provided",
        body: [
          "A subscription to the HRMagix platform, accessed over the web at app.hrmagix.com and through the HRMagix mobile applications, comprising the modules included in the plan you have selected.",
          "Plans are published per employee per month. Which modules are included in which plan is set out on the pricing page, and moving between plans changes what is available rather than requiring a new implementation.",
        ],
      },
      {
        heading: "Who owns what",
        body: [
          "You own your data. Employee records, attendance history, payroll runs and documents loaded into or generated by the platform belong to the subscribing company, not to HRMagix.",
          "HRMagix owns the platform: the software, its interfaces and the templates supplied with it, including the workplace policy library.",
        ],
      },
      {
        heading: "Where statutory responsibility sits",
        body: [
          "This is the clause that matters most and is most often glossed over. HRMagix calculates statutory deductions and produces filing-ready output — the ECR file, the ESIC contribution return, the Professional Tax working, Form 24Q and Form 16 Part B.",
          "The legal obligation to file, to pay and to be correct remains the employer's. The platform is configured with your structures, your locations and your declarations; where those are wrong, the output follows them. We will help you get them right, and we do not become your employer of record by doing so.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "Use the platform for managing your own workforce. Do not attempt to breach or probe its security, do not use it to store data unrelated to employment administration, and do not resell access to it without a written arrangement.",
        ],
      },
      {
        heading: "Availability and support",
        body: [
          "Support is provided by the product specialists in Pune over WhatsApp, phone and email. Enterprise subscriptions include a dedicated customer success manager, who is the right person to involve around a monthly payroll cutoff or an annual tax-year close.",
          "Planned maintenance is scheduled away from typical cutoff periods wherever possible.",
        ],
      },
      {
        heading: "Trial, billing and cancellation",
        body: [
          "A fourteen-day trial provides full access with no setup fee. After that, subscriptions are billed per employee per month against the plan selected.",
          "You may cancel. On cancellation, arrange your data export before access ends — your records are yours, and the practical time to take them is while you can still log in.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "Material changes will be reflected on this page. Continued use of the platform after a change indicates acceptance of the revised terms.",
        ],
      },
    ],
  },
  {
    slug: "security",
    href: "/policy/security",
    name: "Security",
    title: "Hosting, encryption, access and the trail everything leaves",
    standfirst:
      "Payroll data is the most sensitive record most companies hold. This page states plainly what protects it, and is equally plain about what HRMagix does not claim.",
    seo: {
      title: "Security",
      description:
        "How HRMagix protects payroll and employee data: Indian cloud hosting, encryption in transit and at rest, role-based access control, multi-factor authentication, SSO and audit trails.",
    },
    sections: [
      {
        heading: "Hosting",
        body: [
          "Platform data is hosted in Indian cloud data centres. Keeping employee and payroll data in India is a deliberate choice for a product whose entire purpose is Indian statutory compliance.",
          "Certifications held by the underlying infrastructure providers belong to those providers. HRMagix does not present them as its own.",
        ],
      },
      {
        heading: "Encryption",
        body: [
          "Data is encrypted in transit between your browser or mobile app and the platform, and encrypted at rest in storage. Documents in the employee vault are encrypted alongside the records they belong to.",
        ],
      },
      {
        heading: "Access control",
        body: [
          "Access is governed by role rather than by folder. An employee sees their own record. A reporting manager sees what their role permits for their team. HR and payroll roles are scoped separately, because seeing a leave balance and seeing a salary structure are different privileges.",
        ],
        list: [
          "Role-based access control across every module",
          "Multi-factor authentication",
          "Single sign-on on the Enterprise plan",
          "Per-entity permissions in multi-entity structures",
        ],
      },
      {
        heading: "The audit trail",
        body: [
          "Approvals, document actions and payroll runs leave a dated trail, and employee records are versioned rather than overwritten. This is what makes it possible to answer a question about March in September with the structure that applied in March.",
        ],
      },
      {
        heading: "Backups",
        body: [
          "Automated backups run daily. The point of a backup is restoration, so retention and restoration are treated as one subject rather than two.",
        ],
      },
      {
        heading: "What is not claimed here",
        body: [
          "HRMagix does not claim its own ISO, SOC or comparable certification on this page, and does not publish a penetration-test report or a bug-bounty programme. If a procurement process requires specific assurance documentation, ask the team directly and you will get an honest answer about what exists.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    href: "/policy/cookies",
    name: "Cookie Policy",
    title: "What this website stores in your browser",
    standfirst:
      "This is a short page because there is little to say. This marketing website stores one preference, and nothing that follows you elsewhere.",
    seo: {
      title: "Cookie Policy",
      description:
        "What hrmagix.com stores in your browser: a theme preference held locally, and no advertising or cross-site tracking cookies.",
    },
    sections: [
      {
        heading: "The theme preference",
        body: [
          "If you switch this site between its light and dark appearance, that choice is stored locally in your browser so the page does not flash the wrong theme the next time you arrive. It identifies nothing about you and is not transmitted anywhere.",
          "Clearing your browser's site data removes it, and the site falls back to following your operating system's appearance setting.",
        ],
      },
      {
        heading: "What is not set",
        body: [
          "No advertising cookies, no cross-site tracking, and no third-party profiling scripts are used on this marketing site.",
        ],
      },
      {
        heading: "The product application is separate",
        body: [
          "app.hrmagix.com is the product rather than this website, and necessarily uses a session cookie to keep you signed in. That is a functional requirement of being logged into an application, not a tracking mechanism.",
        ],
      },
    ],
  },
];

export const legalBySlug = (slug: string) => legalPages.find((p) => p.slug === slug);

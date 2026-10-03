import type { LibCollection, LibPage } from "./types";

/** Builds the standard five sections every job description page uses. */
function jdSections(s: {
  purpose: string[];
  responsibilities: string[];
  skills: string[];
  differs: string[];
  posting: string;
}): LibPage["sections"] {
  return [
    { heading: "What the role is for", body: s.purpose },
    { heading: "Key responsibilities", list: { style: "bullet", items: s.responsibilities } },
    { heading: "Skills and qualifications", list: { style: "bullet", items: s.skills } },
    { heading: "How this role differs from the roles next to it", body: s.differs },
    { heading: "Adapting the posting to your company", note: s.posting },
  ];
}

const pages: LibPage[] = [
  {
    slug: "hr-executive",
    name: "HR executive job description",
    title: "HR executive: role, responsibilities and a posting you can adapt",
    standfirst:
      "The HR executive keeps day-to-day HR administration accurate: joining paperwork, employee records, attendance and leave data, and the inputs payroll depends on.",
    seo: {
      title: "HR Executive Job Description: Duties, Skills and Template",
      description:
        "HR executive job description with core duties, skills, how the role differs from HR generalist and manager, and a ready-to-paste posting for Indian employers.",
      keywords: ["hr executive job description", "hr executive roles and responsibilities", "hr executive job posting", "hr executive duties"],
    },
    sections: jdSections({
      purpose: [
        "An HR executive is usually the first HR hire below a manager, or one of several executives in a larger team. The job is execution: making sure every joining, change and exit is recorded correctly and on time, and that employees get quick answers to routine questions.",
        "In Indian companies the role often sits close to payroll. The executive collects attendance, leave and new-joiner details each month so that the payroll team or provider has clean inputs, and chases the documents needed for EPF and ESI enrolment.",
      ],
      responsibilities: [
        "Prepare offer and appointment letters from approved templates and track signed copies.",
        "Run joining formalities: collect KYC, bank, PAN and Aadhaar details, educational and previous employment documents.",
        "Collect Form 11 and nomination forms from new joiners and pass them to whoever handles EPF.",
        "Create and update employee records for transfers, designation changes and address or bank changes.",
        "Monitor daily attendance, regularisation requests and leave applications, and follow up with managers on pending approvals.",
        "Share the monthly attendance and leave summary with payroll by the agreed cut-off date.",
        "Maintain personnel files, both physical and digital, and keep document checklists complete.",
        "Coordinate induction schedules, ID cards, access and asset issue with admin and IT.",
        "Answer employee queries on leave balances, payslips and policies, and escalate what needs a decision.",
        "Prepare experience, relieving and address-proof letters on request.",
        "Support exit formalities: clearance forms, asset return and handover of inputs for full and final settlement.",
      ],
      skills: [
        "Graduate in any discipline; an MBA or PG diploma in HR is common but not essential at entry level.",
        "Working knowledge of EPF and ESI enrolment documents and the monthly attendance-to-payroll flow.",
        "Comfort with spreadsheets (lookups, filters, pivot tables) and an HRMS or attendance system.",
        "Accurate data entry and the habit of checking records against source documents.",
        "Clear written English and the local language for employee communication.",
        "Discretion with personal and salary information.",
      ],
      differs: [
        "An HR executive executes defined processes; an HR generalist owns a broader set of HR areas end to end and makes more judgement calls on employee relations and policy application. An HR manager sets the policies, owns the HR budget and takes decisions the executive escalates.",
        "Compared with a payroll executive, the HR executive prepares inputs (attendance, leave, joiners and leavers) but does not compute salary, deductions or statutory returns.",
      ],
      posting:
        "State whether the role covers one site or several, whether it includes payroll inputs for a third-party provider, and how many employees it supports. Candidates read 'HR executive' very differently in a 40-person office and a 2,000-person plant.",
    }),
    template: `HR Executive
[Company] | [Location] | [Full-time / Contract]

About us
[Two or three sentences about the company, its business and size.]

About the role
We are looking for an HR executive to run day-to-day HR administration for our team of [number] employees at [Location]. You will report to [Reporting to] and work closely with our payroll [team / provider].

What you will do
- Prepare offer and appointment letters and complete joining formalities
- Collect new-joiner documents, including EPF and ESI enrolment forms
- Maintain employee records and personnel files
- Track attendance, leave and regularisation, and share monthly inputs with payroll
- Coordinate induction, ID cards and asset issue
- Answer employee queries on leave, payslips and policies
- Handle exit paperwork and clearance

What you will bring
- Graduate in any discipline; HR qualification preferred
- [Experience range] in an HR operations or HR executive role
- Good spreadsheet skills and experience with an HRMS or attendance system
- Accuracy, discretion and clear communication in English and [Language]

Working arrangements
[Working days, shift timings, office or hybrid]

How to apply
Send your CV to [Email] with the subject line "HR Executive: [Location]".`,
    faqs: [
      {
        q: "How much experience does an HR executive role need?",
        a: "Most postings ask for zero to four years. Fresh graduates with an HR specialisation can do the role if processes are well documented; in a one-person HR setup, look for someone who has already handled joining and exit paperwork.",
      },
      {
        q: "Does an HR executive handle payroll?",
        a: "Usually only the inputs. In small companies the same person may also run payroll, in which case the posting should say so and ask for knowledge of EPF, ESI, Professional Tax and TDS.",
      },
      {
        q: "What tools should an HR executive know?",
        a: "Spreadsheets at a working level, plus whatever HRMS, attendance or biometric system you use. Experience with a specific product is less important than comfort with structured data entry.",
      },
    ],
    related: [
      { label: "The Employee Onboarding Checklist, From Signed Offer to Day Thirty", href: "/resources/hr-guides/employee-onboarding-checklist", note: "The joining steps this role runs." },
      { label: "An Employee Exit Checklist, From Resignation to Full and Final", href: "/resources/hr-guides/employee-exit-checklist", note: "Clearance and handover steps." },
      { label: "HR Generalist Job Description", href: "/resources/job-description-templates/hr-generalist", note: "The broader role one step up." },
    ],
  },
  {
    slug: "hr-manager",
    name: "HR manager job description",
    title: "HR manager: what the role owns and how to advertise it",
    standfirst:
      "The HR manager is accountable for the people function: policies, the HR team, compliance outcomes and the advice leadership relies on.",
    seo: {
      title: "HR Manager Job Description: Responsibilities and Template",
      description:
        "HR manager job description covering policy ownership, compliance, team leadership and appraisals, how it differs from HRBP and generalist, and a template.",
      keywords: ["hr manager job description", "hr manager roles and responsibilities", "hr manager job posting", "hr manager duties"],
    },
    sections: jdSections({
      purpose: [
        "An HR manager is accountable rather than hands-on for most transactions. In a mid-sized company the HR manager is often the most senior HR person, reporting to a director or the CEO, with executives and specialists below.",
        "The role decides how HR works: which policies exist, how the appraisal cycle runs, who handles payroll and compliance, and how disputes and disciplinary cases are resolved. It is also the person an inspector, auditor or employee lawyer will ask to speak to.",
      ],
      responsibilities: [
        "Write, review and get approval for HR policies: leave, attendance, conduct, travel, overtime and the employee handbook.",
        "Lead and allocate work across the HR team, and set service standards for employee queries and turnaround times.",
        "Own the annual HR calendar: appraisal cycle, salary revision, leave year-end and statutory deadlines.",
        "Make sure EPF, ESI, Professional Tax, LWF and Shops and Establishments obligations are met, whether handled in-house or by a provider.",
        "Approve the monthly payroll before release, or sign off the inputs where finance owns payroll.",
        "Handle disciplinary matters, show-cause notices and domestic enquiries, and decide when legal advice is needed.",
        "Set up and support the Internal Committee under the POSH Act and make sure its annual obligations are met.",
        "Prepare the HR budget and headcount plan with finance and leadership.",
        "Report headcount, attrition, hiring progress and HR costs to leadership each month.",
        "Choose and manage HR vendors: recruitment agencies, background verification, payroll providers and HR software.",
        "Coach managers on difficult conversations, probation decisions and performance improvement plans.",
      ],
      skills: [
        "Postgraduate qualification in HR, personnel management or labour law, or equivalent experience.",
        "Sound working knowledge of Indian labour laws relevant to your sector and states.",
        "Experience leading a small team and managing external vendors.",
        "Judgement in employee relations and disciplinary matters.",
        "Ability to present data and recommendations to senior leadership.",
        "Familiarity with HRMS reporting and payroll processes.",
      ],
      differs: [
        "The HR manager owns the HR function and its policies. An HR business partner, by contrast, is attached to a business unit and advises its leaders on people decisions, usually without line responsibility for HR operations, which sit with a shared services or operations team.",
        "An HR generalist works across HR areas but within policies someone else sets. The HR executive executes processes. In very small companies one person may hold the HR manager title while doing generalist work; the posting should say which it really is.",
      ],
      posting:
        "Be explicit about scope: number of employees and sites, size of the HR team reporting in, whether payroll is in-house or outsourced, and whether the role covers factory or contract workforces. These change the candidate profile far more than the title does.",
    }),
    template: `HR Manager
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company, its sector and size.]

About the role
We are hiring an HR manager to lead HR for [number] employees across [number] locations. You will report to [Reporting to] and lead a team of [number].

What you will do
- Own HR policies and the employee handbook, and keep them current
- Lead the HR team and set service standards
- Run the appraisal and salary revision cycles
- Ensure statutory compliance across EPF, ESI, Professional Tax, LWF and state establishment laws
- Approve monthly payroll inputs and outputs [in-house / with our payroll provider]
- Handle employee relations, disciplinary matters and POSH obligations
- Plan headcount and the HR budget with finance
- Report people metrics to leadership

What you will bring
- Postgraduate qualification in HR or a related field
- [Experience range] in HR, including [number] years managing people
- Working knowledge of Indian labour law for [sector / states]
- Experience with HRMS and payroll processes
- Sound judgement and clear communication with senior leaders

How to apply
Send your CV to [Email] with the subject line "HR Manager: [Location]".`,
    faqs: [
      {
        q: "What experience is usual for an HR manager?",
        a: "Typically eight years or more in HR, with some time leading people. In smaller companies the title is sometimes given at five to seven years where the role is closer to a senior generalist.",
      },
      {
        q: "Does the HR manager need labour law knowledge?",
        a: "Yes, at a working level. They need to know which laws apply, what the recurring obligations are and when to take legal advice. A dedicated compliance officer or consultant may handle detail in larger organisations.",
      },
      {
        q: "Should an HR manager also do recruitment?",
        a: "In many companies under a few hundred employees, yes. If hiring volume is high, a separate recruiter role usually makes more sense, and the posting should say which model you use.",
      },
    ],
    related: [
      { label: "HRMagix for HR Teams", href: "/solutions/for-hr-teams", note: "How HR teams organise their work in one system." },
      { label: "Writing an Employee Handbook People Will Actually Open", href: "/resources/hr-guides/writing-an-employee-handbook", note: "A core HR manager deliverable." },
      { label: "HR Business Partner Job Description", href: "/resources/job-description-templates/hr-business-partner", note: "The advisory role often confused with this one." },
    ],
  },
  {
    slug: "hr-business-partner",
    name: "HR business partner job description",
    title: "HR business partner (HRBP): role, scope and posting template",
    standfirst:
      "An HRBP is attached to a business unit and helps its leaders make people decisions: structure, capability, performance and retention.",
    seo: {
      title: "HRBP Job Description: HR Business Partner Duties and Template",
      description:
        "HRBP job description explaining the advisory scope, typical responsibilities, skills, how it differs from an HR manager or generalist, and a posting template.",
      keywords: ["hrbp job description", "hr business partner job description", "hrbp roles and responsibilities", "hr business partner duties"],
    },
    sections: jdSections({
      purpose: [
        "The HR business partner model splits HR into three parts: transactional operations, specialist centres (such as reward or L&D) and business partners who sit with the business. The HRBP is the third part.",
        "An HRBP's success is measured by the business unit's people outcomes, not by HR process metrics. They spend most of their time with the unit head and their managers, translating business plans into hiring, organisation design, capability and retention actions.",
      ],
      responsibilities: [
        "Act as the first point of contact on people matters for the head of a business unit, function or region.",
        "Translate the unit's annual plan into a headcount and capability plan.",
        "Advise on organisation design: spans of control, reporting lines and new roles.",
        "Use attrition, engagement and performance data to identify risks and propose actions.",
        "Facilitate calibration in the appraisal cycle and challenge rating inconsistencies across teams.",
        "Identify critical roles and successors, and work with L&D on development plans.",
        "Coach managers on handling underperformance, conflict and team changes.",
        "Lead the people side of restructures, transfers and role changes, including consultation and communication.",
        "Bring in specialist teams (compensation, recruitment, L&D, employee relations) when a matter needs them.",
        "Flag employee relations cases early and steer them to the right process.",
      ],
      skills: [
        "Postgraduate qualification in HR or management.",
        "Broad HR experience across at least two or three areas such as talent, performance and employee relations.",
        "Understanding of how the business unit makes money and what drives its workforce needs.",
        "Comfort with people data: reading attrition and headcount reports and drawing conclusions.",
        "Influence without authority; credibility with senior managers.",
        "Facilitation and coaching skills.",
      ],
      differs: [
        "An HR manager runs the HR function; an HRBP advises a part of the business and relies on HR operations and specialist teams to deliver. HRBPs rarely process letters, attendance or payroll themselves.",
        "An HR generalist handles the full range of HR work for a site or group of employees, including administration. The HRBP role assumes that administration is handled elsewhere, which is why it mainly exists in larger organisations.",
      ],
      posting:
        "Name the business unit, its size and leader, and say which shared services exist behind the HRBP. If there is no operations team and the HRBP will also process joinings and exits, the role is closer to a generalist and should be advertised as such.",
    }),
    template: `HR Business Partner, [Business unit]
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and the business unit.]

About the role
As HR business partner for [Business unit] ([number] employees), you will work with [Reporting to] and the leadership team to plan and deliver the people side of the business plan. You will be supported by our HR operations, recruitment and [other specialist] teams.

What you will do
- Advise unit leaders on headcount, organisation design and capability
- Analyse attrition, engagement and performance data and recommend actions
- Facilitate appraisal calibration and succession discussions
- Coach managers on performance, conflict and change
- Lead the people side of restructures and role changes
- Bring in specialist HR teams when needed

What you will bring
- Postgraduate qualification in HR or management
- [Experience range] in HR, with exposure to several HR areas
- Experience advising senior managers
- Confidence with people data and reports
- Strong facilitation and influencing skills

How to apply
Send your CV to [Email] with the subject line "HRBP: [Business unit]".`,
    faqs: [
      {
        q: "Is an HRBP a senior role?",
        a: "Usually mid to senior. Postings commonly ask for six years or more, because the HRBP needs enough breadth to advise without checking every answer with a specialist.",
      },
      {
        q: "Does a small company need an HRBP?",
        a: "Rarely. Without a separate operations team the HRBP ends up doing administration. A strong generalist or HR manager usually fits a company of a few hundred people better.",
      },
      {
        q: "What does an HRBP report to?",
        a: "Often a dual line: to the head of HR for standards and to the business unit head for priorities. State both in the posting if that is your model.",
      },
    ],
    related: [
      { label: "Finding Out Why People Leave: An Attrition Analysis", href: "/resources/hr-guides/attrition-analysis", note: "The data an HRBP works from." },
      { label: "HR Analytics", href: "/solutions/hr-analytics", note: "Headcount and attrition reporting." },
      { label: "HR Manager Job Description", href: "/resources/job-description-templates/hr-manager", note: "The function-owning role." },
    ],
  },
  {
    slug: "hr-generalist",
    name: "HR generalist job description",
    title: "HR generalist: a full-cycle HR role and a posting to match",
    standfirst:
      "The HR generalist covers the whole employee lifecycle for a site or group of employees, from hiring support to exits, applying policy and handling the cases that do not fit a template.",
    seo: {
      title: "HR Generalist Job Description: Scope, Skills and Template",
      description:
        "HR generalist job description with lifecycle duties, skills, how it differs from HR executive, HR manager and HRIS roles, plus a posting you can adapt.",
      keywords: ["hr generalist job description", "hr generalist roles and responsibilities", "hr generalist job posting", "hr generalist duties"],
    },
    sections: jdSections({
      purpose: [
        "A generalist is hired when a company needs one person who can handle any HR matter competently, rather than several specialists. It is common in companies of 50 to a few hundred employees, and for single plants or branches of larger groups.",
        "The difference from an executive is judgement. A generalist interprets policy for unusual cases, handles first-level grievances and disciplinary steps, and runs whole processes such as a probation review or appraisal cycle for their population.",
      ],
      responsibilities: [
        "Coordinate hiring for the site: raise requisitions, shortlist with managers, schedule interviews and close offers.",
        "Own onboarding end to end, including the first 90 days check-ins with new joiners and their managers.",
        "Run probation reviews and confirmations within the policy timelines.",
        "Interpret leave, attendance and conduct policies for cases the policy does not spell out.",
        "Handle first-level grievances, conduct initial fact-finding and recommend next steps.",
        "Run the appraisal cycle locally: reminders, manager support and moderation inputs.",
        "Organise engagement activities, town halls and policy communication for the site.",
        "Keep site registers and notices current where the site falls under state establishment or factory rules.",
        "Conduct exit interviews and summarise reasons for leaving for the HR manager.",
        "Review monthly payroll inputs for the site before they go to payroll.",
      ],
      skills: [
        "Graduate or postgraduate in HR or a related field.",
        "Hands-on experience across recruitment, onboarding, employee relations and performance processes.",
        "Working knowledge of labour laws that apply to the site.",
        "Good interviewing, listening and note-taking skills for grievances and enquiries.",
        "Ability to manage competing priorities without a specialist team to hand off to.",
        "Comfort with HRMS reports and spreadsheets.",
      ],
      differs: [
        "An HR executive processes; a generalist owns outcomes for a population and handles exceptions. An HR manager sets policy and leads the team; the generalist applies it.",
        "An HRIS analyst looks after the HR system itself (configuration, data quality, reports). A generalist uses that system to do HR work but does not usually configure workflows or build reports.",
      ],
      posting:
        "List the HR areas the role actually covers and those it does not. If recruitment is handled by a central team, or payroll by finance, say so, otherwise experienced candidates will assume they own everything.",
    }),
    template: `HR Generalist
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and the site.]

About the role
You will be the HR point of contact for [number] employees at [Location], covering the full employee lifecycle. You will report to [Reporting to].

What you will do
- Coordinate hiring with managers, from requisition to offer
- Own onboarding and probation confirmations
- Apply HR policies and handle exceptions
- Manage first-level grievances and support disciplinary processes
- Run the appraisal cycle for the site
- Maintain site registers and notices
- Conduct exit interviews and review monthly payroll inputs

What you will bring
- Degree in HR or a related field
- [Experience range] across several HR areas
- Working knowledge of labour laws relevant to [state / sector]
- Good judgement and the ability to work without close supervision
- Experience with an HRMS and spreadsheets

How to apply
Send your CV to [Email] with the subject line "HR Generalist: [Location]".`,
    faqs: [
      {
        q: "Is HR generalist more senior than HR executive?",
        a: "Generally yes, by breadth and judgement rather than title. Postings usually ask for three to seven years of experience across more than one HR area.",
      },
      {
        q: "Can one generalist cover multiple locations?",
        a: "Yes, if headcount per location is small and the locations are in states with similar rules. Mention travel expectations and the states involved.",
      },
      {
        q: "Does a generalist need recruitment experience?",
        a: "Usually some. If hiring volume is high, a separate recruiter is better, and the generalist then coordinates rather than sources.",
      },
    ],
    related: [
      { label: "How to Run the Review That Ends a Probation Period", href: "/resources/hr-guides/running-a-probation-review", note: "A process the generalist owns." },
      { label: "Maintaining Statutory Registers Without a Filing Cabinet Crisis", href: "/resources/hr-guides/statutory-registers", note: "Site registers to keep current." },
      { label: "HR Executive Job Description", href: "/resources/job-description-templates/hr-executive", note: "The transactional role." },
    ],
  },
  {
    slug: "payroll-executive",
    name: "Payroll executive job description",
    title: "Payroll executive: monthly payroll duties and a ready posting",
    standfirst:
      "The payroll executive runs the monthly salary cycle: collecting inputs, processing pay and deductions, and preparing the statutory challans and returns that follow.",
    seo: {
      title: "Payroll Executive Job Description: Duties and Posting Template",
      description:
        "Payroll executive job description covering monthly payroll, EPF, ESI, PT and TDS deductions, Form 16 and F&F, with skills and a ready-to-paste posting template.",
      keywords: ["payroll executive job description", "payroll executive roles and responsibilities", "payroll executive job posting", "payroll processing executive"],
    },
    sections: jdSections({
      purpose: [
        "The payroll executive is the person who actually runs payroll each month. Accuracy and timeliness are the whole job: a wrong deduction or a late ECR is noticed immediately by employees or regulators.",
        "In Indian payroll this means handling not only salary computation but the statutory chain that hangs off it: EPF and ESI contributions, Professional Tax by state, monthly TDS on salary and the annual Form 16.",
      ],
      responsibilities: [
        "Collect and validate monthly inputs: attendance, loss of pay, overtime, new joiners, exits, salary changes and one-time payments.",
        "Process monthly payroll in the payroll system, including arrears and mid-month joiners and leavers.",
        "Calculate EPF and ESI contributions for eligible employees and prepare the ECR and ESI contribution files.",
        "Apply Professional Tax and Labour Welfare Fund deductions according to each employee's state.",
        "Compute monthly TDS on salary from declared investments and the chosen tax regime, and update it when declarations change.",
        "Prepare bank transfer files and reconcile payments against the payroll register.",
        "Publish payslips and answer employee queries on pay and deductions.",
        "Collect investment proofs at year end and prepare data for Form 24Q and Form 16.",
        "Compute full and final settlements: notice recovery, leave encashment, gratuity where due, and pending reimbursements.",
        "Maintain loan and advance recoveries and reimbursement claims.",
        "Prepare the payroll journal and variance reports for finance.",
      ],
      skills: [
        "Commerce graduate; a postgraduate qualification in finance or HR is useful.",
        "Hands-on experience processing payroll in India, including EPF, ESI, PT and TDS.",
        "Good spreadsheet skills for reconciliation and checks.",
        "Experience with a payroll or HRMS system.",
        "Attention to detail and the habit of checking totals against the previous month.",
        "Confidentiality with salary information.",
      ],
      differs: [
        "A payroll executive processes and prepares; a payroll manager owns the controls, sign-off, vendor and compliance calendar, and answers for errors. The executive usually does not set salary structures or change payroll policy.",
        "Compared with an HR executive, who supplies attendance and joiner data, the payroll executive turns that data into pay, deductions and statutory filings.",
      ],
      posting:
        "Say how many employees and how many states payroll covers, which system is used, and whether the role prepares or also files returns. Multi-state Professional Tax and LWF are a real step up in complexity and worth mentioning.",
    }),
    template: `Payroll Executive
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and its size.]

About the role
You will run monthly payroll for [number] employees across [number] states, reporting to [Reporting to].

What you will do
- Collect and validate monthly payroll inputs
- Process payroll, arrears and one-time payments
- Calculate EPF, ESI, Professional Tax, LWF and TDS deductions
- Prepare ECR, ESI contribution files and challans
- Prepare bank transfer files and reconcile payments
- Publish payslips and handle employee pay queries
- Support year-end investment proof review, Form 24Q and Form 16
- Compute full and final settlements

What you will bring
- Commerce graduate
- [Experience range] processing payroll in India
- Working knowledge of EPF, ESI, PT and TDS on salary
- Experience with [payroll system / any HRMS] and strong spreadsheet skills
- Accuracy and discretion

How to apply
Send your CV to [Email] with the subject line "Payroll Executive: [Location]".`,
    faqs: [
      {
        q: "What qualification does a payroll executive need?",
        a: "A commerce degree is usual. Practical experience with Indian statutory deductions matters more than any specific certificate.",
      },
      {
        q: "Does the payroll executive file returns?",
        a: "It varies. In some companies the executive files ECR and ESI returns; in others they prepare files and the manager or a consultant files. State which applies.",
      },
      {
        q: "Which systems should candidates know?",
        a: "Ask for experience with any payroll system rather than one product. HRMagix, for example, is an HRMS that includes payroll, but someone trained on one system usually adapts to another quickly.",
      },
    ],
    related: [
      { label: "Payroll", href: "/solutions/payroll", note: "How payroll runs in an HRMS." },
      { label: "The Monthly Payroll Close, Step by Step", href: "/resources/hr-guides/monthly-payroll-close-checklist", note: "The monthly routine this role follows." },
      { label: "Payroll Manager Job Description", href: "/resources/job-description-templates/payroll-manager", note: "The role that signs off." },
    ],
  },
  {
    slug: "payroll-manager",
    name: "Payroll manager job description",
    title: "Payroll manager: controls, compliance and team leadership",
    standfirst:
      "The payroll manager is accountable for paying everyone correctly and on time and for every statutory obligation that payroll creates.",
    seo: {
      title: "Payroll Manager Job Description: Role, Skills and Template",
      description:
        "Payroll manager job description with controls, statutory compliance, audit and vendor duties, how it differs from a payroll executive, and a posting template.",
      keywords: ["payroll manager job description", "payroll manager roles and responsibilities", "payroll manager job posting", "head of payroll"],
    },
    sections: jdSections({
      purpose: [
        "Where the payroll executive runs the process, the payroll manager designs and controls it. The manager decides the monthly calendar, the checks before release, who approves what and how errors are corrected.",
        "The role also faces outward: to finance for accounting and budget, to auditors, to EPFO and ESIC queries, and to any outsourced payroll provider.",
      ],
      responsibilities: [
        "Set and publish the monthly payroll calendar, including input cut-offs and release dates.",
        "Design maker-checker controls and review variance reports before approving each payroll.",
        "Sign off statutory payments and returns: EPF, ESI, Professional Tax, LWF and TDS deposits and quarterly Form 24Q.",
        "Own year-end: investment proof policy, Form 16 issue and reconciliation of tax deducted with deposits.",
        "Implement salary structure changes, revision cycles and new allowances in the payroll system.",
        "Reconcile payroll with the general ledger each month and resolve differences with finance.",
        "Respond to statutory notices and inspections relating to wages and contributions.",
        "Support internal and statutory audits of payroll.",
        "Manage the payroll provider, if outsourced, including service levels and error resolution.",
        "Lead and train payroll executives and maintain process documentation.",
        "Approve complex full and final settlements and gratuity computations.",
      ],
      skills: [
        "Commerce graduate; CA Inter, CMA or an MBA in finance or HR is common.",
        "Several years of Indian payroll experience, including multi-state statutory compliance.",
        "Understanding of salary taxation and the old and new tax regimes as currently notified.",
        "Experience designing payroll controls and working with auditors.",
        "Team leadership and vendor management.",
        "Strong analytical and reconciliation skills.",
      ],
      differs: [
        "A payroll manager owns controls, approvals and outcomes; the payroll executive does the processing. The manager is answerable to auditors and regulators.",
        "A compensation and benefits manager decides what people should be paid and how pay is structured; the payroll manager makes sure that decision is paid correctly and taxed and deducted properly.",
      ],
      posting:
        "Say whether payroll is in-house or outsourced, how many entities and states it covers, and whether the role reports into HR or finance. These shape whether you need a process owner, a vendor manager or both.",
    }),
    template: `Payroll Manager
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company, its entities and size.]

About the role
You will own payroll for [number] employees across [number] entities and [number] states, reporting to [Reporting to] and leading a team of [number].

What you will do
- Set the payroll calendar and approve each monthly payroll
- Design and run payroll controls and variance checks
- Sign off EPF, ESI, PT, LWF and TDS payments and returns
- Own year-end tax processes and Form 16
- Implement salary structure changes and revisions
- Reconcile payroll with the general ledger
- Support audits and respond to statutory notices
- Manage [payroll provider / payroll team]

What you will bring
- Commerce graduate; CA Inter, CMA or MBA preferred
- [Experience range] in Indian payroll, including [number] years leading payroll
- Multi-state statutory compliance experience
- Experience with payroll audits and controls

How to apply
Send your CV to [Email] with the subject line "Payroll Manager: [Location]".`,
    faqs: [
      {
        q: "Should the payroll manager report to HR or finance?",
        a: "Both models work. Reporting to finance strengthens controls and accounting links; reporting to HR keeps payroll close to policy and employee queries. Make the line clear in the posting.",
      },
      {
        q: "What experience level is usual?",
        a: "Often eight years or more in payroll, with some time leading a team or managing a provider.",
      },
      {
        q: "Do we need a payroll manager if payroll is outsourced?",
        a: "Someone still has to approve inputs, check outputs and answer for compliance. In smaller companies that may be part of a finance or HR manager's role rather than a separate hire.",
      },
    ],
    related: [
      { label: "Payroll Reconciliation: Bank, Ledger and Statutory Returns", href: "/resources/hr-guides/payroll-reconciliation", note: "A monthly control this role owns." },
      { label: "Closing the Payroll Year and Issuing Form 16", href: "/resources/hr-guides/year-end-payroll-and-form-16", note: "The annual tax close." },
      { label: "In-House vs Outsourced Payroll", href: "/resources/compare/in-house-vs-outsourced-payroll", note: "Shapes what this role manages." },
    ],
    verify: "Tax regime rules and TDS requirements change with each Budget. Check the current position before finalising the posting.",
  },
  {
    slug: "recruiter",
    name: "Recruiter job description",
    title: "Recruiter: talent acquisition duties and a posting template",
    standfirst:
      "A recruiter finds, assesses and closes candidates for open roles, and keeps hiring managers and candidates informed from requisition to joining.",
    seo: {
      title: "Recruiter Job Description: TA Duties, Skills and Template",
      description:
        "Recruiter job description covering sourcing, screening, interview coordination, offers and hiring metrics, plus skills and a talent acquisition posting.",
      keywords: ["recruiter job description", "talent acquisition job description", "recruiter roles and responsibilities", "hr recruiter job posting"],
    },
    sections: jdSections({
      purpose: [
        "A recruiter's output is filled roles of the right quality within an agreed time. The work is part sales (persuading candidates), part assessment (screening fit) and part project management (keeping interview loops moving).",
        "Recruiters may cover one function, such as technology or sales, or hire across the company. Volume and seniority mix decide which profile you need.",
      ],
      responsibilities: [
        "Hold intake meetings with hiring managers to agree the role profile, must-have skills and interview plan.",
        "Write and publish job postings on job boards, the careers page and social channels.",
        "Source candidates through databases, referrals, LinkedIn and direct approach.",
        "Screen CVs and conduct first-round calls on experience, notice period and expectations.",
        "Schedule interviews and collect structured feedback promptly.",
        "Keep the applicant tracking system or hiring tracker current at every stage.",
        "Prepare offers within approved bands and negotiate with candidates.",
        "Initiate background verification and manage candidates through the notice period until joining.",
        "Manage recruitment agencies: briefs, terms and quality of submissions.",
        "Report on pipeline, time to hire, offer acceptance and source effectiveness.",
      ],
      skills: [
        "Graduate in any discipline; HR qualification useful but not essential.",
        "Experience hiring for the functions or levels in scope.",
        "Sourcing skills on job portals and professional networks.",
        "Clear, persuasive communication and the ability to handle rejection on both sides.",
        "Organisation across many open roles at once.",
        "Comfort with an ATS or structured spreadsheet tracker.",
      ],
      differs: [
        "A recruiter focuses on hiring only. An HR generalist may coordinate hiring among many other duties, and an HR executive typically picks up after the offer is accepted, with joining formalities.",
        "Recruiters influence offers but do not set pay structures; that belongs to compensation and benefits.",
      ],
      posting:
        "Say which roles the recruiter will hire for, typical monthly volume and whether agencies are used. A recruiter for senior technology roles and one for high-volume frontline hiring need very different strengths.",
    }),
    template: `Recruiter
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and its growth.]

About the role
You will hire for [functions / levels], around [number] roles a month, reporting to [Reporting to].

What you will do
- Agree role profiles and interview plans with hiring managers
- Write and publish job postings
- Source candidates through portals, referrals and direct approach
- Screen candidates and coordinate interviews
- Make and negotiate offers within approved ranges
- Manage candidates through to joining
- Manage recruitment agencies
- Track and report hiring metrics

What you will bring
- Graduate in any discipline
- [Experience range] in recruitment for [functions / levels]
- Strong sourcing and communication skills
- Experience with an ATS or hiring tracker

How to apply
Send your CV to [Email] with the subject line "Recruiter: [Location]".`,
    faqs: [
      {
        q: "Should we hire an in-house recruiter or use agencies?",
        a: "An in-house recruiter makes sense once hiring is steady across the year. For occasional or very senior roles, agencies or search firms may still be used alongside.",
      },
      {
        q: "What metrics should a recruiter be measured on?",
        a: "Time to hire, offer acceptance rate, quality of hire after probation and hiring manager satisfaction are common choices. Agree them at the start.",
      },
      {
        q: "Does a recruiter need an HR degree?",
        a: "No. Many good recruiters come from sales or the function they hire for. Hiring track record matters more.",
      },
    ],
    related: [
      { label: "Running Employee Background Verification With Consent and Proportion", href: "/resources/hr-guides/background-verification", note: "The step between offer and joining." },
      { label: "Time to Hire", href: "/resources/hr-and-payroll-glossary/time-to-hire", note: "A core recruiting metric." },
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding-and-lifecycle", note: "What happens after the offer is accepted." },
    ],
  },
  {
    slug: "compliance-officer",
    name: "HR compliance officer job description",
    title: "HR compliance officer: labour-law duties and a posting template",
    standfirst:
      "The HR compliance officer makes sure the company meets its labour-law obligations: registrations, registers, returns, notices, licences and inspections.",
    seo: {
      title: "HR Compliance Officer Job Description: Duties and Template",
      description:
        "HR compliance officer job description covering registers, returns, licences, contractor compliance and inspections, with skills and a posting template.",
      keywords: ["hr compliance officer job description", "labour law compliance officer", "statutory compliance executive job description", "hr compliance roles"],
    },
    sections: jdSections({
      purpose: [
        "Labour-law compliance in India is spread across central and state laws, each with its own registrations, registers, returns and renewal dates. The compliance officer keeps that calendar and the evidence that each item was done.",
        "The role matters most for factories, multi-state establishments and companies using contract labour, where obligations multiply and inspections are more frequent.",
      ],
      responsibilities: [
        "Maintain a compliance calendar of every registration, licence renewal, return and payment due for each establishment.",
        "Keep statutory registers (wages, attendance, leave, overtime, fines, advances) in the prescribed form, physically or electronically as permitted.",
        "Display mandatory notices and abstracts at each site and keep them current.",
        "File periodic and annual returns under applicable laws, such as Factories Act, Shops and Establishments, Contract Labour and Payment of Bonus Act returns, as relevant.",
        "Track and renew establishment registrations, factory licences and contract labour registrations and licences.",
        "Audit contractors for EPF, ESI and wage payment compliance, and maintain evidence for principal employer obligations.",
        "Prepare for and attend labour inspections, and respond to notices within the required time.",
        "Monitor changes in central and state rules, including labour code implementation, and brief HR on what changes.",
        "Track minimum wage notifications by state and flag employees or contract workers below the notified rate.",
        "Run periodic internal compliance audits and report gaps with owners and deadlines.",
      ],
      skills: [
        "Graduate; a degree or diploma in labour law, LLB or a postgraduate qualification in HR or labour welfare is common.",
        "Detailed knowledge of the labour laws that apply to your establishments and states.",
        "Experience dealing with labour department, EPFO and ESIC offices.",
        "Methodical record keeping and calendar discipline.",
        "Ability to explain obligations plainly to HR and site managers.",
      ],
      differs: [
        "An HR manager is accountable for compliance outcomes among many other things; the compliance officer specialises in doing and evidencing the work. A payroll manager handles contribution and tax filings tied to pay; the compliance officer covers registrations, registers, licences and non-payroll returns, and checks contractor compliance.",
        "In smaller companies these duties are often handled by an external consultant, with an HR generalist keeping site registers.",
      ],
      posting:
        "List the establishment types (factory, shop, office), the states involved and whether contract labour is engaged. Name the laws you expect candidates to know rather than writing 'all labour laws'.",
    }),
    template: `HR Compliance Officer
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company, its establishments and states of operation.]

About the role
You will manage labour-law compliance for [number] establishments across [states], reporting to [Reporting to].

What you will do
- Maintain the compliance calendar for every establishment
- Keep statutory registers and notices current
- File returns and renew registrations and licences
- Audit contractor compliance for EPF, ESI and wages
- Prepare for and attend labour inspections
- Track rule changes and minimum wage notifications
- Run internal compliance audits

What you will bring
- Graduate; labour law or HR qualification preferred
- [Experience range] in labour-law compliance
- Knowledge of [list the relevant laws]
- Experience dealing with labour department, EPFO and ESIC offices

How to apply
Send your CV to [Email] with the subject line "HR Compliance Officer: [Location]".`,
    faqs: [
      {
        q: "What qualification suits an HR compliance officer?",
        a: "A labour law diploma, LLB or HR postgraduate qualification is common. Practical experience with filings and inspections in your states counts for a lot.",
      },
      {
        q: "Do the labour codes change this role?",
        a: "Yes. The codes came into force on 21 November 2025 and change the laws the role works from. State rules under them differ and some are still in draft, so check the position in each state you operate in.",
      },
      {
        q: "When does a company need a dedicated compliance officer?",
        a: "Usually when it has factories, several states, or significant contract labour. Below that, a consultant plus an HR generalist is common.",
      },
    ],
    related: [
      { label: "Compliance", href: "/solutions/compliance", note: "Statutory compliance in an HRMS." },
      { label: "Maintaining Statutory Registers Without a Filing Cabinet Crisis", href: "/resources/hr-guides/statutory-registers", note: "Registers this role maintains." },
      { label: "Preparing for a Labour Inspection Before the Notice Arrives", href: "/resources/hr-guides/labour-inspection-preparation", note: "Getting ready for an inspection." },
    ],
    verify: "Which returns and registers apply depends on the establishment, state and the current status of the labour codes and state rules. Confirm before listing specific filings.",
  },
  {
    slug: "learning-and-development-manager",
    name: "Learning & development (L&D) manager job description",
    title: "Learning and development manager: role and posting template",
    standfirst:
      "The L&D manager decides what capability the organisation needs to build and runs the programmes that build it, from induction to leadership development.",
    seo: {
      title: "L&D Manager Job Description: Responsibilities and Template",
      description:
        "L&D manager job description with training needs analysis, programme design, budget and evaluation duties, skills, adjacent roles and a ready job posting.",
      keywords: ["l&d manager job description", "learning and development manager job description", "training manager job description", "l&d roles and responsibilities"],
    },
    sections: jdSections({
      purpose: [
        "L&D exists to close the gap between the skills people have and the skills the business needs. The manager's job is to find the gaps that matter most, choose how to close them and show whether it worked.",
        "In many Indian companies L&D also runs mandatory programmes such as induction, POSH awareness and safety training, alongside role and leadership development.",
      ],
      responsibilities: [
        "Run an annual training needs analysis using appraisal outcomes, skills data and business plans.",
        "Build and publish the yearly learning calendar and budget.",
        "Design induction programmes for different roles and locations.",
        "Run mandatory training, such as POSH awareness and safety training where applicable, and keep attendance records.",
        "Design or source programmes for managers and future leaders, linked to succession plans.",
        "Select and manage external trainers, content providers and platforms.",
        "Train internal trainers and subject experts to deliver sessions.",
        "Evaluate programmes through feedback, assessments and changes in on-the-job performance.",
        "Maintain training records and individual development plans.",
        "Report learning participation and outcomes to leadership.",
      ],
      skills: [
        "Postgraduate qualification in HR, education or psychology, or equivalent experience.",
        "Experience designing and delivering adult learning programmes.",
        "Facilitation skills for workshops and senior audiences.",
        "Vendor and budget management.",
        "Ability to link learning to measurable job performance.",
      ],
      differs: [
        "An HRBP identifies capability needs in their business unit; the L&D manager decides how to meet them across the organisation and runs the programmes. A generalist may organise occasional training but does not own a learning strategy or budget.",
        "Compensation and benefits sets reward; L&D works alongside it on career paths and skills frameworks, but does not decide pay.",
      ],
      posting:
        "State the audience (frontline, sales, technology, managers), whether the role delivers training personally or mainly designs and buys it, and the size of any L&D team. These determine whether you need a trainer, a designer or a manager.",
    }),
    template: `Learning and Development Manager
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and its workforce.]

About the role
You will lead learning and development for [number] employees, reporting to [Reporting to].

What you will do
- Run the annual training needs analysis
- Build the learning calendar and manage the budget
- Design induction and mandatory training
- Develop managers and future leaders
- Select and manage trainers and content providers
- Evaluate programmes and report outcomes

What you will bring
- Postgraduate qualification in HR, education or a related field
- [Experience range] in learning and development
- Programme design and facilitation experience
- Vendor and budget management

How to apply
Send your CV to [Email] with the subject line "L&D Manager: [Location]".`,
    faqs: [
      {
        q: "What experience should an L&D manager have?",
        a: "Usually seven years or more in training or L&D, with some programme design and vendor management, not only delivery.",
      },
      {
        q: "Is a certification required?",
        a: "Not usually. Facilitation or instructional design certifications can help, but evidence of programmes designed and their results matters more.",
      },
      {
        q: "How should L&D link to performance reviews?",
        a: "Appraisal outcomes and development plans are a main input to the training needs analysis. Agree with HR how that data reaches L&D each cycle.",
      },
    ],
    related: [
      { label: "Performance & OKRs", href: "/solutions/performance-and-okrs", note: "Where development needs come from." },
      { label: "Performance & OKRs", href: "/solutions/performance-and-okrs", note: "Where skills sit alongside KRAs, OKRs and reviews." },
      { label: "Running an Appraisal Cycle End to End", href: "/resources/hr-guides/running-an-appraisal-cycle", note: "A key input to training needs." },
    ],
  },
  {
    slug: "compensation-and-benefits-manager",
    name: "Compensation & benefits manager job description",
    title: "Compensation and benefits manager: reward role and posting",
    standfirst:
      "The C&B manager designs how people are paid and rewarded: salary structures, pay ranges, revision cycles, incentives and benefits.",
    seo: {
      title: "Compensation and Benefits Manager Job Description Template",
      description:
        "Compensation and benefits manager job description covering salary structures, revisions, incentives and benefits, with skills and a posting template.",
      keywords: ["compensation and benefits manager job description", "c&b manager job description", "rewards manager job description", "compensation manager roles"],
    },
    sections: jdSections({
      purpose: [
        "Compensation and benefits decides what each role is worth to the company and how that value is paid. In India this includes the CTC structure itself, the split between basic, HRA and allowances, and how those choices affect EPF, gratuity and employee tax.",
        "The role balances three things: fairness inside the organisation, competitiveness outside it, and cost the business can carry.",
      ],
      responsibilities: [
        "Design and maintain grade structures and pay ranges for each level.",
        "Define CTC components and their rules, considering their effect on EPF, gratuity, bonus and employee taxation.",
        "Run the annual salary revision: budget, guidelines, manager recommendations and final approval.",
        "Participate in and interpret salary surveys to position pay against the market.",
        "Design sales incentives and variable pay plans, including eligibility and payout rules.",
        "Review offers outside range and approve exceptions.",
        "Manage benefits such as group health and term insurance, flexible benefit plans and leave encashment policies.",
        "Analyse internal pay equity across gender, role and location, and recommend corrections.",
        "Work with payroll to implement structure changes accurately.",
        "Communicate total rewards clearly to employees and managers.",
      ],
      skills: [
        "Postgraduate qualification in HR or finance.",
        "Experience designing salary structures and running revision cycles.",
        "Understanding of how Indian statutory rules interact with pay components.",
        "Strong spreadsheet modelling and analytical skills.",
        "Benefits and insurance vendor management.",
        "Discretion with highly confidential data.",
      ],
      differs: [
        "C&B decides what to pay and how pay is structured; the payroll manager pays it correctly and handles deductions and filings. Changes flow from C&B to payroll, not the other way.",
        "HRBPs and recruiters apply pay decisions in their conversations and offers, but do not set ranges or structures.",
      ],
      posting:
        "Say whether the role covers incentives and benefits as well as fixed pay, whether you use external salary surveys, and how many grades and locations are in scope. Do not put salary data or survey figures in the posting itself.",
    }),
    template: `Compensation and Benefits Manager
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and its size.]

About the role
You will own compensation and benefits for [number] employees across [number] locations, reporting to [Reporting to].

What you will do
- Maintain grade structures, pay ranges and CTC components
- Run the annual salary revision cycle
- Interpret salary surveys and advise on pay positioning
- Design incentive and variable pay plans
- Manage employee benefits and insurance
- Review internal pay equity
- Work with payroll to implement changes

What you will bring
- Postgraduate qualification in HR or finance
- [Experience range] in compensation and benefits
- Understanding of Indian salary structures and statutory implications
- Strong analytical and modelling skills

How to apply
Send your CV to [Email] with the subject line "C&B Manager: [Location]".`,
    faqs: [
      {
        q: "When does a company need a dedicated C&B manager?",
        a: "Usually once there are enough grades, locations or incentive plans that ad hoc pay decisions start creating inconsistencies. Smaller companies often split the work between the HR manager and finance.",
      },
      {
        q: "What experience is typical?",
        a: "Often seven years or more, including at least one full salary revision cycle run end to end.",
      },
      {
        q: "Why does C&B need statutory knowledge?",
        a: "The way CTC is split changes EPF contributions, gratuity, bonus eligibility and employee tax. Structure decisions need to account for the current rules.",
      },
    ],
    related: [
      { label: "Running an Annual Salary Revision, From Budget to Arrears", href: "/resources/hr-guides/salary-revision-cycle", note: "The annual process this role runs." },
      { label: "CTC (Cost to Company) vs Gross vs Net Salary", href: "/resources/compare/ctc-vs-gross-vs-net-salary", note: "The pay terms the role defines." },
      { label: "Payroll Manager Job Description", href: "/resources/job-description-templates/payroll-manager", note: "The role that implements pay decisions." },
    ],
    verify: "The definition of wages under the Code on Wages, in force since 21 November 2025, adds back allowances above half of total remuneration, which may affect how CTC components are split. Check the rules in force before restructuring pay.",
  },
  {
    slug: "hris-analyst",
    name: "HR information systems (HRIS) analyst job description",
    title: "HR information systems (HRIS) analyst: running the HR system and its data",
    standfirst:
      "The HRIS analyst configures and maintains the HR system, keeps its data clean and secure, and produces the reports HR and leadership rely on.",
    seo: {
      title: "HRIS Analyst Job Description: Duties, Skills and Template",
      description:
        "HRIS analyst job description covering HRMS configuration, data quality, access control, reporting and system changes, with skills and a ready-to-paste posting.",
      keywords: ["hris analyst job description", "hr systems analyst job description", "hrms administrator job description", "hris roles and responsibilities"],
    },
    sections: jdSections({
      purpose: [
        "Once HR runs on an HRMS, someone has to own the system: its configuration, its data and who can see what. The HRIS analyst is that owner, sitting between HR users, IT and the software vendor.",
        "The role is valuable when the system holds payroll, attendance and performance data together, because a configuration mistake in one area can flow into pay or compliance.",
      ],
      responsibilities: [
        "Configure the HRMS: leave types, attendance rules, approval workflows, salary components and organisation structure, as HR policy requires.",
        "Run bulk data imports and updates, with validation before and after.",
        "Set up and review role-based access so people see only the data their role needs.",
        "Run regular data quality checks for missing, duplicate or inconsistent records.",
        "Build and maintain standard reports and dashboards for HR, finance and leadership.",
        "Test system changes and vendor updates before they reach users.",
        "Manage the queue of HR system requests and issues and escalate to the vendor where needed.",
        "Document configurations and maintain a change log.",
        "Train HR staff and managers on system use and new features.",
        "Support implementation of new modules and migration from spreadsheets or older systems.",
      ],
      skills: [
        "Graduate in HR, IT, commerce or a related field.",
        "Hands-on experience administering an HRMS or HRIS.",
        "Advanced spreadsheet skills; SQL or reporting tool experience is useful.",
        "Understanding of HR and payroll processes enough to translate policy into configuration.",
        "Care with personal data and access control.",
        "Methodical testing and documentation habits.",
      ],
      differs: [
        "An HR generalist uses the system to do HR work; the HRIS analyst configures and maintains it. The analyst does not handle employee cases, and the generalist does not change workflows or access rights.",
        "A payroll executive runs payroll within the system; the HRIS analyst sets up the salary components and rules that payroll depends on, and tests them.",
      ],
      posting:
        "Name the HRMS modules in scope and whether the role also handles payroll configuration or integrations with other systems. Ask for experience with any HRMS rather than one product, unless you truly need a specific one.",
    }),
    template: `HRIS Analyst
[Company] | [Location] | Full-time

About us
[Two or three sentences about the company and its HR systems.]

About the role
You will own our HR system for [number] employees, covering [modules], reporting to [Reporting to].

What you will do
- Configure leave, attendance, workflow and payroll settings
- Run data imports and quality checks
- Manage role-based access
- Build reports and dashboards
- Test changes and vendor updates
- Handle system requests and vendor escalations
- Document configuration and train users

What you will bring
- Graduate in HR, IT, commerce or related field
- [Experience range] administering an HRMS or HRIS
- Advanced spreadsheet skills; SQL or reporting tools a plus
- Understanding of HR and payroll processes

How to apply
Send your CV to [Email] with the subject line "HRIS Analyst: [Location]".`,
    faqs: [
      {
        q: "Does an HRIS analyst need a technical background?",
        a: "Not necessarily. Many come from HR operations or payroll and learn the system deeply. Logical thinking and care with data matter more than coding.",
      },
      {
        q: "When do we need an HRIS analyst?",
        a: "When the HR system covers several modules and changes frequently, or when report and access requests are taking up HR staff time.",
      },
      {
        q: "What tools should candidates know?",
        a: "Any HRMS, spreadsheets at an advanced level and ideally a reporting tool. Product-specific experience shortens ramp-up but is not essential.",
      },
    ],
    related: [
      { label: "Deciding Who Can See Which Employee Data", href: "/resources/hr-guides/hr-data-access-control", note: "Setting role-based access." },
      { label: "Cleaning and Importing the Employee Master", href: "/resources/hr-guides/importing-employee-data", note: "Bulk data loads and validation." },
      { label: "Human Resource Information System (HRIS)", href: "/resources/hr-and-payroll-glossary/hris", note: "What an HR information system covers." },
    ],
  },
];

export const jobDescriptionsCollection: LibCollection = {
  base: "/resources/job-description-templates",
  label: "Job description templates",
  hub: {
    title: "Job descriptions for HR and payroll roles",
    standfirst: "Role-by-role job descriptions for the people who run HR, payroll and compliance, written to be adapted rather than pasted.",
    intro: [
      "Each page sets out what the role is for, its core responsibilities, the skills it needs and how it differs from the roles next to it, so you can write a posting that attracts the right applicants.",
      "Seniority, reporting lines and scope vary by company size. Treat each description as a base to adjust, not a fixed standard.",
    ],
    seo: {
      title: "HR Job Description Templates: HR, Payroll & Compliance Roles",
      description: "Job description templates for HR executives, HR managers, HRBPs, payroll, recruitment, compliance, L&D, C&B and HRIS roles, with responsibilities and skills.",
      keywords: ["hr job description templates", "hr roles and responsibilities", "payroll job descriptions"],
    },
  },
  pages,
};

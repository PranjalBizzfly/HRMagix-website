import type { Guide } from "./guides";

export const guidesMoreB: Guide[] = [
  /* ================================================================= */
  {
    slug: "hrms-buyers-checklist",
    number: "16",
    title: "What to ask before you sign an HRMS contract",
    audience:
      "The person running an HRMS evaluation at a growing Indian company, usually an HR head or finance lead with a shortlist of three vendors and a deadline.",
    outcome:
      "Run a vendor evaluation that tests your own payroll, your own policies and your own exit terms, rather than the vendor's demo script.",
    minutes: 14,
    seo: {
      title: "HRMS Evaluation Checklist: Questions Before You Sign",
      description:
        "A vendor-neutral HRMS evaluation checklist: what to test in a demo, which payroll questions to ask, and what the contract must say about your data.",
      keywords: ["hrms evaluation checklist", "hrms buying checklist", "questions to ask hrms vendor", "how to choose an hrms"],
    },
    opening: [
      "Every HRMS demo looks good, because a demo is built around the vendor's cleanest data and most common case. Your company is not the common case. It has the employee who rejoined, the allowance nobody can explain, the two states with different professional tax schedules and the manager who approves everything at eleven at night.",
      "This checklist is vendor-neutral on purpose. It does not tell you which product to buy; it tells you how to find out whether a product handles your situation, and what to get in writing before you sign. If you are still deciding which category of system you need at all, read the HRMS comparison first and come back here with a shortlist.",
    ],
    chapters: [
      {
        title: "Write down your own requirements before the first demo",
        body: [
          "A requirements list written after three demos is a list of the features you were shown. Write yours first, from the problems you actually have, and rank them. Most companies find that four or five requirements decide the purchase and the rest are tie-breakers.",
          "Separate what you need on the first payroll from what you will need in two years. A requirement you cannot use until you have a performance process is not a reason to pay for it today, though it may be a reason to prefer a vendor who offers it.",
        ],
        list: {
          style: "bullet",
          items: [
            "Headcount today and the number of legal entities, states and locations you pay in",
            "Workforce mix: salaried, shift, field, contract, interns, and who must use a phone rather than a laptop",
            "Statutory registrations you hold: EPF, ESI, professional tax by state, labour welfare fund where applicable",
            "Your leave policy, sandwich rule and carry-forward rules, written down rather than remembered",
            "Who approves what today, including the exceptions",
            "Reports finance and leadership expect each month",
          ],
        },
      },
      {
        title: "Make the vendor run your payroll, not theirs",
        body: [
          "Give each shortlisted vendor the same small, anonymised sample: a handful of employees chosen because they are awkward. Someone near the ESI wage threshold, someone with a mid-month joining date, someone with loss-of-pay days, someone in a second state, someone with arrears from a revision. Ask them to process that month and show you the payslips and the statutory output.",
          "Compare the result to what you actually paid, head by head. Where a figure differs, ask the vendor to explain it. A good answer names the rule that produced the difference and shows you where it is configured. An answer that promises to fix it later tells you how the implementation will go.",
        ],
        watch:
          "Watch who drives the demo. If only the vendor's presales team can produce the result, ask to see the same screen operated by someone in their support team, because that is who you will be working with after go-live.",
      },
      {
        title: "Test the employee and manager side on a phone",
        body: [
          "An HRMS succeeds or fails on whether employees and managers use it. If leave requests still arrive on chat because the app is awkward, your HR team ends up keying them in, and you have bought a database rather than a system.",
          "Hand a phone to someone who is not in HR and ask them to apply for leave, check a payslip and download a tax declaration form. Hand another to a manager and ask them to approve a request and see who in their team is off this week. Time is not the measure; whether they needed help is.",
        ],
      },
      {
        title: "Ask the data questions most buyers skip",
        body: [
          "Your employee data will outlive the contract. The questions that matter most are about how it gets in, who can see it once it is there, and how it gets out again.",
        ],
        list: {
          style: "ordered",
          items: [
            "How is the employee master imported, and who cleans the data, you or the vendor",
            "Can year-to-date payroll figures be loaded for a mid-year switch, and how are they reconciled",
            "How are roles and permissions defined, and can access be limited by entity, location or department",
            "Is there an audit trail of who changed a salary, a bank account or an attendance record",
            "Where is the data hosted, and what security documentation will the vendor share",
            "On exit, in what format do you get your data back, including historical payslips, and within what period",
          ],
        },
        watch:
          "Get the data export terms into the contract, not into an email. A vendor's goodwill at the start of a relationship is not the same as an obligation at the end of one.",
      },
      {
        title: "Read the commercial terms as carefully as the features",
        body: [
          "Pricing models differ in ways that only show up as you grow. Per-employee pricing scales with headcount; module pricing scales with ambition. Ask what the bill looks like at your current size and at twice your size, and which charges are one-time and which recur.",
          "Ask specifically about implementation fees, data migration fees, charges for additional entities or states, charges for statutory updates and any minimum commitment period. Ask who pays when a change in law requires a change in configuration. Then ask for the answers in the order form.",
        ],
      },
      {
        title: "Check references against your own situation",
        body: [
          "A reference customer chosen by the vendor will be positive. That is still useful if you ask the right questions. Ask for a reference of similar size, in a similar industry, that moved mid-year from spreadsheets or from another system.",
          "Ask the reference what went wrong in the first three payroll runs and how long it took to resolve, what they still do outside the system, and whether they would choose the same vendor again. The second question is usually the most revealing.",
        ],
      },
    ],
    checklist: [
      "Requirements written and ranked before the first demo",
      "The same awkward sample month processed by every shortlisted vendor",
      "Payslips and statutory output compared head by head with what you actually paid",
      "Employee and manager journeys tested on a phone by people outside HR",
      "Roles, permissions and audit trail demonstrated, not described",
      "Data export format and timing on exit written into the contract",
      "Pricing confirmed at current headcount and at double, with every one-time fee listed",
      "At least one reference of similar size and situation spoken to directly",
    ],
    related: [
      {
        label: "HRMS Comparison",
        href: "/resources/hrms-comparison",
        note: "Which category of system fits your company, before you compare vendors.",
      },
      {
        label: "Moving HR Off Spreadsheets and Into an HRMS",
        href: "/resources/hr-guides/moving-from-spreadsheets-to-hrms",
        note: "What happens after you sign.",
      },
      {
        label: "HRMagix Plan Cost",
        href: "/calculators/plan-cost",
        note: "Estimate what HRMagix would cost at your headcount.",
      },
      {
        label: "Setup, Data & Security FAQs",
        href: "/resources/questions-and-answers/setup-data-and-security",
        note: "How HRMagix answers the data questions in this guide.",
      },
    ],
    faqs: [
      {
        q: "How many HRMS vendors should we shortlist?",
        a: "Enough to compare, few enough to test properly. Running the same sample payroll month with every shortlisted vendor takes real effort on both sides, so most companies find that a small shortlist tested thoroughly beats a long one tested by demo.",
      },
      {
        q: "Should we buy payroll and HR together or separately?",
        a: "It depends on how much your payroll depends on attendance and leave. If loss-of-pay days, overtime and leave encashment feed payroll every month, one system avoids a monthly file transfer. If your workforce is small and salaried, separate tools can work. The HRMS comparison sets out the trade-off.",
      },
      {
        q: "What is the most common mistake in an HRMS evaluation?",
        a: "Judging the product on the vendor's demo data. Every system handles a clean, salaried employee in one state. The differences appear with mid-month joiners, multi-state professional tax, arrears and loss-of-pay, so test those.",
      },
      {
        q: "What should the contract say about our data?",
        a: "Who owns it, where it is hosted, what happens to it on termination, the export format, the period within which it will be provided, and whether historical payslips and audit trails are included. Get each of these in writing.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "moving-from-spreadsheets-to-hrms",
    number: "17",
    title: "Moving HR off spreadsheets and into an HRMS",
    audience:
      "HR and finance teams at companies that have run employee records, leave and payroll on spreadsheets and have now bought, or are about to buy, an HRMS.",
    outcome:
      "Plan the switch in a sensible order, decide what moves and what stays behind, and get employees and managers using the new system rather than working around it.",
    minutes: 13,
    seo: {
      title: "Spreadsheet to HRMS Migration: Planning the Switch",
      description:
        "A practical guide to spreadsheet to HRMS migration: what to move first, which records to clean, how to sequence modules and how to retire old sheets.",
      keywords: ["spreadsheet to hrms migration", "moving hr from excel to hrms", "hrms implementation plan", "replace hr spreadsheets"],
    },
    opening: [
      "Spreadsheets run HR at a surprising number of companies for a surprisingly long time, and they do not fail suddenly. They fail by accumulation: a leave tracker per manager, a salary sheet only one person may open, a joining date that is different in three files. By the time you decide to move, the spreadsheets have become the institutional memory, and the migration is mostly the work of deciding which version of that memory is true.",
      "This guide covers the whole switch: sequencing, what to bring across, how to run old and new side by side, and how to make sure the spreadsheets are actually retired. The detailed mechanics of loading the employee master have their own guide, and so does the first payroll run.",
    ],
    chapters: [
      {
        title: "Inventory every spreadsheet before you plan anything",
        body: [
          "Ask every person who touches HR data to list the files they keep. Not the official ones, all of them. The leave tracker a manager maintains for her team, the list of laptop serial numbers, the sheet that tracks who has submitted investment proofs. Each one is either data that must move, a process the new system must replace, or something that can stop.",
          "For each file, note who owns it, who reads it, how often it changes and what decision depends on it. That list becomes your migration scope, and it usually reveals at least one process nobody in management knew existed.",
        ],
      },
      {
        title: "Sequence the switch around payroll",
        body: [
          "Payroll is the module with a hard monthly deadline and statutory consequences, so it sets the calendar. Everything else either feeds payroll or does not, and that determines its place in the order.",
        ],
        list: {
          style: "ordered",
          items: [
            "Employee master: every other module refers to it",
            "Salary structures and statutory registrations: payroll cannot compute without them",
            "Leave balances and the holiday calendar: they decide paid days",
            "Attendance capture: where loss-of-pay and overtime come from",
            "Payroll, with a parallel month against the old process",
            "Self-service for employees and approvals for managers",
            "Performance, onboarding workflows and documents, once the monthly cycle is stable",
          ],
        },
        watch:
          "Resist going live with everything at once to save a month. If the first payroll run disagrees with the old one, you want as few new moving parts as possible to search through.",
      },
      {
        title: "Decide what history to bring across",
        body: [
          "You do not need to migrate every spreadsheet row since the company was founded. You need what the new system must act on and what you may be asked to produce.",
          "Bring across current employee records, opening leave balances, current salary structures and, for a mid-year switch, year-to-date payroll figures. Archive the rest in a read-only, dated location with a clear owner, so the history is retrievable without pretending it lives in the new system.",
        ],
      },
      {
        title: "Clean the data once, at the boundary",
        body: [
          "Migration is the one moment when every record passes through a single point, which makes it the cheapest moment to fix it. Duplicate employees, inconsistent department names, missing statutory identifiers and joining dates that differ between files all have to be resolved before load, not after.",
          "Decide who has authority to resolve a conflict. When the leave tracker and the payroll sheet disagree on a joining date, someone must decide which is correct and record why. Without that authority the cleanup stalls on every disputed record.",
        ],
      },
      {
        title: "Bring managers and employees across with a plan",
        body: [
          "The system replaces the spreadsheets only when people stop sending requests by chat and email. Announce a date after which leave is applied for only in the system, and hold to it. A manager who keeps approving on chat keeps the old process alive for their whole team.",
          "Show managers the two or three things they will do every week, not the full product. Show employees how to apply for leave and download a payslip. Everything else can be learned when it is needed.",
        ],
      },
      {
        title: "Retire the spreadsheets, visibly",
        body: [
          "The most common failure in a spreadsheet migration is that the spreadsheets survive. Someone keeps updating the old salary sheet just in case, and within six months there are two sources of truth again.",
          "After the first clean payroll close, move each old file to the archive, make it read-only and tell everyone it has happened. If a report still depends on a spreadsheet, build it in the new system or write down why it cannot be.",
        ],
      },
    ],
    checklist: [
      "Every HR spreadsheet listed with its owner, readers and purpose",
      "Module sequence agreed, with payroll setting the calendar",
      "Scope of history to migrate decided, and the rest archived read-only",
      "Data conflicts resolved by a named person with authority",
      "A cut-over date after which leave and approvals happen only in the system",
      "One parallel payroll month completed before the first live close",
      "Old spreadsheets archived and the team told they are retired",
    ],
    related: [
      {
        label: "Cleaning and Importing the Employee Master",
        href: "/resources/hr-guides/importing-employee-data",
        note: "Cleaning and loading the employee master in detail.",
      },
      {
        label: "Running Your First Payroll in a New System",
        href: "/resources/hr-guides/first-payroll-run",
        note: "The parallel month and year-to-date figures.",
      },
      {
        label: "What to Ask Before You Sign an HRMS Contract",
        href: "/resources/hr-guides/hrms-buyers-checklist",
        note: "The questions to ask before you choose a system.",
      },
      {
        label: "Employee Records Guide",
        href: "/hr/topics/employee-records",
        note: "What a complete employee record holds.",
      },
    ],
    faqs: [
      {
        q: "What should move first from spreadsheets to an HRMS?",
        a: "The employee master, because every other module refers to it. Salary structures and statutory registrations come next, then leave balances and attendance, then payroll with a parallel month.",
      },
      {
        q: "Do we need to migrate all historical data?",
        a: "No. Migrate what the system must act on: current records, opening leave balances, current salary structures and, if switching mid-year, year-to-date payroll figures. Archive older history read-only with a named owner.",
      },
      {
        q: "How do we stop people going back to spreadsheets?",
        a: "Set a cut-over date after which requests are accepted only in the system, make the old files read-only, and make sure every report people relied on exists in the new system. Spreadsheets survive when they still answer a question the system does not.",
      },
      {
        q: "Is it better to switch at the start of the financial year?",
        a: "For payroll it is cleaner, because no year-to-date figures have to move. A mid-year switch is workable but requires carrying across gross paid, deductions and tax deducted so far, reconciled to what has already been filed.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "importing-employee-data",
    number: "18",
    title: "Cleaning and importing the employee master",
    audience:
      "The HR or operations person preparing the employee data file for a new HRMS, often with a vendor template open in one window and four old spreadsheets in another.",
    outcome:
      "Build an import file that loads cleanly, with duplicates resolved, codes standardised and every field the payroll will rely on checked before it goes in.",
    minutes: 12,
    seo: {
      title: "Employee Data Import: Cleaning the Master Before Load",
      description:
        "How to prepare an employee data import for a new HRMS: one source file, fixing duplicates and codes, checking statutory fields, safe load order.",
      keywords: ["employee data import", "employee master data migration", "hrms data import", "employee data cleanup"],
    },
    opening: [
      "An employee data import looks like a formatting exercise: map the columns, fix the dates, upload. In practice almost all the effort goes into deciding what is true, because the data you are importing has been maintained by different people in different files for different purposes, and they disagree.",
      "This guide covers building the import file, cleaning it, and loading it in an order that lets you catch errors before they reach payroll. It assumes you are moving from spreadsheets or an older system; the wider plan for that switch is in a separate guide.",
    ],
    chapters: [
      {
        title: "Build one source file from many",
        body: [
          "Start by pulling every file that holds employee data into one working file, with a column recording where each value came from. Payroll sheets, the joining tracker, the bank details file, the statutory register. Do not clean anything yet; just assemble.",
          "Then pick a key. An employee code is best if one exists and is unique; if not, assign one now, before the import, so every later file can refer to it. Names are not keys: two people can share one, and one person can be spelt three ways.",
        ],
      },
      {
        title: "Resolve duplicates and conflicts",
        body: [
          "Sort by name, date of birth and PAN and look for the same person appearing twice. Rehires, transfers between entities and people who changed their name after marriage are the usual causes. Decide whether a rehire is one record with two periods of service or two records, and apply the decision consistently, because gratuity and leave both count from the joining date.",
          "Where two files disagree on the same field, record which source wins for that field and why. Bank account from the latest payroll file, joining date from the appointment letter, and so on. That rule set is worth keeping: it answers the questions that come up after go-live.",
        ],
        watch:
          "Joining dates are the field most worth checking against a document. A wrong one does not show up for years, until somebody's gratuity or long-service eligibility is calculated from it.",
      },
      {
        title: "Standardise the codes every report depends on",
        body: [
          "Departments, designations, locations, grades and cost centres are usually typed freely in spreadsheets, which is how one department ends up with five spellings. Build a master list for each, map every existing value to it, and load the masters before the employees.",
          "This step decides whether your reports are trustworthy. A headcount by department is only as good as the department field, and fixing it after import means editing every record.",
        ],
      },
      {
        title: "Check the fields payroll will rely on",
        body: [
          "Some fields can be corrected later without consequence. Others feed statutory filings and bank transfers, and errors in them cost money or create notices. Check these field by field, against a document where possible.",
        ],
        list: {
          style: "bullet",
          items: [
            "PAN, in the right format and matching the name on record",
            "UAN for employees covered by EPF, and ESI number where applicable",
            "Bank account number and IFSC, ideally confirmed against a cancelled cheque or bank letter",
            "Date of birth and date of joining, in one date format throughout",
            "Work location and state, which decide professional tax and the holiday calendar",
            "Reporting manager, as an employee code rather than a name",
          ],
        },
      },
      {
        title: "Load in order, and test with a small batch",
        body: [
          "Load the masters first: entities, locations, departments, designations, grades. Then a small batch of employees chosen to include the awkward cases. Check them on screen, check that the reporting lines resolve, and check that a sample payslip computes before loading the rest.",
          "Reporting managers create a dependency: a manager must exist before an employee can report to them. Either load in hierarchy order or load everyone first and the reporting lines in a second pass.",
        ],
      },
      {
        title: "Reconcile after the load",
        body: [
          "After the full load, count. Active headcount by entity, location and department in the new system should match the cleaned source file exactly. Total monthly gross by entity should match too. A difference means a row failed or loaded twice.",
          "Keep the final import file, the source-precedence rules and the reconciliation as a dated record. They are the evidence of what you loaded and why, and they make the next import, an acquisition or a new entity, much faster.",
        ],
      },
    ],
    checklist: [
      "All employee data sources assembled in one working file with a source column",
      "A unique employee code assigned to every person before import",
      "Duplicates resolved, with a stated rule for rehires and transfers",
      "Source precedence recorded field by field",
      "Department, designation, location and grade masters built and mapped",
      "PAN, UAN, ESI number, bank details and dates checked against documents",
      "Masters loaded first, then a small test batch, then the rest",
      "Headcount and gross reconciled to the source after load",
    ],
    related: [
      {
        label: "Moving HR Off Spreadsheets and Into an HRMS",
        href: "/resources/hr-guides/moving-from-spreadsheets-to-hrms",
        note: "The wider plan this import sits inside.",
      },
      {
        label: "Running Your First Payroll in a New System",
        href: "/resources/hr-guides/first-payroll-run",
        note: "What happens once the master is loaded.",
      },
      {
        label: "Employee Records Guide",
        href: "/hr/topics/employee-records",
        note: "What belongs in the employee record.",
      },
      {
        label: "Employee Management",
        href: "/solutions/employee-management",
        note: "Where the employee master lives in HRMagix.",
      },
    ],
    faqs: [
      {
        q: "What is the best key for an employee data import?",
        a: "A unique employee code. If your spreadsheets do not have one, assign codes before the import so every file can refer to them. Names are not reliable keys.",
      },
      {
        q: "How should rehired employees be imported?",
        a: "Decide whether a rehire is one record with two periods of service or two separate records, and apply it consistently. The choice affects how service is counted for leave and gratuity, so check it with whoever owns those calculations.",
      },
      {
        q: "Which fields need the most checking?",
        a: "The ones that feed statutory filings and payments: PAN, UAN, ESI number, bank account and IFSC, date of joining, date of birth and work state. Errors there cost money or produce notices.",
      },
      {
        q: "How do we know the import worked?",
        a: "Reconcile counts and totals. Active headcount by entity, location and department, and total gross by entity, should match the cleaned source file exactly.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "hr-data-access-control",
    number: "19",
    title: "Deciding who can see which employee data",
    audience:
      "HR heads, founders and IT leads setting up roles in an HRMS, or tightening access after realising more people can see salaries than should.",
    outcome:
      "Classify employee data by sensitivity, design roles around jobs rather than people, and keep access correct as people join, move and leave.",
    minutes: 12,
    seo: {
      title: "HR Data Security and Access: Who Sees Which Records",
      description:
        "A guide to HR data security and access control: classifying employee data, designing roles by job, scoping by location, and reviewing access.",
      keywords: ["hr data security access", "hrms role based access", "employee data access control", "who can see salary data"],
    },
    opening: [
      "Most HR data leaks are not breaches. They are a salary sheet forwarded to the wrong person, a manager who can see the pay of a peer's team, or a former HR executive whose login still works. The data was available to someone who did not need it, and eventually that mattered.",
      "Access control in an HRMS is the work of deciding, in advance, who needs to see what to do their job. This guide sets out how to classify the data, how to design roles, and how to keep them correct over time. The legal obligations around personal data are a separate subject and worth taking advice on; this guide is about the practical design.",
    ],
    chapters: [
      {
        title: "Classify the data before you assign anyone to it",
        body: [
          "Not every field is equally sensitive, and treating everything as confidential makes the system unusable while treating everything as open is how leaks happen. Sort employee data into a small number of tiers and decide access per tier.",
        ],
        list: {
          style: "bullet",
          items: [
            "Directory: name, designation, department, location, work email, reporting line. Usually visible to all employees",
            "Employment: date of joining, grade, employment type, probation status. Visible to HR and the line management chain",
            "Compensation: salary structure, revisions, bonuses, loans, deductions. Visible to payroll and a small set of approvers",
            "Personal and identity: PAN, Aadhaar, bank account, address, emergency contacts, family details. Visible to the employee and the HR staff who process them",
            "Sensitive case data: medical documents, disciplinary records, grievance and POSH matters. Restricted to named people per case",
          ],
        },
      },
      {
        title: "Design roles around jobs, not people",
        body: [
          "A role describes what a job needs: payroll processor, HR business partner, line manager, finance approver, auditor. Assign people to roles rather than granting individual permissions, so that when someone changes job you change their role rather than unpicking a list of exceptions.",
          "Keep the number of roles small enough to explain. If every new request produces a new role, the role list stops meaning anything and nobody can say with confidence who sees what.",
        ],
        watch:
          "Be careful with the super-admin role. It is convenient during implementation and dangerous afterwards. Limit it to the smallest number of people who need it, and do not use it for daily work.",
      },
      {
        title: "Scope access by entity, location and reporting line",
        body: [
          "A role answers what someone can see; scope answers whose. An HR executive at one plant usually needs the records for that plant, not the whole company. A manager needs their own team, and often their skip-level team, but not a peer's.",
          "Base manager access on the reporting line in the employee record rather than a separately maintained list. When a reorganisation moves a team, the access moves with it, and nobody has to remember to update a permission.",
        ],
      },
      {
        title: "Separate who can change data from who can see it",
        body: [
          "Viewing a salary and changing one are different powers. Someone who can both edit a bank account and approve a payroll run can redirect a salary without anyone else noticing. Split the duties: one person maintains, another approves, and the system records both.",
          "The same applies to attendance corrections, salary revisions and loan entries. Any change that moves money should need a second person and leave an audit trail of who changed what and when.",
        ],
      },
      {
        title: "Handle joiners, movers and leavers on the day",
        body: [
          "Access goes wrong at transitions. A new HR hire is given broad access to get started and never narrowed. A manager moves teams and keeps sight of the old one. Someone leaves and their login works for another month.",
          "Tie access changes to the events that cause them. A role change in the employee record should change access; an exit should disable the login on the last working day, as part of the exit checklist rather than a separate request to IT.",
        ],
      },
      {
        title: "Review access on a schedule",
        body: [
          "Even a well-designed scheme drifts. Set a regular review, at least once a year and more often for compensation and sensitive case data, where the owner of each role confirms the list of people in it.",
          "The review should also cover exports. Data downloaded to a spreadsheet leaves the access controls behind. Decide who may export compensation data, and keep a record when they do.",
        ],
      },
    ],
    checklist: [
      "Employee data sorted into sensitivity tiers with access decided per tier",
      "Roles defined by job, few enough to explain",
      "Super-admin limited to the smallest necessary number of people",
      "Access scoped by entity, location and reporting line",
      "Editing and approving of money-moving changes split between people",
      "Audit trail on salary, bank and attendance changes",
      "Access updated on role change and removed on the last working day",
      "Scheduled access review, including who may export compensation data",
    ],
    related: [
      {
        label: "Security",
        href: "/policy-centre/security",
        note: "How HRMagix approaches security.",
      },
      {
        label: "Setup, Data & Security FAQs",
        href: "/resources/questions-and-answers/setup-data-and-security",
        note: "Common questions on data and access in HRMagix.",
      },
      {
        label: "Employee Records Guide",
        href: "/hr/topics/employee-records",
        note: "What the employee record holds and why.",
      },
      {
        label: "An Employee Exit Checklist, From Resignation to Full and Final",
        href: "/resources/hr-guides/employee-exit-checklist",
        note: "Where removing access belongs in the exit process.",
      },
    ],
    faqs: [
      {
        q: "Who should be able to see employee salaries?",
        a: "The employee, the people who process payroll, and a small set of approvers such as the HR head and finance. Line managers seeing their team's pay is a policy decision some companies make and others do not; decide it explicitly.",
      },
      {
        q: "What is role-based access in an HRMS?",
        a: "Permissions are attached to roles that describe a job, and people are assigned to roles. When someone changes job, you change their role instead of editing individual permissions.",
      },
      {
        q: "How often should HR access be reviewed?",
        a: "At least once a year across the board, and more often for compensation and sensitive case data. The owner of each role should confirm who is in it.",
      },
      {
        q: "Does this guide cover data protection law?",
        a: "No. It covers the practical design of access. Obligations under data protection law depend on the current rules and how you process data, so take advice on those separately.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "reports-leadership-asks-for",
    number: "20",
    title: "The HR reports a leadership team keeps asking for",
    audience:
      "HR managers and people-operations leads who are asked for numbers every month and want a standard pack rather than a fresh spreadsheet each time.",
    outcome:
      "Build a short, recurring set of HR reports for management, with agreed definitions, so the conversation is about what the numbers mean rather than whether they are right.",
    minutes: 11,
    seo: {
      title: "HR Reports for Management: The Monthly Pack to Build",
      description:
        "Which HR reports for management belong in a monthly pack: headcount, hiring, attrition, payroll cost, leave and compliance, and how to define each.",
      keywords: ["hr reports for management", "hr reports for leadership", "monthly hr report", "hr mis report"],
    },
    opening: [
      "Leadership questions about people tend to arrive one at a time and urgently: how many people do we have, why is payroll up, who left last quarter. Answering each from scratch produces numbers that differ slightly every time, and the next meeting is spent reconciling them.",
      "The remedy is a standing pack: a small number of reports, produced on the same day each month, from the same definitions. This guide sets out which reports belong in it and what each needs to answer. Two of them, headcount and attrition, have guides of their own.",
    ],
    chapters: [
      {
        title: "Agree the definitions before you agree the format",
        body: [
          "The single biggest source of problems in HR reporting is that two people mean different things by the same word. Does headcount include interns and contractors? Is someone serving notice still in it? Is attrition counted on resignation date or last working day?",
          "Write a one-page definitions sheet and get it signed off by whoever chairs the leadership meeting. Then every report uses it, and a disagreement about a number becomes a discussion about a definition, which can be settled once.",
        ],
      },
      {
        title: "The core reports most leadership teams want",
        body: [
          "These cover almost every recurring question. Not every company needs all of them, and some will add one specific to their business, such as utilisation for a services firm or shift coverage for a plant.",
        ],
        list: {
          style: "ordered",
          items: [
            "Headcount: opening, joiners, leavers, closing, by department and location",
            "Hiring: open positions, offers made, offers accepted, joiners against plan",
            "Attrition: leavers in the period, voluntary and involuntary, by department and tenure band",
            "Payroll cost: gross and employer cost by entity and department, with the change from last month explained",
            "Leave and attendance: loss-of-pay days, leave liability and absence patterns worth a conversation",
            "Compliance: statutory payments and returns due and made, and anything outstanding",
          ],
        },
      },
      {
        title: "Explain movement, not just position",
        body: [
          "A number on its own invites the question of whether it is good or bad. A number with its movement explained answers it. Payroll cost went up: by how much from joiners, how much from revisions, how much from arrears or overtime. Headcount fell: which teams, which reasons.",
          "Build the bridge into the report rather than preparing it after the question is asked. It is the part leadership actually reads.",
        ],
        watch:
          "Avoid comparing your figures with external benchmarks unless you know exactly how they were defined. An attrition figure from a survey that counts differently from you is not a comparison, it is a source of false alarm or false comfort.",
      },
      {
        title: "Keep the pack short and the detail available",
        body: [
          "A leadership pack should fit on a few pages. Put the summary first, the movement explained second, and keep the employee-level detail in an appendix or in the system, available when somebody asks.",
          "Be careful about what goes into a pack that circulates widely. Department-level salary totals can identify individuals in a small team. Combine figures where the group is small, and keep individual compensation out of anything that gets forwarded.",
        ],
      },
      {
        title: "Produce it from the system, on a fixed day",
        body: [
          "Fix the day the pack is produced, after payroll closes, and produce it from the same source each month. A report rebuilt by hand each month drifts in definition without anyone deciding it should.",
          "If your HRMS has standard reports or dashboards that match your definitions, use them. Where they do not, decide whether to change the definition or build the report, rather than living with two answers.",
        ],
      },
    ],
    checklist: [
      "A one-page definitions sheet agreed with leadership",
      "Headcount, hiring, attrition, payroll cost, leave and compliance reports defined",
      "Every movement explained with a bridge from last month",
      "Summary first, detail in an appendix or the system",
      "Small groups combined so individual pay is not exposed",
      "A fixed production day after payroll close",
      "All reports produced from the same source each month",
    ],
    related: [
      {
        label: "Producing a Headcount Number Everyone Agrees On",
        href: "/resources/hr-guides/monthly-headcount-report",
        note: "The report every other report depends on.",
      },
      {
        label: "Finding Out Why People Leave: An Attrition Analysis",
        href: "/resources/hr-guides/attrition-analysis",
        note: "Going beyond the attrition rate to causes.",
      },
      {
        label: "HR Analytics Guide",
        href: "/hr/topics/hr-analytics",
        note: "The wider subject of using people data.",
      },
      {
        label: "Reports & Analytics FAQs",
        href: "/resources/questions-and-answers/reports-and-analytics",
        note: "What reporting HRMagix provides.",
      },
    ],
    faqs: [
      {
        q: "What HR reports should management receive monthly?",
        a: "Most leadership teams want headcount, hiring, attrition, payroll cost, leave and attendance, and statutory compliance status. Each should explain the movement from the previous month, not only the current figure.",
      },
      {
        q: "Why do our HR numbers never match finance's numbers?",
        a: "Usually because of definitions: whether contractors and interns are counted, whether notice-period employees are included, and which date counts as a joining or leaving. Agree one definitions sheet and use it in both places.",
      },
      {
        q: "Should salary data appear in leadership reports?",
        a: "Total payroll cost, yes. Individual compensation, generally not in a pack that circulates. Watch out for small departments, where a total can reveal one person's salary.",
      },
      {
        q: "How long should a monthly HR report be?",
        a: "Short enough to be read before the meeting. A summary, the explained movements and an appendix of detail is a structure that works for most companies.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "monthly-headcount-report",
    number: "21",
    title: "Producing a headcount number everyone agrees on",
    audience:
      "HR and finance teams who have been asked how many people the company employs and found that three systems give three answers.",
    outcome:
      "Define headcount precisely, build a monthly headcount report with an opening-to-closing bridge, and reconcile it with payroll every month.",
    minutes: 10,
    seo: {
      title: "Headcount Report: Building One Monthly Number That Holds",
      description:
        "How to build a monthly headcount report: who counts, the opening to closing bridge, cuts by department and location, and reconciling to payroll.",
      keywords: ["headcount report", "monthly headcount report", "employee headcount reporting", "headcount reconciliation"],
    },
    opening: [
      "Headcount sounds like the simplest number in HR. Then someone asks whether it includes the intern, the consultant on a retainer, the person on maternity leave and the one serving notice, and the answer depends on who you ask.",
      "A headcount report earns trust by being defined once, built the same way every month, and reconciled to payroll. This guide covers all three. It is the base for the other reports in a leadership pack, so getting it right first saves work everywhere else.",
    ],
    chapters: [
      {
        title: "Define who counts, in writing",
        body: [
          "Decide each of the following explicitly. There is no right answer for most of them; there is only a consistent one. If different audiences need different cuts, define a primary headcount and report the others as separate lines rather than adjusting the main number.",
        ],
        list: {
          style: "bullet",
          items: [
            "Permanent and fixed-term employees: almost always in",
            "Interns and trainees: in, out, or shown separately",
            "Contract workers paid through a contractor: usually shown separately, as they are not on your payroll",
            "Consultants and retainers: usually out, but say so",
            "Employees on long leave, such as maternity: usually in, as they remain employed",
            "Employees serving notice: in until the last working day",
          ],
        },
      },
      {
        title: "Fix the counting date",
        body: [
          "Headcount is a count at a point in time, so choose the point: the last day of the month is the most common. Then decide which date makes someone a joiner or leaver in the month. Date of joining for joiners is straightforward; for leavers, use the last working day rather than the resignation date.",
          "If you also report full-time equivalents or an average headcount for cost analysis, label them clearly. Average headcount over a period is a different number from closing headcount, and both are legitimate.",
        ],
        watch:
          "A rehire in the same month as an exit can be counted as a leaver and a joiner, or as neither. Pick one treatment and apply it every time.",
      },
      {
        title: "Build the bridge from opening to closing",
        body: [
          "The core of the report is a bridge: opening headcount, plus joiners, minus leavers, plus or minus transfers, equals closing headcount. If it does not add up, a record is wrong, and the report has just found it.",
          "Transfers matter when you report by department, location or entity. A transfer out of one department and into another should net to zero at company level. If it does not, someone has been moved without a date.",
        ],
      },
      {
        title: "Cut it the ways people will ask",
        body: [
          "The most common cuts are by department, location, entity, grade and employment type. Gender and tenure bands are often asked for too. Each cut is only as reliable as the field behind it, so standardise those fields in the employee master first.",
          "Keep the cuts consistent month to month. A report that changes its department list every month cannot show a trend.",
        ],
      },
      {
        title: "Reconcile headcount to payroll every month",
        body: [
          "Every person in headcount should either appear in the month's payroll or have a reason not to: joined after the cut-off, on unpaid leave, salary on hold. Every person in payroll should be in headcount, or be a leaver receiving a final settlement.",
          "Run this reconciliation every month and keep the exceptions list. It catches the leaver who was never marked as exited and is still being paid, which is the most expensive error a headcount report can find.",
        ],
      },
    ],
    checklist: [
      "A written definition of who counts in primary headcount",
      "Counting date fixed, with last working day used for leavers",
      "Opening plus joiners minus leavers plus transfers equals closing, every month",
      "Transfers dated so they net to zero at company level",
      "Standard cuts by department, location, entity and employment type",
      "Headcount reconciled to payroll with an exceptions list kept",
    ],
    related: [
      {
        label: "The HR Reports a Leadership Team Keeps Asking For",
        href: "/resources/hr-guides/reports-leadership-asks-for",
        note: "The pack this report anchors.",
      },
      {
        label: "Finding Out Why People Leave: An Attrition Analysis",
        href: "/resources/hr-guides/attrition-analysis",
        note: "Attrition uses the same headcount as its base.",
      },
      {
        label: "HR Analytics",
        href: "/solutions/hr-analytics",
        note: "Headcount and workforce reporting in HRMagix.",
      },
    ],
    faqs: [
      {
        q: "Should interns be included in headcount?",
        a: "It is your choice, but make it once and write it down. Many companies show interns and trainees as a separate line so the primary headcount stays comparable over time.",
      },
      {
        q: "Are employees serving notice counted in headcount?",
        a: "Usually yes, until their last working day, because they remain employed until then. Count them as leavers in the month their last working day falls.",
      },
      {
        q: "What is the difference between closing and average headcount?",
        a: "Closing headcount is the count on the last day of the period. Average headcount is the average over the period, often used as the denominator for attrition and cost per employee. Label which one you are reporting.",
      },
      {
        q: "Why reconcile headcount with payroll?",
        a: "Because a mismatch is usually an error with a cost: a leaver still being paid, or a joiner missed from payroll. The reconciliation finds both.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "attrition-analysis",
    number: "22",
    title: "Finding out why people leave: an attrition analysis",
    audience:
      "HR leads and founders who know their attrition rate and want to know what is behind it, and what to do about it.",
    outcome:
      "Calculate attrition consistently, break it down by the cuts that reveal causes, and combine the numbers with exit information to reach conclusions you can act on.",
    minutes: 12,
    seo: {
      title: "Attrition Analysis: Breaking Down Why Employees Leave",
      description:
        "How to run an attrition analysis: a consistent formula, the cuts that reveal causes such as tenure, team and manager, and pairing numbers with exit data.",
      keywords: ["attrition analysis", "employee attrition analysis", "how to analyse attrition", "attrition by tenure"],
    },
    opening: [
      "An attrition rate tells you how much, not why. A company-wide figure can stay flat while one team loses half its people and another loses none, and the average hides both. Analysis is the work of taking that one number apart until the causes show.",
      "This guide starts with calculating attrition consistently, then works through the breakdowns that most often reveal something, and ends with turning findings into action. It does not offer an industry figure to compare against, because published figures are defined in too many different ways to be a reliable yardstick.",
    ],
    chapters: [
      {
        title: "Fix the formula and stick to it",
        body: [
          "The common form is leavers in the period divided by average headcount in the period. Average headcount is usually the opening plus closing divided by two, or the average of monthly closing figures. Monthly rates can be annualised, but say when you have done so.",
          "Decide who counts as a leaver using the same definitions as your headcount report, and use the last working day as the leaving date. Whatever you choose, keep it; a change in formula looks exactly like a change in attrition.",
        ],
      },
      {
        title: "Split voluntary from involuntary",
        body: [
          "A resignation and a termination are different events with different causes. Combining them makes the number move for reasons that have nothing to do with retention. Report voluntary attrition, involuntary attrition and the end of fixed-term contracts separately.",
          "Within voluntary attrition, it can also help to separate leavers you would have wanted to keep from those you would not. That judgement should come from the manager and HR at the time of exit, recorded consistently, not reconstructed later.",
        ],
      },
      {
        title: "Use the cuts that point at causes",
        body: [
          "Each cut answers a different question. Run them all, then look for where attrition is concentrated rather than where it is merely present.",
        ],
        list: {
          style: "bullet",
          items: [
            "Tenure band: attrition in the first months points at hiring or onboarding; at two to three years, at growth and pay",
            "Department and location: concentration in one place points at local conditions",
            "Manager: a pattern under one manager is worth a careful, private look",
            "Grade and pay position: leavers clustered at the bottom of a band suggest a pay issue",
            "Performance rating: losing high performers is a different problem from losing low ones",
            "Time since last revision or promotion",
          ],
        },
        watch:
          "Small numbers mislead. Two leavers from a team of five is a high rate and may mean nothing. Look at counts alongside rates, and treat small-group findings as questions to ask rather than conclusions.",
      },
      {
        title: "Add what leavers and stayers say",
        body: [
          "Numbers show where; people explain why. Exit interviews are the obvious source, but what people say on the way out is shaped by wanting a good reference. Look for consistent themes rather than taking each reason literally.",
          "Stay conversations with current employees in the affected group are often more useful, because the people who are still there can say what would make them leave without any reason to soften it.",
        ],
      },
      {
        title: "Turn findings into a small number of actions",
        body: [
          "An attrition analysis that ends in a long list of possible causes changes nothing. Pick the one or two concentrations that matter most, name a likely cause for each, choose an action and say how you will tell whether it worked.",
          "Then measure the same cut the same way in the following quarters. If early-tenure attrition was the problem and onboarding was the fix, track early-tenure attrition for the cohorts that joined after the change.",
        ],
      },
    ],
    checklist: [
      "One attrition formula written down and used every period",
      "Voluntary, involuntary and contract-end attrition reported separately",
      "Breakdowns run by tenure, team, location, manager, grade and rating",
      "Counts shown alongside rates, with small groups treated as questions",
      "Exit interview themes and stay conversations added to the numbers",
      "One or two actions chosen with a measure to track them",
    ],
    related: [
      {
        label: "Attrition",
        href: "/resources/hr-and-payroll-glossary/attrition",
        note: "The term and its common definitions.",
      },
      {
        label: "Employee Retention Guide",
        href: "/hr/topics/employee-retention",
        note: "What to do once you know the causes.",
      },
      {
        label: "Conducting Exit Interviews That Tell You Something",
        href: "/resources/hr-guides/conducting-exit-interviews",
        note: "Getting usable information from leavers.",
      },
      {
        label: "Producing a Headcount Number Everyone Agrees On",
        href: "/resources/hr-guides/monthly-headcount-report",
        note: "The headcount figures attrition is calculated from.",
      },
    ],
    faqs: [
      {
        q: "How is attrition rate calculated?",
        a: "Commonly as leavers in the period divided by average headcount for the period. The exact definition of leaver and average headcount varies, so write yours down and keep it constant.",
      },
      {
        q: "What is a good attrition rate?",
        a: "There is no single figure that applies across companies, roles and locations, and published comparisons use different definitions. Compare your own rate over time and between your own teams.",
      },
      {
        q: "Should involuntary exits count in attrition?",
        a: "Report them separately. Combining resignations and terminations makes the number move for reasons unrelated to retention.",
      },
      {
        q: "Which breakdown is most useful?",
        a: "Tenure band is often the most revealing, because early leavers and long-tenure leavers usually leave for different reasons. Manager and pay position are close behind.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "salary-revision-cycle",
    number: "23",
    title: "Running an annual salary revision, from budget to arrears",
    audience:
      "HR and payroll teams responsible for the annual increment cycle, from the budget conversation with leadership to the revised salary landing in payroll.",
    outcome:
      "Run a salary revision process in order: set the budget, decide the guidelines, collect and approve recommendations, issue letters and pay arrears correctly.",
    minutes: 14,
    seo: {
      title: "Salary Revision Process: Budget, Letters and Arrears",
      description:
        "A step-by-step salary revision process: increment budget, guidelines, manager recommendations, approvals, revision letters and paying arrears.",
      keywords: ["salary revision process", "annual increment process", "salary increment cycle", "salary revision arrears"],
    },
    opening: [
      "A salary revision cycle has a reputation for being stressful, and the stress almost always comes from the same place: decisions being made out of order. Managers promise increases before the budget is set, letters go out before approvals are final, and payroll learns the effective date after the month has closed.",
      "This guide runs in the order the work should run. It does not recommend increment percentages, which are your decision and depend on your finances and market, but it sets out how to make the decisions so that the outcome is fair, affordable and correctly paid.",
    ],
    chapters: [
      {
        title: "Set the budget and the effective date first",
        body: [
          "Agree the total increment budget with leadership before anyone discusses individuals. Express it as a cost to the company, including the knock-on effect on employer contributions and anything linked to basic pay, not just as a percentage of the salary bill.",
          "Fix the effective date at the same time. If letters will be issued after the effective date, arrears are certain, and payroll needs to plan for them.",
        ],
        watch:
          "An increase to basic pay can move other figures with it: provident fund, gratuity provision, leave encashment and, near the threshold, ESI eligibility. Model the full cost, not just the gross.",
      },
      {
        title: "Write the guidelines managers will use",
        body: [
          "Guidelines turn a budget into decisions that are consistent across teams. The most common approach links the increase to performance rating and to where the person sits in their pay band, so a strong performer low in the band gets more than one already near the top.",
          "Separate the ordinary increment from promotions and market corrections. Each needs its own budget line, otherwise promotions consume the pool meant for everyone else.",
        ],
      },
      {
        title: "Collect recommendations and check them",
        body: [
          "Give managers a sheet or screen with each team member's current pay, band, rating and the guideline range, and ask for a recommendation with a reason where it falls outside the range.",
          "Before approval, check the totals against budget by department, and look for patterns: one manager giving everyone the same figure, systematic differences between groups doing similar work, or someone left out because they were on long leave.",
        ],
      },
      {
        title: "Approve, then communicate",
        body: [
          "Agree who approves at each level and get final sign-off before anything is communicated. Once a manager has told someone their increase, reversing it is costly in trust.",
          "Revision letters should state the new structure component by component, the effective date and any change in designation or grade. Have managers deliver the conversation and HR deliver the letter, so the employee hears the context and gets the record.",
        ],
      },
      {
        title: "Update payroll and pay the arrears",
        body: [
          "Load the revised structures with the correct effective date. If the effective date is in a past month, the difference between the old and new salary for those months is due as arrears, along with the matching change in statutory contributions.",
          "Pay arrears as a separately identified line, not folded into the month's salary. That keeps the payslip explainable and keeps the arrear months traceable. Arrears also change the income for tax purposes in the year they are paid, so the tax projection for the rest of the year needs to reflect them.",
        ],
        list: {
          style: "ordered",
          items: [
            "Revised structures loaded with the effective date",
            "Arrears computed month by month from the effective date",
            "Statutory contributions recomputed on the arrears where they apply",
            "Tax projection for the year updated",
            "Payslip shows arrears as a separate, labelled line",
          ],
        },
      },
      {
        title: "Close the cycle with a record",
        body: [
          "Keep the final approved list, the guidelines and the budget reconciliation together. Next year's cycle starts from this year's outcome, and questions about fairness are answered from the record, not from memory.",
          "Avoid running a payroll system migration in the same month as a revision cycle. When figures disagree you want to know which change caused it.",
        ],
      },
    ],
    checklist: [
      "Total cost budget and effective date agreed before individual discussions",
      "Full cost modelled, including contributions linked to basic pay",
      "Guidelines by rating and band position written and shared with managers",
      "Separate budget lines for increments, promotions and corrections",
      "Recommendations checked against budget and for patterns before approval",
      "Final approval before any employee is told",
      "Letters stating each component, the effective date and any grade change",
      "Arrears paid as a separate line with contributions and tax projection updated",
    ],
    related: [
      {
        label: "Arrears",
        href: "/resources/hr-and-payroll-glossary/arrears",
        note: "What arrears are and how they are paid.",
      },
      {
        label: "Salary Structure Guide",
        href: "/hr/topics/salary-structure",
        note: "How the components of a revised salary fit together.",
      },
      {
        label: "Cost to Company (CTC) Calculator",
        href: "/calculators/ctc",
        note: "Check the cost of a revised structure.",
      },
      {
        label: "Payroll",
        href: "/solutions/payroll",
        note: "Processing revisions and arrears in HRMagix payroll.",
      },
    ],
    faqs: [
      {
        q: "What is the salary revision process?",
        a: "Set the budget and effective date, write guidelines, collect manager recommendations, check and approve them, issue letters, then update payroll and pay any arrears from the effective date.",
      },
      {
        q: "How are salary revision arrears calculated?",
        a: "For each month from the effective date to the month the revision is processed, the difference between the new and old salary is due, with statutory contributions recomputed where they apply. Pay it as a separately labelled line.",
      },
      {
        q: "Do arrears affect income tax?",
        a: "Arrears are part of salary income in the year they are paid, so the tax projection for the year must include them. Relief for arrears relating to earlier years may be available under the Income Tax Act; check the current rules.",
      },
      {
        q: "Should promotions come out of the increment budget?",
        a: "Better as a separate line. Otherwise promotions reduce what is available for everyone else's increment without anyone deciding that they should.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "paying-interns-and-trainees",
    number: "24",
    title: "Putting interns and trainees on payroll",
    audience:
      "HR and payroll teams paying interns, apprentices and graduate trainees for the first time, or tidying up an arrangement that has been handled informally.",
    outcome:
      "Classify each arrangement correctly, decide how stipends are paid and recorded, check the statutory treatment, and keep the records that support it.",
    minutes: 11,
    seo: {
      title: "Intern Stipend Payroll: Paying Interns and Trainees Right",
      description:
        "How to handle intern stipend payroll: classifying interns and apprentices, paying stipends, checking EPF, ESI and TDS treatment, and records.",
      keywords: ["intern stipend payroll", "paying interns india", "trainee stipend", "stipend tds"],
    },
    opening: [
      "Interns are often paid outside the normal process: a bank transfer approved by a manager, no payslip, no record in the HR system. That works until someone asks whether tax should have been deducted, whether the trainee was in fact an employee, or how many people the company actually had on its premises.",
      "This guide covers how to classify the arrangement, how to pay and record it, and which statutory questions to check. The statutory treatment depends on the nature of the arrangement and the current rules, so the guide sets out the questions rather than a single answer, and those questions should be confirmed with your adviser.",
    ],
    chapters: [
      {
        title: "Classify the arrangement before you pay it",
        body: [
          "The word on the letter matters less than what the arrangement is. A student on a short academic internship, a graduate trainee hired with the expectation of confirmation, and an apprentice engaged under the Apprentices Act 1961 are different things with different consequences.",
        ],
        list: {
          style: "bullet",
          items: [
            "Academic intern: a student, often placed through an institution, for a fixed short period, primarily for learning",
            "Graduate or management trainee: usually an employee on a training period, often with confirmation at the end",
            "Apprentice: engaged under a contract of apprenticeship under the Apprentices Act 1961, with its own rules on stipend and records",
            "Fixed-term trainee or probationer: an employee, whatever the title",
          ],
        },
        watch:
          "Calling someone an intern does not make them one. If a person works regular hours, does productive work under direction and is paid a regular amount, the relationship may be treated as employment whatever the letter says.",
      },
      {
        title: "Put the terms in writing",
        body: [
          "Each arrangement needs a letter that states the period, the stipend or salary, working hours, the reporting manager, leave, and what happens at the end. For academic interns, record the institution and the academic purpose.",
          "Keep a copy in the HR system with the person's record, even for a short internship. It is the document you will rely on if the classification is ever questioned.",
        ],
      },
      {
        title: "Pay through payroll, not around it",
        body: [
          "Put interns and trainees in the HRMS as a distinct employment type, and pay them through the payroll run rather than by one-off transfer. That gives them a payslip, gives you a record of what was paid and when, and keeps them visible in headcount where you have decided they belong.",
          "Use a simple structure: a stipend component, with any reimbursements shown separately. Attendance and leave still matter, because a stipend for a month with unapproved absence raises the same question as salary.",
        ],
      },
      {
        title: "Check the statutory treatment for each type",
        body: [
          "The statutory position differs by arrangement, which is why classification comes first. For each type, confirm with your adviser how the following apply under the current rules, and record the answer.",
        ],
        list: {
          style: "ordered",
          items: [
            "Income tax: whether the payment is treated as salary subject to TDS under Section 192, or otherwise, and whether any exemption applies",
            "EPF: whether the person is covered, noting that apprentices engaged under the Apprentices Act are treated differently from employees",
            "ESI: whether the person is an employee for ESI purposes at a covered establishment",
            "State levies: professional tax and labour welfare fund rules vary by state",
            "Minimum wage: whether the arrangement falls within minimum wage law for the state and the work",
          ],
        },
      },
      {
        title: "Handle the end of the arrangement",
        body: [
          "An internship or traineeship ends in one of three ways: completion, conversion to employment, or early exit. For conversion, issue an appointment letter with the new terms and a clear effective date, and decide whether the training period counts as service for leave and other benefits.",
          "For completion, close the record, pay any final stipend and issue a certificate. Remove system access on the last day, as for any other leaver.",
        ],
      },
    ],
    checklist: [
      "Each intern, trainee and apprentice classified by the substance of the arrangement",
      "A written letter for every arrangement, stored with the record",
      "Interns and trainees held as a distinct employment type in the HRMS",
      "Stipends paid through the payroll run with payslips issued",
      "TDS, EPF, ESI, state levy and minimum wage treatment confirmed for each type",
      "Conversion letters state whether the training period counts as service",
      "Access removed and a certificate issued at completion",
    ],
    related: [
      {
        label: "Running Your First Payroll in a New System",
        href: "/resources/hr-guides/first-payroll-run",
        note: "Setting up structures and registrations before a run.",
      },
      {
        label: "TDS on Salary Guide",
        href: "/hr/topics/tds-on-salary",
        note: "How tax on salary is deducted and deposited.",
      },
      {
        label: "Provident Fund (EPF) Guide",
        href: "/hr/topics/provident-fund",
        note: "Who EPF covers and how contributions work.",
      },
      {
        label: "Probation and Confirmation Guide",
        href: "/hr/topics/probation-and-confirmation",
        note: "What happens when a trainee becomes an employee.",
      },
    ],
    faqs: [
      {
        q: "Is TDS deducted on an intern stipend?",
        a: "It depends on how the payment is characterised and the current rules. Where the stipend is treated as salary, TDS under Section 192 applies if the projected income is taxable. Confirm the treatment for your arrangement with your tax adviser.",
      },
      {
        q: "Do interns need to be covered under EPF and ESI?",
        a: "It depends on whether they are employees for the purposes of each scheme. Apprentices engaged under the Apprentices Act 1961 are treated differently. Check each arrangement against the current rules and record the conclusion.",
      },
      {
        q: "Should interns be paid through payroll?",
        a: "Yes, as a distinct employment type. It gives them a payslip and gives you a record of what was paid, which you will need if the arrangement is questioned.",
      },
      {
        q: "Does an internship count as service when the intern is hired?",
        a: "That is your decision unless law or the arrangement determines it. State it in the appointment letter so leave, probation and other service-linked benefits are counted consistently.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "leave-year-end",
    number: "25",
    title: "Closing the leave year: carry-forward, lapse and encashment",
    audience:
      "HR and payroll teams running the leave year end process, who need balances, encashment and the new year's credits to be right on the first working day.",
    outcome:
      "Close the leave year in order: freeze applications, settle the balances, apply carry-forward and lapse, pay encashment and open the new year cleanly.",
    minutes: 11,
    seo: {
      title: "Leave Year End Process: Closing Balances Without Disputes",
      description:
        "A practical leave year end process: application cut-off, warning employees, carry-forward and lapse, encashment in payroll and opening the new year.",
      keywords: ["leave year end process", "leave carry forward", "leave encashment at year end", "leave lapse"],
    },
    opening: [
      "The leave year end is where a leave policy turns into money. Every balance either travels into the next year, lapses or is paid out, and each of those outcomes is decided by rules that were written months ago and are now applied to every employee on the same day.",
      "This guide covers the run-up, the close itself and the opening of the new year. It assumes your leave policy already states the carry-forward cap, encashment rules and cut-off date; if it does not, the guide on writing a leave policy covers those decisions.",
    ],
    chapters: [
      {
        title: "Confirm the rules before the year runs out",
        body: [
          "Re-read the policy at least a month before the close. Check the carry-forward cap for each leave type, whether carried days can later be encashed, the wage base for encashment, and whether any leave type lapses entirely.",
          "Check that the system is configured to match. A rule changed in the policy during the year but not in the system will be applied wrongly to everyone.",
        ],
        watch:
          "Some state Shops and Establishments and factory laws set their own rules on carrying forward and encashing earned leave, and these vary by state. Check that your policy does not fall below what applies at each location.",
      },
      {
        title: "Warn employees who will lose leave",
        body: [
          "Send each employee whose balance exceeds the carry-forward cap a notice in good time, stating how many days will lapse and by when they must be used or applied for. Copy the manager, who has to approve the leave.",
          "This is partly courtesy and partly practical. The days most likely to be disputed are the ones that lapsed without warning, and a manager who refused leave in the last month will be asked why.",
        ],
      },
      {
        title: "Freeze and settle pending applications",
        body: [
          "Set a cut-off after which no applications for the closing year are accepted, and clear every pending approval before it. Unapproved applications sitting in a queue at year end leave balances uncertain, and the close cannot be done on an uncertain balance.",
          "Regularise any attendance gaps in the closing year at the same time, since unresolved absences may become loss-of-pay or leave and change the closing balance.",
        ],
      },
      {
        title: "Apply carry-forward, lapse and encashment",
        body: [
          "Once balances are final, the close splits each one according to the rules. The order matters, because encashment and carry-forward often draw on the same balance.",
        ],
        list: {
          style: "ordered",
          items: [
            "Take the final closing balance per employee per leave type",
            "Apply any year-end encashment the policy allows, up to its limit",
            "Carry forward up to the cap",
            "Lapse the remainder, and record the lapsed days rather than deleting them",
            "Pass encashment amounts to payroll as a separate, labelled earning",
          ],
        },
      },
      {
        title: "Pay encashment correctly",
        body: [
          "Encashment is computed on the wage base the policy names, usually basic or gross per day, multiplied by the days encashed. Pay it in a stated payroll month as a separate earning line, so the employee can see the days and the rate.",
          "Encashment during service is generally part of taxable salary; encashment at retirement or exit can be treated differently under the Income Tax Act, subject to limits. Treat the tax side as a payroll question to confirm against the current rules rather than an HR assumption.",
        ],
      },
      {
        title: "Open the new year and check it",
        body: [
          "Credit the new year's entitlement under your accrual rule, add the carried balance and publish balances to employees. Then sample a handful of employees, including one who joined mid-year and one on long leave, and check the opening balance by hand.",
          "Keep a year-end report of closing balance, encashed, carried and lapsed per employee. It is the record you will need when someone asks, at exit, what happened to their leave two years ago.",
        ],
      },
    ],
    checklist: [
      "Policy rules confirmed and matched to system configuration a month ahead",
      "State-specific leave rules checked for each location",
      "Employees above the carry-forward cap warned with dates",
      "Application cut-off set and all pending approvals cleared",
      "Encashment, carry-forward and lapse applied in that order",
      "Lapsed days recorded rather than deleted",
      "Encashment paid as a labelled earning with its tax treatment confirmed",
      "New year opened and sampled by hand, with a year-end report kept",
    ],
    related: [
      {
        label: "Writing a Leave Policy That Survives Contact With a Year",
        href: "/resources/hr-guides/writing-a-leave-policy",
        note: "Where the year-end rules are decided.",
      },
      {
        label: "Leave Management",
        href: "/solutions/leave-management",
        note: "How balances and year-end rules are applied in HRMagix.",
      },
      {
        label: "Leave Management Guide",
        href: "/hr/topics/leave-management",
        note: "The wider subject of leave entitlements and approvals.",
      },
    ],
    faqs: [
      {
        q: "What happens to unused leave at year end?",
        a: "It depends on the policy and on any state law that applies. Typically some is carried forward up to a cap, some may be encashed, and the rest lapses. The rules should be written in the leave policy before the year starts.",
      },
      {
        q: "Should employees be warned before leave lapses?",
        a: "Yes. A notice stating how many days will lapse and by when gives the employee a chance to use them and avoids disputes later.",
      },
      {
        q: "Is leave encashment taxable?",
        a: "Encashment during service is generally taxable as salary. Encashment at retirement or on leaving can be treated differently under the Income Tax Act within limits. Confirm the current treatment before paying.",
      },
      {
        q: "Can the leave year differ from the financial year?",
        a: "Yes. Many companies use the calendar year or an anniversary-based year. Whatever you choose, state it in the policy and configure it in the system.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "employee-loans-and-advances",
    number: "26",
    title: "Managing employee loans and salary advances",
    audience:
      "HR, payroll and finance teams that give employees salary advances or loans and need to record, recover and close them without disputes at exit.",
    outcome:
      "Write a clear advance and loan policy, record each one properly, recover it through payroll with consent, and settle what is outstanding when someone leaves.",
    minutes: 12,
    seo: {
      title: "Salary Advance Recovery: Managing Employee Loans",
      description:
        "How to handle salary advance recovery and employee loans: policy limits, signed agreements, deduction through payroll, tax points and settling dues at exit.",
      keywords: ["salary advance recovery", "employee loan policy", "salary advance deduction", "employee loan recovery payroll"],
    },
    opening: [
      "Advances and loans are usually started with goodwill and tracked on a spreadsheet. The goodwill lasts; the spreadsheet does not. Months later, nobody is sure how much is outstanding, the deduction stopped when the person was on leave, and the balance is discovered at the full and final settlement.",
      "This guide covers the policy, the paperwork, recovery through payroll and settlement at exit. It distinguishes a salary advance, which is pay brought forward and recovered quickly, from a loan, which is repaid over a longer period. The tax treatment of loans in particular is a point to confirm with your adviser.",
    ],
    chapters: [
      {
        title: "Write the policy before the first request",
        body: [
          "One-off decisions about who gets an advance create questions of fairness quickly. A short policy answers them in advance and lets HR say yes or no without escalating every request.",
        ],
        list: {
          style: "bullet",
          items: [
            "Who is eligible, for example after confirmation or a minimum period of service",
            "The maximum amount, usually linked to monthly salary",
            "The maximum recovery period for advances and for loans",
            "Whether interest is charged on loans, and at what rate",
            "How many can be outstanding at once",
            "Who approves, and above what amount a second approval is needed",
            "What happens to the balance on exit",
          ],
        },
      },
      {
        title: "Get a signed agreement for every advance and loan",
        body: [
          "Every advance or loan needs a written record signed by the employee: amount, date, recovery schedule, interest if any, and the employee's consent to recovery by deduction from salary and, on exit, from the final settlement.",
          "Wage deductions are regulated, and the Payment of Wages Act 1936 and the state rules that apply to your establishments limit what may be deducted and how. Written consent and a stated schedule are the basis for the deduction; check that your recovery stays within the limits that apply.",
        ],
        watch:
          "A verbal arrangement is the most common reason a recovery is disputed at exit. If there is no signed schedule, there is no agreed balance.",
      },
      {
        title: "Record it in the system, not on the side",
        body: [
          "Record each advance or loan against the employee's record with the amount, disbursement date, schedule and outstanding balance. The monthly deduction should be generated from that record by the payroll run, not typed in each month.",
          "That way the balance reduces automatically, the payslip shows the deduction and the remaining balance, and the deduction does not stop because someone forgot to enter it.",
        ],
      },
      {
        title: "Handle the months that do not go to plan",
        body: [
          "Recovery schedules assume a full salary every month. When an employee has loss-of-pay days, long unpaid leave or a salary hold, decide in the policy whether the instalment is deducted in full, reduced or deferred.",
          "Avoid recovering so much in one month that the net pay becomes unreasonable, and record any change to the schedule with the reason and the approver.",
        ],
      },
      {
        title: "Check the tax position of loans",
        body: [
          "An interest-free or concessional loan from an employer can give rise to a taxable perquisite for the employee under Section 17(2) of the Income Tax Act and the related rules, subject to exceptions such as small loans and loans for specified medical treatment.",
          "Where it applies, the perquisite value is added to salary income and TDS is computed on it. The thresholds, the reference interest rate and the exceptions are set by the rules and can change, so confirm the current position with your tax adviser and configure payroll to match.",
        ],
      },
      {
        title: "Settle the balance at exit",
        body: [
          "Include outstanding advances and loans in the exit clearance, so the balance is known before the full and final settlement is computed. Recover it from the final settlement to the extent the agreement allows and the amount permits.",
          "Where the final settlement does not cover the balance, decide in advance whether the company will pursue recovery or write it off, and who can approve a write-off. Record the outcome on the employee record so the balance does not reappear in a later report.",
        ],
      },
    ],
    checklist: [
      "Advance and loan policy written with eligibility, limits, periods and approvals",
      "A signed agreement with schedule and recovery consent for every advance and loan",
      "Recovery checked against the deduction limits that apply",
      "Each advance or loan recorded against the employee with its outstanding balance",
      "Monthly deduction generated by payroll and shown on the payslip",
      "Rule for loss-of-pay and unpaid months stated in the policy",
      "Perquisite treatment of interest-free or concessional loans confirmed",
      "Outstanding balance included in exit clearance and settled or written off with approval",
    ],
    related: [
      {
        label: "An Employee Exit Checklist, From Resignation to Full and Final",
        href: "/resources/hr-guides/employee-exit-checklist",
        note: "Where outstanding loans are cleared at exit.",
      },
      {
        label: "Payslips Guide",
        href: "/hr/topics/payslips",
        note: "Showing deductions and balances clearly.",
      },
      {
        label: "TDS on Salary Guide",
        href: "/hr/topics/tds-on-salary",
        note: "How perquisites feed into tax deducted on salary.",
      },
      {
        label: "Payroll",
        href: "/solutions/payroll",
        note: "Processing deductions in HRMagix payroll.",
      },
    ],
    faqs: [
      {
        q: "How is a salary advance recovered?",
        a: "Through scheduled deductions from salary over an agreed period, with the employee's written consent. The deduction should be generated by payroll from the advance record so the balance reduces each month.",
      },
      {
        q: "What is the difference between a salary advance and a loan?",
        a: "An advance is pay brought forward and recovered over a short period. A loan is a larger amount repaid over a longer period, sometimes with interest. The policy should treat them separately.",
      },
      {
        q: "Are interest-free employee loans taxable?",
        a: "They can give rise to a taxable perquisite under Section 17(2) of the Income Tax Act and the related rules, with exceptions. The thresholds and reference rate can change, so confirm the current position before configuring payroll.",
      },
      {
        q: "Can an outstanding loan be recovered from the full and final settlement?",
        a: "To the extent the signed agreement allows and the deduction limits that apply permit. Include the balance in exit clearance so it is known before the settlement is computed.",
      },
    ],
  },
];

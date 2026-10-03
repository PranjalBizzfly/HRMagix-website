import type { PageContent } from "../pageContent";

/** Overview sections for hub and index pages, keyed by URL path. */
export const hubContent: Record<string, PageContent> = {
  "/resources/compare": {
    eyebrow: "Before you compare",
    title: "Making HR and payroll decisions you will not have to undo",
    intro: "Most HR choices look like a question of features or cost. In practice they turn on who will run the process every month, what your records must prove, and how hard the choice is to reverse.",
    sections: [
      {
        heading: "Start with the decision, not the options",
        body: [
          "Write down the decision in one sentence before reading any comparison: for example, whether payroll stays with your team or moves to a provider, or whether reviews happen once a year or through the year. A clear question stops a comparison from turning into a list of preferences.",
          "Then name the owner. A system or method that nobody owns after go-live tends to drift back to spreadsheets, whatever its merits on paper.",
        ],
      },
      {
        heading: "Which comparison answers which question",
        table: {
          head: ["If you are deciding", "Read"],
          rows: [
            ["What kind of HR system you actually need", "HRMS vs HRIS vs HCM, cloud vs on-premise, build vs buy"],
            ["How a vendor's price will grow with you", "Per-employee vs flat pricing"],
            ["Who runs the monthly payroll cycle", "In-house vs outsourced payroll"],
            ["How attendance is captured", "Biometric vs mobile attendance"],
            ["How goals and reviews are structured", "KRA vs OKR, OKR vs KPI, annual vs continuous reviews"],
            ["What employees are told about pay and benefits", "CTC vs gross vs net, EPF vs EPS, gratuity vs PF, leave types"],
          ],
        },
      },
      {
        heading: "Weigh reversibility and records",
        body: [
          "Some choices are cheap to change, such as the wording of a leave policy. Others are expensive, such as moving several years of salary history between systems. Give more scrutiny to the hard-to-reverse ones.",
          "Ask what each option leaves behind as evidence. Statutory filings, salary revisions and attendance used for pay all need a trail you can produce later. An option that saves effort but weakens that trail usually costs more in the end.",
        ],
      },
      {
        heading: "Test with your own month",
        body: [
          "Run a real month through any option you shortlist: a mid-month joiner, an exit with leave encashment, a night shift, an arrears payment. The way an option handles your awkward cases tells you more than any comparison of standard cases.",
        ],
      },
    ],
  },

  "/resources/hr-letter-templates": {
    eyebrow: "Letters across employment",
    title: "The letters an employee receives, and what keeps each one safe",
    sections: [
      {
        heading: "The lifecycle in order",
        list: {
          style: "ordered",
          items: [
            "Offer letter: the proposed role, pay and joining date, issued before the person accepts.",
            "Appointment letter: the binding terms once they join, including probation and notice.",
            "Confirmation letter, or a probation extension letter if the review is not yet complete.",
            "Increment, promotion and transfer letters as the role and pay change.",
            "Salary certificate on request, typically for loans, visas or rental agreements.",
            "Warning letter or show-cause notice where conduct or performance is in question, and an absconding notice if someone stops reporting without contact.",
            "Relieving and experience letters at exit, with the full and final statement and no-dues certificate.",
          ],
        },
      },
      {
        heading: "What makes any HR letter hold up",
        body: [
          "A letter is only as strong as its consistency with the appointment terms and policies it refers to. If a warning letter cites a rule the employee was never given, or an increment letter quotes a CTC that does not match the payroll record, the letter becomes a liability rather than a record.",
          "Every letter should carry the date, a reference number, the employee's name and code, the authority of the signatory, and the specific facts it relates to. Disciplinary letters need the allegation, the evidence relied on and a fair chance to respond before any decision.",
        ],
      },
      {
        heading: "Issuing and keeping letters",
        body: [
          "Keep proof of delivery: an acknowledged copy, an email with the attachment, or a signed register. Store the final signed version, not the draft, against the employee's record so that anyone handling an exit or dispute later finds the full history in one place.",
          "Retention periods depend on the law and the kind of record, so set a policy with your adviser rather than deleting old files ad hoc.",
        ],
        note: "Letters that change pay should be issued only after the payroll change is approved, so the letter and the next payslip agree.",
      },
    ],
  },

  "/resources/job-description-templates": {
    eyebrow: "Structuring HR roles",
    title: "How HR and payroll roles fit together as a company grows",
    sections: [
      {
        heading: "Small teams: one person, many hats",
        body: [
          "In a company of a few dozen people, one HR executive or generalist often handles hiring paperwork, attendance, leave, payroll inputs and statutory filings, with an external accountant or consultant checking the numbers. The job description should be honest about that breadth and say which tasks are shared with outside advisers.",
        ],
      },
      {
        heading: "Growing teams: splitting operations from partnering",
        body: [
          "As headcount grows, payroll usually becomes its own role first, because errors there are visible every month. Recruitment follows when hiring volume becomes steady. An HR manager then sits above these roles, owning policy and escalations, and in larger organisations HR business partners work with department heads while specialists run compensation, learning, compliance and HR systems.",
        ],
        table: {
          head: ["Stage", "Typical roles"],
          rows: [
            ["Early", "HR executive or generalist, external payroll and compliance support"],
            ["Growing", "HR manager, payroll executive, recruiter"],
            ["Larger", "HRBPs, payroll manager, compliance officer, C&B, L&D, HRIS analyst"],
          ],
        },
      },
      {
        heading: "Adapting a description to your company",
        list: {
          style: "bullet",
          items: [
            "Replace generic duties with your actual monthly cycle: which reports, which filings, which approvals.",
            "State the reporting line and who the role works with daily.",
            "Separate must-have skills from those you can teach, so you do not screen out good applicants.",
            "Mention the systems used, but describe the work, not the software.",
            "Remove any duty the role will not do in its first year.",
          ],
        },
      },
      {
        heading: "Keep the description alive",
        body: [
          "Revisit a job description at each review cycle. If the person's real work has moved, the description, the KRAs and the salary band should move with it, or you will be recruiting and assessing against a role that no longer exists.",
        ],
      },
    ],
  },

  "/resources/labour-law": {
    eyebrow: "How the law is layered",
    title: "Reading Indian labour law as an HR team",
    sections: [
      {
        heading: "Three layers to keep in view",
        body: [
          "Central Acts passed by Parliament set the framework for wages, bonus, social security, industrial relations and working conditions. Four labour codes, passed in 2019 and 2020, came into force on 21 November 2025 and consolidate 29 of these Acts; how each provision operates depends on the central and state rules framed under them. States frame their own rules under central law and also legislate on subjects such as shops and establishments, professional tax and labour welfare funds.",
          "For an HR team, the practical point is that one obligation can have a central source, a state rule and a local registration, and all three may need to line up.",
        ],
      },
      {
        heading: "What to track",
        list: {
          style: "bullet",
          items: [
            "Which laws apply to each establishment, based on its location, type and headcount.",
            "Wage definitions used for contributions and bonus, and whether your salary structure is consistent with them.",
            "Registrations, licences and their renewal dates, by state and by location.",
            "Registers, returns and notices each law asks you to keep or display.",
            "Contractor compliance where you engage contract labour.",
            "Working hours, overtime and leave rules applicable in each state.",
          ],
        },
      },
      {
        heading: "What to verify before acting",
        body: [
          "Thresholds, rates and the status of the codes and their rules change by notification, and states move at different times. Before relying on any figure, check the current official notification for the central Act or code and for the state where the employee works, and confirm with your legal adviser where the position is unclear.",
          "Keep a dated note of what you checked and where. If a rule changes, that note shows what your payroll and policies were based on at the time.",
        ],
        note: "When a code and an older Act appear to say different things, do not assume which one governs your case. Check whether the relevant provisions have been brought into force.",
      },
    ],
  },

  "/insights/category/payroll-and-statutory": {
    eyebrow: "About this category",
    title: "Why payroll is hard to get right every month",
    sections: [
      {
        heading: "The problems underneath payroll",
        body: [
          "Most payroll delays are not about calculation. They come from inputs that arrive late or disagree: attendance not closed, leave not approved, joiners and exits not confirmed, arrears not agreed. The calculation itself is the last and shortest step.",
          "Statutory deductions add a second layer. EPF and ESI depend on how wages are defined, professional tax and labour welfare fund vary by state, and income tax depends on the regime each employee chooses and the declarations they submit.",
        ],
      },
      {
        heading: "How these articles approach it",
        list: {
          style: "bullet",
          items: [
            "They follow one cycle from input to payslip and show where time is lost.",
            "They explain a statutory rule through what it changes on a real payslip.",
            "They separate what central law fixes from what each state decides.",
            "They point to what should be checked against current notifications.",
          ],
        },
      },
      {
        heading: "Using them with your own process",
        body: [
          "Read an article alongside last month's payroll. Pick one employee whose pay changed and trace each figure back to its source. Where you cannot, you have found the step to fix. HRMagix runs attendance, leave and payroll in one system so those inputs come from the same records, but the discipline of closing inputs on a fixed date matters whichever tool you use.",
        ],
      },
    ],
  },

  "/insights/category/attendance-and-time": {
    eyebrow: "About this category",
    title: "Turning attendance records into hours you can pay on",
    sections: [
      {
        heading: "Where attendance goes wrong",
        body: [
          "Raw punches are not attendance. Someone has to decide which shift a punch belongs to, whether a late arrival is a half day, whether work on a weekly off earns a compensatory off, and how a missed punch is regularised. Each of those decisions affects pay, and each needs a rule written down before the month starts.",
          "Night shifts and rotating rosters make this harder, because a shift that crosses midnight can be counted twice or split across two days if the rule is not clear.",
        ],
      },
      {
        heading: "How these articles approach it",
        body: [
          "Each piece takes one recurring question, such as comp-off entitlement or shift detection, and works through the rule, the edge cases and the record you need to keep. They describe the policy choice first and the mechanics second, because a clear policy removes most of the disputes.",
        ],
      },
      {
        heading: "A short checklist for any attendance policy",
        list: {
          style: "bullet",
          items: [
            "Shift timings, grace periods and what counts as late or a half day.",
            "How shifts that cross midnight are assigned to a date.",
            "Who can regularise a missed punch, and by when.",
            "When weekly-off or holiday work earns comp-off, and when it lapses.",
            "The date attendance closes for payroll each month.",
          ],
        },
      },
    ],
  },

  "/insights/category/leave-and-policy": {
    eyebrow: "About this category",
    title: "Writing leave rules people can follow without asking",
    sections: [
      {
        heading: "The core problem with leave",
        body: [
          "Leave disputes rarely come from the entitlement itself. They come from the rules around it: whether weekends between two leave days count, whether leave can be taken during probation, how much carries forward, and what happens to the balance at exit. When these are unwritten, managers decide case by case and employees notice the inconsistency.",
          "Minimum leave entitlements also differ by state under shops and establishments and factories law, so a single national policy has to meet the most demanding state you operate in, or vary by location.",
        ],
      },
      {
        heading: "How these articles approach it",
        body: [
          "They take one rule that commonly causes argument, such as the sandwich rule, and set out the options, the reasoning for each and how to word the clause. The aim is a policy line a manager can apply without escalation.",
        ],
      },
      {
        heading: "Testing a leave policy",
        list: {
          style: "bullet",
          items: [
            "Apply it to leave on a Friday and Monday, and to leave around a public holiday.",
            "Check it against the leave law for each state where you employ people.",
            "Work out the encashment for someone resigning mid-year.",
            "Confirm the balances employees see match what payroll will use.",
          ],
        },
      },
    ],
  },

  "/insights/category/people-operations": {
    eyebrow: "About this category",
    title: "The everyday work that shapes how employees see HR",
    sections: [
      {
        heading: "What people operations covers",
        body: [
          "People operations is the routine contact between employees and the organisation: the payslip they read each month, the documents they need, the questions they ask, and the way their exit is handled. Few of these moments are complex, but each one is a test of whether HR records are accurate and whether answers are consistent.",
        ],
      },
      {
        heading: "The problems that recur",
        list: {
          style: "bullet",
          items: [
            "Employees who cannot read their own payslip and assume an error.",
            "Exit settlements that take weeks because dues sit with different teams.",
            "Letters and certificates issued with details that differ from payroll.",
            "Policy questions answered differently by different managers.",
          ],
        },
      },
      {
        heading: "How these articles approach it",
        body: [
          "They explain the process from the employee's side first, such as how to read each line of a payslip or what a full and final settlement contains, and then set out what HR needs in place to deliver it on time. Many of the fixes are communication: telling people in advance what they will receive and when, so fewer questions arise.",
        ],
      },
    ],
  },

  "/hr/topics": {
    eyebrow: "How HR work is organised",
    title: "Following the employee lifecycle from hiring to exit",
    intro: "HR work makes most sense as a sequence. Each stage depends on records created in the one before it, so a gap early on tends to surface later as a payroll or exit problem.",
    sections: [
      {
        heading: "Joining",
        body: [
          "Hiring ends with an offer, but the HR work starts there: documents, statutory registrations, bank and tax details, and the first day's induction. Getting these right on day one decides whether the first salary is paid on time and correctly.",
        ],
      },
      {
        heading: "Working time and pay",
        body: [
          "Every month after that runs the same loop: attendance and shifts are recorded, leave is applied and approved, inputs close, and payroll processes with statutory deductions. Most HR effort in a smaller company sits in this loop, and most employee queries come from it.",
        ],
      },
      {
        heading: "Performance and growth",
        body: [
          "Alongside the monthly cycle runs a slower one: setting goals, regular one-to-ones, reviews, increments and promotions, and, where needed, improvement plans. These decisions feed back into pay and letters, so they need to be recorded as carefully as attendance.",
        ],
      },
      {
        heading: "Policy, compliance and exit",
        body: [
          "Policies set the rules for all of the above, and compliance work keeps registrations, registers and filings current. At exit, every earlier record is used once more: leave balance for encashment, service period for gratuity, notice terms for the last working day, and documents for relieving and experience letters.",
          "The topics in this section follow that order, so you can read the stage you are working on and see what it depends on.",
        ],
      },
    ],
  },

  "/explore-all-pages": {
    eyebrow: "Finding your way",
    title: "How the site is organised and where to start",
    sections: [
      {
        heading: "Three kinds of page",
        body: [
          "Product pages describe what HRMagix does: solutions by business need, features by module, and pages for particular industries. Reference pages explain HR and payroll practice in India without selling anything: guides, glossary terms, labour law explainers, comparisons, templates and calculators. Insights are articles that take one problem and work through it.",
        ],
      },
      {
        heading: "Where to start for common tasks",
        table: {
          head: ["If you want to", "Start with"],
          rows: [
            ["Check a salary, gratuity or contribution figure", "Calculators"],
            ["Understand a term on a payslip or in a policy", "HR and payroll glossary"],
            ["Draft a letter or a job posting", "HR letter templates or job description templates"],
            ["Work out which law applies to you", "Labour law explainers"],
            ["Learn a process end to end", "HR guides and HR topics"],
            ["Get a quick answer to a specific question", "Questions and answers"],
            ["See what the product covers", "Solutions and features"],
          ],
        },
      },
      {
        heading: "Using this index",
        body: [
          "Pages below are grouped the same way as the menus. Use the search box to filter by a word from the title or subject, such as gratuity, shift or appraisal. Reference pages link to each other where subjects overlap, so a calculator will usually point to the guide and glossary term that explain it.",
        ],
      },
    ],
  },

  "/resources/questions-and-answers/performance-and-growth": {
    eyebrow: "The performance year",
    title: "How a performance cycle runs over twelve months",
    intro: "Most Indian companies tie reviews to the financial year, with increments effective from April. The calendar below assumes that pattern; shift it if your cycle runs differently.",
    sections: [
      {
        heading: "Setting goals at the start of the year",
        body: [
          "Goals are agreed in the first weeks of the cycle, as KRAs for ongoing responsibilities, OKRs for shorter-term priorities, or a mix. Each goal needs a measure and a source of evidence, agreed by both the employee and the manager, so that the review later is about results rather than recollection.",
        ],
      },
      {
        heading: "Through the year",
        list: {
          style: "bullet",
          items: [
            "Regular one-to-ones to track progress and remove obstacles.",
            "A mid-year check to revise goals that no longer fit the business.",
            "Recognition close to the work it rewards, not saved for the review.",
            "An improvement plan, with clear measures and a fixed period, where performance falls short.",
          ],
        },
      },
      {
        heading: "Review, calibration and increments",
        body: [
          "Near year end, employees complete a self-assessment and managers rate against the agreed goals. Calibration then compares ratings across teams so that the same rating means the same thing in every department. Tools such as the 9-box grid help discuss potential alongside performance and feed succession planning.",
          "Ratings then inform increments and promotions, which are confirmed in letters and reflected in payroll from the effective date. Keeping the review record, the letter and the salary revision consistent avoids disputes later.",
        ],
      },
      {
        heading: "Where HRMagix fits",
        body: [
          "HRMagix includes modules for objectives and OKRs, KRAs and the 9-box, improvement plans, recognition, and one-to-ones, so goals, check-ins and reviews sit in one place through the cycle.",
        ],
      },
    ],
  },
};

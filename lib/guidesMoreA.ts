import type { Guide } from "./guides";

/**
 * HR guides 04 to 15. Same rules as lib/guides.ts: instructional, chaptered in
 * the order the work runs, ending in a checklist. No benchmarks, no timing
 * claims, no customer outcomes. Statutory items that change by notification or
 * by state are described as such.
 */
export const guidesMoreA: Guide[] = [
  /* ================================================================= */
  {
    slug: "employee-onboarding-checklist",
    number: "04",
    title: "The employee onboarding checklist, from signed offer to day thirty",
    audience:
      "HR executives and office managers who run joining for every new hire and want one sequence that does not depend on memory.",
    outcome:
      "Run joining as a fixed sequence of owned tasks, collect the statutory details payroll needs in the first month, and close onboarding with a check-in rather than a drift.",
    minutes: 11,
    seo: {
      title: "Employee Onboarding Checklist: Offer Acceptance to Day 30",
      description:
        "An employee onboarding checklist for Indian employers: pre-joining tasks, day-one documents, statutory forms, first-week setup and the day-thirty check-in.",
      keywords: [
        "employee onboarding checklist",
        "new joiner checklist",
        "onboarding checklist india",
        "new employee onboarding steps",
      ],
    },
    opening: [
      "Onboarding goes wrong in small, specific ways. A laptop that arrives on day three, a PF nomination that is never collected, a bank account entered with one digit wrong, a manager who forgot the person was starting. None of these are hard to prevent. They happen because joining is a set of tasks owned by four different people and written down by none of them.",
      "This employee onboarding checklist runs from the day the offer is accepted to the end of the first month. For what onboarding is and why it matters, see the onboarding topic page; this guide is the step list.",
    ],
    chapters: [
      {
        title: "Between acceptance and joining: assign the owners",
        body: [
          "The moment an offer is accepted, create the joining record and assign each task to a named person with a date. The usual owners are HR for documents and letters, IT or admin for equipment and access, the reporting manager for the first week's work, and payroll for the salary record.",
          "This is also when you decide the joining date for payroll purposes. If the person joins after your attendance cut-off, their first month's salary is either prorated into the current run or carried as arrears into the next. Decide which before day one, and tell the new joiner, because a missing first salary is the most common complaint in a new hire's first month.",
        ],
        list: {
          style: "bullet",
          items: [
            "Joining record created with the date of joining, entity, location, department and reporting manager",
            "Appointment letter or terms of employment ready to issue on day one",
            "Equipment, email and system access requested with a delivery date before joining",
            "Background verification started, where your policy requires it, with the candidate's written consent",
            "Manager told the date and asked to block time on day one",
          ],
        },
      },
      {
        title: "Collect documents before day one, not on it",
        body: [
          "Send the document list in advance through whatever channel you use, so the first morning is not spent photocopying. Ask for each item once, with a clear reason, and record what was received.",
          "The statutory details matter most because payroll uses them in the first run. A previous employer's UAN lets the provident fund account continue rather than a new one being opened. A prior employer's salary and tax deducted for the current financial year are needed so tax under Section 192 is projected correctly from the first month.",
        ],
        list: {
          style: "bullet",
          items: [
            "Identity and address proof, and PAN",
            "Existing UAN, if the person has been a provident fund member before",
            "Bank account details, checked against a cancelled cheque or bank statement",
            "Educational and previous employment documents, as your policy requires",
            "Previous employer's salary and TDS for the current financial year, if joining mid-year",
            "Emergency contact and nominee details",
          ],
        },
        watch:
          "Bank details typed from a phone photo are the commonest cause of a failed first salary credit. Verify the account number against a document, not against what the person typed.",
      },
      {
        title: "Day one: forms, policies and a working desk",
        body: [
          "Day one has two jobs: complete the formalities that must be signed, and make sure the person can actually work by the afternoon. Keep the paperwork to the morning.",
          "The statutory declarations collected on joining include the EPF declaration form (Form 11) for provident fund members and the nomination form, and the ESI declaration where the employee is covered by the ESI Act. Policies the person must acknowledge, such as the code of conduct and the prevention of sexual harassment policy, should be acknowledged in a way you can prove later.",
        ],
        list: {
          style: "ordered",
          items: [
            "Issue the appointment letter and collect the signed copy",
            "Collect EPF Form 11 and nominations, and the ESI declaration where applicable",
            "Record policy acknowledgements with date",
            "Hand over equipment against an asset record",
            "Activate email, self-service login and attendance enrolment",
            "Introduce the manager and a buddy, and show where to ask questions",
          ],
        },
      },
      {
        title: "The first week: payroll record and the manager's plan",
        body: [
          "By the end of the first week the employee should exist correctly in payroll: salary structure attached, statutory identifiers recorded, bank account verified, tax regime choice and investment declaration collected. If any of these are missing at your payroll cut-off, the first salary will be wrong.",
          "The manager owns the other half of the week. A short written plan for the first month, even a few lines, tells the new hire what good looks like. The 30-60-90 day plan guide covers how to write one.",
        ],
        watch:
          "Ask new joiners to choose their tax regime and submit a declaration in the first week. Without it, TDS for their first months is computed on the default regime, and switching later changes every remaining month's deduction.",
      },
      {
        title: "Day thirty: close onboarding deliberately",
        body: [
          "Onboarding should end on a date, with a short conversation between the manager and the employee and a check that every task on the list is done. Open items left after a month tend to stay open.",
          "Use the check-in to ask two things: what was missing that the person needed, and what in the process was confusing. Those answers improve the checklist for the next joiner, which is the only way it gets better.",
        ],
      },
    ],
    checklist: [
      "Joining record created with every task assigned to a named owner and date",
      "First-month salary treatment (prorated or arrears) decided and communicated",
      "Documents requested before day one, including UAN and previous employer's tax details",
      "Bank account verified against a document",
      "Appointment letter signed and policy acknowledgements recorded",
      "EPF Form 11, nominations and ESI declaration collected where applicable",
      "Salary structure, tax regime and investment declaration in payroll before cut-off",
      "Equipment issued against an asset record and access active",
      "Day-thirty check-in held and open tasks closed",
    ],
    related: [
      {
        label: "Employee Onboarding Guide",
        href: "/hr/topics/employee-onboarding",
        note: "What onboarding covers and why the first weeks matter.",
      },
      {
        label: "Writing a 30-60-90 Day Plan for a New Hire",
        href: "/resources/hr-guides/30-60-90-day-plan",
        note: "The manager's plan for the first three months.",
      },
      {
        label: "Appointment Letter Template",
        href: "/resources/hr-letter-templates/appointment-letter",
        note: "The letter issued on day one.",
      },
      {
        label: "Onboarding & Lifecycle",
        href: "/solutions/onboarding-and-lifecycle",
        note: "How joining tasks run inside one employee record.",
      },
    ],
    faqs: [
      {
        q: "What documents should an employee onboarding checklist include?",
        a: "Identity and address proof, PAN, bank details verified against a document, existing UAN if any, education and previous employment records as your policy requires, and the previous employer's salary and TDS for the year if the person joins mid-year.",
      },
      {
        q: "When should onboarding start?",
        a: "When the offer is accepted. Equipment, access and the payroll record take time, and doing them before joining is what makes day one usable.",
      },
      {
        q: "Which statutory forms are collected at joining?",
        a: "Typically the EPF declaration (Form 11) and nomination for provident fund members, and the ESI declaration for employees covered by the ESI Act. Check the current forms on the EPFO and ESIC portals, as formats are revised from time to time.",
      },
      {
        q: "Why does a new joiner need the previous employer's tax details?",
        a: "Tax under Section 192 is computed on the whole financial year's income. Without the earlier salary and TDS, the new employer under-projects income and the shortfall surfaces later in the year.",
      },
      {
        q: "When does onboarding end?",
        a: "Set an end date, commonly around day thirty, with a manager check-in and a review that every task is closed. Probation is separate and usually runs longer.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "employee-exit-checklist",
    number: "05",
    title: "An employee exit checklist, from resignation to full and final",
    audience:
      "HR and payroll staff who process resignations and terminations and need every clearance closed before the settlement is paid.",
    outcome:
      "Take an exit from the resignation letter to the relieving letter in order, with clearances owned, the last salary calculated correctly and statutory transfers set up.",
    minutes: 11,
    seo: {
      title: "Employee Exit Checklist: Resignation to Full and Final",
      description:
        "An employee exit checklist for Indian employers: accepting resignation, notice period, clearances, final settlement, PF and gratuity, and relieving letters.",
      keywords: [
        "employee exit checklist",
        "exit process checklist",
        "employee clearance checklist",
        "offboarding checklist india",
      ],
    },
    opening: [
      "An exit has a fixed end point: the day the full and final settlement is paid and the relieving letter issued. Everything before that is a set of clearances, each owned by someone different, each capable of holding up the settlement if it is forgotten.",
      "This employee exit checklist runs the steps in order. The offboarding topic page explains the purpose of offboarding; this guide is the procedure, and the full and final settlement article covers the settlement figures in more depth.",
    ],
    chapters: [
      {
        title: "Accept the resignation in writing and fix the last working day",
        body: [
          "Acknowledge the resignation in writing with the date received. Then fix the last working day by applying the notice period in the appointment letter or policy, and record any agreed change: notice served in full, shortened by agreement, or bought out by either side.",
          "If notice is shortened, the policy decides whether the shortfall is recovered as notice pay or waived. Record the decision when it is made, not at settlement, because it is the line most often disputed later.",
        ],
        watch:
          "Leave taken during the notice period is a policy decision. Some employers allow it, some adjust it against notice, some refuse it. State the rule in the policy so each exit is not negotiated separately.",
      },
      {
        title: "Open the clearances on day one of notice",
        body: [
          "Send the clearance list to every owner when the resignation is accepted, not in the last week. Each owner confirms either that nothing is due or the amount to recover, with a reason.",
        ],
        list: {
          style: "bullet",
          items: [
            "Manager: handover of work, documents and client contacts",
            "IT: laptop, phone, data and access, with revocation timed to the last day",
            "Admin: ID card, keys, parking, any company property issued",
            "Finance: open advances, loans, unsettled expense claims, travel advances",
            "HR: leave balance, notice shortfall, any retention bonus with a clawback condition",
          ],
        },
      },
      {
        title: "Hold the exit interview while it is still useful",
        body: [
          "Conduct the exit interview during the notice period, not on the last afternoon. Ask a small set of consistent questions so answers can be compared across exits, and keep notes separate from the personnel file if you want honest answers.",
          "Exit interviews are useful only in aggregate. One person's reasons are anecdote; the same reason given by several people in one team is a finding.",
        ],
      },
      {
        title: "Compute the last salary and the settlement",
        body: [
          "The settlement brings together everything owed in both directions. Calculate each component separately and show it on the statement, so the employee can check each line.",
          "Gratuity is payable under the Payment of Gratuity Act 1972, s.4, to an employee with five years' continuous service (the Act allows exceptions, such as death or disablement). It is 15 days' wages per completed year, wages being last drawn basic plus DA divided by 26, subject to the statutory maximum. Leave encashment follows your policy and any applicable state law.",
        ],
        list: {
          style: "ordered",
          items: [
            "Salary for days worked in the final month",
            "Leave encashment, as the policy and applicable law provide",
            "Gratuity, where the employee is eligible",
            "Pending reimbursements, bonus or incentives due under their terms",
            "Less notice shortfall recovery, advances and other approved recoveries",
            "Less TDS, computed on the year's total income including the settlement",
          ],
        },
        watch:
          "Payment timelines for final dues are set by the Code on Wages, in force since 21 November 2025, which requires wages due on removal, dismissal, retrenchment or resignation to be paid within two working days (s.17(2)). Check any state rule that also applies to your establishment.",
      },
      {
        title: "Close statutory records and issue the letters",
        body: [
          "Mark the date of exit against the employee's UAN on the EPFO employer portal, so the person can transfer or withdraw their provident fund. Update ESI records where the employee was covered. Include the final month in your regular returns.",
          "Issue the relieving letter and experience letter once clearances are complete, and a Form 16 for the year in the normal course after the financial year ends. Keep the settlement statement signed or acknowledged by the employee.",
        ],
      },
    ],
    checklist: [
      "Resignation acknowledged in writing with date received",
      "Last working day fixed and any notice change recorded with the reason",
      "Clearance list sent to every owner at the start of notice",
      "Access revocation scheduled for the last working day",
      "Exit interview held during notice",
      "Settlement computed component by component, including gratuity where eligible",
      "TDS on the settlement computed on the year's total income",
      "Date of exit updated on EPFO and ESI records",
      "Relieving and experience letters issued after clearance",
    ],
    related: [
      {
        label: "Employee Offboarding Guide",
        href: "/hr/topics/employee-offboarding",
        note: "What offboarding is for, and what it protects.",
      },
      {
        label: "What a Full-and-Final Settlement Actually Has to Include",
        href: "/insights/full-and-final-settlement",
        note: "Every line a settlement has to include.",
      },
      {
        label: "Gratuity Calculator",
        href: "/calculators/gratuity",
        note: "Check eligibility and the amount under s.4.",
      },
      {
        label: "Relieving Letter Template",
        href: "/resources/hr-letter-templates/relieving-letter",
        note: "The letter issued once clearance is complete.",
      },
    ],
    faqs: [
      {
        q: "What should an employee exit checklist cover?",
        a: "Written acceptance of the resignation, the last working day, clearances from manager, IT, admin and finance, an exit interview, the full and final settlement, statutory record updates, and the relieving and experience letters.",
      },
      {
        q: "Can the relieving letter be withheld until clearance?",
        a: "Many employers issue it after clearance is complete, and the policy should say so. Withholding documents indefinitely invites disputes, so close clearances promptly.",
      },
      {
        q: "Is gratuity part of the full and final settlement?",
        a: "Yes, where the employee is eligible under the Payment of Gratuity Act 1972. It is usually computed and paid with the settlement.",
      },
      {
        q: "How is TDS handled on the final settlement?",
        a: "It is computed under Section 192 on the employee's total income for the year with your organisation, including the settlement, after any exemptions that apply to components such as gratuity and leave encashment.",
      },
      {
        q: "What happens to the employee's provident fund?",
        a: "The employer updates the date of exit against the UAN. The employee can then transfer the balance to a new employer or apply for withdrawal under the scheme rules.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "30-60-90-day-plan",
    number: "06",
    title: "Writing a 30-60-90 day plan for a new hire",
    audience:
      "Managers with a new person starting soon, and HR teams who want every new hire to have a written first-quarter plan.",
    outcome:
      "Write a short three-phase plan with outcomes for each month, review it at each milestone, and use it as the evidence for the probation decision.",
    minutes: 9,
    seo: {
      title: "30 60 90 Day Plan for New Hires: How Managers Write One",
      description:
        "How to write a 30 60 90 day plan for a new hire: what each phase is for, how to set outcomes rather than tasks, and how to review it at each milestone.",
      keywords: [
        "30 60 90 day plan",
        "30-60-90 day plan for new employees",
        "new hire plan",
        "first 90 days plan",
      ],
    },
    opening: [
      "A new hire who does not know what is expected of them will guess, and the guess is usually to stay busy. A 30-60-90 day plan replaces the guess with a short written statement of what the first three months are for.",
      "It is a manager's document, not an HR form. HR's part is to make sure one exists for every new hire and that the reviews happen. This guide covers writing it and using it.",
    ],
    chapters: [
      {
        title: "What each phase is for",
        body: [
          "The three phases are not arbitrary. Each has a different purpose, and outcomes that would be right in one are wrong in another.",
        ],
        list: {
          style: "bullet",
          items: [
            "Days 1 to 30, learn: the product or service, the people, the systems, how decisions are made. Outcomes are about understanding, such as being able to explain the team's main processes.",
            "Days 31 to 60, contribute: take on defined pieces of real work with support. Outcomes are first deliverables completed to standard.",
            "Days 61 to 90, own: take responsibility for an area or a recurring piece of work. Outcomes look like the role's normal expectations, at a smaller scale.",
          ],
        },
      },
      {
        title: "Write outcomes, not activities",
        body: [
          "Attending induction sessions is an activity. Being able to process a month's reimbursement claims without help is an outcome. Write three to five outcomes per phase, each one something both manager and employee could agree has or has not happened.",
          "Tie at least one outcome in each phase to the role's KRAs, so the plan connects to how the person will be assessed after probation. Leave room for one outcome the employee proposes, especially in the third phase.",
        ],
        watch:
          "A plan with fifteen items per phase is a task list. Keep it short enough that both people remember it without opening the file.",
      },
      {
        title: "Name the support each phase needs",
        body: [
          "For each phase, write down what the new hire needs from others: the people to meet, the access to be given, the documents to read, and the buddy or senior colleague they can ask. Many plans fail because the outcome depended on access nobody arranged.",
        ],
      },
      {
        title: "Review at each milestone, briefly and in writing",
        body: [
          "Hold a short review at days 30, 60 and 90. Go through each outcome: met, partly met or not met, with a sentence of evidence. Adjust the next phase if the first one showed the plan was unrealistic.",
          "Record the reviews. If the role has a probation period, these notes become the evidence for the confirmation decision, which is far more defensible than a manager's recollection at the end of six months.",
        ],
      },
      {
        title: "Hand the plan into the normal cycle",
        body: [
          "At day ninety the plan ends. Its last review should produce the person's first ordinary goals or KRAs for the rest of the year, so there is no gap between the onboarding plan and the regular performance cycle.",
        ],
      },
    ],
    checklist: [
      "Plan written before or on the first day",
      "Three to five outcomes per phase, each one checkable",
      "At least one outcome per phase tied to the role's KRAs",
      "Support, access and contacts listed for each phase",
      "Reviews scheduled at days 30, 60 and 90",
      "Each review recorded with evidence against each outcome",
      "Plan notes available for the probation review",
      "Regular goals set at the day-90 review",
    ],
    related: [
      {
        label: "The Employee Onboarding Checklist, From Signed Offer to Day Thirty",
        href: "/resources/hr-guides/employee-onboarding-checklist",
        note: "The HR side of joining, which runs alongside this plan.",
      },
      {
        label: "How to Run the Review That Ends a Probation Period",
        href: "/resources/hr-guides/running-a-probation-review",
        note: "Where the plan's evidence gets used.",
      },
      {
        label: "KRAs and the 9-box Guide",
        href: "/hr/topics/kras-and-9-box",
        note: "How the role's result areas are defined.",
      },
    ],
    faqs: [
      {
        q: "What is a 30 60 90 day plan?",
        a: "A short written plan for a new hire's first three months, split into a learning phase, a contributing phase and an owning phase, each with a few checkable outcomes.",
      },
      {
        q: "Who writes the 30-60-90 day plan?",
        a: "The manager drafts it, ideally before the person joins, and agrees it with the new hire in the first week. HR makes sure one exists and that reviews happen.",
      },
      {
        q: "How many goals should each phase have?",
        a: "Three to five outcomes per phase is usually enough. More than that turns the plan into a task list nobody remembers.",
      },
      {
        q: "Does a 30-60-90 day plan replace probation?",
        a: "No. Probation is a contractual period. The plan is a working document whose reviews provide evidence for the probation decision.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "running-a-probation-review",
    number: "07",
    title: "How to run the review that ends a probation period",
    audience:
      "HR teams and managers who have to decide whether to confirm, extend or end an employee's probation, and record the decision properly.",
    outcome:
      "Schedule the review before probation ends, assess against the standards set at joining, choose between confirm, extend and not confirm, and issue the right letter.",
    minutes: 10,
    seo: {
      title: "Probation Review Process: Confirm, Extend or End Fairly",
      description:
        "A probation review process for managers and HR: scheduling before the end date, gathering evidence, holding the meeting, and confirming or extending in writing.",
      keywords: [
        "probation review process",
        "probation review",
        "probation confirmation process",
        "probation extension",
      ],
    },
    opening: [
      "The most common probation problem is not a wrong decision. It is no decision: the probation end date passes, nobody reviews anything, and the employee is in an unclear position that the appointment letter and standing orders may resolve in a way the employer did not intend.",
      "This guide covers the probation review process itself. The probation and confirmation topic page explains what probation is; here the job is running the review on time and recording the outcome.",
    ],
    chapters: [
      {
        title: "Know your own terms before the review",
        body: [
          "Read the appointment letter and policy for this employee. Note the probation length, whether it can be extended and by how much, the notice period during probation, and what the documents say happens if probation ends without a written decision.",
          "Where the establishment is covered by standing orders, certified or model, those may also govern probation and confirmation. The position varies by state and by the size and type of establishment, so check what applies rather than assuming.",
        ],
        watch:
          "If your letter is silent on what happens when probation lapses without a decision, treat the end date as a hard deadline. Do not rely on silence being read in your favour.",
      },
      {
        title: "Schedule from the end date backwards",
        body: [
          "Set a reminder several weeks before the end date. The manager needs time to gather evidence, the meeting has to be held, and the letter has to be issued before the date, not after it.",
          "Have your HR system or calendar raise probation end dates for the coming month as a routine report, so no case depends on someone remembering.",
        ],
      },
      {
        title: "Assess against what was set at joining",
        body: [
          "Use the standards set at joining: the role's KRAs, the 30-60-90 day plan if there was one, and any conduct expectations. Assessing against criteria the employee never saw is unfair and hard to defend.",
        ],
        list: {
          style: "bullet",
          items: [
            "Outcomes from the onboarding plan reviews, with evidence",
            "Quality and timeliness of work against the role's expectations",
            "Attendance and conduct record, factually stated",
            "Feedback already given during probation, and what changed after it",
            "The employee's own view, collected before the meeting",
          ],
        },
      },
      {
        title: "Hold the meeting and choose one of three outcomes",
        body: [
          "Meet the employee, go through the evidence, and hear their view. Then decide. There are three outcomes, and each needs a different follow-up.",
        ],
        list: {
          style: "ordered",
          items: [
            "Confirm: issue a confirmation letter with the effective date and any change in terms, such as notice period or benefits that start on confirmation",
            "Extend: only if your terms allow it, for a defined period, with specific written improvement goals and a fixed review date",
            "Do not confirm: follow the notice terms that apply during probation, and record the reasons and the feedback given during the period",
          ],
        },
        watch:
          "An extension without specific goals is a postponement. If you cannot say what would need to change for confirmation, you are probably ready to decide now.",
      },
      {
        title: "Record it and update the employee record",
        body: [
          "Issue the letter before the end date. Update the employee record with the confirmation or extension date, because leave entitlements, notice periods and some benefits often change on confirmation and payroll needs to know.",
          "File the review notes with the letter. If the decision is ever questioned, the notes made at the time are the record.",
        ],
      },
    ],
    checklist: [
      "Appointment letter, policy and any applicable standing orders read for this employee",
      "Review scheduled well before the probation end date",
      "Evidence gathered against standards set at joining",
      "Employee's self-assessment collected",
      "Meeting held and one of confirm, extend or not confirm chosen",
      "Extension, if any, has written goals and a fixed review date",
      "Letter issued before the end date",
      "Employee record updated with dates and any changed terms",
    ],
    related: [
      {
        label: "Probation and Confirmation Guide",
        href: "/hr/topics/probation-and-confirmation",
        note: "What probation is and how confirmation works.",
      },
      {
        label: "Confirmation Letter Template",
        href: "/resources/hr-letter-templates/confirmation-letter",
        note: "The letter issued when probation ends well.",
      },
      {
        label: "Probation Extension Letter Template",
        href: "/resources/hr-letter-templates/probation-extension-letter",
        note: "For an extension with goals and a review date.",
      },
      {
        label: "Writing a 30-60-90 Day Plan for a New Hire",
        href: "/resources/hr-guides/30-60-90-day-plan",
        note: "The evidence a fair probation review relies on.",
      },
    ],
    faqs: [
      {
        q: "What is the probation review process?",
        a: "A scheduled review before probation ends, where the manager assesses the employee against standards set at joining, meets them, and decides to confirm, extend or not confirm, followed by a letter.",
      },
      {
        q: "What happens if probation ends without a review?",
        a: "It depends on the appointment letter, policy and any standing orders that apply. Some treat the employee as confirmed, others as continuing on probation. Avoid the question by deciding before the end date.",
      },
      {
        q: "Can probation be extended?",
        a: "Only if the employee's terms allow it. Extend for a defined period with specific goals and a review date, and put it in writing before the original end date.",
      },
      {
        q: "Who should attend the probation review meeting?",
        a: "The manager and the employee at minimum. HR often joins when the outcome is an extension or non-confirmation.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "running-an-appraisal-cycle",
    number: "08",
    title: "Running an appraisal cycle end to end",
    audience:
      "HR teams responsible for the annual or half-yearly appraisal cycle, from the kick-off announcement to the letters.",
    outcome:
      "Plan the cycle's stages and dates, run self and manager reviews, calibrate, and hand ratings into increments without the cycle stalling halfway.",
    minutes: 12,
    seo: {
      title: "Appraisal Cycle Process: Planning and Running It End to End",
      description:
        "The appraisal cycle process step by step: setting eligibility and dates, self and manager reviews, calibration, sharing outcomes, and linking ratings to pay.",
      keywords: [
        "appraisal cycle process",
        "performance appraisal process",
        "appraisal cycle steps",
        "annual appraisal process",
      ],
    },
    opening: [
      "An appraisal cycle is a project with many contributors and one owner. It stalls in predictable places: managers who have not finished their reviews, a calibration meeting nobody prepared for, and a gap between ratings being final and increment letters going out.",
      "This guide covers the logistics of the cycle. The performance reviews topic page covers how to have the conversation itself.",
    ],
    chapters: [
      {
        title: "Decide scope, eligibility and the timeline",
        body: [
          "Before announcing anything, settle who is in the cycle. Most employers set an eligibility cut-off by date of joining, and decide separately what happens to people on probation, on long leave, or serving notice.",
          "Then fix dates for each stage, working back from the date increments take effect. A cycle with dates only for the start and end will slip in the middle.",
        ],
        list: {
          style: "ordered",
          items: [
            "Eligibility list frozen and shared with managers",
            "Self-assessment window",
            "Manager review window",
            "Calibration meetings by function",
            "Final approval of ratings and increments",
            "Conversations held and letters issued",
          ],
        },
      },
      {
        title: "Prepare the forms and the evidence",
        body: [
          "Use the KRAs or goals set at the start of the period as the basis for the form. If goals were never set, the cycle will be about impressions, and calibration will be argument.",
          "Pull together what managers need before they start: each person's goals, any mid-year review notes, and recognition or feedback recorded during the year. A manager writing ten reviews from memory in one evening will rate the last two months, not the year.",
        ],
      },
      {
        title: "Run self and manager reviews, and chase daily",
        body: [
          "Open the self-assessment window, then the manager window. Publish completion by team regularly to the leadership group. Completion is the stage that slips most.",
          "Ask managers to write evidence for each rating, especially at the ends of the scale. A rating without a reason cannot be calibrated.",
        ],
        watch:
          "Do not let managers see a proposed increment while writing the review. Ratings written backwards from a pay figure defeat the purpose of the review.",
      },
      {
        title: "Calibrate before anything is shared",
        body: [
          "Calibration is the meeting where managers in a function compare ratings across teams, so that a given rating means the same thing everywhere. Bring the distribution of ratings by manager and the evidence for outliers.",
          "Whether you use a guided distribution or none at all is an employer decision. Either way, the output of calibration is a final rating per person with a recorded reason for any change.",
        ],
      },
      {
        title: "Approve, communicate and pay",
        body: [
          "Once ratings are final, apply the increment and bonus rules approved for the cycle, get budget approval, and only then let managers hold conversations. A manager who shares a rating before the increment is approved invites a second conversation.",
          "Issue increment letters with the effective date, and give payroll the revised salaries in good time. If the effective date is earlier than the month of processing, the difference is paid as arrears, which also changes the year's tax projection.",
        ],
      },
    ],
    checklist: [
      "Eligibility rules decided and list frozen",
      "Dates set for every stage, working back from the increment effective date",
      "Goals or KRAs from the start of the period available to managers",
      "Self and manager review completion tracked and published",
      "Evidence written for each rating",
      "Calibration held by function with outlier evidence",
      "Increments approved before conversations",
      "Letters issued and revised salaries, with arrears, given to payroll",
    ],
    related: [
      {
        label: "Performance Reviews Guide",
        href: "/hr/topics/performance-reviews",
        note: "How to hold the review conversation itself.",
      },
      {
        label: "Calibration",
        href: "/resources/hr-and-payroll-glossary/calibration",
        note: "What calibration means and what it produces.",
      },
      {
        label: "Increment Letter Template",
        href: "/resources/hr-letter-templates/increment-letter",
        note: "The letter that closes the cycle.",
      },
      {
        label: "Performance & OKRs",
        href: "/solutions/performance-and-okrs",
        note: "How goals, reviews and KRAs connect in HRMagix.",
      },
    ],
    faqs: [
      {
        q: "What are the steps in an appraisal cycle process?",
        a: "Set eligibility and dates, prepare forms and evidence, run self-assessments, run manager reviews, calibrate, approve ratings and increments, hold conversations, and issue letters and revised salaries.",
      },
      {
        q: "Who should be eligible for the appraisal cycle?",
        a: "That is an employer decision. Most set a joining-date cut-off and separate rules for employees on probation, on long leave or serving notice. Write the rule down before the cycle opens.",
      },
      {
        q: "Should managers share ratings before increments are approved?",
        a: "Generally no. Sharing a rating before the pay outcome is fixed tends to lead to a second, harder conversation.",
      },
      {
        q: "How do arrears arise from an appraisal cycle?",
        a: "If the increment takes effect from an earlier month than the one in which it is processed, the difference for the intervening months is paid as arrears.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "monthly-payroll-close-checklist",
    number: "09",
    title: "The monthly payroll close, step by step",
    audience:
      "Payroll executives and finance teams who run payroll every month and want a fixed sequence from cut-off to filed returns.",
    outcome:
      "Close each month in the same order: freeze inputs, process, review variances, approve, pay, file and lock, so errors are caught before money moves.",
    minutes: 11,
    seo: {
      title: "Payroll Checklist: The Monthly Payroll Close Step by Step",
      description:
        "A monthly payroll checklist for Indian employers: input cut-off, changes, attendance, processing, variance review, approval, payment, statutory filing and lock.",
      keywords: [
        "payroll checklist",
        "monthly payroll checklist",
        "payroll close process",
        "payroll processing steps",
      ],
    },
    opening: [
      "A monthly payroll close is mostly the same every month. The errors come from the parts that change: a joiner after cut-off, a revised salary, attendance regularised late, a deduction someone asked for in a message. A fixed checklist exists so that the changes are handled the same way every time.",
      "This guide is for the recurring monthly run. The first payroll run guide covers the one-off case of moving into a new system.",
    ],
    chapters: [
      {
        title: "Freeze inputs at the cut-off",
        body: [
          "Set a cut-off date for each type of input and publish it. After cut-off, late changes either go into next month as arrears or adjustments, or are accepted only with an approval that is recorded.",
        ],
        list: {
          style: "bullet",
          items: [
            "Joiners and exits, with dates",
            "Salary revisions, promotions and transfers, with effective dates",
            "Attendance and leave, with regularisations approved",
            "Overtime, shift allowances and other variable pay, approved",
            "Reimbursements, incentives, advances and recoveries",
            "Investment declarations or regime changes affecting TDS",
          ],
        },
        watch:
          "Pending leave and regularisation approvals at cut-off become loss-of-pay days by default. Chase managers before the cut-off, not after the payslips go out.",
      },
      {
        title: "Process and review against last month",
        body: [
          "Run payroll, then compare it with the previous month employee by employee. Every difference should have a reason in the month's inputs: a joiner, an exit, a revision, LOP, overtime, arrears.",
          "Review the statutory outputs separately. Check employees near the ESI wage threshold, anyone whose PF wage changed, and PT for employees who moved state. Look at TDS for anyone whose deduction moved sharply, usually caused by a new declaration or a revision.",
        ],
      },
      {
        title: "Approve and pay",
        body: [
          "Send a summary for approval: headcount, gross, deductions, net, employer cost, and a list of the month's exceptions. The approver should be someone other than the person who processed the run.",
          "Generate the bank file from the approved run, and confirm the file total equals the approved net pay before it is uploaded. Release payslips once salaries are credited.",
        ],
      },
      {
        title: "Deposit and file statutory dues",
        body: [
          "Deposit each statutory deduction with its authority and file the return by the due date. The due dates are set by each law and its rules and can be revised, so keep a compliance calendar and check it each month rather than relying on memory.",
        ],
        list: {
          style: "bullet",
          items: [
            "EPF contributions through the ECR on the EPFO portal",
            "ESI contributions on the ESIC portal, for covered employees",
            "TDS deposited under Section 192, with quarterly Form 24Q",
            "Professional Tax, in each state where it applies, on that state's schedule",
            "Labour Welfare Fund, in states that levy it, on that state's schedule",
          ],
        },
      },
      {
        title: "Lock the month and post to the ledger",
        body: [
          "Once paid and filed, lock the period. Corrections go into a later month as identified adjustments, so the locked month continues to match what was paid and filed.",
          "Post the payroll journal to the books and reconcile it. The payroll reconciliation guide covers that step in detail.",
        ],
      },
    ],
    checklist: [
      "Cut-off dates published for every input type",
      "Joiners, exits and revisions entered with effective dates",
      "Attendance, leave and overtime approved before cut-off",
      "Run compared with last month employee by employee",
      "ESI threshold cases, PF wage changes and TDS movements reviewed",
      "Run approved by someone other than the preparer",
      "Bank file total matched to approved net pay",
      "EPF, ESI, TDS, PT and LWF deposited and filed by their due dates",
      "Period locked and journal posted",
    ],
    related: [
      {
        label: "The Payroll Cutoff Guide",
        href: "/hr/topics/payroll-cutoff",
        note: "Setting cut-off dates and handling late inputs.",
      },
      {
        label: "Payroll Reconciliation: Bank, Ledger and Statutory Returns",
        href: "/resources/hr-guides/payroll-reconciliation",
        note: "Matching the run to the bank, the ledger and the returns.",
      },
      {
        label: "Running Your First Payroll in a New System",
        href: "/resources/hr-guides/first-payroll-run",
        note: "The one-off migration run, as opposed to the monthly close.",
      },
      {
        label: "Payroll",
        href: "/solutions/payroll",
        note: "How HRMagix runs the monthly cycle.",
      },
    ],
    faqs: [
      {
        q: "What should a monthly payroll checklist include?",
        a: "Input cut-off, joiners and exits, revisions, approved attendance and leave, variable pay, a variance review against last month, approval, bank file check, statutory deposits and returns, and locking the period.",
      },
      {
        q: "What happens to inputs received after cut-off?",
        a: "They are processed next month as arrears or adjustments, or accepted late only with a recorded approval. The rule should be the same every month.",
      },
      {
        q: "Why compare payroll with last month?",
        a: "Most errors show up as an unexplained change. If every difference between months has a reason in the inputs, the run is very likely correct.",
      },
      {
        q: "Who should approve payroll?",
        a: "Someone other than the person who processed it, usually in finance or a senior HR role, using a summary that lists the month's exceptions.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "payroll-reconciliation",
    number: "10",
    title: "Payroll reconciliation: bank, ledger and statutory returns",
    audience:
      "Finance and payroll staff who need to prove each month's payroll agrees with what was paid, what was booked and what was filed.",
    outcome:
      "Run three monthly reconciliations, trace each difference to a cause, and keep a reconciliation file that an auditor can follow.",
    minutes: 11,
    seo: {
      title: "Payroll Reconciliation: Matching Bank, Ledger and Returns",
      description:
        "How to do payroll reconciliation each month: payroll to bank, payroll to general ledger, and payroll to EPF, ESI, PT and TDS returns, and clearing differences.",
      keywords: [
        "payroll reconciliation",
        "payroll reconciliation process",
        "salary reconciliation",
        "payroll to ledger reconciliation",
      ],
    },
    opening: [
      "Payroll reconciliation answers one question: does the payroll register agree with every other record of the same money. There are three other records that matter: the bank statement, the general ledger, and the statutory returns.",
      "Each reconciliation catches a different kind of error. Doing one of them is not a substitute for the others.",
    ],
    chapters: [
      {
        title: "Start from a locked payroll register",
        body: [
          "Reconcile against the final, locked register for the month, not a draft. If the run was reprocessed after approval, use the version that was paid.",
          "The register should show, for each employee, every earning and deduction head, gross, net, and the employer's statutory contributions. Totals by head are what you reconcile; employee-level detail is what you use to find differences.",
        ],
      },
      {
        title: "Payroll to bank",
        body: [
          "Compare net pay in the register with the salary debits in the bank statement. Then compare at employee level with the bank's credit report.",
        ],
        list: {
          style: "bullet",
          items: [
            "Failed credits returned by the bank, usually wrong account details",
            "Salaries on hold that were in the register but not in the bank file",
            "Manual off-cycle payments made outside the run",
            "Duplicate credits from a bank file uploaded twice",
          ],
        },
        watch:
          "A returned credit is still owed. Track it to repayment, and correct the account details in the employee record so it does not fail again next month.",
      },
      {
        title: "Payroll to general ledger",
        body: [
          "The payroll journal should post gross salary by cost centre, each deduction to its liability account, and employer contributions to expense and liability. Compare each ledger balance with the register total for the same head.",
          "Then check that the liability accounts clear. EPF, ESI, TDS and PT payable should fall to zero, or to a known timing difference, once the month's deposits are made. A liability that grows every month means something is deducted but not paid, or paid but not booked.",
        ],
      },
      {
        title: "Payroll to statutory returns",
        body: [
          "Each return is a separate statement of the same payroll, made to a government authority. It must agree with the register.",
        ],
        list: {
          style: "ordered",
          items: [
            "EPF ECR: member count and PF wages, employee share, EPS and employer EPF share",
            "ESI: covered employees and contributions, including anyone whose coverage continues for the contribution period",
            "TDS: deductions by employee for the quarter against Form 24Q, and challans against deposits",
            "PT and LWF: by state, against that state's return",
          ],
        },
      },
      {
        title: "Clear differences and keep the file",
        body: [
          "List every difference with its cause and how it will clear: a timing difference that reverses next month, a correction to be made through an adjustment, or an error to be fixed in the next return. Do not net differences off against each other.",
          "Keep the monthly reconciliation with the register, bank statement, ledger extract and returns. At the year end, the twelve months together become the basis for reconciling Form 24Q and Form 16.",
        ],
      },
    ],
    checklist: [
      "Reconciliation run against the locked register",
      "Net pay matched to bank debits, in total and by employee",
      "Returned credits tracked to repayment and account details fixed",
      "Gross and deductions matched to ledger by head",
      "Statutory liability accounts clear after deposits",
      "ECR, ESI, TDS and PT/LWF figures matched to the register",
      "Every difference listed with cause and clearing action",
      "Monthly file kept for the year-end reconciliation",
    ],
    related: [
      {
        label: "The Monthly Payroll Close, Step by Step",
        href: "/resources/hr-guides/monthly-payroll-close-checklist",
        note: "The run that produces the register you reconcile.",
      },
      {
        label: "Your Payroll Does Not Take Four Days. Your Reconciliation Does.",
        href: "/insights/why-payroll-takes-four-days",
        note: "Why reconciliation, not calculation, takes the time.",
      },
      {
        label: "Electronic Challan Cum Return (ECR)",
        href: "/resources/hr-and-payroll-glossary/ecr",
        note: "The EPF return the register is matched against.",
      },
      {
        label: "HRMagix for Finance and Payroll Teams",
        href: "/solutions/for-finance-teams",
        note: "Payroll from the finance side.",
      },
    ],
    faqs: [
      {
        q: "What is payroll reconciliation?",
        a: "Checking that the payroll register agrees with the bank statement, the general ledger and the statutory returns for the same period, and explaining every difference.",
      },
      {
        q: "How often should payroll be reconciled?",
        a: "Every month, after the run is paid and returns are filed. A year-end reconciliation is far easier when the twelve monthly ones are done.",
      },
      {
        q: "What causes most payroll reconciliation differences?",
        a: "Returned bank credits, payments made outside the run, salaries on hold, journals posted from a draft register, and contributions deducted but deposited in a different period.",
      },
      {
        q: "Should differences be netted off?",
        a: "No. List each one separately. Two offsetting errors produce a matching total and hide both problems.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "year-end-payroll-and-form-16",
    number: "11",
    title: "Closing the payroll year and issuing Form 16",
    audience:
      "Payroll and finance teams responsible for the financial year end, the fourth-quarter TDS return and issuing Form 16 to employees.",
    outcome:
      "Close the last months of the year cleanly, reconcile TDS to the returns, file the fourth-quarter Form 24Q, and issue Form 16 that matches what the tax department holds.",
    minutes: 12,
    seo: {
      title: "Form 16 Issue Process: Closing the Payroll Year Correctly",
      description:
        "The Form 16 issue process for employers: final proof checks, last-quarter TDS, reconciling to Form 24Q, generating Part A and Part B, and issuing to employees.",
      keywords: [
        "form 16 issue process",
        "form 16 for employees",
        "payroll year end process",
        "year end payroll checklist",
      ],
    },
    opening: [
      "Form 16 is the certificate an employer issues under Section 203 of the Income-tax Act for tax deducted from salary. Employees use it to file their returns, and any difference between it and what the tax department holds becomes their problem first and the employer's soon after.",
      "Year end starts well before March. This guide covers the sequence from the final proof window to issuing the certificates.",
    ],
    chapters: [
      {
        title: "Finish proofs before the last salary runs",
        body: [
          "Investment proofs for the year should be collected and verified before the final months' payroll, so that the remaining TDS reflects verified deductions rather than declarations. The investment declarations guide covers that process.",
          "Any deduction declared but not proved is removed from the computation, and the remaining tax for the year is deducted from the last salaries. Tell employees this in advance, because the drop in take-home is otherwise a surprise.",
        ],
        watch:
          "Deductions that are only available under the old regime should not be applied to employees who have chosen the new regime. Check each employee's regime before the final computation.",
      },
      {
        title: "Settle every adjustment for the year",
        body: [
          "Before the last run, clear anything that changes the year's taxable salary: pending arrears, bonuses, perquisite values, reimbursements that are taxable if unsupported, and full and final settlements for leavers.",
          "For employees who joined mid-year, confirm that income and TDS from the previous employer were included, if the employee chose to provide them.",
        ],
      },
      {
        title: "Reconcile TDS to the returns",
        body: [
          "For each employee, total TDS deducted across the year must equal what was reported in the four quarters of Form 24Q. Deposits must match challans, and challans must be correctly tagged to the returns.",
          "Correct differences in earlier quarters through correction returns before generating certificates. Form 16 Part A is generated from what the tax department holds, so an error in a return becomes an error in the certificate.",
        ],
      },
      {
        title: "File the fourth-quarter return with salary details",
        body: [
          "The fourth-quarter Form 24Q includes the annual salary details for each employee: income, exemptions, deductions and tax computed. This is the most detailed return of the year.",
          "The due date for this return and for issuing Form 16 is set by the Income-tax Rules and can change by notification, so check the current dates on the tax department's site each year.",
        ],
      },
      {
        title: "Generate and issue Form 16",
        body: [
          "Form 16 has two parts. Part A, generated from the TRACES portal, shows TDS deducted and deposited quarter by quarter. Part B, prepared by the employer, shows the salary computation for the year.",
        ],
        list: {
          style: "ordered",
          items: [
            "Download Part A for each employee from TRACES",
            "Prepare Part B from the final payroll computation",
            "Check that Part A tax totals equal Part B tax totals for each employee",
            "Sign the certificates as the rules allow",
            "Issue to current employees and to leavers who worked during the year",
          ],
        },
      },
      {
        title: "Close the year in payroll",
        body: [
          "Lock the final month, archive the year's registers, returns and certificates, and open the new year with fresh declarations. Employees should choose their regime and declare investments for the new year before the first salary is computed.",
        ],
      },
    ],
    checklist: [
      "Investment proofs collected and verified before the final runs",
      "Unproved deductions removed and employees told about the effect",
      "Regime checked for each employee before the final computation",
      "Arrears, bonuses, perquisites and settlements included in the year's salary",
      "Year's TDS reconciled employee by employee to the four quarterly returns",
      "Correction returns filed for any earlier errors",
      "Fourth-quarter Form 24Q filed with annual salary details",
      "Part A and Part B totals matched before issue",
      "Form 16 issued to every employee who had TDS deducted, including leavers",
    ],
    related: [
      {
        label: "Form 16 (TDS Certificate for Salary)",
        href: "/resources/hr-and-payroll-glossary/form-16",
        note: "What the certificate contains.",
      },
      {
        label: "Form 24Q (Quarterly TDS Return on Salary)",
        href: "/resources/hr-and-payroll-glossary/form-24q",
        note: "The quarterly return Form 16 is reconciled to.",
      },
      {
        label: "TDS on Salary Guide",
        href: "/hr/topics/tds-on-salary",
        note: "How Section 192 deductions work through the year.",
      },
      {
        label: "Collecting Investment Declarations and Proofs From Employees",
        href: "/resources/hr-guides/collecting-investment-declarations",
        note: "The proof window that must close first.",
      },
    ],
    faqs: [
      {
        q: "What is the Form 16 issue process?",
        a: "Verify proofs, finalise the year's salary, reconcile TDS to the quarterly Form 24Q returns, file the fourth-quarter return, download Part A from TRACES, prepare Part B, check that they agree, and issue to employees.",
      },
      {
        q: "When must Form 16 be issued?",
        a: "By the date set in the Income-tax Rules for the year. The date has been revised in the past, so check the current rule each year.",
      },
      {
        q: "Does an employee who left mid-year get Form 16?",
        a: "Yes, if tax was deducted from their salary during the year. The certificate covers the period they were employed.",
      },
      {
        q: "What if Part A and Part B do not match?",
        a: "Find the difference before issuing. Usually it is a return error, a challan mapping error or a late adjustment, and a correction return may be needed.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "collecting-investment-declarations",
    number: "12",
    title: "Collecting investment declarations and proofs from employees",
    audience:
      "Payroll teams who run the annual declaration window and the proof verification that follows it.",
    outcome:
      "Run the declaration window at the start of the year, verify proofs before the year end, and keep monthly TDS close to the final liability throughout.",
    minutes: 10,
    seo: {
      title: "Investment Declaration Process for Payroll: Window to Proofs",
      description:
        "The investment declaration process for employers: regime choice, declaration window, Form 12BB, proof collection, verification rules and the effect on TDS.",
      keywords: [
        "investment declaration process",
        "investment proof submission",
        "form 12bb",
        "employee tax declaration",
      ],
    },
    opening: [
      "Under Section 192, the employer estimates each employee's tax for the year and deducts it in instalments. The estimate depends on two things the employee tells you: which tax regime they choose, and which deductions and exemptions they expect to claim.",
      "The investment declaration process collects that information twice: once as an estimate at the start of the year, and once as evidence towards the end. This guide covers both.",
    ],
    chapters: [
      {
        title: "Open the declaration window at the start of the year",
        body: [
          "Ask every employee to choose their tax regime and declare expected investments and claims in the first weeks of the financial year, and every new joiner in their first week. Give a clear closing date.",
          "Explain the default. If an employee does not choose, TDS is computed on the default regime under the current law. Check the current position each year, because the default and the rates are set by the Finance Act.",
        ],
        watch:
          "Ask for the regime choice separately from the investment declaration. Employees who are on the new regime have little to declare, and mixing the two causes confusion.",
      },
      {
        title: "Know what is being declared",
        body: [
          "Declarations are made in the format of Form 12BB under Rule 26C, which covers house rent, leave travel, interest on housing loan, and deductions under Chapter VI-A such as Section 80C. Which items are available depends on the regime the employee has chosen.",
        ],
        list: {
          style: "bullet",
          items: [
            "House rent paid, with landlord details where the rules require them",
            "Leave travel concession claims",
            "Interest on a housing loan, with lender details",
            "Chapter VI-A deductions, such as Section 80C investments, as available under the chosen regime",
            "Income from a previous employer in the same year, if the employee chooses to declare it",
          ],
        },
      },
      {
        title: "Decide whether to allow changes during the year",
        body: [
          "Employees' plans change. Decide whether declarations can be revised during the year, and how often. Allowing revisions keeps TDS closer to the final figure; limiting them keeps payroll simpler. Whatever you decide, apply the rule to everyone.",
          "Changes to the regime choice during the year follow the tax rules for salaried employees, which have changed in recent years. Check the current position before allowing a mid-year switch.",
        ],
      },
      {
        title: "Run the proof window before the final months",
        body: [
          "Set a proof submission window late enough that employees have made their investments, and early enough to verify everything before the last salary runs. Publish the list of acceptable evidence for each item.",
        ],
        list: {
          style: "ordered",
          items: [
            "Announce the window, closing date and list of acceptable proofs",
            "Collect proofs against each declared item",
            "Verify amount, name, period and the document itself",
            "Accept, reject or partly accept each item, with a reason",
            "Tell each employee the outcome and the effect on remaining TDS",
          ],
        },
      },
      {
        title: "Apply the verified figures to TDS",
        body: [
          "Recompute each employee's projected tax using verified figures only. Items not proved are removed, and the shortfall is deducted from the remaining salaries of the year.",
          "Keep the proofs and your verification record. They support Part B of Form 16 and are what you produce if the deduction is questioned.",
        ],
      },
    ],
    checklist: [
      "Declaration window opened at the start of the year with a closing date",
      "Regime choice collected from every employee, including new joiners",
      "Declarations collected in the Form 12BB format",
      "Rule on mid-year changes decided and applied consistently",
      "Proof window announced with a list of acceptable evidence",
      "Each proof verified and the outcome recorded with a reason",
      "TDS recomputed on verified figures before the final runs",
      "Proofs and verification records kept with the year's payroll",
    ],
    related: [
      {
        label: "The Declaration That Decides Twelve Months of TDS",
        href: "/insights/old-vs-new-regime",
        note: "How the regime choice drives twelve months of TDS.",
      },
      {
        label: "Form 12BB (Investment Declaration)",
        href: "/resources/hr-and-payroll-glossary/form-12bb",
        note: "The declaration format.",
      },
      {
        label: "Closing the Payroll Year and Issuing Form 16",
        href: "/resources/hr-guides/year-end-payroll-and-form-16",
        note: "Where verified figures end up.",
      },
      {
        label: "House Rent Allowance (HRA) Exemption Calculator",
        href: "/calculators/hra-exemption",
        note: "Work out the exempt part of house rent allowance.",
      },
    ],
    faqs: [
      {
        q: "What is the investment declaration process?",
        a: "At the start of the year employees choose a tax regime and declare expected investments and claims. Towards the end of the year they submit proofs, which payroll verifies before computing the final TDS.",
      },
      {
        q: "What is Form 12BB?",
        a: "The format under Rule 26C in which employees give details of claims such as house rent, leave travel, housing loan interest and Chapter VI-A deductions to their employer.",
      },
      {
        q: "What happens if an employee does not submit proofs?",
        a: "The undeclared or unproved items are excluded, and the resulting extra tax is deducted from the remaining salaries of the year.",
      },
      {
        q: "Do employees on the new regime need to declare investments?",
        a: "Most of the deductions in Form 12BB are not available under the new regime, so they usually have much less to declare. Check which items remain available under the current rules.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "epf-and-esi-registration",
    number: "13",
    title: "Registering an establishment for EPF and ESI",
    audience:
      "Founders, finance leads and first HR hires at companies that have become, or are about to become, covered by EPF or ESI.",
    outcome:
      "Work out when registration is required, prepare the documents, register on the EPFO and ESIC portals, and start contributions correctly from the first month.",
    minutes: 11,
    seo: {
      title: "EPF Registration for Employer: EPF and ESI Step by Step",
      description:
        "EPF registration for employers explained, with ESI: when coverage applies, documents to prepare, registering online, and what to do in the first month.",
      keywords: [
        "epf registration for employer",
        "esi registration for employer",
        "pf registration process",
        "esic registration online",
      ],
    },
    opening: [
      "EPF and ESI are separate schemes under separate laws, with separate portals, separate codes and separate monthly returns. Registration is required when an establishment meets the coverage conditions in each law, and contributions are then due from the date of coverage, not from the date you got round to registering.",
      "This guide covers when each applies and how registration runs. Voluntary registration below the threshold is also possible under both schemes, and some employers choose it.",
    ],
    chapters: [
      {
        title: "Check whether EPF applies",
        body: [
          "The Employees' Provident Funds and Miscellaneous Provisions Act 1952 applies, under section 1(3), to factories in the scheduled industries and to other notified establishments employing 20 or more persons. Once covered, an establishment remains covered even if headcount later falls below the threshold, under section 1(5).",
          "The count is of persons employed, which can include more than permanent staff. Check how contract workers and trainees are treated for your establishment before concluding you are below the line.",
        ],
        watch:
          "Coverage starts from the date the condition is met. Contributions for the months between that date and registration can be demanded with interest and damages.",
      },
      {
        title: "Check whether ESI applies",
        body: [
          "The Employees' State Insurance Act 1948 applies to factories and, through notifications by the appropriate government, to shops and other establishments, generally where 10 or more persons are employed. Coverage also depends on whether ESI has been implemented in the area where the establishment is located.",
          "Within a covered establishment, employees whose wages are up to the ESI wage ceiling, currently ₹21,000 a month as notified, are covered. Check the current ceiling and the notification that applies to your state and area.",
        ],
      },
      {
        title: "Prepare the documents",
        body: [
          "Both portals ask for broadly similar information about the establishment and its principal employer. Have it ready before you start, as an incomplete application usually has to be restarted.",
        ],
        list: {
          style: "bullet",
          items: [
            "Certificate of incorporation, partnership deed or other constitution document",
            "PAN of the establishment",
            "Address proof for the registered office and each place of work",
            "Details and identity documents of directors, partners or proprietor",
            "Date the coverage condition was met and headcount on that date",
            "Bank account details of the establishment",
            "Digital signature or e-sign as the portal requires",
          ],
        },
      },
      {
        title: "Register on each portal",
        body: [
          "EPF registration is done online through the EPFO's employer registration route, which has been linked to the Shram Suvidha portal; the result is an establishment code. ESI registration is done on the ESIC portal, which issues an employer code number. The exact screens change from time to time, so follow the current instructions on each portal.",
          "Register each place of work as the portal requires. Branches in other states may need their own sub-codes, particularly for ESI.",
        ],
      },
      {
        title: "Start contributing from the first month",
        body: [
          "After registration, add each employee: generate or link a UAN for EPF, and register each covered employee on the ESIC portal to obtain an insurance number. Collect Form 11 and nominations.",
          "Then build the contributions into payroll. EPF is 12% from the employee and 12% from the employer on PF wages, with the employer share split between EPF and EPS, plus EDLI and administration charges. ESI is 0.75% from the employee and 3.25% from the employer on wages for covered employees. Deposit monthly through the ECR and the ESIC portal.",
        ],
      },
    ],
    checklist: [
      "Headcount checked against the EPF threshold, including how non-permanent staff count",
      "ESI applicability checked for your state, area and type of establishment",
      "Date coverage began identified",
      "Constitution, PAN, address, signatory and bank documents ready",
      "EPF establishment code obtained",
      "ESI employer code obtained, with branch sub-codes where needed",
      "UANs generated or linked and ESI numbers obtained for covered employees",
      "Contributions set up in payroll and first deposits made by the due dates",
    ],
    related: [
      {
        label: "Provident Fund (EPF) Guide",
        href: "/hr/topics/provident-fund",
        note: "How EPF works once you are registered.",
      },
      {
        label: "Employee State Insurance (ESI) Guide",
        href: "/hr/topics/employee-state-insurance",
        note: "Coverage, contributions and the contribution period.",
      },
      {
        label: "What Changes When Your Company Crosses 20 Employees",
        href: "/resources/hr-guides/crossing-20-employees",
        note: "Every threshold that applies as you grow.",
      },
      {
        label: "Provident Fund (PF) Calculator",
        href: "/calculators/pf",
        note: "Employee and employer contributions on a given basic.",
      },
    ],
    faqs: [
      {
        q: "When is EPF registration for an employer mandatory?",
        a: "Under section 1(3) of the EPF Act 1952, when a factory in a scheduled industry or a notified establishment employs 20 or more persons. Coverage continues even if headcount later falls.",
      },
      {
        q: "When does ESI registration become mandatory?",
        a: "When the ESI Act applies to the establishment, generally at 10 or more persons in a factory or notified establishment, in an area where ESI has been implemented. Check the notification for your state.",
      },
      {
        q: "Can an employer register for EPF voluntarily?",
        a: "Yes. The Act allows voluntary coverage by agreement between the employer and a majority of employees.",
      },
      {
        q: "What happens if registration is late?",
        a: "Contributions are due from the date coverage began, and late payment attracts interest and damages under each law.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "crossing-20-employees",
    number: "14",
    title: "What changes when your company crosses 20 employees",
    audience:
      "Founders and finance leads at growing companies who want to know which laws begin to apply as headcount rises.",
    outcome:
      "Know which statutory obligations are triggered at 10, 20 and higher headcounts, how headcount is counted, and what to set up before the line is crossed.",
    minutes: 10,
    seo: {
      title: "EPF Applicability at 20 Employees and Other Thresholds",
      description:
        "EPF applicability at 20 employees, and the other thresholds a growing Indian company crosses: ESI, gratuity, bonus, POSH and standing orders.",
      keywords: [
        "epf applicability 20 employees",
        "pf applicable for how many employees",
        "employee thresholds labour law india",
        "statutory compliance by headcount",
      ],
    },
    opening: [
      "Indian labour law switches on in steps. Several obligations begin when an establishment reaches a given number of persons employed, and the twentieth hire is a particularly important step because EPF applicability and the Payment of Bonus Act both commonly start there.",
      "This guide lists the thresholds a growing company typically meets, what each requires, and what to prepare before you reach it. Thresholds are set by each Act and by notifications, and some differ by state, so treat this as a map to check against the current law.",
    ],
    chapters: [
      {
        title: "How headcount is counted",
        body: [
          "Most of these laws count persons employed in the establishment, not just permanent employees on the payroll. Depending on the Act, that can include contract workers, trainees and part-time staff. Some count on any day in the preceding year, not the current headcount.",
          "Read the definition in each Act before you conclude you are below a threshold. A company with twelve employees and ten contract workers may already be over several lines.",
        ],
      },
      {
        title: "At 10 persons",
        body: [
          "Several obligations commonly begin at ten. None of these is optional once the condition is met.",
        ],
        list: {
          style: "bullet",
          items: [
            "ESI Act 1948, where applicable to the establishment and implemented in the area",
            "Payment of Gratuity Act 1972, s.1(3), for shops and establishments with 10 or more employees",
            "Sexual Harassment of Women at Workplace Act 2013, s.4: constituting an Internal Committee at workplaces with 10 or more employees",
            "Shops and Establishments registration, which depends on the state law and may apply at fewer",
          ],
        },
      },
      {
        title: "At 20 persons",
        body: [
          "The EPF Act 1952 applies under section 1(3) to factories in scheduled industries and notified establishments employing 20 or more persons. Once covered, the establishment stays covered under section 1(5) even if headcount falls.",
          "The Payment of Bonus Act 1965 applies under section 1(3) to factories and to establishments employing 20 or more persons, requiring a minimum statutory bonus for eligible employees within the wage limit set by the Act. Bonus is computed per accounting year, so the effect is felt at the year end.",
        ],
        watch:
          "The twentieth person does not have to be permanent. Count interns, trainees and contract staff as each Act defines them before deciding EPF does not apply.",
      },
      {
        title: "Larger thresholds",
        body: [
          "Further obligations apply at higher headcounts. The figures below are in the central Acts; states can and do vary some of them.",
        ],
        list: {
          style: "bullet",
          items: [
            "Maternity Benefit Act 1961, s.11A: a creche facility where 50 or more employees are employed",
            "Industrial Employment (Standing Orders) Act 1946: certified standing orders, at 100 workers under the central Act, lower in some states",
            "Contract Labour Act 1970: registration and licensing where 20 or more contract workers are engaged, as the Act and state rules provide",
          ],
        },
      },
      {
        title: "Set up before you cross",
        body: [
          "The practical risk is not the obligation itself but noticing it late, since most contributions are due from the date coverage began. Track headcount by establishment monthly against each threshold.",
          "When a threshold approaches, prepare in advance: registration documents for EPF and ESI, payroll configured for the contributions, a POSH policy and Internal Committee, a bonus provision in the accounts. The labour codes, in force since 21 November 2025, restate several of these thresholds and state rules under them may still be in draft, so check the current position for your establishment.",
        ],
      },
    ],
    checklist: [
      "Headcount definition checked in each Act, including contract staff and trainees",
      "Headcount tracked monthly by establishment",
      "ESI applicability and implemented-area status checked",
      "Gratuity liability recognised once the Act applies",
      "POSH Internal Committee constituted at 10 or more employees",
      "EPF registration ready before the twentieth person",
      "Payment of Bonus Act provision made once applicable",
      "Higher thresholds (creche, standing orders, contract labour) checked as you grow",
    ],
    related: [
      {
        label: "Registering an Establishment for EPF and ESI",
        href: "/resources/hr-guides/epf-and-esi-registration",
        note: "How to register once a threshold is crossed.",
      },
      {
        label: "Statutory Payroll Compliance Guide",
        href: "/hr/topics/statutory-compliance",
        note: "The statutory heads an Indian employer manages.",
      },
      {
        label: "Payment of Bonus Act",
        href: "/resources/labour-law/payment-of-bonus-act",
        note: "Applicability, eligibility and the minimum bonus.",
      },
      {
        label: "Startups",
        href: "/industries/startups",
        note: "HR setup for a company still finding its policies.",
      },
    ],
    faqs: [
      {
        q: "Is EPF applicable for 20 employees?",
        a: "Yes. Under section 1(3) of the EPF Act 1952, factories in scheduled industries and notified establishments employing 20 or more persons are covered.",
      },
      {
        q: "If headcount drops below 20, does EPF stop?",
        a: "No. Under section 1(5), an establishment once covered continues to be covered even if the number of persons employed later falls below 20.",
      },
      {
        q: "Do contract workers count towards the threshold?",
        a: "Often yes, depending on the Act's definition of persons employed or employees. Check each Act rather than counting only permanent staff.",
      },
      {
        q: "Which laws apply at 10 employees?",
        a: "Commonly the ESI Act where implemented, the Payment of Gratuity Act for shops and establishments, and the POSH Act's Internal Committee requirement. State laws may add others.",
      },
      {
        q: "Do the labour codes change these thresholds?",
        a: "The codes, in force since 21 November 2025, restate many thresholds, sometimes with changes. Some details depend on state rules, which differ and may still be in draft, so check the current position for your establishment.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "writing-an-overtime-policy",
    number: "15",
    title: "Writing an overtime policy: approval, rates and records",
    audience:
      "HR teams and operations managers writing or rewriting the rules for when overtime is worked, approved and paid.",
    outcome:
      "Decide who is eligible, how overtime is approved, how it is calculated and paid, and what records are kept, in a policy that matches the law for your establishment.",
    minutes: 10,
    seo: {
      title: "Overtime Policy: Writing Approval and Pay Rules That Hold",
      description:
        "How to write an overtime policy for an Indian workplace: eligibility, pre-approval, the statutory rate, hours limits, comp-off, payroll treatment and records.",
      keywords: [
        "overtime policy",
        "overtime policy india",
        "overtime approval process",
        "overtime pay rules",
      ],
    },
    opening: [
      "An overtime policy has two jobs. It sets out the legal minimum the employer must meet, and it controls cost by deciding who can authorise extra hours. Policies that do only the first tend to produce overtime nobody approved; policies that do only the second tend to fall short of the law.",
      "The overtime management topic page explains the concept. This guide is about drafting the policy, decision by decision.",
    ],
    chapters: [
      {
        title: "Start from the law that applies to you",
        body: [
          "For factories, the Factories Act 1948, s.59, requires overtime at twice the ordinary rate of wages for work beyond the daily or weekly limits, and the Act limits total hours and overtime. For shops and commercial establishments, the state's Shops and Establishments Act sets the hours, overtime rate and limits, and these vary by state.",
          "Identify which law covers each of your locations before writing anything. A company with a factory in one state and offices in two others may need the policy to state different rules for each.",
        ],
        watch:
          "The labour codes, in force since 21 November 2025, restate overtime rules: the Code on Wages (s.14) sets overtime at not less than twice the normal rate. Check the hours limits in your state's rules rather than assuming the older Acts still govern.",
      },
      {
        title: "Decide who is eligible",
        body: [
          "Statutory overtime applies to workers covered by the relevant law, which usually excludes those in supervisory or managerial roles as the law defines them. Above that, eligibility is a policy decision.",
          "Write eligibility by role or grade, not by name. State clearly whether staff outside the statutory scope receive overtime pay, compensatory off, or neither.",
        ],
      },
      {
        title: "Require approval before the work",
        body: [
          "The most useful clause in the policy is that overtime must be approved before it is worked, by a named role. Retrospective approval should be allowed only in stated circumstances, such as a breakdown, and recorded.",
        ],
        list: {
          style: "ordered",
          items: [
            "Manager requests overtime with the reason and expected hours",
            "Approver confirms, within any budget or hours limit",
            "Hours are recorded through attendance, not self-reported",
            "Actual hours above the approved figure need a second approval",
            "Approved hours flow to payroll at the cut-off",
          ],
        },
      },
      {
        title: "Define how it is calculated and paid",
        body: [
          "State the rate and the wage it is applied to. Under the Factories Act, the ordinary rate of wages is defined in s.59 and includes basic and allowances as that section provides; under state laws the definition varies. Say how the hourly rate is derived and how part-hours are rounded.",
          "Say which month overtime is paid in, usually the month after it is worked if attendance closes at a cut-off. Note that overtime pay enters the ESI contribution base, though it is excluded when testing whether an employee is covered.",
        ],
      },
      {
        title: "Compensatory off, limits and records",
        body: [
          "If you offer compensatory off instead of pay for some staff, state who it applies to, how many hours earn a day, and when it lapses. Comp-off cannot replace statutory overtime pay for workers the law covers.",
          "State the limits on hours, which the law sets, and keep the registers the applicable law requires. Records of approved and worked overtime are what you will produce in an inspection.",
        ],
      },
    ],
    checklist: [
      "Applicable law identified for each location",
      "Statutory rate and hours limits stated per location",
      "Eligibility written by role or grade",
      "Pre-approval required, with a named approver role",
      "Retrospective approval limited to stated situations",
      "Rate, wage base and rounding defined",
      "Payment month and ESI treatment stated",
      "Comp-off rules, if any, defined without replacing statutory pay",
      "Overtime registers kept as the law requires",
    ],
    related: [
      {
        label: "Overtime Management Guide",
        href: "/hr/topics/overtime-management",
        note: "What overtime management involves.",
      },
      {
        label: "Overtime Calculator",
        href: "/calculators/overtime",
        note: "Overtime pay at the statutory rate.",
      },
      {
        label: "The ESI Threshold Is Not a Monthly Test, and Treating It as One Costs Money",
        href: "/insights/esi-threshold-moving-wage-base",
        note: "How overtime affects ESI contributions.",
      },
      {
        label: "Factories Act: Working Hours and Overtime",
        href: "/resources/labour-law/factories-act",
        note: "Hours, overtime and the s.59 rate.",
      },
    ],
    faqs: [
      {
        q: "What should an overtime policy include?",
        a: "The law that applies to each location, eligibility, pre-approval rules, the rate and wage base, rounding, payment month, any compensatory off rules, limits on hours, and the records kept.",
      },
      {
        q: "What is the statutory overtime rate in India?",
        a: "For factories, twice the ordinary rate of wages under the Factories Act 1948, s.59. For shops and establishments it is set by the state law and varies.",
      },
      {
        q: "Can compensatory off replace overtime pay?",
        a: "Not for workers whose overtime pay is required by law. It can be offered to staff outside the statutory scope, as a policy choice.",
      },
      {
        q: "Does overtime count for ESI?",
        a: "Overtime is excluded when testing whether an employee falls within the ESI wage ceiling, but contributions are payable on wages including overtime.",
      },
    ],
  },
];

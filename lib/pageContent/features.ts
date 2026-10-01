import type { PageContent } from "../pageContent";

/** Module detail for the twelve feature pages, keyed by feature slug. */
export const featureDetail: Record<string, PageContent> = {
  attendance: {
    eyebrow: "How it works",
    title: "From the first punch to the payroll cutoff",
    sections: [
      {
        heading: "Where attendance sits in an HR month",
        body: [
          "Attendance is the record every other monthly task depends on. Before payroll can close, HR needs to know who was present, who came in late, who worked a night shift and who was absent without approved leave. When that record lives in a biometric machine on one side and a spreadsheet on the other, the last week of the month goes into matching the two.",
          "The module keeps that record in one place through the month, so the cutoff becomes a check rather than a rebuild.",
        ],
      },
      {
        heading: "How punches are captured",
        body: [
          "Punches can come from biometric devices that push data to HRMagix (the site lists eSSL, Matrix and ZKTeco) or from the mobile app, where geo-fencing and a selfie confirm that a remote or field employee clocked in from the right place. Each day records the sessions and the time worked.",
        ],
        list: {
          style: "bullet",
          items: [
            "Shift rotations, night shift differentials and late grace periods are applied by rule.",
            "Loss of pay is worked out from the attendance record and passed to the monthly payroll run.",
            "Employees see today's hours and their last seven days on their own dashboard.",
          ],
        },
      },
      {
        heading: "Who uses it",
        body: [
          "Employees clock in and out and check their own hours. Managers see who is in, on leave or remote. HR owns the rules and reviews exceptions before payroll closes.",
        ],
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Which locations punch on biometric devices and which teams punch on mobile.",
            "Your shift patterns, rotation cycle and any night shift differential.",
            "How many minutes of grace a late arrival gets before it is marked late.",
            "Your attendance cutoff date relative to the payroll run.",
          ],
        },
      },
    ],
  },

  leaves: {
    eyebrow: "How it works",
    title: "Leave rules written once and applied every time",
    sections: [
      {
        heading: "What the leave module is for",
        body: [
          "Most leave disputes are not about whether someone may take leave but about the balance: how much was earned this month, whether unused days carried over, whether a weekend between two leave days counts. The module holds your leave policy as rules, so balances are worked out the same way for everyone and HR stops answering the same balance question by email.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "You set up the leave categories your policy uses, such as earned or privilege leave, sick leave and maternity or paternity leave. Balances accrue monthly by rule, carry-over limits are applied at year end, and the sandwich rule is enforced where your policy has one. Compensatory off is tracked alongside regular leave, and holiday calendars can differ by state.",
          "Requests move through manager and HR approval levels, with email and push alerts at each step. Attendance, approved leave and overtime are synchronised with the monthly payroll cut-off.",
        ],
      },
      {
        heading: "Who uses it",
        body: [
          "Employees apply for leave and see their balance by type for the year. Managers approve or decline from the request. HR maintains the policy, the holiday lists and any manual adjustments.",
        ],
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Your leave types and annual quota for each, checked against the Factories Act or your state's Shops and Establishments rules, which vary by state.",
            "Whether leave accrues monthly or is credited upfront, and how much may carry over.",
            "Whether the sandwich rule applies, and to which leave types.",
            "How many approval levels a request needs.",
            "One holiday list for the company, or one per state or location.",
          ],
        },
      },
    ],
  },

  payroll: {
    eyebrow: "How it works",
    title: "A monthly payroll run built on the month's own records",
    sections: [
      {
        heading: "What payroll has to bring together",
        body: [
          "A payroll run is the point where attendance, leave, overtime, salary structure and statutory deductions all have to agree. Errors usually come from the hand-offs between them rather than the arithmetic. The payroll module takes its inputs from the attendance and leave records already in HRMagix, so the run starts from data that has been checked through the month.",
        ],
      },
      {
        heading: "What the run produces",
        list: {
          style: "bullet",
          items: [
            "Employee and employer EPF contributions, with the wage ceiling applied where you choose it.",
            "ESI contributions for employees within the gross salary threshold.",
            "Professional Tax by the slab of each employee's state.",
            "Monthly TDS under Section 192, with the employee's choice of old or new regime, and quarterly Form 24Q export.",
            "ECR files for upload to the EPFO and ESIC portals.",
            "A bank payment batch file formatted for NEFT, RTGS or IMPS.",
          ],
        },
      },
      {
        heading: "Who uses it",
        body: [
          "HR or finance runs payroll and reviews the output before release. Employees declare investments for TDS and receive their payslips. Leadership sees payroll cost and budget variance in analytics.",
        ],
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Salary structures: which components make up gross pay for each grade.",
            "Whether EPF is calculated on the capped wage or on actual basic pay.",
            "Which state each employee is registered in for PT and Labour Welfare Fund.",
            "Your attendance cutoff and pay date.",
          ],
        },
        note: "Statutory rates and thresholds change by notification. Confirm the current figures before your first run.",
      },
    ],
  },

  okrs: {
    eyebrow: "How it works",
    title: "Keeping objectives visible between quarterly reviews",
    sections: [
      {
        heading: "What the OKR module is for",
        body: [
          "OKRs fail quietly when they are set at the start of a quarter and opened again at the end. The module is built to keep them in view in between: each objective has measurable key results, progress is updated as work moves, and check-ins happen on a cadence rather than at review time.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Objectives can be set quarterly or annually and cascaded from leadership down to teams and individual contributors, so each person can see which company objective their work supports. Key results carry progress sliders, milestone weighting and a confidence score.",
          "Sprint check-in reminders prompt owners to update progress, and bi-weekly health updates show which objectives are on track and which have stalled.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "Leadership sets the company objectives for the period.",
            "Managers break them into team objectives and review progress at check-ins.",
            "Employees own their key results and update progress themselves.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Quarterly or annual cycles, or both.",
            "How many levels the cascade goes down to.",
            "How often check-ins happen.",
            "Whether OKR progress informs performance reviews or is kept separate from ratings.",
          ],
        },
      },
    ],
  },

  "kra-9box": {
    eyebrow: "How it works",
    title: "Role expectations, ratings and the talent matrix in one place",
    sections: [
      {
        heading: "What KRAs and the 9-box are for",
        body: [
          "Key Result Areas describe what a role is accountable for, independent of this quarter's goals. They give reviews a fixed reference point. The 9-box takes the next step: it places each person by current performance against growth potential, so leadership can see where its future leaders and its retention risks sit.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Each role gets its own KRAs and a competency scoring matrix. Evaluations can draw on more than one rater. The resulting scores plot people on an interactive 9-box matrix, and calibration dashboards let leadership review ratings across teams before they are final.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "HR defines KRAs and competencies with department heads and runs the cycle.",
            "Managers and other raters score against the matrix.",
            "Leadership calibrates and uses the 9-box for promotion and succession decisions.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Which roles share KRAs and which need their own.",
            "Your competency list and rating scale.",
            "Who rates: manager only, or manager plus peers or others.",
            "How you define potential, so the vertical axis of the 9-box means the same thing for every team.",
            "Who attends calibration, and how often.",
          ],
        },
      },
    ],
  },

  pips: {
    eyebrow: "How it works",
    title: "Running an improvement plan with a clear record",
    sections: [
      {
        heading: "What a PIP needs to work",
        body: [
          "A performance improvement plan is useful only if the employee knows exactly what has to change, by when, and how it will be judged. It also needs a written record, because the outcome may be a confirmation, an extension or an exit. The module gives both sides that structure over 30, 60 or 90 days.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Each plan is built around milestone checkpoints with measurable criteria for improvement. A confidential journal shared between manager and employee holds objective notes and coaching logs as the plan runs, rather than reconstructing them at the end.",
          "Timelines escalate automatically if a checkpoint passes without review, and the plan closes with an outcome status that is signed off.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "Managers set milestones, hold the check-ins and log coaching notes.",
            "Employees see the plan, the criteria and the record of each review.",
            "HR oversees fairness and consistency across plans and approves the outcome.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Standard plan lengths, and when each is used.",
            "What evidence must exist before a PIP is opened.",
            "Who signs off the outcome and who is escalated to when a checkpoint is missed.",
            "Who can read the journal beyond the manager and employee.",
          ],
        },
      },
    ],
  },

  recognition: {
    eyebrow: "How it works",
    title: "Making appreciation part of the working week",
    sections: [
      {
        heading: "What recognition is for",
        body: [
          "Appreciation that waits for the annual review arrives too late to shape behaviour. The recognition module lets anyone thank a colleague when the work happens, and ties that thanks to the values the company says it cares about, so recognition also shows which values people actually see in each other.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Employees give peer-to-peer kudos tagged with badges for your own company values. Kudos appear on a culture feed on the employee home dashboard, so the whole company sees them. A monthly leaderboard shows who has been recognised, and spot reward allowances can be redeemed.",
          "Recognition sits in the Engagement area of the app, next to growth points, wellness and Speak Up.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "Employees give and receive kudos.",
            "Managers use it to call out good work in the open, not only in reviews.",
            "HR sets up the values badges and the reward allowance, and watches participation.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Your values badges, worded the way your people talk about them.",
            "Whether to attach spot rewards, and the allowance per period.",
            "Whether the leaderboard is visible to everyone or to managers only.",
            "Any guidance on what deserves a kudos, so it stays meaningful.",
          ],
        },
      },
    ],
  },

  meetings: {
    eyebrow: "How it works",
    title: "Recurring 1-on-1s that build on the last one",
    sections: [
      {
        heading: "What the meetings module is for",
        body: [
          "A 1-on-1 is only as useful as what carries from one conversation to the next. Without a shared agenda and a list of agreed actions, each meeting starts from memory. The module keeps the thread: what was raised, what was agreed and who owes what by when.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Manager and employee build the agenda together before the meeting, adding talking points as they come up between conversations. Action items are assigned to a person with a due date, and reminders go out as the date approaches.",
          "Managers can keep private coaching notes, and past conversations stay in an archive for the next review or a handover to a new manager.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "Managers schedule recurring 1-on-1s and keep coaching notes.",
            "Employees add their own agenda items and track the actions they own.",
            "HR can set the expectation for how often 1-on-1s should happen.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Expected frequency, for example weekly or fortnightly, by level.",
            "A standard agenda starter, such as progress, blockers, growth and feedback.",
            "What belongs in private notes and what belongs in the shared record.",
          ],
        },
      },
    ],
  },

  onboarding: {
    eyebrow: "How it works",
    title: "Getting a new hire ready before the first day",
    sections: [
      {
        heading: "What onboarding covers",
        body: [
          "Most first-day friction comes from work that could have been done earlier: documents not collected, a letter not signed, a laptop not ordered. The onboarding module moves that work to the days between offer acceptance and joining, and gives each department a set sequence to follow.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        list: {
          style: "ordered",
          items: [
            "The new hire uses a self-service pre-boarding portal to upload PAN, Aadhaar and bank details.",
            "The appointment letter is generated from the hire's details and can be signed digitally.",
            "IT hardware and workspace provisioning is tracked as a checklist, so nothing waits on a reminder.",
            "A department welcome workflow sets out who meets the new hire and what happens in their first days.",
          ],
        },
      },
      {
        heading: "Who uses it",
        body: [
          "HR starts the onboarding and checks documents. The new hire completes their own uploads. IT and admin work through the provisioning checklist, and the hiring manager owns the department welcome.",
        ],
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "The documents every new hire must submit, and any extras by role.",
            "Your appointment letter template and who signs for the company.",
            "The standard asset kit per role.",
            "The welcome steps for each department.",
          ],
        },
      },
    ],
  },

  documents: {
    eyebrow: "How it works",
    title: "Personnel files, policies and expiry dates kept in order",
    sections: [
      {
        heading: "What the documents module is for",
        body: [
          "HR holds two kinds of documents: those about an employee, such as ID proofs, contracts and certificates, and those every employee must read, such as the handbook and policies. Both cause trouble when scattered across inboxes and shared drives. The module keeps them in one store, with control over who can see what.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Each employee has an encrypted digital personnel file, with access governed by role. Company documents such as the handbook, NDAs and compliance policies are issued for acknowledgment, and HR can see who has signed off and who has not.",
          "Where a document has an expiry date, such as a visa, driving licence or certificate, the module raises an alert before it lapses.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "HR maintains personnel files and issues policies.",
            "Employees view their own documents and acknowledge policies.",
            "Managers see what their role permits and nothing more.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Which roles can see which document types, especially salary and ID documents.",
            "Which policies need a signed acknowledgment, and from whom.",
            "Which documents carry expiry dates and how early you want the alert.",
          ],
        },
      },
    ],
  },

  succession: {
    eyebrow: "How it works",
    title: "Knowing who could step into each critical role",
    sections: [
      {
        heading: "What succession planning is for",
        body: [
          "Every growing company has roles where one departure would stall a team or a client. Succession planning names those roles in advance and asks a plain question of each: who could take this on, and how soon. The module turns that question into a maintained record rather than a one-off exercise.",
        ],
      },
      {
        heading: "How it works in HRMagix",
        body: [
          "Key positions are assessed for criticality and given a vulnerability index, which shows where the company is most exposed. For each, you build a bench of internal candidates rated by readiness: ready now, in one to two years, or in three or more.",
          "High-potential successors get individual development plans that set out what they need to be ready. The 9-box from the KRA module is a natural input when choosing them.",
        ],
      },
      {
        heading: "Who uses it",
        list: {
          style: "bullet",
          items: [
            "Leadership and HR identify critical roles and review the benches.",
            "Managers nominate successors and support their development plans.",
            "Successors work through their development plans.",
          ],
        },
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "What makes a role critical in your company.",
            "How many successors you want named per critical role.",
            "Whether candidates are told they are on a bench.",
            "How often benches are reviewed.",
          ],
        },
      },
    ],
  },

  analytics: {
    eyebrow: "How it works",
    title: "Reading the workforce from the records you already keep",
    sections: [
      {
        heading: "What analytics is for",
        body: [
          "The questions leadership asks about people are usually simple: how many, where, who is leaving, what it costs. Answering them from separate attendance, leave and payroll files means a fresh spreadsheet each time. Because those records already sit in HRMagix, the analytics module reads them directly.",
        ],
      },
      {
        heading: "What it shows",
        list: {
          style: "bullet",
          items: [
            "Headcount growth, distribution by department and gender diversity.",
            "Attrition risk indicators and tenure analysis.",
            "Overtime expense and leave utilisation rates.",
            "Payroll cost against budget, and the variance.",
          ],
        },
      },
      {
        heading: "Who uses it",
        body: [
          "Founders and leadership use it for planning and board conversations. HR uses it to spot patterns early, such as a team whose leave or overtime is out of line. Finance uses the payroll cost and variance views.",
        ],
      },
      {
        heading: "What to decide when setting it up",
        list: {
          style: "bullet",
          items: [
            "Who sees which views, since payroll cost and attrition data are sensitive.",
            "The payroll budget you want variance measured against.",
            "Which few measures leadership reviews each month, so the numbers lead to decisions.",
          ],
        },
        note: "Analytics is only as good as the records behind it. Keep attendance, leave and exits up to date in the other modules.",
      },
    ],
  },
};

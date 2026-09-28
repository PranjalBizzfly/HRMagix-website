/**
 * HR guides.
 *
 * HOW THESE DIFFER FROM THE OTHER TWO LONG FORMATS ON THIS SITE.
 *
 *   Insights (/blog)      short, one mechanism, written when something specific
 *                         goes wrong in a payroll month.
 *   White papers          a position: an argument about how systems should be
 *                         structured, which you are invited to disagree with.
 *   Guides (here)         instructional. A task somebody has been handed, worked
 *                         through in order, ending in a checklist they can act on.
 *
 * The test applied before publishing one: could a person with the job actually
 * do the thing after reading it. That is why each guide is chaptered, why the
 * chapters run in the order the work runs, and why every guide ends with a
 * checklist rather than a conclusion.
 *
 * CONTENT RULES. Statutory provisions are stated as law. Product behaviour is
 * stated only where it is published elsewhere on this site. Nothing here
 * carries a benchmark, a timing claim or a customer outcome, because none has
 * been measured. Where a decision belongs to the employer, the guide says so
 * and sets out the options rather than recommending one.
 */

export type Chapter = {
  title: string;
  /** Paragraphs. Kept short enough to scan, long enough to be worth reading. */
  body: string[];
  /** An ordered or unordered list, where the material genuinely is a list. */
  list?: { style: "ordered" | "bullet"; items: string[] };
  /** A short aside — the thing that catches people out. */
  watch?: string;
};

export type Guide = {
  slug: string;
  /** Ordinal shown in the index. */
  number: string;
  title: string;
  /** Who this is written for, in their own terms. */
  audience: string;
  /** What the reader will be able to do afterwards. */
  outcome: string;
  /** Rough reading time, stated honestly as an estimate of length not value. */
  minutes: number;
  seo: { title: string; description: string; keywords: string[] };
  opening: string[];
  chapters: Chapter[];
  /** The takeaway list. Every guide ends with one; none ends with a summary. */
  checklist: string[];
  related: { label: string; href: string; note: string }[];
};

export const guides: Guide[] = [
  /* ================================================================= */
  {
    slug: "first-payroll-run",
    number: "01",
    title: "Running your first payroll in a new system",
    audience:
      "Whoever has been handed payroll at a company moving off spreadsheets, often a finance or operations lead rather than an HR specialist.",
    outcome:
      "Sequence the switch, know which data must be right before the first run, and understand why a parallel month is worth the effort.",
    minutes: 12,
    seo: {
      title: "Guide: Running Your First Payroll in a New System",
      description:
        "A step-by-step guide to moving payroll into a new system: what data must be ready, why year-to-date figures matter for Form 16, and how to run a parallel month.",
      keywords: [],
    },
    opening: [
      "The hard part of a first payroll run is almost never the calculation. It is establishing what is true, which salary structure a person is actually on, which identifiers are correct, and what the previous system has already reported to the government on your behalf.",
      "This guide runs in the order the work runs. If you are switching at the start of a financial year, chapters four and five get considerably shorter; everyone else should read them carefully.",
    ],
    chapters: [
      {
        title: "Decide when to switch, and accept the consequence",
        body: [
          "There are two sensible moments. The start of a financial year is by far the cleaner: no year-to-date figures have to travel, and the annual certificate at the end of the year is produced entirely by one system.",
          "Mid-year is the common case, because the decision to change is rarely taken in March. It is entirely workable, but it carries one hard requirement that people underestimate: every rupee already paid and every rupee of tax already deducted in the current financial year has to come across, because Form 16 must reconcile across the whole year regardless of how many systems produced it.",
        ],
        watch:
          "Do not switch in the same month as a salary revision cycle. You will be trying to prove two things at once, and when the numbers disagree you will not know which change caused it.",
      },
      {
        title: "Get the employee master right first",
        body: [
          "Everything downstream references the employee record, so it goes in first. This is also the point at which you discover what your spreadsheets have quietly disagreed about for two years.",
          "Two problems surface almost every time, and neither is caused by the migration. Duplicate records for the same person, usually created when somebody was rehired or moved between entities. And salary structures that were described one way in an offer letter and calculated another way in practice.",
        ],
        list: {
          style: "bullet",
          items: [
            "Full name as it appears on statutory records, not as colleagues use it",
            "Date of joining, the field gratuity eligibility and leave accrual both count from",
            "Department, location and reporting line, since approvals route by the last of these",
            "Salary structure by grade: basic, allowances, and which components sit inside the gross",
            "Statutory identifiers: UAN, ESIC number where applicable, PAN, and the bank account",
            "Entity, if you operate more than one legal entity",
          ],
        },
      },
      {
        title: "Load the registrations before the people",
        body: [
          "Statutory deductions are derived from the salary structure and the registrations you hold, not entered by hand. That means the registrations have to exist in the system before a run can compute anything correctly.",
          "For a multi-state employer this is the step that takes longest, because professional tax is a state subject: you hold a separate registration in each state where you employ people, and the schedules differ between them.",
        ],
        list: {
          style: "bullet",
          items: [
            "EPF establishment code, and whether you apply the statutory wage ceiling",
            "ESIC code for each covered establishment",
            "Professional tax registration for every state you employ in",
            "Labour welfare fund registration, where the state operates one",
            "TAN, for tax deducted at source under Section 192",
          ],
        },
      },
      {
        title: "Carry the year-to-date figures across",
        body: [
          "If you are switching mid-year, this is the chapter that determines whether your annual certificates are correct. For each employee you need, for the financial year so far: gross paid, each statutory deduction made, and tax deducted and deposited.",
          "The reason is narrow and unavoidable. Tax under Section 192 is projected across the whole financial year, so the new system needs to know what has already been deducted in order to project the rest correctly. Get this wrong and the error does not show up in the first month, it shows up in February, when the projection corrects itself violently in one deduction.",
        ],
        watch:
          "Reconcile the year-to-date figures against the Form 24Q returns already filed, not against your internal spreadsheet. The return is what the tax authority has been told; that is the number that has to match.",
      },
      {
        title: "Run one month in parallel, and compare head by head",
        body: [
          "Process the same month in both the outgoing system and the new one, and compare the results employee by employee. Do not compare totals: two offsetting errors produce a matching total, and you will have proved nothing.",
          "Differences cluster in a small number of predictable places, which is what makes this exercise finite rather than open-ended.",
        ],
        list: {
          style: "ordered",
          items: [
            "Rounding convention on provident fund, a rupee per head across four hundred heads is a visible total",
            "An allowance treated as part of the gross in one system and outside it in the other, which moves ESI eligibility near the threshold",
            "Employees whose ESI eligibility changed mid-year, where one system retested monthly and the other held the contribution period",
            "Loss-of-pay days, if attendance and leave were being reconciled manually before",
            "Arrears from any revision effective in the period being tested",
          ],
        },
      },
      {
        title: "Close the first real run deliberately",
        body: [
          "Once the parallel month agrees line by line, the first live run should be unremarkable. Two habits are worth forming on that first close, because they are much harder to introduce later.",
          "Lock the period once it is processed, and make corrections as identified adjustments in a later run rather than by editing a closed month. The closed month has already been filed against; editing it silently makes the filing and the ledger disagree. And keep the payslip as issued rather than regenerating it, so a reprint two years from now is the original document.",
        ],
      },
    ],
    checklist: [
      "Switch date chosen, and not colliding with a revision cycle",
      "Employee master loaded, with duplicates resolved and dates of joining verified",
      "Salary structures defined per grade rather than per offer letter",
      "All statutory registrations entered, including one PT registration per state",
      "Year-to-date gross, deductions and TDS carried across and reconciled to filed Form 24Q",
      "One month processed in parallel and compared head by head, not in total",
      "Differences explained rather than absorbed",
      "Period locking and payslip reissue behaviour understood before the first live close",
    ],
    related: [
      { label: "Payroll", href: "/solutions/payroll", note: "What the run does, month by month." },
      {
        label: "Compliance",
        href: "/solutions/compliance",
        note: "How each statutory head is derived and what the run produces.",
      },
      {
        label: "Salary Calculator",
        href: "/calculators/salary",
        note: "Check a structure before you load four hundred of them.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "writing-a-leave-policy",
    number: "02",
    title: "Writing a leave policy that survives contact with a year",
    audience:
      "Founders and first HR hires writing a leave policy for the first time, and anyone inheriting one that has stopped answering questions.",
    outcome:
      "Make the eight decisions a leave policy actually consists of, and know which of them create work at the year end.",
    minutes: 14,
    seo: {
      title: "Guide: Writing a Leave Policy for an Indian Company",
      description:
        "The decisions a leave policy is made of: accrual, leave types, approvals, carry-forward, encashment and the sandwich rule, and how each behaves in software.",
      keywords: [],
    },
    opening: [
      "A leave policy is not a document. It is a set of decisions that a document records, and most policies that cause trouble were never actually decided, they were improvised consistently enough to feel settled, and then written down afterwards in language vague enough to keep everyone comfortable.",
      "The vagueness is the problem. A leave management system applies whatever you write, identically, to everyone, on the same night. Ambiguity that a manager was quietly resolving becomes visible the moment a system enforces it.",
    ],
    chapters: [
      {
        title: "Separate the leave you grant from the leave you owe",
        body: [
          "Two categories, governed differently. Company leave, casual, earned, sick, is yours to design. Statutory leave is not: maternity benefit is provided under the Maternity Benefit Act, and leave taken while on ESI benefit follows that scheme.",
          "Keep them as distinct leave types rather than drawing statutory absence from a common pool. The employee's ordinary entitlement should continue to accrue through a statutory absence rather than being consumed by it, and the absence needs to stay identifiable in the record if it ever has to be evidenced.",
        ],
      },
      {
        title: "Decide the accrual basis before the quantum",
        body: [
          "How much leave is the question everybody starts with. How it accrues is the question that determines every balance you will ever be asked about.",
          "Monthly accrual, a fixed fraction credited each month, handles mid-year joiners without anybody doing arithmetic, because a person who joined in August simply has fewer accruals. Annual crediting is simpler to explain and immediately raises the question of what a joiner in August is entitled to, which you then have to answer with a pro-rata rule anyway.",
        ],
        watch:
          "Whichever you choose, decide explicitly whether probationers accrue. This single omission generates more leave disputes than any other, because it only surfaces when a probationer asks for leave.",
      },
      {
        title: "Write the approval routing, not just the approver",
        body: [
          "'The reporting manager approves' is a rule that works until the reporting manager is on leave, has changed, or has left. Routing should read the current reporting line on the employee record rather than a list maintained separately, so a request never arrives with somebody who no longer works there.",
          "Two refinements are worth deciding at the same time. Whether a delegate can be named for a period, and whether a second approver is required above a threshold of days. Requiring two approvers for every half-day is how approval chains fall into disuse.",
        ],
      },
      {
        title: "The sandwich rule is a choice, and you should make it deliberately",
        body: [
          "If somebody takes Friday and Monday off, is the weekend leave? There is no statutory answer; it is entirely your decision. What is not optional is deciding it, because the alternative is that the answer varies by manager until the first person notices.",
          "Both positions are defensible. Counting the intervening days protects against a pattern of long weekends taken cheaply; not counting them is simpler to administer and easier to explain to a new joiner. What you should not do is apply it to some leave types and not others without saying which.",
        ],
      },
      {
        title: "Decide what happens on 31 March, in advance",
        body: [
          "At the close of the leave year every balance becomes one of three things, and the split is decided by rules you set. This is the part of a leave policy with a direct payroll consequence, because encashment is a payment.",
        ],
        list: {
          style: "ordered",
          items: [
            "A carry-forward cap: how many days may travel into the next year",
            "Whether carried days may later be encashed, and up to what limit",
            "The wage base encashment is computed on, basic, or gross",
            "The cut-off date itself, which need not be the financial year end",
            "What happens to the remainder: lapse, and whether anybody is warned first",
          ],
        },
        watch:
          "A policy that permits unlimited carry-forward is not generous; it is a growing liability on the balance sheet that nobody has priced.",
      },
      {
        title: "Handle comp-off as an entitlement with an expiry",
        body: [
          "Compensatory off is earned by working a day that was not a working day. Because it is earned rather than granted, it comes out of the attendance record, and because it is usually promised informally, it is the entitlement most often forgotten.",
          "Give it an expiry, and make the expiry a date rather than a vague intention. An entitlement with no expiry accumulates invisibly and surfaces at an exit, when the employee is entitled to be paid for it and nobody has been tracking it.",
        ],
      },
      {
        title: "Set the holiday calendar per location, not per company",
        body: [
          "Regional holidays differ across India, so one company-wide list is wrong for every office that is not the head office. Define the calendar per location and attach it to the employee record, so an employee sees the list that applies to where they actually work.",
          "Where you offer optional or floating holidays, hold them as an entitlement of so many days from a published list rather than as fixed dates. That is what lets an employee take the festival that matters to them rather than the one you guessed.",
        ],
      },
      {
        title: "Write down what happens with no balance",
        body: [
          "Leave taken without an approved application, or against an exhausted balance, becomes a loss-of-pay day. That reduces paid days for the month, which reduces the salary, the provident fund wage, and in some cases the ESI contribution.",
          "State this plainly in the policy. It is not a penalty and should not read as one, it is simply the withholding of pay for a day not worked and not covered by leave, but an employee who first encounters the rule on a payslip will experience it as a surprise deduction.",
        ],
      },
    ],
    checklist: [
      "Statutory leave held as separate types, not drawn from the company pool",
      "Accrual basis chosen, and the probationer question answered explicitly",
      "Approval routing reads the current reporting line, with a delegate rule",
      "A stated position on the sandwich rule, applied consistently across leave types",
      "Carry-forward cap, encashment limit, wage base and cut-off date all set",
      "Comp-off given an expiry date rather than an intention",
      "Holiday calendars defined per location, with floating days as an entitlement",
      "Loss-of-pay consequence written in plain language before anyone meets it on a payslip",
    ],
    related: [
      {
        label: "Leave Management",
        href: "/solutions/leave-management",
        note: "How the rules above are applied and enforced.",
      },
      {
        label: "The sandwich rule",
        href: "/insights/sandwich-rule",
        note: "The specific mechanism, in short form.",
      },
      {
        label: "Workplace Policy Library",
        href: "/policy-centre/workplace-policy-library",
        note: "The approved leave policy document itself.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "attendance-for-shift-workforces",
    number: "03",
    title: "Setting up attendance for a workforce that is not at a desk",
    audience:
      "Plant, retail, field-service and multi-site operations where most people never open a laptop.",
    outcome:
      "Choose capture methods per location, define shift rules that survive rotation and midnight, and keep a record that answers an inspector's question.",
    minutes: 13,
    seo: {
      title: "Guide: Attendance for Shift and Field Workforces",
      description:
        "Configuring attendance for shop-floor, field and multi-site teams: capture methods, rotating shifts, midnight crossings, overtime and inspection records.",
      keywords: [],
    },
    opening: [
      "Attendance software written for an office assumes a desk, a device and a network. A large part of the Indian workforce has none of the three, and configuring a system as though they do is the reason attendance projects fail on the shop floor while working perfectly in head office.",
      "This guide works outward from the capture point, because everything else, overtime, payroll, the wage register, is downstream of whether the record was captured honestly in the first place.",
    ],
    chapters: [
      {
        title: "Choose the capture method per location, not per company",
        body: [
          "The right method is a property of where the work happens and who is doing it. Standardising on one method across a mixed workforce forces most of it into a mechanism that does not fit.",
          "All three of the following write to the same attendance ledger, so mixing them does not mean maintaining separate records, which is the objection people usually raise before deciding to standardise on the wrong one.",
        ],
        list: {
          style: "bullet",
          items: [
            "A biometric reader where a controlled entry point already exists, the natural choice at a factory or office gate",
            "A shared kiosk for a shift changeover, which handles a hundred people faster than a hundred phones",
            "A geo-fenced mobile punch for field engineers, sales and site supervisors, which establishes that somebody was at the client site rather than merely logged in",
          ],
        },
      },
      {
        title: "Define shifts as rules, not as a roster you retype",
        body: [
          "In a continuous operation an individual's expected hours change from week to week, and the roster is the only thing that knows. Holding the rotation as a pattern that generates the roster means a rota change is a change to one rule rather than a spreadsheet retyped every Sunday.",
          "It also means the weekly off moves with the rotation. That matters more than it sounds: a day worked on a rotated weekly off is not compensated at the same rate as an ordinary weekday.",
        ],
      },
      {
        title: "Get the midnight crossing right before anything else",
        body: [
          "A night shift that begins at 22:00 and ends at 06:00 must be treated as one unit attributed to the day it began. A system that splits it at the date boundary produces two short days and an overtime figure that is simply wrong.",
          "This is the single most common cause of an attendance report disagreeing with a payroll run. If you test one thing during an evaluation, test one week of a real night rotation.",
        ],
        watch:
          "Check what happens to a shift that begins before midnight on the last day of the month. The attribution decides which month's payroll pays it.",
      },
      {
        title: "Separate hours worked from hours payable",
        body: [
          "Totalling the hours between a punch-in and a punch-out is arithmetic. Deciding which of those hours attract a premium is policy, and it is the part that has to be written down.",
          "Time beyond the shift is not automatically overtime. It becomes overtime when it was authorised, or when it crosses a threshold you define, and the rate depends on the day type. Where you compensate with time off instead, the same hours become a comp-off entitlement with an expiry rather than a line on a payslip.",
        ],
        list: {
          style: "bullet",
          items: [
            "The threshold beyond which extra time counts at all",
            "Whether prior authorisation is required, and from whom",
            "Different rates for an ordinary working day, a weekly off and a public holiday",
            "Whether the employee or the employer chooses between payment and comp-off",
          ],
        },
      },
      {
        title: "Set the exception rules, because that is what you are judged on",
        body: [
          "Every attendance system handles the person who arrives on time. What distinguishes them is the treatment of the exceptions, and those need thresholds rather than judgement, the same lateness should produce the same outcome in every department.",
          "Decide the grace window, the point at which a late arrival becomes a half day, the treatment of a missed punch, and the consequence of repetition. Each of these is an employer decision, and each will be applied by the system exactly as written.",
        ],
      },
      {
        title: "Never let a correction overwrite the original",
        body: [
          "A regularisation should sit alongside the original capture with its reason and its approver attached, not replace it. A ledger that can be edited to say whatever the current answer needs is not evidence of anything.",
          "This is not an abstract principle. An inspection under the applicable establishment legislation tests a specific person on a specific date: why was this worker marked absent, what overtime was paid for this shift, who approved this correction. Answering that requires the original, the correction, the reason and the approver, all four, still retrievable.",
        ],
      },
      {
        title: "Close the loop into payroll",
        body: [
          "Attendance exists, in the end, to decide paid days. Approved leave, loss-of-pay days and authorised overtime are the three outputs the payroll run reads, and each should arrive as a record rather than as a monthly file somebody prepares under time pressure.",
          "Fix the cut-off deliberately. An application approved after the run has closed should be visible as an arrear against a specific date rather than absorbed quietly into next month.",
        ],
      },
    ],
    checklist: [
      "Capture method chosen per location and role, all writing to one ledger",
      "Shift patterns held as rules that generate the roster, with weekly offs rotating",
      "Midnight-crossing behaviour tested against one week of a real night rotation",
      "Overtime threshold, authorisation and day-type rates all written down",
      "Grace window, half-day cut-off and missed-punch handling defined as thresholds",
      "Regularisation preserves the original capture, reason and approver",
      "Month-end cut-off agreed, with late approvals handled as dated arrears",
    ],
    related: [
      {
        label: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        note: "The module these rules are configured in.",
      },
      {
        label: "Shifts across midnight",
        href: "/insights/shift-detection-across-midnight",
        note: "The midnight problem in detail.",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        note: "The same subject from a plant's point of view.",
      },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

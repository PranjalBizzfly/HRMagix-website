/**
 * Insights — the HRMagix blog.
 *
 * SOURCING RULES FOR EVERY ARTICLE IN THIS FILE.
 *
 * An article may draw on exactly three things:
 *
 *   1. Provisions of Indian law — the EPF wage ceiling, the ESI threshold and
 *      its contribution periods, state Professional Tax, the Payment of
 *      Gratuity Act formula, Section 192. These are cited as law.
 *   2. HRMagix product capability as published — the twelve modules, the
 *      biometric integrations, the statutory outputs, the plans. Cited as
 *      product behaviour.
 *   3. The structural logic of the problem itself — why reconciliation is slow,
 *      why an unwritten rule becomes a precedent. Cited as argument.
 *
 * It may NOT contain: survey data, benchmarks, "companies report X%", customer
 * anecdotes, industry statistics, analyst quotes, or any number that is not
 * either a provision of law or a published HRMagix figure. There is no research
 * behind this blog and it does not pretend there is.
 *
 * Articles are written for one named reader doing one specific job, which is
 * what keeps eight pieces on adjacent subjects from converging into one.
 */

export type Block =
  | { kind: "para"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: { label: string; text: string }[] }
  | { kind: "quote"; text: string }
  | { kind: "table"; caption: string; head: string[]; rows: string[][] }
  | { kind: "note"; title: string; text: string };

export type Article = {
  /**
   * The closing invitation, written for this article's subject. Deliberately
   * per-post: nine identical sign-offs would be nine copies of an advert.
   */
  closing: { title: string; body: string };
  slug: string;
  title: string;
  /** Shown in listings; never repeated as the opening line of the body. */
  standfirst: string;
  category: Category;
  /** Who this is written for, stated plainly. */
  reader: string;
  minutes: number;
  /** ISO date. Ordering only — not presented as a news date. */
  date: string;
  image: string;
  seo: { title: string; description: string; keywords: string[] };
  body: Block[];
  related: string[];
};

export type Category =
  | "Payroll & statutory"
  | "Attendance & time"
  | "Leave & policy"
  | "People operations";

export const categories: { name: Category; blurb: string }[] = [
  {
    name: "Payroll & statutory",
    blurb:
      "EPF, ESI, Professional Tax, TDS and the monthly filing chain — what the law requires and where the work actually goes.",
  },
  {
    name: "Attendance & time",
    blurb:
      "Shifts, overtime, comp-off and the exceptions that decide whether a payroll input is trustworthy.",
  },
  {
    name: "Leave & policy",
    blurb:
      "Accruals, the sandwich rule, and writing rules down before they become precedents.",
  },
  {
    name: "People operations",
    blurb:
      "The employee record, the lifecycle, and the administrative work nobody counts until it fails.",
  },
];

export const articles: Article[] = [
  /* ================================================================ */
  {
    slug: "why-payroll-takes-four-days",
    closing: {
      title: "Find out which four days you would get back",
      body:
        "The four days go somewhere specific in every company, and it is rarely the same place twice. Walk through your own month with us and we will tell you where yours are going.",
    },
    title: "Your payroll does not take four days. Your reconciliation does.",
    standfirst:
      "Multiplying a per-day rate by a number of days takes seconds. Establishing that number is what consumes the week — and it is a different problem with a different fix.",
    category: "Payroll & statutory",
    reader: "Payroll and finance leads running a monthly cutoff",
    minutes: 9,
    date: "2026-02-11",
    image: "blog-whiteboard-plan",
    seo: {
      title: "Why Payroll Takes Four Days — And What Actually Fixes It",
      description:
        "Indian payroll is slow because establishing payable days is slow, not because the arithmetic is hard. A breakdown of the four disagreeing sources and how integration removes the reconciliation step.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "Ask a payroll lead what takes the time and you will rarely hear about calculation. You will hear about a biometric export that does not match a leave tracker, a comp-off credited for a Sunday worked two months ago, a work-from-home day confirmed over WhatsApp, and a regularisation approved after the register was already prepared.",
      },
      {
        kind: "para",
        text: "This is worth stating precisely, because it changes what you should buy. The bottleneck in an Indian payroll is not computation. It is the establishment of a single agreed figure for payable days, per employee, before any computation can begin.",
      },
      { kind: "h2", text: "The four sources, and why they disagree" },
      {
        kind: "para",
        text: "Most companies of any size have four independent records of the same month. Each is defensible on its own terms. Together they cannot be reconciled without a person.",
      },
      {
        kind: "table",
        caption: "The four records of a single working month",
        head: ["Record", "What it knows", "What it cannot know"],
        rows: [
          [
            "Biometric device log",
            "Exact in/out timestamps at a physical door",
            "Whether an absence was approved leave, a client visit or an unrecorded exit",
          ],
          [
            "Leave tracker",
            "Applications and approvals",
            "Whether a backdated approval landed after the register was drawn",
          ],
          [
            "Manager's recollection",
            "Context nothing else has — the site visit, the half day",
            "Anything consistently, across a whole team, a month later",
          ],
          [
            "Payroll sheet",
            "The figure someone finally typed",
            "Which of the three above it came from, once it is typed",
          ],
        ],
      },
      {
        kind: "para",
        text: "The last row is the important one. The moment payable days becomes a typed number in a payroll sheet, its provenance is gone. Six months later, when the figure is questioned, nobody can reconstruct which record it came from — only re-derive it, from records that have since moved on.",
      },
      { kind: "h2", text: "Why an overnight sync does not solve it" },
      {
        kind: "para",
        text: "Plenty of tools connect these systems and report the result as integration. The test that matters is narrower than connection: does a correction propagate before the cutoff?",
      },
      {
        kind: "quote",
        text: "If a leave application is approved and backdated on the 28th, does the loss-of-pay register change before the run — or does somebody have to remember to reconcile it?",
      },
      {
        kind: "para",
        text: "Under a sync model, the answer depends on when the job last ran and whether anyone noticed. Under a shared-ledger model the question does not arise, because the loss-of-pay register is not a copy of the attendance data. It is a view of it. There is nothing to reconcile because there was never a second number.",
      },
      { kind: "h2", text: "What the month looks like without the reconciliation step" },
      {
        kind: "steps",
        items: [
          {
            label: "Attendance settles continuously",
            text: "Biometric punches, mobile check-ins and approved regularisations land in one ledger as they happen, not in a month-end export.",
          },
          {
            label: "Leave resolves against the same ledger",
            text: "Approved leave, sandwich-rule outcomes, comp-off credits and unpaid days apply against each employee's scheme.",
          },
          {
            label: "Payable days falls out",
            text: "It is derived, not entered. A backdated approval on the 28th changes it before the cutoff because it changes the ledger both views read.",
          },
          {
            label: "Review moves to exceptions",
            text: "A variance view against last month means the check is on what changed and why, not on all nine hundred rows.",
          },
        ],
      },
      {
        kind: "para",
        text: "The first three steps require nothing from the payroll team at all. That is where the four days go.",
      },
      { kind: "h2", text: "The part that stays hard" },
      {
        kind: "para",
        text: "Integration removes reconciliation. It does not remove judgement, and it should not be sold as though it does. Someone still has to decide whether an unexplained three-day absence is leave without pay or the start of an absconding case. Someone still has to check that a new joiner's ESI applicability was set correctly before their first run.",
      },
      {
        kind: "para",
        text: "What changes is the ratio. When establishing the facts stops consuming the week, the judgement calls get the attention they actually need — which is the argument for doing this, rather than any figure about hours saved.",
      },
      {
        kind: "note",
        title: "What this article does not claim",
        text: "No benchmark, average or percentage improvement appears above, because HRMagix publishes none and we are not going to estimate one. The four-day figure in the title is the observation payroll teams make about their own process, not a measured industry statistic.",
      },
    ],
    related: ["esi-threshold-moving-wage-base", "reading-an-indian-payslip", "full-and-final-settlement"],
  },

  /* ================================================================ */
  {
    slug: "esi-threshold-moving-wage-base",
    closing: {
      title: "Check your own contribution periods",
      body:
        "If you have employees near the ESI wage threshold, the question is whether your current process fixes eligibility for the contribution period or re-tests it monthly. That is worth checking against real payslips rather than in principle.",
    },
    title: "The ESI threshold is not a monthly test, and treating it as one costs money",
    standfirst:
      "Overtime moves the wage base. The wage base moves ESI applicability. But an employee does not simply drop out of ESI the month they cross ₹21,000 — and a system that assumes they do will be wrong in both directions.",
    category: "Payroll & statutory",
    reader: "Payroll teams in manufacturing, logistics and any shift-based operation",
    minutes: 8,
    date: "2026-02-04",
    image: "blog-wage-threshold",
    seo: {
      title: "ESI Applicability When Overtime Moves the Wage Base",
      description:
        "How the ₹21,000 ESI gross wage threshold interacts with overtime and allowances, why contribution periods matter, and why a naive month-by-month test produces both over- and under-deduction.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "In an office payroll, ESI applicability is usually stable. Salaries are fixed, the wage base barely moves, and an employee is either in or out for the year. On a production floor none of that holds.",
      },
      {
        kind: "para",
        text: "Overtime, night-shift differentials and attendance-linked allowances all move the gross. In a heavy month an operator's wages rise; in a lean month they fall. If the payroll system tests the ₹21,000 threshold afresh every month and switches the employee in and out accordingly, it will be wrong — and it will be wrong in a way that is expensive to correct later.",
      },
      { kind: "h2", text: "The two rates, and what they apply to" },
      {
        kind: "table",
        caption: "Employees' State Insurance contribution",
        head: ["Side", "Rate", "Applied to"],
        rows: [
          ["Employee", "0.75%", "Gross wages for the wage period"],
          ["Employer", "3.25%", "Gross wages for the wage period"],
        ],
      },
      {
        kind: "para",
        text: "Applicability is tested against a gross wage threshold of ₹21,000. That much is widely known. What is less consistently handled is what happens when an employee crosses it partway through.",
      },
      { kind: "h2", text: "Contribution periods are the whole point" },
      {
        kind: "para",
        text: "ESI operates on contribution periods rather than isolated months. An employee who is covered at the start of a contribution period continues to contribute through that period even if their wages rise above the threshold within it. Coverage does not blink on and off with each month's overtime.",
      },
      {
        kind: "para",
        text: "A system that re-evaluates applicability month by month, with no memory of the period, produces two distinct failures:",
      },
      {
        kind: "list",
        items: [
          "Under-deduction — the employee is dropped mid-period after a heavy overtime month, so contributions that were due are never made. This surfaces at inspection, with interest.",
          "Over-deduction — the employee is re-added the following month when overtime falls back, producing contributions where the position had already been settled.",
          "Benefit disruption — coverage that flickers is worse for the employee than either error is for the employer, because entitlement depends on it.",
        ],
      },
      { kind: "h2", text: "Why this is a configuration problem, not an arithmetic one" },
      {
        kind: "para",
        text: "Nobody gets 0.75% wrong. The failure is upstream of the multiplication: it is in deciding, for this employee, in this month, whether the deduction applies at all — and that decision depends on a period, a wage base that includes overtime, and the employee's position when the period began.",
      },
      {
        kind: "para",
        text: "In HRMagix this is held as a rule evaluated against the employee record each month, with contribution-period behaviour respected rather than a simple monthly comparison. The output is the monthly contribution return and challan report; the input is the same attendance ledger the overtime came from, which is what keeps the wage base and the applicability test consistent with each other.",
      },
      { kind: "h2", text: "What to check in your own payroll" },
      {
        kind: "steps",
        items: [
          {
            label: "Find an employee near the line",
            text: "Someone whose gross sits within a few thousand rupees of ₹21,000 in a normal month.",
          },
          {
            label: "Find a heavy overtime month",
            text: "One where their gross crossed the threshold.",
          },
          {
            label: "Look at the month after",
            text: "If the employee dropped out and came back, your system is applying a monthly test rather than a contribution period.",
          },
          {
            label: "Check the wage base itself",
            text: "Confirm that overtime and allowances are in the gross the test uses. If the test runs on basic alone, the applicability decision is being made on the wrong number.",
          },
        ],
      },
      {
        kind: "note",
        title: "Where to verify",
        text: "The rates and the threshold above are statutory and are stated as such. Applicability in a specific case — including how a particular allowance is treated in the wage base — is a question for your own advisers or the ESIC, not for a software vendor's blog.",
      },
    ],
    related: ["why-payroll-takes-four-days", "comp-off-entitlement", "professional-tax-february"],
  },

  /* ================================================================ */
  {
    slug: "professional-tax-february",
    closing: {
      title: "Run it against the states you employ in",
      body:
        "Professional tax is a different slab, a different return and a different due date in every state. Bring the list of states you operate in and we will show you how the run handles each.",
    },
    title: "One company, several compliance positions: Professional Tax across states",
    standfirst:
      "A business with offices in three states experiences itself as one organisation. Professional Tax does not. This is where multi-state payroll quietly goes wrong.",
    category: "Payroll & statutory",
    reader: "HR and finance leads in multi-branch, multi-state businesses",
    minutes: 7,
    date: "2026-01-28",
    image: "blog-state-filing",
    seo: {
      title: "Professional Tax Across Indian States — Multi-State Payroll",
      description:
        "Why Professional Tax is a state subject, how slabs and periodicity differ between states, and how to configure multi-state payroll so consolidated reporting and correct state filing coexist.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "Head office in Pune, a branch in Bengaluru, a unit in Hyderabad. To leadership this is one company: one set of numbers, one culture, people who move between locations. Statutorily it is nothing of the sort.",
      },
      {
        kind: "para",
        text: "Professional Tax is levied by states, not by the Union. Each state sets its own slabs, its own exemptions and its own filing calendar. Registration is per location. There is no national schedule to configure once and forget.",
      },
      { kind: "h2", text: "The three things that differ, and the order they bite in" },
      {
        kind: "list",
        items: [
          "Slabs — the wage bands and the amount deducted in each are set per state, so the same salary produces a different deduction in two offices of the same company.",
          "Periodicity — some states deduct monthly, others on a different cycle, and the due dates for remittance follow the state rather than your payroll calendar.",
          "Exemptions — several states provide specific exemptions, including gender-based ones, which a single national rule set cannot express.",
        ],
      },
      {
        kind: "para",
        text: "There is also a timing quirk that catches out companies operating in Maharashtra: the amount deducted in one month of the year differs from the other eleven. A payroll configured with a flat monthly figure will be short by the difference, once a year, quietly.",
      },
      { kind: "h2", text: "Why software usually forces a bad choice here" },
      {
        kind: "para",
        text: "Systems that cannot express per-location rules push companies into one of two workarounds, and both are common enough to be worth naming.",
      },
      {
        kind: "table",
        caption: "The two usual workarounds, and what each costs",
        head: ["Workaround", "What it gives you", "What it costs"],
        rows: [
          [
            "Run a separate instance per state",
            "Correct state-level deduction and filing",
            "No consolidated headcount or payroll cost view; employee transfers become re-onboarding",
          ],
          [
            "Run one instance and adjust by hand",
            "A single consolidated view",
            "A manual adjustment every month, by one person, that nobody else can verify",
          ],
        ],
      },
      { kind: "h2", text: "The configuration that avoids the choice" },
      {
        kind: "para",
        text: "The resolution is to hold the rules against three axes rather than one — entity, location and grade — and to derive an employee's Professional Tax position from their work location on the record rather than from a company-wide default.",
      },
      {
        kind: "para",
        text: "HRMagix carries state-specific rule sets configured for Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat and West Bengal, including the February treatment and gender-specific exemptions where a state provides them. Payroll runs remain distinct per entity — as they must be, because filing is per entity — while reporting consolidates across them.",
      },
      {
        kind: "para",
        text: "A transfer between states then behaves correctly on its own. Because the work location is an effective-dated field on the employee record, moving someone from Pune to Bengaluru in August changes their Professional Tax position from August, and leaves the months before it untouched.",
      },
      { kind: "h2", text: "The same logic applies to Labour Welfare Fund" },
      {
        kind: "para",
        text: "LWF is the other state-level deduction that runs on its own calendar — half-yearly in some states, annual in others, on dates that have nothing to do with your payroll cycle. It is missed for exactly the same reason Professional Tax is: it is remembered rather than configured. Applying it inside the run is the only approach that survives a busy month.",
      },
      {
        kind: "note",
        title: "Verify before you file",
        text: "State slabs and due dates change. The states listed above are those HRMagix configures; the current schedule for any of them should be confirmed against the state's own notification, or with your advisers, before a filing.",
      },
    ],
    related: ["esi-threshold-moving-wage-base", "old-vs-new-regime", "why-payroll-takes-four-days"],
  },

  /* ================================================================ */
  {
    slug: "reading-an-indian-payslip",
    closing: {
      title: "See your own payslip generated line by line",
      body:
        "The interesting part of a payslip is which components sit inside which base. Bring one grade's salary structure and we will show you what the run produces from it, component by component.",
    },
    title: "Reading an Indian payslip, line by line",
    standfirst:
      "Most employees have never had a payslip explained to them. Most HR teams answer the same five questions about it every month. Here is the whole document, in order.",
    category: "People operations",
    reader: "HR teams who answer payslip questions, and employees who have them",
    minutes: 10,
    date: "2026-01-21",
    image: "blog-payslip-explained",
    seo: {
      title: "How to Read an Indian Payslip — Every Line Explained",
      description:
        "A complete walkthrough of an Indian salary slip: basic, HRA and allowances, employee PF and ESI deductions, Professional Tax, TDS, and the difference between gross, net and cost to company.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "A payslip is a compressed document. It records a month of attendance, a salary structure, four or five statutory rules and a bank transfer, in about twenty lines. Nobody is taught to read it, and the result is that the same handful of questions reaches HR every month.",
      },
      {
        kind: "para",
        text: "This is the whole document in the order it appears, with what each line means and what it is derived from.",
      },
      { kind: "h2", text: "The header: the part that determines everything below" },
      {
        kind: "list",
        items: [
          "Pay period and pay date — the month the slip covers, and when money moved. They are frequently different, and a query about a missing credit is usually about the second.",
          "Payable days and loss of pay — the output of the attendance and leave ledger for that month. Every earnings line below is scaled by this.",
          "UAN — the Universal Account Number that follows an employee across employers and holds their provident fund.",
          "PAN — required for TDS to be deducted at the correct rate rather than a higher default.",
        ],
      },
      {
        kind: "para",
        text: "If a payslip looks wrong, start at payable days. Nine times out of ten the earnings are correct for the days recorded, and the actual dispute is about a day of attendance rather than about pay.",
      },
      { kind: "h2", text: "Earnings" },
      {
        kind: "h3",
        text: "Basic",
      },
      {
        kind: "para",
        text: "The foundation of the structure, and the figure most statutory calculations reference. Provident fund is computed on basic (with dearness allowance where it applies), and gratuity is computed on last drawn basic. A structure with an unusually low basic reduces present deductions and reduces future gratuity at the same time — which is worth understanding rather than discovering at exit.",
      },
      { kind: "h3", text: "House Rent Allowance" },
      {
        kind: "para",
        text: "Paid as part of the structure, and separately relevant at tax time: an employee paying rent may claim exemption against it under the old regime, subject to the statutory computation and to producing rent receipts. The allowance appearing on the payslip and the exemption claimed at year end are two different things.",
      },
      { kind: "h3", text: "Other allowances and variable components" },
      {
        kind: "para",
        text: "Conveyance, special allowance, shift and night differentials, overtime and any one-off components. On a shift-based payroll this is where the month-to-month movement lives, and it is the reason gross varies even when basic does not.",
      },
      { kind: "h2", text: "Deductions" },
      {
        kind: "table",
        caption: "The statutory deductions on an Indian payslip",
        head: ["Line", "Rate", "Computed on", "Where it goes"],
        rows: [
          [
            "Provident fund (employee)",
            "12%",
            "Basic + DA, subject to the ₹15,000 statutory wage ceiling where the employer applies it",
            "The employee's EPF account under their UAN",
          ],
          [
            "ESI (employee)",
            "0.75%",
            "Gross wages, where the employee is within the ₹21,000 threshold",
            "ESIC — funds medical and cash benefits",
          ],
          [
            "Professional Tax",
            "State slab",
            "Salary, per the state of the work location",
            "The state government",
          ],
          [
            "TDS",
            "Per the employee's regime and declarations",
            "Estimated annual taxable salary, spread monthly under Section 192",
            "Income Tax Department, against the employee's PAN",
          ],
        ],
      },
      {
        kind: "para",
        text: "The employer also contributes 12% for provident fund and 3.25% for ESI. These do not reduce take-home and often do not appear in the deductions column at all, which is the source of a persistent confusion addressed below.",
      },
      { kind: "h2", text: "Gross, net and CTC are three different numbers" },
      {
        kind: "para",
        text: "This is the single most common misunderstanding, and it is entirely reasonable — the three are rarely explained together.",
      },
      {
        kind: "list",
        items: [
          "Gross — everything earned for the month before any deduction.",
          "Net (take-home) — gross minus employee deductions. This is what reaches the bank account.",
          "Cost to company — gross plus the employer's own contributions. It is higher than gross and is never the amount anyone receives.",
        ],
      },
      {
        kind: "para",
        text: "An offer quoted in CTC and a payslip showing net are two ends of the same structure, and the gap between them is mostly employer statutory contribution — money that belongs to the employee, but sits in their provident fund rather than their bank.",
      },
      { kind: "h2", text: "What an employee should be able to do without asking anybody" },
      {
        kind: "para",
        text: "Retrieve any payslip ever issued to them, see the leave balance the payslip's loss-of-pay figure came from, raise a regularisation if a day is wrong, and at year end compare their liability under both tax regimes before declaring. In HRMagix all of that sits behind the employee's own login, on web and on the mobile app.",
      },
      {
        kind: "para",
        text: "That is the actual argument for self-service. Not that it saves HR time in the abstract, but that the person best placed to spot an error on a payslip is the person it belongs to — and they can only do that if they can see it.",
      },
    ],
    related: ["old-vs-new-regime", "why-payroll-takes-four-days", "full-and-final-settlement"],
  },

  /* ================================================================ */
  {
    slug: "old-vs-new-regime",
    closing: {
      title: "Show your employees the comparison on their own numbers",
      body:
        "A regime decision made against a generic calculator is a guess. See how the declaration and the comparison appear to an employee inside the self-service portal, on their actual salary.",
    },
    title: "The declaration that decides twelve months of TDS",
    standfirst:
      "An employee's choice between the old and new tax regimes changes their monthly deduction from April. Made late or changed midway, it produces a painful correction in February.",
    category: "Payroll & statutory",
    reader: "HR and payroll teams running the annual declaration cycle",
    minutes: 8,
    date: "2026-01-14",
    image: "blog-regime-choice",
    seo: {
      title: "Old vs New Tax Regime — Employee Declarations and Monthly TDS",
      description:
        "How the employee's regime election drives the monthly TDS schedule under Section 192, why late declarations cause February corrections, and how proof verification fits the payroll cycle.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "Section 192 requires an employer to deduct tax on salary at the time of payment, spread across the financial year, based on the employee's estimated liability. That estimate depends on which regime the employee has elected and what they have declared.",
      },
      {
        kind: "para",
        text: "So the deduction schedule for twelve months is fixed by a decision usually made in a hurry in April, by an employee who has not compared the two options and is not sure what they can claim.",
      },
      { kind: "h2", text: "Why late declarations hurt in February, not April" },
      {
        kind: "para",
        text: "The mechanics are simple and unforgiving. If an employee declares nothing in April, the employer must deduct on the assumption that nothing will be claimed. If the employee then produces investment proof in December, the excess already deducted has to be adjusted across the months that remain.",
      },
      {
        kind: "quote",
        text: "Eight months of over-deduction cannot be spread across eight months. It has to be corrected in the four that are left.",
      },
      {
        kind: "para",
        text: "The reverse is worse. An employee who declares generously in April and produces no proof by January leaves the employer with under-deducted tax that must be recovered before the year closes — from one or two payslips, at a point in the year when the employee is least expecting it.",
      },
      { kind: "h2", text: "The comparison employees actually need" },
      {
        kind: "para",
        text: "The choice is not abstract. It depends on what an individual can genuinely claim, which is why a generic explainer does not settle it and a personal comparison does.",
      },
      {
        kind: "list",
        items: [
          "An employee with a home loan, meaningful Section 80C investments and rent paid may find the old regime produces the lower liability.",
          "An employee early in their career, renting informally or without significant investments, may find the new regime produces the lower liability with far less paperwork.",
          "The only way to know is to compute both against that employee's own numbers — which is a calculation, not an opinion.",
        ],
      },
      {
        kind: "para",
        text: "HRMagix puts that comparison inside the employee's own self-service portal, so it is made before the declaration rather than discovered afterwards. Employees then declare under Section 80C and 80D, HRA and home loan interest, and upload proof for HR to verify.",
      },
      { kind: "h2", text: "The verification step is the one that protects the employer" },
      {
        kind: "para",
        text: "A declaration is a statement of intent. Proof is evidence. The employer's obligation attaches to deducting correctly, which means the monthly schedule should follow the verified position rather than the declared one once verification has happened.",
      },
      {
        kind: "steps",
        items: [
          {
            label: "Declaration window opens",
            text: "The employee compares both regimes on their own figures and elects, then declares what they expect to claim.",
          },
          {
            label: "Monthly schedule follows the declaration",
            text: "TDS is deducted from April on the declared basis under Section 192.",
          },
          {
            label: "Proof is uploaded and verified",
            text: "Rent receipts, 80C and 80D investments and home loan interest certificates are submitted through the portal and checked by HR.",
          },
          {
            label: "The schedule follows the verified position",
            text: "Where proof falls short of the declaration, the remaining months absorb the correction — earlier, and over more months, than a January discovery would allow.",
          },
          {
            label: "Quarterly and annual returns follow the same data",
            text: "Form 24Q each quarter and Form 16 Part B at year end are generated from the schedule that was actually run.",
          },
        ],
      },
      { kind: "h2", text: "One administrative change worth making" },
      {
        kind: "para",
        text: "Move the proof deadline earlier than feels necessary. A December cut-off gives three months to absorb a correction; a January cut-off gives one, and produces the February payslip that generates more HR queries than any other in the year.",
      },
      {
        kind: "note",
        title: "Scope of this article",
        text: "Slab rates, thresholds and the specific deductions available under each regime change between financial years and are not reproduced here. Nothing above is tax advice; the mechanics of the declaration cycle are the subject, not the rates.",
      },
    ],
    related: ["reading-an-indian-payslip", "professional-tax-february", "why-payroll-takes-four-days"],
  },

  /* ================================================================ */
  {
    slug: "comp-off-entitlement",
    closing: {
      title: "Look at how your comp-offs would expire",
      body:
        "Compensatory off is usually promised informally and tracked nowhere, which is how it quietly lapses. Bring your policy and we will walk through how the entitlement, the approval and the expiry are recorded.",
    },
    title: "Compensatory off is an entitlement. Most companies track it like a favour.",
    standfirst:
      "A Sunday worked creates an obligation. Where that obligation lives in a spreadsheet, in a manager's memory or in nothing at all, it turns into a grievance about six weeks later.",
    category: "Attendance & time",
    reader: "Plant and operations managers, and the HR teams supporting them",
    minutes: 7,
    date: "2026-01-07",
    image: "blog-shift-handover",
    seo: {
      title: "Compensatory Off — Tracking Comp-Off as a Real Entitlement",
      description:
        "Why comp-off needs credit rules, expiry and consumption tracking like any other leave type, and how weekend and holiday work should flow automatically into a leave balance.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "Somebody works a Sunday to clear a shipment. Their manager says take a day back whenever you need it. Everyone means it. Nobody writes it down.",
      },
      {
        kind: "para",
        text: "Six weeks later the employee asks for the day, the manager has changed, and there is no record that the Sunday was worked in a form anyone can act on. The company has not saved money. It has converted a small, cheap obligation into a dispute.",
      },
      { kind: "h2", text: "Comp-off has all the properties of a leave type" },
      {
        kind: "para",
        text: "It is worth being explicit about this, because comp-off is usually the one entitlement not managed as an entitlement. It has every characteristic that would otherwise demand a proper scheme:",
      },
      {
        kind: "list",
        items: [
          "A credit event — approved work on a weekly off or a declared holiday.",
          "A balance — days earned and not yet taken.",
          "A consumption rule — whether it may be taken as a half day, whether approval is required, whether it can be combined with other leave.",
          "An expiry — a window within which it must be used, or it lapses.",
          "A settlement position — what happens to an unused balance when someone leaves.",
        ],
      },
      {
        kind: "para",
        text: "Any one of those left undefined is where the eventual argument comes from. Expiry is the most commonly missing, and the most contentious: without it, a company accumulates an unbounded, unrecorded liability; with it undocumented, an employee discovers the rule only when their day is refused.",
      },
      { kind: "h2", text: "The credit has to be automatic to be trustworthy" },
      {
        kind: "para",
        text: "The reason comp-off goes unrecorded is not indifference. It is that recording it is a separate manual act, performed after a long day, by someone whose job is the shipment rather than the register.",
      },
      {
        kind: "para",
        text: "The fix is to derive the credit from the same attendance ledger everything else uses. Where an employee has an approved presence on a weekly off or a holiday, the comp-off credit follows from the attendance record rather than from a second entry. In HRMagix that credit carries its own expiry and consumption rules, and the resulting balance is visible to the employee, the approving manager and payroll at the same time.",
      },
      { kind: "h2", text: "Comp-off, overtime and the choice between them" },
      {
        kind: "para",
        text: "Weekend work can be compensated with time or with money, and the two have different consequences. This is a policy decision, not a software one, but it needs making explicitly:",
      },
      {
        kind: "table",
        caption: "Two ways to compensate the same Sunday",
        head: ["", "Compensatory off", "Overtime payment"],
        rows: [
          ["Cost", "Time, taken later", "Cash, in the next payroll run"],
          ["Where it appears", "Leave balance", "Earnings line on the payslip"],
          ["Liability if untracked", "Grows silently and indefinitely", "Surfaces immediately as a payroll dispute"],
          ["Who usually prefers it", "Employees wanting flexibility", "Employees wanting the money"],
        ],
      },
      {
        kind: "para",
        text: "The failure mode to avoid is leaving the choice to whoever is in the room. A policy that states which applies, in which circumstances, and who may vary it, is worth more than either option chosen well ad hoc.",
      },
      { kind: "h2", text: "What to check this month" },
      {
        kind: "steps",
        items: [
          {
            label: "Pull last quarter's weekly-off attendance",
            text: "Every instance of an employee present on a weekly off or declared holiday.",
          },
          {
            label: "Match it against comp-off credits",
            text: "Anything present in the first list and absent from the second is an untracked obligation you are still carrying.",
          },
          {
            label: "Check whether an expiry rule exists in writing",
            text: "If it does not, you have an unbounded liability. If it does but was never issued, you have a dispute waiting.",
          },
        ],
      },
    ],
    related: ["shift-detection-across-midnight", "sandwich-rule", "esi-threshold-moving-wage-base"],
  },

  /* ================================================================ */
  {
    slug: "shift-detection-across-midnight",
    closing: {
      title: "Test it against your own night shift",
      body:
        "If your attendance report and your payroll run disagree, a shift crossing midnight is the first place to look. Bring one week of a real rotation and we will run it.",
    },
    title: "A punch at 22:40 belongs to yesterday's shift",
    standfirst:
      "Every attendance system works on a nine-to-five floor. The ones that work on a production floor are the ones that can infer which shift a punch belongs to without asking anybody.",
    category: "Attendance & time",
    reader: "Plant heads and HR managers running rotating shifts",
    minutes: 7,
    date: "2025-12-17",
    image: "blog-settlement-review",
    seo: {
      title: "Auto Shift Detection for Rotating and Night Shifts",
      description:
        "Why night-shift attendance breaks calendar-day assumptions, how auto shift detection assigns a punch across midnight, and what grace periods and differentials depend on getting it right.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "Office attendance is close to binary. Somebody was in, or they were not, and the day they were in is the day the clock says. A production floor breaks both assumptions in the first week.",
      },
      {
        kind: "para",
        text: "An operator on the night shift punches in at 22:40 on Tuesday and out at 06:50 on Wednesday. That is one shift, and it belongs to Tuesday. A system that files the two punches under the calendar dates they occurred on has recorded a Tuesday with no exit and a Wednesday with no entry — which is to say, two exceptions where there was no problem at all.",
      },
      { kind: "h2", text: "Why manual shift assignment does not survive contact with a plant" },
      {
        kind: "para",
        text: "The obvious fix is to have somebody tag each punch with its shift. On a floor with three rotating shifts and several hundred operators, that is thousands of tagging decisions a month, made by a supervisor with other work, at the exact moment when a mistake is least likely to be noticed.",
      },
      {
        kind: "para",
        text: "The workable approach is inference. Given the shift definitions and the punch timestamp, the system assigns the punch to the shift it must belong to — including where that shift began on the previous calendar day.",
      },
      { kind: "h2", text: "What depends on getting the assignment right" },
      {
        kind: "table",
        caption: "Downstream consequences of shift assignment",
        head: ["Consequence", "What breaks if the shift is wrong"],
        rows: [
          [
            "Late marks",
            "Lateness is measured against the shift start. Against the wrong shift start, an on-time operator is marked late.",
          ],
          [
            "Night differential",
            "The allowance attaches to the shift. Misassigned, it is either not paid or paid to the wrong person.",
          ],
          [
            "Overtime",
            "Hours beyond the shift are overtime. Without a correct shift, there is no boundary to measure beyond.",
          ],
          [
            "Loss of pay",
            "A shift filed as two half-days with missing punches becomes an unexplained absence, and an unexplained absence becomes a deduction.",
          ],
          [
            "ESI applicability",
            "Overtime moves the wage base, and the wage base moves the applicability test.",
          ],
        ],
      },
      {
        kind: "para",
        text: "The last row is why this matters more than it first appears. An attendance error on a night shift does not stay an attendance error. It propagates into an earnings line, and from there into a statutory determination.",
      },
      { kind: "h2", text: "Grace periods belong to the policy, not to the supervisor" },
      {
        kind: "para",
        text: "A grace allowance is a reasonable thing for an employer to grant. It becomes a problem only when it is applied by judgement, because it is then applied differently by each supervisor and on each shift — and the difference is noticed immediately by the people it is applied to.",
      },
      {
        kind: "para",
        text: "Configured per policy, a grace period applies to every punch identically, and late marks accumulate against the written rule rather than against anyone's recollection. That is worth more for fairness than for administration.",
      },
      { kind: "h2", text: "Different plants, different rules, one filing" },
      {
        kind: "para",
        text: "Multi-site manufacturers routinely need different shift patterns, grace periods and weekly offs at each location, for entirely legitimate operational reasons. That does not require separate systems. In HRMagix these are configured per location while the organisation continues to report and file as one, and the biometric hardware already installed — eSSL, Matrix, Realtime, ZKTeco — pushes into the same ledger over a secure API or local sync service.",
      },
      {
        kind: "para",
        text: "What changes is not the capture. It is what happens to the punches after they arrive.",
      },
    ],
    related: ["comp-off-entitlement", "esi-threshold-moving-wage-base", "why-payroll-takes-four-days"],
  },

  /* ================================================================ */
  {
    slug: "sandwich-rule",
    closing: {
      title: "Decide your sandwich rule deliberately, not by precedent",
      body:
        "Most companies discover their sandwich rule when somebody disputes it. Bring your leave policy as it stands and we will show you what the system would do with it.",
    },
    title: "The sandwich rule is not unfair. Applying it inconsistently is.",
    standfirst:
      "A policy that costs an employee two extra days is survivable. A policy that costs one employee two extra days and not another is not, and it is the second that generates the resentment.",
    category: "Leave & policy",
    reader: "HR teams writing or revising a leave policy",
    minutes: 6,
    date: "2025-12-10",
    image: "blog-leave-planning",
    seo: {
      title: "The Sandwich Rule in Indian Leave Policy",
      description:
        "How the sandwich rule works, why inconsistent application rather than the rule itself causes grievances, and what a leave policy needs to state so employees see the cost before applying.",
      keywords: ["employee leave management"],
    },
    body: [
      {
        kind: "para",
        text: "The sandwich rule counts intervening weekly offs and holidays as leave when an employee takes leave on both sides of them. Take Friday and Monday, and the Saturday and Sunday between are charged too.",
      },
      {
        kind: "para",
        text: "Employers adopt it for a straightforward reason: without it, an employee can convert two days of leave into a four-day absence, repeatedly, and a team that needs coverage cannot plan around it. That is a defensible position.",
      },
      { kind: "h2", text: "So why does it produce so much bad feeling?" },
      {
        kind: "para",
        text: "Almost never because of the rule. Nearly always because of two failures around it.",
      },
      {
        kind: "list",
        items: [
          "It is applied inconsistently — enforced for one employee, waived for another by a manager acting in good faith, and both outcomes become known.",
          "It is discovered afterwards — the employee applies for two days, sees two days deducted from the balance shown at the time, and finds four days gone on the payslip.",
        ],
      },
      {
        kind: "quote",
        text: "An employee who knows a Friday-and-Monday will cost four days can decide whether it is worth it. An employee who finds out afterwards has been charged for a decision they were not allowed to make.",
      },
      { kind: "h2", text: "What a leave policy has to state" },
      {
        kind: "para",
        text: "Whether or not you adopt the rule, four things need to be written down, because each is a question someone will eventually ask:",
      },
      {
        kind: "steps",
        items: [
          {
            label: "Whether the rule applies at all",
            text: "Some employers do not adopt it. Saying so explicitly is better than silence, which gets interpreted as either answer.",
          },
          {
            label: "Which leave types it applies to",
            text: "Earned leave and casual leave are often treated differently, and sick leave usually differently again.",
          },
          {
            label: "What counts as intervening",
            text: "Weekly offs, declared holidays, or both. A holiday falling on a weekly off needs its own line.",
          },
          {
            label: "Who may vary it, and on what grounds",
            text: "If nobody can, say so. If somebody can, name the authority — because an unwritten discretion is the inconsistency employees actually object to.",
          },
        ],
      },
      { kind: "h2", text: "Enforcement should be mechanical, not managerial" },
      {
        kind: "para",
        text: "Once the policy is written, the application of it should not be a decision anyone makes. Configured as a policy setting, the rule applies identically to every employee, and — this is the part that matters — the outcome is visible at the point of applying rather than on the payslip.",
      },
      {
        kind: "para",
        text: "In HRMagix, leave balances are computed from the accrual rule rather than stored, so the balance an employee sees when applying is the same balance the approving manager sees and the same one payroll uses. The employee sees the real cost of a Friday-and-Monday before they commit to it.",
      },
      {
        kind: "para",
        text: "That removes the grievance almost entirely, and it does so without softening the rule. The complaint was never really about the two days.",
      },
      {
        kind: "note",
        title: "One thing to check across states",
        text: "Leave entitlements sit under state Shops and Establishments legislation and, for covered factories, the Factories Act. A company operating across states may need different quotas per location under a single policy. The sandwich rule is the employer's choice; the underlying quota it applies to may not be.",
      },
    ],
    related: ["comp-off-entitlement", "professional-tax-february", "full-and-final-settlement"],
  },

  /* ================================================================ */
  {
    slug: "full-and-final-settlement",
    closing: {
      title: "See a settlement assembled rather than negotiated",
      body:
        "A final settlement reads from attendance, leave, payroll and the resignation record at once. Walk through a real exit with us and see which of those four you currently collect by email.",
    },
    title: "What a full-and-final settlement actually has to include",
    standfirst:
      "An exit generates more obligations than a joining, and unlike a joining it happens under time pressure with goodwill already thin. This is the complete list.",
    category: "People operations",
    reader: "HR and payroll teams processing exits",
    minutes: 9,
    date: "2025-12-03",
    image: "blog-payslip-explained",
    seo: {
      title: "Full and Final Settlement — The Complete Checklist",
      description:
        "Everything a full-and-final settlement must cover: notice period, leave encashment, gratuity eligibility, recoveries, statutory deductions, document issue and record retention.",
      keywords: [],
    },
    body: [
      {
        kind: "para",
        text: "Onboarding gets the attention. It is visible, it sets a tone, and it is pleasant to design. Offboarding gets improvised, and it is the one that produces claims months later.",
      },
      {
        kind: "para",
        text: "A full-and-final settlement is a single calculation that has to pull from attendance, leave, payroll, assets and statute simultaneously — at exactly the moment when the person who knows the detail is leaving.",
      },
      { kind: "h2", text: "Earnings due" },
      {
        kind: "list",
        items: [
          "Salary for days worked in the final month, computed on the same payable-days basis as any other month.",
          "Notice period treatment — served, paid in lieu, or bought out. Each has a different calculation and a different tax position.",
          "Leave encashment, where the policy provides for it, on the balance as at the last working day rather than at the resignation date.",
          "Any variable pay, incentive or arrear that has crystallised but not been paid.",
        ],
      },
      { kind: "h2", text: "Gratuity, where eligible" },
      {
        kind: "para",
        text: "Under the Payment of Gratuity Act, gratuity becomes payable on completing five years of continuous service, computed at fifteen days of last drawn wages for each completed year on a twenty-six day divisor.",
      },
      {
        kind: "para",
        text: "Two practical points are worth stating. First, continuous service has to be computed correctly where there have been breaks or periods of statutory leave — this is where most gratuity disputes originate. Second, the liability should have been provisioned long before the exit, so that a five-year employee leaving is a settlement rather than a surprise on the books.",
      },
      { kind: "h2", text: "Recoveries" },
      {
        kind: "list",
        items: [
          "Notice shortfall, where notice was not served in full and buyout terms apply.",
          "Advances, loans or salary paid in excess.",
          "Unreturned assets — laptop, access card, tools, phone — recovered per the value stated in the asset policy rather than negotiated at exit.",
          "Any training or relocation bond amount, where one exists and is enforceable.",
        ],
      },
      {
        kind: "para",
        text: "Every recovery needs a documented basis that existed before the exit. A recovery invented at settlement time is the fastest route to a dispute, and it is also the least defensible.",
      },
      { kind: "h2", text: "Statutory treatment of the final payment" },
      {
        kind: "para",
        text: "The settlement is a salary payment and carries the statutory consequences of one: provident fund on the applicable wages, ESI where the employee remains within the threshold, Professional Tax per the state, and TDS under Section 192 against the year's position to date. The tax treatment of gratuity, leave encashment and notice buyout each has its own rules and should be confirmed rather than assumed.",
      },
      { kind: "h2", text: "Documents the employee needs, and will ask for later" },
      {
        kind: "list",
        items: [
          "Relieving letter and experience certificate.",
          "Form 16 for the year, covering the period of employment.",
          "The full-and-final settlement statement itself, showing the working rather than only the net figure.",
          "Provident fund details sufficient for the employee to transfer or withdraw against their UAN.",
        ],
      },
      { kind: "h2", text: "The clause everyone forgets: retention" },
      {
        kind: "para",
        text: "The employee's login closes. Their record must not. A former employee will ask for a duplicate Form 16, a bank will ask for employment verification, and a statutory query may arrive about a period years earlier.",
      },
      {
        kind: "para",
        text: "In HRMagix the record is retained rather than deleted with the login, the settlement is computed from the same attendance and leave ledger used throughout the employment, and the clearance and asset recovery run as a checklist against that record. That is what makes it possible to answer a question about a former employee months later without reconstructing anything.",
      },
      {
        kind: "note",
        title: "Where to get advice",
        text: "The statutory positions above are stated as law. How a specific component is taxed in a specific settlement, and whether an establishment is covered by a given Act, are questions for your own advisers.",
      },
    ],
    related: ["reading-an-indian-payslip", "sandwich-rule", "why-payroll-takes-four-days"],
  },
];

export const bySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const byCategory = (c: Category) => articles.filter((a) => a.category === c);

/** Newest first. Dates order the list; they are not presented as news. */
export const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export const featured = sorted[0];

import type { IconName } from "@/components/icons";

/**
 * The eight solution pages.
 *
 * Everything here is either (a) an HRMagix module capability already published
 * on hrmagix.com and recorded in `lib/content.ts`, or (b) a provision of Indian
 * statute — the EPF wage ceiling, the ESI threshold, the Payment of Gratuity
 * Act formula — which is public law rather than a product claim. Nothing is a
 * benchmark, a customer count, a certification or an award. Where HRMagix has
 * not published a number, the copy says what the platform does instead of
 * inventing one.
 *
 * The shape is deliberately loose. Each page composes the blocks it needs and
 * ignores the rest, so no two solution pages read or look alike.
 */

export type Passage = { heading: string; body: string[] };
export type Mechanic = { step: string; title: string; body: string };
export type LedgerRow = { term: string; detail: string; note?: string };
export type Question = { q: string; a: string };
export type UseCase = { role: string; situation: string; resolution: string };

export type Solution = {
  slug: string;
  /** Route under /solutions. */
  href: string;
  /** Short label for menus and breadcrumbs. */
  name: string;
  /** The one-line promise, used as the page eyebrow. */
  kicker: string;
  /** H1. Written as a sentence, not a feature name. */
  title: string;
  /** The standfirst under the H1 — two sentences, no more. */
  standfirst: string;
  /** Image slot from lib/media.ts. Each solution has its own. */
  image: string;
  icon: IconName;
  /** SEO. Each page owns its own keyword cluster; none of them overlap. */
  seo: { title: string; description: string; keywords: string[] };
  /** The opening argument: why this problem is hard before software. */
  opening: string[];
  /** Long-form sections. Length and count vary by subject on purpose. */
  passages: Passage[];
  /** The ordered mechanism, where the subject has one. */
  mechanics?: { title: string; intro: string; steps: Mechanic[] };
  /** Reference rows — statutory facts, policy levers, record fields. */
  ledger?: { title: string; intro: string; rows: LedgerRow[] };
  /** Everything this module does, in plain language. Not a card grid. */
  capabilities: { group: string; items: string[] }[];
  /**
   * The two section framings that would otherwise be identical on all eight
   * pages. Written per module so no sentence on a solution page is shared with
   * another one.
   */
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  questionsIntro: string;
  /**
   * Who reaches for this module and what they are trying to settle. Present
   * only where the module has genuinely distinct audiences — forcing it onto
   * every page would produce eight versions of the same four roles.
   */
  useCases?: { title: string; intro: string; items: UseCase[] };
  /** Page-specific questions. No question appears on two pages. */
  questions: Question[];
  /** Where a reader should go next, and why. */
  onward: { label: string; href: string; note: string }[];
};

export const solutions: Solution[] = [
  /* ================================================================= */
  {
    slug: "hrms",
    href: "/solutions/hrms",
    name: "HRMS",
    kicker: "The system of record",
    title: "One employee record, and twelve workflows that read from it",
    standfirst:
      "HRMagix is an HRMS in the strict sense: a single authoritative record of every employee, from which attendance, payroll, performance and documents all draw. Nothing is re-keyed, because there is only one place the data lives.",
    image: "hrms",
    icon: "layers",
    seo: {
      title: "HRMS Software for Indian Companies",
      description:
        "HRMagix is an HRMS and payroll software built for India: one employee record feeding attendance, leave, payroll, performance and documents across twelve integrated modules.",
      keywords: [
        "HRMS software",
        "HR software",
        "HRMS and payroll software",
        "HR management system",
        "HRMS system",
        "HR platform for companies",
        "cloud HR software",
        "HR SaaS platform",
        "HRMS tools for companies",
      ],
    },
    opening: [
      "Most companies do not buy an HRMS system because they want one. They buy one because the fourth spreadsheet has stopped agreeing with the third, and nobody can say which is right.",
      "The fragmentation is rarely dramatic. It starts with a biometric machine that exports a CSV, a leave tracker somebody built in Excel, a payroll package that lives on one finance laptop, and appraisal forms circulated as PDFs once a year. Each is defensible on its own. Together they mean that the answer to a question as simple as \"how many days was this person actually present in March\" depends on who you ask.",
      "An HRMS is the decision to stop asking. One record per employee, one place it is edited, and every downstream workflow reading from it rather than from its own private copy.",
    ],
    passages: [
      {
        heading: "What the record actually holds",
        body: [
          "An employee in HRMagix is not a row in a table with a name and a salary. It is a versioned record: personal and statutory identifiers, employment history within the company, reporting line, department and location, the compensation structure in force on any given date, the leave balances accrued against it, and the documents that evidence all of it.",
          "The versioning matters more than it sounds. When a payroll run for March is questioned in September, the platform can answer with the structure that was in force in March — not the one in force today. That single property is the difference between a system you can audit and a system you have to defend.",
        ],
      },
      {
        heading: "Why 'integrated' has to mean more than 'linked'",
        body: [
          "Plenty of tools claim integration and deliver an overnight sync. The distinction that matters operationally is whether a correction propagates. If an approved leave application is backdated on the 28th, does the loss-of-pay register for that month change before the cutoff, or does somebody have to remember to reconcile it?",
          "In HRMagix the modules are not separate products joined by an API. Attendance, leave and payroll read the same attendance ledger, so a backdated approval is not a message sent between systems — it is the same number, seen from a different page. There is nothing to reconcile because there was never a second copy.",
        ],
      },
      {
        heading: "Configuration without code",
        body: [
          "Indian companies rarely fit a default. A manufacturing business with three plants may run different shift patterns, different overtime rules and different leave quotas at each, and still file one set of returns. A services firm may have the same policy everywhere and different approval chains by grade.",
          "HRMagix handles this with a policy engine rather than customisation: leave categories, accrual rules, shift definitions, grace periods, approval hierarchies, salary components and statutory applicability are all settings, configured per entity, location or grade. There is no implementation project that has to be repeated every time a rule changes.",
        ],
      },
      {
        heading: "What moving to an HRMS actually involves",
        body: [
          "The work of adopting HRMS software is not the software. It is deciding what your data currently says, because the migration is the first time anyone has looked at all of it at once.",
          "In practice the sequence is the same everywhere. Employee master data comes across first, because everything else hangs off it — names, identifiers, dates of joining, departments, reporting lines, salary structures. Then the balances that have a history: leave accrued and taken so far this year, and where relevant the year-to-date payroll figures that Form 16 will eventually have to reconcile against.",
          "Two things reliably surface during that exercise. Duplicate records for the same person, usually created when someone was rehired or moved between entities. And salary structures that were described one way in the offer letter and calculated another way in practice. Neither is caused by the migration; the migration is simply the first process that compares them.",
        ],
      },
      {
        heading: "Running the old and the new system in the same month",
        body: [
          "The safest cutover for payroll is a parallel run: process one month in both the outgoing system and the new one, and compare the results head by head before switching over.",
          "That comparison is worth doing properly rather than in aggregate. A total that matches to the rupee can still conceal two offsetting errors, and the differences that matter are usually in the same few places — a rounding convention on PF, an allowance treated as part of the gross in one system and outside it in the other, an employee whose ESI eligibility changed mid-year.",
          "Once the two agree line by line for one month, the historical figures can be carried in with confidence, because the thing that had to be trusted was the calculation rather than the import.",
        ],
      },
      {
        heading: "Roles, permissions and the audit trail",
        body: [
          "A single record read by twelve workflows raises an obvious question: who is allowed to read which part of it. The answer in an HR platform for companies of any size has to be structural rather than conventional.",
          "Access is granted by role against the record, not by trust. A reporting manager sees their team's attendance, leave and goals. Finance roles see salary components and the payroll run. HR administrators see the whole record. An employee sees themselves. Nobody sees a part of the system because they have been there a long time.",
          "Underneath that, the record keeps its own history. Every change to a salary component, a reporting line, a leave balance or a document carries who made it and when. That is what makes a figure defensible six months later, when the question is not what the number is but how it came to be that number.",
        ],
      },
    ],
    ledger: {
      title: "The employee record, field by field",
      intro:
        "These are the fields every other module in the platform reads. They are entered once, at onboarding, and versioned from then on.",
      rows: [
        {
          term: "Identity & statutory",
          detail:
            "PAN, Aadhaar, UAN, ESIC IP number, bank account and IFSC, date of birth, gender, emergency contact.",
          note: "Drives EPF, ESI and TDS applicability",
        },
        {
          term: "Employment",
          detail:
            "Date of joining, employment type, probation and confirmation dates, grade, designation, reporting manager, department, work location and legal entity.",
          note: "Drives approval routing and gratuity eligibility",
        },
        {
          term: "Compensation structure",
          detail:
            "Basic, HRA, allowances, employer contributions and deductions, effective-dated so a mid-year revision does not rewrite history.",
          note: "Drives every payroll calculation",
        },
        {
          term: "Time policy",
          detail:
            "Shift pattern, weekly off, holiday calendar, leave scheme, grace period and overtime eligibility.",
          note: "Drives attendance and loss of pay",
        },
        {
          term: "Documents",
          detail:
            "Offer and appointment letters, joining forms, statutory declarations, policy acknowledgements, certificates and their expiry dates.",
          note: "Drives reminders and audit trails",
        },
      ],
    },
    capabilities: [
      {
        group: "Record and structure",
        items: [
          "Centralised employee master with role-based access control",
          "Multi-entity and multi-location structures under one login",
          "Department, grade and reporting-line hierarchy",
          "Effective-dated compensation and policy changes",
        ],
      },
      {
        group: "Getting your data in",
        items: [
          "Structured Excel bulk-import templates for employee master data",
          "Historical leave balances and previous salary structures",
          "Department hierarchies imported alongside people",
          "Dry-run payroll before the first live cutoff",
        ],
      },
      {
        group: "Control",
        items: [
          "Granular role-based permissions per module",
          "Multi-factor authentication",
          "Single sign-on on the Enterprise plan",
          "Approvals, documents and payroll runs all leave a trail",
        ],
      },
    ],
    useCases: {
      title: "The point at which companies stop coping",
      intro:
        "Nobody adopts an HR management system on a quiet week. There is almost always a specific event that makes the spreadsheets untenable.",
      items: [
        {
          role: "Crossing twenty employees",
          situation:
            "PF becomes mandatory at twenty employees and ESI at ten in most states, and the informal arrangements that worked for a handful of people become statutory filings with dates attached.",
          resolution:
            "Contributions are derived from the salary structure on the record rather than maintained separately, and the monthly returns are produced from the run that generated them. The compliance obligation arrives whether or not a system is ready for it.",
        },
        {
          role: "Opening a second location",
          situation:
            "A second office brings a different professional tax regime, a different holiday calendar and a manager who has never met most of the people approving their team's leave.",
          resolution:
            "Location and entity are attributes of the record, so policies vary by where somebody works without running a second installation. Approvals route by the current reporting line rather than by proximity.",
        },
        {
          role: "The first real audit",
          situation:
            "An inspection, a due diligence exercise or an investor's people-data request asks for evidence rather than assurances, across a period nobody documented at the time.",
          resolution:
            "Attendance, leave, payroll and document acknowledgement all sit in one record with their own history, so the period can be reconstructed as it stood rather than as it is remembered.",
        },
        {
          role: "The HR person who is also somebody else",
          situation:
            "In most companies under a hundred people, HR is part of a finance or operations role, and the administrative load is the part that crowds out the rest of the job.",
          resolution:
            "The recurring work — payslips, balances, letters, reminders, approvals — either automates or moves to self-service. What is left is the part that genuinely needed a person.",
        },
      ],
    },
    capabilitiesTitle: "Everything the system of record holds",
    capabilitiesIntro:
      "Grouped by what it is for rather than by which screen it appears on. If a field you rely on is missing from this list, it is worth raising before a migration rather than after one.",
    questionsIntro:
      "The questions that come up when a company is deciding whether to consolidate onto one record.",
    questions: [
      {
        q: "What is the difference between an HRMS and payroll software?",
        a: "Payroll software calculates salaries. An HRMS holds the employee record that payroll needs in order to calculate them correctly — attendance, approved leave, the compensation structure in force, statutory identifiers and the documents behind them. HRMagix is both: the record and the run, which is why a backdated leave approval changes the loss-of-pay register without anyone re-entering anything.",
      },
      {
        q: "How long does it take to move an existing company onto HRMagix?",
        a: "Most Indian organisations complete setup within two to three days. Employee master data, historical leave balances, previous salary structures and department hierarchies come in through structured Excel templates, and an onboarding specialist works through policy validation and a dry-run payroll before the first live cutoff.",
      },
      {
        q: "Can we start with only part of the platform?",
        a: "Yes. The Starter plan covers attendance, leaves, the employee directory and documents; payroll, performance, OKRs, recognition and analytics arrive with Growth. Because every module reads the same record, switching one on later is a setting rather than a migration.",
      },
      {
        q: "What data has to be ready before migration?",
        a: "Employee master data first — names, statutory identifiers, dates of joining, departments, reporting lines and salary structures — because everything else references it. Then leave balances accrued and taken in the current leave year, and year-to-date payroll figures if you are moving mid-financial-year, since Form 16 has to reconcile across the whole year.",
      },
      {
        q: "Should we run the old payroll system in parallel for a month?",
        a: "For a mid-year switch, yes. Process one month in both and compare head by head rather than in total, because two offsetting errors produce a matching total. Differences usually cluster around rounding on PF, allowances treated differently in the gross, and mid-year ESI eligibility changes.",
      },
      {
        q: "Who can see salary information?",
        a: "Only roles with payroll access, and the employee themselves. A reporting manager sees their team's attendance, leave and goals but not their salary components. Access is a property of the role rather than of seniority, and every view of a restricted field is recorded.",
      },
      {
        q: "Does an HRMS replace our accounting software?",
        a: "No. It produces the payroll outputs accounting needs — the cost by head, the statutory liabilities, the bank transfer file — and the accounting system remains where the ledger lives. The overlap is the handover, not the function.",
      },
      {
        q: "What happens if a policy changes mid-year?",
        a: "Policies carry effective dates rather than being edited in place, so a change applies from the date it takes effect and the earlier periods stay calculated under the rule that governed them. Recomputing history to match a new rule is almost always the wrong answer, and is what makes past payslips indefensible.",
      },
    ],
    onward: [
      {
        label: "Payroll",
        href: "/solutions/payroll",
        note: "What the record makes possible on the 30th of the month",
      },
      {
        label: "Employee Management",
        href: "/solutions/employee-management",
        note: "Working with the record day to day",
      },
      {
        label: "Pricing",
        href: "/pricing",
        note: "Which modules sit on which plan",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "payroll",
    href: "/solutions/payroll",
    name: "Payroll",
    kicker: "Payroll & statutory compliance",
    title: "Payroll is not a calculation. It is a chain of custody.",
    standfirst:
      "Attendance becomes loss of pay, loss of pay becomes gross, gross becomes statutory deductions, and deductions become filings. HRMagix runs the whole chain in one pass and leaves the working visible at every step.",
    image: "payroll",
    icon: "wallet",
    seo: {
      title: "Payroll Software with PF, ESI, PT and TDS Built In",
      description:
        "Online payroll software for India: automated EPF, ESI, Professional Tax and TDS on salary, payslip generation, Form 16 and bank-ready NEFT files in a single monthly run.",
      keywords: [
        "payroll software",
        "online payroll software",
        "payroll management system",
        "payroll processing software",
        "payroll automation software",
        "employee payroll system",
        "salary calculation software",
        "payslip generator",
        "payroll compliance",
        "PF calculation",
        "ESI calculation",
        "TDS on salary calculation",
        "Form 16 download",
      ],
    },
    opening: [
      "The reason payroll takes days in most Indian companies has almost nothing to do with arithmetic. Multiplying a per-day rate by a number of days is trivial. Establishing the number of days is not.",
      "That number is the sum of a biometric log, a set of leave applications in various states of approval, a comp-off credited for a Sunday worked in a previous month, a late-mark policy with a grace period, and a manager who confirmed a work-from-home day over WhatsApp. Payroll teams do not spend four days calculating. They spend four days establishing what happened, and then a few minutes calculating.",
      "HRMagix removes the establishing. Because attendance, leave and payroll read one ledger, the number of payable days for every employee is already settled when the cutoff arrives — and every statutory deduction that follows from it is derived rather than typed.",
    ],
    passages: [
      {
        heading: "Statutory deductions, derived rather than declared",
        body: [
          "Every statutory head in an Indian payslip has an eligibility test, a base, a rate and a ceiling, and each of them can move independently. An employee crossing the ESI gross threshold mid-contribution-period does not simply drop out. A Professional Tax slab in Maharashtra behaves differently in February. Gratuity provisioning begins mattering long before anyone becomes eligible to be paid it.",
          "HRMagix holds each of these as a rule against the employee record rather than as a column in a sheet. The consequence is that applicability is re-evaluated every month from the structure in force that month, not carried forward from the last one because nobody remembered to check.",
        ],
      },
      {
        heading: "The two tax regimes, and the declaration that decides them",
        body: [
          "Since employees may elect between the old and new regimes, the monthly TDS schedule under Section 192 depends on a declaration that many employees make late and some change. Getting it wrong in April produces a painful correction in February.",
          "Employees compare their liability under both regimes inside their own self-service portal before declaring, then upload proof — Section 80C and 80D investments, HRA rent receipts, home loan interest — for HR to verify. The monthly deduction schedule follows the verified declaration, quarterly Form 24Q is generated from the same data, and Part B of Form 16 at year end is a report rather than a project.",
        ],
      },
      {
        heading: "What leaves the building",
        body: [
          "A payroll run is only finished when money and paperwork have both moved. HRMagix closes both ends: a bank payment batch file formatted for NEFT, RTGS or IMPS on one side, and on the other the electronic challan receipt file for the EPFO unified member portal, the monthly ESIC contribution return, the state Professional Tax working and the payslips themselves.",
          "Payslips are issued to employees through their own login rather than emailed as attachments, which means an employee looking for March 2024 in November finds it without asking anybody.",
        ],
      },
      {
        heading: "Structuring a salary before you can process one",
        body: [
          "A payroll management system cannot calculate anything until the salary structure exists, and the structure is where most of the consequential decisions are made. Basic pay determines the PF wage. The split between basic, house rent allowance and special allowance determines how much of the package is exemptible. Whether a component is treated as part of the gross determines ESI eligibility near the threshold.",
          "Those are policy decisions with statutory consequences, not formatting choices, and they are made once per grade rather than once per employee. Holding the structure as a template on the grade — and the individual's figures as an instance of it — is what stops two people on the same band being paid under different arithmetic because their offer letters were drafted by different people in different years.",
          "It is also what makes an increment a change to one field rather than a re-derivation of everything downstream of it.",
        ],
      },
      {
        heading: "Arrears, revisions and the months that are already closed",
        body: [
          "An increment agreed in July and effective from April is the ordinary case, not the exception, and it is where payroll processing systems are most often found wanting. The revision changes four months that have already been paid, filed and reported.",
          "The correct treatment in any salary management system is to recompute those months under the new figures, pay the difference as an identified arrear in the current month, and leave the original payslips as they were issued. What must not happen is a silent restatement of history: the earlier payslips were correct under the salary in force at the time, and the statutory returns filed against them were correct too.",
          "The arrear then carries its own consequences. It is part of the PF wage for the month it is paid, it moves the year-to-date figure the TDS projection is built on, and it appears on the payslip as a separate line so the employee can see what the difference was for.",
        ],
      },
      {
        heading: "Full and final settlement, where everything has to agree at once",
        body: [
          "A final settlement is the only payroll event that reads from every other module simultaneously. Salary to the last working day comes from attendance. Leave encashment comes from the leave ledger. Notice pay or recovery comes from the resignation record. Gratuity, where five years of continuous service have been completed, comes from the date of joining and the last drawn basic.",
          "Against those sit the deductions: outstanding advances, unrecovered assets, the notice shortfall if any. The reason settlements are slow in most companies is not the arithmetic but the collection — four people confirming four figures by email, in a week when the employee has already left.",
          "When each of those figures is already a record rather than an opinion, the settlement is assembled rather than negotiated, and the employee gets a statement showing every component and where it came from.",
        ],
      },
    ],
    mechanics: {
      title: "A month, in order",
      intro:
        "The same eight steps run every month. Steps one to four require nothing from the payroll team at all.",
      steps: [
        {
          step: "01",
          title: "Attendance closes",
          body: "Biometric punches, mobile check-ins and approved regularisations settle into the attendance ledger as they happen, not at month end.",
        },
        {
          step: "02",
          title: "Leave resolves",
          body: "Approved leave, sandwich-rule outcomes, comp-off credits and unpaid days are applied against each employee's scheme.",
        },
        {
          step: "03",
          title: "Loss of pay computes",
          body: "Payable days fall out of the ledger automatically. A backdated approval on the 28th changes the figure before the cutoff.",
        },
        {
          step: "04",
          title: "Gross assembles",
          body: "Effective-dated salary structures, overtime, night-shift differentials and any one-off components build the month's gross.",
        },
        {
          step: "05",
          title: "Statutory applies",
          body: "EPF, ESI, Professional Tax by state, Labour Welfare Fund and TDS under the employee's declared regime are each evaluated against this month's structure.",
        },
        {
          step: "06",
          title: "You review",
          body: "A variance view shows what changed against last month and why, so the check is on exceptions rather than on all nine hundred rows.",
        },
        {
          step: "07",
          title: "Money moves",
          body: "A bank payment batch file is generated in NEFT, RTGS or IMPS format for upload to your corporate banking portal.",
        },
        {
          step: "08",
          title: "Filings and payslips issue",
          body: "EPFO ECR text file, ESIC contribution return, PT working and payslips to every employee's self-service login.",
        },
      ],
    },
    ledger: {
      title: "Statutory heads, and how each is treated",
      intro:
        "These are provisions of Indian law, not HRMagix settings. What HRMagix does is evaluate them monthly against the structure in force, so applicability is never assumed.",
      rows: [
        {
          term: "Employees' Provident Fund",
          detail:
            "12% employee and 12% employer contribution, with the statutory wage ceiling of ₹15,000 available as a configurable cap, plus voluntary PF where an employee elects it.",
          note: "Output: ECR file for the EPFO unified member portal",
        },
        {
          term: "Employees' State Insurance",
          detail:
            "0.75% employee and 3.25% employer contribution, applicable against the ₹21,000 gross wage threshold, with contribution-period rules respected rather than a simple monthly test.",
          note: "Output: monthly contribution return and challan report",
        },
        {
          term: "Professional Tax",
          detail:
            "State-specific slabs configured for Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat and West Bengal, including the February slab change and gender-specific exemptions where a state provides them.",
          note: "Output: state-wise PT working",
        },
        {
          term: "TDS on salary — Section 192",
          detail:
            "Old and new regime comparison in the employee portal, declarations under 80C, 80D, HRA and home loan interest, HR verification, and a monthly deduction schedule that follows the verified position.",
          note: "Output: quarterly Form 24Q, annual Form 16 Part B",
        },
        {
          term: "Payment of Gratuity Act",
          detail:
            "Provisioning and settlement on the fifteen days of last drawn basic salary formula, for employees completing five years of continuous service.",
          note: "Output: provision schedule and settlement working",
        },
        {
          term: "Labour Welfare Fund",
          detail:
            "Half-yearly and annual deductions matched to state deadlines — Maharashtra's June and December cycles among them — applied inside the payroll run rather than remembered separately.",
          note: "Output: state LWF statement",
        },
      ],
    },
    capabilities: [
      {
        group: "The run",
        items: [
          "Attendance, approved leave and overtime feed the run with no re-entry",
          "Effective-dated salary structures with mid-year revisions",
          "Arrears, one-off components, bonuses and reimbursements",
          "Multi-entity payroll under a single login",
        ],
      },
      {
        group: "Statutory output",
        items: [
          "EPFO-ready electronic challan receipt (ECR) text file",
          "ESIC monthly contribution return and challan report",
          "State-wise Professional Tax working",
          "Quarterly Form 24Q and annual Form 16 Part B",
        ],
      },
      {
        group: "Payment and evidence",
        items: [
          "NEFT, RTGS and IMPS bank payment batch files",
          "Payslips issued to every employee's self-service login",
          "Full-and-final settlement including gratuity where eligible",
          "Every run leaves a trail that can be reconstructed later",
        ],
      },
    ],
    capabilitiesTitle: "Everything the payroll run does",
    capabilitiesIntro:
      "The whole run, from the inputs it reads to the files it produces. Statutory items are named as the statute names them, so you can check each against your own obligations.",
    questionsIntro:
      "Asked most often by finance leads and payroll managers part-way through an evaluation.",
    questions: [
      {
        q: "How does HRMagix calculate PF and ESI?",
        a: "EPF is calculated at 12% employee and 12% employer contribution, with the ₹15,000 statutory wage ceiling available as a configurable cap and voluntary PF supported where an employee elects it. ESI applies at 0.75% employee and 3.25% employer against the ₹21,000 gross wage threshold, with contribution-period rules respected rather than a naive month-by-month test. Both produce filing-ready output: an ECR file for the EPFO portal and a monthly contribution return for ESIC.",
      },
      {
        q: "Can employees compare the old and new tax regimes before declaring?",
        a: "Yes. The employee self-service portal includes a tax simulation that shows liability under both regimes before an annual declaration is made. Employees upload proof for Section 80C, 80D, HRA and home loan interest, HR verifies it, and the monthly TDS schedule follows the verified position.",
      },
      {
        q: "Does HRMagix generate Form 16?",
        a: "HRMagix generates Part B of Form 16 annually from the same payroll data used for the monthly TDS schedule and quarterly Form 24Q. Part A is issued by TRACES against the employer's TAN.",
      },
      {
        q: "How are salaries actually paid?",
        a: "The run produces a bank payment batch file formatted for NEFT, RTGS or IMPS, which is uploaded to your corporate banking portal. HRMagix does not hold or move funds itself.",
      },
      {
        q: "How are arrears from a backdated increment handled?",
        a: "The affected months are recomputed under the revised salary, the difference is paid as an identified arrear line in the current month, and the original payslips stay as issued. The arrear counts toward the PF wage of the month it is paid and moves the year-to-date figure the TDS projection uses.",
      },
      {
        q: "What goes into a full and final settlement?",
        a: "Salary to the last working day, leave encashment from the leave ledger, notice pay or recovery from the resignation record, and gratuity where five years of continuous service are complete — less advances, unrecovered assets and any notice shortfall. Each component is drawn from the module that owns it rather than confirmed by email.",
      },
      {
        q: "Can we run payroll for more than one legal entity?",
        a: "Yes. Each entity has its own PF and ESI registrations, its own professional tax registrations by state, and its own run. Employees move between entities without being recreated, and statutory totals stay attached to the entity that owes them.",
      },
      {
        q: "How does the salary structure affect statutory cost?",
        a: "Substantially. Basic pay drives the PF wage; the split between basic, HRA and special allowance drives what is exemptible; and whether a component sits inside the gross drives ESI eligibility near the threshold. These are decisions made once per grade, and they are the reason two packages of the same total can cost the employer different amounts.",
      },
      {
        q: "What happens to a payroll run that has already been processed?",
        a: "It is locked. Corrections are made as identified adjustments in a later run rather than by editing a closed period, because the closed period has already been filed against. That is also what allows a payslip reprint to be the original document rather than a regenerated approximation.",
      },
    ],
    onward: [
      {
        label: "Attendance & Shifts",
        href: "/solutions/attendance",
        note: "Where the payable-days figure comes from",
      },
      {
        label: "Salary & compliance calculators",
        href: "/resources/calculator",
        note: "Work a CTC breakup or a gratuity figure yourself",
      },
      {
        label: "Employee Self-Service",
        href: "/solutions/ess",
        note: "Where payslips, declarations and Form 16 reach employees",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "employee-management",
    href: "/solutions/employee-management",
    name: "Employee Management",
    kicker: "People, records and documents",
    title: "The quiet work of keeping five hundred records straight",
    standfirst:
      "Employee management is unglamorous until it fails: a promotion that never reached payroll, a certificate that expired unnoticed, a policy nobody can prove was acknowledged. HRMagix makes each of those a scheduled event rather than a discovery.",
    image: "employee-management",
    icon: "users",
    seo: {
      title: "Employee Management System & Employee Database Software",
      description:
        "An employee management system for Indian companies: a versioned employee database, document vault with expiry alerts, org structure, and policy acknowledgement tracking.",
      keywords: [
        "employee management system",
        "employee database software",
        "employee record management system",
        "HR employee management system",
        "employee lifecycle management",
      ],
    },
    opening: [
      "Ask an HR team what takes their time and very few will say strategy. They will describe chasing: a bank detail that was never updated, a driving licence that expired three weeks ago, an appointment letter somebody needs for a visa application by Friday.",
      "None of these are difficult. They are simply invisible until the moment they are urgent. The problem employee management software actually solves is not storage — a shared drive stores things perfectly well. It is knowing, without being told, what has changed and what is about to.",
    ],
    passages: [
      {
        heading: "A record with a memory",
        body: [
          "Every change to an employee record in HRMagix is dated rather than overwritten. A grade revision in July does not erase the grade that applied in June; it succeeds it. This is what makes it possible to answer questions about the past truthfully — which structure applied when a particular payroll ran, who the approving manager was at the time a leave was sanctioned, when a policy was acknowledged.",
          "It also means promotions, transfers and confirmations do not need to be communicated to payroll separately. They are the same record, so they arrive automatically at the next cutoff.",
        ],
      },
      {
        heading: "Documents that expire on their own schedule",
        body: [
          "A personnel file is a mixture of documents that never change and documents that quietly stop being valid. Offer and appointment letters are permanent. Visas, driving licences, professional certifications and contractor agreements are not.",
          "HRMagix holds both kinds in an encrypted vault with role-based access, and treats expiry as a property of the document rather than something a person has to remember. Alerts fire ahead of the date, to the employee and to whoever is accountable — which turns an expired certificate from an incident into an errand.",
        ],
      },
      {
        heading: "Proving that a policy was read",
        body: [
          "Handbook acknowledgements, non-disclosure agreements and compliance policies all share the same weakness: circulating them is easy, and proving each person received and accepted them is not.",
          "Acknowledgement is tracked per employee per policy version in HRMagix, so a change to a policy re-opens the acknowledgement rather than silently applying to people who accepted an earlier text. The workplace policy library shipped with the platform is designed to be issued this way.",
        ],
      },
      {
        heading: "The org chart is a consequence, not a drawing",
        body: [
          "In most companies the organisation chart is a slide. Someone maintains it, it is accurate on the day it is made, and it drifts from that afternoon onward — because a reporting line changed in a conversation and the slide was not in the room.",
          "In an employee management system the reporting line is a field on the record, so the chart is drawn from it rather than maintained alongside it. Changing a manager changes the chart, and it also changes who approves that person's leave, who sees their attendance regularisation, and whose queue their appraisal lands in.",
          "That is the practical argument for keeping structure in the record instead of a document: an org chart nobody updates is merely out of date, but an approval routing nobody updates sends requests to someone who left.",
        ],
      },
      {
        heading: "Who may see what, and why that is a structure question",
        body: [
          "An employee directory is useful precisely because it is open — names, roles, departments, work contact details, the things colleagues look up a dozen times a week. An employee record is useful precisely because it is not: it holds bank details, statutory identifiers, salary, and documents that were handed over in confidence.",
          "The two live in the same HR management system and are separated by role rather than by keeping a second, quieter spreadsheet. A colleague sees the directory. A reporting manager sees their team's attendance, leave and goals. Payroll roles see salary components. HR administrators see the full record, and the record notes that they looked.",
          "Every widening of access is therefore a deliberate change to a role rather than an informal favour, which is the difference between a permission model and a habit.",
        ],
      },
      {
        heading: "Keeping the record right without chasing people",
        body: [
          "Records go stale in predictable places: a new address after a move, a changed bank account, a phone number, an emergency contact recorded on the day of joining and never revisited.",
          "Almost all of these are things the employee knows and HR does not. The self-service portal lets them correct their own details, and routes anything with a downstream consequence — a bank account change ahead of a payroll run, for instance — for confirmation before it takes effect.",
          "The result is that accuracy stops depending on an annual data-cleaning exercise. The people with the correct information are the ones entering it, and the audit trail records what changed, when, and at whose request.",
        ],
      },
    ],
    ledger: {
      title: "What gets tracked without being asked",
      intro:
        "Each of these is an alert rather than a report somebody has to remember to run.",
      rows: [
        { term: "Document expiry", detail: "Visas, driving licences, professional certificates and agreements, with lead time before the date." },
        { term: "Probation and confirmation", detail: "Confirmation dates surfaced to the reporting manager ahead of time, not after." },
        { term: "Policy acknowledgement", detail: "Per employee, per policy version — re-opened when the policy text changes." },
        { term: "Statutory identifiers", detail: "Missing PAN, UAN, ESIC IP number or bank details flagged before they block a payroll run." },
        { term: "Asset handover", detail: "Hardware and workspace assets tracked against the person they were issued to." },
      ],
    },
    capabilities: [
      {
        group: "The directory",
        items: [
          "Searchable employee directory with role-based visibility",
          "Org structure by department, grade and reporting line",
          "Multi-location and multi-entity views",
          "Effective-dated changes that reach payroll automatically",
        ],
      },
      {
        group: "The vault",
        items: [
          "Encrypted digital personnel files with granular access control",
          "Company handbook, NDA and compliance policy sign-off tracking",
          "Automated alerts for visa, licence and certificate expiry",
          "Letters and payslips filed against the person automatically",
        ],
      },
      {
        group: "Across the lifecycle",
        items: [
          "Onboarding through confirmation, transfer, promotion and exit",
          "Succession and key-role vulnerability mapping",
          "Asset issue and return checklists",
          "Every change leaves a dated trail",
        ],
      },
    ],
    useCases: {
      title: "Where the record earns its keep",
      intro:
        "Not on the day it is created — on the days something has to be proved, produced or reconstructed at short notice.",
      items: [
        {
          role: "During a statutory inspection",
          situation:
            "An inspector asks for appointment letters, wage records and proof of policy communication for a sample of employees, and gives you the rest of the day.",
          resolution:
            "Documents sit on the records they belong to rather than in a shared drive organised by whoever filed them last. The acknowledgement trail shows which version of a policy each person received and when they confirmed it.",
        },
        {
          role: "When someone resigns without warning",
          situation:
            "A key person leaves and their handover is partly in their head and partly in files nobody else can find.",
          resolution:
            "The record already holds their assets, access, documents and reporting lines, so the exit checklist is generated from what is known rather than reconstructed from memory. Clearance moves through the same approval chain as everything else.",
        },
        {
          role: "When a contract or visa is about to lapse",
          situation:
            "A fixed-term contract, a work authorisation or a mandatory certification expires, and the first anyone hears of it is the day it stops being valid.",
          resolution:
            "Documents carry expiry dates, and the reminder fires against the date rather than against someone remembering. The risk is procedural, so the control is procedural.",
        },
        {
          role: "When the company becomes two companies",
          situation:
            "A second entity is registered, and half the workforce now sits under a different PF code, a different professional tax registration and a different payroll run.",
          resolution:
            "Entity is an attribute of the record, so people move between entities without being recreated, and their history travels with them. Statutory obligations stay attached to the entity that owes them.",
        },
      ],
    },
    capabilitiesTitle: "What the record and the vault cover",
    capabilitiesIntro:
      "Two halves of the same module: the directory colleagues use daily, and the document store almost nobody opens until it matters urgently.",
    questionsIntro:
      "Mostly asked by HR teams who have been burned once by a document nobody could find.",
    questions: [
      {
        q: "Who can see an employee's documents?",
        a: "Visibility is set by role rather than by folder. An employee sees their own file, a reporting manager sees what their role permits, and HR sees what its role permits. The vault is encrypted, and access is governed by the same role-based permissions used across the platform.",
      },
      {
        q: "What happens when a policy is updated?",
        a: "Acknowledgement is tracked against a policy version. Publishing a new version re-opens acknowledgement for everyone it applies to, rather than allowing an earlier acceptance to stand in for the new text.",
      },
      {
        q: "Does a promotion have to be entered in payroll separately?",
        a: "No. Grade, designation and compensation changes are effective-dated on the employee record, and the payroll run for the relevant month reads the structure that was in force. There is no second entry to make or forget.",
      },
      {
        q: "What is the difference between the employee directory and the employee record?",
        a: "The directory is the open part — name, role, department, work contact details — that colleagues are meant to look up. The record is everything else: statutory identifiers, bank details, salary components, documents and history. They are the same system separated by role permissions, not two databases.",
      },
      {
        q: "Can employees update their own details?",
        a: "Yes, through the employee self service portal. Changes with a downstream consequence — a bank account before a payroll run, for example — are routed for confirmation rather than applied silently. Everything else takes effect immediately and is recorded in the audit trail.",
      },
      {
        q: "Does the org chart have to be maintained separately?",
        a: "No. The reporting line is a field on the employee record, so the chart is drawn from it. Changing a manager also changes approval routing, which is the part that matters more than the diagram.",
      },
      {
        q: "How are employees imported when moving from spreadsheets?",
        a: "Through a bulk import of the fields you already hold, with validation on the ones that have to be well formed — identifiers, dates of joining, salary components. Records that fail validation are reported individually rather than silently skipped, so nobody is quietly missing from the first payroll run.",
      },
      {
        q: "Can we store documents that are not employee documents — an offer letter template, say?",
        a: "Templates and company-level documents live at the organisation level, and issued copies attach to the individual record. That distinction is what makes acknowledgement tracking meaningful: the version is held once, and each person's confirmation points at it.",
      },
      {
        q: "What happens to a record when someone leaves?",
        a: "It is retained rather than deleted. Statutory records have to survive the employment that produced them — gratuity, Form 16 reissues and inspections all reach backwards — so an exited record moves out of active views but stays queryable.",
      },
    ],
    onward: [
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding", note: "How a record begins" },
      { label: "Workplace Policy Library", href: "/policy/workplace-policies", note: "The policies these acknowledgements are for" },
      { label: "HRMS", href: "/solutions/hrms", note: "The record everything else reads" },
    ],
  },

  /* ================================================================= */
  {
    slug: "attendance",
    href: "/solutions/attendance",
    name: "Attendance & Shifts",
    kicker: "Time capture",
    title: "Every hour accounted for, without anybody chasing it",
    standfirst:
      "Attendance is the input payroll cannot do without and the one most companies capture least reliably. HRMagix takes punches from the hardware you already own, from a phone in the field, and from a browser at a desk — into one ledger.",
    image: "attendance",
    icon: "fingerprint",
    seo: {
      title: "Attendance Management System with Biometric & Mobile Punch-In",
      description:
        "Attendance management system for Indian companies: biometric device sync, GPS geo-fenced mobile punch-in with selfie validation, shift rotation, overtime and automatic loss-of-pay.",
      keywords: [
        "attendance management system",
        "employee attendance software",
        "biometric attendance system software",
        "attendance tracking software",
      ],
    },
    opening: [
      "There is a specific kind of dispute that only happens in companies with good attendance hardware and no attendance system. The machine says a person entered at 09:47. The person says they were at a client site from 08:30. Both are true. Neither is in the payroll input.",
      "Capture is not the hard part — most Indian offices have had biometric readers for a decade. The hard part is that a workforce is rarely all in one place, and the exceptions are where the entire argument lives: field staff, night shifts, plant rotations, a warehouse that runs on Sundays, a developer working from Pune for a fortnight.",
    ],
    passages: [
      {
        heading: "Three ways in, one ledger",
        body: [
          "HRMagix accepts attendance from the biometric hardware already installed — eSSL, Matrix, Realtime and ZKTeco devices push over a secure API or a local sync service — from the iOS and Android app, and from the browser. What matters is that these are not three systems. They are three inputs to the same ledger, so a person who badges in at the plant on Monday and checks in from a client site on Tuesday has one continuous record.",
          "Mobile check-ins can be constrained by a GPS geofence drawn around office coordinates, client sites or branch warehouses, with optional selfie validation. For field teams, that turns a check-in from an assertion into evidence.",
        ],
      },
      {
        heading: "Shifts are a rule, not a roster you retype",
        body: [
          "A twenty-four-hour operation does not have a schedule so much as a pattern. HRMagix models it as one: rotating multi-shift schedules, auto-detection of which shift a punch belongs to based on its timestamp, grace periods for late arrival configured per policy rather than per manager, night-shift differential allowances, and compensatory off credited automatically when approved weekend or holiday work occurs.",
          "The point of each of these is the same. Every rule expressed as configuration is a rule that does not have to be applied by hand at month end, and therefore cannot be applied inconsistently.",
        ],
      },
      {
        heading: "The line into payroll",
        body: [
          "Loss of pay is where attendance stops being an HR topic and becomes a finance one. In HRMagix the LOP register is derived from the same ledger the presence board is drawn from, which means the number the payroll team sees at cutoff is the number the reporting manager has been looking at all month.",
          "It also means corrections behave properly. A regularisation approved on the 28th changes the register before the run, rather than becoming an arrear to process next month.",
        ],
      },
      {
        heading: "Overtime, and the difference between hours worked and hours payable",
        body: [
          "Every attendance management system can total the hours between a punch-in and a punch-out. The harder question is which of those hours the employer has agreed to pay at a premium, and that is a policy question rather than a measurement one.",
          "Time beyond the shift is not automatically overtime. It becomes overtime when it was authorised, or when it crosses a threshold the policy defines, and the rate depends on whether the day was a working day, a weekly off or a public holiday. Some employers compensate with a day off rather than a payment, which turns the same hours into a comp-off entitlement with an expiry date instead of a line on a payslip.",
          "Holding those rules in the system rather than in a supervisor's judgement is what makes the overtime figure reproducible. It is also what makes it defensible, because the record shows the hours, the rule applied to them and the person who authorised the exception.",
        ],
      },
      {
        heading: "What the attendance record has to prove later",
        body: [
          "Attendance data is read twice: once by payroll at the end of the month, and once, much later, by somebody asking a question about a specific day. The second reading is the one that determines how the ledger should be designed.",
          "Muster rolls and wage registers under the Shops and Establishments Acts and the wage legislation are attendance records by another name, and an inspector's question is almost always specific — this person, this date, why were they marked absent. Answering it requires the original capture, the correction if there was one, the reason given and the person who approved it.",
          "This is why a regularisation is recorded alongside the original punch rather than replacing it. An attendance ledger that can be edited to say whatever the current answer needs to be is not evidence of anything.",
        ],
      },
      {
        heading: "The workforce that never sees a laptop",
        body: [
          "Employee attendance software written for an office assumes a desk, a device and a network. A large part of the Indian workforce has none of the three: field sales, service engineers, retail floor staff, drivers, site supervisors and plant operators.",
          "For them the capture method has to come to the work rather than the other way around. A geo-fenced mobile punch establishes that somebody was at the client site or the branch, not merely that they were logged in. A shared kiosk at the factory gate handles a shift changeover of a hundred people faster than a hundred phones would. A biometric device stays the right answer where a controlled entry point already exists.",
          "The design consequence is that the capture method is a property of the location or the role, and all three write to the same employee attendance record. Mixing methods across a company should not mean maintaining separate ledgers.",
        ],
      },
    ],
    ledger: {
      title: "The exceptions, and how each is handled",
      intro:
        "Attendance systems are judged on their exceptions, not their happy path. These are the ones Indian workforces produce most often.",
      rows: [
        { term: "Late arrival", detail: "Grace period configured per policy; late marks accumulate against the rule rather than a manager's memory." },
        { term: "Night shift", detail: "Auto-shift detection assigns a punch to the correct shift across midnight; differential allowance applies automatically." },
        { term: "Weekend or holiday work", detail: "Compensatory off credited on approval, with its own expiry and consumption rules." },
        { term: "Field and client-site work", detail: "Geo-fenced mobile check-in with location tagging and optional selfie validation." },
        { term: "Missed punch", detail: "Regularisation request routed to the reporting manager; approval updates the ledger and therefore the LOP register." },
        { term: "Overtime", detail: "Calculated from the shift definition and eligibility on the employee record, and carried into the payroll run." },
      ],
    },
    capabilities: [
      {
        group: "Capture",
        items: [
          "Biometric push API sync with eSSL, Matrix, Realtime and ZKTeco devices",
          "iOS and Android app with GPS geo-fencing and selfie validation",
          "Browser check-in for desk-based teams",
          "Location tagging for distributed field forces",
        ],
      },
      {
        group: "Rules",
        items: [
          "Rotating multi-shift schedules across a 24/7 operation",
          "Auto shift detection from punch timestamps",
          "Configurable grace periods and late-mark policy",
          "Night-shift differentials and automatic comp-off credit",
        ],
      },
      {
        group: "Consequence",
        items: [
          "Live presence board showing present, on leave, absent and remote",
          "Loss-of-pay register derived automatically",
          "Overtime carried into the payroll run",
          "Regularisation approvals that update the month before cutoff",
        ],
      },
    ],
    capabilitiesTitle: "Capture, rules and consequence",
    capabilitiesIntro:
      "Read in that order. How presence gets in, what the rules do with it, and where the result ends up — because the third is what makes the first two worth configuring properly.",
    questionsIntro:
      "The questions that separate an attendance system that survives a real shop floor from one that does not.",
    questions: [
      {
        q: "Will HRMagix work with the biometric machines we already have?",
        a: "In most cases yes. HRMagix integrates with leading biometric hardware — eSSL, Matrix, Realtime and ZKTeco — over a secure API push or a local sync service. Punches flow to the cloud presence board in real time and reflect automatically in shift calculations, late marks and the monthly loss-of-pay register.",
      },
      {
        q: "How does geo-fenced mobile punch-in work?",
        a: "Employees check in through the HRMagix iOS or Android app. Organisations configure a GPS geofence radius around specific office coordinates, client sites or branch warehouses, with optional selfie validation. Remote employees can submit check-ins with automatic location tagging.",
      },
      {
        q: "Can we run different shift rules at different plants?",
        a: "Yes. Shift patterns, grace periods, overtime eligibility and weekly offs are configured per location and grade, so three plants can run three patterns and still file one set of returns.",
      },
      {
        q: "How is overtime calculated?",
        a: "By rule rather than by arithmetic alone. Hours beyond the shift qualify when they were authorised or cross the threshold the policy sets, and the rate depends on whether the day was a working day, a weekly off or a public holiday. Where the employer compensates with time off instead, the same hours become a comp-off entitlement with its own expiry.",
      },
      {
        q: "Can an attendance record be edited?",
        a: "The original capture is never overwritten. A regularisation is recorded alongside it with the reason and the approver attached, so the corrected position and the original are both visible. An editable ledger is not evidence, which matters when the question arrives months later and is about a specific person on a specific date.",
      },
      {
        q: "How are half-days and late arrivals treated?",
        a: "By the thresholds the policy defines — a grace window, a cut-off after which the day counts as a half day, and a consequence for repetition. Because the rule is configured rather than applied by judgement, the same lateness produces the same outcome across departments, which is usually the reason the policy existed in the first place.",
      },
      {
        q: "Can different teams have different capture methods?",
        a: "Yes, and most companies need this. Capture is a property of the location or role: biometric at a controlled entry point, a shared kiosk at a factory gate, geo-fenced mobile punch for field staff. All three write to the same attendance record rather than to separate ledgers.",
      },
      {
        q: "What happens on a shift that crosses midnight?",
        a: "The shift is treated as one unit attributed to the day it began, rather than as two partial days. This is the single most common source of disagreement between an attendance report and a payroll run, because splitting a night shift at midnight produces two short days and an incorrect overtime figure.",
      },
    ],
    onward: [
      { label: "Leave Management", href: "/solutions/leave-management", note: "The other half of the payable-days figure" },
      { label: "Payroll", href: "/solutions/payroll", note: "Where the loss-of-pay register lands" },
      { label: "Manufacturing", href: "/industries/manufacturing", note: "Shift-heavy workforces in detail" },
    ],
  },

  /* ================================================================= */
  {
    slug: "leave-management",
    href: "/solutions/leave-management",
    name: "Leave Management",
    kicker: "Leave, holidays and balances",
    title: "A leave calendar the whole company believes",
    standfirst:
      "Leave goes wrong in two directions at once — employees do not know their true balance, and managers do not know who else is away. HRMagix fixes both with one shared, accrual-accurate calendar.",
    image: "leave",
    icon: "calendar",
    seo: {
      title: "Leave Management System & Leave Tracking Software",
      description:
        "Leave management system for Indian companies: earned, sick, maternity and paternity leave, multi-level approvals, monthly accruals, sandwich-rule enforcement and carry-forward.",
      keywords: [
        "leave management system",
        "leave tracking software",
        "employee leave management",
        "leave management software India",
      ],
    },
    opening: [
      "Leave is the only part of HR that every single employee interacts with, which is why a bad leave process does disproportionate damage. It is not the policy that irritates people. It is the uncertainty: not knowing the balance, not knowing whether the request was seen, not knowing whether a Friday and a Monday will cost two days or four.",
      "The sandwich rule is the clearest example. It is a perfectly reasonable policy that becomes a source of resentment purely because it is applied inconsistently and explained after the fact.",
    ],
    passages: [
      {
        heading: "Accrual is the part that has to be right",
        body: [
          "A leave balance is not a number somebody maintains. It is the outcome of an accrual rule applied month by month against a joining date, adjusted for unpaid days, capped by a carry-forward limit and reset on a policy year.",
          "HRMagix computes it rather than storing it, which is why the balance an employee sees in their portal is the same balance the approving manager sees and the same one payroll uses. Categories are configurable — earned or privilege leave, casual, sick, maternity and paternity — each with its own accrual, encashment and carry-over behaviour.",
        ],
      },
      {
        heading: "Approval that routes itself",
        body: [
          "Multi-level approval sounds bureaucratic until you consider what it replaces: an email to a manager who is themselves on leave. Requests route to the reporting manager, escalate on a configured hierarchy where policy requires HR counter-approval, and notify by email and push at each hop.",
          "The employee sees the state of their request at all times, which removes most of the follow-up traffic that leave generates in a company of any size.",
        ],
      },
      {
        heading: "Holidays are regional, and the calendar should say so",
        body: [
          "An Indian company with offices in more than one state does not have a holiday list. It has several. A shared calendar that shows Bengaluru's holidays to a Pune team is worse than no calendar at all.",
          "Holiday calendars in HRMagix are defined per location, and the team calendar an employee sees combines their own location's holidays with their team's approved leave — so the question \"who is around next Thursday\" has a single, correct answer.",
        ],
      },
      {
        heading: "The year end, where balances become money",
        body: [
          "For eleven months a leave balance is an administrative figure. At the close of the leave year it becomes three different things: leave that carries forward, leave that lapses, and leave that is encashed — and the last of those is a payroll transaction.",
          "The rules that decide the split are the employer's, and they are usually more specific than they first appear. A carry-forward cap. A separate cap on how much of the carried balance may later be encashed. A rule on whether encashment is computed on basic or on gross. A cut-off date that is not the same as the financial year end.",
          "A leave management system earns its place by applying those rules identically to everyone on the same night, and by producing the encashment figures as a payroll input rather than as a spreadsheet somebody types up. The arithmetic is not hard; doing it consistently for four hundred people on one date is.",
        ],
      },
      {
        heading: "Loss of pay, and why it is a leave decision rather than a payroll one",
        body: [
          "Loss of pay is where leave and payroll meet, and where the handover between them usually goes wrong. An absence without an approved application, or an approved application against an exhausted balance, becomes an unpaid day — and an unpaid day changes the salary, the PF wage, and in some cases the ESI contribution for that month.",
          "The decision belongs to leave management, because that is where the balance and the approval live. The consequence belongs to payroll. When the two are separate systems, the connection is a monthly file, and the file is prepared under time pressure in the same week the run has to close.",
          "Holding both in one platform makes the LOP day an outcome of the leave ledger rather than a line somebody adds to it. That also means an application approved after the run has closed is visible as an arrear against a specific date, instead of a quiet correction next month.",
        ],
      },
      {
        heading: "Statutory leave sits alongside company leave, not inside it",
        body: [
          "Maternity leave under the Maternity Benefit Act, and leave taken while on ESI benefit, are entitlements the employer does not set and cannot reduce by policy. They are earned differently, approved differently and treated differently in payroll from casual or earned leave.",
          "Keeping them as separate leave types rather than deductions from a common pool matters for two reasons. The employee's ordinary entitlement continues to accrue rather than being consumed, and the statutory absence is identifiable in the record when it has to be evidenced later.",
          "The same logic applies to compensatory off. A comp-off is earned by working a day that was not a working day, which makes it a consequence of the attendance ledger rather than an allowance granted at someone's discretion — and it usually carries an expiry that a manual tracker forgets.",
        ],
      },
    ],
    capabilities: [
      {
        group: "Policy",
        items: [
          "Custom leave categories: earned or privilege, casual, sick, maternity, paternity",
          "Monthly and annual accrual rules per category",
          "Sandwich-rule enforcement applied consistently",
          "Carry-forward limits, encashment and policy-year resets",
        ],
      },
      {
        group: "Flow",
        items: [
          "Multi-level manager and HR approval workflows",
          "Instant email and push notification at every hop",
          "Compensatory-off credit and consumption tracking",
          "Cancellation and partial-day handling",
        ],
      },
      {
        group: "Visibility",
        items: [
          "Live balances computed rather than stored",
          "Location-specific holiday calendars",
          "Shared team calendar of who is away and when",
          "Unpaid days flowing straight into the payroll run",
        ],
      },
    ],
    ledger: {
      title: "Statutory footing",
      intro:
        "Leave quotas in India sit under state Shops and Establishments Acts and, for covered factories, the Factories Act. HRMagix is configured against those rules rather than a single national default.",
      rows: [
        { term: "Earned / privilege leave", detail: "Accrued monthly against service, with configurable carry-forward and encashment." },
        { term: "Sick and casual leave", detail: "Configured per state establishment rules and company policy, with their own accrual behaviour." },
        { term: "Maternity leave", detail: "Configured as a leave category with its own entitlement and approval path, tracked against the employee record." },
        { term: "Compensatory off", detail: "Credited on approved weekend or holiday work, with expiry and consumption rules of its own." },
        { term: "Loss of pay", detail: "Unpaid days flow directly into the month's payable-days figure — no separate register." },
      ],
    },
    useCases: {
      title: "The moments a leave policy is actually tested",
      intro:
        "Rarely on an ordinary application. Almost always at a boundary — a joiner mid-month, a festival week, a year end, an exit.",
      items: [
        {
          role: "The mid-year joiner",
          situation:
            "Somebody joins in August. How much earned leave do they have in October, and does the probation policy change the answer?",
          resolution:
            "Accrual runs pro-rata from the date of joining on the record, under the rule the policy sets for probationers. The balance is calculated rather than estimated, so nobody has to remember the joining date to answer the question.",
        },
        {
          role: "The festival week",
          situation:
            "Half a department applies for the same four days, and the approvals arrive in the manager's inbox one at a time with no view of the whole.",
          resolution:
            "The team calendar shows the overlap at the point of approval rather than afterwards. The manager is making a staffing decision with the roster in front of them, which is a different decision from approving four separate requests in sequence.",
        },
        {
          role: "The multi-state employer",
          situation:
            "A Pune office and a Chennai office observe different regional holidays, and one company-wide holiday list is wrong for both.",
          resolution:
            "Holiday calendars are defined per location and attach to the employee record, so an employee sees the list that applies to where they work. Optional or floating holidays are held as an entitlement rather than a fixed date.",
        },
        {
          role: "The exit",
          situation:
            "An employee resigns with an unused balance, some of it carried forward from last year, and the final settlement has to account for it.",
          resolution:
            "The balance at the last working day is computed from the same ledger the year-end encashment uses, under the same rules, and passes into the full and final settlement as an input rather than a negotiation.",
        },
      ],
    },
    capabilitiesTitle: "Policy, flow and visibility",
    capabilitiesIntro:
      "The parts that decide entitlement, the parts that move an application, and the parts that let people plan around each other.",
    questionsIntro:
      "Almost all of these arrive at a boundary — a joiner, a festival week, a year end, an exit.",
    questions: [
      {
        q: "Can we run different leave quotas at different locations?",
        a: "Yes. Leave schemes and holiday calendars are configured per location and grade, which is what allows a company operating across states to hold different quotas and different regional holiday lists under one policy engine.",
      },
      {
        q: "How is the sandwich rule handled?",
        a: "As a policy setting rather than a manual adjustment. Where the rule applies, intervening weekly offs and holidays are counted according to the configured policy for every employee equally, and the outcome is visible to the employee at the point of applying rather than discovered on the payslip.",
      },
      {
        q: "What happens to leave balances when we migrate from a spreadsheet?",
        a: "Historical leave balances are imported alongside employee master data through the structured Excel templates, so accrual continues from the position you are actually in rather than restarting from zero.",
      },
      {
        q: "How are carry-forward, lapse and encashment decided at the year end?",
        a: "By the rules the employer configures: a carry-forward cap, an optional separate cap on how much of that may be encashed, and the wage base encashment is computed on. The platform applies them to everyone on the same cut-off date and produces the encashment figures as a payroll input.",
      },
      {
        q: "How does leave without balance affect salary?",
        a: "It becomes a loss-of-pay day, which reduces the paid days for the month and therefore the salary, the PF wage and, where applicable, the ESI contribution. Because leave and payroll read the same ledger, the LOP day is an outcome of the leave record rather than a figure typed into the run.",
      },
      {
        q: "Is maternity leave tracked separately from ordinary leave?",
        a: "Yes. Maternity leave is a statutory entitlement under the Maternity Benefit Act rather than a draw on the company pool, so it is a distinct leave type. Ordinary entitlement continues to accrue through it, and the absence stays identifiable in the record for evidence later.",
      },
      {
        q: "How is compensatory off handled?",
        a: "As an entitlement earned from the attendance ledger — a day worked that was not a working day — rather than a discretionary grant. It carries the expiry the policy sets, and lapses on that date rather than when someone notices.",
      },
      {
        q: "Can approval go to somebody other than the reporting manager?",
        a: "Yes. Routing follows the rule rather than the hierarchy alone, so a second approver can be required above a threshold of days, and a delegate can be named for a period. What does not happen is a request sitting with someone who has left, because routing reads the current record.",
      },
      {
        q: "Can employees see how much leave their colleagues are taking?",
        a: "They see a team calendar of who is away and when, because planning depends on it. They do not see leave types or reasons, which are visible to the employee, their approver and HR.",
      },
    ],
    onward: [
      { label: "Attendance & Shifts", href: "/solutions/attendance", note: "The other input to payable days" },
      { label: "Employee Self-Service", href: "/solutions/ess", note: "Where employees apply and check balances" },
      { label: "Workplace Policy Library", href: "/policy/workplace-policies", note: "The leave policy template itself" },
    ],
  },

  /* ================================================================= */
  {
    slug: "ess",
    href: "/solutions/ess",
    name: "Employee Self-Service",
    kicker: "The employee's own login",
    title: "Most HR questions are lookups. Give people the lookup.",
    standfirst:
      "An employee self-service portal is judged by how much traffic it removes from HR. Payslips, balances, declarations, documents and approvals all live behind the employee's own login, on the web and on the phone.",
    image: "ess",
    icon: "phone",
    seo: {
      title: "Employee Self Service Portal (ESS) for HR & Payroll",
      description:
        "An ESS portal for Indian employees: payslips, leave balances and applications, attendance regularisation, tax declarations, Form 16 and personal documents on web and mobile.",
      keywords: [
        "employee self service portal",
        "ESS portal HR",
        "employee login HR system",
        "HR employee portal",
      ],
    },
    opening: [
      "Count the questions an HR team answers in a week and a pattern appears immediately. How many leaves do I have left. Can you send me my March payslip. What is my UAN. Has my regularisation been approved. Almost none of these require judgement. They require access.",
      "Self-service is not a convenience feature, then. It is the difference between an HR function that spends its week on retrieval and one that spends it on the work only it can do.",
    ],
    passages: [
      {
        heading: "What an employee can finish without asking",
        body: [
          "Applying for leave and seeing the balance the application will draw from. Checking a live leave and attendance position rather than a month-old one. Raising a regularisation for a missed punch. Downloading any payslip that has ever been issued to them, including ones from before the person currently in HR joined.",
          "At year end, the same login carries the tax declaration: comparing liability under the old and new regimes, declaring Section 80C and 80D investments, uploading HRA rent receipts and home-loan interest proof for HR verification, and retrieving Part B of Form 16 when it issues.",
        ],
      },
      {
        heading: "The manager's side of the same portal",
        body: [
          "Self-service that stops at the employee simply moves the queue. Managers approve leave and regularisations from the same interface, see their team's live presence, hold 1-on-1s with a shared agenda and running action items, and update goal progress — without a separate manager tool to learn.",
        ],
      },
      {
        heading: "On the phone, because that is where the workforce is",
        body: [
          "For a large part of an Indian workforce — field staff, plant operators, drivers, site engineers — the phone is not a secondary channel. It is the only one. The HRMagix iOS and Android app carries punch-in with GPS and selfie validation, leave application and balances, payslips and the company holiday calendar, so the portal is genuinely available to everyone rather than to the people with desks.",
        ],
      },
      {
        heading: "The arithmetic of the HR inbox",
        body: [
          "The case for an employee self service portal is usually made in terms of employee experience. The stronger case is arithmetic, and it applies to any employee payroll system with more than a hundred people on it. A company of two hundred generates a predictable volume of small requests — a payslip copy, a leave balance, a salary certificate for a loan application, an address correction, last year's Form 16.",
          "None of these is difficult. Each takes a few minutes, arrives without warning, and interrupts something else. Together they are most of what a small HR team is asked for in a week, and they are all requests for access to information the company already holds about the person asking.",
          "Answering them individually is not a service; it is a queue with a person at the front of it. The portal removes the queue rather than making it faster.",
        ],
      },
      {
        heading: "What the portal deliberately does not let an employee do",
        body: [
          "Self-service is only trustworthy if its limits are as clear as its capabilities. An employee can read their own record and everything derived from it. They cannot read anyone else's, beyond the open directory their colleagues share.",
          "They can apply, declare and request — leave, regularisation, reimbursement, an investment declaration — but applying is not approving. Anything with a financial or policy consequence routes to whoever the record says is responsible for it, and the outcome is written back with its approver and timestamp attached.",
          "They can correct their own details, and the changes that affect a payment are confirmed before they take effect. The point is not to distrust the employee; it is that a bank account changed the night before a salary run is exactly the event a control exists for.",
        ],
      },
      {
        heading: "Why it matters most at the year end",
        body: [
          "Investment declarations and proof submission are the heaviest self-service moment of the Indian payroll year, and the one most often run over email. The predictable failure is not that employees miss the deadline; it is that they submit proofs in a dozen formats to an inbox with no record of which were accepted.",
          "Handled in the portal, the declaration is a structured form the employee fills in, the proofs attach to it, and the accepted figures flow directly into the TDS calculation for the remaining months of the year. The employee can see what was accepted and what was not, which removes most of the correspondence that otherwise follows.",
          "The comparison between the old and new tax regimes belongs in the same place, for the same reason: it is a decision the employee makes with numbers only the payroll system holds.",
        ],
      },
    ],
    capabilities: [
      {
        group: "For every employee",
        items: [
          "Leave application with live, accrual-accurate balances",
          "Attendance view and regularisation requests",
          "Every payslip ever issued, downloadable on demand",
          "Personal documents, letters and policy acknowledgements",
        ],
      },
      {
        group: "At year end",
        items: [
          "Old versus new tax regime comparison before declaring",
          "Section 80C, 80D, HRA and home-loan interest declarations",
          "Proof upload for HR verification",
          "Form 16 Part B when it issues",
        ],
      },
      {
        group: "For managers",
        items: [
          "Leave and regularisation approvals in one queue",
          "Live team presence board",
          "1-on-1 agendas and action items",
          "Goal and OKR progress updates",
        ],
      },
    ],
    ledger: {
      title: "What an employee can do, and what happens next",
      intro:
        "Self-service is a set of specific permissions rather than a general one. This is the whole list, with the consequence of each.",
      rows: [
        {
          term: "Download a payslip",
          detail:
            "Immediate, for any month already processed, in the format issued at the time. Reprints are the same document rather than a regenerated approximation of it.",
        },
        {
          term: "Apply for leave",
          detail:
            "Checked against the live balance as it is submitted, then routed to the reporting manager the record names. The balance updates on approval, not on application.",
          note: "Applying is not approving",
        },
        {
          term: "Regularise attendance",
          detail:
            "Raised against a specific day with a reason attached, and routed for approval. The original record is not overwritten — the correction sits alongside it, which is what makes the ledger defensible later.",
        },
        {
          term: "Update personal details",
          detail:
            "Address, phone and emergency contact take effect immediately. Bank account and statutory identifiers are confirmed before they take effect, because a payment depends on them.",
        },
        {
          term: "Submit investment declarations",
          detail:
            "A structured declaration with proofs attached. Accepted figures feed the TDS calculation for the remaining months of the financial year.",
        },
        {
          term: "Compare tax regimes",
          detail:
            "Old against new, on the employee's own salary structure and declared investments, so the choice is made against real numbers rather than a generic calculator.",
        },
        {
          term: "Download Form 16",
          detail:
            "Available once the annual return is filed, from the same place as the payslips it summarises.",
        },
        {
          term: "Request a salary or employment certificate",
          detail:
            "Generated from the record rather than typed, so the figures match the payslips a bank will ask to see alongside it.",
        },
        {
          term: "Read and acknowledge a policy",
          detail:
            "The current version, with the acknowledgement recorded against the version read. A revision re-opens the acknowledgement rather than assuming the earlier one still covers it.",
        },
        {
          term: "See the team calendar",
          detail:
            "Who is on leave and when, for their own team, so that planning does not require asking. Reasons are not shown; dates are.",
        },
      ],
    },
    capabilitiesTitle: "What employees and managers can do for themselves",
    capabilitiesIntro:
      "Deliberately a short list. Self-service works because its scope is narrow and predictable, not because it does everything.",
    questionsIntro:
      "Usually asked by HR teams weighing how much they can hand over without losing control of the record.",
    questions: [
      {
        q: "Do employees need a separate login for the mobile app?",
        a: "No. The web portal and the iOS and Android apps are the same account. What an employee can see and do is governed by their role, not by which device they happen to be using.",
      },
      {
        q: "How far back can an employee download payslips?",
        a: "Every payslip issued through HRMagix stays available in the employee's own login. Where historical payroll has been migrated in, those periods are available too.",
      },
      {
        q: "Can field staff without a company laptop use it?",
        a: "That is the case it is built for. The mobile app carries punch-in with GPS geo-fencing and selfie validation, leave application and balances, payslips and the holiday calendar.",
      },
      {
        q: "Does self-service reduce control over the data?",
        a: "It narrows it. Employees can read only their own record, and the actions that carry a financial consequence — leave, regularisation, a bank account change — are applications rather than changes. What self-service removes is the informal route where someone asks HR to make an edit on their behalf and no record survives of who requested it.",
      },
      {
        q: "What can a manager do that an employee cannot?",
        a: "See their own team's attendance, leave calendar, regularisation requests and goals, and approve or decline what is routed to them. A manager does not gain access to salary components, statutory identifiers or documents belonging to their reports.",
      },
      {
        q: "Is there anything an employee still has to email HR about?",
        a: "Yes — anything requiring judgement rather than access. A grievance, a policy exception, a request to change a leave rule. The portal is deliberately for the requests that are lookups in disguise, which is most of them by volume and few of them by importance.",
      },
      {
        q: "What happens when an employee leaves — do they lose access to their payslips?",
        a: "Access ends with employment, which is why exited employees should download what they need during their notice period. A former employee needing a payslip or Form 16 afterwards requests it from HR, who can still produce it from the retained record.",
      },
      {
        q: "Does the portal work for employees who do not have a company email address?",
        a: "Yes. Shop-floor, field and retail staff are frequently the majority of a workforce and rarely have one. Access is tied to the employee record rather than to a corporate mailbox, and the mobile app is the primary route for exactly this group.",
      },
    ],
    onward: [
      { label: "Attendance & Shifts", href: "/solutions/attendance", note: "What the app is capturing" },
      { label: "Payroll", href: "/solutions/payroll", note: "Where payslips and Form 16 come from" },
      { label: "Leave Management", href: "/solutions/leave-management", note: "The balances employees are checking" },
    ],
  },

  /* ================================================================= */
  {
    slug: "onboarding",
    href: "/solutions/onboarding",
    name: "Onboarding & Lifecycle",
    kicker: "Hire to retire",
    title: "The first week sets the tone. The last one sets the reference.",
    standfirst:
      "Onboarding is the visible end of employee lifecycle management, but the same record carries confirmation, transfer, promotion and exit. HRMagix treats all five as stages of one process rather than five unrelated pieces of paperwork.",
    image: "onboarding",
    icon: "rocket",
    seo: {
      title: "Employee Onboarding Software & Lifecycle Management",
      description:
        "Digital onboarding and employee lifecycle management: pre-boarding document collection, appointment letters, asset provisioning, confirmation, transfer and full-and-final exit.",
      keywords: [
        "employee onboarding software",
        "HR onboarding system",
        "digital onboarding platform",
        "employee onboarding process software",
        "employee lifecycle management",
      ],
    },
    opening: [
      "A new joiner's first day is usually spent doing data entry. They fill in a joining form with information the company already has from their offer, photocopy a PAN card, sign a policy pack they will not read, and wait for a laptop that was requested that morning.",
      "None of this is anybody's fault. It happens because the offer, the documents, the IT request and the payroll setup are four separate processes owned by four different people, all triggered by the same event and none of them aware of each other.",
    ],
    passages: [
      {
        heading: "Pre-boarding: the week before day one",
        body: [
          "The most valuable thing an onboarding system does is move work earlier. A candidate who has accepted an offer gets access to a self-service pre-boarding portal, where PAN, Aadhaar, bank details, previous employment documents and statutory declarations are uploaded before they arrive.",
          "Appointment letters are generated from the offer data with digital signature capability, so the paperwork is concluded rather than carried into the first morning. IT hardware and workspace assets are provisioned from a checklist that starts when the offer is accepted, not when the person walks in.",
        ],
      },
      {
        heading: "Day one, and the record it creates",
        body: [
          "Because the pre-boarding data lands directly on the employee record, day one produces no re-entry. Statutory identifiers are already present, so EPF and ESI applicability is already determined. The compensation structure is already effective-dated from the joining date, so the first payroll run needs no special handling. The leave scheme is already attached, so accrual starts on the right date.",
          "The department welcome workflow — introductions, systems access, first-week goals — runs on top of a record that is already complete, rather than being the thing that completes it.",
        ],
      },
      {
        heading: "The stages nobody builds a page for",
        body: [
          "Confirmation after probation, an internal transfer between locations, a promotion, a change of reporting line: each is a lifecycle event with statutory and payroll consequences, and each is usually handled by email.",
          "In HRMagix these are effective-dated changes on the same record, which means the consequence is automatic. A transfer to a different state changes Professional Tax applicability. A confirmation date reached without action surfaces to the reporting manager. A promotion reaches the next payroll run without a second entry.",
        ],
      },
      {
        heading: "Exit, done properly",
        body: [
          "An exit generates more obligations than a joining: notice-period computation, asset recovery, clearance across departments, full-and-final settlement including gratuity where the five-year threshold has been met, and documents the person may need for years afterwards.",
          "Handling this as a checklist against the same record means the settlement is computed from the same attendance and leave ledger everything else used, and the record remains available afterwards rather than being deleted along with the login.",
        ],
      },
      {
        heading: "Probation, and the decision nobody diarised",
        body: [
          "Probation is a defined period with a decision at the end of it, and the decision is the part that most often goes missing. The period lapses, nobody confirms anything, and the employee is left in an ambiguous status that becomes awkward precisely when it matters — at an increment, or at an exit.",
          "The mechanism that fixes this is unglamorous: the probation end date is a field on the employee record, and it raises the confirmation decision before it arrives rather than after. The outcome — confirmation, extension with reasons, or separation — is recorded against the record with its date, and any change it triggers, such as eligibility for earned leave, follows from the same event.",
          "It is worth being clear that the platform holds the date and the outcome. What the probation period is, how performance is assessed during it, and what an extension requires are the employer's decisions, written into their own policy.",
        ],
      },
      {
        heading: "Internal moves are onboarding too",
        body: [
          "A promotion, a transfer between locations and a move between legal entities are all treated in most companies as administrative footnotes, and all three have the same shape as a joining: a new reporting line, a new set of approvals, sometimes a new payroll treatment, and a new set of things the person needs access to.",
          "Handling them as changes to the existing record rather than as new records is what preserves continuity of service — which is not a technicality, because gratuity eligibility and leave accrual both depend on it. An employee who moves between entities and is recreated has, on paper, started again.",
          "The same record therefore carries the history: the grades held, the managers reported to, the locations worked at, and the dates each changed. Tenure is then a fact rather than a reconstruction.",
        ],
      },
      {
        heading: "Why the first week is mostly a document problem",
        body: [
          "The experience of a good first week is usually described in cultural terms, but what employee onboarding software actually has to solve underneath it is documentary. A new joiner has to provide statutory identifiers, bank details and proof documents; the employer has to issue an appointment letter, communicate its policies and record that they were received.",
          "Done over email, this generates a fortnight of correspondence and leaves the evidence scattered across three inboxes. Done through the portal before day one, the employee completes their own record, the documents attach to it as they are supplied, and the policy acknowledgements are captured against the versions actually issued.",
          "What that buys is not only speed. It means the first payroll run has the identifiers it needs, and that the company can later show what a specific person was told on the day they joined.",
        ],
      },
    ],
    mechanics: {
      title: "The lifecycle, end to end",
      intro:
        "Five stages, one record. Each stage inherits everything the previous one established.",
      steps: [
        {
          step: "01",
          title: "Pre-boarding",
          body: "Self-service upload of PAN, Aadhaar, bank and previous employment documents. Appointment letter generated and signed digitally. Asset checklist opens.",
        },
        {
          step: "02",
          title: "Joining",
          body: "Record activates with statutory identifiers, compensation structure, leave scheme and shift policy already attached. Welcome workflow runs on a complete record.",
        },
        {
          step: "03",
          title: "Confirmation",
          body: "Probation end date surfaces to the reporting manager ahead of time; confirmation is an effective-dated change with its own consequences.",
        },
        {
          step: "04",
          title: "Movement",
          body: "Transfers, promotions and reporting-line changes are dated rather than overwritten, so payroll, approvals and statutory applicability follow automatically.",
        },
        {
          step: "05",
          title: "Exit",
          body: "Notice period, clearance, asset recovery and full-and-final settlement including gratuity where eligible — computed from the same ledger, with documents retained.",
        },
      ],
    },
    capabilities: [
      {
        group: "Before day one",
        items: [
          "Self-service pre-boarding portal for PAN, Aadhaar and bank documents",
          "Automated appointment letter generation with digital signature",
          "IT hardware and workspace asset provisioning checklists",
          "Statutory declarations collected in advance",
        ],
      },
      {
        group: "Through employment",
        items: [
          "Probation and confirmation tracking",
          "Effective-dated transfers, promotions and reporting changes",
          "Succession and key-role vulnerability mapping",
          "Policy acknowledgement at each relevant stage",
        ],
      },
      {
        group: "At exit",
        items: [
          "Notice period and buyout handling per policy",
          "Departmental clearance and asset recovery checklists",
          "Full-and-final settlement with gratuity where eligible",
          "Documents retained and retrievable after the login closes",
        ],
      },
    ],
    capabilitiesTitle: "The lifecycle, stage by stage",
    capabilitiesIntro:
      "From before day one to after the last one. The middle stages are the ones companies usually have no process for, which is why they are listed here alongside the obvious two.",
    questionsIntro:
      "The practical questions about joining, confirmation and exit that a policy document rarely answers.",
    questions: [
      {
        q: "What does a new joiner actually do before their first day?",
        a: "They log in to a pre-boarding portal and upload PAN, Aadhaar, bank details, previous employment documents and statutory declarations, and sign their appointment letter digitally. Because that data lands on the employee record directly, their first day involves no re-entry and their first payroll run needs no special handling.",
      },
      {
        q: "Is gratuity calculated automatically at exit?",
        a: "Where the employee has completed five years of continuous service, the settlement includes gratuity computed on the Payment of Gratuity Act formula of fifteen days of last drawn basic salary per completed year. Provisioning runs before that point so the liability is visible rather than sudden.",
      },
      {
        q: "What happens to an employee's records after they leave?",
        a: "The record is retained rather than deleted with the login, which is what makes it possible to issue a document or answer a statutory question about a former employee months later.",
      },
      {
        q: "How is probation confirmation handled?",
        a: "The probation end date sits on the employee record and raises the confirmation decision before it lapses. The outcome — confirmed, extended, or separated — is recorded with its date, and anything that follows from it, such as eligibility for earned leave, takes effect from that event. The length of probation and the criteria are the employer's policy, not ours.",
      },
      {
        q: "What happens when an employee is promoted or transferred?",
        a: "It is a change to the existing record rather than a new one, which is what preserves continuity of service for gratuity and leave accrual. The record keeps the grades held, the managers reported to and the locations worked at, each with the date it changed.",
      },
      {
        q: "Can a new joiner complete formalities before their start date?",
        a: "Yes, and it is the main reason pre-boarding exists. The joiner completes their own details, uploads statutory and proof documents, and acknowledges the policies issued to them, so day one is not spent on data entry and the first payroll run has the identifiers it needs.",
      },
      {
        q: "Does an exit checklist cover assets and access?",
        a: "Yes. Assets issued and access granted are recorded against the employee when they are given, so the clearance list at exit is generated from what is known rather than assembled from memory. Each item is cleared by whoever is responsible for it, through the same approval routing as everything else.",
      },
      {
        q: "How long does onboarding take to set up for a company?",
        a: "The configuration is the checklist itself — which documents are collected, which policies are issued, who clears what — and it is defined once and reused. The work is deciding the sequence, not building it, which is why companies usually start from their existing joining formalities rather than designing a new process.",
      },
    ],
    onward: [
      { label: "Employee Management", href: "/solutions/employee-management", note: "Living with the record afterwards" },
      { label: "Payroll", href: "/solutions/payroll", note: "Full-and-final settlement in detail" },
      { label: "How it works", href: "/how-it-works", note: "Getting your own company on in three steps" },
    ],
  },

  /* ================================================================= */
  {
    slug: "hr-analytics",
    href: "/solutions/hr-analytics",
    name: "HR Analytics",
    kicker: "Workforce reporting",
    title: "The numbers a board asks for, without a week of collation",
    standfirst:
      "Because every module writes to one record, workforce reporting is a read rather than a project. Headcount, attrition risk, overtime cost, leave utilisation and payroll variance come from the data that is already there.",
    image: "analytics",
    icon: "chart",
    seo: {
      title: "HR Analytics Software & Workforce Reporting",
      description:
        "HR analytics and workforce reporting: real-time headcount and department distribution, attrition risk indicators, tenure analysis, overtime expense and payroll budget variance.",
      keywords: [
        "HR analytics software",
        "workforce analytics tools",
        "HR reporting software",
        "employee analytics dashboard",
      ],
    },
    opening: [
      "Most HR reporting is not analysis. It is collation — pulling headcount from one place, resignations from another, overtime from a third, and reconciling the three before anyone can look at them. HR analytics software earns its place by removing that step rather than by drawing better charts.",
      "By the time the numbers agree, the month they describe is over. The value of analytics in an integrated platform is not that the charts are better. It is that the collation step does not exist, so the question can be asked on a Tuesday and answered on a Tuesday.",
    ],
    passages: [
      {
        heading: "What is worth watching monthly",
        body: [
          "Headcount growth, department distribution and gender diversity describe the shape of the workforce. Tenure analysis and early-warning attrition risk indicators describe its stability. Overtime expense, leave utilisation rates and payroll budget variance describe what it costs.",
          "None of these are useful in isolation. Overtime rising in one department while attrition risk rises in the same department is a different story from either on its own — and that comparison is only possible because both come from the same record.",
        ],
      },
      {
        heading: "The reports leadership actually asks for",
        body: [
          "A CFO wants payroll cost by entity and its variance against budget. A plant head wants overtime by shift. A founder wants to know whether the attrition they are feeling is real or anecdotal. A compliance officer wants to know that this month's statutory filings reconcile to this month's payroll.",
          "These are four different questions about the same underlying data, which is precisely why they are hard when the data lives in four systems and straightforward when it does not.",
        ],
      },
      {
        heading: "Why a reporting tool bolted on afterwards behaves differently",
        body: [
          "The usual approach to HR reporting software is to add a dashboard on top of whatever systems already exist and feed it by export. That works until two exports disagree, which they eventually do \u2014 because they were taken at different moments, or because a leave application was regularised after the first one ran.",
          "Analytics inside an HR management system has no import step to go stale. The headcount on a chart is the count of active employee records at the instant you looked; the overtime figure is the sum of the same approved hours the payroll run will pay. A number can still be wrong, but it can only be wrong in one place, and correcting it corrects every view of it.",
        ],
      },
      {
        heading: "Reading a trend without over-reading it",
        body: [
          "Workforce analytics tools are at their most useful when they are treated as a way of forming better questions rather than as a source of answers. A rise in leave utilisation in one team may be a burnout signal, or it may be that the team took a long-planned holiday together. The dashboard cannot tell you which; it can tell you where to look.",
          "The indicators worth acting on are usually the ones that move together. Overtime climbing while attrition-risk indicators climb in the same department, over the same two months, is a pattern. Either one alone is noise. Reporting that draws both from the same employee record is what makes the comparison honest.",
          "For that reason the platform reports what it can observe \u2014 hours, absences, tenure, cost, goal completion \u2014 and stops there. It does not score engagement from data it does not hold, or predict a resignation date.",
        ],
      },
      {
        heading: "Reporting across entities and locations",
        body: [
          "Companies rarely stay one legal entity for long. A second office in another state brings a second professional tax registration; a subsidiary brings a separate PF code and its own payroll run.",
          "Because entity and location are attributes of the employee record rather than separate installations, the same report can be read at group level or filtered to one entity without maintaining two versions of it. Statutory totals stay attached to the entity that owes them, which is the level at which they have to be filed.",
        ],
      },
    ],
    capabilities: [
      {
        group: "Workforce shape",
        items: [
          "Real-time headcount growth and department distribution",
          "Gender diversity across the organisation",
          "Tenure analysis by grade, function and location",
          "Multi-entity and multi-location roll-ups",
        ],
      },
      {
        group: "Stability",
        items: [
          "Early-warning attrition risk indicators",
          "Leave utilisation rates by team",
          "Performance and goal-completion trends",
          "Key-role vulnerability from the succession module",
        ],
      },
      {
        group: "Cost",
        items: [
          "Overtime expense by department and shift",
          "Payroll budget variance month on month",
          "Statutory contribution totals by head",
          "Cost views that reconcile to the payroll run they came from",
        ],
      },
    ],
    ledger: {
      title: "What each measure actually counts",
      intro:
        "A workforce number is only comparable if everyone agrees on its definition. These are the definitions the platform uses, stated so a figure can be checked rather than trusted.",
      rows: [
        {
          term: "Headcount",
          detail:
            "Active employee records at the moment of reading, including those on approved leave. People serving notice are counted until their last working day.",
          note: "Not the same as a payroll count during a notice period",
        },
        {
          term: "Tenure",
          detail:
            "Time from date of joining to today, or to the last working day for those who have left. Reported by grade, function and location, so distributions can be compared rather than averaged into one misleading number.",
        },
        {
          term: "Attrition risk indicator",
          detail:
            "An early-warning flag assembled from signals the platform already holds \u2014 tenure, leave pattern, goal completion, time since the last review. It marks a record as worth a conversation. It is not a prediction.",
          note: "A prompt to ask, not an answer",
        },
        {
          term: "Leave utilisation",
          detail:
            "Approved leave taken as a proportion of the entitlement accrued so far in the leave year, by team. Reads low where balances are building toward carry-forward or encashment.",
        },
        {
          term: "Overtime expense",
          detail:
            "Approved overtime hours at the applicable rate, grouped by department and shift. Draws on the same approved hours the payroll run pays, so the two cannot diverge.",
        },
        {
          term: "Payroll budget variance",
          detail:
            "Actual payroll cost for the month against budget, by entity. Movement is attributable to its cause \u2014 joiners, exits, revisions, arrears, overtime \u2014 because each is a separate component of the run.",
        },
        {
          term: "Statutory contribution totals",
          detail:
            "PF, ESI, professional tax and TDS totals by head for the period, at the entity level at which they are filed. These are the figures the returns are built from.",
        },
      ],
    },
    useCases: {
      title: "Who asks for these numbers",
      intro:
        "Four roles, four different questions, one underlying record. The value of HR reporting software is less in the charts than in nobody having to reconcile them first.",
      items: [
        {
          role: "Founder or CEO",
          situation:
            "The feeling that people are leaving faster than they used to, with no way to tell whether that is true or whether three memorable exits are colouring the impression.",
          resolution:
            "Headcount growth, tenure distribution and exits over time, read directly from the employee record. The answer is often that attrition is concentrated in one team or one tenure band \u2014 a different problem from a company-wide one, and a far more tractable one.",
        },
        {
          role: "Finance lead",
          situation:
            "Payroll is the largest line in the budget and the hardest to forecast, because joiners, exits, increments and arrears all land in the same month and arrive as a single number.",
          resolution:
            "Payroll cost by entity with variance against budget, broken into the components that moved it. Statutory contribution totals reconcile to the run that produced them, so the return and the ledger agree.",
        },
        {
          role: "HR manager",
          situation:
            "Being asked in a leadership meeting for figures that live in four places, and having a day to assemble something defensible.",
          resolution:
            "The collation step does not exist. Department distribution, leave utilisation, overtime and goal-completion trends are a read on data already captured, so the question can be asked and answered in the same meeting.",
        },
        {
          role: "Operations or plant head",
          situation:
            "Overtime is rising on one shift, and it is unclear whether that is demand, understaffing, or a rota that has quietly stopped working.",
          resolution:
            "Overtime expense by department and shift, alongside the attendance records it was calculated from, so the hours can be traced back to the days and the people they came from.",
        },
      ],
    },
    capabilitiesTitle: "What can be reported, and from where",
    capabilitiesIntro:
      "Every figure below is a read on data another module already captured. Nothing here requires a separate collection exercise, which is the entire argument for reporting inside the platform.",
    questionsIntro:
      "Asked by the people who have to defend a number in a meeting rather than produce it.",
    questions: [
      {
        q: "Where does the analytics data come from?",
        a: "From the same employee record, attendance ledger and payroll runs the rest of the platform uses. There is no separate reporting database to load, which is why a figure in a report reconciles to the run it came from.",
      },
      {
        q: "Which plan includes analytics?",
        a: "Analytics is part of the Growth plan alongside payroll, performance, OKRs and recognition. Starter covers attendance, leaves, the employee directory and documents.",
      },
      {
        q: "Do reports update in real time, or on a schedule?",
        a: "They are read live. A report reflects the record as it stands when you open it, so a leave application approved an hour ago is already counted. There is no overnight refresh to wait for, and no cached figure to invalidate.",
      },
      {
        q: "Can figures be filtered by entity, location or department?",
        a: "Yes. Entity, location, department and grade are attributes of the employee record rather than separate systems, so the same report can be read at group level or narrowed to one part of the organisation without maintaining a second version of it.",
      },
      {
        q: "What does the attrition risk indicator actually use?",
        a: "Signals the platform already holds: tenure, leave pattern, goal completion and time since the last review. It is deliberately an early-warning flag rather than a score \u2014 it tells you which records are worth a conversation, and does not claim to predict who will resign.",
      },
      {
        q: "Can a report be exported for a board pack or an auditor?",
        a: "Yes. Reports export with the period and the filters they were run under recorded alongside them, which matters when a figure has to be defended later \u2014 an auditor's question is usually about what was included, not about the arithmetic.",
      },
      {
        q: "Does analytics expose data a manager should not see?",
        a: "Visibility follows the same role permissions as the rest of the platform. A department head sees their own department; salary components are visible only to roles that already have payroll access. Analytics does not create a side door into records the same user could not open directly.",
      },
    ],
    onward: [
      { label: "HRMS", href: "/solutions/hrms", note: "The record these reports read" },
      { label: "Payroll", href: "/solutions/payroll", note: "Where the cost figures originate" },
      { label: "Pricing", href: "/pricing", note: "Which plan analytics sits on" },
    ],
  },
];

export const bySlug = (slug: string) => solutions.find((s) => s.slug === slug);

/** Menu order for the solutions hub, grouped the way the header groups them. */
export const solutionGroups = [
  {
    title: "Core HR",
    blurb:
      "The employee record, and the workflows that keep it accurate from the offer letter to the final settlement.",
    slugs: ["hrms", "employee-management", "onboarding", "ess"],
  },
  {
    title: "Time & Pay",
    blurb:
      "Hours captured, leave resolved, salary calculated and statutory filings produced — as one continuous chain rather than four handovers.",
    slugs: ["payroll", "attendance", "leave-management", "hr-analytics"],
  },
];

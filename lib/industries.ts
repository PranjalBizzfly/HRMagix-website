/**
 * The six industry pages.
 *
 * These are not six versions of one page with the noun swapped. Each one is
 * organised around the specific operational problem that kind of company has —
 * a startup's problem is that policy does not exist yet, a manufacturer's is
 * that the shop floor and the office are paid on different logic, an SME's is
 * that "one company" is legally several. The platform capabilities cited are
 * the same published ones throughout; what changes is which of them matter.
 *
 * No customer names, headcounts, benchmarks or case-study outcomes appear here.
 * HRMagix has not published any, so none are claimed.
 */

export type IndustryQuestion = { q: string; a: string };

export type Industry = {
  slug: string;
  href: string;
  name: string;
  /** How this reader would describe themselves. */
  audience: string;
  title: string;
  standfirst: string;
  image: string;
  seo: { title: string; description: string; keywords: string[]; focus?: string };
  /** The situation, in that reader's own terms. */
  situation: string[];
  /** The specific pressures, each with a real explanation rather than a label. */
  pressures: { title: string; body: string }[];
  /** What this reader should switch on first, and why that order. */
  priority: { order: string; module: string; href: string; why: string }[];
  /**
   * Two or three longer sections written only for this reader. The subjects
   * differ by industry on purpose -- a startup needs to hear about founding
   * policy, a manufacturer about shop-floor wage law -- so no two industry
   * pages carry the same discussion.
   */
  deepDive?: { heading: string; body: string[] }[];
  /** A closing argument written for this reader alone. */
  closing: string;
  /**
   * The events that usually make this kind of company start looking for an HR
   * system — buyer situations, not product claims.
   */
  signals?: string[];
  questions: IndustryQuestion[];
};

export const industries: Industry[] = [
  {
    slug: "startups",
    href: "/industries/startups",
    name: "Startups",
    audience: "Founders and first HR hires, roughly 10 to 100 people",
    title: "You do not have an HR problem yet. You have a policy vacuum.",
    standfirst:
      "Early-stage companies rarely fail at HR because their tools are bad. They fail because nothing has been decided — and every undecided rule becomes a precedent the first time someone asks.",
    image: "industry-startups",
    seo: {
      title: "HR Software for Startups",
      description:
        "HR software for startups in India: payroll software for startups with statutory compliance from the first employee, leave and attendance policy that scales, and self-service that keeps founders out of HR admin.",
      keywords: [
        "payroll software for startups",
        "HR software for startups",
        "best HR software for startups",
      ],
      focus: "HR software for startups",
    },
    situation: [
      "HR software for startups is bought later than it should be, and for a predictable reason. At fifteen people, HR is a founder answering questions in a chat window. It works, and it works precisely because everyone can see everyone. The failure mode arrives quietly at around forty, when the first person asks a question whose answer was previously improvised — how much notice do I owe, does a Friday off cost me two days, when does my leave reset — and discovers that the answer depends on who they asked and when.",
      "By then the decision has already been made, badly, several times. Founders usually reach for HR software at this point believing they need a tool. What they actually need is for the rules to exist somewhere other than in their head, applied identically to everyone, from the day they are written.",
    ],
    pressures: [
      {
        title: "Statutory obligations start earlier than founders expect",
        body: "EPF and ESI applicability, Professional Tax registration in the states you operate in, and TDS under Section 192 are not things that begin at a headcount milestone you will notice. Setting the platform up with the right identifiers and rates from the first employee costs nothing; retrofitting them across eighteen months of history is a genuine project.",
      },
      {
        title: "Every policy you improvise becomes precedent",
        body: "A leave request granted generously once is a rule from then on. Writing the leave scheme, the notice period, the probation length and the work-from-home position down — and having the system apply them — is what stops the founder becoming the appeals process.",
      },
      {
        title: "Founder time is the scarcest input in the company",
        body: "Almost every HR question a small team generates is a lookup: my balance, my payslip, my UAN. Self-service does not save HR time at this stage, because there is no HR. It saves founder time.",
      },
      {
        title: "You will change shape faster than your records can keep up",
        body: "Titles, reporting lines and salaries move constantly in the first two years. Effective-dated records mean a raise in August does not rewrite what July looked like — which matters the first time an investor, an auditor or a departing employee asks.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "Because the statutory position compounds. Getting EPF, ESI, PT and TDS right from employee one avoids the only genuinely expensive mistake on this list.",
      },
      {
        order: "Then",
        module: "Leave Management",
        href: "/solutions/leave-management",
        why: "Because it is where improvised precedent does the most damage, and where written policy is felt fastest by the team.",
      },
      {
        order: "Then",
        module: "Employee Self-Service",
        href: "/solutions/ess",
        why: "Because it removes the lookups from the founder's inbox permanently.",
      },
      {
        order: "Later",
        module: "Performance & OKRs",
        href: "/solutions/hr-analytics",
        why: "Because goal-setting frameworks only help once there are enough people that alignment cannot happen by proximity.",
      },
    ],
    deepDive: [
      {
        heading: "The five decisions to make before the tenth hire",
        body: [
          "Almost every HR problem a young company hits in its second year traces back to a decision that was never made in its first. Five are worth settling deliberately, because each becomes a precedent the moment somebody asks.",
          "How much leave, of which kinds, accruing on what basis. What the notice period is, and whether it differs by seniority. How long probation runs, and what confirmation requires. Whether work from home is a right, an arrangement or an exception. And what the salary structure looks like — specifically the split between basic and allowances, because that decides the PF cost of every offer you make afterwards.",
          "None of these needs to be generous or elaborate. They need to exist in writing and be applied identically, which is exactly what founders find hardest when the person asking is sitting three feet away.",
        ],
      },
      {
        heading: "Statutory registration, roughly in the order it arrives",
        body: [
          "Professional Tax registration is a state matter and often applies from the first employee, which surprises founders more than any other obligation. TDS under Section 192 applies as soon as anyone's projected annual income crosses the exemption limit, which in most funded startups is the first engineer.",
          "ESI applicability generally begins at ten employees in a covered establishment, and EPF at twenty, though voluntary coverage before those thresholds is common and sometimes contractual. Each brings a registration, a monthly return and a payment date that does not move because the company is busy.",
          "The reason to configure payroll software for startups with these in place from the first run is not diligence for its own sake. It is that retrofitting eighteen months of contributions, interest and damages across a workforce that has since doubled is a genuine project, and it always lands in the same quarter as a fundraise.",
        ],
      },
      {
        heading: "What due diligence asks for, and why it is usually painful",
        body: [
          "The people section of a diligence request is narrow and specific: a headcount reconciliation, appointment letters and signed contracts, evidence of statutory registration and filing, salary and ESOP records, and confirmation that policies were communicated.",
          "It is rarely painful because the company did something wrong. It is painful because the evidence lives in a founder's inbox, three shared drives and a payroll spreadsheet that has been edited in place, so nothing can be shown as it stood at the time it mattered.",
          "Effective-dated records and per-version policy acknowledgement are the whole answer to this. They cost nothing to maintain while the company is small, and they are impossible to reconstruct once it is not.",
        ],
      },
    ],
    signals: [
      "A funding round closes, and a hiring plan arrives with it before any HR process exists.",
      "Due diligence asks for appointment letters, statutory filings and salary records as they stood at the time.",
      "The first engineer's salary crosses the income-tax exemption limit and TDS becomes a monthly obligation.",
    ],
    closing:
      "The Starter plan is deliberately narrow — attendance, leaves, directory and documents — because a fifteen-person company genuinely does not need succession planning. Payroll and performance arrive with Growth, and switching them on is a setting rather than a migration, because they read the same record you have been building since your first hire.",
    questions: [
      {
        q: "We have twelve people. Is this too early?",
        a: "The statutory pieces are the argument for starting early, not the module count. Registering the right identifiers and applying the correct EPF, ESI, PT and TDS treatment from your first employees costs nothing extra and avoids a retrospective correction later. The Starter plan exists for exactly this size.",
      },
      {
        q: "We are all remote. Does attendance even apply?",
        a: "Attendance capture is about establishing payable days, not policing presence. For a distributed team that usually means browser or mobile check-in without a geofence, so that leave, unpaid days and the payroll run still reconcile to something.",
      },
      {
        q: "Can we import what we already have in spreadsheets?",
        a: "Yes — employee master data, historical leave balances, previous salary structures and department hierarchies come in through structured Excel templates, with a dry-run payroll before the first live cutoff.",
      },
      {
        q: "We are eight people. Is it too early for HRMS software?",
        a: "The tools are optional at eight; the statutory obligations may not be. Professional Tax registration is often due from the first employee and TDS from the first salary above the exemption limit. Starting with attendance, leave and the employee record on the Starter plan costs little and means the history exists when ESI and EPF thresholds arrive.",
      },
      {
        q: "Can we start with only part of the platform and add payroll later?",
        a: "Yes, and it is the usual sequence. Attendance, leave and the employee directory come first because they establish the record; payroll is switched on when you are ready to move it, ideally at the start of a financial year or with one month run in parallel.",
      },
      {
        q: "How should we decide the basic-to-allowance split in our salary structure?",
        a: "It is a cost decision as much as a compensation one, because basic pay drives the PF wage and therefore the employer's contribution on every offer. Decide it once per grade rather than per offer, so two people hired a year apart on the same band are not paid under different arithmetic.",
      },
      {
        q: "What do investors typically ask for in a people diligence?",
        a: "A headcount reconciliation, appointment letters, evidence of statutory registration and filings, salary and ESOP records, and confirmation that policies were issued and acknowledged. The difficulty is almost never the answer; it is showing the position as it stood at a past date, which is what effective-dated records exist for.",
      },
    ],
  },

  {
    slug: "small-business",
    href: "/industries/small-business",
    name: "Small Business",
    audience: "Owner-managed businesses with one location and no HR department",
    title: "When you know everyone's name, the software has to stay out of the way",
    standfirst:
      "A thirty-person business does not need a people strategy. It needs salaries paid correctly on the same date every month, leave that is fair, and a record it can produce when somebody official asks for one.",
    image: "industry-small-business",
    seo: {
      title: "HR Software for Small Business",
      description:
        "HR software for small business in India: an HRMS for small business with correct PF, ESI and Professional Tax every month, simple leave and attendance, payslips and records — without an HR department.",
      keywords: [
        "HR software for small business",
        "HRMS for small business",
      ],
      focus: "HR software for small business",
    },
    situation: [
      "In an owner-managed business the payroll is usually run by the person who also handles purchases, banking and the accountant relationship. It is not a specialism; it is one of eleven things on a list, and it comes due on a fixed date whether or not the rest of the list is finished.",
      "The failure mode here is not fraud or chaos. It is small, repeated friction: a half-day that was not recorded, a Professional Tax slab that changed in February and was missed, a payslip that has to be reconstructed because someone needs it for a loan application. Individually trivial. Collectively, they are why month end takes three days.",
    ],
    pressures: [
      {
        title: "Compliance is the same whether you have thirty people or three thousand",
        body: "The EPF wage ceiling, the ESI threshold, state Professional Tax slabs and TDS under Section 192 do not have a small-business version. What differs is that a large company has someone whose job is to track them, and you do not.",
      },
      {
        title: "The records only matter when somebody asks",
        body: "Payslips, appointment letters, statutory declarations and policy acknowledgements are invisible until an inspection, a bank, a visa application or a dispute requires one. Keeping them filed against the person automatically is cheaper than finding them later.",
      },
      {
        title: "Fairness is visible in a small team",
        body: "In a company where everyone can see everyone, an inconsistently applied leave rule is noticed immediately. A policy engine that applies the same rule to everyone is worth more here than in a company where nobody would notice.",
      },
      {
        title: "There is nobody to absorb a mistake",
        body: "In a small business the person who makes the payroll error is also the person who has to fix it, explain it and pay for it. Deriving statutory deductions rather than typing them removes the most common category of error entirely.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "It is the thing with a deadline and a legal consequence. Everything else can wait a month; this cannot.",
      },
      {
        order: "Then",
        module: "Attendance & Shifts",
        href: "/solutions/attendance",
        why: "Because payable days are the input payroll cannot be correct without — and most small businesses already own the biometric hardware.",
      },
      {
        order: "Then",
        module: "Employee Management",
        href: "/solutions/employee-management",
        why: "So that the letters, declarations and acknowledgements exist in one place before somebody official asks for them.",
      },
      {
        order: "Optional",
        module: "Employee Self-Service",
        href: "/solutions/ess",
        why: "Worth it the moment you notice you are the person people ask for their payslips.",
      },
    ],
    deepDive: [
      {
        heading: "When the person doing HR is also doing three other jobs",
        body: [
          "In most businesses under fifty people there is no HR department. There is an office manager, an accountant or a founder's spouse who does HR among other things, and the work reaches them in interruptions rather than as a job with a start and an end. That is the fact any HRMS for small business has to be designed around.",
          "That shapes what HR software for small business actually has to do. It is not primarily about capability; it is about removing the interruptions. A payslip request, a leave balance question, a salary certificate for a bank, a Form 16 reissue — each takes minutes, and together they are most of the week.",
          "The measure worth applying to any system here is simple: how many of the questions people currently ask a person can they answer themselves. Not because the person is a bottleneck by temperament, but because they were only ever doing this alongside something else.",
        ],
      },
      {
        heading: "The cost of getting statutory filing slightly wrong",
        body: [
          "Small employers rarely fail compliance dramatically. They fail it in small, compounding ways: a PF contribution calculated on the wrong wage base, an ESI deduction continued after an employee crossed the threshold mid-year, a professional tax slab that changed and was not picked up.",
          "Each is minor in a month and material across a year, and all three share a cause — the rate or the rule lived in somebody's memory or in a spreadsheet formula rather than in the system that produces the payslip.",
          "Deriving statutory deductions from the salary structure on the record, rather than entering them, is what removes the class of error rather than the instance of it. The monthly return is then produced from the run that generated the figures, so the two cannot disagree.",
        ],
      },
      {
        heading: "Paper records, and the day somebody asks to see them",
        body: [
          "Attendance registers, wage registers and muster rolls are still kept on paper in a great many small establishments, and they are perfectly legal that way. The difficulty is not their format; it is that they are the only copy, they are held at one location, and reconstructing a specific person's specific day from them is slow.",
          "A digital attendance ledger changes what can be answered rather than what has to be kept. The original punch, the correction, the reason and the approver are all retrievable for a date two years ago, which is the form an inspector's question actually takes.",
          "That matters most at exactly the moment a small employer is least equipped to deal with it: an inspection, a labour dispute, or a former employee's claim about hours worked.",
        ],
      },
    ],
    signals: [
      "Headcount crosses 25, then 50, and the arrangements that worked when everyone sat together stop holding.",
      "An employee disputes a salary or a leave balance, and nobody can show how the figure was reached.",
      "The first notice from a labour or tax authority arrives and the records have to be produced.",
    ],
    closing:
      "Nothing here requires an implementation project. Employee data comes in through Excel templates, the statutory rules are configuration rather than customisation, and most organisations of this size complete setup within two to three days including a dry-run payroll.",
    questions: [
      {
        q: "We only have twenty-two employees. What does this cost?",
        a: "Pricing is per employee per month with three published plans and no setup fee. The pricing page carries the current rates and an estimator so you can work the number out before speaking to anybody.",
      },
      {
        q: "Our accountant currently does payroll. Does this replace them?",
        a: "It replaces the manual calculation and the filing preparation, not the advice. The run produces the ECR file, the ESIC return, the PT working and Form 24Q, which your accountant can review and file rather than assemble.",
      },
      {
        q: "We have a biometric machine already. Can we keep it?",
        a: "In most cases yes. HRMagix syncs with eSSL, Matrix, Realtime and ZKTeco devices over a secure API push or a local sync service.",
      },
      {
        q: "We have fewer than twenty employees. Which statutory heads apply to us?",
        a: "It depends on your state and establishment type rather than on headcount alone. Professional Tax registration commonly applies from the first employee; ESI generally from ten in a covered establishment; EPF generally from twenty, though voluntary coverage is common. TDS applies from the first salary above the exemption limit. The platform holds the registrations you tell it you have and derives the deductions from them.",
      },
      {
        q: "Can we keep paper attendance registers as well?",
        a: "Yes — the digital ledger does not replace whatever record-keeping obligation applies to you, it makes the same information retrievable. Most small employers keep both for a period and find the paper copy is consulted less and less.",
      },
      {
        q: "How much of HR can a small business realistically move to self-service?",
        a: "Most of the volume, and almost none of the judgement. Payslips, balances, Form 16, salary certificates, address changes and leave applications move well. Grievances, exceptions and policy decisions still need a person, and should.",
      },
      {
        q: "What happens if we only pay some staff through the platform?",
        a: "Running part of the workforce inside payroll software and part outside it reintroduces exactly the reconciliation problem the system exists to remove, and statutory totals will not tie back to the returns. It is far better to bring everyone onto one run, even where their pay structures differ substantially.",
      },
    ],
  },

  {
    slug: "smes",
    href: "/industries/smes",
    name: "SMEs",
    audience: "Multi-branch, multi-state businesses, roughly 100 to 1,000 people",
    title: "One company on the letterhead. Several under the law.",
    standfirst:
      "The defining difficulty of a mid-market Indian business is that its branches are one organisation operationally and several distinct compliance positions statutorily — and both have to be true at once.",
    image: "industry-smes",
    seo: {
      title: "Payroll Software for SMEs and Growing Companies",
      description:
        "Payroll software for SMEs in India: one employee record across entities and locations, state-specific Professional Tax and leave rules, and consolidated reporting — an HRMS for a 100 employees company and beyond.",
      keywords: [
        "payroll software for SMEs",
        "HRMS for 100 employees company",
      ],
      focus: "Payroll software for SMEs",
    },
    situation: [
      "A business with a head office in Pune, a branch in Bengaluru and a unit in Hyderabad experiences itself as one company. Its employees move between locations, its leadership reads one set of numbers, and its culture is singular.",
      "Statutorily it is nothing of the sort. Professional Tax is a state subject with different slabs and different due dates. Leave entitlements sit under state Shops and Establishments Acts. Registrations, returns and inspections are per location. If there are multiple legal entities, payroll is legitimately several payrolls that leadership nonetheless wants to see as one.",
      "Software that handles this badly forces a choice: run three instances and lose the consolidated view, or run one and hand-adjust the state differences every month. Both are common. Neither is necessary.",
    ],
    pressures: [
      {
        title: "State rules differ, and they differ on a schedule",
        body: "Maharashtra's Professional Tax behaves differently in February. Several states apply gender-specific exemptions. Labour Welfare Fund deductions are half-yearly in some states and annual in others. Holding these as per-state rules rather than a single default is the whole game.",
      },
      {
        title: "Approval chains stop being obvious",
        body: "At thirty people everyone knows who approves what. At four hundred across three cities, an approval hierarchy has to be configured — by grade, by location, with escalation — or requests simply stall with whoever happens to be on leave.",
      },
      {
        title: "Leadership wants one number, finance needs several",
        body: "A consolidated headcount and payroll cost figure across entities is what the board asks for. Entity-level statutory totals that reconcile to what was actually filed is what finance needs. Both have to come from the same run.",
      },
      {
        title: "The shop floor and the office are paid on different logic",
        body: "Many mid-market businesses have both. One population is salaried and desk-based; the other is shift-based with overtime, night differentials and comp-off. A single policy engine has to express both without two systems.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "HRMS",
        href: "/solutions/hrms",
        why: "Because the entity, location and grade structure has to be right before anything configured on top of it will behave.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "State-specific PT, LWF cycles and multi-entity runs are the pieces most likely to be handled manually today.",
      },
      {
        order: "Then",
        module: "Attendance & Leave",
        href: "/solutions/attendance",
        why: "So that different shift patterns and different state leave quotas stop requiring different spreadsheets.",
      },
      {
        order: "Then",
        module: "HR Analytics",
        href: "/solutions/hr-analytics",
        why: "Because consolidated reporting is the reason to have done all of the above in one platform.",
      },
    ],
    deepDive: [
      {
        heading: "One company on the letterhead, several on the returns",
        body: [
          "The defining administrative fact about a mid-market Indian business is that it is usually more than one legal entity. A manufacturing arm and a services arm. A holding company and an operating company. A subsidiary created for a specific client or a specific state.",
          "Each entity carries its own PF and ESI registrations, its own professional tax registrations in the states where it employs people, and its own payroll run and returns. Employees, meanwhile, move between them — on promotion, on transfer, or because the group reorganised.",
          "The requirement that follows is precise: entity has to be an attribute of the employee record rather than a separate installation of the system. Otherwise a transfer means recreating the person, and recreating the person breaks continuity of service, which is what gratuity eligibility and leave accrual are both computed from.",
        ],
      },
      {
        heading: "Approval chains that survive contact with reality",
        body: [
          "At forty people an approval is whoever is nearest. At four hundred it is a chain, and the chain has to keep working when a link is on leave, has moved department or has left the company.",
          "Three properties do most of the work here. Routing reads the current reporting line on the record, so a request never arrives with someone who has left. A delegate can be named for a period, so approvals do not stall during a holiday. And a threshold can require a second approver — for leave beyond a number of days, or for an expense above an amount — without requiring a second approver for everything.",
          "What this replaces is the informal escalation that mid-market companies otherwise depend on, where a stuck request is resolved by walking to somebody's desk. That works until the person is in another building.",
        ],
      },
      {
        heading: "Growing without adding administrative headcount",
        body: [
          "The uncomfortable arithmetic of the mid-market is that HR administration scales roughly with headcount unless something changes, so a company that doubles adds an HR person to do the same work twice.",
          "The parts that scale linearly are the ones worth attacking: answering lookup questions, chasing documents and approvals, assembling reports, and re-keying between systems. Each of these is removed by a different mechanism — self-service, automated reminders, reporting that reads the live record, and integration by architecture rather than by export.",
          "What does not scale away is judgement: policy exceptions, grievances, appraisal calibration, difficult conversations. A useful test when evaluating an HR management system at this size is whether it reduces the first list without pretending to reduce the second.",
        ],
      },
    ],
    signals: [
      "The renewal date of the current HR or payroll tool is coming up.",
      "An acquisition or a new entity means two payrolls, two leave policies and one board asking for combined headcount.",
      "A new head of HR joins and inherits several tools and a monthly report built by hand.",
      "An appraisal cycle fails, or attrition jumps and nobody can say where it is concentrated.",
    ],
    closing:
      "Multi-entity and multi-location structures sit under a single login, with role-based permissions deciding who sees which entity. The Enterprise plan adds single sign-on and advanced security, along with succession and lifecycle modules and a dedicated success manager.",
    questions: [
      {
        q: "We have three legal entities. Is that three subscriptions?",
        a: "Multi-entity structures are supported under one login, with permissions determining who can see which entity. Payroll runs remain distinct per entity — as they must be for filing — while reporting consolidates across them.",
      },
      {
        q: "Can different locations have different leave quotas and holiday lists?",
        a: "Yes. Leave schemes and holiday calendars are configured per location and grade, which is what allows a company operating across states to be compliant in each without maintaining separate systems.",
      },
      {
        q: "How is Professional Tax handled across states?",
        a: "State-specific rule sets are configured for Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat and West Bengal, including the February slab change and gender-specific exemptions where a state provides them. Applicability follows the employee's work location on the record.",
      },
      {
        q: "Can one platform run payroll for several legal entities?",
        a: "Yes. Each entity keeps its own PF and ESI registrations, its own professional tax registrations by state, and its own payroll run and returns. What is shared is the employee record, which is what allows somebody to move between entities without being recreated.",
      },
      {
        q: "What happens to continuity of service when an employee transfers between entities?",
        a: "It is preserved, because the transfer is a dated change on the existing record rather than a new record. This matters concretely: gratuity eligibility and leave accrual are both computed from the original date of joining, and an employee who is recreated has, on paper, started again.",
      },
      {
        q: "How are approvals handled when a manager is on leave?",
        a: "A delegate can be named for a period, and routing reads the current reporting line rather than a fixed list, so requests do not stall or arrive with someone who has left. Thresholds can require a second approver for larger requests without adding one to every request.",
      },
      {
        q: "Do different locations need different leave and holiday rules?",
        a: "Usually yes, and they should have them. Holiday calendars are defined per location and attach to the employee record; leave quotas can vary by location, grade or entity. What stays common is the ledger the balances are held in, so reporting still works across the group.",
      },
    ],
  },

  {
    slug: "manufacturing",
    href: "/industries/manufacturing",
    name: "Manufacturing",
    audience: "Plants, production units and processing facilities",
    title: "The shop floor is where payroll assumptions go to die",
    standfirst:
      "Rotating shifts, night differentials, overtime, comp-off, contract labour and an ESI population that changes as wages move — a manufacturing payroll is an exceptions engine wearing a payroll's clothes.",
    image: "industry-manufacturing",
    seo: {
      title: "HR Software for Manufacturing Companies",
      description:
        "HR software for manufacturing companies in India: rotating shift management, overtime and night differentials, biometric attendance across plants, ESI and Labour Welfare Fund compliance.",
      keywords: [
        "HR software for manufacturing companies",
      ],
      focus: "HR software for manufacturing companies",
    },
    situation: [
      "In an office, attendance is close to binary: someone was in, or they were not. On a production floor almost nothing is binary. A punch at 22:40 belongs to a shift that started yesterday. A Sunday worked generates a comp-off with its own expiry. An hour past shift end may be overtime or may be a handover, depending on the rule.",
      "Because the wage base moves with overtime and allowances, ESI applicability moves too — and it does not move on the neat monthly boundary an untrained system assumes. The result in most plants is a payroll input that is assembled by hand every month by someone who knows the exceptions, which makes the whole operation dependent on that person's memory.",
    ],
    pressures: [
      {
        title: "Shifts have to be inferred, not entered",
        body: "Nobody is going to record which shift a punch belongs to. Auto shift detection from the punch timestamp, including across midnight, is the difference between a system that works on a plant and one that works in a demo.",
      },
      {
        title: "Overtime and night differentials are money, not metadata",
        body: "These are contested figures. Calculating them from the shift definition and the employee's eligibility on the record — rather than from a supervisor's tally — is what makes them defensible.",
      },
      {
        title: "ESI moves with the wage base",
        body: "The ₹21,000 gross threshold interacts with overtime and allowances, and contribution-period rules mean an employee does not simply drop out the month they cross it. Evaluating applicability monthly against the actual structure avoids both over- and under-deduction.",
      },
      {
        title: "Multiple plants rarely run identical rules",
        body: "Different sites often carry different shift patterns, grace periods and weekly offs for entirely legitimate reasons. Configuring these per location — while filing as one organisation — is the requirement.",
      },
      {
        title: "Labour Welfare Fund has its own calendar",
        body: "Half-yearly and annual LWF deductions land on state-specific dates that have nothing to do with the payroll cycle. Applying them inside the run rather than remembering them separately is the only reliable approach.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance",
        why: "Everything downstream is wrong if the shift and overtime layer is wrong. This is the foundation on a plant.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "ESI, LWF and overtime all resolve here, from the attendance ledger rather than from a supervisor's sheet.",
      },
      {
        order: "Then",
        module: "Employee Management",
        href: "/solutions/employee-management",
        why: "Statutory identifiers, certificates and their expiry dates matter more in a regulated plant environment than in an office.",
      },
      {
        order: "Then",
        module: "HR Analytics",
        href: "/solutions/hr-analytics",
        why: "Overtime expense by shift and department is usually the first number a plant head wants and the hardest to get manually.",
      },
    ],
    deepDive: [
      {
        heading: "Two workforces, one payroll run",
        body: [
          "A manufacturing company generally pays two populations under different logic. Staff are salaried monthly, largely present during fixed hours, and their pay barely varies. Workmen are on shifts, their pay moves with attendance and overtime, and a substantial share of the monthly cost is decided by what happened on the shop floor that month.",
          "The temptation is to run them as two systems, and it is usually a mistake. The statutory obligations are shared — the same PF and ESI registrations, the same returns, the same wage registers — and separating the populations means reconciling them again before every filing.",
          "What actually differs is the rules, not the machinery: different shift patterns, different overtime treatment, different attendance capture. Holding those as configuration against one payroll run is what keeps the statutory output whole.",
        ],
      },
      {
        heading: "Shift patterns, rotation and the night that crosses midnight",
        body: [
          "Continuous operations bring three problems that office attendance systems never encounter. Shifts rotate, so an individual's expected hours change week to week and the roster is the only thing that knows. Shifts cross midnight, and a system that splits them at the date boundary produces two short days and an overtime figure that is simply wrong.",
          "And weekly offs move with the rotation rather than falling on Sunday, which changes the rate at which a day's work is compensated — a day worked on a rotated weekly off is not the same as a day worked on an ordinary weekday.",
          "The design answer is to treat the shift rather than the calendar day as the unit of attendance, attribute it to the day it began, and hold the rotation as a pattern the roster generates rather than a spreadsheet somebody retypes each week.",
        ],
      },
      {
        heading: "Wage registers, muster rolls and what an inspection asks",
        body: [
          "The record-keeping obligations on a factory or covered establishment are specific and long-standing: registers of wages, attendance, overtime and leave, maintained in prescribed form and produced on demand.",
          "An inspection does not usually test the total. It tests a particular person on a particular date — why was this worker marked absent, what overtime was paid for this shift, when was this leave approved and by whom. Answering that requires the original capture, any correction, the reason and the approver, all still retrievable.",
          "This is the practical reason an attendance ledger should never be editable in place. A record that can be changed to match the answer currently needed is not evidence, and on the shop floor it is exactly the record most likely to be questioned.",
        ],
      },
    ],
    signals: [
      "Another site or branch opens, and attendance and rostering get harder with it.",
      "The overtime bill jumps without anyone having approved the extra hours.",
      "A wage dispute turns on attendance records nobody can fully stand behind.",
      "A seasonal hiring surge doubles the headcount that has to be onboarded and paid.",
    ],
    closing:
      "The biometric hardware most plants already run — eSSL, Matrix, Realtime, ZKTeco — pushes into HRMagix over a secure API or a local sync service, so the capture layer does not need replacing. What changes is what happens to the punches after they arrive.",
    questions: [
      {
        q: "Can HRMagix handle a rotating three-shift operation?",
        a: "Yes. The shift engine supports 24/7 rotating multi-shift schedules with auto shift detection based on punch timestamps, configurable grace periods, night-shift differential allowances and automatic compensatory-off credit on approved weekend or holiday work.",
      },
      {
        q: "How is overtime calculated?",
        a: "From the shift definition and the employee's overtime eligibility on their record, against the attendance ledger — then carried directly into the payroll run rather than entered again.",
      },
      {
        q: "Do different plants need different configurations?",
        a: "They can have them. Shift patterns, grace periods, weekly offs, holiday calendars and leave schemes are configured per location, while the organisation continues to report and file as one.",
      },
      {
        q: "How are night shifts that cross midnight handled?",
        a: "The shift is treated as a single unit attributed to the day it began, rather than split at the date boundary. Splitting it produces two short days and an incorrect overtime calculation, and it is the most common cause of an attendance report disagreeing with a payroll run.",
      },
      {
        q: "Can staff and workmen be paid under different rules in the same run?",
        a: "Yes, and they should be. Shift patterns, overtime treatment and attendance capture differ by population; the PF and ESI registrations, the returns and the wage registers do not. Keeping both in one run is what stops the statutory output needing reconciliation before every filing.",
      },
      {
        q: "How is overtime on a weekly off or public holiday treated differently?",
        a: "By rate, according to the rule configured for that day type. A day worked on a rotated weekly off is not compensated as an ordinary weekday, and where the employer grants compensatory time off instead, the same hours become a comp-off entitlement with an expiry rather than a payment.",
      },
      {
        q: "Can attendance be captured at a factory gate without a device per worker?",
        a: "Yes. A shared kiosk at the gate handles a shift changeover far faster than individual devices, and biometric readers remain appropriate where a controlled entry point already exists. Capture method is a property of the location, and all methods write to the same attendance ledger.",
      },
    ],
  },

  {
    slug: "it-services",
    href: "/industries/it-services",
    name: "IT & Technology",
    audience: "Product companies, services firms and delivery centres",
    title: "Distributed by default, and audited all the same",
    standfirst:
      "Technology companies were the first to abandon the assumption that work happens in one building — which makes attendance a design question, and makes goal alignment the thing that actually needs managing.",
    image: "industry-it-services",
    seo: {
      title: "HR Software for IT & Technology Companies",
      description:
        "HR software for companies in IT and technology: hybrid and remote attendance, 24/7 delivery rosters, OKR and KRA alignment, and full statutory payroll compliance.",
      keywords: [
        "HR software for companies",
      ],
    },
    situation: [
      "A technology company's HR problem is rarely capture and almost always alignment. Everyone has a laptop, everyone is reachable, and nobody is confused about whether their colleague is working. What is genuinely unclear is whether the work being done this sprint is the work that matters this quarter.",
      "Meanwhile the statutory obligations are exactly as heavy as they are in a factory, and the shift complexity can be worse — a delivery centre supporting a client in another timezone runs rosters a plant would recognise.",
    ],
    pressures: [
      {
        title: "Attendance has to mean something without meaning surveillance",
        body: "For hybrid teams the point of capture is establishing payable days and leave, not monitoring keystrokes. Browser and mobile check-in, with a geofence only where it genuinely applies — client sites, secure floors — keeps the input honest without turning it into a control mechanism.",
      },
      {
        title: "Annual appraisals do not describe quarterly work",
        body: "In a company shipping every two weeks, an annual review is a document about a year nobody remembers. Quarterly OKRs cascading from leadership to individual contributors, with live progress and confidence scores, describe the work at the cadence it actually happens.",
      },
      {
        title: "Delivery centres run genuine rosters",
        body: "Support and operations teams covering another timezone need rotating schedules, night differentials and comp-off — the same shift machinery a plant uses, applied to a floor of engineers.",
      },
      {
        title: "Growth changes the org chart faster than anywhere else",
        body: "Reporting lines, grades and compensation move constantly. Effective-dated records mean each change reaches payroll automatically and leaves the previous position intact for anyone who needs to reconstruct it.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "HRMS",
        href: "/solutions/hrms",
        why: "Because reporting lines and grades change constantly here, and everything else is configured against them.",
      },
      {
        order: "Then",
        module: "Employee Self-Service",
        href: "/solutions/ess",
        why: "A technically literate workforce will use a portal properly, and expects to.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "The statutory load is identical to any other Indian employer, and the tax-regime declaration flow matters to a well-paid workforce.",
      },
      {
        order: "Then",
        module: "HR Analytics",
        href: "/solutions/hr-analytics",
        why: "Attrition risk and tenure analysis are the numbers technology leadership asks about most often.",
      },
    ],
    deepDive: [
      {
        heading: "Billable time and payroll time are different measurements",
        body: [
          "Services companies run two clocks. One records effort against a client, a project and a rate; the other records presence against an employment contract. They are frequently confused, and they answer different questions.",
          "Timesheet data tells you what a project cost and what can be invoiced. Attendance data tells you whether somebody was at work, whether they were late, whether they took leave, and what they should be paid. An employee can bill six hours on a day they were present for nine, and both figures are correct.",
          "The mistake worth avoiding is deriving payroll from timesheets. Payroll obligations are contractual and statutory, and they follow presence and approved leave rather than utilisation. What is genuinely useful is having both readable against the same employee record, so a utilisation question and a leave question can be asked of the same person without exporting anything.",
        ],
      },
      {
        heading: "Distributed teams, and what attendance means without an office",
        body: [
          "For an IT services company the workforce is frequently split across a home office, a client site and a company floor, sometimes within the same week. Presence stops being a building and becomes a claim, which changes what an attendance management system is actually for.",
          "The useful design is to record the claim honestly rather than to police it. A geo-fenced mobile punch establishes that somebody was at the client site when they said they were, which matters for a billing dispute. A home-working day is recorded as a home-working day rather than as an absence, so it is visible in the ledger without being penalised.",
          "What this buys is a defensible record for the two moments that matter: the client asking who was on site, and the exit interview where somebody disputes their leave balance.",
        ],
      },
      {
        heading: "Attrition, notice periods and the bench",
        body: [
          "Services businesses feel attrition more sharply than most, because a resignation is simultaneously a staffing problem, a client-commitment problem and a revenue problem — and the notice period is the only window in which all three can be addressed.",
          "The administrative half of that window is the part software can carry: the resignation recorded with its date, the notice obligation computed from the contract, clearance and asset return routed to the people responsible, knowledge-transfer tasks tracked, and the final settlement assembled from the leave ledger and the payroll record rather than agreed by email.",
          "The judgement half — whether to counter-offer, how to reassign, what to tell the client — is not a software problem, and no HR platform should claim otherwise. What it can do is make sure the administrative half never becomes the reason an exit is messy.",
        ],
      },
    ],
    signals: [
      "A new contract doubles headcount in weeks, and onboarding has to keep pace with it.",
      "Contractor onboarding and exits across several clients become impossible to track by hand.",
    ],
    closing:
      "OKRs, KRAs, the 9-box talent matrix, PIPs, 1-on-1s and recognition all sit on the Growth plan alongside payroll and analytics, which is usually the right starting plan for a technology company of any size.",
    questions: [
      {
        q: "Our team is fully remote. How does attendance work?",
        a: "Through browser or mobile check-in without a geofence, unless one genuinely applies. The purpose is to establish payable days and reconcile leave, not to monitor activity.",
      },
      {
        q: "How do OKRs connect to reviews?",
        a: "Quarterly and annual OKRs cascade from leadership to individual contributors with live progress sliders, milestone weighting and confidence scores. KRAs, the 9-box talent matrix and calibration dashboards read the same data, so reviews reference the quarter rather than a separate form.",
      },
      {
        q: "Do you support single sign-on?",
        a: "SSO and advanced security ship with the Enterprise plan.",
      },
      {
        q: "Does HRMagix replace our project timesheet tool?",
        a: "No, and it should not. Timesheets measure effort against a client and a rate; attendance measures presence against an employment contract. Payroll follows presence and approved leave rather than utilisation, and deriving one from the other is a common and expensive mistake.",
      },
      {
        q: "How is attendance recorded for employees working from home or at a client site?",
        a: "A home-working day is recorded as such rather than as an absence, so it appears in the ledger without being penalised. Client-site presence can be captured with a geo-fenced mobile punch, which is what makes the record useful if a billing question arises later.",
      },
      {
        q: "How is the notice period handled when someone resigns?",
        a: "The resignation is recorded with its date, the notice obligation is computed from the contract, and clearance, asset return and knowledge-transfer tasks route to whoever is responsible for each. The final settlement is then assembled from the leave ledger and payroll record rather than negotiated by email.",
      },
      {
        q: "Can we see attrition risk by project or department?",
        a: "Analytics reports attrition-risk indicators by department, grade and location from signals the platform already holds — tenure, leave pattern, goal completion, time since last review. It is an early-warning flag intended to prompt a conversation, not a prediction of who will resign.",
      },
    ],
  },

  {
    slug: "professional-services",
    href: "/industries/professional-services",
    name: "Professional Services",
    audience: "Consultancies, agencies and firms billing client time",
    title: "When your product is time, the timesheet is the ledger",
    standfirst:
      "In a consultancy the same hour is simultaneously a payroll input and a revenue line. Capturing it once, accurately, against the right client is not administration — it is bookkeeping.",
    image: "industry-professional-services",
    seo: {
      title: "HR & Payroll Software for Professional Services Firms",
      description:
        "HRMS for consultancies and agencies: client-site attendance capture, project shift rosters, approval hierarchies by grade, and statutory payroll for a mobile professional workforce.",
      keywords: [

      ],
    },
    situation: [
      "A consulting or agency workforce is rarely in the office, and that is the point. People are at client sites, between them, or working from wherever the engagement requires. The office is an address, not a place of work.",
      "This makes the ordinary assumptions of attendance software useless. A biometric reader at reception measures nothing meaningful. At the same time, the firm genuinely needs to know where hours went — not to police anyone, but because those hours are the thing being sold.",
    ],
    pressures: [
      {
        title: "Attendance capture has to travel",
        body: "Geo-fenced mobile check-in around client sites, with location tagging, records where the work actually happened. For a mobile workforce this is the only capture method that reflects reality.",
      },
      {
        title: "Project rosters are not shifts, but they behave like them",
        body: "Engagement-specific schedules, extended hours during a delivery push, and weekend work that must generate comp-off rather than resentment — all of it needs the same rule engine a shift operation uses.",
      },
      {
        title: "Approval has to follow grade, not proximity",
        body: "When a consultant's manager is themselves at a client site, an approval chain based on who is physically around fails. Multi-level hierarchies configured by grade with escalation keep leave and regularisation moving.",
      },
      {
        title: "Progression is the retention lever",
        body: "In firms where people join to grow, career conversations are not a nicety. Structured 1-on-1s with shared agendas, running action items and a manager's own notes make progression a documented conversation rather than an annual surprise.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance",
        why: "Because a mobile workforce needs geo-tagged capture before anything else can be reconciled.",
      },
      {
        order: "Then",
        module: "Leave Management",
        href: "/solutions/leave-management",
        why: "Approval routing by grade is what stops leave stalling when managers are on site.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that the hours captured on site become the payable days in the run without re-entry.",
      },
      {
        order: "Then",
        module: "Onboarding & Lifecycle",
        href: "/solutions/onboarding",
        why: "Firms of this kind hire in cohorts, and pre-boarding is where cohort hiring either works or does not.",
      },
    ],
    deepDive: [
      {
        heading: "A firm where the partners are also the employer",
        body: [
          "Professional firms have an organisational shape that HR software rarely anticipates. Partners are owners rather than employees, and are usually paid through drawings rather than payroll. Associates and staff are employees in the ordinary sense. Articled clerks, trainees and interns are a third category with their own stipend and statutory treatment.",
          "The consequence is that a single payroll run has to accommodate populations whose relationship to the firm is legally different, and a single employee record has to be honest about which is which — because it determines PF applicability, ESI eligibility, TDS treatment and gratuity accrual.",
          "The point is not that the software decides these questions. It is that the category has to be a field on the record rather than an understanding held by the person who runs payroll, because that person eventually goes on leave.",
        ],
      },
      {
        heading: "Seasonality, and the months that are not like the others",
        body: [
          "Accounting, audit, legal and consulting firms have compressed periods where the ordinary rules of working time stop applying: statutory audit season, tax filing deadlines, a case going to hearing, a transaction closing.",
          "Two administrative facts follow. Overtime and late working concentrate into a few weeks, which makes the overtime and comp-off policy far more consequential than its usage across the year suggests. And leave becomes contested — applications cluster immediately after the peak, and a team calendar showing the overlap at the point of approval is worth more than a policy document.",
          "Where the firm compensates the peak with time off rather than payment, the comp-off entitlement and its expiry are the mechanism that decides whether that promise is honoured or quietly forgotten.",
        ],
      },
      {
        heading: "Confidentiality is a permissions problem before it is a policy problem",
        body: [
          "Professional firms hold client confidences as a professional obligation, and they hold employee confidences as an employer. The two are separate, and the second is the one HR systems are responsible for.",
          "In a small firm the practical risk is not a breach from outside. It is that salary, disciplinary records or a grievance become visible to a colleague because access was granted informally and never withdrawn — the partner's assistant who was given the payroll folder once, the manager who kept access to a team they no longer lead.",
          "Access granted by role against the record, withdrawn when the role changes, and recorded when a restricted field is opened, is what turns a confidentiality clause into something that can actually be demonstrated.",
        ],
      },
    ],
    signals: [
      "A client disputes the hours billed, and the timesheets cannot settle it.",
      "Utilisation is being estimated rather than measured.",
    ],
    closing:
      "Everything here runs from the same employee record and the same attendance ledger — which is what allows a firm whose people are almost never in one place to still close a month on time.",
    questions: [
      {
        q: "Can we capture attendance at client sites?",
        a: "Yes. GPS geofences can be configured around client sites and branch locations as well as your own offices, with location tagging and optional selfie validation on mobile check-in.",
      },
      {
        q: "How do approvals work when managers are travelling?",
        a: "Approval hierarchies are configured by grade with escalation, and notifications go by email and push — so a request routes onward rather than sitting with someone who is unreachable.",
      },
      {
        q: "Do you track billable hours against clients?",
        a: "HRMagix captures attendance and location, including project-specific rosters and overtime. It is not a billing or invoicing system, and does not claim to be one — what it provides is the accurate time record that billing depends on.",
      },
      {
        q: "How are partners, employees and articled trainees handled differently?",
        a: "As distinct categories on the employee record, because the category determines PF applicability, ESI eligibility, TDS treatment and gratuity accrual. Partners paid through drawings sit outside payroll; trainees on a stipend have their own treatment. The important thing is that the distinction is a recorded field rather than knowledge held by whoever runs payroll.",
      },
      {
        q: "How do we manage leave during audit or filing season?",
        a: "Through the team calendar at the point of approval rather than through policy alone. Applications cluster immediately after a peak, and an approver seeing the overlap while deciding is making a staffing decision rather than approving four requests in sequence. Blackout or restricted periods can be configured where the firm needs them.",
      },
      {
        q: "Can we compensate peak-season overtime with time off instead of payment?",
        a: "Yes. Compensatory off is earned from the attendance ledger — a day worked that was not a working day — and carries the expiry the policy sets, so it lapses on a date rather than when someone forgets. That expiry is usually what determines whether the promise is honoured.",
      },
      {
        q: "How do we stop salary and disciplinary records being visible to the wrong colleague?",
        a: "Access is granted by role against the record rather than informally, and it changes when the role changes. Views of restricted fields are recorded. In small firms the realistic risk is not an external breach but access that was granted once for a reason and never withdrawn.",
      },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

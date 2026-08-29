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
  seo: { title: string; description: string; keywords: string[] };
  /** The situation, in that reader's own terms. */
  situation: string[];
  /** The specific pressures, each with a real explanation rather than a label. */
  pressures: { title: string; body: string }[];
  /** What this reader should switch on first, and why that order. */
  priority: { order: string; module: string; href: string; why: string }[];
  /** A closing argument written for this reader alone. */
  closing: string;
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
        "HRMS and payroll software for Indian startups: statutory compliance from your first employee, leave and attendance policy that scales, and self-service that keeps founders out of HR admin.",
      keywords: [
        "HR software for startups",
        "payroll software for startups",
        "HRMS for small business",
        "HR automation software",
      ],
    },
    situation: [
      "At fifteen people, HR is a founder answering questions in a chat window. It works, and it works precisely because everyone can see everyone. The failure mode arrives quietly at around forty, when the first person asks a question whose answer was previously improvised — how much notice do I owe, does a Friday off cost me two days, when does my leave reset — and discovers that the answer depends on who they asked and when.",
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
        "HR and payroll software for small businesses in India: correct PF, ESI and Professional Tax every month, simple leave and attendance, payslips and records — without an HR department.",
      keywords: [
        "HR software for small business",
        "HRMS for small business",
        "payroll software for SMEs",
        "employee payroll system",
      ],
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
      title: "HRMS & Payroll Software for SMEs and Growing Companies",
      description:
        "HRMS for multi-branch, multi-state Indian SMEs: one employee record across entities and locations, state-specific Professional Tax and leave rules, and consolidated workforce reporting.",
      keywords: [
        "payroll software for SMEs",
        "HR software for companies",
        "HRMS for 100 employees company",
        "HR management system",
        "employee management system",
      ],
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
        "HRMS and payroll for Indian manufacturing: rotating shift management, overtime and night differentials, biometric attendance across plants, ESI and Labour Welfare Fund compliance.",
      keywords: [
        "HR software for manufacturing companies",
        "attendance management system",
        "biometric attendance system software",
        "payroll management system",
      ],
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
        "HRMS and payroll for Indian IT and technology companies: hybrid and remote attendance, 24/7 delivery rosters, OKR and KRA alignment, and full statutory payroll compliance.",
      keywords: [
        "HR platform for companies",
        "cloud HR software",
        "HR SaaS platform",
        "HRMS tools for companies",
        "employee self service portal",
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
        "HR software for companies",
        "attendance tracking software",
        "HR management system",
        "employee attendance software",
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
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

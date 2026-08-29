/**
 * Resources, careers, press and partners.
 *
 * A NOTE ON SOURCING, BECAUSE IT CONSTRAINS EVERY FILE IN THIS DIRECTORY.
 *
 * hrmagix.com is a single-page site. It publishes the product, the twelve
 * modules, three pricing tiers, contact details and a set of customer voices —
 * and nothing else. There is no published careers page, no partner programme,
 * no press release archive, no analyst coverage, no certification list, no
 * funding announcement and no library of downloadable papers.
 *
 * So the pages built on this file do two things and refuse to do a third:
 *
 *   1. They present what HRMagix genuinely has — the product, the statutory
 *      engine, the brand assets, the contact channel in Pune.
 *   2. Where the company has not published something, they say so plainly and
 *      give the reader the real route instead.
 *   3. They do not invent openings, partner tiers, commission structures,
 *      award mentions, customer logos, download counts or press coverage.
 *
 * The white papers below are therefore published as web briefings — the text is
 * on this site, readable without a form — rather than as gated PDFs that do not
 * exist.
 */

/* ------------------------------------------------------------------ */
/* White papers                                                        */
/* ------------------------------------------------------------------ */

export type WhitePaper = {
  slug: string;
  number: string;
  title: string;
  /** Who this is written for, stated bluntly. */
  reader: string;
  /** Two paragraphs of genuine abstract, not marketing. */
  abstract: string[];
  /** The argument, section by section. */
  contents: { heading: string; summary: string }[];
  /** Where the full treatment of this subject lives on the site. */
  readOn: { label: string; href: string }[];
  minutes: number;
};

export const whitePapers: WhitePaper[] = [
  {
    slug: "chain-of-custody",
    number: "01",
    title: "Payroll as a chain of custody",
    reader: "Finance and payroll leads who close a monthly cutoff in India",
    abstract: [
      "The time an Indian payroll takes is almost never spent on arithmetic. It is spent establishing what happened — reconciling a biometric log against leave applications, comp-offs, regularisations and a manager's recollection — before a single calculation can begin.",
      "This briefing sets out payroll as a sequence of eight custody handovers rather than a computation, identifies which of the eight can be eliminated entirely by integration, and specifies exactly what each statutory head requires as input and produces as output.",
    ],
    contents: [
      { heading: "Why establishing payable days costs more than calculating pay", summary: "The four sources of truth that disagree, and why they disagree." },
      { heading: "The eight handovers of a monthly run", summary: "From attendance close to filing, with the four that require no human step." },
      { heading: "Statutory heads as rules, not columns", summary: "EPF ceiling, ESI threshold and contribution periods, state PT, LWF cycles, Section 192." },
      { heading: "What has to leave the building", summary: "ECR file, ESIC return, PT working, Form 24Q, bank batch file, payslips." },
      { heading: "Reconstructing a run six months later", summary: "Why effective-dating the salary structure is what makes a payroll auditable." },
    ],
    readOn: [
      { label: "Payroll", href: "/solutions/payroll" },
      { label: "Salary & compliance calculators", href: "/resources/calculator" },
    ],
    minutes: 11,
  },
  {
    slug: "state-by-state",
    number: "02",
    title: "One company, several compliance positions",
    reader: "HR and finance leaders in multi-branch, multi-state businesses",
    abstract: [
      "A business with offices in three states experiences itself as one organisation and is treated by statute as several. Professional Tax is a state subject. Leave entitlements sit under state Shops and Establishments Acts. Labour Welfare Fund runs on state calendars that ignore your payroll cycle.",
      "This briefing works through where state divergence actually bites in a mid-market Indian company, and sets out the configuration model — per-entity, per-location, per-grade — that lets consolidated reporting and correct state-level filing coexist rather than compete.",
    ],
    contents: [
      { heading: "The three axes: entity, location, grade", summary: "What belongs on each, and what breaks when they are collapsed." },
      { heading: "Professional Tax across seven states", summary: "Slabs, the February treatment in Maharashtra, gender-specific exemptions." },
      { heading: "Leave under state establishment law", summary: "Why a single national leave scheme is usually non-compliant somewhere." },
      { heading: "Labour Welfare Fund calendars", summary: "Half-yearly and annual cycles, and why they are missed." },
      { heading: "Consolidated view, distinct filings", summary: "Reporting across entities without merging the runs that must stay separate." },
    ],
    readOn: [
      { label: "SMEs", href: "/industries/smes" },
      { label: "Payroll", href: "/solutions/payroll" },
    ],
    minutes: 9,
  },
  {
    slug: "exceptions-engine",
    number: "03",
    title: "The shop floor is an exceptions engine",
    reader: "Plant heads, HR managers and payroll teams in manufacturing",
    abstract: [
      "Office attendance is close to binary. Production attendance is not: a punch at 22:40 belongs to yesterday's shift, a Sunday worked creates a comp-off with an expiry, and an hour past shift end is either overtime or a handover depending on a rule nobody wrote down.",
      "This briefing catalogues the exceptions a manufacturing payroll actually produces, and shows how each becomes a configured rule rather than a monthly manual adjustment — including the interaction between overtime, the moving wage base and ESI applicability.",
    ],
    contents: [
      { heading: "Auto shift detection across midnight", summary: "Inferring the shift from the timestamp instead of asking anyone." },
      { heading: "Overtime and night differentials as contested figures", summary: "Making them defensible by deriving them from the shift definition." },
      { heading: "ESI and a wage base that moves", summary: "The ₹21,000 threshold, contribution periods, and why a naive monthly test is wrong." },
      { heading: "Comp-off with expiry and consumption rules", summary: "Turning goodwill into a tracked entitlement." },
      { heading: "Three plants, three rule sets, one filing", summary: "Per-location configuration under a single organisation." },
    ],
    readOn: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Attendance & Shifts", href: "/solutions/attendance" },
    ],
    minutes: 10,
  },
  {
    slug: "policy-vacuum",
    number: "04",
    title: "The policy vacuum, and how it closes",
    reader: "Founders and first HR hires between ten and a hundred people",
    abstract: [
      "Early-stage companies do not fail at HR because their tools are poor. They fail because nothing has been decided, and every undecided rule becomes a precedent the first time somebody asks a question the founder answers generously.",
      "This briefing sets out the minimum set of written positions a growing Indian company needs — statutory registrations, leave scheme, notice period, probation, work-from-home — the order to decide them in, and how policy acknowledgement turns a document into an obligation both sides can rely on.",
    ],
    contents: [
      { heading: "The questions that become precedents", summary: "Leave, notice, probation, remote work, and the improvised answers that stick." },
      { heading: "Statutory obligations start earlier than founders expect", summary: "EPF, ESI, PT registration and Section 192 from employee one." },
      { heading: "Writing a leave scheme you can live with", summary: "Accrual, carry-forward, the sandwich rule, and applying it identically." },
      { heading: "Acknowledgement as evidence", summary: "Per employee, per policy version — and what happens when the text changes." },
      { heading: "What to leave undecided", summary: "The policies a fifty-person company genuinely does not need yet." },
    ],
    readOn: [
      { label: "Startups", href: "/industries/startups" },
      { label: "Workplace Policy Library", href: "/policy/workplace-policies" },
    ],
    minutes: 8,
  },
  {
    slug: "self-service-arithmetic",
    number: "05",
    title: "The arithmetic of self-service",
    reader: "HR leaders deciding whether an ESS rollout is worth the change management",
    abstract: [
      "Most of what an HR team is asked in a week requires access rather than judgement: a balance, a payslip, a UAN, the status of a regularisation. Each is a two-minute answer, which is exactly why the cost of answering them is invisible.",
      "This briefing separates the HR requests that are genuinely lookups from the ones that need a person, and works through what changes when the first category moves behind the employee's own login — on a desktop for office staff and on a phone for everybody else.",
    ],
    contents: [
      { heading: "Sorting requests into lookups and judgements", summary: "A simple audit any HR team can run over one week of its own inbox." },
      { heading: "What an employee can finish alone", summary: "Leave, balances, regularisation, payslips, documents, declarations." },
      { heading: "The manager's half of the portal", summary: "Approvals, presence, 1-on-1s and goal updates in the same place." },
      { heading: "Mobile is not the secondary channel", summary: "Field staff, operators and drivers for whom the phone is the only channel." },
      { heading: "Year-end without a queue", summary: "Regime comparison, declarations, proof upload and Form 16 Part B." },
    ],
    readOn: [
      { label: "Employee Self-Service", href: "/solutions/ess" },
      { label: "Employee Management", href: "/solutions/employee-management" },
    ],
    minutes: 7,
  },
];

export const paperBySlug = (slug: string) => whitePapers.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

/**
 * HRMagix does not publish a vacancy list. Rather than inventing roles, this
 * page describes honestly what the company is, how someone would approach it,
 * and what the work involves — which is all genuinely derivable from the
 * product and the published company information.
 */
export const careers = {
  standfirst:
    "HRMagix does not currently publish a list of open roles. What follows is an honest account of what the company builds, where it builds it, and how to approach us — rather than a vacancy page with nothing behind it.",
  situation: [
    "HRMagix builds people-operations software for Indian companies, from Pune and Mumbai. The product is a single platform of twelve modules — attendance, leave, payroll, OKRs, KRAs and the 9-box, PIPs, recognition, 1-on-1s, onboarding, documents, succession and analytics — sitting on one employee record.",
    "That description matters for anyone considering working here, because it determines the nature of the work. Building payroll for India is not a design problem with a compliance appendix. It is a compliance problem that has to be expressed as software: the EPF wage ceiling, the ESI contribution period, seven states' Professional Tax slabs, the February treatment in Maharashtra, the Payment of Gratuity Act formula. Correctness is not a quality attribute here. It is the product.",
  ],
  whatTheWorkIs: [
    {
      title: "Statutory correctness, expressed as configuration",
      body: "Most of the hard thinking on this product is about turning a provision of law into a rule that can be evaluated monthly against a versioned employee record — and doing it in a way that a customer's HR team can configure without an implementation project.",
    },
    {
      title: "Software people use on their worst day",
      body: "HR software is used at cutoff, at exit, at an inspection — moments where the user is under time pressure and the cost of an error is real money or a real dispute. That shapes every interface decision differently from software used casually.",
    },
    {
      title: "A workforce that is not at a desk",
      body: "A large part of the people this product serves are on a plant floor, at a client site or in a delivery van. Anything that only works well on a laptop only works for a minority of the users.",
    },
    {
      title: "Support that runs on someone else's calendar",
      body: "Customer conversations cluster around monthly payroll cutoffs and the annual tax cycle. Support here is WhatsApp, phone and email with the product specialists in Pune — not a ticket queue with an SLA and no context.",
    },
  ],
  howToApply: [
    "There is no application portal and no job board listing to respond to. Write to the team directly, tell us what you would want to work on and what you have built before, and attach whatever best represents your work.",
    "If there is a fit, the conversation continues with the people you would actually work with. If there is not, we will say so rather than leave it open.",
  ],
  honesty: {
    heading: "What this page deliberately does not claim",
    points: [
      "No open positions are listed, because none have been published.",
      "No headcount, funding stage, growth figure or hiring target is stated, because HRMagix has not published one.",
      "No awards, rankings or workplace certifications are claimed.",
      "Compensation bands and benefit lists are not published here; they are discussed in the conversation itself.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Press kit                                                           */
/* ------------------------------------------------------------------ */

export const pressKit = {
  standfirst:
    "Everything a journalist, analyst or partner needs to describe HRMagix accurately — the name, the mark, the colours, the product description and the wording we would like used.",
  boilerplate: {
    short:
      "HRMagix is a people-operations platform for Indian companies, combining attendance, leave, payroll, performance and employee lifecycle management in a single workspace with Indian statutory compliance built in.",
    long:
      "HRMagix is an HRMS and payroll platform built for Indian companies. Twelve integrated modules — attendance and shifts, leaves and holidays, payroll, objectives and OKRs, KRAs and the 9-box, PIPs, recognition, 1-on-1s, onboarding, documents, succession and analytics — read from a single versioned employee record, so attendance flows into loss of pay, loss of pay flows into payroll, and statutory deductions for EPF, ESI, Professional Tax and TDS under Section 192 are derived rather than entered. HRMagix is based in Pune and Mumbai, Maharashtra.",
  },
  naming: [
    { rule: "Write it HRMagix", detail: "One word, capital H, capital R, capital M. Not HR Magix, HRmagix or HR-Magix." },
    { rule: "No article", detail: "\"HRMagix announced\", not \"The HRMagix announced\"." },
    { rule: "Describe the category as HRMS and payroll", detail: "Not as an HRIS, an ATS or a workforce-management suite — it is neither an applicant tracking system nor a billing platform." },
    { rule: "Do not attribute certifications", detail: "HRMagix has not published ISO, SOC or similar certifications of its own. Statements about hosting providers should be attributed to those providers." },
  ],
  colours: [
    { name: "Brand violet", hex: "#7150F0", use: "Primary actions, links, the accent in the wordmark." },
    { name: "Deep violet", hex: "#5A36D6", use: "Hover and pressed states, emphasis text on light grounds." },
    { name: "Violet ink", hex: "#160B3A", use: "Headings on light backgrounds; the base of dark panels." },
    { name: "Wash", hex: "#F7F5FF", use: "Section grounds and quiet surfaces." },
    { name: "Canvas dark", hex: "#080716", use: "The dark-theme page ground." },
  ],
  assets: [
    {
      name: "HRMagix product mark",
      file: "/hrmagix-mark.svg",
      detail: "The square mark, as published by HRMagix. Vector, scales to any size. Do not recolour, rotate or add effects.",
    },
    {
      name: "Favicon",
      file: "/favicon.svg",
      detail: "The mark at small sizes, for browser tabs and app icons.",
    },
  ],
  usage: [
    "Keep clear space around the mark equal to at least half its width.",
    "Place the mark on white, on the wash tone, or on the deep violet ground. Avoid busy photographs.",
    "Do not stretch, skew, outline, add a drop shadow to, or animate the mark.",
    "Do not lock the mark up with another company's logo without asking first.",
  ],
  facts: [
    { label: "Category", value: "HRMS and payroll software" },
    { label: "Built for", value: "Companies operating in India" },
    { label: "Modules", value: "Twelve, on one employee record" },
    { label: "Locations", value: "Pune and Mumbai, Maharashtra, India" },
    { label: "Product access", value: "app.hrmagix.com" },
    { label: "Plans", value: "Starter, Growth and Enterprise, priced per employee per month" },
  ],
  notPublished: [
    "Founding date, headcount and funding history",
    "Named customer references beyond the testimonials published on hrmagix.com",
    "Awards, analyst rankings and industry certifications",
    "Revenue, ARR or growth figures",
  ],
};

/* ------------------------------------------------------------------ */
/* Media room                                                          */
/* ------------------------------------------------------------------ */

export const mediaRoom = {
  standfirst:
    "A working reference for anyone writing about HRMagix, covering what the product does, which claims can be attributed to us, and who to ask when something here is not enough.",
  attributable: [
    {
      claim: "HRMagix is a single platform of twelve integrated modules on one employee record.",
      basis: "Published on hrmagix.com and reflected throughout this site.",
    },
    {
      claim: "Statutory deductions for EPF, ESI, Professional Tax, LWF and TDS under Section 192 are calculated within the payroll run, producing ECR, ESIC return, PT working, Form 24Q and Form 16 Part B output.",
      basis: "Product capability, described in full on the payroll page.",
    },
    {
      claim: "HRMagix integrates with eSSL, Matrix, Realtime and ZKTeco biometric hardware over a secure API push or local sync service.",
      basis: "Product capability, described on the attendance page.",
    },
    {
      claim: "Pricing is published per employee per month across three plans, with a fourteen-day trial and no setup fee.",
      basis: "Published pricing.",
    },
    {
      claim: "HRMagix operates from Pune and Mumbai, Maharashtra.",
      basis: "Published contact information.",
    },
  ],
  notAttributable: [
    "Market share, category leadership or competitive comparisons.",
    "Certification claims about HRMagix itself, as distinct from its hosting providers.",
    "Customer names, logos or outcomes beyond the testimonials published on hrmagix.com.",
    "Headcount, funding, revenue or growth figures.",
  ],
  interviews: [
    "Product and compliance questions are best directed to the team in Pune, who can speak to how a specific statutory head is implemented.",
    "For anything requiring a named spokesperson or a quotation for publication, write ahead of your deadline so the right person can respond properly.",
  ],
};

/* ------------------------------------------------------------------ */
/* Partners and vendors                                                */
/* ------------------------------------------------------------------ */

/**
 * HRMagix publishes no partner programme. This page therefore describes the
 * three genuine working relationships the company has, states plainly that
 * there is no tiered programme to join, and routes enquiries to the real
 * channel. No commission structure, tier list, badge or partner count is
 * invented here.
 */
export const vendor = {
  standfirst:
    "HRMagix does not operate a published partner programme with tiers, badges or commission schedules. It does work with implementation consultants, accounting firms and suppliers — and this page explains how, honestly.",
  position: [
    "It is common for a software company of this kind to publish a partner programme long before it has one. We would rather describe the relationships that actually exist.",
    "There are three of them, and each is arranged individually rather than through a portal. If one of them describes you, the fastest route is a direct conversation with the team in Pune.",
  ],
  relationships: [
    {
      title: "Accounting and compliance firms",
      body: "Many HRMagix customers arrive with an accountant or a compliance consultant already handling their filings. That relationship does not end when a company adopts the platform — it changes shape. The payroll run produces the ECR file, the ESIC contribution return, the state Professional Tax working and Form 24Q, which the firm reviews and files rather than assembles from scratch.",
      forWhom: "Chartered accountants, payroll bureaus and labour-law consultants advising Indian employers.",
    },
    {
      title: "Implementation and HR consultants",
      body: "Configuration is the substance of an HRMagix rollout: leave schemes, shift patterns, approval hierarchies, salary structures and statutory applicability per location. Consultants who already do this work for their clients can do it inside the platform, with support from our specialists during the first cutoff.",
      forWhom: "HR consultants and systems implementers working with Indian mid-market companies.",
    },
    {
      title: "Hardware and infrastructure suppliers",
      body: "HRMagix integrates with biometric attendance hardware from eSSL, Matrix, Realtime and ZKTeco. Suppliers and installers of that hardware routinely encounter customers who have good capture and no system behind it.",
      forWhom: "Biometric hardware vendors, resellers and installers.",
    },
  ],
  procurement: [
    "If you are a supplier approaching HRMagix rather than a partner working with our customers, write with a specific proposal rather than a capability deck. Include what you supply, who you already supply it to, and your commercial terms.",
    "We do not run an open vendor registration portal, and we do not maintain a pre-qualified supplier list that can be joined by submitting a form.",
  ],
  honesty: {
    heading: "What is deliberately absent from this page",
    points: [
      "No partner tiers, levels or badges, because none exist.",
      "No commission, margin or revenue-share schedule, because none is published.",
      "No partner directory or partner count.",
      "No co-marketing, MDF or certification programme.",
    ],
  },
};

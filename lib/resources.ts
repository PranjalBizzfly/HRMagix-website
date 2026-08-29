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
 * White papers live in `lib/papers.ts` with their full document bodies. They are
 * published as readable web documents — the text is on this site, without a
 * form in front of it — rather than as gated PDFs that do not exist.
 */

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
  /**
   * Verified open roles. HRMagix publishes no vacancy list, so this is empty
   * and the page renders its empty state rather than inventing positions.
   *
   * To publish a role, add an entry here — the listing, the detail page at
   * /company/careers/<slug> and the application form all follow automatically.
   * Every field must come from a real, approved requisition.
   */
  openings: [] as {
    slug: string;
    title: string;
    team: string;
    location: string;
    type: string;
    summary: string;
    responsibilities: string[];
    looking: string[];
  }[],
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
  /** Routes an enquiry to the right relationship without inventing a programme. */
  enquiryKinds: [
    "Accounting or compliance firm advising Indian employers",
    "HR or implementation consultant working with mid-market companies",
    "Biometric hardware vendor, reseller or installer",
    "Supplier with a proposal for HRMagix itself",
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

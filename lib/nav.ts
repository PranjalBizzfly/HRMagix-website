/**
 * Information architecture.
 *
 * The header stays deliberately short — five items — and depth lives inside the
 * panels rather than on the bar. Every entry below resolves to a real page with
 * its own URL, its own metadata and its own content. Nothing here is an anchor
 * link into the homepage.
 */

export type NavLink = {
  label: string;
  href: string;
  /** One line of orientation, shown in the mega-menu and on hub pages. */
  note: string;
};

export type NavColumn = {
  heading: string;
  /** Sub-line under the column heading inside the panel. */
  blurb?: string;
  links: NavLink[];
};

export type NavSection = {
  label: string;
  href: string;
  columns: NavColumn[];
  /** The panel's closing note — a link out, phrased as a sentence. */
  footer?: { label: string; href: string; note: string };
};

export const solutionsNav: NavColumn[] = [
  {
    heading: "Core HR",
    blurb: "The employee record and the workflows built on top of it.",
    links: [
      {
        label: "Features",
        href: "/features",
        note: "All twelve modules, each with its own page",
      },
      {
        label: "HRMS",
        href: "/solutions/hrms",
        note: "The single employee record twelve modules read from",
      },
      {
        label: "Employee Management",
        href: "/solutions/employee-management",
        note: "Directory, documents, org structure and lifecycle",
      },
      {
        label: "Onboarding & Lifecycle",
        href: "/solutions/onboarding-and-lifecycle",
        note: "Pre-boarding through confirmation, transfer and exit",
      },
      {
        label: "Employee Self-Service",
        href: "/solutions/employee-self-service",
        note: "The portal and app employees actually log in to",
      },
    ],
  },
  {
    heading: "Time & Pay",
    blurb: "Hours in, salary out, with the statutory work done in between.",
    links: [
      {
        label: "Payroll",
        href: "/solutions/payroll",
        note: "EPF, ESI, PT, TDS and a bank file, in one run",
      },
      {
        label: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        note: "Biometric, mobile and geo-fenced capture",
      },
      {
        label: "Leave Management",
        href: "/solutions/leave-management",
        note: "Accruals, approvals and a calendar people trust",
      },
      {
        label: "HR Analytics",
        href: "/solutions/hr-analytics",
        note: "Headcount, attrition, overtime and payroll cost",
      },
      {
        label: "Performance & OKRs",
        href: "/solutions/performance-and-okrs",
        note: "Objectives, KRAs, 9-box, PIPs, 1-on-1s and recognition",
      },
      {
        label: "Compliance",
        href: "/solutions/compliance",
        note: "EPF, ESI, PT, LWF and TDS, derived inside the run",
      },
    ],
  },
];

export const industriesNav: NavColumn[] = [
  {
    heading: "By company size",
    links: [
      {
        label: "Startups",
        href: "/industries/startups",
        note: "First ten hires to first hundred",
      },
      {
        label: "Small Business",
        href: "/industries/small-business",
        note: "One location, one payroll, no HR department",
      },
      {
        label: "SMEs",
        href: "/industries/smes",
        note: "Multi-branch, multi-state, one set of books",
      },
    ],
  },
  {
    heading: "By sector",
    links: [
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        note: "Shifts, overtime, ESI and contract labour",
      },
      {
        label: "IT & Technology",
        href: "/industries/it-and-technology",
        note: "Distributed teams, OKRs and 24/7 rosters",
      },
      {
        label: "Professional Services",
        href: "/industries/professional-services",
        note: "Billable time, client sites and utilisation",
      },
    ],
  },
];

export const resourcesNav: NavColumn[] = [
  {
    heading: "Read",
    blurb: "Writing on Indian payroll and people operations, none of it behind a form.",
    links: [
      {
        label: "Insights",
        href: "/insights",
        note: "Insights on payroll, attendance, leave and lifecycle",
      },
      {
        label: "White Papers",
        href: "/resources/white-papers",
        note: "Technical briefings, readable in full on the site",
      },
      {
        label: "HR Guides",
        href: "/resources/hr-guides",
        note: "Chaptered, practical guides that end in a checklist",
      },
      {
        label: "HR Topics",
        href: "/hr/topics",
        note: "Practical guides to every area of HR and payroll",
      },
      {
        label: "HR & Payroll Glossary",
        href: "/resources/hr-and-payroll-glossary",
        note: "Indian HR and payroll terms, defined plainly",
      },
    ],
  },
  {
    heading: "Use",
    blurb: "Tools that compute rather than estimate.",
    links: [
      {
        label: "Calculator",
        href: "/resources/calculator",
        note: "Salary, PF, ESI, gratuity and payroll cost",
      },
      {
        label: "Questions & Answers",
        href: "/resources/questions-and-answers",
        note: "Everything asked before a first demo",
      },
      {
        label: "Payroll Resources",
        href: "/resources/payroll-resources",
        note: "Payroll material indexed by what you are trying to do",
      },
      {
        label: "HRMS Comparison",
        href: "/resources/hrms-comparison",
        note: "Spreadsheets, point tools or one integrated system",
      },
      {
        label: "Media Room",
        href: "/resources/media-room",
        note: "Company facts, coverage guidance and contacts",
      },
    ],
  },
];

export const companyNav: NavColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About HRMagix", href: "/company/about-hrmagix", note: "What HRMagix is, and what it is not" },
      { label: "Careers", href: "/company/careers", note: "How we hire, and what is open" },
      { label: "Press Kit", href: "/company/press-kit", note: "Name, mark, colours and boilerplate" },
      { label: "Contact HRMagix", href: "/company/contact-hrmagix", note: "Talk to the team in Pune" },
    ],
  },
  {
    heading: "Working with us",
    links: [
      { label: "Partners & Vendors", href: "/partners-and-vendors", note: "How we work with consultants and suppliers" },
      { label: "Pricing", href: "/pricing", note: "Three published plans, per employee, per month" },
      { label: "Policy Centre", href: "/policy-centre", note: "Privacy, terms, security and HR policy library" },
    ],
  },
];

export const policyNav: NavLink[] = [
  { label: "Policy Centre", href: "/policy-centre", note: "Everything legal and procedural in one place" },
  { label: "Privacy Policy", href: "/policy-centre/privacy-policy", note: "What we hold, why, and for how long" },
  { label: "Terms of Service", href: "/policy-centre/terms-of-service", note: "The agreement behind a subscription" },
  { label: "Security", href: "/policy-centre/security", note: "Hosting, encryption, access and backups" },
  { label: "Cookie Policy", href: "/policy-centre/cookie-policy", note: "What this website stores in your browser" },
  {
    label: "Workplace Policy Library",
    href: "/policy-centre/workplace-policy-library",
    note: "The twenty-five HR policies HRMagix ships as templates",
  },
];

/** The header. Five entries, and nothing else. */
export const primaryNav: NavSection[] = [
  {
    label: "Solutions",
    href: "/solutions",
    columns: solutionsNav,
    footer: {
      label: "See how the twelve modules fit together",
      href: "/solutions",
      note: "One workspace, one employee record, twelve workflows.",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: industriesNav,
    footer: {
      label: "Compare every sector",
      href: "/industries",
      note: "The same platform, configured to how your workforce is actually paid.",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    columns: resourcesNav,
    footer: {
      label: "Browse the full resource centre",
      href: "/resources",
      note: "Papers, calculators and answers, free, no form in front of them.",
    },
  },
  {
    label: "Company",
    href: "/company/about-hrmagix",
    columns: companyNav,
    footer: {
      label: "Read the policy centre",
      href: "/policy-centre",
      note: "Privacy, terms, security and the workplace policy library.",
    },
  },
];

/** Flat list of every route, used by the footer sitemap and the audit script. */
export const allRoutes: string[] = [
  "/",
  "/solutions",
  ...solutionsNav.flatMap((c) => c.links.map((l) => l.href)),
  "/industries",
  ...industriesNav.flatMap((c) => c.links.map((l) => l.href)),
  "/resources",
  "/insights",
  ...resourcesNav.flatMap((c) => c.links.map((l) => l.href)),
  "/company/about-hrmagix",
  "/company/careers",
  "/company/press-kit",
  "/company/contact-hrmagix",
  "/partners-and-vendors",
  "/pricing",
  "/how-setup-works",
  ...policyNav.map((l) => l.href),
];

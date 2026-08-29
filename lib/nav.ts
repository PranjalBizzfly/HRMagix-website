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
        href: "/solutions/onboarding",
        note: "Pre-boarding through confirmation, transfer and exit",
      },
      {
        label: "Employee Self-Service",
        href: "/solutions/ess",
        note: "The portal and app employees actually log in to",
      },
    ],
  },
  {
    heading: "Time & Pay",
    blurb: "Hours in, salary out — with the statutory work done in between.",
    links: [
      {
        label: "Payroll",
        href: "/solutions/payroll",
        note: "EPF, ESI, PT, TDS and a bank file, in one run",
      },
      {
        label: "Attendance & Shifts",
        href: "/solutions/attendance",
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
        href: "/industries/it-services",
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
    links: [
      {
        label: "White Papers",
        href: "/resources/white-papers",
        note: "Long-form guides to Indian payroll and people ops",
      },
      {
        label: "Media Room",
        href: "/resources/media",
        note: "Company facts, coverage guidance and contacts",
      },
    ],
  },
  {
    heading: "Use",
    links: [
      {
        label: "Salary & Compliance Calculators",
        href: "/resources/calculator",
        note: "CTC breakup, EPF, ESI, gratuity and plan cost",
      },
      {
        label: "Questions & Answers",
        href: "/resources/faqs",
        note: "Everything asked before a first demo",
      },
    ],
  },
];

export const companyNav: NavColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about", note: "What HRMagix is, and what it is not" },
      { label: "Careers", href: "/company/careers", note: "How we hire, and what is open" },
      { label: "Press Kit", href: "/company/press-kit", note: "Name, mark, colours and boilerplate" },
      { label: "Contact", href: "/company/contact", note: "Talk to the team in Pune" },
    ],
  },
  {
    heading: "Working with us",
    links: [
      { label: "Partners & Vendors", href: "/vendor", note: "Implementation, referral and supplier terms" },
      { label: "Pricing", href: "/pricing", note: "Three published plans, per employee, per month" },
      { label: "Policy Centre", href: "/policy", note: "Privacy, terms, security and HR policy library" },
    ],
  },
];

export const policyNav: NavLink[] = [
  { label: "Policy Centre", href: "/policy", note: "Everything legal and procedural in one place" },
  { label: "Privacy Policy", href: "/policy/privacy", note: "What we hold, why, and for how long" },
  { label: "Terms of Service", href: "/policy/terms", note: "The agreement behind a subscription" },
  { label: "Security", href: "/policy/security", note: "Hosting, encryption, access and backups" },
  { label: "Cookies", href: "/policy/cookies", note: "What this website stores in your browser" },
  {
    label: "Workplace Policy Library",
    href: "/policy/workplace-policies",
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
      note: "Papers, calculators and answers — free, no form in front of them.",
    },
  },
  {
    label: "Company",
    href: "/company/about",
    columns: companyNav,
    footer: {
      label: "Read the policy centre",
      href: "/policy",
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
  ...resourcesNav.flatMap((c) => c.links.map((l) => l.href)),
  "/company/about",
  "/company/careers",
  "/company/press-kit",
  "/company/contact",
  "/vendor",
  "/pricing",
  "/how-it-works",
  ...policyNav.map((l) => l.href),
];

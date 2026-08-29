import type { IconName } from "@/components/icons";

/**
 * Single source of truth for HRMagix site copy.
 * Every value here comes from hrmagix.com — nothing is invented.
 */

export const site = {
  name: "HRMagix",
  tagline: "Modern People Operations for India's Growing Enterprises",
  hero: {
    eyebrow: "All-in-one HR platform · Built for India · v2.0",
    title: ["Smart People Operations for", "India's growing teams."],
    lede: "Attendance, multi-state payroll, statutory compliance, OKRs, and employee recognition — unified in one seamless workspace engineered for Indian businesses.",
    pillars: [
      ["100% Indian", "Statutory Compliance"],
      ["12 Integrated", "Workflows"],
      ["Zero-Code", "Policy Engine"],
    ],
  },
  proof: {
    seats: "9k+",
    companies: "120+ Indian enterprises",
    trustline: "Loved by 120+ companies",
    avatars: [
      "/media/portrait-meera.jpg",
      "/media/portrait-vikram.jpg",
      "/media/portrait-arjun.jpg",
      "/media/portrait-sanjay.jpg",
    ],
  },
  contact: {
    email: "hello@hrmagix.com",
    phone: "+91 900 600 7955",
    location: "Pune & Mumbai, Maharashtra, India",
    blurb:
      "Looking for a custom walkthrough or have specific statutory policy requirements? Connect with our product specialists in Pune for a 1-on-1 consultation.",
  },
  trial: "14-day free trial · Full access to all 12 modules · Zero implementation fee · Cancel anytime",
  footNote: "Engineered with precision for people operations teams across India.",
};

export const manifesto = {
  headline: "Most growing companies don't have an HR tool problem. They have a fragmentation crisis.",
  lead: "The average 100-person company in India juggles 4 to 6 disconnected systems: biometric hardware logs, leave tracking spreadsheets, standalone payroll software, WhatsApp check-ins, and annual appraisal PDF forms.",
  paragraphs: [
    "When your attendance data is locked in a local biometric machine, your payroll team spends 4 days every month manually reconciling half-days, loss of pay (LOP), and overtime. A single formula error in an Excel sheet leads to delayed salary credits, statutory non-compliance, and frustrated employees.",
    "Meanwhile, performance reviews become an annual box-checking ritual disconnected from day-to-day sprint outcomes. High performers feel unrecognised, and managers lack the continuous 1-on-1 frameworks needed to nurture leadership talent.",
    "HRMagix replaces this broken sprawl with a single source of truth. One platform where biometric punches flow straight into salary computation, statutory deductions (EPF, ESI, PT, TDS) are calculated with zero manual intervention, and goals connect directly to daily recognition.",
  ],
  pillars: [
    {
      title: "Zero Reconciliation Payroll",
      desc: "Attendance, approved leaves, and overtime synchronize automatically with your monthly payroll cutoff, eliminating human data entry errors.",
    },
    {
      title: "Automated Indian Compliance",
      desc: "Multi-state Professional Tax slabs, EPF electronic challan receipts (ECR), ESI contribution files, and TDS Form 16 generated in clicks.",
    },
    {
      title: "Continuous Meritocracy",
      desc: "Quarterly OKRs, transparent 9-box succession mapping, and peer-to-peer kudos replace disconnected annual appraisal stress.",
    },
  ],
};

export const indianCompliance = {
  eyebrow: "Statutory Compliance by Design",
  title: "Engineered specifically for Indian labor laws & multi-state tax rules",
  sub: "Handle multi-entity statutory filings with 100% precision — no consultants or manual tax calculations required.",
  aspects: [
    {
      key: "epf",
      title: "Employees' Provident Fund (EPF)",
      badge: "EPFO Compliant",
      details:
        "Automated 12% employee and employer contribution calculation with statutory wage ceiling limits (₹15,000 cap option), voluntary PF (VPF) configuration, and instant ECR file export ready for direct upload to the unified EPFO member portal.",
    },
    {
      key: "esi",
      title: "Employee State Insurance (ESI)",
      badge: "ESIC Portal Ready",
      details:
        "Precise 0.75% employee and 3.25% employer contributions calculated against the ₹21,000 gross salary threshold. Automatically generates monthly contribution return statements and ESIC challan reports without manual rounding errors.",
    },
    {
      key: "pt",
      title: "Multi-State Professional Tax (PT)",
      badge: "28 States & UTs",
      details:
        "State-specific PT rule engines configured for Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat, and West Bengal, including February slab changes and gender-specific exemptions.",
    },
    {
      key: "tds",
      title: "TDS & Dual Tax Regimes (Section 192)",
      badge: "Old vs New Regime",
      details:
        "Employees can compare and declare investments under Section 80C, 80D, HRA, and Home Loan interest. Automated monthly TDS deduction schedule with quarterly Form 24Q generation and annual Part B Form 16 issuance.",
    },
    {
      key: "gratuity",
      title: "Payment of Gratuity Act",
      badge: "15-Day Formula",
      details:
        "Automated gratuity provisioning and settlement calculations based on 15 days of last drawn basic salary for employees completing 5+ years of continuous service.",
    },
    {
      key: "lwf",
      title: "Labour Welfare Fund (LWF)",
      badge: "State Slabs",
      details:
        "Automated half-yearly and annual LWF deductions matching state-specific deadlines (e.g. Maharashtra June & December deductions) integrated directly into payroll runs.",
    },
  ],
};

export type Feature = {
  key: string;
  title: string;
  copy: string;
  icon: IconName;
};

export const features: Feature[] = [
  {
    key: "attendance",
    title: "Smart attendance",
    copy: "Punch-in, shifts and geo-aware tracking with real-time presence dashboards.",
    icon: "fingerprint",
  },
  {
    key: "leaves",
    title: "Leaves & holidays",
    copy: "Flexible policies, instant approvals and a clear team calendar everyone trusts.",
    icon: "calendar",
  },
  {
    key: "payroll",
    title: "Automated payroll",
    copy: "Run accurate payroll in minutes with payslips, taxes and compliance built in.",
    icon: "wallet",
  },
  {
    key: "performance",
    title: "Performance & OKRs",
    copy: "OKRs, KRAs, 9-box, PIPs and reviews that actually drive growth.",
    icon: "target",
  },
  {
    key: "recognition",
    title: "Recognition & rewards",
    copy: "Celebrate wins with kudos, badges and a culture wall your team loves.",
    icon: "trophy",
  },
  {
    key: "lifecycle",
    title: "Lifecycle & onboarding",
    copy: "Delightful onboarding, smooth offboarding and everything in between.",
    icon: "rocket",
  },
];

export type Module = {
  name: string;
  slug: string;
  href: string;
  icon: IconName;
  group: string;
  desc: string;
  features: string[];
  statutory?: string;
};

export const modules: Module[] = [
  {
    name: "Attendance & Shifts",
    slug: "attendance",
    href: "/modules/attendance",
    icon: "clock",
    group: "Time & Work",
    desc: "Real-time presence tracking across physical branches and remote personnel with zero loss-of-pay discrepancies.",
    features: [
      "Biometric push API sync (eSSL, Matrix, ZKTeco)",
      "Mobile iOS & Android GPS geo-fencing with selfie validation",
      "Automated shift rotation, night shift differential & late grace periods",
    ],
    statutory: "Direct loss-of-pay (LOP) auto-calculation feeding monthly payroll",
  },
  {
    name: "Leaves & Holidays",
    slug: "leaves",
    href: "/modules/leaves",
    icon: "calendar",
    group: "Time & Work",
    desc: "Custom multi-tier leave policies, compensatory-off tracking, and unified visual holiday calendars across Indian states.",
    features: [
      "Custom leave categories (Earned/Privilege, Sick, Maternity/Paternity)",
      "Multi-level manager & HR approval workflows with instant email/push alerts",
      "Automatic monthly accruals, sandwich-rule policy enforcement & carry-over rules",
    ],
    statutory: "Factories Act & Shops and Establishments Act compliant leave quotas",
  },
  {
    name: "Payroll",
    slug: "payroll",
    href: "/modules/payroll",
    icon: "wallet",
    group: "Payroll",
    desc: "Execute complete monthly payroll in under 3 minutes with 100% statutory precision and bank transfer batch files.",
    features: [
      "Automated EPF (12% wage ceiling), ESI (₹21,000 threshold), and multi-state PT",
      "TDS Section 192 dual tax regime comparison with quarterly Form 24Q export",
      "One-click bank payment batch file generation (NEFT/RTGS/IMPS formatted)",
    ],
    statutory: "Direct electronic challan receipt (ECR) files for EPFO and ESIC portals",
  },
  {
    name: "Objectives & OKRs",
    slug: "okrs",
    href: "/modules/okrs",
    icon: "target",
    group: "Performance",
    desc: "Align company vision with team sprints through transparent, quantitative Objective and Key Result hierarchies.",
    features: [
      "Quarterly & annual OKR cascading from leadership to individual contributors",
      "Real-time progress sliders with milestone weighting and confidence scores",
      "Sprint check-in reminders and automated bi-weekly health updates",
    ],
  },
  {
    name: "KRA & 9-Box",
    slug: "kra-9box",
    href: "/modules/kra-9box",
    icon: "grid",
    group: "Performance",
    desc: "Define structured role-specific Key Result Areas and visualize high-potential future leadership on interactive talent matrices.",
    features: [
      "Role-based competency scoring matrices and multi-rater evaluations",
      "Interactive 9-box talent matrix plotting performance against growth potential",
      "Transparent calibration dashboards for executive leadership reviews",
    ],
  },
  {
    name: "PIPs & Growth",
    slug: "pips",
    href: "/modules/pips",
    icon: "sprout",
    group: "Performance",
    desc: "Constructive 30/60/90-day Performance Improvement Plans with structured milestone tracking and manager coaching logs.",
    features: [
      "Structured milestone checkpoints with measurable turnaround criteria",
      "Confidential manager-employee journal and objective documentation",
      "Automated timeline escalations and outcome status sign-offs",
    ],
  },
  {
    name: "Recognition",
    slug: "recognition",
    href: "/modules/recognition",
    icon: "trophy",
    group: "Engagement",
    desc: "Foster a continuous culture of appreciation with peer spot awards, value-based badges, and a live company culture wall.",
    features: [
      "Peer-to-peer kudos with customized company core values badges",
      "Live interactive culture feed embedded directly in employee home dashboards",
      "Monthly recognition leaderboard and spot reward allowance redemption",
    ],
  },
  {
    name: "1-on-1s & Meetings",
    slug: "meetings",
    href: "/modules/meetings",
    icon: "chat",
    group: "Engagement",
    desc: "Empower managers to hold meaningful recurring coaching conversations with shared agendas and action item tracking.",
    features: [
      "Collaborative pre-meeting agendas with continuous talking points",
      "Action item assignment with automated due-date reminders",
      "Private manager coaching notes and historical conversation archives",
    ],
  },
  {
    name: "Onboarding",
    slug: "onboarding",
    href: "/modules/onboarding",
    icon: "rocket",
    group: "People",
    desc: "Delight new hires before day one with paperless digital document collection and structured department welcome workflows.",
    features: [
      "Self-service pre-boarding portal for PAN, Aadhaar, and bank document uploads",
      "Automated appointment letter generation with digital signature capability",
      "IT hardware and workspace asset provisioning checklist tracking",
    ],
  },
  {
    name: "Documents",
    slug: "documents",
    href: "/modules/documents",
    icon: "folder",
    group: "People",
    desc: "Centralized, secure employee document repository with automated expiry alerts and policy acknowledgment tracking.",
    features: [
      "Encrypted digital personnel files with granular role-based access control",
      "Company handbook, NDA, and compliance policy sign-off tracking",
      "Automated alerts for visa, driving license, and certificate expiration",
    ],
  },
  {
    name: "Succession",
    slug: "succession",
    href: "/modules/succession",
    icon: "compass",
    group: "People",
    desc: "Identify critical single-point-of-failure roles and build robust internal leadership candidate benches for future growth.",
    features: [
      "Key position vulnerability index and role criticality assessment",
      "Talent bench readiness ratings (Ready now, 1-2 years, 3+ years)",
      "Targeted individual development plans (IDPs) for high-potential successors",
    ],
  },
  {
    name: "Analytics",
    slug: "analytics",
    href: "/modules/analytics",
    icon: "chart",
    group: "System",
    desc: "Transform people data into actionable executive insights with real-time workforce trends, attrition metrics, and payroll costs.",
    features: [
      "Real-time headcount growth, department distributions, and gender diversity",
      "Early warning attrition risk indicators and tenure analysis",
      "Overtime expenses, leave utilization rates, and payroll budget variance",
    ],
  },
];

export const moduleGroups = [
  "People",
  "Time & Work",
  "Performance",
  "Engagement",
  "Payroll",
  "System",
];

/** The two deep-dive showcases on the HRMagix homepage. */
export const showcases = [
  {
    key: "time",
    kicker: "Time & Attendance",
    title: "Real-time presence, zero spreadsheets",
    copy: "See who's in, on leave, or remote at a glance. Geo-aware punch-in, smart shifts and live dashboards keep everyone in sync — automatically.",
    points: [
      "One-tap punch-in with geo & selfie",
      "Auto shift & overtime calculation",
      "Live team presence board",
    ],
  },
  {
    key: "growth",
    kicker: "Performance & Growth",
    title: "Goals, reviews and growth — connected",
    copy: "Set OKRs and KRAs, run lightweight reviews, track 9-box and PIPs, and celebrate wins with recognition. Everything that grows your people, in one flow.",
    points: [
      "Aligned OKRs & KRAs with live progress",
      "1-on-1s, reviews & 9-box talent maps",
      "Kudos, badges & a culture wall",
    ],
  },
];

export const steps = [
  {
    n: "1",
    title: "Add your team",
    copy: "Import employees in seconds or sync your directory. Roles & departments auto-organise.",
  },
  {
    n: "2",
    title: "Switch on modules",
    copy: "Enable attendance, payroll, performance & more — set to your policies, no code.",
  },
  {
    n: "3",
    title: "Automate & relax",
    copy: "Reminders, approvals & reports run themselves. Your team gets time back.",
  },
];

export const testimonials = [
  {
    quote:
      "HRMagix replaced five tools for us. Onboarding, payroll and performance all live in one place now.",
    name: "Priya Sharma",
    role: "HR Manager, 1XL Demo",
    company: "1XL Demo",
    avatar: "/media/portrait-meera.jpg",
    rating: 5,
  },
  {
    quote:
      "Payroll that used to take two days now runs in minutes. Our team finally trusts the numbers.",
    name: "Rahul Kulkarni",
    role: "Finance Lead, Northwind",
    company: "Northwind",
    avatar: "/media/portrait-vikram.jpg",
    rating: 5,
  },
  {
    quote:
      "Recognition and 1-on-1s transformed our culture. Engagement is the best it's ever been.",
    name: "Amit Mehta",
    role: "People Ops, Vertex",
    company: "Vertex",
    avatar: "/media/portrait-arjun.jpg",
    rating: 5,
  },
];

export type Plan = {
  name: string;
  blurb: string;
  price: string;
  unit?: string;
  featured?: boolean;
  includes: string[];
  cta: string;
  href: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    blurb: "For small teams getting started",
    price: "$3",
    unit: "/emp/mo",
    includes: [
      "Attendance & leaves",
      "Employee directory",
      "Documents & reminders",
      "Email support",
    ],
    cta: "Get Started Free",
    href: "/contact",
  },
  {
    name: "Growth",
    blurb: "For scaling companies",
    price: "$6",
    unit: "/emp/mo",
    featured: true,
    includes: [
      "Everything in Starter",
      "Payroll & performance",
      "OKRs, KRAs & 9-box",
      "Recognition & analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/contact",
  },
  {
    name: "Enterprise",
    blurb: "For large organisations",
    price: "Custom",
    includes: [
      "Everything in Growth",
      "SSO & advanced security",
      "Succession & lifecycle",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

/** Answers derived strictly from the plans, modules and statutory terms. */
export const faqs = [
  {
    q: "How does HRMagix automate Indian statutory compliance (EPF, ESI, PT, TDS)?",
    a: "HRMagix calculates monthly statutory deductions automatically based on active employee wage structures. It generates EPFO-ready ECR text files, ESIC monthly contribution reports, state-specific Professional Tax (PT) calculations matching slabs for Maharashtra, Karnataka, Telangana, and other states, as well as monthly TDS calculations with quarterly Form 24Q and annual Form 16 Part B generation.",
  },
  {
    q: "Can we integrate our existing biometric fingerprint or facial recognition machines?",
    a: "Yes. HRMagix seamlessly integrates with leading biometric hardware (eSSL, Matrix, Realtime, ZKTeco) via secure API push or local sync service. Punches flow in real time to the cloud presence board and automatically reflect in shift calculations, late mark deductions, and monthly payroll loss of pay (LOP) registers.",
  },
  {
    q: "How does employee mobile punch-in with geo-fencing work for hybrid & field teams?",
    a: "Employees can check in via the HRMagix iOS and Android app. Organizations can configure GPS geofence radiuses around specific office coordinates, client sites, or branch warehouses, with optional selfie validation. Remote employees can submit check-ins with automated location tagging for transparent field-force management.",
  },
  {
    q: "How does HRMagix handle the Old vs. New Income Tax Regime choices?",
    a: "Employees can compare their tax liability across both Old and New Tax Regimes using an interactive tax simulation tool before making their annual declaration. They can upload Section 80C, 80D, HRA rent receipts, and home loan interest proof for HR verification directly through the employee self-service portal.",
  },
  {
    q: "How long does implementation take and can we migrate historical data from Excel?",
    a: "Most Indian organizations complete setup within 2 to 3 days. Our structured Excel bulk import templates allow you to bring over complete employee master data, historical leave balances, previous salary structures, and department hierarchies. A dedicated onboarding specialist assists with policy validation and dry-run payroll runs.",
  },
  {
    q: "Where is our employee and payroll data hosted, and how secure is it?",
    a: "Platform data is hosted in Indian cloud data centres, encrypted in transit between your browser or app and the platform, and encrypted at rest in storage. Access is governed by role-based permissions, with multi-factor authentication available and single sign-on on the Enterprise plan, and automated backups run daily. HRMagix does not claim ISO, SOC or comparable certification of its own — certifications held by the underlying infrastructure providers belong to those providers and should be attributed to them. If a procurement process needs specific assurance documentation, ask the team and you will get an honest answer about what exists.",
  },
  {
    q: "How are complex shift rotations, night allowances, and comp-offs managed?",
    a: "The Time & Shifts engine supports 24/7 rotating multi-shift schedules, auto-shift detection based on punch-in timestamps, custom grace periods for late arrivals, night shift differential allowances, and automated compensatory off (Comp-off) credit upon approved weekend or holiday work.",
  },
  {
    q: "What support is provided to our HR and Finance team during monthly payroll cutoff?",
    a: "All customers receive direct support via WhatsApp, phone, and email from our Pune-based product specialists. Enterprise plans include a dedicated Customer Success Manager who assists with payroll cutoffs, bonus disbursements, and annual tax year-end closing.",
  },
  {
    q: "What is the difference between an HRMS and payroll software?",
    a: "An HRMS is the system of record — who works here, in which role, under which manager, on what terms. Payroll software is a calculation that reads that record and produces a payslip, a statutory return and a bank file. The distinction matters when they are separate products, because the record has to be exported into the calculation every month and the export is where errors enter. HRMagix is HRMS and payroll software in one platform, so the calculation reads the record directly.",
  },
  {
    q: "Is HRMagix cloud HR software, or is it installed on our servers?",
    a: "It is cloud software, reached through a browser and a mobile app. There is nothing to install on a server and no client to deploy to individual machines, which is what allows field staff, shop-floor employees and multiple locations to use the same system without local infrastructure at each site.",
  },
  {
    q: "Which modules are included, and can we switch on only some of them?",
    a: "Twelve modules run on one platform: attendance and shifts, leaves and holidays, payroll, objectives and OKRs, KRA and 9-box, PIPs and growth, recognition, 1-on-1s and meetings, onboarding, documents, succession, and analytics. Your plan decides which are switched on, and switching one on later is a setting rather than a migration.",
  },
  {
    q: "Does the employee self service portal work on a phone?",
    a: "Yes, and for most workforces the phone is the primary route rather than a fallback. Employees can punch in, apply for leave, check balances, download payslips and Form 16, update their details and submit investment declarations from the mobile app. It matters most for field, retail and shop-floor staff, who frequently have no company email address or laptop.",
  },
  {
    q: "How does the attendance management system handle employees who are not in an office?",
    a: "Capture is a property of the location or the role rather than of the company. A geo-fenced mobile punch establishes presence at a client site or branch; a shared kiosk handles a factory shift changeover faster than individual devices; an existing biometric reader remains appropriate at a controlled entry point. All three write to the same attendance record, so mixing methods does not mean maintaining separate ledgers.",
  },
  {
    q: "Does HRMagix produce payslips and Form 16 for employees?",
    a: "Yes. Payslips are generated by the payroll run and available to employees in the self-service portal for any processed month, reissued as the original document rather than regenerated. Form 16 is available from the same place once the annual return is filed, alongside the payslips it summarises.",
  },
  {
    q: "Can we run HRMagix for more than one legal entity?",
    a: "Yes. Each entity keeps its own PF and ESI registrations, its own professional tax registrations by state, and its own payroll run and returns. Entity is an attribute of the employee record, so somebody transferring between entities keeps their history — which matters because gratuity eligibility and leave accrual are computed from the original date of joining.",
  },
  {
    q: "Who can see salary information in the system?",
    a: "Roles with payroll access, and the employee themselves. A reporting manager sees their team's attendance, leave and goals but not their salary components. Access is granted by role against the record rather than by seniority or tenure, it changes when the role changes, and views of restricted fields are recorded.",
  },
  {
    q: "What happens to our data if we stop using HRMagix?",
    a: "Export it while you can still log in. Payroll, attendance and leave history are records you may be required to produce long after you stop using the software that produced them — Form 16 reissues, gratuity calculations and inspections all reach backwards — so an export at the point of cancellation is worth doing carefully rather than quickly.",
  },
  {
    q: "Is there a free trial, and does it include payroll?",
    a: "Fourteen days with full access to every module and no credit card required. Payroll is included deliberately: a payroll product cannot be evaluated honestly with payroll switched off, and the questions worth asking — how a backdated increment is treated, how a mid-year migration handles year-to-date figures — only surface when you run one.",
  },
  {
    q: "How should we judge which is the best HRMS software for our company?",
    a: "By the cases that break rather than the feature list, because every product in the category lists the same features. Four questions separate them in practice: what happens to a shift that crosses midnight, how a backdated increment is treated in a month already filed, how a mid-year migration carries year-to-date figures so Form 16 reconciles, and whether an attendance correction overwrites the original record or sits beside it. The best payroll software for you is the one whose answers to those match how your company actually operates — which is why the trial includes payroll rather than excluding it.",
  },
  {
    q: "Is this payroll software with PF, ESI and TDS built in, or do we need something separate?",
    a: "Built in. EPF, ESI, professional tax by state, labour welfare fund and TDS under Section 192 are calculated inside the payroll run from the salary structure on the employee record and the registrations you hold. The same run produces the payslips, the ECR and ESIC files, the PT working, Form 24Q and Form 16 Part B — so the return and the ledger are built from one set of figures rather than reconciled afterwards.",
  },
];

/** Counters from the HRMagix trust band. */
export const stats = [
  { value: 9, suffix: "k+", label: "Employees" },
  { value: 120, suffix: "+", label: "Companies" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 12, suffix: "", label: "Modules" },
];

/**
 * Before / after contrast.
 * Every "after" line is HRMagix's own published claim; each "before" line is the
 * stated status quo those claims answer ("zero spreadsheets", "replaced five
 * tools", "payroll used to take two days", "instant approvals").
 */
export const contrast = {
  before: {
    label: "Before HRMagix",
    points: [
      "Attendance lives in spreadsheets nobody trusts",
      "Payroll takes two days and still needs checking",
      "Five separate tools for one people team",
      "Leave requests get lost in inboxes",
      "Goals, reviews and KRAs sit in scattered docs",
    ],
  },
  after: {
    label: "After HRMagix",
    points: [
      "Live presence dashboards with geo-aware punch-in",
      "Payroll runs in minutes — payslips, taxes and compliance built in",
      "One workspace, twelve modules, one login",
      "Flexible leave policies with instant approvals and a shared calendar",
      "OKRs, KRAs, 9-box and reviews connected in a single flow",
    ],
  },
};

/** The three platform pillars, each drawn from published feature copy. */
export const pillars = [
  {
    key: "time",
    name: "Time & Attendance",
    tagline: "Real-time presence, zero spreadsheets",
    copy: "See who's in, on leave, or remote at a glance. Geo-aware punch-in, smart shifts and live dashboards keep everyone in sync — automatically.",
    includes: ["Attendance & Shifts", "Leaves & Holidays", "Analytics"],
    tint: "bg-violet-50",
  },
  {
    key: "growth",
    name: "Performance & Growth",
    tagline: "Goals, reviews and growth — connected",
    copy: "Set OKRs and KRAs, run lightweight reviews, track 9-box and PIPs, and celebrate wins with recognition. Everything that grows your people, in one flow.",
    includes: ["Objectives & OKRs", "KRA & 9-Box", "PIPs & Growth", "1-on-1s & Meetings"],
    tint: "bg-violet-100",
  },
  {
    key: "payroll",
    name: "Payroll & Lifecycle",
    tagline: "Run accurate payroll in minutes",
    copy: "Payslips, taxes and compliance are built in. Onboarding, documents and succession keep the rest of the employee lifecycle moving without the paperwork.",
    includes: ["Payroll", "Onboarding", "Documents", "Succession"],
    tint: "bg-violet-200/60",
  },
];

/**
 * Workspace areas as shown in the product sidebar, each paired with the
 * published description of what its modules do.
 */
export const areas = [
  {
    key: "time",
    name: "Time & Work",
    tagline: "Every hour accounted for, without the chasing",
    pairs: [
      ["Attendance & Shifts", "Punch-in, shifts and geo-aware tracking with real-time presence dashboards"],
      ["Leaves & Holidays", "Flexible policies, instant approvals and a clear team calendar everyone trusts"],
    ],
    quote: 0,
  },
  {
    key: "performance",
    name: "Performance",
    tagline: "Goals that stay visible all quarter",
    pairs: [
      ["Objectives & OKRs", "Aligned OKRs and KRAs with live progress"],
      ["KRA & 9-Box", "Reviews and 9-box talent maps in one place"],
      ["PIPs & Growth", "Growth plans that actually drive progress"],
    ],
    quote: 2,
  },
  {
    key: "payroll",
    name: "Payroll",
    tagline: "Two days of work, done in minutes",
    pairs: [
      ["Payroll", "Run accurate payroll in minutes with payslips, taxes and compliance built in"],
      ["Documents", "Payslips, letters and reminders filed automatically"],
    ],
    quote: 1,
  },
  {
    key: "engagement",
    name: "Engagement",
    tagline: "Culture you can see in the workspace",
    pairs: [
      ["Recognition", "Kudos, badges and a culture wall your team loves"],
      ["1-on-1s & Meetings", "Conversations that keep managers and teams aligned"],
    ],
    quote: 2,
  },
];

/** Trust lines, all published by HRMagix. */
export const assurances = [
  { title: "Built for scale", copy: "One workspace that grows from your first hire to your thousandth." },
  { title: "Audited by design", copy: "Documents, approvals and payroll runs leave a clear trail." },
  { title: "SSO & advanced security", copy: "Single sign-on and advanced security ship with Enterprise." },
  { title: "Compliance built in", copy: "Payslips, taxes and compliance are part of every payroll run." },
];

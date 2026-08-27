import type { IconName } from "@/components/icons";

/**
 * Single source of truth for HRMagix site copy.
 * Every value here comes from hrmagix.com — nothing is invented.
 */

export const site = {
  name: "HRMagix",
  tagline: "Modern HR, from hire to retire",
  hero: {
    eyebrow: "All-in-one HR platform · v2.0",
    title: ["Smart HR for", "modern teams."],
    lede: "People, performance, and payroll — all in one workspace. Built for scale, audited by design.",
    pillars: [
      ["Unified", "Platform"],
      ["Enterprise", "Ready"],
      ["Built to", "Scale"],
    ],
  },
  proof: {
    seats: "9k+",
    companies: "120+ companies",
    trustline: "Trusted by 120+ HR teams worldwide",
  },
  contact: {
    email: "hello@hrmagix.com",
    phone: "+91 98765 43210",
    location: "Pune, Maharashtra, India",
    blurb:
      "Have a question or want a personalised demo? Send us a message — our team usually replies within a few hours.",
  },
  trial: "No credit card required · 14-day free trial · Cancel anytime",
  footNote: "Crafted with care for people teams everywhere.",
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

export type Module = { name: string; icon: IconName; group: string };

export const modules: Module[] = [
  { name: "Attendance & Shifts", icon: "clock", group: "Time & Work" },
  { name: "Leaves & Holidays", icon: "calendar", group: "Time & Work" },
  { name: "Payroll", icon: "wallet", group: "Payroll" },
  { name: "Objectives & OKRs", icon: "target", group: "Performance" },
  { name: "KRA & 9-Box", icon: "grid", group: "Performance" },
  { name: "PIPs & Growth", icon: "sprout", group: "Performance" },
  { name: "Recognition", icon: "trophy", group: "Engagement" },
  { name: "1-on-1s & Meetings", icon: "chat", group: "Engagement" },
  { name: "Onboarding", icon: "rocket", group: "People" },
  { name: "Documents", icon: "folder", group: "People" },
  { name: "Succession", icon: "compass", group: "People" },
  { name: "Analytics", icon: "chart", group: "System" },
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
    initials: "PS",
  },
  {
    quote:
      "Payroll that used to take two days now runs in minutes. Our team finally trusts the numbers.",
    name: "Rahul Kulkarni",
    role: "Finance Lead, Northwind",
    initials: "RK",
  },
  {
    quote:
      "Recognition and 1-on-1s transformed our culture. Engagement is the best it's ever been.",
    name: "Amit Mehta",
    role: "People Ops, Vertex",
    initials: "AM",
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

/** Answers derived strictly from the plans, modules and trial terms above. */
export const faqs = [
  {
    q: "How is HRMagix priced?",
    a: "Per employee, per month. Starter is $3/emp/mo, Growth is $6/emp/mo, and Enterprise is custom-priced for large organisations. No hidden fees — start free and scale as you grow.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan starts with a 14-day free trial. No credit card required, and you can cancel anytime.",
  },
  {
    q: "Which modules do I get?",
    a: "All twelve modules are part of the platform: Attendance & Shifts, Leaves & Holidays, Payroll, Objectives & OKRs, KRA & 9-Box, PIPs & Growth, Recognition, 1-on-1s & Meetings, Onboarding, Documents, Succession and Analytics. Which ones are switched on depends on your plan.",
  },
  {
    q: "How long does setup take?",
    a: "Three steps. Import or sync your team, switch on the modules you need — configured to your policies with no code — then let reminders, approvals and reports run themselves.",
  },
  {
    q: "Do you support SSO and advanced security?",
    a: "SSO and advanced security are included in the Enterprise plan, alongside succession, lifecycle and a dedicated success manager.",
  },
  {
    q: "Does payroll handle payslips and compliance?",
    a: "Yes. Payroll runs in minutes with payslips, taxes and compliance built in.",
  },
  {
    q: "Can I talk to someone before buying?",
    a: "Of course. Email hello@hrmagix.com, call +91 98765 43210, or send a message from the contact page and our team usually replies within a few hours.",
  },
];

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Modules", href: "/modules" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const navGroups = [
  {
    label: "Platform",
    items: [
      { label: "Features", href: "/features", note: "Everything you need to manage your people" },
      { label: "Modules", href: "/modules", note: "One platform. Every HR workflow." },
      { label: "How it works", href: "/how-it-works", note: "Get started in 3 simple steps" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about", note: "Modern HR, from hire to retire" },
      { label: "Pricing", href: "/pricing", note: "Simple, transparent pricing" },
      { label: "FAQ", href: "/faq", note: "Answers before you ask" },
      { label: "Contact", href: "/contact", note: "Talk to the HRMagix team" },
    ],
  },
];

export const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Modules", href: "/modules" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

/** Live-workspace numbers shown on the homepage product visual. */
export const workspace = {
  attendance: [
    { label: "Present", value: "820" },
    { label: "On leave", value: "37" },
    { label: "Absent", value: "12" },
    { label: "Remote", value: "9" },
  ],
  people: [
    { initials: "RP", name: "Rohan Patil", meta: "Punched in · 09:02 AM", tag: "On time" },
    { initials: "AK", name: "Anita Kulkarni", meta: "Remote · 08:55 AM", tag: "Remote" },
  ],
  okrs: [
    { label: "Reduce time-to-hire", pct: 82 },
    { label: "Improve eNPS to 60", pct: 68 },
    { label: "Launch L&D academy", pct: 45 },
  ],
  growthStats: [
    { value: "+38%", label: "Goal completion" },
    { value: "4.8", label: "Review score" },
    { value: "126", label: "Kudos given" },
  ],
  snapshot: [
    { label: "Headcount", value: "23" },
    { label: "New hires", value: "0" },
    { label: "Attendance", value: "03:22" },
    { label: "KRA compl.", value: "0%" },
    { label: "Engagement", value: "6.9" },
    { label: "At-risk", value: "1" },
  ],
  queue: ["1 pending leave", "23 not punched", "3 KRA sheets"],
};

export const workspaceNav = [
  "Overview",
  "People",
  "Time & Work",
  "Performance",
  "Engagement",
  "Payroll",
  "Support",
  "System",
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

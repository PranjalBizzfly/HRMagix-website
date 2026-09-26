import type { IconName } from "@/components/icons";

/**
 * The HRMagix app's own feature map.
 *
 * SOURCE: the navigation and dashboard of the HRMagix app (app.hrmagix.com),
 * captured from screenshots supplied by the client on 2026-09-26. The seven
 * areas and every item inside them are listed exactly as the app's sidebar
 * names and orders them.
 *
 * Descriptions are deliberately plain. Where the screenshots show only a menu
 * entry, the description says what the entry is and nothing more — no
 * capability is claimed that the app was not seen to have. Richer copy for an
 * item should be confirmed against the live app before it is written here.
 *
 * This file describes features in words only. The website shows no dashboard
 * screenshots, mockups or simulated product screens.
 */

export type AppFeature = { name: string; note: string };

export type AppArea = {
  key: string;
  name: string;
  icon: IconName;
  summary: string;
  features: AppFeature[];
  /** Solution page that treats this area in depth, where one exists. */
  href?: string;
};

export const appAreas: AppArea[] = [
  {
    key: "overview",
    name: "Overview",
    icon: "grid",
    summary: "Where every employee starts the day.",
    href: "/solutions/ess",
    features: [
      {
        name: "Dashboard",
        note: "A personal day-at-a-glance: punch state, logged work, leave balance and growth points.",
      },
      {
        name: "Our Other Products",
        note: "Links to the other products from the same team, from inside the app.",
      },
    ],
  },
  {
    key: "people",
    name: "People",
    icon: "users",
    summary: "The records and paperwork that sit behind every employee.",
    href: "/solutions/employee-management",
    features: [
      { name: "Memos", note: "Company memos, kept in the People area." },
      { name: "Documents", note: "Employee and company documents in one place." },
      { name: "Assets", note: "Company assets, searchable from the global search." },
      { name: "Onboarding", note: "Bringing a new hire into the company." },
    ],
  },
  {
    key: "time",
    name: "Time & Work",
    icon: "clock",
    summary: "Attendance, leave and the rules that govern them.",
    href: "/solutions/attendance",
    features: [
      {
        name: "Attendance",
        note: "Clock in and clock out for the day, with each session and the time worked recorded.",
      },
      { name: "Leaves", note: "Leave requests and balances by leave type, such as casual leave." },
      { name: "Holidays", note: "The company holiday list." },
      { name: "All Policies", note: "Every company policy in one list." },
    ],
  },
  {
    key: "performance",
    name: "Performance",
    icon: "target",
    summary: "Goals, reviews and growth plans.",
    href: "/solutions/performance",
    features: [
      { name: "KRA", note: "Key result areas for each role." },
      { name: "OKRs", note: "Objectives and key results." },
      { name: "Reviews", note: "Performance reviews." },
      { name: "Skills", note: "Employee skills." },
      { name: "PIPs", note: "Performance improvement plans." },
    ],
  },
  {
    key: "engagement",
    name: "Engagement",
    icon: "trophy",
    summary: "The conversations and recognition that keep teams connected.",
    features: [
      { name: "Meetings", note: "Meetings, including 1-on-1s." },
      { name: "Recognition", note: "Recognising colleagues' work." },
      {
        name: "Growth & Points",
        note: "Growth points earned over time, with an all-time balance on every dashboard.",
      },
      { name: "Wellness", note: "A dedicated wellness section for employees." },
      { name: "Speak Up", note: "A dedicated place for employees to speak up." },
    ],
  },
  {
    key: "payroll",
    name: "Payroll",
    icon: "wallet",
    summary: "The monthly run, from salary structure to payslip.",
    href: "/solutions/payroll",
    features: [{ name: "Payroll", note: "Its own area in the app's main navigation." }],
  },
  {
    key: "system",
    name: "System",
    icon: "layers",
    summary: "Company communication and personal settings.",
    features: [
      { name: "Announcements", note: "Company-wide announcements, also reachable from the top bar." },
      { name: "What's New", note: "Updates to the product itself." },
      { name: "Notifications", note: "Your notifications, with an unread count in the top bar." },
      { name: "My Emails", note: "Emails, inside the app." },
      { name: "Feature Requests & Suggestions", note: "Suggest features and improvements to the product." },
      { name: "Settings", note: "Your settings." },
    ],
  },
];

/** What every employee sees on the dashboard, as the app lays it out. */
export const dashboardWidgets: AppFeature[] = [
  { name: "Today's hours", note: "When you came in, and whether the day is still in progress." },
  { name: "Growth points", note: "Your all-time points balance." },
  { name: "Leave requests", note: "Requests raised, and whether anything is pending." },
  { name: "Designation", note: "Your current role." },
  {
    name: "My attendance",
    note: "Clock in or out for today, see each session, the time worked, and punch out in one tap.",
  },
  {
    name: "Last seven days",
    note: "Hours worked per day, with the seven-day total, daily average and days active.",
  },
  { name: "Leave balance", note: "Balance by leave type for the year — used against total." },
  { name: "Reporting line", note: "Your reporting manager, with a one-click email." },
];

/** Available from the top bar on every screen of the app. */
export const everywhere: { name: string; note: string; icon: IconName }[] = [
  {
    name: "Global search",
    note: "Find pages, employees, departments and assets from anywhere — Ctrl K.",
    icon: "compass",
  },
  { name: "Company switcher", note: "Move between the companies you work in.", icon: "layers" },
  { name: "Dark mode", note: "A dark theme, one click away.", icon: "sparkle" },
  { name: "Text size", note: "Adjust the text size to suit you.", icon: "grid" },
  { name: "Announcements & notifications", note: "Always one click from the top bar.", icon: "chat" },
];

export const appFeatureCount = appAreas.reduce((n, a) => n + a.features.length, 0);

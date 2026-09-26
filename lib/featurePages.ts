/**
 * How each of the twelve modules (lib/content.ts) connects to the rest of the
 * site: which area of the app it lives in (lib/appFeatures.ts), which solution
 * page treats it in depth, and which words count as a mention of it when the
 * related-content engine (lib/related.ts) looks for pages and questions.
 */

export const featureLinks: Record<
  string,
  { area: string; solution: { label: string; href: string }; phrases: string[] }
> = {
  attendance: {
    area: "time",
    solution: { label: "Attendance & Shifts", href: "/solutions/attendance" },
    phrases: ["attendance", "shift", "punch", "biometric", "geo-fenc"],
  },
  leaves: {
    area: "time",
    solution: { label: "Leave Management", href: "/solutions/leave-management" },
    phrases: ["leave", "holiday", "comp-off", "sandwich"],
  },
  payroll: {
    area: "payroll",
    solution: { label: "Payroll", href: "/solutions/payroll" },
    phrases: ["payroll", "payslip", "salary"],
  },
  okrs: {
    area: "performance",
    solution: { label: "Performance & OKRs", href: "/solutions/performance" },
    phrases: ["okr", "okrs", "objectives", "key results"],
  },
  "kra-9box": {
    area: "performance",
    solution: { label: "Performance & OKRs", href: "/solutions/performance" },
    phrases: ["kra", "kras", "9-box", "calibration"],
  },
  pips: {
    area: "performance",
    solution: { label: "Performance & OKRs", href: "/solutions/performance" },
    phrases: ["pip", "pips", "improvement plan"],
  },
  recognition: {
    area: "engagement",
    solution: { label: "Employee Self-Service", href: "/solutions/ess" },
    phrases: ["recognition", "kudos", "badges"],
  },
  meetings: {
    area: "engagement",
    solution: { label: "Performance & OKRs", href: "/solutions/performance" },
    phrases: ["1-on-1", "1-on-1s", "one-on-one", "meetings"],
  },
  onboarding: {
    area: "people",
    solution: { label: "Onboarding & Lifecycle", href: "/solutions/onboarding" },
    phrases: ["onboarding", "pre-boarding", "joining", "new hire"],
  },
  documents: {
    area: "people",
    solution: { label: "Employee Management", href: "/solutions/employee-management" },
    phrases: ["document", "documents", "acknowledg"],
  },
  succession: {
    area: "people",
    solution: { label: "Employee Management", href: "/solutions/employee-management" },
    phrases: ["succession", "successor", "bench"],
  },
  analytics: {
    area: "overview",
    solution: { label: "HR Analytics", href: "/solutions/hr-analytics" },
    phrases: ["analytics", "attrition", "headcount", "dashboard"],
  },
};

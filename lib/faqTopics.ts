import { allQuestions, type SourcedQuestion } from "@/lib/related";

/**
 * FAQ topics.
 *
 * Every question already answered somewhere on the site is filed under
 * exactly ONE topic — the one whose phrases it matches most strongly, with the
 * question text weighted above the answer. So no question appears on two topic
 * pages, and every answer still links back to the page it came from.
 *
 * Server-only.
 */

export type FaqTopic = {
  slug: string;
  name: string;
  intro: string;
  phrases: string[];
  links: { label: string; href: string }[];
};

export const faqTopics: FaqTopic[] = [
  {
    slug: "payroll",
    name: "Payroll",
    intro: "Running the monthly payroll: salary structures, payslips, arrears, bank files and year-to-date figures.",
    phrases: ["payroll", "payslip", "salary", "arrear", "bank file", "increment", "ctc", "take-home"],
    links: [
      { label: "Payroll", href: "/solutions/payroll" },
      { label: "Payroll feature", href: "/features/payroll" },
      { label: "Salary calculator", href: "/calculators/salary" },
    ],
  },
  {
    slug: "statutory-compliance",
    name: "Statutory compliance",
    intro: "EPF, ESI, professional tax, the labour welfare fund, TDS under Section 192, Form 16 and gratuity.",
    phrases: ["epf", "pf", "esi", "professional tax", "pt", "lwf", "labour welfare", "tds", "form 16", "form 24q", "gratuity", "ecr", "section 192", "statutory"],
    links: [
      { label: "Compliance", href: "/solutions/compliance" },
      { label: "PF calculator", href: "/calculators/pf" },
      { label: "Gratuity calculator", href: "/calculators/gratuity" },
    ],
  },
  {
    slug: "attendance-and-shifts",
    name: "Attendance & shifts",
    intro: "Capturing attendance by biometric, mobile or kiosk, shift rotations, night shifts, overtime and regularisation.",
    phrases: ["attendance", "shift", "punch", "biometric", "geo", "overtime", "late", "kiosk", "regularis"],
    links: [
      { label: "Attendance & Shifts", href: "/solutions/attendance" },
      { label: "Attendance feature", href: "/features/attendance" },
    ],
  },
  {
    slug: "leave-and-holidays",
    name: "Leave & holidays",
    intro: "Leave types, accrual, carry-forward, comp-off, the sandwich rule and holiday calendars across states.",
    phrases: ["leave", "holiday", "comp-off", "sandwich", "accrual", "carry"],
    links: [
      { label: "Leave Management", href: "/solutions/leave-management" },
      { label: "Leaves feature", href: "/features/leaves" },
    ],
  },
  {
    slug: "performance-and-growth",
    name: "Performance & growth",
    intro: "OKRs, KRAs, review cycles, calibration, the 9-box, PIPs, 1-on-1s and recognition.",
    phrases: ["okr", "kra", "review", "rating", "calibration", "9-box", "pip", "1-on-1", "recognition", "goal", "performance"],
    links: [
      { label: "Performance & OKRs", href: "/solutions/performance" },
      { label: "OKRs feature", href: "/features/okrs" },
    ],
  },
  {
    slug: "employee-lifecycle",
    name: "Employee lifecycle",
    intro: "Onboarding, probation, confirmation, transfers, documents, exits and full and final settlement.",
    phrases: ["onboarding", "joining", "probation", "confirmation", "transfer", "exit", "resign", "notice", "full and final", "document", "offboarding"],
    links: [
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding" },
      { label: "Employee Management", href: "/solutions/employee-management" },
    ],
  },
  {
    slug: "self-service-and-mobile",
    name: "Self-service & mobile",
    intro: "What employees and managers can do themselves, on the web and on a phone.",
    phrases: ["self-service", "self service", "mobile", "phone", "app", "portal", "employee can", "manager"],
    links: [
      { label: "Employee Self-Service", href: "/solutions/ess" },
    ],
  },
  {
    slug: "reports-and-analytics",
    name: "Reports & analytics",
    intro: "Headcount, attrition, overtime, leave utilisation and payroll cost — and who can see what.",
    phrases: ["report", "analytics", "attrition", "headcount", "dashboard", "cost"],
    links: [
      { label: "HR Analytics", href: "/solutions/hr-analytics" },
      { label: "Payroll cost calculator", href: "/calculators/payroll-cost" },
    ],
  },
  {
    slug: "setup-data-and-security",
    name: "Setup, data & security",
    intro: "Implementation, migrating from Excel, multiple entities, hosting, access control and leaving the platform.",
    phrases: ["implementation", "setup", "migrat", "excel", "import", "entity", "entities", "hosted", "security", "data", "access", "sso", "trial", "plan", "pricing"],
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Security", href: "/policy/security" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const hits = (text: string, phrase: string) =>
  text.match(new RegExp(`(^|[^a-z0-9])${escape(phrase)}`, "g"))?.length ?? 0;

function score(q: SourcedQuestion, t: FaqTopic) {
  const qt = q.q.toLowerCase();
  const at = q.a.toLowerCase();
  return t.phrases.reduce((n, p) => n + hits(qt, p) * 4 + hits(at, p), 0);
}

/** Each question under its single best-matching topic. */
export function questionsByTopic(): Record<string, SourcedQuestion[]> {
  const out: Record<string, SourcedQuestion[]> = Object.fromEntries(faqTopics.map((t) => [t.slug, []]));
  const seen = new Set<string>();
  for (const q of allQuestions) {
    if (seen.has(q.q)) continue;
    seen.add(q.q);
    let best: FaqTopic | null = null;
    let bestScore = 0;
    for (const t of faqTopics) {
      const s = score(q, t);
      if (s > bestScore) {
        best = t;
        bestScore = s;
      }
    }
    out[(best ?? faqTopics[faqTopics.length - 1]).slug].push(q);
  }
  return out;
}

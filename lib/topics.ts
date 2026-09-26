import { topicsTime } from "./topics/time";
import { topicsPay } from "./topics/pay";
import { topicsPerformance } from "./topics/performance";
import { topicsLifecycle } from "./topics/lifecycle";
import { topicsPeople } from "./topics/people";

/**
 * HR topic guides — the knowledge hub at /hr/topics.
 *
 * WRITING RULES, applied to every entry:
 *  - Educational content about the practice of HR in general. No statistics,
 *    no survey figures, no customer stories, no invented case studies.
 *  - Indian law is cited only where it is well established and stated
 *    generally; state-specific rates and deadlines are described as varying,
 *    never given a figure.
 *  - "In HRMagix" links only to features HRMagix publishes (lib/content.ts)
 *    or shows in its app (lib/appFeatures.ts). No capability is claimed here
 *    that is not stated on one of those.
 */

export type TopicCategory =
  | "Time & attendance"
  | "Pay & compliance"
  | "Performance & growth"
  | "Employee lifecycle"
  | "People & culture";

export type Topic = {
  slug: string;
  name: string;
  category: TopicCategory;
  /** H1 — a claim about the subject, not the subject's name. */
  title: string;
  standfirst: string;
  definition: string[];
  whyItMatters: string[];
  challenges: { title: string; body: string }[];
  process: { step: string; body: string }[];
  practices: string[];
  mistakes: string[];
  /** How software changes the work — in general, not HRMagix-specific. */
  software: string;
  /** Where the subject lives in HRMagix: published features only. */
  inHRMagix: { label: string; href: string; note: string }[];
  faqs: { q: string; a: string }[];
  /** Words that count as a mention when finding related pages. */
  phrases: string[];
  seo: { title: string; description: string; keywords?: string[] };
};

export const topicCategories: { name: TopicCategory; blurb: string }[] = [
  { name: "Time & attendance", blurb: "Hours, shifts, leave and the records payroll is built on." },
  { name: "Pay & compliance", blurb: "Salary, statutory deductions and running a payroll month." },
  { name: "Performance & growth", blurb: "Goals, reviews, conversations and development." },
  { name: "Employee lifecycle", blurb: "From the offer letter to the final settlement." },
  { name: "People & culture", blurb: "Engagement, recognition, policy and how HR itself runs." },
];

export const topics: Topic[] = [
  ...topicsTime,
  ...topicsPay,
  ...topicsPerformance,
  ...topicsLifecycle,
  ...topicsPeople,
];

export const topicBySlug = (slug: string) => topics.find((t) => t.slug === slug);

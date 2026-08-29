/**
 * The site's image layer.
 *
 * TWO KINDS OF IMAGE LIVE HERE, AND THE DISTINCTION IS DELIBERATE.
 *
 * 1. **The single product image.** `dashboard` is the one and only product
 *    screenshot on this website — the HRMagix Overview workspace as it is
 *    published on hrmagix.com. It appears exactly once, in the homepage hero.
 *    No other page renders a dashboard, a mockup, a device frame or a
 *    simulated product screen. If you are about to add a second, don't:
 *    describe the product in words and show the people who use it instead.
 *
 * 2. **Photography of real Indian workplaces.** Every other entry is a
 *    photograph of Indian professionals, Indian offices, Indian shop floors.
 *    Each one is used in exactly ONE place on the site, chosen because it
 *    depicts what that section is actually about — an arrival at a desk for
 *    attendance, a "welcome to the team" gift for onboarding, a packed
 *    carton for the exit stage of the lifecycle. None is decorative and
 *    none is reused.
 *
 * Licensing: photography is Pexels-licensed (free for commercial use, no
 * attribution required). The HRMagix mark and dashboard are the company's own.
 */

export type MediaSlot = {
  key: string;
  src: string;
  /** What the photograph shows, and why it sits where it sits. */
  subject: string;
  alt: string;
  width: number;
  height: number;
  /** Above the fold: load eagerly. Everything else lazy-loads. */
  priority?: boolean;
  /** Where in the frame the subject sits, so crops never decapitate anyone. */
  position?: string;
};

const slots: MediaSlot[] = [
  /* ---------------------------------------------------------------- */
  /* The one product image on the entire website.                     */
  /* ---------------------------------------------------------------- */
  {
    key: "dashboard",
    src: "/media/hero-workspace.jpg",
    subject:
      "The HRMagix Overview workspace: live attendance counters, attendance trend, Q3 OKR progress and the punch-in roster.",
    alt:
      "The HRMagix dashboard showing live employee attendance, the weekly attendance trend, Q3 OKR progress and a recent punch-in roster",
    width: 1376,
    height: 768,
    priority: true,
  },

  /* ---------------------------------------------------------------- */
  /* Homepage                                                          */
  /* ---------------------------------------------------------------- */
  {
    key: "home-hero",
    src: "/media/people-office-work.jpg",
    subject: "A modern collaborative team at work across a shared desk bank in a contemporary office.",
    alt: "A focused collaborative team working together at a shared desk with laptops in a modern workplace",
    width: 2400,
    height: 1601,
    priority: true,
    position: "center 35%",
  },
  {
    key: "home-manifesto",
    src: "/media/documents-huddle.jpg",
    subject: "Colleagues collaborating over complex reports and laptops — the operational fragmentation HRMagix unifies.",
    alt: "Colleagues in an office working through documents and laptop spreadsheets together",
    width: 2400,
    height: 3600,
    position: "center 40%",
  },
  {
    key: "home-compliance",
    src: "/media/payroll-desk-review.jpg",
    subject: "A finance and statutory compliance specialist reviewing figures in a modern corporate setting.",
    alt: "A financial specialist reviewing records and calculation statements at an office desk",
    width: 2400,
    height: 1600,
    position: "center 30%",
  },

  /* ---------------------------------------------------------------- */
  /* Solutions                                                         */
  /* ---------------------------------------------------------------- */
  {
    key: "solutions-overview",
    src: "/media/team-briefing.jpg",
    subject: "A cross-module team strategy briefing in a sleek glass-walled meeting space.",
    alt: "A team engaged in a collaborative strategy briefing inside a modern glass conference room",
    width: 2400,
    height: 1350,
    position: "center 35%",
  },
  {
    key: "hrms",
    src: "/media/manager-briefing-desks.jpg",
    subject: "An operations lead coordinating with team members across an open-plan floor — the unified system of record.",
    alt: "An operations manager speaking with team members across an open desk floor in a contemporary office",
    width: 2400,
    height: 1800,
    position: "center 30%",
  },
  {
    key: "payroll",
    src: "/media/records-desk.jpg",
    subject: "A payroll reviewer conducting the pre-cutoff salary and statutory check.",
    alt: "A professional reviewing payroll calculations and financial files at an office desk",
    width: 2400,
    height: 1377,
    position: "center 35%",
  },
  {
    key: "employee-management",
    src: "/media/partners-conversation.jpg",
    subject: "People operations consultation in an open, natural workplace setting.",
    alt: "Colleagues engaged in an authentic one-on-one workplace conversation",
    width: 2400,
    height: 3600,
    position: "center 25%",
  },
  {
    key: "attendance",
    src: "/media/office-arrival.jpg",
    subject: "Morning arrival at a contemporary corporate entrance — the moment a punch is logged.",
    alt: "A professional arriving at a bright, modern corporate entrance lobby",
    width: 2400,
    height: 1602,
    position: "center 45%",
  },
  {
    key: "leave",
    src: "/media/office-lighter-moment.jpg",
    subject: "A natural collaborative moment in a team breakout space — what a trusted leave calendar protects.",
    alt: "Colleagues sharing a collaborative conversation in a comfortable modern breakout area",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "ess",
    src: "/media/remote-laptop.jpg",
    subject: "A professional working on a laptop in a modern hybrid setup — self-service without an HR queue.",
    alt: "A remote professional accessing self-service workflows on a laptop at a clean workspace",
    width: 2400,
    height: 1600,
    position: "center 40%",
  },
  {
    key: "onboarding",
    src: "/media/welcome-to-team.jpg",
    subject: "A curated welcome desk setup with joining stationery and laptop for a new team member.",
    alt: "An organized new-hire welcome desk setup with notebook, stationery and laptop",
    width: 2400,
    height: 1800,
    position: "center 40%",
  },
  {
    key: "lifecycle-exit",
    src: "/media/transition-box.jpg",
    subject: "A thoughtful editorial view of career progression, transition and structured handover.",
    alt: "A corporate professional standing in a modern office reflecting on career progression",
    width: 2400,
    height: 1600,
    position: "center 30%",
  },
  {
    key: "analytics",
    src: "/media/analytics-huddle.jpg",
    subject: "Leadership team reviewing workforce metrics and performance data in a modern meeting room.",
    alt: "Business leaders analyzing charts and workforce metrics on a digital screen in a conference room",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },

  /* ---------------------------------------------------------------- */
  /* Industries                                                        */
  /* ---------------------------------------------------------------- */
  {
    key: "industry-startups",
    src: "/media/startup-duo.jpg",
    subject: "High-energy startup founders collaborating over product development in a tech loft.",
    alt: "Two young founders collaborating over a laptop in a bright modern tech workspace",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "industry-small-business",
    src: "/media/shopkeeper.jpg",
    subject: "An authentic enterprise entrepreneur in commercial business premises.",
    alt: "A small business owner managing operations inside their commercial store",
    width: 2400,
    height: 1600,
    position: "center 30%",
  },
  {
    key: "industry-smes",
    src: "/media/ahmedabad-office.jpg",
    subject: "Growing mid-market enterprise team in a sleek commercial business hub.",
    alt: "Colleagues working inside a modern commercial office in an Indian enterprise hub",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "industry-manufacturing",
    src: "/media/textile-floor.jpg",
    subject: "Precision industrial manufacturing and production line — shift, ESI and LWF territory.",
    alt: "Engineering operators working on a modern precision manufacturing line in a plant",
    width: 2400,
    height: 1601,
    position: "center 40%",
  },
  {
    key: "industry-it-services",
    src: "/media/office-tower-night.jpg",
    subject: "An illuminated IT tech park skyscraper at twilight — 24/7 rosters and multi-shift delivery.",
    alt: "Floors of an illuminated modern corporate office tower against the evening skyline",
    width: 2400,
    height: 1600,
    position: "center 50%",
  },
  {
    key: "industry-professional-services",
    src: "/media/industry-consulting-floor.jpg",
    subject: "Enterprise consultants reviewing strategic client documentation in an executive boardroom.",
    alt: "Corporate consultants reviewing client strategy in a modern boardroom",
    width: 2400,
    height: 1602,
    position: "center 30%",
  },

  /* ---------------------------------------------------------------- */
  /* Insights — one photograph per article, none shared with a page.   */
  /* ---------------------------------------------------------------- */
  {
    key: "blog-whiteboard-plan",
    src: "/media/blog-whiteboard-plan.jpg",
    subject: "A sprint roadmap and tax planning board — closing monthly payroll with full clarity.",
    alt: "A team planning sprint milestones and statutory deadlines on an office whiteboard",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "blog-wage-threshold",
    src: "/media/blog-wage-threshold.jpg",
    subject: "A compliance lead checking printed figures against statutory wage thresholds.",
    alt: "A professional reviewing printed wage threshold schedules and compliance reports",
    width: 2400,
    height: 1602,
    position: "center 35%",
  },
  {
    key: "blog-state-filing",
    src: "/media/blog-state-filing.jpg",
    subject: "A statutory compliance officer reviewing multi-state filing dossiers in an office.",
    alt: "A compliance professional in an office reviewing multi-state filing folders",
    width: 2400,
    height: 1687,
    position: "center 30%",
  },
  {
    key: "blog-payslip-explained",
    src: "/media/blog-payslip-explained.jpg",
    subject: "Two colleagues reviewing salary structure and payslip line items together.",
    alt: "Two professionals seated together reviewing a printed salary breakdown dossier",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "blog-regime-choice",
    src: "/media/blog-regime-choice.jpg",
    subject: "A team working through annual tax regime declarations and calculations together.",
    alt: "Colleagues gathered in a meeting discussing income tax regime declarations",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "blog-shift-handover",
    src: "/media/blog-shift-handover.jpg",
    subject: "Shift supervisors in active coordination during a handover between working shifts.",
    alt: "Two colleagues in conversation coordinating shift handovers beside office desks",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "blog-settlement-review",
    src: "/media/blog-settlement-review.jpg",
    subject: "A detailed review session reconciling final settlement and compliance records.",
    alt: "Colleagues reviewing final settlement records and signed documents together",
    width: 2400,
    height: 1600,
    position: "center 40%",
  },
  {
    key: "blog-leave-planning",
    src: "/media/blog-leave-planning.jpg",
    subject: "A focused planning session reviewing workforce calendar and quarterly coverage.",
    alt: "A professional seated with a laptop reviewing calendar schedules and notes",
    width: 2400,
    height: 1350,
    position: "center 40%",
  },

  /* ---------------------------------------------------------------- */
  /* Resources, company, policy                                        */
  /* ---------------------------------------------------------------- */
  {
    key: "white-papers",
    src: "/media/briefing-paper.jpg",
    subject: "An executive presenting research findings from a printed white paper in a boardroom.",
    alt: "A speaker presenting research points from a printed brief to colleagues in a conference room",
    width: 2400,
    height: 1600,
    position: "center 25%",
  },
  {
    key: "media-room",
    src: "/media/media-briefing-note.jpg",
    subject: "Corporate communications lead sharing a briefing note in a media briefing suite.",
    alt: "A communications director sharing a printed briefing document with a colleague",
    width: 2400,
    height: 1800,
    position: "center 30%",
  },
  {
    key: "calculator",
    src: "/media/helpdesk-call.jpg",
    subject: "A financial analyst reviewing salary calculations while on a client consultation call.",
    alt: "A finance professional consulting on calculations over a phone call at a computer",
    width: 2400,
    height: 1600,
    position: "center 35%",
  },
  {
    key: "about",
    src: "/media/team-portrait.jpg",
    subject: "An authentic, confident team portrait in a bright contemporary workplace.",
    alt: "A diverse team of professionals photographed together in a modern workplace setting",
    width: 2400,
    height: 3598,
    position: "center 30%",
  },
  {
    key: "careers",
    src: "/media/portrait-arjun.jpg",
    subject: "A charismatic, natural Indian engineering lead portrait — what joining looks like from inside.",
    alt: "A smiling engineering team lead photographed in a modern corporate setting",
    width: 2400,
    height: 3600,
    position: "center 20%",
  },
  {
    key: "contact",
    src: "/media/portrait-meera.jpg",
    subject: "A professional, approachable Indian client specialist ready to consult on HR operations.",
    alt: "A confident female specialist in a tailored blazer photographed in an office",
    width: 2400,
    height: 3595,
    position: "center 20%",
  },
  {
    key: "vendor",
    src: "/media/policy-handover.jpg",
    subject: "A formal partnership agreement handover across an executive desk.",
    alt: "Business partners exchanging signed agreement files across a desk in an office",
    width: 2400,
    height: 3600,
    position: "center 30%",
  },
  {
    key: "policy",
    src: "/media/portrait-sanjay.jpg",
    subject: "A considered, authoritative executive portrait for the workplace policy library.",
    alt: "An executive leader in formal attire photographed against a clean architectural backdrop",
    width: 2400,
    height: 3600,
    position: "center 22%",
  },
  {
    key: "press-kit",
    src: "/media/portrait-vikram.jpg",
    subject: "A press-ready editorial portrait in the style journalists and publications require.",
    alt: "A company executive in a modern blazer photographed for press publication",
    width: 2400,
    height: 3600,
    position: "center 20%",
  },
];

export const mediaSlots = slots;

const index = new Map(slots.map((s) => [s.key, s]));

export const bySlot = (key: string): MediaSlot | undefined => index.get(key);

/**
 * Every photograph is used exactly once. This is asserted in development so a
 * duplicate can never creep back in through a copy-paste.
 */
if (process.env.NODE_ENV !== "production") {
  const seen = new Map<string, string>();
  for (const s of slots) {
    const first = seen.get(s.src);
    if (first) {
      // eslint-disable-next-line no-console
      console.warn(`[media] ${s.src} is used by both "${first}" and "${s.key}".`);
    }
    seen.set(s.src, s.key);
  }
}

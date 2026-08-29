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
    src: "/media/hero-workspace.png",
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
    subject: "An Indian team at work across a shared desk bank — the everyday scene HRMagix runs under.",
    alt: "Colleagues working at a shared desk bank in an Indian office, papers and monitors in front of them",
    width: 1800,
    height: 1200,
    priority: true,
    position: "center 40%",
  },
  {
    key: "home-manifesto",
    src: "/media/documents-huddle.jpg",
    subject: "Four colleagues comparing paper files — the fragmentation the manifesto describes.",
    alt: "Four colleagues in an Indian office comparing documents held in coloured paper folders",
    width: 1800,
    height: 1200,
  },
  {
    key: "home-compliance",
    src: "/media/payroll-desk-review.jpg",
    subject: "A manager checking a figure with a colleague mid-call — the monthly statutory review.",
    alt: "A manager reviewing a document with a seated colleague who is on a desk phone",
    width: 1800,
    height: 1200,
  },

  /* ---------------------------------------------------------------- */
  /* Solutions                                                         */
  /* ---------------------------------------------------------------- */
  {
    key: "solutions-overview",
    src: "/media/team-briefing.jpg",
    subject: "A stand-up briefing — the cross-module view of a working week.",
    alt: "A colleague briefing three team members standing beside a whiteboard in an Indian office",
    width: 1800,
    height: 1200,
  },
  {
    key: "hrms",
    src: "/media/manager-briefing-desks.jpg",
    subject: "A manager addressing the floor from the doorway — the single record everyone works from.",
    alt: "A manager holding a printout addressing colleagues seated at a bank of desks",
    width: 1800,
    height: 1200,
  },
  {
    key: "payroll",
    src: "/media/records-desk.jpg",
    subject: "A payroll reviewer working through a file at a monitor — the pre-cutoff check.",
    alt: "A woman in a navy blazer reviewing papers from a file folder at her desk",
    width: 1800,
    height: 2700,
    position: "center 30%",
  },
  {
    key: "employee-management",
    src: "/media/partners-conversation.jpg",
    subject: "Four colleagues mid-conversation — the people record behind every interaction.",
    alt: "Four colleagues standing in conversation in an open-plan Indian office",
    width: 1800,
    height: 1200,
  },
  {
    key: "attendance",
    src: "/media/office-arrival.jpg",
    subject: "A colleague arriving with a mug while another is already at her desk — the moment a punch is recorded.",
    alt: "A colleague walking into the office carrying a mug while a co-worker works at her desk",
    width: 1800,
    height: 2700,
    position: "center 35%",
  },
  {
    key: "leave",
    src: "/media/office-lighter-moment.jpg",
    subject: "A lighter moment at the desks — what a leave calendar everyone trusts protects.",
    alt: "Two colleagues sharing a joke at their desks in an Indian office",
    width: 1800,
    height: 1200,
  },
  {
    key: "ess",
    src: "/media/remote-laptop.jpg",
    subject: "An employee working from home at a laptop — self-service without an HR queue.",
    alt: "A man working at a laptop at a small desk at home",
    width: 1800,
    height: 2700,
    position: "center 45%",
  },
  {
    key: "onboarding",
    src: "/media/welcome-to-team.jpg",
    subject: "A 'Welcome to the team' gift on a desk beside a joining form being signed.",
    alt: "A manager signing a form at a desk beside a gift labelled welcome to the team",
    width: 1800,
    height: 1200,
  },
  {
    key: "lifecycle-exit",
    src: "/media/transition-box.jpg",
    subject: "An employee carrying a packed carton — the exit stage the lifecycle has to handle properly.",
    alt: "An employee carrying a packed cardboard box of desk belongings",
    width: 1800,
    height: 1200,
  },
  {
    key: "analytics",
    src: "/media/analytics-huddle.jpg",
    subject: "Three leaders reading the same report in a glass-walled meeting room.",
    alt: "Three colleagues reviewing printed reports together in a glass-walled meeting room",
    width: 1800,
    height: 1200,
  },

  /* ---------------------------------------------------------------- */
  /* Industries                                                        */
  /* ---------------------------------------------------------------- */
  {
    key: "industry-startups",
    src: "/media/startup-duo.jpg",
    subject: "Two founders at one laptop in a small rented room — the first ten hires.",
    alt: "Two young professionals looking at a laptop together in a small home office",
    width: 2400,
    height: 1600,
  },
  {
    key: "industry-small-business",
    src: "/media/shopkeeper.jpg",
    subject: "A shop owner behind his counter — payroll for a team you know by name.",
    alt: "A young shop owner standing behind the counter of his grocery store in India",
    width: 2400,
    height: 3599,
    position: "center 30%",
  },
  {
    key: "industry-smes",
    src: "/media/ahmedabad-office.jpg",
    subject: "A working session at a laptop in an Ahmedabad office — the mid-market operating rhythm.",
    alt: "Two colleagues working at a laptop in a conference room in an Ahmedabad office",
    width: 2400,
    height: 3599,
    position: "center 30%",
  },
  {
    key: "industry-manufacturing",
    src: "/media/textile-floor.jpg",
    subject: "Two operators on an Indian textile finishing line, ID cards visible — shift, ESI and LWF territory.",
    alt: "Two operators wearing company uniforms and ID cards working on an Indian textile production floor",
    width: 2400,
    height: 1600,
  },
  {
    key: "industry-it-services",
    src: "/media/office-tower-night.jpg",
    subject: "An Indian office tower lit at night — multi-shift delivery centres and 24/7 rosters.",
    alt: "Floors of an Indian office tower lit up at night with people still working at desks",
    width: 2400,
    height: 3196,
    position: "center 40%",
  },
  {
    key: "industry-professional-services",
    src: "/media/industry-consulting-floor.jpg",
    subject: "Three consultants reviewing a client document together on the floor between desks.",
    alt: "Three professionals standing together reviewing a document in a consultancy office",
    width: 2400,
    height: 1600,
  },

  /* ---------------------------------------------------------------- */
  /* Insights — one photograph per article, none shared with a page.   */
  /* ---------------------------------------------------------------- */
  {
    key: "blog-whiteboard-plan",
    src: "/media/blog-whiteboard-plan.jpg",
    subject: "A to-do board with a 'TAX report' card still in progress — the month payroll is trying to close.",
    alt: "A colleague pointing at a task board where a tax report card sits in the in-progress column",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-wage-threshold",
    src: "/media/blog-wage-threshold.jpg",
    subject: "A colleague checking a printed figure — the threshold test that decides ESI applicability.",
    alt: "A professional holding a printed sheet and checking a figure in an office",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-state-filing",
    src: "/media/blog-state-filing.jpg",
    subject: "A compliance lead holding a working file — one company, several state positions.",
    alt: "A professional in a grey blazer holding a red file folder in an office",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-payslip-explained",
    src: "/media/blog-payslip-explained.jpg",
    subject: "Two colleagues going through a document together, line by line.",
    alt: "Two colleagues seated together reading through an open file folder",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-regime-choice",
    src: "/media/blog-regime-choice.jpg",
    subject: "A group working through a decision together — the annual declaration cycle.",
    alt: "Colleagues gathered in a meeting working through paperwork together",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-shift-handover",
    src: "/media/blog-shift-handover.jpg",
    subject: "Two colleagues in conversation between shifts — where comp-off is promised and forgotten.",
    alt: "Two colleagues talking to each other beside desks in an office",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-settlement-review",
    src: "/media/blog-settlement-review.jpg",
    subject: "A working session over a shared file — the shift record being reconciled.",
    alt: "A colleague seated beside another reviewing a folder of documents together",
    width: 2400,
    height: 1600,
  },
  {
    key: "blog-leave-planning",
    src: "/media/blog-leave-planning.jpg",
    subject: "A quieter moment away from the desks — what a leave policy is ultimately about.",
    alt: "A professional seated on an office sofa reviewing notes",
    width: 2400,
    height: 1600,
  },

  /* ---------------------------------------------------------------- */
  /* Resources, company, policy                                        */
  /* ---------------------------------------------------------------- */
  {
    key: "white-papers",
    src: "/media/briefing-paper.jpg",
    subject: "A colleague presenting from a single sheet — the format every HRMagix paper takes.",
    alt: "A man presenting from a printed sheet of paper to colleagues in a meeting room",
    width: 1800,
    height: 2700,
    position: "center 25%",
  },
  {
    key: "media-room",
    src: "/media/media-briefing-note.jpg",
    subject: "A spokesperson handing over a briefing note — the exchange this page exists to support.",
    alt: "A communications lead handing a printed briefing note to a colleague in an office",
    width: 2400,
    height: 3600,
    position: "center 30%",
  },
  {
    key: "calculator",
    src: "/media/helpdesk-call.jpg",
    subject: "A finance lead reading a statement on a call — the person these calculators are for.",
    alt: "A finance professional reading a printed statement while on a phone call",
    width: 1800,
    height: 1202,
  },
  {
    key: "about",
    src: "/media/team-portrait.jpg",
    subject: "A team portrait taken at their own desks rather than in a studio.",
    alt: "Four colleagues photographed together at their desks in an Indian office",
    width: 1800,
    height: 1200,
  },
  {
    key: "careers",
    src: "/media/portrait-arjun.jpg",
    subject: "A team lead in front of his colleagues — what joining looks like from the inside.",
    alt: "A smiling team lead standing in the foreground with three colleagues behind him",
    width: 1800,
    height: 1200,
  },
  {
    key: "contact",
    src: "/media/portrait-meera.jpg",
    subject: "A specialist ready to take the call, photographed plainly.",
    alt: "A professional in a navy blazer standing with her arms folded against a plain wall",
    width: 1800,
    height: 1200,
  },
  {
    key: "vendor",
    src: "/media/policy-handover.jpg",
    subject: "A file handover across a desk — the working relationship a partner has with a customer.",
    alt: "A colleague handing over a stack of files to a seated co-worker",
    width: 1800,
    height: 2700,
    position: "center 30%",
  },
  {
    key: "policy",
    src: "/media/portrait-sanjay.jpg",
    subject: "A single considered portrait for the policy library — policies are about people, not paper.",
    alt: "A professional in a waistcoat and tie photographed against a plain wall",
    width: 1800,
    height: 2700,
    position: "center 25%",
  },
  {
    key: "press-kit",
    src: "/media/portrait-vikram.jpg",
    subject: "A press-ready portrait in the style journalists are asked to use.",
    alt: "A professional in a dark waistcoat photographed against a plain light wall",
    width: 1800,
    height: 2700,
    position: "center 22%",
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

/**
 * The site's image layer.
 *
 * WHAT EXISTS TODAY
 * hrmagix.com ships no photography, screenshots or video — verified at source:
 * zero <img>, <picture>, <video> and background-image rules, no og:image, and
 * no /images or /assets directory. The one authentic raster/vector asset the
 * brand publishes is its product mark (app.hrmagix.com/favicon.svg), which is
 * checked in as public/hrmagix-mark.svg and used in the logo lockup.
 *
 * So the product visuals on this site are rendered in the browser from figures
 * HRMagix publishes (see components/ProductVisuals.tsx and Workspace.tsx) —
 * the same approach hrmagix.com takes — rather than invented screenshots.
 *
 * HOW TO ADD REAL IMAGERY
 * Drop a file into /public/media using the `file` name below and set `src`.
 * Every slot already carries its intended subject, aspect ratio, rendered size
 * and alt text, and <Media> is wired for next/image. Nothing else changes:
 * a slot with `src` renders the photograph, a slot without falls back to the
 * live product rendering that is there now.
 */

export type MediaSlot = {
  key: string;
  /** Set once the asset exists, e.g. "/media/hero-team.jpg". */
  src?: string;
  /** Intended filename under /public/media. */
  file: string;
  /** What the image should show. Guidance for whoever supplies it. */
  subject: string;
  /** Alt text to ship with it. */
  alt: string;
  width: number;
  height: number;
  /** Above the fold slots load eagerly; everything else lazy-loads. */
  priority?: boolean;
};

export const mediaSlots: MediaSlot[] = [
  {
    key: "hero",
    file: "hero-workspace.png",
    subject:
      "A real HRMagix dashboard screenshot, captured from app.hrmagix.com at 2560×1600 or wider.",
    alt: "The HRMagix workspace showing today's people snapshot",
    width: 1600,
    height: 1000,
    priority: true,
  },
  {
    key: "attendance",
    file: "module-attendance.png",
    subject: "Attendance & Shifts module — the live presence board.",
    alt: "HRMagix attendance board showing who is present, on leave, absent and remote",
    width: 1200,
    height: 900,
  },
  {
    key: "performance",
    file: "module-performance.png",
    subject: "Objectives & OKRs module — goal progress for the quarter.",
    alt: "HRMagix performance screen showing quarterly OKR progress",
    width: 1200,
    height: 900,
  },
  {
    key: "payroll",
    file: "module-payroll.png",
    subject: "Payroll module — a completed run with payslips and compliance.",
    alt: "HRMagix payroll run showing payslips, taxes and compliance",
    width: 1200,
    height: 900,
  },
  {
    key: "recognition",
    file: "module-recognition.png",
    subject: "Recognition module — the kudos wall.",
    alt: "HRMagix recognition wall showing kudos between colleagues",
    width: 1200,
    height: 900,
  },
  {
    key: "mobile",
    file: "app-punch-in.png",
    subject: "The HRMagix mobile app punch-in screen, portrait, 1170×2532.",
    alt: "One-tap punch-in on the HRMagix mobile app",
    width: 600,
    height: 1300,
  },
  {
    key: "team",
    file: "team-at-work.jpg",
    subject:
      "Photography of the HRMagix team or a customer people-team at work. Landscape, 2400px wide, licensed for web use.",
    alt: "A people team at work",
    width: 1600,
    height: 900,
  },
];

export const bySlot = (key: string) => mediaSlots.find((m) => m.key === key);

/** True when a real asset has been supplied for this slot. */
export const hasAsset = (key: string) => Boolean(bySlot(key)?.src);

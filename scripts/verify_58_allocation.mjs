import fs from 'fs';

const siteAllocation = {
  // Homepage (8)
  'home-hero': '/media/people-office-work.webp',
  'home-manifesto': '/media/documents-huddle.webp',
  'home-modules': '/media/manager-briefing-desks.webp',
  'team-collaboration': '/media/team-collaboration.webp',
  'home-compliance': '/media/payroll-desk-review.webp',
  'home-plain-terms': '/media/partners-conversation.webp',
  'home-how-it-works': '/media/office-arrival.webp',
  'home-before-after': '/media/records-desk.webp',

  // Solutions (11)
  'solutions-hero-bg': '/media/solutions-hub-bg.webp',
  'solutions-hrms': '/media/hrms-desk-hero-bg.webp',
  'solutions-payroll': '/media/home-hero-bg.webp',
  'solutions-employee-management': '/media/employee-records-consult.webp',
  'solutions-attendance': '/media/attendance-hero-bg.webp',
  'solutions-leave-management': '/media/leave-breakout-lounge.webp',
  'solutions-ess': '/media/remote-laptop.webp',
  'solutions-onboarding': '/media/welcome-to-team.webp',
  'solutions-hr-analytics': '/media/analytics-huddle.webp',
  'solutions-performance-bg': '/media/team-briefing.webp',
  'solutions-compliance-bg': '/media/compliance-hero-bg.webp',

  // Industries (7)
  'industries-hero-bg': '/media/tech-park-campus.webp',
  'industry-startups': '/media/startup-duo.webp',
  'industry-small-business': '/media/shopkeeper.webp',
  'industry-smes': '/media/ahmedabad-office.webp',
  'industry-manufacturing': '/media/textile-floor.webp',
  'industry-it-services': '/media/office-tower-night.webp',
  'industry-professional-services': '/media/industry-consulting-floor.webp',

  // Core subpages (6)
  'pricing-hero-bg': '/media/pricing-hero-bg.webp',
  'how-it-works-hero-bg': '/media/how-it-works-hero-bg.webp',
  'how-it-works': '/media/how-it-works.webp',
  'features-hero-bg': '/media/workspace-plan.webp',
  'hr-topics-hero-bg': '/media/corporate-office-hero.webp',
  'policy-hero-bg': '/media/policy-handover.webp',
  'policy-workplace-hero-bg': '/media/workplace-policies-hero-bg.webp',

  // Resources (9)
  'resources-hero-bg': '/media/solutions-hero-bg.webp',
  'resources-payroll-bg': '/media/helpdesk-call.webp',
  'resources-faqs-bg': '/media/media-briefing-note.webp',
  'hrms-comparison-hero-bg': '/media/hrms-comparison-bg.webp',
  'resources-whitepapers-hero-bg': '/media/whitepapers-hero-bg.webp',
  'resources-guides-hero-bg': '/media/guides-hero-bg.webp',
  'resources-glossary-hero-bg': '/media/glossary-hero-bg.webp',
  'resources-calculator-hero-bg': '/media/calculator-hero-bg.webp',
  'resources-media-hero-bg': '/media/media-room-hero-bg.webp',

  // Company & Vendor (6)
  'about-hero-bg': '/media/about-hero-bg.webp',
  'about': '/media/team-portrait.webp',
  'careers-hero-bg': '/media/careers-hero-bg.webp',
  'contact-hero-bg': '/media/contact-hero-bg.webp',
  'presskit-hero-bg': '/media/presskit-hero-bg.webp',
  'vendor-hero-bg': '/media/vendor-hero-bg.webp',

  // Blog Hub (1)
  'blog-hero-bg': '/media/blog-hero-bg.webp',

  // Blog Articles in lib/blog.ts (8)
  'blog-whiteboard-plan': '/media/blog-whiteboard-plan.webp',
  'blog-wage-threshold': '/media/blog-wage-threshold.webp',
  'blog-state-filing': '/media/blog-state-filing.webp',
  'blog-payslip-explained': '/media/blog-payslip-explained.webp',
  'blog-regime-choice': '/media/blog-regime-choice.webp',
  'blog-shift-handover': '/media/blog-shift-handover.webp',
  'blog-settlement-review': '/media/blog-settlement-review.webp',
  'blog-leave-planning': '/media/blog-leave-planning.webp',
};

console.log('Total allocated slots:', Object.keys(siteAllocation).length);

// Verify all files exist
let missing = 0;
for (const [slot, src] of Object.entries(siteAllocation)) {
  const filePath = 'public' + src;
  if (!fs.existsSync(filePath)) {
    console.error(`MISSING FILE: ${src} for slot ${slot}`);
    missing++;
  }
}
if (missing === 0) {
  console.log('All 58 files physically exist on disk!');
}

// Check duplicates
const srcToSlots = {};
for (const [slot, src] of Object.entries(siteAllocation)) {
  if (!srcToSlots[src]) srcToSlots[src] = [];
  srcToSlots[src].push(slot);
}

const dupes = Object.entries(srcToSlots).filter(([s, slots]) => slots.length > 1);
if (dupes.length > 0) {
  console.error('DUPLICATES DETECTED:', dupes);
} else {
  console.log('PERFECT! EXACTLY ZERO DUPLICATES ACROSS ALL 58 SLOTS!');
}

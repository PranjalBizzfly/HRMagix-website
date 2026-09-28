import fs from 'fs';

const availableFiles = fs.readdirSync('public/media').filter(f => f.endsWith('.webp'));
console.log(`Available files (${availableFiles.length}):\n`, availableFiles);

// Defined mappings: slot -> file
const proposed = {
  // Homepage (8)
  'home-hero': 'people-office-work.webp',
  'home-manifesto': 'documents-huddle.webp',
  'home-modules': 'manager-briefing-desks.webp',
  'team-collaboration': 'team-collaboration.webp',
  'home-compliance': 'payroll-desk-review.webp',
  'home-plain-terms': 'partners-conversation.webp',
  'home-how-it-works': 'office-arrival.webp',
  'home-before-after': 'records-desk.webp',

  // Solutions (11)
  'solutions-hero-bg': 'solutions-hub-bg.webp',
  'solutions-hrms': 'hrms-desk-hero-bg.webp',
  'solutions-payroll': 'home-hero-bg.webp',
  'solutions-employee-management': 'employee-records-consult.webp',
  'solutions-attendance': 'attendance-hero-bg.webp',
  'solutions-leave-management': 'leave-breakout-lounge.webp',
  'solutions-ess': 'remote-laptop.webp',
  'solutions-onboarding': 'welcome-to-team.webp',
  'solutions-hr-analytics': 'analytics-huddle.webp',
  'solutions-performance-bg': 'team-briefing.webp',
  'solutions-compliance-bg': 'compliance-hero-bg.webp',

  // Industries (7)
  'industries-hero-bg': 'tech-park-campus.webp',
  'industry-startups': 'startup-duo.webp',
  'industry-small-business': 'shopkeeper.webp',
  'industry-smes': 'ahmedabad-office.webp',
  'industry-manufacturing': 'textile-floor.webp',
  'industry-it-services': 'office-tower-night.webp',
  'industry-professional-services': 'industry-consulting-floor.webp',

  // How it works (2)
  'how-it-works-hero-bg': 'how-it-works-hero-bg.webp',
  'how-it-works': 'how-it-works.webp',

  // Features (1)
  'features-hero-bg': 'workspace-plan.webp',

  // Pricing (1)
  'pricing-hero-bg': 'pricing-hero-bg.webp',

  // Resources (9)
  'resources-hero-bg': 'solutions-hero-bg.webp',
  'resources-payroll-bg': 'helpdesk-call.webp',
  'resources-faqs-bg': 'media-briefing-note.webp',
  'resources-hrms-comparison-hero-bg': 'hrms-comparison-bg.webp',
  'resources-whitepapers-hero-bg': 'whitepapers-hero-bg.webp',
  'resources-guides-hero-bg': 'office-lighter-moment.webp',
  'resources-glossary-hero-bg': 'transition-box.webp',
  'resources-calculator-hero-bg': 'hero-workspace.webp',
  'resources-media-hero-bg': 'briefing-paper.webp',

  // HR Topics (1)
  'hr-topics-hero-bg': 'corporate-office-hero.webp',

  // Policy (2)
  'policy-hero-bg': 'policy-handover.webp',
  'policy-workplace-hero-bg': 'portrait-arjun.webp',

  // Company (4)
  'about-hero-bg': 'portrait-sanjay.webp',
  'about': 'team-portrait.webp',
  'careers-hero-bg': 'portrait-meera.webp',
  'presskit-hero-bg': 'portrait-vikram.webp',

  // Blog articles (8)
  'blog-whiteboard-plan': 'blog-whiteboard-plan.webp',
  'blog-wage-threshold': 'blog-wage-threshold.webp',
  'blog-state-filing': 'blog-state-filing.webp',
  'blog-payslip-explained': 'blog-payslip-explained.webp',
  'blog-regime-choice': 'blog-regime-choice.webp',
  'blog-shift-handover': 'blog-shift-handover.webp',
  'blog-settlement-review': 'blog-settlement-review.webp',
  'blog-leave-planning': 'blog-leave-planning.webp',
};

console.log('\nTotal proposed slots:', Object.keys(proposed).length);

// Check if all proposed files exist
const missingFiles = [];
for (const [slot, file] of Object.entries(proposed)) {
  if (!availableFiles.includes(file)) {
    missingFiles.push({ slot, file });
  }
}
if (missingFiles.length > 0) {
  console.error('MISSING FILES:', missingFiles);
} else {
  console.log('All proposed files exist in public/media! Wonderful.');
}

// Check for duplicates
const fileToSlots = {};
for (const [slot, file] of Object.entries(proposed)) {
  if (!fileToSlots[file]) fileToSlots[file] = [];
  fileToSlots[file].push(slot);
}

const duplicates = Object.entries(fileToSlots).filter(([f, slots]) => slots.length > 1);
if (duplicates.length > 0) {
  console.error('DUPLICATES FOUND:', duplicates);
} else {
  console.log('EXACTLY ZERO DUPLICATES! Every slot maps to a unique file.');
}

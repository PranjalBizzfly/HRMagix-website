import fs from 'fs';
import path from 'path';

const mediaFiles = fs.readdirSync('public/media').filter(f => f.endsWith('.webp'));
const mediaContent = fs.readFileSync('lib/media.ts', 'utf8');

const regex = /key:\s*["']([^"']+)["'][\s\S]*?src:\s*["']([^"']+)["']/g;
const slots = [];
let m;
while ((m = regex.exec(mediaContent)) !== null) {
  slots.push({ key: m[1], src: m[2] });
}

console.log('--- SUMMARY STATS ---');
console.log('Total .webp image files in public/media:', mediaFiles.length);
console.log('Total registered slots in lib/media.ts:', slots.length);

const uniqueSrcs = new Set(slots.map(s => s.src));
console.log('Unique image files mapped in lib/media.ts:', uniqueSrcs.size);

// Breakdown by categories
const categories = {
  'Homepage Sections': ['home-hero', 'home-manifesto', 'home-modules', 'team-collaboration', 'home-compliance', 'home-plain-terms', 'home-how-it-works', 'home-before-after'],
  'Solutions Hub & Modules': ['solutions-hero-bg', 'solutions-hrms', 'solutions-payroll', 'solutions-employee-management', 'solutions-attendance', 'solutions-leave-management', 'solutions-ess', 'solutions-onboarding', 'solutions-hr-analytics', 'solutions-performance-bg', 'solutions-compliance-bg', 'solutions-overview', 'lifecycle-exit'],
  'Industry Verticals': ['industries-hero-bg', 'industry-startups', 'industry-small-business', 'industry-smes', 'industry-manufacturing', 'industry-it-services', 'industry-professional-services'],
  'Operational Subpages': ['pricing-hero-bg', 'how-it-works-hero-bg', 'how-it-works', 'features-hero-bg', 'hr-topics-hero-bg', 'policy-hero-bg', 'policy-workplace-hero-bg'],
  'Individual Feature Modules': ['feature-attendance', 'feature-leaves', 'feature-payroll', 'feature-employee-directory', 'feature-documents-reminders', 'feature-okrs-kras', 'feature-nine-box-grid', 'feature-peer-recognition', 'feature-reports-analytics', 'feature-employee-self-service', 'feature-compliance-vault', 'feature-offboarding-fnf'],
  'Statutory Calculators': ['calc-salary', 'calc-pf', 'calc-esi', 'calc-gratuity', 'calc-payroll-cost', 'calc-plan-cost', 'calc-overtime', 'calc-ctc'],
  'Policy & Governance': ['policy-privacy', 'policy-terms', 'policy-security', 'policy-cookies'],
  'Resources Subpages': ['resources-hero-bg', 'resources-payroll-bg', 'resources-faqs-bg', 'hrms-comparison-hero-bg', 'resources-whitepapers-hero-bg', 'resources-guides-hero-bg', 'resources-glossary-hero-bg', 'resources-calculator-hero-bg', 'resources-media-hero-bg'],
  'Company & Vendor': ['about-hero-bg', 'about', 'careers-hero-bg', 'contact-hero-bg', 'presskit-hero-bg', 'vendor-hero-bg'],
  'Blog Hub & Articles': ['blog-hero-bg', 'blog-whiteboard-plan', 'blog-wage-threshold', 'blog-state-filing', 'blog-payslip-explained', 'blog-regime-choice', 'blog-shift-handover', 'blog-settlement-review', 'blog-leave-planning']
};

console.log('\n--- BREAKDOWN BY SECTION ---');
let totalCategorized = 0;
for (const [cat, keys] of Object.entries(categories)) {
  console.log(`${cat.padEnd(28)}: ${keys.length} images`);
  totalCategorized += keys.length;
}
console.log('-------------------------------------------');
console.log(`Total active unique images  : ${totalCategorized}`);

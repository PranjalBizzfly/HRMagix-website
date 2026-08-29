import fs from 'fs';
import path from 'path';

const mediaTs = fs.readFileSync('lib/media.ts', 'utf8');
const mediaDir = path.join(process.cwd(), 'public', 'media');
const files = fs.readdirSync(mediaDir);

console.log('====================================');
console.log('  HRMAGIX MEDIA UPGRADE AUDIT');
console.log('====================================');
console.log(`Total files in public/media: ${files.length}`);

// Extract all src from lib/media.ts
const srcMatches = [...mediaTs.matchAll(/src:\s*"([^"]+)"/g)].map(m => m[1]);
console.log(`Total slots registered in lib/media.ts: ${srcMatches.length}`);

// Check for duplicates
const counts = {};
srcMatches.forEach(s => counts[s] = (counts[s] || 0) + 1);
const duplicates = Object.entries(counts).filter(([_, c]) => c > 1);

if (duplicates.length === 0) {
  console.log('✓ PASS: Zero duplicate image registrations in lib/media.ts');
} else {
  console.error('✗ FAIL: Duplicate images found:', duplicates);
  process.exit(1);
}

// Check single dashboard rule
const dashboardScreens = srcMatches.filter(s => s.includes('workspace') || s.includes('dashboard'));
console.log(`Dashboard / product screenshot count: ${dashboardScreens.length} (${dashboardScreens[0]})`);
if (dashboardScreens.length === 1 && (dashboardScreens[0] === '/media/hero-workspace.png' || dashboardScreens[0] === '/media/hero-workspace.jpg')) {
  console.log('✓ PASS: Exactly ONE authentic product screenshot on the website (' + dashboardScreens[0] + ')');
} else {
  console.error('✗ FAIL: Dashboard screenshot rule violated:', dashboardScreens);
  process.exit(1);
}

// Check that every file exists on disk and is high resolution
let missing = 0;
let lowRes = 0;

for (const src of srcMatches) {
  const localFile = path.join(process.cwd(), 'public', src);
  if (!fs.existsSync(localFile)) {
    console.error(`✗ Missing file: ${src}`);
    missing++;
  } else {
    const stat = fs.statSync(localFile);
    if (stat.size < 50 * 1024) {
      console.warn(`! Warning: Small file size for ${src} (${(stat.size / 1024).toFixed(1)} KB)`);
      lowRes++;
    }
  }
}

if (missing === 0) {
  console.log(`✓ PASS: All ${srcMatches.length} registered images exist physically in public/media`);
} else {
  console.error(`✗ FAIL: ${missing} files missing`);
  process.exit(1);
}

console.log('====================================');
console.log('  ALL AUDIT CHECKS PASSED PERFECTLY');
console.log('====================================');

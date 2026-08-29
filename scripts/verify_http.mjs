import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/solutions',
  '/solutions/hrms',
  '/solutions/payroll',
  '/solutions/employee-management',
  '/solutions/attendance',
  '/solutions/leave-management',
  '/solutions/ess',
  '/solutions/onboarding',
  '/solutions/analytics',
  '/solutions/compliance',
  '/solutions/performance',
  '/industries',
  '/industries/startups',
  '/industries/small-business',
  '/industries/smes',
  '/industries/manufacturing',
  '/industries/it-services',
  '/industries/professional-services',
  '/pricing',
  '/how-it-works',
  '/blog',
  '/blog/why-payroll-takes-four-days',
  '/blog/esi-threshold-moving-wage-base',
  '/blog/professional-tax-february',
  '/company/about',
  '/company/careers',
  '/company/contact',
  '/company/press-kit',
  '/resources',
  '/resources/faqs',
  '/resources/glossary',
  '/resources/guides',
  '/resources/hrms-comparison',
  '/resources/media',
  '/resources/payroll',
  '/resources/white-papers',
  '/resources/white-papers/chain-of-custody',
  '/resources/calculator',
  '/policy',
  '/policy/privacy',
  '/policy/terms',
  '/policy/security',
  '/policy/cookies',
  '/policy/workplace-policies',
  '/vendor'
];

async function getBaseUrl() {
  for (const port of [3005, 3000, 3001, 3002]) {
    try {
      const res = await fetch(`http://localhost:${port}/`);
      if (res.ok) return `http://localhost:${port}`;
    } catch {}
  }
  return 'http://localhost:3005';
}

async function checkAll() {
  const base = await getBaseUrl();
  console.log(`=== CHECKING HTTP ROUTES ON ${base} ===`);
  let passed = 0;
  let failed = 0;

  for (const r of routes) {
    try {
      const res = await fetch(`${base}${r}`);
      if (res.status === 200) {
        console.log(`✓ ${r.padEnd(45)} 200 OK`);
        passed++;
      } else {
        console.error(`✗ ${r.padEnd(45)} Status: ${res.status}`);
        failed++;
      }
    } catch (e) {
      console.error(`✗ ${r.padEnd(45)} Error: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n=== CHECKING ASSET DELIVERABILITY ===`);
  const mediaTs = fs.readFileSync('lib/media.ts', 'utf8');
  const srcMatches = [...mediaTs.matchAll(/src:\s*"([^"]+)"/g)].map(m => m[1]);

  for (const src of srcMatches) {
    try {
      const res = await fetch(`${base}${src}`);
      if (res.status === 200) {
        const len = res.headers.get('content-length') || 0;
        console.log(`✓ ${src.padEnd(45)} 200 OK (${(len / 1024).toFixed(0)} KB)`);
        passed++;
      } else {
        console.error(`✗ ${src.padEnd(45)} Status: ${res.status}`);
        failed++;
      }
    } catch (e) {
      console.error(`✗ ${src.padEnd(45)} Error: ${e.message}`);
      failed++;
    }
  }

  console.log(`\nSummary: ${passed} passed, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

checkAll();

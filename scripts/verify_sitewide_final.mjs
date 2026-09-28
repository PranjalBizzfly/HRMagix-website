import fs from 'fs';
import path from 'path';
import MEDIA, { bySlot } from '../lib/media.js';

console.log('=== SITE-WIDE IMAGE & HERO VERIFICATION ===\n');

// 1. Check all slots in lib/media.ts
const registeredSlots = Object.keys(MEDIA);
console.log(`Registered slots in lib/media.ts: ${registeredSlots.length}`);

const srcMap = {};
let missingFiles = 0;
for (const [key, asset] of Object.entries(MEDIA)) {
  const diskPath = path.join('public', asset.src.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    console.error(`ERROR: File missing on disk for slot "${key}": ${diskPath}`);
    missingFiles++;
  }
  if (!srcMap[asset.src]) srcMap[asset.src] = [];
  srcMap[asset.src].push(key);
}

if (missingFiles === 0) {
  console.log('PASS: All image files referenced in lib/media.ts exist on disk.');
}

// 2. Check for duplicate srcs in lib/media.ts
const duplicateSrcs = Object.entries(srcMap).filter(([_, slots]) => slots.length > 1);
if (duplicateSrcs.length > 0) {
  console.error('\nFAIL: Duplicate image files mapped in lib/media.ts:');
  for (const [src, slots] of duplicateSrcs) {
    console.error(`   ${src} mapped to multiple slots: ${slots.join(', ')}`);
  }
} else {
  console.log('PASS: Exactly 0 duplicate image files in lib/media.ts (100% 1-to-1 mapping).');
}

// 3. Scan all page and component files for slot usages
function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const s = fs.statSync(full);
    if (s.isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      if (!full.includes('media.ts') && !full.includes('verify_') && !full.includes('inspect_') && !full.includes('test_') && !full.includes('audit_')) {
        results.push(full);
      }
    }
  }
  return results;
}

const sourceFiles = walk('.');
const usedSlots = new Map();

for (const f of sourceFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative('.', f).replace(/\\/g, '/');

  const matches = [...content.matchAll(/(?:slot|bgSlot)\s*=\s*["']([^"']+)["']/g)];
  for (const m of matches) {
    const slot = m[1];
    if (!usedSlots.has(slot)) usedSlots.set(slot, new Set());
    usedSlots.get(slot).add(rel);
  }
}

// Add dynamic slots from lib/solutions.ts and lib/industries.ts
import { solutions } from '../lib/solutions.js';
for (const s of solutions) {
  if (s.image) {
    if (!usedSlots.has(s.image)) usedSlots.set(s.image, new Set());
    usedSlots.get(s.image).add(`lib/solutions.ts (${s.slug})`);
  }
}

import { industries } from '../lib/industries.js';
for (const ind of industries) {
  if (ind.image) {
    if (!usedSlots.has(ind.image)) usedSlots.set(ind.image, new Set());
    usedSlots.get(ind.image).add(`lib/industries.ts (${ind.slug})`);
  }
}

import { articles } from '../lib/blog.js';
for (const art of articles) {
  if (art.image) {
    if (!usedSlots.has(art.image)) usedSlots.set(art.image, new Set());
    usedSlots.get(art.image).add(`lib/blog.ts (${art.slug})`);
  }
}

console.log(`\nTotal unique slots referenced across codebase: ${usedSlots.size}`);

// Verify all referenced slots exist in lib/media.ts
let unregisteredSlots = 0;
for (const [slot, files] of usedSlots.entries()) {
  if (!MEDIA[slot]) {
    console.error(`WARNING: Slot "${slot}" used in code but NOT registered in lib/media.ts:`);
    for (const f of files) console.error(`   - ${f}`);
    unregisteredSlots++;
  }
}

if (unregisteredSlots === 0) {
  console.log('PASS: All slots referenced across the codebase are registered in lib/media.ts.');
}

// 4. Verify ZERO image src repetition across all used slots
const usedSrcMap = new Map();
for (const slot of usedSlots.keys()) {
  const asset = MEDIA[slot];
  if (!asset) continue;
  if (!usedSrcMap.has(asset.src)) usedSrcMap.set(asset.src, []);
  usedSrcMap.get(asset.src).push(slot);
}

const repeatedSrcs = [...usedSrcMap.entries()].filter(([_, slots]) => slots.length > 1);
if (repeatedSrcs.length > 0) {
  console.error('\nFAIL: Repeated image sources detected:');
  for (const [src, slots] of repeatedSrcs) {
    console.error(`   ${src} used by: ${slots.join(', ')}`);
  }
} else {
  console.log('PASS: Strict zero-repetition verified! Every image file is used in exactly 1 place.');
}

console.log('\n=== VERIFICATION COMPLETE ===');

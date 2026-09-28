import fs from 'fs';
import path from 'path';
import { mediaSlots } from '../lib/media.ts';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git') && !file.includes('scripts')) {
        results = results.concat(walk(file));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('.');
const usedSlots = new Set();
const fileSlots = {};

// Also add solution image slots from solutions.ts
import { solutions } from '../lib/solutions.ts';
solutions.forEach(s => {
  usedSlots.add(s.image);
  fileSlots[s.image] = fileSlots[s.image] || [];
  fileSlots[s.image].push('lib/solutions.ts -> ' + s.slug);
});

// Also add industry image slots from industries.ts
import { industries } from '../lib/industries.ts';
industries.forEach(ind => {
  usedSlots.add(ind.image);
  fileSlots[ind.image] = fileSlots[ind.image] || [];
  fileSlots[ind.image].push('lib/industries.ts -> ' + ind.slug);
});

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const slotRegex = /slot=["']([^"']+)["']/g;
  const bgSlotRegex = /bgSlot=["']([^"']+)["']/g;
  let match;
  while ((match = slotRegex.exec(content)) !== null) {
    usedSlots.add(match[1]);
    fileSlots[match[1]] = fileSlots[match[1]] || [];
    fileSlots[match[1]].push(f);
  }
  while ((match = bgSlotRegex.exec(content)) !== null) {
    usedSlots.add(match[1]);
    fileSlots[match[1]] = fileSlots[match[1]] || [];
    fileSlots[match[1]].push(f);
  }
});

const srcUsage = {};
let missingSlots = false;
for (const slotKey of usedSlots) {
  const slot = Array.isArray(mediaSlots) ? mediaSlots.find(s => s.key === slotKey) : mediaSlots[slotKey];
  if (slot) {
    srcUsage[slot.src] = srcUsage[slot.src] || [];
    srcUsage[slot.src].push({ slotKey, files: fileSlots[slotKey] });
  } else {
    missingSlots = true;
    console.warn(`WARNING: Slot "${slotKey}" is used but not registered in mediaSlots!`);
  }
}

let duplicatesFound = false;
console.log('--- CHECKING SITE-WIDE UNIQUE IMAGE FILES ---');
for (const [src, usages] of Object.entries(srcUsage)) {
  if (usages.length > 1) {
    duplicatesFound = true;
    console.error(`DUPLICATE IMAGE FILE: ${src} is used by multiple slots:`, usages);
  }
}

if (!duplicatesFound && !missingSlots) {
  console.log(`SUCCESS! All ${Object.keys(srcUsage).length} active image files across the entire website are 100% UNIQUE.`);
}

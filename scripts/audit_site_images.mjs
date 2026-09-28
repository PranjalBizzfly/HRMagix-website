import fs from 'fs';
import path from 'path';

// Load lib/media.ts mapping
const mediaContent = fs.readFileSync('lib/media.ts', 'utf8');
const mediaEntries = [];
const entryRegex = /key:\s*["']([^"']+)["'][\s\S]*?src:\s*["']([^"']+)["']/g;
let m;
while ((m = entryRegex.exec(mediaContent)) !== null) {
  mediaEntries.push({ key: m[1], src: m[2] });
}

console.log('Total slots registered in lib/media.ts:', mediaEntries.length);

// Count how many times each src is registered in lib/media.ts
const srcToSlots = {};
for (const entry of mediaEntries) {
  if (!srcToSlots[entry.src]) srcToSlots[entry.src] = [];
  srcToSlots[entry.src].push(entry.key);
}

const duplicateSrcs = Object.entries(srcToSlots).filter(([src, slots]) => slots.length > 1);
if (duplicateSrcs.length > 0) {
  console.log('\n--- DUPLICATE SRCS IN lib/media.ts ---');
  for (const [src, slots] of duplicateSrcs) {
    console.log(`${src} registered by multiple slots: ${slots.join(', ')}`);
  }
} else {
  console.log('\nAll slots in lib/media.ts point to unique src files! Excellent.');
}

// Now search for all slot usages across code
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (!full.includes('media.ts')) {
        results.push(full);
      }
    }
  }
  return results;
}

const codeFiles = walk('.');
const slotUsages = {};

// Literal slot="..." or slot='...' or bgSlot="..."
for (const file of codeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('.', file).replace(/\\/g, '/');
  
  const matches = [...content.matchAll(/(?:slot|bgSlot|image)\s*[:=]\s*["']([^"']+)["']/g)];
  for (const match of matches) {
    const slot = match[1];
    // filter out non-image properties if any
    if (slot.includes('/') || slot.includes(' ') || slot.length > 40) continue;
    if (!slotUsages[slot]) slotUsages[slot] = new Set();
    slotUsages[slot].add(rel);
  }
}

console.log('\n--- SLOTS USED IN MULTIPLE PLACES ---');
let multiUsageCount = 0;
for (const [slot, files] of Object.entries(slotUsages)) {
  if (files.size > 1) {
    multiUsageCount++;
    console.log(`Slot "${slot}" used in ${files.size} places:`);
    for (const f of files) console.log(`   - ${f}`);
  }
}
if (multiUsageCount === 0) {
  console.log('No slots are used in multiple files!');
}

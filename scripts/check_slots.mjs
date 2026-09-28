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
const slotCounts = {};
const fileSlots = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const slotRegex = /slot=["']([^"']+)["']/g;
  const bgSlotRegex = /bgSlot=["']([^"']+)["']/g;
  let match;
  while ((match = slotRegex.exec(content)) !== null) {
    const s = match[1];
    slotCounts[s] = (slotCounts[s] || 0) + 1;
    fileSlots[s] = fileSlots[s] || [];
    fileSlots[s].push(f);
  }
  while ((match = bgSlotRegex.exec(content)) !== null) {
    const s = match[1];
    slotCounts[s] = (slotCounts[s] || 0) + 1;
    fileSlots[s] = fileSlots[s] || [];
    fileSlots[s].push(f);
  }
});

console.log('--- REPEATED SLOTS ---');
let hasRepeats = false;
for (const [s, count] of Object.entries(slotCounts)) {
  if (count > 1) {
    hasRepeats = true;
    console.log(s, count, fileSlots[s]);
  }
}
if (!hasRepeats) {
  console.log('NONE! All used slots are 100% unique.');
}

const allRegistered = mediaSlots.map(s => s.key);
const unused = allRegistered.filter(s => !slotCounts[s]);
console.log('\n--- UNUSED SLOTS (' + unused.length + ') ---');
console.log(unused);

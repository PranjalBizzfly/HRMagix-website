import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const pages = walk('app');
console.log('Total page.tsx files:', pages.length);

const results = [];
for (const p of pages) {
  const content = fs.readFileSync(p, 'utf8');
  const rel = path.relative('.', p).replace(/\\/g, '/');
  
  const hasPageHero = content.includes('<PageHero');
  const hasHeader = content.includes('<header');
  const hasHeroClass = content.includes('hero') || content.includes('page-hero');
  
  // Extract any slot used in PageHero bgSlot or in the first 60 lines (hero area)
  const bgSlotMatch = content.match(/bgSlot=({[^}]+}|"[^"]+"|\'[^\']+\')/);
  
  // Extract Photo slots
  const photoSlots = [...content.matchAll(/slot=({[^}]+}|"[^"]+"|\'[^\']+\')/g)].map(m => m[1]);

  results.push({
    page: rel,
    hasPageHero,
    hasHeader,
    hasHeroClass,
    bgSlot: bgSlotMatch ? bgSlotMatch[1] : null,
    firstSlots: photoSlots.slice(0, 3)
  });
}

console.log(JSON.stringify(results, null, 2));

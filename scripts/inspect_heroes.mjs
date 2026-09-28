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

const report = [];

for (const file of pages) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('.', file).replace(/\\/g, '/');
  
  // check PageHero
  const pageHeroMatch = content.match(/<PageHero[\s\S]*?(?:\/>|<\/PageHero>)/);
  // check header
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
  
  let heroPhotoSlot = null;
  let heroBgSlot = null;
  
  if (pageHeroMatch) {
    const heroCode = pageHeroMatch[0];
    const bgMatch = heroCode.match(/bgSlot=({[^}]+}|"[^"]+"|\'[^\']+\')/);
    if (bgMatch) heroBgSlot = bgMatch[1];
  }
  
  if (headerMatch) {
    const headerCode = headerMatch[0];
    const photoMatch = headerCode.match(/<Photo\s+slot=({[^}]+}|"[^"]+"|\'[^\']+\')/);
    if (photoMatch) heroPhotoSlot = photoMatch[1];
  }
  
  const status = (heroPhotoSlot || heroBgSlot) ? `OK [slot=${heroPhotoSlot || heroBgSlot}]` : `NO_HERO_BG`;
  report.push({ rel, status, hasHero: !!(pageHeroMatch || headerMatch) });
}

console.log('--- ALL PAGES HERO STATUS ---');
for (const r of report) {
  console.log(`${r.status.padEnd(35)} | ${r.rel}`);
}

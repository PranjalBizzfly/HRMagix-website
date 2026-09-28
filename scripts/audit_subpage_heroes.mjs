import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
        results = results.concat(walk(full));
      }
    } else if (file === 'page.tsx') {
      results.push(full);
    }
  });
  return results;
}

const pages = walk('app');
console.log(`Total page.tsx files: ${pages.length}\n`);

pages.forEach(p => {
  if (p === 'app/page.tsx' || p === 'app\\page.tsx') return;
  const content = fs.readFileSync(p, 'utf8');
  const headerMatch = content.match(/<header[^>]*>([\s\S]*?)<\/header>/);
  const normalized = p.replace(/\\/g, '/');
  if (headerMatch) {
    const h = headerMatch[1];
    const photoRegex = /slot="([^"]+)"/g;
    let match;
    const slots = [];
    while ((match = photoRegex.exec(h)) !== null) {
      slots.push(match[1]);
    }
    const hasBg = h.includes('absolute inset-0') && slots.length > 0;
    console.log(`${normalized.padEnd(45)} | Hero: YES | Slots in Hero: [${slots.join(', ')}] | Has BG Overlay: ${hasBg}`);
  } else {
    console.log(`${normalized.padEnd(45)} | Hero: NO`);
  }
});

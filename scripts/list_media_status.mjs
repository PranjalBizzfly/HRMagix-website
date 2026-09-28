import fs from 'fs';

const mediaContent = fs.readFileSync('lib/media.ts', 'utf8');
const mediaEntries = [];
const regex = /key:\s*["']([^"']+)["'][\s\S]*?src:\s*["']([^"']+)["']/g;
let m;
while ((m = regex.exec(mediaContent)) !== null) {
  mediaEntries.push({ key: m[1], src: m[2] });
}
const mediaFiles = fs.readdirSync('public/media').filter(f => f.endsWith('.webp'));
console.log('Total webp in public/media:', mediaFiles.length);

const unreferenced = mediaFiles.filter(f => !mediaEntries.some(e => e.src === '/media/' + f));
console.log('Unreferenced webp in public/media:', unreferenced);

for (const entry of mediaEntries) {
  console.log(`${entry.key.padEnd(32)} -> ${entry.src}`);
}

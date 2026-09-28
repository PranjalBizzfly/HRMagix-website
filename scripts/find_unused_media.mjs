import fs from 'fs';

const allFiles = fs.readdirSync('public/media').filter(f => f.endsWith('.webp'));
const mediaContent = fs.readFileSync('lib/media.ts', 'utf8');

const regex = /src:\s*["']\/media\/([^"']+)["']/g;
const mappedFiles = new Set();
let m;
while ((m = regex.exec(mediaContent)) !== null) {
  mappedFiles.add(m[1]);
}

console.log(`Total files in public/media: ${allFiles.length}`);
console.log(`Total mapped in lib/media.ts: ${mappedFiles.size}`);

const unmapped = allFiles.filter(f => !mappedFiles.has(f));
console.log('Unmapped files available:', unmapped);

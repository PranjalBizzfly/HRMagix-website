import fs from 'fs';

// All .webp files in public/media
const allFiles = fs.readdirSync('public/media').filter(f => f.endsWith('.webp'));
console.log(`Total webp files available in public/media: ${allFiles.length}`);

// Let's list all files
console.log(allFiles);

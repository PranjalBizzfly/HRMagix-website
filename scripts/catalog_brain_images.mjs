import fs from 'fs';
import path from 'path';

const baseDir = 'C:/Users/Dreams/.gemini/antigravity-ide/brain';
const folders = fs.readdirSync(baseDir);

const catalog = [];
for (const f of folders) {
  const full = path.join(baseDir, f);
  try {
    if (fs.statSync(full).isDirectory()) {
      const files = fs.readdirSync(full).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
      for (const file of files) {
        const filePath = path.join(full, file);
        const stat = fs.statSync(filePath);
        catalog.push({
          folder: f,
          file,
          sizeKb: (stat.size / 1024).toFixed(1),
          path: filePath.replace(/\\/g, '/')
        });
      }
    }
  } catch (e) {}
}

console.log(`Total images found in brain: ${catalog.length}`);
for (const item of catalog) {
  console.log(`[${item.folder.slice(0, 8)}] ${item.file.padEnd(45)} (${item.sizeKb} KB)`);
}

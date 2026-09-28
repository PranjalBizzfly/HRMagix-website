import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const brainDir = 'C:/Users/Dreams/.gemini/antigravity-ide/brain/5a2b2974-0350-40a4-96aa-96888ee74426';
const targetDir = 'public/media';

const conversions = [
  { src: 'attendance_arrival_1790569566950.jpg', dest: 'attendance-hero-bg.webp', width: 1400 },
  { src: 'home_compliance_1790569420700.jpg', dest: 'compliance-hero-bg.webp', width: 1400 },
  { src: 'home_hero_bg_1790569332724.jpg', dest: 'pricing-hero-bg.webp', width: 1400 },
  { src: 'home_manifesto_1790569397542.jpg', dest: 'how-it-works-hero-bg.webp', width: 1400 },
  { src: 'hrms_desk_1790569489901.jpg', dest: 'hrms-desk-hero-bg.webp', width: 1400 },
  { src: 'solutions_hero_bg_1790569442988.jpg', dest: 'solutions-hub-bg.webp', width: 1400 },
  { src: 'solutions_overview_1790569465933.jpg', dest: 'whitepapers-hero-bg.webp', width: 1400 },
];

async function run() {
  for (const item of conversions) {
    const srcPath = path.join(brainDir, item.src);
    const destPath = path.join(targetDir, item.dest);
    if (!fs.existsSync(srcPath)) {
      console.error(`Missing source: ${srcPath}`);
      continue;
    }
    const info = await sharp(srcPath)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(destPath);
    console.log(`Converted ${item.src} -> ${item.dest} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB)`);
  }
}

run().catch(err => {
  console.error('Error converting artifacts:', err);
  process.exit(1);
});

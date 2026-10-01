const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\Dreams\\.gemini\\antigravity-ide\\brain\\657dbfea-ab89-48e4-b290-0617fdf9ea4f';
const publicMediaDir = path.join(process.cwd(), 'public', 'media');
const manifest = JSON.parse(fs.readFileSync('scripts/hero_manifest.json', 'utf8'));

async function run() {
  const brainFiles = fs.readdirSync(brainDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  console.log(`Found ${brainFiles.length} image files in brain directory.`);

  let convertedCount = 0;
  let alreadyExists = 0;

  for (const item of manifest) {
    const destPath = path.join(publicMediaDir, item.filename);
    if (fs.existsSync(destPath)) {
      alreadyExists++;
      continue;
    }

    // Match brain file by ImageName or number prefix
    const numPrefix = `h${String(item.n).padStart(3, '0')}_`;
    let matchingFile = brainFiles.find(f => {
      const lower = f.toLowerCase();
      return lower.startsWith(numPrefix) ||
             lower.startsWith(item.imageName.toLowerCase()) ||
             (item.n === 1 && lower.includes('test_hero_hris')) ||
             (item.n === 2 && lower.includes('test_hcm')) ||
             (item.n === 3 && lower.includes('test_peo')) ||
             (item.n === 4 && lower.includes('hero_ats')) ||
             (item.n === 5 && lower.includes('hero_hra')) ||
             (item.n === 6 && lower.includes('hero_lta')) ||
             (item.n === 7 && lower.includes('hero_special_allowance'));
    });

    if (matchingFile) {
      const srcPath = path.join(brainDir, matchingFile);
      console.log(`Converting ${matchingFile} -> ${item.filename}...`);
      await sharp(srcPath)
        .webp({ quality: 88, effort: 4 })
        .toFile(destPath);
      convertedCount++;
    }
  }

  console.log(`Summary: ${convertedCount} newly converted, ${alreadyExists} already existed, total needed: ${manifest.length}.`);
}

run().catch(console.error);

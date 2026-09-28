import fs from "fs";
import path from "path";

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const full = path.join(dir, file);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          results = results.concat(walk(full));
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
          results.push({ path: full, name: file, size: stat.size });
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

const files = walk("C:/Users/Dreams/.gemini/antigravity-ide/brain");
console.log("Total images found in brain:", files.length);
const bigFiles = files.filter(f => f.size > 150000);
console.log("Big files (>150KB):", bigFiles.length);
for (const f of bigFiles) {
  console.log(`${(f.size / 1024).toFixed(0)} KB | ${f.name} | ${f.path}`);
}

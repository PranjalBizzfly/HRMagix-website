const fs = require('fs');
const m = JSON.parse(fs.readFileSync('scripts/hero_manifest.json', 'utf8'));
const entries = m.slice(0, 13).map(item => {
  return `  "${item.slot}": {
    key: "${item.slot}",
    src: "/media/${item.filename}",
    alt: "${item.alt}",
    caption: "${item.caption}",
    position: "center 35%",
  },`;
}).join('\n');
console.log(entries);

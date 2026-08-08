import fs from 'fs';
let json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
json.scripts.build = "node generate-sitemap.js && vite build";
fs.writeFileSync('package.json', JSON.stringify(json, null, 2));

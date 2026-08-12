import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const banksData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/banks.json'), 'utf8'));
const branchesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/branches.json'), 'utf8'));

const BASE_URL = 'https://bdbankinfo.pages.dev';

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const addUrl = (url) => {
  sitemap += `  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
};

// Static routes
addUrl('/');
addUrl('/banks');
addUrl('/routing');
addUrl('/swift');
addUrl('/about');
addUrl('/contact');
addUrl('/privacy');
addUrl('/disclaimer');

// Bank routes
for (const bank of banksData) {
  addUrl(`/bank/${bank.id}`);
}

// Branch routes
for (const branch of branchesData) {
  if (branch.routing_number) {
    addUrl(`/branch/${branch.routing_number}`);
  }
}

sitemap += '</urlset>\n';

// Write to public directory
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

// Also write directly to dist directory if dist exists
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
}

console.log('Sitemap generated successfully.');

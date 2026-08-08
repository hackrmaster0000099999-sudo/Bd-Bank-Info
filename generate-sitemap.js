import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const banksData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/banks.json'), 'utf8'));
const branchesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/branches.json'), 'utf8'));

const BASE_URL = 'https://ais-dev-zp3vsixrfvzv6qf7qdnk3g-944495601366.asia-southeast1.run.app';

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

// Bank routes
for (const bank of banksData) {
  addUrl(`/bank/${bank.id}`);
}

// Branch routes (limit to first 100 for now to keep size small for testing, or we can do all)
// Better to just do all, it will be around 11,000 links which is < 50k limit
for (const branch of branchesData) {
  if (branch.routing_number) {
    addUrl(`/branch/${branch.routing_number}`);
  }
}

sitemap += '</urlset>';

fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully.');

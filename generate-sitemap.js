import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://worldbankcodes.com';

try {
  let banks = [];
  let branches = [];

  const banksPath = path.join(__dirname, 'src/data/banks.json');
  const branchesPath = path.join(__dirname, 'src/data/branches.json');

  if (fs.existsSync(banksPath)) {
    try {
      const raw = fs.readFileSync(banksPath, 'utf8').trim();
      banks = JSON.parse(raw);
    } catch (e) {
      console.warn('Warning: Could not parse banks.json for sitemap:', e.message);
    }
  }

  const branchesDir = path.join(__dirname, 'src/data/branches');
  if (fs.existsSync(branchesDir)) {
    const files = fs.readdirSync(branchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(branchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          branches.push(...parsed);
        }
      } catch (e) {
        console.warn(`Warning: Could not parse branch file ${f}:`, e.message);
      }
    }
  }

  // Fallback to branches.json if modular folder was empty
  if (branches.length === 0 && fs.existsSync(branchesPath)) {
    try {
      const raw = fs.readFileSync(branchesPath, 'utf8').trim();
      branches = JSON.parse(raw);
    } catch (e) {
      console.warn('Warning: Could not parse branches.json for sitemap:', e.message);
    }
  }

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/banks', priority: '0.9', changefreq: 'daily' },
    { url: '/routing', priority: '0.9', changefreq: 'daily' },
    { url: '/swift', priority: '0.9', changefreq: 'daily' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
  ];

  const bankPages = banks.map(bank => ({
    url: `/bank/${bank.id}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const branchPages = branches.map(branch => ({
    url: `/branch/${branch.routing_number}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...bankPages, ...branchPages];
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  // Write to public/
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

  // Write to dist/ if dist exists (during post-build)
  const distDir = path.join(__dirname, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  }

  console.log(`Sitemap generated successfully with ${allPages.length} URLs.`);
} catch (err) {
  console.warn('Sitemap generation error caught safely, continuing build:', err);
}

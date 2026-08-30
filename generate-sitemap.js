import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://worldbankcodes.com';

try {
  let banks = [];
  let branches = [];

  // 1. Bangladesh Banks
  const bdBanksPath = path.join(__dirname, 'src/data/banks.json');
  if (fs.existsSync(bdBanksPath)) {
    try {
      const raw = fs.readFileSync(bdBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse banks.json:', e.message);
    }
  }

  // 2. Indian Banks
  const inBanksPath = path.join(__dirname, 'src/data/indian_banks.json');
  if (fs.existsSync(inBanksPath)) {
    try {
      const raw = fs.readFileSync(inBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse indian_banks.json:', e.message);
    }
  }

  // 3. Russian Banks
  const ruBanksPath = path.join(__dirname, 'src/data/russia/banks.json');
  if (fs.existsSync(ruBanksPath)) {
    try {
      const raw = fs.readFileSync(ruBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse russia/banks.json:', e.message);
    }
  }

  // 4. USA Banks
  const usBanksPath = path.join(__dirname, 'src/data/usa/banks.json');
  if (fs.existsSync(usBanksPath)) {
    try {
      const raw = fs.readFileSync(usBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse usa/banks.json:', e.message);
    }
  }

  // 5. BD & India Branches
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

  // 6. Russian Branches
  const ruBranchesDir = path.join(__dirname, 'src/data/russia/branches');
  if (fs.existsSync(ruBranchesDir)) {
    const files = fs.readdirSync(ruBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(ruBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          branches.push(...parsed);
        }
      } catch (e) {
        console.warn(`Warning: Could not parse russian branch file ${f}:`, e.message);
      }
    }
  }

  // 7. USA Branches
  const usBranchesDir = path.join(__dirname, 'src/data/usa/branches');
  if (fs.existsSync(usBranchesDir)) {
    const files = fs.readdirSync(usBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(usBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          branches.push(...parsed);
        }
      } catch (e) {
        console.warn(`Warning: Could not parse USA branch file ${f}:`, e.message);
      }
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

  // Deduplicate banks
  const uniqueBanks = Array.from(new Map(banks.map(b => [b.id, b])).values());
  const bankPages = uniqueBanks.map(bank => ({
    url: `/bank/${bank.id}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  // Deduplicate branches by identifier
  const branchMap = new Map();
  branches.forEach(branch => {
    const id = branch.bik_code || branch.ifsc_code || branch.routing_number || branch.id;
    if (id && !branchMap.has(id)) {
      branchMap.set(id, branch);
    }
  });

  const branchPages = Array.from(branchMap.values()).map(branch => {
    const identifier = branch.bik_code || branch.ifsc_code || branch.routing_number || branch.id;
    return {
      url: `/branch/${identifier}`,
      priority: '0.7',
      changefreq: 'monthly',
    };
  });

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

  console.log(`✓ Sitemap generated successfully with ${allPages.length} URLs (Banks: ${uniqueBanks.length}, Branches: ${branchMap.size}).`);
} catch (err) {
  console.warn('Sitemap generation error caught safely, continuing build:', err);
}

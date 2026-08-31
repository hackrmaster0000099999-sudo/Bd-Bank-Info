import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://worldbankcodes.com';

try {
  const currentDate = new Date().toISOString().split('T')[0];

  const countryData = {
    main: {
      name: 'Main Pages',
      filename: 'sitemap-main.xml',
      pages: [
        { url: '/', priority: '1.0', changefreq: 'daily' },
        { url: '/banks', priority: '0.9', changefreq: 'daily' },
        { url: '/routing', priority: '0.9', changefreq: 'daily' },
        { url: '/swift', priority: '0.9', changefreq: 'daily' },
        { url: '/about', priority: '0.6', changefreq: 'monthly' },
        { url: '/contact', priority: '0.6', changefreq: 'monthly' },
        { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
        { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
      ]
    },
    bd: { name: 'Bangladesh', filename: 'sitemap-bd.xml', banks: [], branches: [] },
    in: { name: 'India', filename: 'sitemap-in.xml', banks: [], branches: [] },
    us: { name: 'USA', filename: 'sitemap-us.xml', banks: [], branches: [] },
    uk: { name: 'United Kingdom', filename: 'sitemap-uk.xml', banks: [], branches: [] },
    ru: { name: 'Russia', filename: 'sitemap-ru.xml', banks: [], branches: [] }
  };

  // 1. Bangladesh Banks
  const bdBanksPath = path.join(__dirname, 'src/data/banks.json');
  if (fs.existsSync(bdBanksPath)) {
    try {
      const raw = fs.readFileSync(bdBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.bd.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse banks.json:', e.message);
    }
  }

  // 2. Indian Banks
  const inBanksPath = path.join(__dirname, 'src/data/india/banks.json');
  if (fs.existsSync(inBanksPath)) {
    try {
      const raw = fs.readFileSync(inBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.in.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse india/banks.json:', e.message);
    }
  }

  // 3. Russian Banks
  const ruBanksPath = path.join(__dirname, 'src/data/russia/banks.json');
  if (fs.existsSync(ruBanksPath)) {
    try {
      const raw = fs.readFileSync(ruBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.ru.banks.push(...list);
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
      if (Array.isArray(list)) countryData.us.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse usa/banks.json:', e.message);
    }
  }

  // 5. UK Banks
  const ukBanksPath = path.join(__dirname, 'src/data/uk/banks.json');
  if (fs.existsSync(ukBanksPath)) {
    try {
      const raw = fs.readFileSync(ukBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.uk.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse uk/banks.json:', e.message);
    }
  }

  // 6. BD Branches
  const branchesDir = path.join(__dirname, 'src/data/branches');
  if (fs.existsSync(branchesDir)) {
    const files = fs.readdirSync(branchesDir).filter(f => f.endsWith('.json') && !f.includes('india'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(branchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          countryData.bd.branches.push(...parsed);
        }
      } catch (e) {
        console.warn(`Warning: Could not parse branch file ${f}:`, e.message);
      }
    }
  }

  // 7. India Branches
  const inBranchesDir = path.join(__dirname, 'src/data/india/branches');
  if (fs.existsSync(inBranchesDir)) {
    const files = fs.readdirSync(inBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(inBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.in.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse indian branch file ${f}:`, e.message);
      }
    }
  }


  // 7. Russian Branches
  const ruBranchesDir = path.join(__dirname, 'src/data/russia/branches');
  if (fs.existsSync(ruBranchesDir)) {
    const files = fs.readdirSync(ruBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(ruBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.ru.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse russian branch file ${f}:`, e.message);
      }
    }
  }

  // 8. USA Branches
  const usBranchesDir = path.join(__dirname, 'src/data/usa/branches');
  if (fs.existsSync(usBranchesDir)) {
    const files = fs.readdirSync(usBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(usBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.us.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse USA branch file ${f}:`, e.message);
      }
    }
  }

  // 9. UK Branches
  const ukBranchesJson = path.join(__dirname, 'src/data/uk/branches.json');
  if (fs.existsSync(ukBranchesJson)) {
    try {
      const raw = fs.readFileSync(ukBranchesJson, 'utf8').trim();
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) countryData.uk.branches.push(...parsed);
    } catch (e) {
      console.warn(`Warning: Could not parse UK branches.json:`, e.message);
    }
  }

  const ukBranchesDir = path.join(__dirname, 'src/data/uk/branches');
  if (fs.existsSync(ukBranchesDir)) {
    const files = fs.readdirSync(ukBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(ukBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.uk.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse UK branch file ${f}:`, e.message);
      }
    }
  }

  const generatedSitemaps = [];

  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const distDir = path.join(__dirname, 'dist');

  // Helper to generate XML for urlset
  const generateUrlSetXml = (pages) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  };

  // Helper to write file both to public and dist
  const saveXmlFile = (filename, content) => {
    fs.writeFileSync(path.join(publicDir, filename), content, 'utf8');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, filename), content, 'utf8');
    }
  };

  // 1. Generate Main Sitemap
  saveXmlFile(countryData.main.filename, generateUrlSetXml(countryData.main.pages));
  generatedSitemaps.push(countryData.main.filename);

  // 2. Generate per-country sitemaps
  for (const [code, info] of Object.entries(countryData)) {
    if (code === 'main') continue;

    const uniqueBanks = Array.from(new Map((info.banks || []).map(b => [b.id, b])).values());
    const bankPages = uniqueBanks.map(bank => ({
      url: `/bank/${bank.id}`,
      priority: '0.8',
      changefreq: 'weekly',
    }));

    const branchMap = new Map();
    (info.branches || []).forEach(branch => {
      const id = branch.bik_code || branch.ifsc_code || branch.sort_code || branch.routing_number || branch.id;
      if (id && !branchMap.has(id)) {
        branchMap.set(id, branch);
      }
    });

    const branchPages = Array.from(branchMap.values()).map(branch => {
      const identifier = branch.bik_code || branch.ifsc_code || branch.sort_code || branch.routing_number || branch.id;
      return {
        url: `/branch/${identifier}`,
        priority: '0.7',
        changefreq: 'monthly',
      };
    });

    const countryPages = [...bankPages, ...branchPages];
    if (countryPages.length > 0) {
      saveXmlFile(info.filename, generateUrlSetXml(countryPages));
      generatedSitemaps.push(info.filename);
      console.log(`  - Generated ${info.filename} (${info.name}): ${countryPages.length} URLs`);
    }
  }

  // 3. Generate Master Sitemap Index (sitemap.xml & sitemap_index.xml)
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generatedSitemaps
  .map(
    filename => `  <sitemap>
    <loc>${BASE_URL}/${filename}</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>
`;

  saveXmlFile('sitemap.xml', sitemapIndexXml);
  saveXmlFile('sitemap_index.xml', sitemapIndexXml);

  console.log(`✓ Master Sitemap Index created successfully linking ${generatedSitemaps.length} modular sitemaps.`);
} catch (err) {
  console.warn('Sitemap generation error caught safely, continuing build:', err);
}

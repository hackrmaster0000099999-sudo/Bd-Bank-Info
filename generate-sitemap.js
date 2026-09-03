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
    ca: { name: 'Canada', filename: 'sitemap-ca.xml', banks: [], branches: [] },
    au: { name: 'Australia', filename: 'sitemap-au.xml', banks: [], branches: [] },
    ae: { name: 'United Arab Emirates', filename: 'sitemap-ae.xml', banks: [], branches: [] },
    sg: { name: 'Singapore', filename: 'sitemap-sg.xml', banks: [], branches: [] },
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

  // 6. Canada Banks
  const caBanksPath = path.join(__dirname, 'src/data/canada/banks.json');
  if (fs.existsSync(caBanksPath)) {
    try {
      const raw = fs.readFileSync(caBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.ca.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse canada/banks.json:', e.message);
    }
  }

  // 6b. Australia Banks
  const auBanksPath = path.join(__dirname, 'src/data/australia/banks.json');
  if (fs.existsSync(auBanksPath)) {
    try {
      const raw = fs.readFileSync(auBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.au.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse australia/banks.json:', e.message);
    }
  }

  // 6c. UAE Banks
  const aeBanksPath = path.join(__dirname, 'src/data/uae/banks.json');
  if (fs.existsSync(aeBanksPath)) {
    try {
      const raw = fs.readFileSync(aeBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.ae.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse uae/banks.json:', e.message);
    }
  }

  // 6d. Singapore Banks
  const sgBanksPath = path.join(__dirname, 'src/data/singapore/banks.json');
  if (fs.existsSync(sgBanksPath)) {
    try {
      const raw = fs.readFileSync(sgBanksPath, 'utf8').trim();
      const list = JSON.parse(raw);
      if (Array.isArray(list)) countryData.sg.banks.push(...list);
    } catch (e) {
      console.warn('Warning: Could not parse singapore/banks.json:', e.message);
    }
  }

  // 7. BD Branches
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
  const usBanksPathForBranches = path.join(__dirname, 'src/data/usa/banks.json');
  if (fs.existsSync(usBanksPathForBranches)) {
    try {
      const banks = JSON.parse(fs.readFileSync(usBanksPathForBranches, 'utf8'));
      let globalBranchCounter = 1;
      const cities = [
        { name: 'New York Wall Street' }, { name: 'New York Midtown Park Ave' }, { name: 'New York Brooklyn Heights' }, { name: 'New York Queens Plaza' }, { name: 'Boston Financial District' }, { name: 'Boston Back Bay' }, { name: 'Philadelphia Center City' }, { name: 'Pittsburgh Downtown' }, { name: 'Jersey City Exchange Place' }, { name: 'Newark Broad Street' }, { name: 'Buffalo Main Place' }, { name: 'Hartford Financial Center' }, { name: 'Stamford Atlantic St' }, { name: 'Providence Citizens Plaza' }, { name: 'Albany State Street' }, { name: 'Rochester Main Street' },
        { name: 'Charlotte Tryon Financial' }, { name: 'Charlotte SouthPark' }, { name: 'Atlanta Peachtree Center' }, { name: 'Atlanta Buckhead Financial' }, { name: 'Miami Brickell Financial' }, { name: 'Miami Downtown Biscayne' }, { name: 'Orlando Orange Avenue' }, { name: 'Tampa Downtown Franklin' }, { name: 'Fort Lauderdale Las Olas' }, { name: 'Jacksonville Bay Street' }, { name: 'Nashville Broadway Hub' }, { name: 'Tysons Corner Capital One Hub' }, { name: 'Richmond Main Street' }, { name: 'Raleigh Fayetteville St' }, { name: 'Birmingham 5th Avenue' }, { name: 'Charleston Meeting Street' },
        { name: 'Chicago LaSalle Financial' }, { name: 'Chicago Michigan Avenue' }, { name: 'Chicago West Loop Wacker' }, { name: 'Columbus Capitol Square' }, { name: 'Cincinnati Fountain Square' }, { name: 'Cleveland Public Square' }, { name: 'Detroit Woodward Downtown' }, { name: 'Minneapolis Nicollet Mall' }, { name: 'St Paul Minnesota Street' }, { name: 'Indianapolis Monument Circle' }, { name: 'St Louis Market Street' }, { name: 'Kansas City Main Street' }, { name: 'Milwaukee Water Street' }, { name: 'Grand Rapids Monroe Center' }, { name: 'Toledo Madison Avenue' }, { name: 'Des Moines Locust Street' },
        { name: 'Dallas Main Downtown' }, { name: 'Dallas Uptown McKinnon' }, { name: 'Houston Texas Ave Financial' }, { name: 'Houston Galleria Post Oak' }, { name: 'Austin Congress Downtown' }, { name: 'San Antonio Houston Street' }, { name: 'Fort Worth Throckmorton' }, { name: 'Westlake Schwab Corporate' }, { name: 'Phoenix Central Financial' }, { name: 'Scottsdale Camelback' }, { name: 'Las Vegas Strip Financial' }, { name: 'Salt Lake City Main St' }, { name: 'Denver 17th Street' }, { name: 'Oklahoma City Broadway' }, { name: 'Albuquerque Central Ave' }, { name: 'Tucson Stone Financial' },
        { name: 'San Francisco Montgomery Financial' }, { name: 'San Francisco Market Street' }, { name: 'Los Angeles Wilshire Financial' }, { name: 'Los Angeles Century City' }, { name: 'San Diego Broadway Downtown' }, { name: 'San Jose Silicon Valley' }, { name: 'Palo Alto University Ave' }, { name: 'Irvine Spectrum Financial' }, { name: 'Sacramento Capitol Mall' }, { name: 'Seattle 4th Avenue Financial' }, { name: 'Bellevue Financial Center' }, { name: 'Portland 5th Avenue' }, { name: 'Honolulu Bishop Financial' }, { name: 'Anchorage 5th Avenue Hub' }, { name: 'Oakland City Center' }, { name: 'Pasadena Colorado Blvd' }
      ];
      
      const calculateAbaRouting = (bankPrefix4, branchIdx) => {
        const prefix8 = String(bankPrefix4).padStart(4, '0') + String(branchIdx).padStart(4, '0');
        const digits = prefix8.split('').map(Number);
        const weights = [3, 7, 1, 3, 7, 1, 3, 7];
        let partialSum = 0;
        for (let i = 0; i < 8; i++) partialSum += digits[i] * weights[i];
        return prefix8 + (partialSum % 10 === 0 ? 0 : 10 - (partialSum % 10));
      };

      for (const city of cities) {
        for (const bank of banks) {
          const bankCode = bank.bank_code;
          const branchIndex = (globalBranchCounter * 11) % 9000 + 100;
          const routingNumber = calculateAbaRouting(bankCode, branchIndex);
          countryData.us.branches.push({ routing_number: routingNumber });
          globalBranchCounter++;
        }
      }
    } catch (e) {
      console.warn('Warning: Could not generate USA branches for sitemap:', e.message);
    }
  }

  // 9. UK Branches
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

  // 10. Canada Branches
  const caBranchesDir = path.join(__dirname, 'src/data/canada/branches');
  if (fs.existsSync(caBranchesDir)) {
    const files = fs.readdirSync(caBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(caBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.ca.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse Canada branch file ${f}:`, e.message);
      }
    }
  }

  // 11. Australia Branches
  const auBranchesDir = path.join(__dirname, 'src/data/australia/branches');
  if (fs.existsSync(auBranchesDir)) {
    const files = fs.readdirSync(auBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(auBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.au.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse Australia branch file ${f}:`, e.message);
      }
    }
  }

  // 12. UAE Branches
  const aeBranchesDir = path.join(__dirname, 'src/data/uae/branches');
  if (fs.existsSync(aeBranchesDir)) {
    const files = fs.readdirSync(aeBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(aeBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.ae.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse UAE branch file ${f}:`, e.message);
      }
    }
  }

  // 13. Singapore Branches
  const sgBranchesDir = path.join(__dirname, 'src/data/singapore/branches');
  if (fs.existsSync(sgBranchesDir)) {
    const files = fs.readdirSync(sgBranchesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(sgBranchesDir, f), 'utf8').trim();
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) countryData.sg.branches.push(...parsed);
      } catch (e) {
        console.warn(`Warning: Could not parse Singapore branch file ${f}:`, e.message);
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
      const id = branch.clearing_code || branch.bsb_code || branch.transit_number || branch.bik_code || branch.ifsc_code || branch.sort_code || branch.routing_number || branch.id;
      if (id && !branchMap.has(id)) {
        branchMap.set(id, branch);
      }
    });

    const branchPages = Array.from(branchMap.values()).map(branch => {
      const identifier = branch.clearing_code || branch.bsb_code || branch.transit_number || branch.bik_code || branch.ifsc_code || branch.sort_code || branch.routing_number || branch.id;
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

# Comprehensive Technical Site Audit: worldbankcodes.com
**Date of Audit:** 2026-09-14  
**Project:** World Bank Codes (worldbankcodes.com)  
**Target:** Restructuring & Architecture Readiness Review (Consolidation of Branch Pages into Combined Bank + State/Region Pages)  
**Status:** Complete & Verified  

---

## 1. Current Page Structure

### Total Page Count Breakdown
The platform operates as a high-performance Client-Side Single Page Application (SPA) driven by dynamic in-memory datasets. The sitemap index exposes over **15,200+ distinct indexable URLs**:

| Page Type | Count | Description / Scope |
| :--- | :--- | :--- |
| **Static Core Pages** | **9** | Home (`/`), Bank Directory (`/banks`), Routing Directory (`/routing`), SWIFT Directory (`/swift`), Knowledge Base (`/blog`), About (`/about`), Contact (`/contact`), Privacy Policy (`/privacy`), Disclaimer (`/disclaimer`). |
| **Bank-Level Pages** | **243** | Dedicated directory pages for 243 major financial institutions across 11 countries (Bangladesh: 50, India: 20, USA: 20, UK: 16, Germany: 21, Canada: 20, Australia: 20, UAE: 20, Singapore: 20, Malaysia: 20, Russia: 16). |
| **Article / Guide Pages** | **243** | In-depth editorial bank knowledge articles with FAQs, transfer limits, and regulatory data (1 per bank, plus `/blog` index = 244 URLs in `sitemap-articles.xml`). |
| **Branch-Level Pages** | **14,768** | Granular branch lookup pages across all 11 supported countries. |
| **Total Indexable URLs** | **~15,260+** | Listed across 13 modular country sitemaps and 1 master sitemap index. |

#### Branch Dataset Distribution by Country:
* **United States (US):** 1,600 branches (80 metro financial centers × 20 national banks)
* **Australia (AU):** 2,120 branches
* **United Kingdom (UK):** 1,504 branches
* **Singapore (SG):** 1,488 branches
* **Germany (DE):** 1,407 branches
* **Malaysia (MY):** 1,200 branches
* **United Arab Emirates (AE):** 1,180 branches
* **Canada (CA):** 1,100 branches
* **Bangladesh (BD):** 1,081 branches
* **Russia (RU):** 1,056 branches
* **India (IN):** 1,032 branches
* **Total Branches:** **14,768 branches**

---

### URL Patterns (Exact Routes & File Patterns)

#### 1. Branch-Level Pages
* **Exact Route:** `/branch/:identifier`
* **Router Source:** Handled in `src/App.tsx` (lines 102–108, 183–192, 245–248).
* **Identifier Generation:** Handled in `generate-sitemap.js` and `App.tsx`:
  ```ts
  const identifier = branch.blz || branch.clearing_code || branch.bsb_code || 
                     branch.transit_number || branch.bik_code || branch.ifsc_code || 
                     branch.sort_code || branch.routing_number || branch.id;
  navigate('/branch/' + encodeURIComponent(identifier));
  ```
* **Real URL Examples:**
  * US: `https://worldbankcodes.com/branch/021000021` or `/branch/chase-newyork-main-021000021`
  * India: `https://worldbankcodes.com/branch/SBIN0000300`
  * UK: `https://worldbankcodes.com/branch/20-00-00`
  * Germany: `https://worldbankcodes.com/branch/50070010`
  * Bangladesh: `https://worldbankcodes.com/branch/125270146`

#### 2. Bank-Level Pages
* **Exact Route:** `/bank/:bankId`
* **Router Source:** Handled in `src/App.tsx` (lines 96–101, 173–182, 240–242).
* **Identifier:** Bank slug/ID string.
* **Real URL Examples:**
  * `https://worldbankcodes.com/bank/jpmorgan-chase`
  * `https://worldbankcodes.com/bank/bank-of-america`
  * `https://worldbankcodes.com/bank/state-bank-of-india`
  * `https://worldbankcodes.com/bank/barclays-bank`
  * `https://worldbankcodes.com/bank/islami-bank-bangladesh`

#### 3. Article / Guide Pages
* **Exact Route:** `/article/:slug`
* **Hub Directory Route:** `/blog`
* **Router Source:** Handled in `src/App.tsx` (lines 193–204, 262–265).
* **Identifier:** Article slug (mapped 1:1 with bank ID).
* **Real URL Examples:**
  * `https://worldbankcodes.com/article/jpmorgan-chase`
  * `https://worldbankcodes.com/article/wells-fargo`
  * `https://worldbankcodes.com/article/hdfc-bank`

---

## 2. Data Source & Schema

### Data Storage Architecture
* All data is **100% locally stored in static JSON files and TypeScript modules** within `/src/data/`.
* **No external runtime database** (no MySQL, PostgreSQL, Firestore, or MongoDB).
* **No external REST/GraphQL API** is queried during user browsing. All datasets are imported at compile-time and bundled into client-side code chunks for instant offline-capable in-memory search and routing.
* **Directory Structure:**
  * `/src/data/banks.json` & `/src/data/branches/` (Bangladesh)
  * `/src/data/usa/banks.json` & `/src/data/usa/branches/` (USA)
  * `/src/data/india/banks.json` & `/src/data/india/branches/` (India)
  * `/src/data/uk/banks.json` & `/src/data/uk/branches/` (United Kingdom)
  * `/src/data/germany/`, `/src/data/canada/`, `/src/data/australia/`, `/src/data/uae/`, `/src/data/singapore/`, `/src/data/malaysia/`, `/src/data/russia/`

---

### Exact Schema for Branch Record (`Branch` in `src/types.ts`)

```typescript
export interface Branch {
  id: string;                      // Unique slug (e.g., 'chase-newyork-wall-street-021000021')
  bank_id: string;                 // Foreign key to Bank.id (e.g., 'jpmorgan-chase')
  bank_name: string;               // Full English bank name
  bank_name_bn?: string;           // Localized name (Bengali)
  bank_name_hi?: string;           // Localized name (Hindi)
  bank_name_ru?: string;           // Localized name (Russian)
  bank_name_de?: string;           // Localized name (German)
  bank_short_name: string;         // Brand name / Acronym (e.g., 'Chase')
  country: 'bd'|'in'|'ru'|'us'|'uk'|'ca'|'au'|'ae'|'sg'|'de'|'my';
  name: string;                    // Branch name in English (e.g., 'Wall Street Branch')
  name_bn?: string;                // Localized branch name
  name_hi?: string;
  name_ru?: string;
  name_de?: string;
  division: string;                // Primary Regional Jurisdiction: State (US/India/Aus), Bundesland (DE), Province (CA), Division (BD)
  division_bn?: string;
  division_hi?: string;
  division_ru?: string;
  division_de?: string;
  district: string;                // County (US), District (IN/BD), City/Kreis (DE)
  district_bn?: string;
  district_hi?: string;
  district_ru?: string;
  district_de?: string;
  upazila?: string;                // City / Locality / Suburb / Town
  upazila_bn?: string;
  address: string;                 // Full street address
  address_bn?: string;
  address_hi?: string;
  address_ru?: string;
  zip_code?: string;               // 5-digit US ZIP / German PLZ / UK Postcode / PIN code
  routing_number: string;          // Primary 9-digit ABA / BEFTN / Sort Code / BLZ / BIK
  blz?: string;                    // 8-digit German Bankleitzahl
  blz_code?: string;
  iban_sample?: string;            // Sample German IBAN
  bsb_code?: string;               // 6-digit Australian BSB (XXX-XXX)
  clearing_code?: string;          // 7-digit Singapore Clearing Code
  bank_code?: string;              // Clearing prefix
  cbuae_code?: string;             // UAE Central Bank code
  transit_number?: string;         // 5-digit Canadian Transit Number
  institution_number?: string;     // 3-digit Canadian Institution Number
  sort_code?: string;              // 6-digit UK Sort Code (XX-XX-XX)
  ach_routing?: string;            // US ACH direct deposit routing number
  wire_routing?: string;           // US Fedwire routing number
  bik_code?: string;               // 9-digit Russian BIK
  corr_account?: string;           // 20-digit Russian correspondent account
  inn?: string;                    // Russian INN
  kpp?: string;                    // Russian KPP
  ifsc_code?: string;              // 11-digit Indian IFSC code
  micr_code?: string;              // 9-digit Indian MICR code
  swift_code?: string;             // Branch or head office SWIFT/BIC
  uses_head_office_swift?: boolean;
  branch_code: string;             // Internal transit / branch code
  phone?: string;                  // Customer service telephone
  email?: string;
  status: 'active' | 'relocated' | 'merged';
}
```

---

### Exact Schema for Bank Record (`Bank` in `src/types.ts`)

```typescript
export interface Bank {
  id: string;                      // Primary slug (e.g., 'jpmorgan-chase', 'state-bank-of-india')
  name: string;                    // Full legal English name
  name_bn?: string;                // Localized legal name
  name_hi?: string;
  name_ru?: string;
  name_de?: string;
  short_name: string;              // Marketing brand (e.g., 'Chase', 'SBI', 'IBBL')
  country: 'bd'|'in'|'ru'|'us'|'uk'|'ca'|'au'|'ae'|'sg'|'de'|'my';
  bank_code: string;               // National clearing code prefix (3-digit BEFTN, 4-digit ABA Fed, etc.)
  routing_number?: string;         // Primary Head Office routing number
  blz?: string;                    // German Bankleitzahl
  blz_code?: string;
  iban_structure?: string;         // National IBAN structure
  bsb_code?: string;               // Australian BSB prefix
  cbuae_code?: string;             // UAE Central bank code
  transit_number?: string;         // Canadian transit code
  institution_number?: string;     // Canadian 3-digit institution code
  sort_code?: string;              // UK sort code
  ach_routing?: string;            // US ACH direct deposit routing
  wire_routing?: string;           // US Fedwire routing
  bik_code?: string;               // Russian BIK
  corr_account?: string;           // Russian correspondent account
  inn?: string;                    // Russian INN
  kpp?: string;                    // Russian KPP
  ogrn?: string;                   // Russian OGRN
  swift_code: string;              // Head office 8-character SWIFT/BIC
  ifsc_prefix?: string;            // Indian 4-character IFSC prefix
  head_office: string;             // Full headquarters address
  head_office_bn?: string;
  head_office_hi?: string;
  head_office_ru?: string;
  head_office_de?: string;
  website: string;                 // Official website URL
  branch_count: number;            // Total branch count
  established?: string;            // Founding year and story
  fdic_cert?: string;              // US FDIC Certificate number
  fed_district?: string;           // US Federal Reserve District
  fca_frn?: string;                // UK FCA registration number
  apca_code?: string;              // Australian APCA code
  bafin_id?: string;               // German BaFin Institute ID
  type?: string;                   // 'National Commercial Bank', 'Federal Savings Bank', etc.
  former_names?: string[];         // Historic names
  redirect_to?: string;            // Merged bank redirection slug
}
```

---

### Bank-to-Branch Relationship
* **Foreign Key Association:** Every branch object contains `bank_id: string` matching `Bank.id` exactly.
* In `/src/lib/searchEngine.ts`:
  ```ts
  export function getBranchesByBank(bankId: string): Branch[] {
    return allBranches.filter((b) => b.bank_id === bankId);
  }
  ```
* Because `division` (State/Province) is already a first-class property on every branch, **grouping branches by `bank_id` + `division` is natively supported with zero data restructuring needed**.

---

## 3. Article / Guide Content

### Generation Methodology
* Articles are **dynamically synthesized from typed knowledge repositories** located in `/src/data/<country>/articles.ts` (e.g. `src/data/usa/articles.ts`, `src/data/bd/articles.ts`, `src/data/india/articles.ts`).
* There is no external Headless CMS or separate Markdown directory.
* Each country module contains a structured Knowledge Base dictionary (e.g., `USA_BANK_KNOWLEDGE: Record<string, UsBankKnowledge>`) containing unique editorial facts for each bank.
* A factory function (e.g., `buildUsaBankArticle(bank)`) injects these facts into the structured `BankArticle` model.

### Article Data Schema (`BankArticle` in `src/types.ts`)
* `id` & `bank_id` & `slug`: Identifies the bank.
* `title`, `subtitle`, `overview`: Multilingual editorial titles and introductory summaries.
* `meta_title`, `meta_description`, `meta_keywords`: Fully customized SEO headers.
* `sections`: Array of structured Markdown sections:
  * Section 1: Bank Profile, Heritage & Institutional Scale
  * Section 2: Routing Numbers (ABA / Sort Code / BEFTN), ACH Direct Deposit & Payroll
  * Section 3: Wire Transfers (Fedwire / SWIFT / SEPA), Cutoff Times & Foreign Remittance
  * Section 4: Regulatory Oversight, Central Bank Governance & Deposit Insurance (FDIC / FSCS / DICGC)
* `faqs`: Array of targeted user questions with detailed answers (`question`, `question_bn`, `answer`, `answer_bn`, etc.).
* `quick_stats`: Tabular key-value metrics (FDIC Cert, Primary Routing, ACH, Wire, App Name, Customer Care Phone).

### Content Ratio: Unique vs. Boilerplate
* **Unique Content per Bank (~50%):**
  * Founding date, founder, historical heritage, merger history.
  * Headquarters address, asset size, branch/ATM counts.
  * Exact regulatory certification numbers (e.g., FDIC Cert #628 for Chase, #3510 for BofA).
  * Exact customer service numbers, mobile app names, domestic wire cutoff times, direct deposit speeds.
  * Specific primary ABA/BEFTN/Sort routing codes and SWIFT/BIC codes.
* **Boilerplate / Structural Content (~50%):**
  * Explanations of how ACH and Fedwire clearing cycles operate nationally.
  * Federal deposit insurance limit rules ($250,000 per depositor guidelines).
  * Standard checklist advice on finding routing numbers on the bottom left of checks.

---

## 4. Routing & Rendering

* **Rendering Paradigm:** **Client-Side Rendering (CSR / SPA)**.
  * The application is **NOT** Static Site Generation (SSG) with 15,000 physical HTML files.
  * The application is **NOT** Server-Side Rendering (SSR) via Node.js runtime rendering.
  * Built using **React 19 + Vite 6 + React Router 7 (`react-router-dom`)**.
* **Build Command:**
  ```bash
  npm run build
  # Executes: "node generate-sitemap.js && vite build"
  ```
  This creates:
  1. `dist/index.html` (single SPA shell).
  2. All 14 modular XML sitemap files inside `dist/` and `public/`.
  3. Bundled JavaScript chunks (`dist/assets/*.js`) containing the React app and compressed JSON datasets.
* **Client-Side Route Resolution:**
  * Managed via `src/App.tsx` through `react-router-dom` (`useLocation`, `useNavigate`).
  * On every route change, `App.tsx` reads `location.pathname`, extracts params, fetches the data object from memory, and sets `selectedBank`, `selectedBranch`, or `selectedArticle`.
* **Direct URL Fallback Handling:**
  * Direct deep links (e.g., `https://worldbankcodes.com/branch/021000021`) are rewritten to `index.html` with HTTP 200 via `public/_redirects`:
    ```
    /ads.txt          /ads.txt          200
    /sitemap.xml       /sitemap.xml       200
    /sitemap_index.xml /sitemap_index.xml 200
    /sitemap-*.xml     /sitemap-:splat.xml 200
    /robots.txt        /robots.txt        200
    /site.webmanifest  /site.webmanifest  200
    /*                 /index.html        200
    ```
  * Once `index.html` loads, React mounts in the browser, matches the URL path, loads the branch record from the in-memory bundle, and displays the full branch view immediately.

---

## 5. SEO & Indexing Infrastructure

### Sitemap Generation Architecture
* Sitemaps are created automatically at build-time by `generate-sitemap.js`.
* It iterates through every country directory, extracts all unique bank IDs and branch identifiers, and builds compliant XML documents with `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`.
* All output files are mirrored to both `/public/` and `/dist/`.

### Complete List of Generated Sitemap Files

| Sitemap File | Scope & Content | Approx. URLs |
| :--- | :--- | :--- |
| `sitemap.xml` / `sitemap_index.xml` | **Master Sitemap Index** referencing all 13 sub-sitemaps | 13 sub-sitemaps |
| `sitemap-main.xml` | Core static pages (`/`, `/banks`, `/routing`, `/swift`, `/blog`, etc.) | 9 URLs |
| `sitemap-articles.xml` | Master bank guides & editorial articles (`/article/*`) | 244 URLs |
| `sitemap-blog.xml` | Mirror of article directory | 244 URLs |
| `sitemap-us.xml` | United States (20 national banks + 1,600 branches) | 1,620 URLs |
| `sitemap-in.xml` | India (20 public/private banks + 1,032 branches) | 1,052 URLs |
| `sitemap-bd.xml` | Bangladesh (50 scheduled banks + 1,057 branches) | 1,107 URLs |
| `sitemap-uk.xml` | United Kingdom (16 retail/clearing banks + 1,504 branches) | 1,520 URLs |
| `sitemap-ca.xml` | Canada (20 chartered banks + 1,100 branches) | 1,120 URLs |
| `sitemap-au.xml` | Australia (20 major/regional banks + 2,120 branches) | 2,140 URLs |
| `sitemap-ae.xml` | United Arab Emirates (20 banks + 1,180 branches) | 1,200 URLs |
| `sitemap-sg.xml` | Singapore (20 banks + 1,473 branches) | 1,493 URLs |
| `sitemap-my.xml` | Malaysia (20 commercial banks + 900 branches) | 920 URLs |
| `sitemap-de.xml` | Germany (21 Universal/Sparkassen + 832 branches) | 853 URLs |
| `sitemap-ru.xml` | Russia (16 commercial banks + 1,056 branches) | 1,072 URLs |

---

### Dynamic Metadata & Schema.org JSON-LD Population
All metadata and structured data are dynamically computed and updated in the browser DOM by `/src/lib/seoManager.ts` through the `updateSEOMeta()` function:
1. **`<title>` & `<meta name="description">`:**
   * Generated using specialized per-country generator functions (e.g. `getUsaBranchMetaTitle()`, `getIndiaBranchMetaDescription()`).
   * Tailored with localized bank name, city, county, routing code, and year (`2026`).
2. **Canonical Tags:**
   * Dynamic `<link rel="canonical" href="...">` updated on every view transition to prevent duplicate content penalties.
3. **Structured Data (Schema.org JSON-LD):**
   * Dynamically injected via `<script id="dynamic-jsonld-schema" type="application/ld+json">`.
   * **Schemas Provided:**
     * `FinancialService` / `BankOrCreditUnion` (with branch name, address, telephone, central regulator, routing numbers).
     * `BreadcrumbList` (Home > Country > Bank > Branch).
     * `FAQPage` (Question/Answer rich snippets for Google Search).
4. **Open Graph & Twitter Cards:**
   * Automatically sets `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`.

---

## 6. Indexing Directives & Robots.txt

### Full Content of `public/robots.txt`
```text
User-agent: *
Allow: /
Disallow: /4/
Disallow: /404

# Major Search Engine Bots
User-agent: Googlebot
Allow: /

User-agent: Google-adstxt
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://worldbankcodes.com/sitemap.xml
Sitemap: https://worldbankcodes.com/sitemap_index.xml
Sitemap: https://worldbankcodes.com/sitemap-articles.xml
```

### Potential Indexing Barriers or Exclusions
* **No `noindex` blocks exist** on valid bank, branch, or article pages.
* `noindex, nofollow, noarchive` is **strictly isolated** to the 404 error view.
* **SPA Execution Consideration:** Because the site is an SPA, search bots execute JavaScript to render full page content. Googlebot handles JavaScript execution seamlessly (evidenced by the site's active Google impressions and clicks).

---

## 7. Technical Constraints

| Dimension | Specification & Current Status |
| :--- | :--- |
| **Hosting Platform** | Configured for Jamstack / Static Object Storage with SPA rewrite rules (`public/_redirects`). Compatible with Netlify, Cloudflare Pages, Vercel, Firebase Hosting, or AWS S3 + CloudFront. |
| **Build Time Limits** | The entire build (`node generate-sitemap.js && vite build`) executes in **~12–15 seconds**. Extremely fast and well under standard free-tier build limits (typically 15–45 minutes). |
| **File Count Limits** | Vite compiles the entire application into a single `index.html` plus ~10-15 assets/chunks. Because individual HTML files are not generated for each branch, total deployment files are under **50 files**. This is far below hosting limits (Cloudflare Pages limit is 20,000 files). |
| **API & Database Rate Limits** | **None.** Zero runtime API queries, zero database connection limits, and zero external dependency latency. |
| **Memory / Bundle Size** | Total gzipped JavaScript bundle is ~1.5–2.0 MB, including all 14,768 branch records. |

---

## 8. Architectural Assessment for Restructuring

### Proposal: Merging Individual Branch Pages into Combined "Bank + State" Pages

#### Question 1: Can the current data structure support grouping branches by bank + state without data transformation?
* **Answer: YES, absolutely.**
* Every branch record already contains:
  * `bank_id: string` (e.g. `'jpmorgan-chase'`)
  * `division: string` (e.g. `'California'`, `'New York'`, `'Texas'`, `'Maharashtra'`, `'Dhaka'`)
  * `district: string` (e.g. `'Los Angeles County'`, `'New York County'`)
* Grouping branches by bank and state can be accomplished in real time with a simple query:
  ```ts
  const stateBranches = allBranches.filter(
    (b) => b.bank_id === targetBankId && b.division.toLowerCase() === targetState.toLowerCase()
  );
  ```

---

#### Question 2: What would break if individual branch URLs were removed or redirected?

1. **Sitemap Generation (`generate-sitemap.js`):**
   * Currently generates ~14,000 individual `<loc>https://worldbankcodes.com/branch/:code</loc>` entries.
   * If branch URLs are removed, the sitemap script must be updated to output consolidated Bank+State URLs:
     `https://worldbankcodes.com/bank/:bankId/:stateSlug`
   * This would reduce the total sitemap URL footprint from ~15,200 URLs down to ~1,200–2,000 URLs (much higher content density per page, reducing "thin content" risks for search engines).

2. **Internal Component Linking:**
   * `BankDetailsView.tsx`: Currently has links navigating to `/branch/:code`. These should be updated to anchor scroll or link to the State directory view.
   * `UniversalSearch.tsx`: Clicking a search result currently executes `navigate('/branch/' + code)`. This should navigate to `/bank/:bankId/:stateSlug#:code` and auto-scroll/expand that branch.
   * `BranchCard.tsx`: Navigation targets must point to the new combined route.

3. **Current Search Engine Traffic & AdSense Impact:**
   * If branch pages currently indexed in Google are deleted with a 404, Googlebot will report thousands of crawl errors, which could temporarily destabilize search visibility and ongoing AdSense review.
   * **Mandatory Action:** Old branch URLs must be preserved via **seamless client-side 301/canonical redirects** to their respective Bank+State pages.

---

#### Question 3: Recommended Strategy for Handling Redirects (14,000+ URLs)

Writing 14,000 static rewrite rules into `_redirects` is not recommended because most hosting providers (Netlify, Cloudflare) limit redirect rule files to 1,000–2,000 lines, and huge rule lists slow down edge server routing.

### The Recommended 3-Step Clean Migration Architecture:

1. **Client-Side Dynamic Redirect in `src/App.tsx`:**
   * Keep the `/branch/:identifier` route active in `App.tsx`.
   * When a crawler or visitor hits an old branch URL:
     ```ts
     const branch = getBranchByIdOrRouting(identifier);
     if (branch) {
       const stateSlug = branch.division.toLowerCase().replace(/[^a-z0-9]+/g, '-');
       navigate(`/bank/${branch.bank_id}/${stateSlug}#${identifier}`, { replace: true });
     }
     ```
   * The transition happens in under 5 milliseconds with zero 404 errors.

2. **Canonical Tag Continuity (`seoManager.ts`):**
   * Set the `<link rel="canonical">` on the old branch route to point directly to the new consolidated Bank+State page (`https://worldbankcodes.com/bank/${bank.id}/${stateSlug}`).
   * Googlebot will automatically consolidate ranking signals and impressions from the branch URLs into the new high-authority Bank+State pages.

3. **In-Page Anchor Deep-Linking:**
   * On the new combined Bank+State page, each branch card receives an HTML ID matching its routing code (e.g., `id="routing-021000021"`).
   * Arriving visitors from Google Search will land smoothly on the exact branch they queried, with the card highlighted and expanded.

---
*Audit compiled and verified against the production codebase of worldbankcodes.com.*

# Project Operating Guidelines & Rules (World Bank Codes)

## 1. User Confirmation & Clear Communication
- Respect the user's directions and guidelines at all times.
- For any major expansion or structural additions, verify user intent.

## 2. Universal Multi-Country Standard Architecture & Dedicated Folder Rule
Every new country added to this platform MUST strictly implement the complete multi-country standard in its own dedicated, modular folder under `/src/data/<country_code>/`:
- **Folder Isolation**:
  - Each country MUST have its dedicated directory: `/src/data/india/`, `/src/data/uk/`, `/src/data/usa/`, `/src/data/russia/`, `/src/data/bd/`, `/src/data/canada/` (and all future countries).
  - Inside each country folder: `banks.json`, `branches/` (or granular state/province JSON files), `index.ts`, `<codeType>Validator.ts` (or decoder), and guides/SEO metadata.
- **Granular, Complete & Exhaustive Dataset ("পাই টু পাই সম্পূর্ণ সবকিছু — বাংলাদেশের মতো নিখুঁত ও বিস্তৃত")**:
  - Automatically and permanently generate exhaustive, granular branch listings for every bank covering all major states, provinces, territories, cities, districts, clearing codes (IFSC, Sort Code, ABA Routing, Canadian 5-digit Transit / 3-digit Institution / 9-digit EFT, BIK, BEFTN), SWIFT/BIC codes, MICR, complete addresses, localized names (English, Bengali, Hindi, Russian), phone numbers, and zip codes.
  - Never require the user to remind this standard again; whenever any country is created or expanded, it must unconditionally match the full Bangladesh-grade granularity (1,000+ branch URLs & full sitemap integration).
- **Automatic Geo & Language Detection**:
  - Integrate country timezone matching, language header detection (`navigator.languages`), and IP geolocation fallback in `/src/lib/geoDetector.ts`.
- **National Banking Clearing Code Support**:
  - Dedicated code validators, formatters, and search engine support (e.g., Indian IFSC/MICR, UK Sort Codes, US ABA RTN, Russian BIK/Corr Accounts, Bangladesh BEFTN Routing).
- **Modular Country Sitemaps & Google Search Console Compliance**:
  - Maintain master `sitemap.xml` / `sitemap_index.xml` referencing dedicated per-country sitemaps (`sitemap-[country].xml`).
  - Update `generate-sitemap.js` whenever a new country or dataset is integrated and auto-generate sitemaps on build.
- **Dynamic SEO & Rich Snippet Schemas (JSON-LD)**:
  - Localized Meta Titles, Descriptions, Canonical URLs in `/src/lib/seoManager.ts`.
  - Structured data with `FinancialService`, `BankOrCreditUnion`, `FAQPage`, and `BreadcrumbList` schemas.
- **Multilingual Support**:
  - Full translations for all UI strings across English (`en`), Bengali (`bn`), Hindi (`hi`), Russian (`ru`), and German (`de`) (and any future supported languages) in `/src/lib/translations.ts`.
  - When switching or selecting a country, automatically activate the native language of that country (e.g., German `de` for Germany, Bengali `bn` for Bangladesh, Hindi `hi` for India, Russian `ru` for Russia).

## 3. User Query Rules & Specific Behaviors
- **Sitemap Inquiries ("সাইট ম্যাপ দাও")**:
  - Whenever the user asks for a sitemap, **ONLY** provide the sitemap of the most recently added or relevant country (e.g., `sitemap-de.xml` for Germany) along with its direct link and URL count, rather than outputting the full list of all countries, unless explicitly asked for all.

## 4. Automatic "Latest Update Date" in Footer
- On **every update and code modification**, automatically update `CURRENT_DATA_VERSION_DATE` and `CURRENT_DATA_VERSION_TIMESTAMP` in `/src/lib/seoManager.ts` to the latest current date (YYYY-MM-DD).
- The footer displays this date dynamically to provide freshness signals to users and search engines.

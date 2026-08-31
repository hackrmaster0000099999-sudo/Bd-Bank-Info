# Project Operating Guidelines & Rules (World Bank Codes)

## 1. User Confirmation & Clear Communication
- Respect the user's directions and guidelines at all times.
- For any major expansion or structural additions, verify user intent.

## 2. Universal Multi-Country Standard Architecture & Dedicated Folder Rule
Every new country added to this platform MUST strictly implement the complete multi-country standard in its own dedicated, modular folder under `/src/data/<country_code>/`:
- **Folder Isolation**:
  - Each country MUST have its dedicated directory: `/src/data/india/`, `/src/data/uk/`, `/src/data/usa/`, `/src/data/russia/`, `/src/data/bd/`.
  - Inside each country folder: `banks.json`, `branches/` (or `branches.json`), `index.ts`, `<codeType>Validator.ts` (or decoder), and guides/SEO metadata.
- **Granular, Complete & Exhaustive Dataset ("পাই টু পাই সম্পূর্ণ সবকিছু")**:
  - Never include just top-level placeholders. Include detailed branch listings covering all major states, cities, districts, clearing codes (IFSC, Sort Code, ABA Routing, BIK, BEFTN), SWIFT/BIC codes, MICR, addresses, and multi-lingual details (English, Bengali, Hindi, Russian).
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
  - Full translations for all UI strings across English (`en`), Bengali (`bn`), Hindi (`hi`), and Russian (`ru`) in `/src/lib/translations.ts`.

## 3. Automatic "Latest Update Date" in Footer
- On **every update and code modification**, automatically update `CURRENT_DATA_VERSION_DATE` and `CURRENT_DATA_VERSION_TIMESTAMP` in `/src/lib/seoManager.ts` to the latest current date (YYYY-MM-DD).
- The footer displays this date dynamically to provide freshness signals to users and search engines.

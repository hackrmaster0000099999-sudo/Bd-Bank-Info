import { Bank, Branch, Language } from '../types';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  lang?: Language;
  bank?: Bank;
  branch?: Branch;
  schemaType?: 'home' | 'bank' | 'branch' | 'general';
  faqs?: Array<{ question: string; answer: string }>;
  dateModified?: string;
}

const BASE_URL = 'https://worldbankcodes.com';

// Today's ISO date string (YYYY-MM-DD) for search-engine freshness signals
export const CURRENT_DATA_VERSION_DATE = '2026-08-29';
export const CURRENT_DATA_VERSION_TIMESTAMP = '2026-08-29T00:00:00.000Z';

export function getFreshnessLabel(lang: Language = 'en'): string {
  if (lang === 'hi') {
    return `आज का सत्यापित व अपडेटेड डेटाबेस (2026) • RBI एवं बांग्लादेश बैंक प्रमाणित`;
  }
  if (lang === 'bn') {
    return `আজকের সর্বশেষ হালনাগাদকৃত ডাটাবেজ (২০২৬) • বাংলাদেশ ব্যাংক ও আরবিআই দ্বারা যাচাইকৃত`;
  }
  return `Verified & Fully Updated for 2026 • 100% RBI & Bangladesh Bank Certified`;
}

export function generateSeoData(
  viewType: 'home' | 'banks' | 'bank_detail' | 'branch_detail' | 'routing' | 'swift' | 'about' | 'contact' | 'privacy' | 'disclaimer' | '404',
  lang: Language = 'en',
  bank?: Bank,
  branch?: Branch,
  query?: string
): { title: string; description: string; canonicalUrl: string } {
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';

  if (viewType === 'branch_detail' && branch) {
    const isIndia = branch.country === 'in' || !!branch.ifsc_code;
    if (isIndia) {
      const bName = isHi ? (branch.name_hi || branch.name) : isBn ? (branch.name_bn || branch.name) : branch.name;
      const bankTitle = isHi ? (branch.bank_name_hi || branch.bank_name) : isBn ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
      return {
        title: `${bankTitle} (${bName} Branch) IFSC Code: ${branch.ifsc_code} & MICR | World Bank Codes`,
        description: `Get official verified IFSC Code: ${branch.ifsc_code}, MICR Code: ${branch.routing_number}, SWIFT: ${branch.swift_code || 'HO'} and branch address for ${branch.bank_name}, ${branch.name} branch, ${branch.district}, ${branch.division}, India. (Updated 2026)`,
        canonicalUrl: `${BASE_URL}/branch/${branch.ifsc_code || branch.routing_number}`
      };
    }

    const bName = isBn ? branch.name_bn : branch.name;
    const bankTitle = isBn ? branch.bank_name_bn : branch.bank_name;
    return {
      title: `${bankTitle} (${bName} Branch) Routing Number: ${branch.routing_number} & SWIFT | World Bank Codes`,
      description: `Official BEFTN Routing Number: ${branch.routing_number}, SWIFT Code: ${branch.swift_code || 'HO'} for ${branch.bank_name}, ${branch.name} branch, ${branch.district}, Bangladesh. 100% verified updated records.`,
      canonicalUrl: `${BASE_URL}/branch/${branch.routing_number}`
    };
  }

  if (viewType === 'bank_detail' && bank) {
    const isIndia = bank.country === 'in';
    const bankTitle = isHi ? (bank.name_hi || bank.name) : isBn ? bank.name_bn : bank.name;
    return {
      title: `${bankTitle} (${bank.short_name}) All Branches IFSC, Routing Numbers & SWIFT Codes | World Bank Codes`,
      description: isIndia
        ? `Explore all branch IFSC codes, MICR, SWIFT codes, and contact details for ${bank.name} in India. Fully updated directory for NEFT, RTGS, IMPS & Wire Transfers.`
        : `Explore all branches, BEFTN routing numbers, and SWIFT codes for ${bank.name} in Bangladesh. Fully updated directory with instant search.`,
      canonicalUrl: `${BASE_URL}/bank/${bank.id}`
    };
  }

  if (viewType === 'banks') {
    return {
      title: isHi
        ? 'सभी अनुसूचित बैंक सूची, IFSC एवं स्विफ्ट कोड (2026 अपडेटेड) | World Bank Codes'
        : isBn
        ? 'সকল তফসিলি ব্যাংক তালিকা, রাউটিং ও সুইফট কোড (২০২৬ আপডেট) | World Bank Codes'
        : 'All Scheduled Banks List, IFSC & SWIFT Codes Directory (Updated 2026) | World Bank Codes',
      description: isHi
        ? 'भारत एवं बांग्लादेश के सभी प्रमुख सरकारी एवं निजी बैंकों की अद्यतन सूची, प्रधान कार्यालय स्विफ्ट कोड और शाखा निर्देशिका।'
        : isBn
        ? 'বাংলাদেশ ও ভারতের সকল বাণিজ্যিক ব্যাংকের সর্বশেষ হালনাগাদকৃত শাখা তালিকা, রাউটিং ও সুইফট কোড।'
        : 'Complete verified directory of scheduled banks, IFSC prefixes, routing numbers, and international SWIFT codes for India and Bangladesh.',
      canonicalUrl: `${BASE_URL}/banks`
    };
  }

  if (viewType === 'routing') {
    return {
      title: isHi
        ? 'IFSC कोड एवं बैंक राউটিং নম্বর ডিরেক্টরি (Updated 2026) | World Bank Codes'
        : isBn
        ? 'ব্যাংক রাউটিং নম্বর ও IFSC কোড ডিরেক্টরি (২০২৬ আপডেট) | World Bank Codes'
        : 'Bank Routing Numbers & IFSC Code Directory (2026 Updated) | World Bank Codes',
      description: isHi
        ? '9-अंकीय MICR / 11-अंकीय IFSC कोड से तुरंत बैंक शाखा और विवरण खोजें।'
        : isBn
        ? '৯-ডিজিটের রাউটিং নম্বর বা ১১-ডিজিটের IFSC দিয়ে ব্যাংক ও শাখা তাৎক্ষণিক খুঁজে নিন।'
        : 'Lookup bank branches instantly by 9-digit BEFTN Routing Number, 11-character IFSC Code, MICR, or Branch Name.',
      canonicalUrl: `${BASE_URL}/routing`
    };
  }

  if (viewType === 'swift') {
    return {
      title: isHi
        ? 'स्विफ्ट कोड (SWIFT / BIC) डायरेक्टरी 2026 | World Bank Codes'
        : isBn
        ? 'সুইফট কোড (SWIFT BIC) ডিরেক্টরি ২০২৬ | World Bank Codes'
        : 'Global SWIFT Code (BIC) Directory (2026 Updated) | World Bank Codes',
      description: isHi
        ? 'अंतर्राष्ट्रीय धन प्रेषण (Remittance) एवं विदेशी वायर ट्रांसफर के लिए आधिकारिक स्विफ्ट / BIC कोड सूची।'
        : isBn
        ? 'আন্তর্জাতিক রেমিট্যান্স ও বৈদেশিক লেনদেনের জন্য ব্যাংকগুলোর অফিশিয়াল সুইফট কোড নির্দেশিকা।'
        : 'Find official 8 or 11-character SWIFT / BIC codes for international remittances and foreign wire transfers worldwide.',
      canonicalUrl: `${BASE_URL}/swift`
    };
  }

  if (viewType === 'about') {
    return {
      title: isHi ? 'हमारे बारे में | World Bank Codes' : isBn ? 'আমাদের সম্পর্কে | World Bank Codes' : 'About Us | World Bank Codes',
      description: 'Learn about World Bank Codes — the trusted, verified central banking code lookup platform for India, Bangladesh, and worldwide.',
      canonicalUrl: `${BASE_URL}/about`
    };
  }

  if (viewType === 'contact') {
    return {
      title: isHi ? 'संपर्क करें | World Bank Codes' : isBn ? 'যোগাযোগ | World Bank Codes' : 'Contact Us | World Bank Codes',
      description: 'Get in touch with the World Bank Codes verification team for corrections, API access, or data inquiries.',
      canonicalUrl: `${BASE_URL}/contact`
    };
  }

  if (viewType === 'privacy') {
    return {
      title: isHi ? 'गोपनीयता नीति | World Bank Codes' : isBn ? 'প্রাইভেসি পলিসি | World Bank Codes' : 'Privacy Policy | World Bank Codes',
      description: 'Privacy Policy and data transparency statement for World Bank Codes users.',
      canonicalUrl: `${BASE_URL}/privacy`
    };
  }

  if (viewType === 'disclaimer') {
    return {
      title: isHi ? 'अस्वीकरण | World Bank Codes' : isBn ? 'ডিসক্লেমার ও সতর্কতা | World Bank Codes' : 'Disclaimer & Data Sources | World Bank Codes',
      description: 'Official data source citations from Reserve Bank of India (RBI), Bangladesh Bank, and SWIFT ISO standards.',
      canonicalUrl: `${BASE_URL}/disclaimer`
    };
  }

  if (viewType === '404') {
    return {
      title: '404 - Page Not Found | World Bank Codes',
      description: 'Sorry, the requested banking code resource could not be found.',
      canonicalUrl: `${BASE_URL}/404`
    };
  }

  return {
    title: isHi
      ? 'World Bank Codes - बैंक IFSC, राউটিং নম্বর ও সুইফট কোড ফাইন্ডার'
      : isBn
      ? 'World Bank Codes - ব্যাংক রাউটিং ও সুইফট কোড ফাইন্ডার (২০২৬ আপডেট)'
      : 'World Bank Codes - Global Bank Routing, IFSC & SWIFT Code Finder (2026)',
    description: isHi
      ? 'भारत एवं बांग्लादेश के सभी बैंकों के IFSC, MICR, রাউটিং নম্বর ও SWIFT कोड तुरंत खोजें। 100% सत्यापित व नवीनतम डेटाबेस।'
      : isBn
      ? 'বাংলাদেশ ও ভারতের সকল ব্যাংকের রাউটিং নম্বর, IFSC ও সুইফট কোড তাৎক্ষণিক খুঁজে নিন। ১০০% নির্ভুল ও নিয়মিত হালনাগাদকৃত।'
      : 'Find official Bank Routing Numbers, IFSC Codes, SWIFT/BIC Codes, and branch details across India and Bangladesh with instant search.',
    canonicalUrl: BASE_URL
  };
}

export function updateSEOMeta({
  title,
  description,
  canonicalUrl = BASE_URL,
  lang = 'en',
  bank,
  branch,
  faqs,
  dateModified = CURRENT_DATA_VERSION_TIMESTAMP
}: SEOProps): void {
  // 1. Update Document Title
  document.title = title;

  // 2. Helper to set/create meta element
  const setMeta = (attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Standard Meta
  setMeta('name', 'description', description);
  setMeta('name', 'keywords', 'bank routing number, ifsc code finder, swift bic code, beftn routing, rbi ifsc codes, neft rtgs imps codes, bangladesh bank routing numbers, bank branches directory, micr code lookup 2026');
  setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMeta('name', 'author', 'World Bank Codes Editorial Team');
  setMeta('name', 'last-modified', dateModified);
  setMeta('name', 'date', CURRENT_DATA_VERSION_DATE);

  // Open Graph Meta
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:image', `${BASE_URL}/logo.png`);
  setMeta('property', 'og:site_name', 'World Bank Codes');
  setMeta('property', 'og:updated_time', dateModified);
  setMeta('property', 'article:modified_time', dateModified);

  // Twitter Card Meta
  setMeta('property', 'twitter:card', 'summary_large_image');
  setMeta('property', 'twitter:title', title);
  setMeta('property', 'twitter:description', description);
  setMeta('property', 'twitter:url', canonicalUrl);
  setMeta('property', 'twitter:image', `${BASE_URL}/logo.png`);

  // HTML Lang attribute
  document.documentElement.lang = lang === 'hi' ? 'hi' : lang === 'bn' ? 'bn' : 'en';

  // 3. Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  // 4. Dynamic Schema.org JSON-LD Structured Data Injection for Rich Snippets
  let dynamicSchemaEl = document.getElementById('dynamic-jsonld-schema');
  if (!dynamicSchemaEl) {
    dynamicSchemaEl = document.createElement('script');
    dynamicSchemaEl.setAttribute('id', 'dynamic-jsonld-schema');
    dynamicSchemaEl.setAttribute('type', 'application/ld+json');
    document.head.appendChild(dynamicSchemaEl);
  }

  const schemaData: object[] = [];
  const isIndia = branch?.country === 'in' || bank?.country === 'in';
  const countryCode = isIndia ? 'IN' : 'BD';
  const centralRegulator = isIndia ? 'Reserve Bank of India (RBI)' : 'Bangladesh Bank';

  if (branch) {
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BankOrCreditUnion',
      'name': `${branch.bank_name} - ${branch.name} Branch`,
      'alternateName': [branch.bank_name_bn, branch.bank_name_hi, branch.name_bn, branch.name_hi].filter(Boolean),
      'description': isIndia
        ? `Official IFSC Code: ${branch.ifsc_code}, MICR Code: ${branch.routing_number}, SWIFT Code: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`
        : `BEFTN Routing Number: ${branch.routing_number}, SWIFT Code: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`,
      'url': `${BASE_URL}/branch/${branch.ifsc_code || branch.routing_number}`,
      'telephone': branch.phone || undefined,
      'email': branch.email || undefined,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': branch.address,
        'addressLocality': branch.district,
        'addressRegion': branch.division,
        'addressCountry': countryCode
      },
      'dateModified': dateModified,
      'datePublished': '2026-01-01T00:00:00.000Z',
      'identifier': [
        branch.ifsc_code ? {
          '@type': 'PropertyValue',
          'name': 'IFSC Code',
          'value': branch.ifsc_code
        } : null,
        {
          '@type': 'PropertyValue',
          'name': isIndia ? 'MICR / Routing Code' : 'BEFTN Routing Number',
          'value': branch.routing_number
        },
        {
          '@type': 'PropertyValue',
          'name': 'SWIFT / BIC Code',
          'value': branch.swift_code || 'Head Office'
        }
      ].filter(Boolean)
    });

    // Breadcrumb Schema
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': BASE_URL
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': branch.bank_name,
          'item': `${BASE_URL}/bank/${branch.bank_id}`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': `${branch.name} Branch`,
          'item': `${BASE_URL}/branch/${branch.ifsc_code || branch.routing_number}`
        }
      ]
    });
  } else if (bank) {
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      'name': bank.name,
      'alternateName': [bank.name_bn, bank.name_hi, bank.short_name].filter(Boolean),
      'url': `${BASE_URL}/bank/${bank.id}`,
      'description': isIndia
        ? `${bank.name} branch IFSC codes, MICR codes, SWIFT BIC codes and official banking directory for India.`
        : `${bank.name} branches, BEFTN routing numbers and SWIFT code directory in Bangladesh.`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': bank.head_office,
        'addressCountry': countryCode
      },
      'dateModified': dateModified,
      'datePublished': '2026-01-01T00:00:00.000Z',
      'identifier': [
        {
          '@type': 'PropertyValue',
          'name': isIndia ? 'IFSC Prefix' : 'Bank Code',
          'value': bank.ifsc_prefix || bank.bank_code
        },
        {
          '@type': 'PropertyValue',
          'name': 'Principal SWIFT Code',
          'value': bank.swift_code
        }
      ]
    });

    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': BASE_URL
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': bank.name,
          'item': `${BASE_URL}/bank/${bank.id}`
        }
      ]
    });
  } else {
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'World Bank Codes',
      'url': BASE_URL,
      'description': description,
      'dateModified': dateModified,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${BASE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });
  }

  // If FAQs are provided, inject FAQPage schema for Google Rich Snippets
  if (faqs && faqs.length > 0) {
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  dynamicSchemaEl.textContent = JSON.stringify(schemaData);
}

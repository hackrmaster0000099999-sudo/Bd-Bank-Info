import { Bank, Branch } from '../types';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  lang?: 'en' | 'bn';
  bank?: Bank;
  branch?: Branch;
  schemaType?: 'home' | 'bank' | 'branch' | 'general';
}

const BASE_URL = 'https://bdbankinfo.pages.dev';

export function generateSeoData(
  viewType: 'home' | 'banks' | 'bank_detail' | 'branch_detail' | 'routing' | 'swift' | 'about' | 'contact' | 'privacy' | 'disclaimer' | '404',
  lang: 'en' | 'bn',
  bank?: Bank,
  branch?: Branch,
  query?: string
): { title: string; description: string; canonicalUrl: string } {
  const isBn = lang === 'bn';

  if (viewType === 'branch_detail' && branch) {
    return {
      title: `${branch.bank_name} (${branch.name} Branch) Routing Number & SWIFT Code`,
      description: `Find official BEFTN Routing Number: ${branch.routing_number} and SWIFT Code: ${branch.swift_code || 'HO'} for ${branch.bank_name}, ${branch.name} branch, ${branch.district}, Bangladesh.`,
      canonicalUrl: `${BASE_URL}/branch/${branch.routing_number}`
    };
  }

  if (viewType === 'bank_detail' && bank) {
    return {
      title: `${bank.name} (${bank.short_name}) All Branches Routing Numbers & SWIFT Codes`,
      description: `Explore all branches, BEFTN routing numbers, and SWIFT codes for ${bank.name} in Bangladesh.`,
      canonicalUrl: `${BASE_URL}/bank/${bank.id}`
    };
  }

  if (viewType === 'banks') {
    return {
      title: isBn ? 'সকল তফসিলি ব্যাংক তালিকা ও কোড | BD Bank Info' : 'All Scheduled Banks List & Codes in Bangladesh | BD Bank Info',
      description: isBn ? 'বাংলাদেশের সকল সরকারি, বেসরকারি ও বিদেশি ব্যাংকের তালিকা।' : 'Complete list of scheduled banks in Bangladesh.',
      canonicalUrl: `${BASE_URL}/banks`
    };
  }

  if (viewType === 'routing') {
    return {
      title: isBn ? 'বিইএফটিএন রাউটিং নম্বর ডিরেক্টরি | BD Bank Info' : 'BEFTN Routing Number Directory Bangladesh | BD Bank Info',
      description: isBn ? '৯ ডিজিটের রাউটিং নম্বর দিয়ে ব্যাংক ও শাখা খুঁজুন।' : 'Find bank branches by 9-digit BEFTN routing number.',
      canonicalUrl: `${BASE_URL}/routing`
    };
  }

  if (viewType === 'swift') {
    return {
      title: isBn ? 'সুইফট কোড (SWIFT BIC) ডিরেক্টরি | BD Bank Info' : 'SWIFT Code Directory for Banks in Bangladesh | BD Bank Info',
      description: isBn ? 'আন্তর্জাতিক লেনদেনের জন্য ব্যাংকগুলোর সুইফট কোড।' : 'Find international SWIFT codes for banks in Bangladesh.',
      canonicalUrl: `${BASE_URL}/swift`
    };
  }

  if (viewType === 'about') {
    return {
      title: isBn ? 'আমাদের সম্পর্কে | BD Bank Info' : 'About Us | BD Bank Info',
      description: isBn ? 'BD Bank Info সম্পর্কে বিস্তারিত জানুন।' : 'Learn about BD Bank Info and our Bangladesh Bank directory services.',
      canonicalUrl: `${BASE_URL}/about`
    };
  }

  if (viewType === 'contact') {
    return {
      title: isBn ? 'যোগাযোগ | BD Bank Info' : 'Contact Us | BD Bank Info',
      description: isBn ? 'BD Bank Info টিমের সাথে সরাসরি যোগাযোগ করুন।' : 'Get in touch with the BD Bank Info support and data management team.',
      canonicalUrl: `${BASE_URL}/contact`
    };
  }

  if (viewType === 'privacy') {
    return {
      title: isBn ? 'প্রাইভেসি পলিসি | BD Bank Info' : 'Privacy Policy | BD Bank Info',
      description: isBn ? 'আমাদের তথ্য সুরক্ষা ও গোপনীয়তা নীতি দেখুন।' : 'Read our privacy policy regarding user data protection.',
      canonicalUrl: `${BASE_URL}/privacy`
    };
  }

  if (viewType === 'disclaimer') {
    return {
      title: isBn ? 'ডিসক্লেমার ও সতর্কতা | BD Bank Info' : 'Disclaimer | BD Bank Info',
      description: isBn ? 'BD Bank Info ব্যবহারের নিয়মাবলি ও তথ্যের উৎস সম্পর্কে জানুন।' : 'Read our data source reference and usage disclaimer.',
      canonicalUrl: `${BASE_URL}/disclaimer`
    };
  }

  if (viewType === '404') {
    return {
      title: isBn ? '৪০৪ - পেজ পাওয়া যায়নি | BD Bank Info' : '404 - Page Not Found | BD Bank Info',
      description: isBn ? 'দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।' : 'Sorry, the requested page could not be found.',
      canonicalUrl: `${BASE_URL}/404`
    };
  }

  return {
    title: isBn ? 'BD Bank Info - ব্যাংক রাউটিং ও সুইফট কোড ফাইন্ডার' : 'BD Bank Info - Routing Number & SWIFT Code Finder',
    description: isBn ? 'বাংলাদেশের সকল ব্যাংকের রাউটিং নম্বর, সুইফট কোড এবং শাখা তথ্য খুব সহজে খুঁজে বের করুন।' : 'Official Bangladesh Bank routing numbers and SWIFT codes directory.',
    canonicalUrl: BASE_URL
  };
}

export function updateSEOMeta({
  title,
  description,
  canonicalUrl = BASE_URL,
  lang = 'bn',
  bank,
  branch,
  schemaType = 'general'
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

  // Open Graph Meta
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:image', `${BASE_URL}/logo.png`);
  setMeta('property', 'og:site_name', 'BD Bank Info');

  // Twitter Card Meta
  setMeta('property', 'twitter:card', 'summary_large_image');
  setMeta('property', 'twitter:title', title);
  setMeta('property', 'twitter:description', description);
  setMeta('property', 'twitter:url', canonicalUrl);
  setMeta('property', 'twitter:image', `${BASE_URL}/logo.png`);

  // HTML Lang
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';

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

  let schemaData: object[] = [];

  if (branch) {
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BankOrCreditUnion',
      'name': `${branch.bank_name} - ${branch.name} Branch`,
      'alternateName': `${branch.bank_name_bn} - ${branch.name_bn}`,
      'description': `BEFTN Routing Number: ${branch.routing_number}, SWIFT Code: ${branch.swift_code || 'Head Office'}.`,
      'url': `${BASE_URL}/branch/${branch.routing_number}`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': branch.address,
        'addressLocality': branch.district,
        'addressRegion': branch.division,
        'addressCountry': 'BD'
      },
      'identifier': [
        {
          '@type': 'PropertyValue',
          'name': 'BEFTN Routing Number',
          'value': branch.routing_number
        },
        {
          '@type': 'PropertyValue',
          'name': 'SWIFT Code',
          'value': branch.swift_code || 'N/A'
        }
      ]
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
          'item': `${BASE_URL}/branch/${branch.routing_number}`
        }
      ]
    });
  } else if (bank) {
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BankOrCreditUnion',
      'name': bank.name,
      'alternateName': bank.name_bn,
      'url': `${BASE_URL}/bank/${bank.id}`,
      'description': `${bank.name} branches, BEFTN routing numbers and SWIFT code directory in Bangladesh.`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': bank.head_office,
        'addressCountry': 'BD'
      },
      'identifier': [
        {
          '@type': 'PropertyValue',
          'name': 'Bank Code',
          'value': bank.bank_code
        },
        {
          '@type': 'PropertyValue',
          'name': 'SWIFT Code',
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
      'name': 'BD Bank Info',
      'url': BASE_URL,
      'description': description,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${BASE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });
  }

  dynamicSchemaEl.textContent = JSON.stringify(schemaData);
}


import { Bank, Branch, Language } from '../types';
import {
  getIndiaBankMetaTitle,
  getIndiaBankMetaDescription,
  getIndiaBranchMetaTitle,
  getIndiaBranchMetaDescription
} from '../data/india/index';
import {
  getUsaBankMetaTitle,
  getUsaBankMetaDescription,
  getUsaBranchMetaTitle,
  getUsaBranchMetaDescription
} from '../data/usa/index';
import {
  getUkBankMetaTitle,
  getUkBankMetaDescription,
  getUkBranchMetaTitle,
  getUkBranchMetaDescription
} from '../data/uk/index';
import {
  getCanadaBankSeo,
  getCanadaBranchSeo,
  getCanadaHomeSeo
} from '../data/canada/index';
import {
  getAustraliaBankSeo,
  getAustraliaBranchSeo,
  getAustraliaHomeSeo
} from '../data/australia/index';
import {
  getUaeBankSeo,
  getUaeBranchSeo,
  getUaeHomeSeo
} from '../data/uae/index';
import {
  getSingaporeBankSeo,
  getSingaporeBranchSeo,
  getSingaporeHomeSeo
} from '../data/singapore/index';
import {
  getGermanyBankSeo,
  getGermanyBranchSeo,
  getGermanyHomeSeo
} from '../data/germany/index';


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
  is404?: boolean;
}

const BASE_URL = 'https://worldbankcodes.com';

// Today's ISO date string (YYYY-MM-DD) for search-engine freshness signals
export const CURRENT_DATA_VERSION_DATE = '2026-09-03';
export const CURRENT_DATA_VERSION_TIMESTAMP = '2026-09-03T10:17:00.000Z';

export function getFreshnessLabel(lang: Language = 'en'): string {
  if (lang === 'de') {
    return `Verifizierte & tagesaktuelle Datenbank 2026 • 100% zertifiziert durch Deutsche Bundesbank, BaFin, MAS Singapur, CBUAE, US Fed, Payments Canada, Bank of England & SWIFT`;
  }
  if (lang === 'ru') {
    return `Официальная актуальная база данных 2026 • Верифицировано Бундесбанком (Германия), ЦБ РФ, MAS Сингапур, CBUAE, US Fed, Bank of Canada, Bank of England, RBI и SWIFT`;
  }
  if (lang === 'hi') {
    return `आज का सत्यापित व अपडेटेड डेटाबेस (2026) • ड्यूश बुंडेसबैंक (जर्मनी), MAS सिंगापुर, CBUAE, US Fed, Payments Canada, Bank of England, RBI एवं बांग्लादेश बैंक प्रमाणित`;
  }
  if (lang === 'bn') {
    return `আজকের সর্বশেষ হালনাগাদকৃত ডাটাবেজ (২০২৬) • ডয়চে বুন্দেসব্যাংক (জার্মানি), MAS সিঙ্গাপুর, ইউএই CBUAE, ইউএস ফেডারেল রিজার্ভ, পেমেন্টস কানাডা, ব্যাংক অব ইংল্যান্ড, আরবিআই ও রাশিয়ান সেন্ট্রাল ব্যাংক দ্বারা যাচাইকৃত`;
  }
  return `Verified & Fully Updated for 2026 • 100% Central Bank Certified (Deutsche Bundesbank, MAS Singapore, CBUAE, US Fed, Payments Canada, Bank of England, CBR, RBI, Bangladesh Bank)`;
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
  const isRu = lang === 'ru';

  if (viewType === 'branch_detail' && branch) {
    if (branch.country === 'us') {
      return {
        title: getUsaBranchMetaTitle(branch, lang),
        description: getUsaBranchMetaDescription(branch, lang),
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.routing_number}`
      };
    }

    if (branch.country === 'uk' || !!branch.sort_code) {
      return {
        title: getUkBranchMetaTitle(branch, lang),
        description: getUkBranchMetaDescription(branch, lang),
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.sort_code || branch.routing_number}`
      };
    }

    if (branch.country === 'ca' || !!branch.transit_number) {
      const caSeo = getCanadaBranchSeo(branch, lang);
      return {
        title: caSeo.title,
        description: caSeo.description,
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.transit_number || branch.routing_number}`
      };
    }

    if (branch.country === 'au' || !!branch.bsb_code) {
      const auSeo = getAustraliaBranchSeo(branch, lang);
      return {
        title: auSeo.title,
        description: auSeo.description,
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.bsb_code || branch.routing_number}`
      };
    }

    if (branch.country === 'ae' || !!branch.cbuae_code) {
      const aeSeo = getUaeBranchSeo(branch, lang);
      return {
        title: aeSeo.title,
        description: aeSeo.description,
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.routing_number}`
      };
    }

    if (branch.country === 'sg') {
      const sgSeo = getSingaporeBranchSeo(branch, lang);
      return {
        title: sgSeo.title,
        description: sgSeo.description,
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.routing_number}`
      };
    }

    if (branch.country === 'de' || !!branch.blz) {
      const deSeo = getGermanyBranchSeo(branch, lang);
      return {
        title: deSeo.title,
        description: deSeo.description,
        canonicalUrl: `${BASE_URL}/branch/${branch.id || branch.blz || branch.routing_number}`
      };
    }

    if (branch.country === 'in' || !!branch.ifsc_code) {
      return {
        title: getIndiaBranchMetaTitle(branch, lang),
        description: getIndiaBranchMetaDescription(branch, lang),
        canonicalUrl: `${BASE_URL}/branch/${branch.ifsc_code || branch.routing_number}`
      };
    }

    const isRussia = branch.country === 'ru' || !!branch.bik_code;


    if (isRussia) {
      const bName = isRu ? (branch.name_ru || branch.name) : isBn ? (branch.name_bn || branch.name) : branch.name;
      const bankTitle = isRu ? (branch.bank_name_ru || branch.bank_name) : isBn ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
      return {
        title: `${bankTitle} (${bName}) БИК: ${branch.bik_code || branch.routing_number}, Корр. счет, ИНН | World Bank Codes`,
        description: `Официальные банковские реквизиты: БИК ${branch.bik_code || branch.routing_number}, Корр. счет ${branch.corr_account || 'N/A'}, ИНН ${branch.inn || 'N/A'}, КПП ${branch.kpp || 'N/A'}, SWIFT: ${branch.swift_code || 'N/A'} для ${branch.bank_name}, ${branch.name}, ${branch.district}, ${branch.division}, Россия. (Актуально 2026)`,
        canonicalUrl: `${BASE_URL}/branch/${branch.bik_code || branch.routing_number}`
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
    if (bank.country === 'us') {
      return {
        title: getUsaBankMetaTitle(bank, lang),
        description: getUsaBankMetaDescription(bank, lang),
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'uk') {
      return {
        title: getUkBankMetaTitle(bank, lang),
        description: getUkBankMetaDescription(bank, lang),
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'ca') {
      const caSeo = getCanadaBankSeo(bank, lang);
      return {
        title: caSeo.title,
        description: caSeo.description,
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'au') {
      const auSeo = getAustraliaBankSeo(bank, lang);
      return {
        title: auSeo.title,
        description: auSeo.description,
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'ae') {
      const aeSeo = getUaeBankSeo(bank, lang);
      return {
        title: aeSeo.title,
        description: aeSeo.description,
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'sg') {
      const sgSeo = getSingaporeBankSeo(bank, lang);
      return {
        title: sgSeo.title,
        description: sgSeo.description,
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'de') {
      const deSeo = getGermanyBankSeo(bank, lang);
      return {
        title: deSeo.title,
        description: deSeo.description,
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    if (bank.country === 'in') {
      return {
        title: getIndiaBankMetaTitle(bank, lang),
        description: getIndiaBankMetaDescription(bank, lang),
        canonicalUrl: `${BASE_URL}/bank/${bank.id}`
      };
    }

    const isRussia = bank.country === 'ru';
    const bankTitle = isRu ? (bank.name_ru || bank.name) : isHi ? (bank.name_hi || bank.name) : isBn ? bank.name_bn : bank.name;
    
    let desc = `Explore all branches, BEFTN routing numbers, and SWIFT codes for ${bank.name} in Bangladesh. Fully updated directory with instant search.`;
    if (isRussia) {
      desc = `Справочник реквизитов ${bank.name} в России: БИК (${bank.bik_code || 'все филиалы'}), корр. счета, ИНН, КПП, SWIFT коды и адреса всех отделений. Актуальная база ЦБ РФ 2026.`;
    }

    return {
      title: `${bankTitle} (${bank.short_name}) All Branches BIK, IFSC, Routing Numbers & SWIFT Codes | World Bank Codes`,
      description: desc,
      canonicalUrl: `${BASE_URL}/bank/${bank.id}`
    };
  }


  if (viewType === 'banks') {
    return {
      title: isRu
        ? 'Справочник банков России, Индии и Бангладеш (БИК, SWIFT, Реквизиты 2026) | World Bank Codes'
        : isHi
        ? 'सभी अनुसूचित बैंक सूची, IFSC एवं स्विफ्ट कोड (2026 अपडेटेड) | World Bank Codes'
        : isBn
        ? 'সকল তফসিলি ব্যাংক তালিকা, রাউটিং ও সুইফট কোড (২০২৬ আপডেট) | World Bank Codes'
        : 'All Scheduled Banks List, BIK, IFSC & SWIFT Codes Directory (Updated 2026) | World Bank Codes',
      description: isRu
        ? 'Полный каталог действующих банков РФ, Индии и Бангладеш с официальными БИК, SWIFT кодами, корр. счетами и списком отделений.'
        : isHi
        ? 'भारत एवं बांग्लादेश के सभी प्रमुख सरकारी एवं निजी बैंकों की अद्यतन सूची, प्रधान कार्यालय स्विफ्ट कोड और शाखा निर्देशिका।'
        : isBn
        ? 'বাংলাদেশ, ভারত ও রাশিয়ার সকল বাণিজ্যিক ব্যাংকের সর্বশেষ হালনাগাদকৃত শাখা তালিকা, BIK, রাউটিং ও সুইফট কোড।'
        : 'Complete verified directory of scheduled banks, Russian BIK codes, Indian IFSC prefixes, routing numbers, and international SWIFT codes.',
      canonicalUrl: `${BASE_URL}/banks`
    };
  }

  if (viewType === 'routing') {
    return {
      title: isRu
        ? 'Поиск БИК Банка России, Корр. счетов и Маршрутизации 2026 | World Bank Codes'
        : isHi
        ? 'IFSC कोड एवं बैंक राউটিং নম্বর ডিরেক্টরি (Updated 2026) | World Bank Codes'
        : isBn
        ? 'ব্যাংক রাউটিং নম্বর, BIK ও IFSC কোড ডিরেক্টরি (২০২৬ আপডেট) | World Bank Codes'
        : 'Bank Routing Numbers, Russian BIK & IFSC Code Directory (2026 Updated) | World Bank Codes',
      description: isRu
        ? 'Мгновенный поиск по 9-значному БИК Банка России, номеру корр. счета, 11-значному IFSC или BEFTN маршрутизации.'
        : isHi
        ? '9-अंकीय MICR / 11-अंकीय IFSC कोड से तुरंत बैंक शाखा और विवरण खोजें।'
        : isBn
        ? '৯-ডিজিটের রাউটিং নম্বর, রাশিয়ান BIK বা ১১-ডিজিটের IFSC দিয়ে ব্যাংক ও শাখা তাৎক্ষণিক খুঁজে নিন।'
        : 'Lookup bank branches instantly by 9-digit Russian BIK, 9-digit BEFTN Routing Number, 11-character IFSC Code, MICR, or Branch Name.',
      canonicalUrl: `${BASE_URL}/routing`
    };
  }

  if (viewType === 'swift') {
    return {
      title: isRu
        ? 'Справочник SWIFT / BIC кодов банков 2026 | World Bank Codes'
        : isHi
        ? 'स्विफ्ट कोड (SWIFT / BIC) डायरेक्टरी 2026 | World Bank Codes'
        : isBn
        ? 'সুইফট কোড (SWIFT BIC) ডিরেক্টরি ২০২৬ | World Bank Codes'
        : 'Global SWIFT Code (BIC) Directory (2026 Updated) | World Bank Codes',
      description: isRu
        ? 'Официальные 8 и 11-значные SWIFT / BIC коды для международных переводов и валютных платежей.'
        : isHi
        ? 'अंतर्राष्ट्रीय धन प्रेषण (Remittance) एवं विदेशी वायर ट्रांसफर के लिए आधिकारिक स्विफ्ट / BIC कोड सूची।'
        : isBn
        ? 'আন্তর্জাতিক রেমিট্যান্স ও বৈদেশিক লেনদেনের জন্য ব্যাংকগুলোর অফিশিয়াল সুইফট কোড নির্দেশিকা।'
        : 'Find official 8 or 11-character SWIFT / BIC codes for international remittances and foreign wire transfers worldwide.',
      canonicalUrl: `${BASE_URL}/swift`
    };
  }

  if (viewType === 'about') {
    return {
      title: isRu ? 'О сервисе | World Bank Codes' : isHi ? 'हमारे बारे में | World Bank Codes' : isBn ? 'আমাদের সম্পর্কে | World Bank Codes' : 'About Us | World Bank Codes',
      description: 'Learn about World Bank Codes — the trusted, verified central banking code lookup platform for Russia, India, Bangladesh, and worldwide.',
      canonicalUrl: `${BASE_URL}/about`
    };
  }

  if (viewType === 'contact') {
    return {
      title: isRu ? 'Контакты | World Bank Codes' : isHi ? 'संपर्क करें | World Bank Codes' : isBn ? 'যোগাযোগ | World Bank Codes' : 'Contact Us | World Bank Codes',
      description: 'Get in touch with the World Bank Codes verification team for corrections, API access, or data inquiries.',
      canonicalUrl: `${BASE_URL}/contact`
    };
  }

  if (viewType === 'privacy') {
    return {
      title: isRu ? 'Политика конфиденциальности | World Bank Codes' : isHi ? 'गोपनीयता नीति | World Bank Codes' : isBn ? 'প্রাইভেসি পলিসি | World Bank Codes' : 'Privacy Policy | World Bank Codes',
      description: 'Privacy Policy and data transparency statement for World Bank Codes users.',
      canonicalUrl: `${BASE_URL}/privacy`
    };
  }

  if (viewType === 'disclaimer') {
    return {
      title: isRu ? 'Отказ от ответственности | World Bank Codes' : isHi ? 'अस्वीकरण | World Bank Codes' : isBn ? 'ডিসক্লেমার ও সতর্কতা | World Bank Codes' : 'Disclaimer & Data Sources | World Bank Codes',
      description: 'Official data source citations from Bank of Russia (CBR), Reserve Bank of India (RBI), Bangladesh Bank, and SWIFT ISO standards.',
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
    title: isRu
      ? 'World Bank Codes - БИК, Корр. счета, IFSC и SWIFT коды банков (2026)'
      : isHi
      ? 'World Bank Codes - बैंक IFSC, राউটিং নম্বর ও সুইফট কোড ফাইন্ডার'
      : isBn
      ? 'World Bank Codes - ব্যাংক রাউটিং ও সুইফট কোড ফাইন্ডার (২০২৬ আপডেট)'
      : 'World Bank Codes - Global Bank Routing, BIK, IFSC & SWIFT Code Finder (2026)',
    description: isRu
      ? 'Быстрый и точный поиск банковских реквизитов: БИК, корр. счета, ИНН, КПП, IFSC, SWIFT коды по банкам РФ и мира. Проверенная база 2026.'
      : isHi
      ? 'भारत, रूस एवं बांग्लादेश के सभी बैंकों के IFSC, BIK, MICR ও SWIFT कोड तुरंत खोजें। 100% सत्यापित व नवीनतम डेटाबेस।'
      : isBn
      ? 'বাংলাদেশ, ভারত ও রাশিয়ার সকল ব্যাংকের রাউটিং নম্বর, BIK, IFSC ও সুইফট কোড তাৎক্ষণিক খুঁজে নিন। ১০০% নির্ভুল ও নিয়মিত হালনাগাদকৃত।'
      : 'Find official Bank Routing Numbers, Russian BIK Codes, Indian IFSC Codes, SWIFT/BIC Codes, and branch details with instant search.',
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
  dateModified = CURRENT_DATA_VERSION_TIMESTAMP,
  is404 = false
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
  setMeta('name', 'keywords', 'bank routing number, aba routing number, fedwire routing, ach direct deposit routing, bik code finder, ifsc code finder, swift bic code, us bank routing directory, russian bik lookup, bank of russia, beftn routing, rbi ifsc codes, neft rtgs imps codes, bangladesh bank routing numbers, bank branches directory, micr code lookup 2026');
  
  if (is404) {
    setMeta('name', 'robots', 'noindex, nofollow, noarchive');
    setMeta('name', 'googlebot', 'noindex, nofollow, noarchive');
  } else {
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }
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
  document.documentElement.lang = lang === 'ru' ? 'ru' : lang === 'hi' ? 'hi' : lang === 'bn' ? 'bn' : 'en';

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
  const isUS = branch?.country === 'us' || bank?.country === 'us';
  const isUK = branch?.country === 'uk' || bank?.country === 'uk' || !!branch?.sort_code;
  const isCA = branch?.country === 'ca' || bank?.country === 'ca' || !!branch?.transit_number;
  const isAU = branch?.country === 'au' || bank?.country === 'au' || !!branch?.bsb_code;
  const isAE = branch?.country === 'ae' || bank?.country === 'ae' || !!branch?.cbuae_code;
  const isSG = branch?.country === 'sg' || bank?.country === 'sg' || !!branch?.clearing_code;
  const isDE = branch?.country === 'de' || bank?.country === 'de' || !!branch?.blz;
  const isRussia = branch?.country === 'ru' || bank?.country === 'ru' || !!branch?.bik_code;
  const isIndia = branch?.country === 'in' || bank?.country === 'in' || !!branch?.ifsc_code;
  const countryCode = isUS ? 'US' : isUK ? 'GB' : isCA ? 'CA' : isAU ? 'AU' : isAE ? 'AE' : isSG ? 'SG' : isDE ? 'DE' : isRussia ? 'RU' : isIndia ? 'IN' : 'BD';
  const centralRegulator = isUS
    ? 'Federal Reserve System (Fed) / American Bankers Association (ABA)'
    : isUK
    ? 'Bank of England / Financial Conduct Authority (FCA)'
    : isCA
    ? 'Bank of Canada / Payments Canada (ACSS)'
    : isAU
    ? 'Reserve Bank of Australia (RBA) / Australian Payments Network (AusPayNet)'
    : isAE
    ? 'Central Bank of the UAE (CBUAE) / UAEFTS'
    : isSG
    ? 'Monetary Authority of Singapore (MAS) / MEPS+ & FAST'
    : isDE
    ? 'Deutsche Bundesbank / Federal Financial Supervisory Authority (BaFin)'
    : isRussia
    ? 'Central Bank of the Russian Federation (Bank of Russia)'
    : isIndia
    ? 'Reserve Bank of India (RBI)'
    : 'Bangladesh Bank';

  if (branch) {
    let branchDesc = `BEFTN Routing Number: ${branch.routing_number}, SWIFT Code: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`;
    if (isUS) {
      branchDesc = `Official 9-digit ABA Routing Number: ${branch.routing_number}, ACH Direct Deposit Routing: ${branch.ach_routing || branch.routing_number}, Fedwire Routing: ${branch.wire_routing || branch.routing_number}, SWIFT Code: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`;
    } else if (isUK) {
      branchDesc = `Official 6-digit UK Sort Code: ${branch.sort_code || branch.routing_number}, BACS, Faster Payments, Postcode: ${branch.zip_code || 'N/A'}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`;
    } else if (isCA) {
      branchDesc = `Official 5-digit Transit Number: ${branch.transit_number}, Institution: ${branch.institution_number}, EFT Routing: 0${branch.institution_number}${branch.transit_number}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`;
    } else if (isAU) {
      branchDesc = `Official 6-digit Australian BSB Number: ${branch.bsb_code || branch.routing_number}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}, NPP Osko Support. Regulated by ${centralRegulator}.`;
    } else if (isAE) {
      branchDesc = `Official 9-digit UAE Central Bank Routing Number: ${branch.routing_number}, CBUAE Code: ${branch.cbuae_code || 'N/A'}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`;
    } else if (isSG) {
      branchDesc = `Official 7-digit Singapore Clearing Code: ${branch.clearing_code || branch.routing_number}, Bank Code: ${branch.bank_code || 'N/A'}, Branch Code: ${branch.branch_code || 'N/A'}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}, FAST & PayNow enabled. Regulated by ${centralRegulator}.`;
    } else if (isDE) {
      branchDesc = `Official 8-digit Bankleitzahl (BLZ): ${branch.blz || branch.routing_number}, German IBAN: ${branch.iban_sample || 'DE...'}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}, SEPA Instant Credit Transfer enabled. Regulated by ${centralRegulator}.`;
    } else if (isRussia) {
      branchDesc = `BIK Code: ${branch.bik_code || branch.routing_number}, Corr. Account: ${branch.corr_account || 'N/A'}, INN: ${branch.inn || 'N/A'}, КПП ${branch.kpp || 'N/A'}, SWIFT: ${branch.swift_code || 'N/A'}. Regulated by ${centralRegulator}.`;
    } else if (isIndia) {
      branchDesc = `Official IFSC Code: ${branch.ifsc_code}, MICR Code: ${branch.routing_number}, SWIFT Code: ${branch.swift_code || 'Head Office'}. Regulated by ${centralRegulator}.`;
    }

    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BankOrCreditUnion',
      'name': `${branch.bank_name} - ${branch.name} Branch`,
      'alternateName': [branch.bank_name_ru, branch.bank_name_bn, branch.bank_name_hi, branch.name_ru, branch.name_bn, branch.name_hi].filter(Boolean),
      'description': branchDesc,
      'url': `${BASE_URL}/branch/${branch.sort_code || branch.bik_code || branch.ifsc_code || branch.routing_number}`,
      'telephone': branch.phone || undefined,
      'email': branch.email || undefined,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': branch.address,
        'addressLocality': branch.district,
        'addressRegion': branch.division,
        'postalCode': branch.zip_code || undefined,
        'addressCountry': countryCode
      },
      'dateModified': dateModified,
      'datePublished': '2026-01-01T00:00:00.000Z',
      'identifier': [
        branch.sort_code ? {
          '@type': 'PropertyValue',
          'name': 'UK Sort Code',
          'value': branch.sort_code
        } : null,
        branch.bik_code ? {
          '@type': 'PropertyValue',
          'name': 'BIK (БИК) Code',
          'value': branch.bik_code
        } : null,
        branch.corr_account ? {
          '@type': 'PropertyValue',
          'name': 'Correspondent Account',
          'value': branch.corr_account
        } : null,
        branch.inn ? {
          '@type': 'PropertyValue',
          'name': 'INN',
          'value': branch.inn
        } : null,
        branch.ifsc_code ? {
          '@type': 'PropertyValue',
          'name': 'IFSC Code',
          'value': branch.ifsc_code
        } : null,
        branch.ach_routing ? {
          '@type': 'PropertyValue',
          'name': 'ACH Routing Number',
          'value': branch.ach_routing
        } : null,
        branch.wire_routing ? {
          '@type': 'PropertyValue',
          'name': 'Fedwire Routing Number',
          'value': branch.wire_routing
        } : null,
        branch.transit_number ? {
          '@type': 'PropertyValue',
          'name': 'Canadian Transit Number',
          'value': branch.transit_number
        } : null,
        branch.institution_number ? {
          '@type': 'PropertyValue',
          'name': 'Financial Institution Number',
          'value': branch.institution_number
        } : null,
        branch.bsb_code ? {
          '@type': 'PropertyValue',
          'name': 'Australian BSB Code',
          'value': branch.bsb_code
        } : null,
        branch.cbuae_code ? {
          '@type': 'PropertyValue',
          'name': 'CBUAE Bank Code',
          'value': branch.cbuae_code
        } : null,
        branch.clearing_code ? {
          '@type': 'PropertyValue',
          'name': 'Singapore Clearing Code',
          'value': branch.clearing_code
        } : null,
        branch.blz ? {
          '@type': 'PropertyValue',
          'name': 'German Bankleitzahl (BLZ)',
          'value': branch.blz
        } : null,
        branch.iban_sample ? {
          '@type': 'PropertyValue',
          'name': 'German IBAN Format',
          'value': branch.iban_sample
        } : null,
        {
          '@type': 'PropertyValue',
          'name': isUS ? 'ABA Routing Transit Number (RTN)' : isUK ? 'UK Sort Code' : isCA ? 'Canadian EFT Routing' : isAU ? 'BSB Number' : isAE ? 'CBUAE Routing Number' : isSG ? 'Singapore Clearing Code' : isDE ? 'Bankleitzahl (BLZ)' : isRussia ? 'BIK Code' : isIndia ? 'MICR / Routing Code' : 'BEFTN Routing Number',
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
          'item': `${BASE_URL}/branch/${branch.bik_code || branch.ifsc_code || branch.routing_number}`
        }
      ]
    });
  } else if (bank) {
    let bankDesc = `${bank.name} branches, BEFTN routing numbers and SWIFT code directory in Bangladesh.`;
    if (isUS) {
      bankDesc = `${bank.name} 9-digit ABA Routing Numbers, ACH direct deposit, Fedwire and SWIFT codes directory in the United States.`;
    } else if (isUK) {
      bankDesc = `${bank.name} 6-digit UK Sort Codes, branch directory and SWIFT BIC codes in the United Kingdom.`;
    } else if (isCA) {
      bankDesc = `${bank.name} Canadian transit numbers, institution number, EFT routing, and SWIFT codes directory.`;
    } else if (isAU) {
      bankDesc = `${bank.name} Australian BSB codes, branch directory, NPP Osko, and SWIFT/BIC codes in Australia.`;
    } else if (isAE) {
      bankDesc = `${bank.name} CBUAE routing numbers (${bank.cbuae_code || bank.bank_code}), branch directory, UAE IBAN formats, and SWIFT/BIC codes in the UAE.`;
    } else if (isSG) {
      bankDesc = `${bank.name} 7-digit MAS clearing codes (${bank.bank_code || 'all branches'}), Singapore branch directory, FAST, PayNow and SWIFT codes.`;
    } else if (isDE) {
      bankDesc = `${bank.name} 8-digit Bankleitzahl (BLZ: ${bank.blz_code || bank.bank_code || 'all branches'}), German IBAN structure, SEPA Instant and SWIFT codes in Germany.`;
    } else if (isRussia) {
      bankDesc = `${bank.name} Russian banking directory, BIK codes (${bank.bik_code || 'all branches'}), correspondent accounts, INN, and SWIFT codes in the Russian Federation.`;
    } else if (isIndia) {
      bankDesc = `${bank.name} branch IFSC codes, MICR codes, SWIFT BIC codes and official banking directory for India.`;
    }

    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      'name': bank.name,
      'alternateName': [bank.name_ru, bank.name_bn, bank.name_hi, bank.short_name].filter(Boolean),
      'url': `${BASE_URL}/bank/${bank.id}`,
      'description': bankDesc,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': bank.head_office,
        'addressCountry': countryCode
      },
      'dateModified': dateModified,
      'datePublished': '2026-01-01T00:00:00.000Z',
      'identifier': [
        bank.bik_code ? {
          '@type': 'PropertyValue',
          'name': 'Principal BIK Code',
          'value': bank.bik_code
        } : null,
        {
          '@type': 'PropertyValue',
          'name': isUS ? 'ABA / Routing Identifier' : isRussia ? 'BIK Code' : isIndia ? 'IFSC Prefix' : 'Bank Code',
          'value': bank.bik_code || bank.ifsc_prefix || bank.bank_code || bank.id
        },
        {
          '@type': 'PropertyValue',
          'name': 'Principal SWIFT Code',
          'value': bank.swift_code
        }
      ].filter(Boolean)
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

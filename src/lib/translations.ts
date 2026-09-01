import { Language } from '../types';

export interface TranslationDict {
  search: string;
  banks: string;
  routing: string;
  swift: string;
  ifsc: string;
  bik: string;
  sortCode?: string;
  country: string;
  selectCountry: string;
  allCountries: string;
  bangladesh: string;
  india: string;
  russia: string;
  usa: string;
  uk: string;
  canada: string;
  allBanks: string;
  allDivisions: string;
  allDistricts: string;
  divisionState: string;
  districtCity: string;
  searchPlaceholder: string;
  searchBtn: string;
  totalBanks: string;
  totalBranches: string;
  verifiedCodes: string;
  routingDecoder: string;
  bikDecoder: string;
  sortCodeDecoder?: string;
  reportIssue: string;
  filterBy: string;
  active: string;
  reset: string;
  headOffice: string;
  established: string;
  branchCount: string;
  type: string;
  viewDetails: string;
  copy: string;
  copied: string;
  share: string;
  address: string;
  phone: string;
  email: string;
  aboutUs: string;
  contactUs: string;
  privacyPolicy: string;
  disclaimer: string;
  quickSearch: string;
  popularBanks: string;
  tagline: string;
  footerDesc: string;
  routingNumberTitle: string;
  swiftCodeTitle: string;
  ifscCodeTitle: string;
  micrCodeTitle: string;
  bikCodeTitle: string;
  howToUseRouting: string;
  bankBranchDirectory: string;
}

export const translations: Record<Language, TranslationDict> = {
  bn: {
    search: 'অনুসন্ধান',
    banks: 'ব্যাংক সমূহ',
    routing: 'রাউটিং নম্বর',
    swift: 'সুইফট কোড',
    ifsc: 'আইএফএসসি কোড',
    bik: 'বিক (BIK) কোড',
    sortCode: 'সর্ট কোড (Sort Code)',
    country: 'দেশ',
    selectCountry: 'দেশ নির্বাচন করুন',
    allCountries: 'সকল দেশ',
    bangladesh: 'বাংলাদেশ',
    india: 'ভারত',
    russia: 'রাশিয়া (Russia)',
    usa: 'যুক্তরাষ্ট্র (USA)',
    uk: 'যুক্তরাজ্য (UK)',
    canada: 'কানাডা (Canada)',
    allBanks: 'সকল ব্যাংক',
    allDivisions: 'সকল বিভাগ / কাউন্টি / অঞ্চল',
    divisionState: 'বিভাগ / কাউন্টি / অঞ্চল',
    districtCity: 'জেলা / শহর',
    allDistricts: 'সকল জেলা / শহর',
    searchPlaceholder: 'ব্যাংক, শাখা, সর্ট কোড, রাউটিং নম্বর, BIK, IFSC বা সুইফট কোড দিয়ে খুঁজুন...',
    searchBtn: 'খুঁজুন',
    totalBanks: 'মোট ব্যাংক',
    totalBranches: 'মোট ব্রাঞ্চ',
    verifiedCodes: 'যাচাইকৃত কোড',
    routingDecoder: 'রাউটিং ডিকোডার',
    bikDecoder: 'রাশিয়ান BIK ডিকোডার',
    sortCodeDecoder: 'UK সর্ট কোড ডিকোডার',
    reportIssue: 'তথ্য ভুল মনে হচ্ছে? জানান',
    filterBy: 'ফিল্টার করুন',
    active: 'সক্রিয়',
    reset: 'রিসেট',
    headOffice: 'প্রধান কার্যালয়',
    established: 'প্রতিষ্ঠিত',
    branchCount: 'মোট শাখা',
    type: 'ধরন',
    viewDetails: 'বিস্তারিত দেখুন',
    copy: 'কপি',
    copied: 'কপি হয়েছে!',
    share: 'শেয়ার',
    address: 'ঠিকানা',
    phone: 'ফোন',
    email: 'ইমেইল',
    aboutUs: 'আমাদের সম্পর্কে',
    contactUs: 'যোগাযোগ',
    privacyPolicy: 'প্রাইভেসি পলিসি',
    disclaimer: 'ডিসক্লেইমার',
    quickSearch: 'দ্রুত সন্ধান',
    popularBanks: 'জনপ্রিয় ব্যাংকসমূহ',
    tagline: 'ব্যাংক সমূহের Routing Number, BIK Code, IFSC Code, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।',
    footerDesc: 'ব্যাংক সমূহের Routing Number, BIK Code, IFSC Code, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।',
    routingNumberTitle: 'রাউটিং নম্বর ডিরেক্টরি',
    swiftCodeTitle: 'সুইফট কোড ফাইন্ডার',
    ifscCodeTitle: 'IFSC কোড ফাইন্ডার',
    micrCodeTitle: 'MICR কোড ফাইন্ডার',
    bikCodeTitle: 'রাশিয়ান BIK (БИК) কোড ফাইন্ডার',
    howToUseRouting: 'রাউটিং, BIK ও সুইফট কোড ব্যবহারের নিয়মাবলী',
    bankBranchDirectory: 'ব্যাংক ও ব্রাঞ্চ ডিরেক্টরি'
  },
  en: {
    search: 'Search',
    banks: 'All Banks',
    routing: 'Routing Numbers',
    swift: 'SWIFT Codes',
    ifsc: 'IFSC Codes',
    bik: 'BIK Codes',
    sortCode: 'Sort Codes (UK)',
    country: 'Country',
    selectCountry: 'Select Country',
    allCountries: 'All Countries',
    bangladesh: 'Bangladesh',
    india: 'India',
    russia: 'Russia',
    usa: 'United States',
    uk: 'United Kingdom (UK)',
    canada: 'Canada',
    allBanks: 'All Banks',
    allDivisions: 'All Regions / Counties',
    divisionState: 'Region / County',
    districtCity: 'City / District',
    allDistricts: 'All Cities / Districts',
    searchPlaceholder: 'Search by Bank, Branch, Sort Code, Routing Number, BIK, IFSC or SWIFT...',
    searchBtn: 'Search',
    totalBanks: 'Total Banks',
    totalBranches: 'Total Branches',
    verifiedCodes: 'Verified Codes',
    routingDecoder: 'Routing Decoder',
    bikDecoder: 'Russian BIK Decoder',
    sortCodeDecoder: 'UK Sort Code Decoder',
    reportIssue: 'Report an Issue',
    filterBy: 'Filter By',
    active: 'active',
    reset: 'Reset',
    headOffice: 'Head Office',
    established: 'Established',
    branchCount: 'Branches',
    type: 'Type',
    viewDetails: 'View Details',
    copy: 'Copy',
    copied: 'Copied!',
    share: 'Share',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    disclaimer: 'Disclaimer',
    quickSearch: 'Quick Search',
    popularBanks: 'Popular Banks',
    tagline: 'The Open Global Directory for Bank Routing Numbers, Russian BIK Codes, IFSC Codes, SWIFT Codes & Branch Information.',
    footerDesc: 'The Open Global Directory for Bank Routing Numbers, Russian BIK Codes, IFSC Codes, SWIFT Codes & Branch Information.',
    routingNumberTitle: 'Routing Number Directory',
    swiftCodeTitle: 'SWIFT Code Finder',
    ifscCodeTitle: 'IFSC Code Finder',
    micrCodeTitle: 'MICR Code Finder',
    bikCodeTitle: 'Russian BIK (БИК) Finder',
    howToUseRouting: 'How to use Routing, BIK & SWIFT Codes',
    bankBranchDirectory: 'Bank & Branch Directory'
  },
  hi: {
    search: 'खोजें',
    banks: 'सभी बैंक',
    routing: 'राउटिंग / MICR',
    swift: 'स्विफ्ट कोड',
    ifsc: 'IFSC कोड',
    bik: 'BIK कोड',
    sortCode: 'सॉर्ट कोड (UK)',
    country: 'देश',
    selectCountry: 'देश चुनें',
    allCountries: 'सभी देश',
    bangladesh: 'बांग्लादेश',
    india: 'भारत (India)',
    russia: 'रूस (Russia)',
    usa: 'संयुक्त राज्य अमेरिका (USA)',
    uk: 'यूनाइटेड किंगडम (UK)',
    canada: 'कनाडा (Canada)',
    allBanks: 'सभी बैंक',
    allDivisions: 'सभी राज्य / क्षेत्र',
    divisionState: 'राज्य / क्षेत्र',
    districtCity: 'ज़िला / शहर',
    allDistricts: 'सभी ज़िले / शहर',
    searchPlaceholder: 'बैंक का नाम, शाखा, Sort Code, BIK, IFSC कोड, MICR या स्विफ्ट कोड से खोजें...',
    searchBtn: 'खोजें',
    totalBanks: 'कुल बैंक',
    totalBranches: 'कुल शाखाएँ',
    verifiedCodes: 'सत्यापित कोड्स',
    routingDecoder: 'राउटिंग डिकोडर',
    bikDecoder: 'रूसी BIK डिकोडर',
    sortCodeDecoder: 'UK सॉर्ट कोड डिकोडर',
    reportIssue: 'क्या जानकारी गलत है? बताएं',
    filterBy: 'फ़िल्टर करें',
    active: 'सक्रिय',
    reset: 'रीसेट',
    headOffice: 'प्रधान कार्यालय',
    established: 'स्थापना',
    branchCount: 'कुल शाखाएँ',
    type: 'प्रकार',
    viewDetails: 'विवरण देखें',
    copy: 'कॉपी',
    copied: 'कॉपी हो गया!',
    share: 'शेयर',
    address: 'पता',
    phone: 'फ़ोन',
    email: 'ईमेल',
    aboutUs: 'हमारे बारे में',
    contactUs: 'संपर्क करें',
    privacyPolicy: 'गोपनीयता नीति',
    disclaimer: 'अस्वीकरण',
    quickSearch: 'त्वरित खोज',
    popularBanks: 'प्रमुख बैंक',
    tagline: 'बैंकों के Sort Code, IFSC कोड, रूसी BIK, MICR, Routing Number, SWIFT कोड और शाखा विवरण खोजने की खुली ग्लोबल डायरेक्टरी।',
    footerDesc: 'बैंकों के Sort Code, IFSC कोड, रूसी BIK, MICR, Routing Number, SWIFT कोड और शाखा विवरण खोजने की खुली ग्लोबल डायरेक्टरी।',
    routingNumberTitle: 'राउटिंग व MICR डायरेक्टरी',
    swiftCodeTitle: 'स्विफ्ट (SWIFT) कोड खोजक',
    ifscCodeTitle: 'IFSC कोड फाइंडर',
    micrCodeTitle: 'MICR कोड फाइंडर',
    bikCodeTitle: 'रूसी BIK (БИК) कोड खोजक',
    howToUseRouting: 'IFSC, BIK एवं स्विफ्ट कोड उपयोग गाइड',
    bankBranchDirectory: 'बैंक एवं शाखा निर्देशिका'
  },
  ru: {
    search: 'Поиск',
    banks: 'Все банки',
    routing: 'БИК и Маршрутизация',
    swift: 'SWIFT коды',
    ifsc: 'IFSC / Международные',
    bik: 'БИК коды',
    sortCode: 'Sort Code (UK)',
    country: 'Страна',
    selectCountry: 'Выберите страну',
    allCountries: 'Все страны',
    bangladesh: 'Бангладеш',
    india: 'Индия',
    russia: 'Россия (РФ)',
    usa: 'США (USA)',
    uk: 'Великобритания (UK)',
    canada: 'Канада (Canada)',
    allBanks: 'Все банки',
    allDivisions: 'Все федеральные округа / регионы',
    divisionState: 'Федеральный округ / Графство',
    districtCity: 'Город / Субъект РФ',
    allDistricts: 'Все города / Регионы',
    searchPlaceholder: 'Поиск по названию банка, Sort Code, отделению, БИК, корр. счету или SWIFT...',
    searchBtn: 'Найти',
    totalBanks: 'Всего банков',
    totalBranches: 'Всего отделений',
    verifiedCodes: 'Проверенные реквизиты',
    routingDecoder: 'Декодер маршрутизации',
    bikDecoder: 'Декодер БИК Банка России',
    sortCodeDecoder: 'Декодер Sort Code Великобритании',
    reportIssue: 'Сообщить о неточности',
    filterBy: 'Фильтр',
    active: 'действующий',
    reset: 'Сбросить',
    headOffice: 'Головной офис',
    established: 'Основан',
    branchCount: 'Отделений',
    type: 'Тип лицензии',
    viewDetails: 'Подробнее',
    copy: 'Копировать',
    copied: 'Скопировано!',
    share: 'Поделиться',
    address: 'Адрес',
    phone: 'Телефон',
    email: 'Эл. почта',
    aboutUs: 'О сервисе',
    contactUs: 'Контакты',
    privacyPolicy: 'Политика конфиденциальности',
    disclaimer: 'Отказ от ответственности',
    quickSearch: 'Быстрый поиск',
    popularBanks: 'Крупнейшие банки',
    tagline: 'Открытый справочник банковских реквизитов: UK Sort Codes, БИК, корр. счета, SWIFT коды, отделения и филиалы.',
    footerDesc: 'Открытый справочник банковских реквизитов: UK Sort Codes, БИК, корр. счета, SWIFT коды, отделения и филиалы банков РФ и мира.',
    routingNumberTitle: 'Справочник БИК и маршрутизации',
    swiftCodeTitle: 'Поиск SWIFT кодов',
    ifscCodeTitle: 'Поиск международных кодов',
    micrCodeTitle: 'Поиск MICR кодов',
    bikCodeTitle: 'Справочник БИК (Банковские Идентификационные Коды)',
    howToUseRouting: 'Инструкция по использованию БИК и SWIFT',
    bankBranchDirectory: 'Каталог банков и отделений'
  }
};


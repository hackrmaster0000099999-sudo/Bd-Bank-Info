import { Language } from '../types';

export interface TranslationDict {
  search: string;
  banks: string;
  routing: string;
  swift: string;
  ifsc: string;
  bik: string;
  blz?: string;
  blzCode?: string;
  sortCode?: string;
  bsb?: string;
  bsbCode?: string;
  country: string;
  selectCountry: string;
  allCountries: string;
  bangladesh: string;
  india: string;
  russia: string;
  usa: string;
  uk: string;
  canada: string;
  australia: string;
  uae: string;
  singapore: string;
  germany: string;
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
  blzDecoder?: string;
  sortCodeDecoder?: string;
  bsbDecoder?: string;
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
    blz: 'বিএলজেড (BLZ)',
    blzCode: 'জার্মান BLZ ও IBAN কোড',
    sortCode: 'সর্ট কোড (Sort Code)',
    bsb: 'বিএসবি (BSB)',
    bsbCode: 'অস্ট্রেলিয়ান বিএসবি কোড (BSB)',
    country: 'দেশ',
    selectCountry: 'দেশ নির্বাচন করুন',
    allCountries: 'সকল দেশ',
    bangladesh: 'বাংলাদেশ',
    india: 'ভারত',
    russia: 'রাশিয়া (Russia)',
    usa: 'যুক্তরাষ্ট্র (USA)',
    uk: 'যুক্তরাজ্য (UK)',
    canada: 'কানাডা (Canada)',
    australia: 'অস্ট্রেলিয়া (Australia)',
    uae: 'সংযুক্ত আরব আমিরাত (UAE)',
    singapore: 'সিঙ্গাপুর (Singapore)',
    germany: 'জার্মানি (Germany)',
    allBanks: 'সকল ব্যাংক',
    allDivisions: 'সকল বিভাগ / প্রদেশ / স্টেট',
    divisionState: 'বিভাগ / প্রদেশ / স্টেট',
    districtCity: 'জেলা / শহর',
    allDistricts: 'সকল জেলা / শহর',
    searchPlaceholder: 'ব্যাংক, শাখা, বিএসবি (BSB), BLZ, সর্ট কোড, রাউটিং নম্বর, BIK, IFSC বা সুইফট কোড দিয়ে খুঁজুন...',
    searchBtn: 'খুঁজুন',
    totalBanks: 'মোট ব্যাংক',
    totalBranches: 'মোট ব্রাঞ্চ',
    verifiedCodes: 'যাচাইকৃত কোড',
    routingDecoder: 'রাউটিং ডিকোডার',
    bikDecoder: 'রাশিয়ান BIK ডিকোডার',
    blzDecoder: 'জার্মান BLZ ও IBAN ডিকোডার',
    sortCodeDecoder: 'UK সর্ট কোড ডিকোডার',
    bsbDecoder: 'অস্ট্রেলিয়ান BSB ডিকোডার',
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
    tagline: 'ব্যাংক সমূহের German BLZ, Routing Number, Australian BSB, BIK Code, IFSC Code, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।',
    footerDesc: 'ব্যাংক সমূহের German BLZ, Routing Number, Australian BSB, BIK Code, IFSC Code, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।',
    routingNumberTitle: 'রাউটিং নম্বর ডিরেক্টরি',
    swiftCodeTitle: 'সুইফট কোড ফাইন্ডার',
    ifscCodeTitle: 'IFSC কোড ফাইন্ডার',
    micrCodeTitle: 'MICR কোড ফাইন্ডার',
    bikCodeTitle: 'রাশিয়ান BIK (БИК) কোড ফাইন্ডার',
    howToUseRouting: 'রাউটিং, BLZ, BSB, BIK ও সুইফট কোড ব্যবহারের নিয়মাবলী',
    bankBranchDirectory: 'ব্যাংক ও ব্রাঞ্চ ডিরেক্টরি'
  },
  en: {
    search: 'Search',
    banks: 'All Banks',
    routing: 'Routing Numbers',
    swift: 'SWIFT Codes',
    ifsc: 'IFSC Codes',
    bik: 'BIK Codes',
    blz: 'BLZ (Germany)',
    blzCode: 'German BLZ & IBAN',
    sortCode: 'Sort Codes (UK)',
    bsb: 'BSB Codes (Australia)',
    bsbCode: 'Australian BSB Code',
    country: 'Country',
    selectCountry: 'Select Country',
    allCountries: 'All Countries',
    bangladesh: 'Bangladesh',
    india: 'India',
    russia: 'Russia',
    usa: 'United States',
    uk: 'United Kingdom (UK)',
    canada: 'Canada',
    australia: 'Australia',
    uae: 'United Arab Emirates (UAE)',
    singapore: 'Singapore',
    germany: 'Germany',
    allBanks: 'All Banks',
    allDivisions: 'All States / Provinces / Regions',
    divisionState: 'State / Province / Region',
    districtCity: 'City / District / LGA',
    allDistricts: 'All Cities / Districts',
    searchPlaceholder: 'Search by Bank, Branch, BLZ, BSB, Sort Code, Routing Number, BIK, IFSC or SWIFT...',
    searchBtn: 'Search',
    totalBanks: 'Total Banks',
    totalBranches: 'Total Branches',
    verifiedCodes: 'Verified Codes',
    routingDecoder: 'Routing Decoder',
    bikDecoder: 'Russian BIK Decoder',
    blzDecoder: 'German BLZ & IBAN Decoder',
    sortCodeDecoder: 'UK Sort Code Decoder',
    bsbDecoder: 'Australian BSB Decoder',
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
    tagline: 'The Open Global Directory for German BLZ, Australian BSB Codes, Bank Routing Numbers, Russian BIK, IFSC, SWIFT & Branch Information.',
    footerDesc: 'The Open Global Directory for German BLZ, Australian BSB Codes, Bank Routing Numbers, Russian BIK, IFSC, SWIFT & Branch Information.',
    routingNumberTitle: 'Routing Number Directory',
    swiftCodeTitle: 'SWIFT Code Finder',
    ifscCodeTitle: 'IFSC Code Finder',
    micrCodeTitle: 'MICR Code Finder',
    bikCodeTitle: 'Russian BIK (БИК) Finder',
    howToUseRouting: 'How to use BLZ, BSB, Routing, BIK & SWIFT Codes',
    bankBranchDirectory: 'Bank & Branch Directory'
  },
  hi: {
    search: 'खोजें',
    banks: 'सभी बैंक',
    routing: 'राउटिंग / BSB / MICR',
    swift: 'स्विफ्ट कोड',
    ifsc: 'IFSC कोड',
    bik: 'BIK कोड',
    blz: 'BLZ (जर्मनी)',
    blzCode: 'जर्मन BLZ व IBAN',
    sortCode: 'सॉर्ट कोड (UK)',
    bsb: 'बीएसबी कोड (ऑस्ट्रेलिया)',
    bsbCode: 'ऑस्ट्रेलियाई BSB कोड',
    country: 'देश',
    selectCountry: 'देश चुनें',
    allCountries: 'सभी देश',
    bangladesh: 'बांग्लादेश',
    india: 'भारत (India)',
    russia: 'रूस (Russia)',
    usa: 'संयुक्त राज्य अमेरिका (USA)',
    uk: 'यूनाइटेड किंगडम (UK)',
    canada: 'कनाडा (Canada)',
    australia: 'ऑस्ट्रेलिया (Australia)',
    uae: 'संयुक्त अरब अमीरात (UAE)',
    singapore: 'सिंगापुर (Singapore)',
    germany: 'जर्मनी (Germany)',
    allBanks: 'सभी बैंक',
    allDivisions: 'सभी राज्य / प्रांत / क्षेत्र',
    divisionState: 'राज्य / प्रांत / क्षेत्र',
    districtCity: 'ज़िला / शहर',
    allDistricts: 'सभी ज़िले / शहर',
    searchPlaceholder: 'बैंक का नाम, शाखा, BLZ, BSB, Sort Code, BIK, IFSC कोड, MICR या स्विफ्ट कोड से खोजें...',
    searchBtn: 'खोजें',
    totalBanks: 'कुल बैंक',
    totalBranches: 'कुल शाखाएँ',
    verifiedCodes: 'सत्यापित कोड्स',
    routingDecoder: 'राउटिंग डिकोडर',
    bikDecoder: 'रूसी BIK डिकोडर',
    blzDecoder: 'जर्मन BLZ व IBAN डिकोडर',
    sortCodeDecoder: 'UK सॉर्ट कोड डिकोडर',
    bsbDecoder: 'ऑस्ट्रेलियाई BSB डिकोडर',
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
    tagline: 'बैंकों के German BLZ, Australian BSB, Sort Code, IFSC कोड, रूसी BIK, MICR, Routing Number, SWIFT कोड और शाखा विवरण खोजने की खुली ग्लोबल डायरेक्टरी।',
    footerDesc: 'बैंकों के German BLZ, Australian BSB, Sort Code, IFSC कोड, रूसी BIK, MICR, Routing Number, SWIFT कोड और शाखा विवरण खोजने की खुली ग्लोबल डायरेक्टरी।',
    routingNumberTitle: 'राउटिंग व BSB डायरेक्टरी',
    swiftCodeTitle: 'स्विफ्ट (SWIFT) कोड खोजक',
    ifscCodeTitle: 'IFSC कोड फाइंडर',
    micrCodeTitle: 'MICR कोड फाइंडर',
    bikCodeTitle: 'रूसी BIK (БИК) कोड खोजक',
    howToUseRouting: 'BLZ, BSB, IFSC, BIK एवं स्विफ्ट कोड उपयोग गाइड',
    bankBranchDirectory: 'बैंक एवं शाखा निर्देशिका'
  },
  ru: {
    search: 'Поиск',
    banks: 'Все банки',
    routing: 'БИК и Маршрутизация',
    swift: 'SWIFT коды',
    ifsc: 'IFSC / Международные',
    bik: 'БИК коды',
    blz: 'BLZ (Германия)',
    blzCode: 'BLZ и IBAN Германии',
    sortCode: 'Sort Code (UK)',
    bsb: 'BSB коды (Австралия)',
    bsbCode: 'Австралийский BSB код',
    country: 'Страна',
    selectCountry: 'Выберите страну',
    allCountries: 'Все страны',
    bangladesh: 'Бангладеш',
    india: 'Индия',
    russia: 'Россия (РФ)',
    usa: 'США (USA)',
    uk: 'Великобритания (UK)',
    canada: 'Канада (Canada)',
    australia: 'Австралия (Australia)',
    uae: 'ОАЭ (UAE / Эмираты)',
    singapore: 'Сингапур (Singapore)',
    germany: 'Германия (Germany)',
    allBanks: 'Все банки',
    allDivisions: 'Все штаты / округа / провинции',
    divisionState: 'Штат / Провинция / Округ',
    districtCity: 'Город / Район',
    allDistricts: 'Все города / Регионы',
    searchPlaceholder: 'Поиск по названию банка, BLZ, BSB, Sort Code, отделению, БИК, корр. счету или SWIFT...',
    searchBtn: 'Найти',
    totalBanks: 'Всего банков',
    totalBranches: 'Всего отделений',
    verifiedCodes: 'Проверенные реквизиты',
    routingDecoder: 'Декодер маршрутизации',
    bikDecoder: 'Декодер БИК Банка России',
    blzDecoder: 'Декодер BLZ и IBAN Германии',
    sortCodeDecoder: 'Декодер Sort Code Великобритании',
    bsbDecoder: 'Декодер BSB кодов Австралии',
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
    tagline: 'Открытый справочник банковских реквизитов: BLZ (Германия), Australian BSB, UK Sort Codes, БИК, корр. счета, SWIFT коды, отделения и филиалы.',
    footerDesc: 'Открытый справочник банковских реквизитов: BLZ (Германия), Australian BSB, UK Sort Codes, БИК, корр. счета, SWIFT коды, отделения и филиалы банков Германии, Австралии, РФ и мира.',
    routingNumberTitle: 'Справочник BSB, БИК и маршрутизации',
    swiftCodeTitle: 'Поиск SWIFT кодов',
    ifscCodeTitle: 'Поиск международных кодов',
    micrCodeTitle: 'Поиск MICR кодов',
    bikCodeTitle: 'Справочник БИК (Банковские Идентификационные Коды)',
    howToUseRouting: 'Инструкция по использованию BLZ, BSB, БИК и SWIFT',
    bankBranchDirectory: 'Каталог банков и отделений'
  },
  de: {
    search: 'Suchen',
    banks: 'Alle Banken',
    routing: 'Bankleitzahlen (BLZ)',
    swift: 'SWIFT / BIC Codes',
    ifsc: 'IFSC Codes',
    bik: 'BIK Codes',
    blz: 'BLZ (Deutschland)',
    blzCode: 'Deutsche BLZ & IBAN',
    sortCode: 'Sort Codes (UK)',
    bsb: 'BSB Codes (Australien)',
    bsbCode: 'Australischer BSB-Code',
    country: 'Land',
    selectCountry: 'Land auswählen',
    allCountries: 'Alle Länder',
    bangladesh: 'Bangladesch',
    india: 'Indien',
    russia: 'Russland',
    usa: 'Vereinigte Staaten (USA)',
    uk: 'Vereinigtes Königreich (UK)',
    canada: 'Kanada',
    australia: 'Australien',
    uae: 'Vereinigte Arabische Emirate (VAE)',
    singapore: 'Singapur',
    germany: 'Deutschland (Germany)',
    allBanks: 'Alle Banken',
    allDivisions: 'Alle 16 Bundesländer',
    divisionState: 'Bundesland',
    districtCity: 'Stadt / Landkreis',
    allDistricts: 'Alle Städte / Landkreise',
    searchPlaceholder: 'Bank, Filiale, 8-stellige BLZ, IBAN, SWIFT / BIC, Sort Code oder Ort suchen...',
    searchBtn: 'Suchen',
    totalBanks: 'Banken gesamt',
    totalBranches: 'Filialen gesamt',
    verifiedCodes: 'Verifizierte Codes',
    routingDecoder: 'Routing Decoder',
    bikDecoder: 'Russischer BIK Decoder',
    blzDecoder: 'Bundesbank BLZ & IBAN Decoder',
    sortCodeDecoder: 'UK Sort Code Decoder',
    bsbDecoder: 'Australischer BSB Decoder',
    reportIssue: 'Fehler melden',
    filterBy: 'Filtern nach',
    active: 'aktiv',
    reset: 'Zurücksetzen',
    headOffice: 'Hauptsitz',
    established: 'Gegründet',
    branchCount: 'Filialen',
    type: 'Banktyp',
    viewDetails: 'Details ansehen',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    share: 'Teilen',
    address: 'Adresse',
    phone: 'Telefon',
    email: 'E-Mail',
    aboutUs: 'Über uns',
    contactUs: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    disclaimer: 'Haftungsausschluss',
    quickSearch: 'Schnellsuche',
    popularBanks: 'Beliebte Banken',
    tagline: 'Das offizielle Verzeichnis für deutsche Bankleitzahlen (BLZ), IBAN, SWIFT/BIC, US ABA, UK Sort Codes und weltweite Bankleitsysteme.',
    footerDesc: 'Das offizielle Verzeichnis für deutsche Bankleitzahlen (BLZ), IBAN, SWIFT/BIC, US ABA, UK Sort Codes und weltweite Bankleitsysteme. Verifiziert durch die Deutsche Bundesbank und Zentralbanken 2026.',
    routingNumberTitle: 'BLZ & Routing-Verzeichnis',
    swiftCodeTitle: 'SWIFT / BIC Finder',
    ifscCodeTitle: 'IFSC Code Finder',
    micrCodeTitle: 'MICR Code Finder',
    bikCodeTitle: 'Russischer BIK Finder',
    howToUseRouting: 'Anleitung: BLZ, IBAN, BSB & SWIFT verwenden',
    bankBranchDirectory: 'Bank- und Filialverzeichnis'
  }
};

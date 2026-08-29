import { Language } from '../types';

export interface TranslationDict {
  search: string;
  banks: string;
  routing: string;
  swift: string;
  ifsc: string;
  country: string;
  selectCountry: string;
  allCountries: string;
  bangladesh: string;
  india: string;
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
    country: 'দেশ',
    selectCountry: 'দেশ নির্বাচন করুন',
    allCountries: 'সকল দেশ',
    bangladesh: 'বাংলাদেশ',
    india: 'ভারত',
    allBanks: 'সকল ব্যাংক',
    allDivisions: 'সকল বিভাগ / রাজ্য',
    divisionState: 'বিভাগ / রাজ্য',
    districtCity: 'জেলা / শহর',
    allDistricts: 'সকল জেলা',
    searchPlaceholder: 'ব্যাংক, শাখা, রাউটিং নম্বর, IFSC বা সুইফট কোড দিয়ে খুঁজুন...',
    searchBtn: 'খুঁজুন',
    totalBanks: 'মোট ব্যাংক',
    totalBranches: 'মোট ব্রাঞ্চ',
    verifiedCodes: 'যাচাইকৃত কোড',
    routingDecoder: 'রাউটিং ডিকোডার',
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
    tagline: 'ব্যাংক সমূহের Routing Number, IFSC Code, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।',
    footerDesc: 'ব্যাংক সমূহের Routing Number, IFSC Code, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।',
    routingNumberTitle: 'রাউটিং নম্বর ডিরেক্টরি',
    swiftCodeTitle: 'সুইফট কোড ফাইন্ডার',
    ifscCodeTitle: 'IFSC কোড ফাইন্ডার',
    micrCodeTitle: 'MICR কোড ফাইন্ডার',
    howToUseRouting: 'রাউটিং ও সুইফট কোড ব্যবহারের নিয়মাবলী',
    bankBranchDirectory: 'ব্যাংক ও ব্রাঞ্চ ডিরেক্টরি'
  },
  en: {
    search: 'Search',
    banks: 'All Banks',
    routing: 'Routing Numbers',
    swift: 'SWIFT Codes',
    ifsc: 'IFSC Codes',
    country: 'Country',
    selectCountry: 'Select Country',
    allCountries: 'All Countries',
    bangladesh: 'Bangladesh',
    india: 'India',
    allBanks: 'All Banks',
    allDivisions: 'All Divisions / States',
    divisionState: 'Division / State',
    districtCity: 'District / City',
    allDistricts: 'All Districts',
    searchPlaceholder: 'Search by Bank, Branch, Routing Number, IFSC or SWIFT Code...',
    searchBtn: 'Search',
    totalBanks: 'Total Banks',
    totalBranches: 'Total Branches',
    verifiedCodes: 'Verified Codes',
    routingDecoder: 'Routing Decoder',
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
    tagline: 'The Open Global Directory for Bank Routing Numbers, IFSC Codes, SWIFT / BIC Codes & Branch Information.',
    footerDesc: 'The Open Global Directory for Bank Routing Numbers, IFSC Codes, SWIFT / BIC Codes & Branch Information.',
    routingNumberTitle: 'Routing Number Directory',
    swiftCodeTitle: 'SWIFT Code Finder',
    ifscCodeTitle: 'IFSC Code Finder',
    micrCodeTitle: 'MICR Code Finder',
    howToUseRouting: 'How to use Routing & SWIFT Codes',
    bankBranchDirectory: 'Bank & Branch Directory'
  },
  hi: {
    search: 'खोजें',
    banks: 'सभी बैंक',
    routing: 'राउटिंग / MICR',
    swift: 'स्विफ्ट कोड',
    ifsc: 'IFSC कोड',
    country: 'देश',
    selectCountry: 'देश चुनें',
    allCountries: 'सभी देश',
    bangladesh: 'बांग्लादेश',
    india: 'भारत (India)',
    allBanks: 'सभी बैंक',
    allDivisions: 'सभी राज्य (States)',
    divisionState: 'राज्य (State)',
    districtCity: 'ज़िला / शहर',
    allDistricts: 'सभी ज़िले (Districts)',
    searchPlaceholder: 'बैंक का नाम, शाखा, IFSC कोड, MICR या स्विफ्ट कोड से खोजें...',
    searchBtn: 'खोजें',
    totalBanks: 'कुल बैंक',
    totalBranches: 'कुल शाखाएँ',
    verifiedCodes: 'सत्यापित कोड्स',
    routingDecoder: 'राउटिंग डिकोडर',
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
    tagline: 'बैंकों के IFSC कोड, MICR, Routing Number, SWIFT कोड और शाखा विवरण खोजने की खुली ग्लोबल डायरेक्टरी।',
    footerDesc: 'बैंकों के IFSC कोड, MICR, Routing Number, SWIFT कोड और शाखा विवरण खोजने की खुली ग्लोबल डायरेक्टरी।',
    routingNumberTitle: 'राउटिंग व MICR डायरेक्टरी',
    swiftCodeTitle: 'स्विफ्ट (SWIFT) कोड खोजक',
    ifscCodeTitle: 'IFSC कोड फाइंडर',
    micrCodeTitle: 'MICR कोड फाइंडर',
    howToUseRouting: 'IFSC एवं स्विफ्ट कोड उपयोग गाइड',
    bankBranchDirectory: 'बैंक एवं शाखा निर्देशिका'
  }
};

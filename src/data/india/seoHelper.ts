import { Bank, Branch, Language } from '../../types';

export function getIndiaBankMetaTitle(bank: Bank, lang: Language = 'en'): string {
  const isHi = lang === 'hi';
  const isBn = lang === 'bn';
  const name = isHi ? (bank.name_hi || bank.name) : isBn ? (bank.name_bn || bank.name) : bank.name;
  
  if (isHi) {
    return `${name} (${bank.short_name}) सभी शाखाओं के IFSC कोड, MICR एवं स्विफ्ट कोड (2026 अपडेटेड) | World Bank Codes`;
  }
  if (isBn) {
    return `${name} (${bank.short_name}) এর সকল শাখার IFSC কোড, MICR ও সুইফট কোড (২০২৬ আপডেট) | World Bank Codes`;
  }
  return `${name} (${bank.short_name}) All Branches IFSC Codes, MICR & SWIFT Directory 2026 | World Bank Codes`;
}

export function getIndiaBankMetaDescription(bank: Bank, lang: Language = 'en'): string {
  const isHi = lang === 'hi';
  const isBn = lang === 'bn';
  
  if (isHi) {
    return `भारत में ${bank.name} की सभी शाखाओं के आधिकारिक IFSC कोड, MICR, स्विफ्ट कोड एवं पते की पूरी सूची। NEFT, RTGS, IMPS और वायर ट्रांसफर के लिए सत्यापित।`;
  }
  if (isBn) {
    return `ভারতে ${bank.name}-এর সকল শাখার অফিশিয়াল IFSC কোড, MICR, সুইফট কোড ও ঠিকানার পূর্ণাঙ্গ তালিকা। NEFT, RTGS এবং আন্তর্জাতিক মানি ট্রান্সফারের জন্য হালনাগাদ।`;
  }
  return `Explore verified IFSC codes, MICR codes, SWIFT codes, and branch addresses for ${bank.name} across all Indian states and union territories. Updated for 2026 transactions.`;
}

export function getIndiaBranchMetaTitle(branch: Branch, lang: Language = 'en'): string {
  const isHi = lang === 'hi';
  const isBn = lang === 'bn';
  const bName = isHi ? (branch.name_hi || branch.name) : isBn ? (branch.name_bn || branch.name) : branch.name;
  const bankTitle = isHi ? (branch.bank_name_hi || branch.bank_name) : isBn ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
  
  if (isHi) {
    return `${branch.ifsc_code} - ${bankTitle} (${bName}) IFSC कोड, MICR ও राउटिंग नंबर (2026)`;
  }
  if (isBn) {
    return `${branch.ifsc_code} - ${bankTitle} (${bName}) IFSC কোড, MICR ও রাউটিং নাম্বার (২০২৬)`;
  }
  return `${branch.ifsc_code} - ${bankTitle} IFSC Code, MICR & Routing Number | ${bName}`;
}

export function getIndiaBranchMetaDescription(branch: Branch, lang: Language = 'en'): string {
  const isHi = lang === 'hi';
  const isBn = lang === 'bn';
  
  if (isHi) {
    return `भारत में ${branch.bank_name} (${branch.name}) के लिए 11-अक्षरीय IFSC कोड: ${branch.ifsc_code}, 9-अंकीय MICR / राउटिंग नंबर: ${branch.micr_code || branch.routing_number}, स्विफ्ट कोड ${branch.swift_code || 'HO'}, पता और फोन।`;
  }
  if (isBn) {
    return `${branch.bank_name}, ${branch.name} শাখার অফিশিয়াল IFSC কোড: ${branch.ifsc_code}, ৯-সংখ্যার MICR / রাউটিং কোড: ${branch.micr_code || branch.routing_number}, সুইফট ও ঠিকানা (${branch.district}, ${branch.division}, ভারত)।`;
  }
  return `Official 11-character IFSC Code ${branch.ifsc_code}, 9-digit MICR / routing number ${branch.micr_code || branch.routing_number}, and SWIFT code ${branch.swift_code || 'Head Office'} for ${branch.bank_name} (${branch.name}) in ${branch.district}, ${branch.division}, India. Verified for NEFT, RTGS, IMPS, and wire transfers.`;
}

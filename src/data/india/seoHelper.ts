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
  
  return `${bankTitle} (${bName}) IFSC Code: ${branch.ifsc_code} & MICR: ${branch.micr_code || branch.routing_number} | World Bank Codes`;
}

export function getIndiaBranchMetaDescription(branch: Branch, lang: Language = 'en'): string {
  const isHi = lang === 'hi';
  const isBn = lang === 'bn';
  
  if (isHi) {
    return `${branch.bank_name}, ${branch.name}, ${branch.district}, ${branch.division} के लिए सत्यापित IFSC कोड: ${branch.ifsc_code}, MICR: ${branch.micr_code || branch.routing_number}, स्विफ्ट: ${branch.swift_code || 'HO'} और पूरा पता।`;
  }
  if (isBn) {
    return `${branch.bank_name}, ${branch.name} শাখার অফিশিয়াল IFSC কোড: ${branch.ifsc_code}, MICR: ${branch.micr_code || branch.routing_number}, সুইফট ও সম্পূর্ণ ঠিকানা (${branch.district}, ${branch.division}, ভারত)।`;
  }
  return `Get verified Indian banking details: IFSC Code ${branch.ifsc_code}, MICR ${branch.micr_code || branch.routing_number}, SWIFT ${branch.swift_code || 'N/A'}, Phone & Address for ${branch.bank_name} (${branch.name}), ${branch.district}, ${branch.division}, India.`;
}

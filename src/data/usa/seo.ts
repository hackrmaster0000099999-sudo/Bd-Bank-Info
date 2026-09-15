import { Bank, Branch, Language } from '../../types';

export function getUsaBankMetaTitle(bank: Bank, lang: Language): string {
  const bankName = lang === 'bn' ? (bank.name_bn || bank.name) : bank.name;
  if (lang === 'bn') {
    return `${bankName} (${bank.short_name}) ABA রাউটিং নম্বর, ACH ও সুইফট কোড ২০২৬ | World Bank Codes`;
  }
  return `${bank.name} (${bank.short_name}) ABA Routing Numbers, ACH & SWIFT Code 2026 | World Bank Codes`;
}

export function getUsaBankMetaDescription(bank: Bank, lang: Language): string {
  const bankName = lang === 'bn' ? (bank.name_bn || bank.name) : bank.name;
  if (lang === 'bn') {
    return `${bankName}-এর অফিসিয়াল ৯-ডিজিটের ABA রাউটিং নম্বর (${bank.routing_number || 'সকল শাখা'}), ডিরেক্ট ডিপোজিট ACH কোড, ওয়্যার ট্রান্সফার, FDIC #${bank.fdic_cert || ''}, এবং সুইফট কোড ${bank.swift_code} খুঁজুন।`;
  }
  return `Lookup official 9-digit ABA Routing Numbers for ${bank.name} (${bank.short_name}), ACH direct deposit transit codes, Fedwire numbers, FDIC Cert #${bank.fdic_cert || 'N/A'}, and SWIFT code ${bank.swift_code}.`;
}

export function getUsaBranchMetaTitle(branch: Branch, lang: Language): string {
  const bankName = lang === 'bn' ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
  const branchName = lang === 'bn' ? (branch.name_bn || branch.name) : branch.name;
  const routing = branch.routing_number;
  if (lang === 'bn') {
    return `${routing} - ${bankName} ABA রাউটিং নম্বর | ${branchName}, ${branch.division}`;
  }
  if (lang === 'hi') {
    return `${routing} - ${bankName} ABA राउटिंग नंबर | ${branchName}, ${branch.division}`;
  }
  if (lang === 'ru') {
    return `${routing} - ${bankName} Маршрутный номер ABA | ${branchName}, ${branch.division}`;
  }
  return `${routing} - ${branch.bank_name} ABA Routing Number & Wire Info | ${branch.name}, ${branch.district}, ${branch.division}`;
}

export function getUsaBranchMetaDescription(branch: Branch, lang: Language): string {
  const routing = branch.routing_number;
  if (lang === 'bn') {
    return `${routing} হলো ${branch.bank_name}-এর ${branch.name} শাখার ৯-সংখ্যার অফিসিয়াল ABA রাউটিং নম্বর (ACH ও Fedwire)। ঠিকানা: ${branch.address}, ফোন ও সুইফট কোড ${branch.swift_code || ''}।`;
  }
  return `Official 9-digit ABA Routing Number ${routing} for ${branch.bank_name} (${branch.name}) in ${branch.district}, ${branch.division}. Verified for direct deposit (ACH), electronic payments, wire transfers, address: ${branch.address}, ZIP ${branch.zip_code || ''}, and SWIFT: ${branch.swift_code || 'Head Office'}.`;
}

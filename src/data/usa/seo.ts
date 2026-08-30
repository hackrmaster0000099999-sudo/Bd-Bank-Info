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
  if (lang === 'bn') {
    return `${branchName} - ${bankName} ABA রাউটিং ${branch.routing_number}, ঠিকানা ও সুইফট | ${branch.division}`;
  }
  return `${branch.name} - ${branch.bank_name} ABA Routing Number ${branch.routing_number}, Address & SWIFT | ${branch.district}, ${branch.division}`;
}

export function getUsaBranchMetaDescription(branch: Branch, lang: Language): string {
  if (lang === 'bn') {
    return `${branch.bank_name}-এর ${branch.name} (${branch.district}, ${branch.division})-এর ৯-ডিজিটের ABA রাউটিং নম্বর ${branch.routing_number}, ঠিকানা: ${branch.address}, ফোন ও সুইফট কোড ${branch.swift_code || ''}।`;
  }
  return `Full routing information for ${branch.bank_name} - ${branch.name} in ${branch.district}, ${branch.division}. ABA Routing Transit Number: ${branch.routing_number}, Address: ${branch.address}, Zip: ${branch.zip_code || ''}, SWIFT: ${branch.swift_code || 'Head Office'}.`;
}

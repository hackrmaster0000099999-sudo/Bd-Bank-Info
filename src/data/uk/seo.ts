import { Bank, Branch, Language } from '../../types';

export function getUkBankMetaTitle(bank: Bank, lang: Language): string {
  const bankName = lang === 'bn' ? (bank.name_bn || bank.name) : bank.name;
  if (lang === 'bn') {
    return `${bankName} (${bank.short_name}) সর্ট কোড, BACS, Faster Payments ও সুইফট কোড ২০২৬ | World Bank Codes`;
  }
  return `${bank.name} (${bank.short_name}) UK Sort Codes, BACS & SWIFT Code 2026 | World Bank Codes`;
}

export function getUkBankMetaDescription(bank: Bank, lang: Language): string {
  const bankName = lang === 'bn' ? (bank.name_bn || bank.name) : bank.name;
  if (lang === 'bn') {
    return `${bankName}-এর অফিসিয়াল ৬-ডিজিটের সর্ট কোড (${bank.sort_code || 'সকল শাখা'}), BACS, Faster Payments, CHAPS, FCA FRN #${bank.fca_frn || ''}, এবং সুইফট কোড ${bank.swift_code} খুঁজুন।`;
  }
  return `Find official 6-digit Sort Codes for ${bank.name} (${bank.short_name}), BACS Direct Debit, Faster Payments, CHAPS, FCA FRN #${bank.fca_frn || 'N/A'}, and SWIFT/BIC code ${bank.swift_code}.`;
}

export function getUkBranchMetaTitle(branch: Branch, lang: Language): string {
  const bankName = lang === 'bn' ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
  const branchName = lang === 'bn' ? (branch.name_bn || branch.name) : branch.name;
  if (lang === 'bn') {
    return `${branchName} - ${bankName} সর্ট কোড ${branch.sort_code || branch.routing_number}, ঠিকানা ও সুইফট | ${branch.district}, ${branch.division}`;
  }
  return `${branch.name} - ${branch.bank_name} Sort Code ${branch.sort_code || branch.routing_number}, Postcode & SWIFT | ${branch.district}, ${branch.division}`;
}

export function getUkBranchMetaDescription(branch: Branch, lang: Language): string {
  if (lang === 'bn') {
    return `${branch.bank_name}-এর ${branch.name} (${branch.district}, ${branch.division})-এর ৬-ডিজিটের সর্ট কোড ${branch.sort_code || branch.routing_number}, পোস্টকোড: ${branch.zip_code || ''}, ঠিকানা: ${branch.address}, ফোন ও সুইফট কোড ${branch.swift_code || ''}।`;
  }
  return `Full Sort Code details for ${branch.bank_name} - ${branch.name} in ${branch.district}, ${branch.division}. Sort Code: ${branch.sort_code || branch.routing_number}, Address: ${branch.address}, Postcode: ${branch.zip_code || ''}, SWIFT/BIC: ${branch.swift_code || 'Head Office'}.`;
}

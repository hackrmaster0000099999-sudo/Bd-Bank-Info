import { Bank, Branch, Language } from '../../types';

/**
 * Bangladesh SEO Engine & High-CTR Meta Generator
 * 
 * Based on Google Search high-volume keyword trends:
 * - "সব ব্যাংকের রাউটিং নম্বর" / "ব্যাংক রাউটিং নাম্বার বাংলাদেশ" / "সকল ব্যাংকের রাউটিং নাম্বার"
 * - "ইসলামী ব্যাংক রাউটিং নাম্বার" / "ইসলামী ব্যাংক বাংলাদেশ সকল শাখা"
 * - "ডাচ বাংলা ব্যাংক রাউটিং নাম্বার" / "ব্র্যাক ব্যাংক রাউটিং নাম্বার" / "সোনালী ব্যাংক রাউটিং নাম্বার"
 * - "BEFTN routing number Bangladesh" / "9-digit routing number lookup"
 * - "Bank Routing Number [Branch Name]" / "SWIFT BIC code"
 * - "[Bank Name] Branch, District, Routing Number, Phone, Address"
 */

export function getBdBranchesMetaTitle(branch: Branch, lang: Language = 'bn'): string {
  const isBn = lang === 'bn';
  const branchName = isBn ? (branch.name_bn || branch.name) : branch.name;
  const bankName = isBn ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
  const districtName = isBn ? (branch.district_bn || branch.district) : branch.district;

  if (isBn) {
    // Top-performing Google Search CTR structure in Bangladesh (৯ ডিজিটের রাউটিং নাম্বার + জেলা + শাখা)
    return `${bankName} (${branchName} শাখা) রাউটিং নাম্বার: ${branch.routing_number}, সুইফট ও ঠিকানা | ${districtName} | World Bank Codes`;
  }

  // English structure (High Google CTR matching Wise, Xe, Bank.Codes)
  return `${branch.bank_name} ${branch.name} Branch BEFTN Routing Number: ${branch.routing_number}, SWIFT & Address | ${branch.district} | World Bank Codes`;
}

export function getBdBranchesMetaDescription(branch: Branch, lang: Language = 'bn'): string {
  const isBn = lang === 'bn';
  const branchName = isBn ? (branch.name_bn || branch.name) : branch.name;
  const bankName = isBn ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
  const district = isBn ? (branch.district_bn || branch.district) : branch.district;
  const division = isBn ? (branch.division_bn || branch.division) : branch.division;

  if (isBn) {
    return `${bankName}-এর ${branchName} শাখার (${district} জেলা, ${division} বিভাগ) ৯-ডিজিটের অফিশিয়াল BEFTN রাউটিং নাম্বার ${branch.routing_number}, সুইফট কোড ${branch.swift_code || 'HO'}, ফোন/মোবাইল: ${branch.phone || 'উপলব্ধ'} এবং পূর্ণাঙ্গ ঠিকানা: ${branch.address}। বাংলাদেশ ব্যাংক অনুমোদিত ২০২৬ হালনাগাদ তালিকা।`;
  }

  return `Official Bangladesh Bank 9-digit BEFTN Routing Number: ${branch.routing_number} for ${branch.bank_name} (${branch.name} branch, ${branch.district}, ${branch.division}, Bangladesh). Complete with SWIFT/BIC: ${branch.swift_code || 'Head Office'}, Phone: ${branch.phone || 'Available'}, Branch Address: ${branch.address}. 100% verified for 2026 domestic transfers & EFT.`;
}

export function getBdBankMetaTitle(bank: Bank, lang: Language = 'bn'): string {
  const isBn = lang === 'bn';
  const name = isBn ? (bank.name_bn || bank.name) : bank.name;
  const shortName = bank.short_name ? `(${bank.short_name})` : '';

  if (isBn) {
    return `${name} ${shortName} সকল শাখার রাউটিং নাম্বার, সুইফট কোড ও ব্রাঞ্চ লিস্ট ২০২৬ | World Bank Codes`;
  }

  return `${bank.name} ${shortName} All Branches 9-Digit BEFTN Routing Numbers & SWIFT Directory 2026 | World Bank Codes`;
}

export function getBdBankMetaDescription(bank: Bank, lang: Language = 'bn'): string {
  const isBn = lang === 'bn';
  const name = isBn ? (bank.name_bn || bank.name) : bank.name;
  const branchCountText = bank.branch_count ? `${bank.branch_count}+ টি শাখার` : 'সকল শাখার';

  if (isBn) {
    return `বাংলাদেশে ${name}-এর ${branchCountText} সঠিক ৯-ডিজিটের BEFTN রাউটিং নম্বর, সুইফট (SWIFT) কোড, হেড অফিস (${bank.head_office_bn || bank.head_office}), জেলা ও শাখার ফোন নাম্বার এবং পূর্ণাঙ্গ ঠিকানা। ২০২৬ সালের জন্য বাংলাদেশ ব্যাংক অনুমোদিত শতভাগ নির্ভুল তথ্য।`;
  }

  return `Comprehensive 2026 directory for ${bank.name} in Bangladesh. Find verified 9-digit BEFTN routing numbers, SWIFT/BIC codes (${bank.swift_code || 'Available'}), head office contact, phone numbers, and complete addresses across all 64 districts.`;
}

export function getBdHomeSeo(lang: Language = 'bn') {
  const isBn = lang === 'bn';

  if (isBn) {
    return {
      title: 'বাংলাদেশের সকল ব্যাংকের রাউটিং নাম্বার, BEFTN কোড ও সুইফট ডিরেক্টরি ২০২৬ | World Bank Codes',
      description: 'ইসলামী ব্যাংক, ডাচ-বাংলা, ব্র্যাক, সোনালী ব্যাংকসহ বাংলাদেশের ৬১টি তফসিলি ব্যাংকের ১০,৯০০+ শাখার অফিশিয়াল ৯-ডিজিট BEFTN রাউটিং নাম্বার, সুইফট কোড (SWIFT/BIC), জেলা ভিত্তিক শাখা তালিকা ও পূর্ণাঙ্গ ঠিকানা। ২০২৬ সালের হালনাগাদকৃত ডাটাবেজ।'
    };
  }

  return {
    title: 'Bangladesh All Bank 9-Digit BEFTN Routing Numbers & SWIFT Directory 2026 | World Bank Codes',
    description: 'Find official 9-digit BEFTN routing numbers, SWIFT/BIC codes, branch addresses and phone numbers for all 61 commercial, Islamic and state banks in Bangladesh across 64 districts. Central bank verified 2026.'
  };
}

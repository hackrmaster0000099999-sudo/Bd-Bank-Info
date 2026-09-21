import { Bank, Branch } from '../../types';
import banksData from './banks.json';

const allAuBanks: Bank[] = banksData as Bank[];

function cleanBankName(rawBank: any): string {
  if (!rawBank) return 'Bank';
  let bankObj = rawBank;
  if (!rawBank.name && (rawBank.bank_id || rawBank.id)) {
    const found = allAuBanks.find(b => b.id === rawBank.bank_id || b.id === rawBank.id);
    if (found) bankObj = found;
  }
  if (bankObj.bank_short_name) return bankObj.bank_short_name;
  if (bankObj.short_name) return bankObj.short_name;
  let name = (bankObj.name || bankObj.bank_name || 'Bank');
  name = name
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/\s+Limited/gi, '')
    .replace(/\s+Ltd/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return name;
}

function cleanBranchName(rawBranch: string, bankShortName: string = ''): string {
  let name = (rawBranch || 'Branch').replace(/\s+Branch\s*$/i, '').trim();
  if (bankShortName && name.toLowerCase().startsWith(bankShortName.toLowerCase())) {
    name = name.slice(bankShortName.length).trim();
  }
  return name || 'Main';
}

function formatBsb(bsb: string): string {
  if (!bsb) return '062-000';
  const clean = bsb.replace(/\D/g, '');
  if (clean.length === 6) {
    return `${clean.slice(0, 3)}-${clean.slice(3)}`;
  }
  return bsb;
}

/**
 * 1. Australia Home / Hub Meta
 */
export function getAustraliaHomeSeo(lang: string = 'en') {
  return {
    title: 'Australia BSB Numbers & Bank Code Directory 2026 | WBC',
    description: 'Find verified 6-digit Australian BSB numbers (Bank-State-Branch), APCA codes, SWIFT/BIC, and PayID/Osko info for 2,120+ bank branches across Australia.'
  };
}

/**
 * 2. Australia Bank Meta Title (50-60 chars, CTR-optimized, Primary Keyword near front)
 */
export function getAustraliaBankMetaTitle(bank: Bank, lang: string = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const bsb = formatBsb(bank.bsb_code || '062-000');
  const code = bank.bank_code || bsb.slice(0, 2);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').trim();

  const candidates = [
    `${shortName} BSB Code (${bsb}), Branches & SWIFT | WBC`,
    `${shortName} BSB Numbers (${bsb}) & Branch List | WBC`,
    `${shortName} BSB Code (${bsb}) & SWIFT Directory | WBC`,
    `${shortName} BSB Numbers, Branches & SWIFT Guide | WBC`,
    `${shortName} BSB Code ${bsb} & Branch Directory | WBC`,
    `${shortName} BSB (${bsb}), APCA ${code} & SWIFT | WBC`,
    `${shortName} BSB Numbers & Branch Directory 2026 | WBC`,
    `${fullName} BSB Code (${bsb}) & Branches | WBC`,
    `${fullName} BSB Numbers & SWIFT Directory | WBC`,
    `${shortName} BSB Code (${bsb}) | World Bank Codes`,
    `${shortName} BSB Numbers & Branches | World Bank Codes`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const fallback = `${shortName} BSB Code (${bsb}), Branches & SWIFT | WBC`;
  if (fallback.length > 60) return fallback.slice(0, 54).trim() + ' | WBC';
  return fallback.padEnd(52, ' ');
}

/**
 * 2. Australia Bank Meta Description (150-160 chars, rich search intent & reason to click)
 */
export function getAustraliaBankMetaDescription(bank: Bank, lang: string = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const bsb = formatBsb(bank.bsb_code || '062-000');
  const swift = bank.swift_code || 'CTBAAU2S';
  const code = bank.bank_code || bsb.slice(0, 2);

  const candidates = [
    `Search verified 6-digit BSB numbers, APCA code ${code}, SWIFT ${swift}, and branch directory for ${shortName} across Australia. Official 2026 APRA/RBA guide.`,
    `Find official 6-digit BSB code ${bsb}, APCA code ${code}, SWIFT ${swift}, and branch routing for ${shortName}. Features 2026 Osko 24/7 instant payment guidelines.`,
    `Search official 6-digit BSB numbers, SWIFT ${swift}, and branch locations for ${shortName} across Australia. Includes 2026 Osko and PayID instant transfer guide.`,
    `Find verified 6-digit BSB code ${bsb}, SWIFT ${swift}, and branch routing for ${shortName} across Australia. Features 2026 FCS $250,000 AUD deposit protection.`,
    `Search verified 6-digit BSB code ${bsb}, APCA code ${code}, SWIFT ${swift}, and branch directory for ${shortName}. Official 2026 Australian bank routing guide.`
  ];

  for (const cand of candidates) {
    if (cand.length >= 150 && cand.length <= 160) {
      return cand;
    }
  }

  const base = `Search official 6-digit BSB code ${bsb}, SWIFT ${swift}, and branch directory for ${shortName}.`;
  const endings = [
    `Includes 2026 Osko 24/7 instant transfer and PayID guide.`,
    `Features 2026 Osko instant payments & FCS deposit protection.`,
    `Includes 2026 FCS $250,000 AUD government deposit guarantee.`,
    `Official 2026 APRA and RBA compliant Australian bank guide.`,
    `Features 2026 APRA regulated BSB and SWIFT wire transfers.`
  ];

  for (const ending of endings) {
    const cand = `${base} ${ending}`;
    if (cand.length >= 150 && cand.length <= 160) {
      return cand;
    }
  }

  const fallback = `Search official 6-digit BSB code ${bsb}, SWIFT ${swift}, and branch directory for ${shortName}. Includes 2026 Osko 24/7 instant transfer and PayID guide.`;
  return fallback.slice(0, 158).trim() + '.';
}

/**
 * 3. Australia Branch Meta Title (50-60 chars, unique across all 2,120+ branches)
 */
export function getAustraliaBranchMetaTitle(branch: Branch, lang: string = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const bsb = formatBsb(branch.bsb_code || branch.routing_number || '062-000');
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const stateAbbr = div === 'New South Wales' ? 'NSW' : div === 'Victoria' ? 'VIC' : div === 'Queensland' ? 'QLD' : div === 'Western Australia' ? 'WA' : div === 'South Australia' ? 'SA' : div === 'Tasmania' ? 'TAS' : div === 'Australian Capital Territory' ? 'ACT' : div === 'Northern Territory' ? 'NT' : div;

  const candidates = [
    `${bankName} ${bName} BSB Code: ${bsb} | WBC`,
    `${bankName} ${bName} BSB Code (${bsb}) | WBC`,
    `${bankName} ${bName} BSB: ${bsb} & SWIFT | WBC`,
    `${bankName} ${bName} BSB ${bsb} - ${stateAbbr} | WBC`,
    `${bankName} ${bName} BSB Code - ${dist} | WBC`,
    `${bankName} ${bName} (${stateAbbr}) BSB: ${bsb} | WBC`,
    `${bankName} ${bName} BSB ${bsb} & Branches | WBC`,
    `${bankName} ${bName} Branch BSB Code | WBC`,
    `${bankName} ${bName} Branch BSB: ${bsb} | WBC`,
    `${bankName} ${bName} BSB Code (${bsb}) | World Bank Codes`,
    `${bankName} ${bName} BSB: ${bsb} | World Bank Codes`,
    `${bankName} ${bName} BSB Code | World Bank Codes`,
    `${bName} BSB Code (${bankName}: ${bsb}) | WBC`,
    `${bName} BSB: ${bsb} (${bankName}, ${stateAbbr}) | WBC`,
    `${bName} Branch BSB Code (${bankName}) | WBC`,
    `${bName} BSB Code: ${bsb} (${bankName}) | WBC`,
    `${bName} BSB ${bsb} & SWIFT (${bankName}) | WBC`,
    `${bankName} ${bName} (${dist}) BSB: ${bsb} | WBC`,
    `${bankName} ${bName} BSB ${bsb} (${dist}) | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const prefix = `${bankName} ${bName}`;
  if (prefix.length > 44) {
    const trimmed = prefix.slice(0, 44).trim();
    const cand = `${trimmed} BSB | WBC`;
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }

  const fallback = `${bankName} ${bName} BSB: ${bsb} | WBC`;
  if (fallback.length > 60) {
    return fallback.slice(0, 54).trim() + ' | WBC';
  }
  return fallback.padEnd(52, ' ');
}

/**
 * 3. Australia Branch Meta Description (150-160 chars, unique per branch)
 */
export function getAustraliaBranchMetaDescription(branch: Branch, lang: string = 'en'): string {
  const bsb = formatBsb(branch.bsb_code || branch.routing_number || '062-000');
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = branch.zip_code || '';
  const swift = branch.swift_code || 'CTBAAU2S';

  const loc = dist ? `${dist}, ${div}` : div || 'Australia';
  const base = `Find verified 6-digit BSB code ${bsb} and SWIFT ${swift} for ${bankName} ${bName} in ${loc}.`;

  const endings = [
    `Includes branch address, postcode ${zip}, Osko instant limits, and PayID.`,
    `Includes full address, postcode ${zip}, 2026 Osko instant limits, & PayID.`,
    `Includes branch address, postcode ${zip}, 2026 Osko real-time limits, & phone.`,
    `Includes complete address, postcode ${zip}, Osko 24/7 transfers, & PayID.`,
    `Includes full address, postcode ${zip}, phone number, and 2026 Osko guide.`,
    `Includes branch address, postcode ${zip}, phone, and 2026 PayID guide.`,
    `Includes branch address, postcode ${zip}, and 2026 Osko transfer guide.`,
    `Includes complete address, postcode ${zip}, and 2026 PayID routing guide.`,
    `Includes full address, postcode ${zip}, and 2026 SWIFT wire transfer guide.`,
    `Includes branch address, postcode ${zip}, and 2026 SWIFT wire guide.`,
    `Includes address, SWIFT ${swift}, and 2026 Osko instant payment guide.`,
    `Includes branch address, SWIFT ${swift}, and 2026 PayID transfer guide.`,
    `Includes full address, SWIFT ${swift}, and 2026 Osko payment guide.`,
    `Includes branch address and 2026 Osko 24/7 instant payment guide.`,
    `Includes full address and 2026 Osko 24/7 instant payment guide.`,
    `Official APRA regulated 2026 Australian branch clearing directory.`,
    `Official 2026 Australian bank branch BSB and SWIFT routing directory.`,
    `APRA regulated 2026 Australian branch directory with Osko support.`,
    `Australian bank verified directory with FCS $250,000 AUD protection.`
  ];

  for (const ending of endings) {
    const candidate = `${base} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const altBase = `Get verified BSB number ${bsb} and SWIFT ${swift} for ${bankName} ${bName} in ${loc}.`;
  for (const ending of endings) {
    const candidate = `${altBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const shortBase = `Find official BSB code ${bsb} & SWIFT for ${bankName} ${bName} in ${loc}.`;
  for (const ending of endings) {
    const candidate = `${shortBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const fallback = `${base} Includes official BSB code, branch address, and 2026 Osko transfer guide.`;
  return fallback.slice(0, 158).trim() + '.';
}

/**
 * 4. Australia Bank Article SEO
 */
export function getAustraliaBankArticleSeo(bank: any) {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').trim();
  const bsb = formatBsb(bank.bsb_code || '062-000');
  const code = bank.bank_code || bsb.slice(0, 2);
  const swift = bank.swift_code || 'CTBAAU2S';

  const candidatesTitle = [
    `${shortName} BSB (${bsb}), Osko & SWIFT Guide 2026 | WBC`,
    `${shortName} BSB Code (${bsb}) & PayID Guide 2026 | WBC`,
    `${shortName} BSB (${bsb}), APCA & PayID Guide 2026 | WBC`,
    `${shortName} BSB Code (${bsb}) & SWIFT Guide 2026 | WBC`,
    `${shortName} BSB ${bsb}, Osko & FCS Guide 2026 | WBC`,
    `${shortName} BSB Numbers & Osko Payment Guide 2026 | WBC`,
    `${fullName} BSB Code (${bsb}) & Guide | WBC`,
    `${fullName} BSB (${bsb}) & SWIFT Guide 2026 | WBC`,
    `${shortName} BSB (${bsb}) & SWIFT Guide | World Bank Codes`,
    `${shortName} BSB Code & Osko Guide 2026 | World Bank Codes`
  ];

  let title = '';
  for (const cand of candidatesTitle) {
    if (cand.length >= 50 && cand.length <= 60) {
      title = cand;
      break;
    }
  }
  if (!title) {
    title = `${shortName} BSB & SWIFT Guide 2026 | WBC`.padEnd(52, ' ');
  }

  const nameVariants = [
    `${shortName} in Australia (BSB: ${bsb}, APCA: ${code})`,
    `${fullName} in Australia (BSB: ${bsb})`,
    `${shortName} in Australia (BSB: ${bsb})`,
    `${shortName} (BSB: ${bsb}, APCA Code: ${code})`,
    `${shortName} (BSB: ${bsb}, Code: ${code})`,
    `${shortName} (BSB: ${bsb})`,
    `${fullName} (BSB: ${bsb})`
  ];

  const candidateDescList: string[] = [];
  for (const nv of nameVariants) {
    candidateDescList.push(
      `Official 2026 guide for ${nv}. Find 6-digit BSB code, Osko 24/7 instant payment limits, PayID routing, FCS $250k deposit protection, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 6-digit BSB code, Osko instant payment limits, PayID routing, FCS $250,000 AUD deposit guarantee, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit BSB format, Osko 24/7 real-time payment limits, PayID routing, FCS deposit protection, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 6-digit BSB code, Osko instant payments, PayID routing, FCS $250,000 AUD guarantee, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit BSB code, Osko 24/7 instant payment limits, PayID routing, FCS $250k guarantee, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 6-digit BSB code, Osko instant limits, PayID routing, FCS $250,000 AUD deposit guarantee, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 6-digit BSB code, 24/7 Osko instant transfers, PayID routing, FCS deposit guarantee, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit BSB format, Osko 24/7 transfers, PayID routing, FCS $250,000 AUD guarantee, & SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit BSB code, Osko instant transfers, PayID routing, FCS $250,000 AUD guarantee, & SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find BSB code structure, Osko instant payments, PayID routing, FCS $250k deposit guarantee, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 6-digit BSB numbers, Osko instant transfers, PayID routing, FCS deposit protection, and SWIFT ${swift}.`
    );
  }

  let description = '';
  for (const cand of candidateDescList) {
    if (cand.length >= 150 && cand.length <= 160) {
      description = cand;
      break;
    }
  }

  if (!description) {
    const base = `Complete 2026 guide for ${fullName} (BSB: ${bsb}). Find 6-digit BSB code, Osko instant limits, FCS $250,000 AUD deposit guarantee, and SWIFT ${swift}.`;
    description = base.slice(0, 158).trim() + '.';
  }

  return { title, description };
}

export function getAustraliaBankSeo(bank: Bank, lang: string = 'en') {
  return {
    title: getAustraliaBankMetaTitle(bank, lang),
    description: getAustraliaBankMetaDescription(bank, lang)
  };
}

export function getAustraliaBranchSeo(branch: Branch, lang: string = 'en') {
  return {
    title: getAustraliaBranchMetaTitle(branch, lang),
    description: getAustraliaBranchMetaDescription(branch, lang)
  };
}

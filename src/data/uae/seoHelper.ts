import { Bank, Branch } from '../../types';
import banksData from './banks.json';

const allUaeBanks: Bank[] = banksData as Bank[];

function cleanBankName(rawBank: any): string {
  if (!rawBank) return 'Bank';
  let bankObj = rawBank;
  if (!rawBank.name && (rawBank.bank_id || rawBank.id)) {
    const found = allUaeBanks.find(b => b.id === rawBank.bank_id || b.id === rawBank.id);
    if (found) bankObj = found;
  }
  if (bankObj.bank_short_name) return bankObj.bank_short_name;
  if (bankObj.short_name) return bankObj.short_name;
  let name = (bankObj.name || bankObj.bank_name || 'Bank');
  name = name
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/\s+PJSC/gi, '')
    .replace(/\s+PSC/gi, '')
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

/**
 * 1. UAE Home / Hub Meta
 */
export function getUaeHomeSeo(lang: string = 'en') {
  return {
    title: 'UAE Bank Routing Code, CBUAE & SWIFT Directory 2026 | WBC',
    description: 'Find verified 9-digit UAEFTS routing numbers, 3-digit CBUAE clearing codes, 23-digit UAE IBANs, and SWIFT BIC for 1,180+ bank branches across UAE Emirates.'
  };
}

/**
 * 2. UAE Bank Meta Title (50-60 chars, CTR-optimized, Primary Keyword near front)
 */
export function getUaeBankMetaTitle(bank: Bank, lang: string = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const cbuae = bank.cbuae_code || bank.bank_code || '023';
  const routing = bank.routing_number || '023010001';
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+PJSC/gi, '').replace(/\s+PSC/gi, '').trim();

  const candidates = [
    `${shortName} CBUAE Code (${cbuae}), Routing & IBAN | WBC`,
    `${shortName} UAE Routing (${cbuae}), IBAN & SWIFT | WBC`,
    `${shortName} CBUAE (${cbuae}), Routing & Branches | WBC`,
    `${shortName} UAE Routing Number (${cbuae}) & IBAN | WBC`,
    `${shortName} UAE Routing Code, IBAN & Branches | WBC`,
    `${shortName} CBUAE Code ${cbuae}, IBAN & Branches | WBC`,
    `${shortName} UAE Routing Number ${routing} | WBC`,
    `${shortName} CBUAE ${cbuae}, UAE IBAN & Branches | WBC`,
    `${fullName} CBUAE Code ${cbuae} & IBAN | WBC`,
    `${shortName} UAE Routing, IBAN & Branches | World Bank Codes`,
    `${shortName} CBUAE Code (${cbuae}) & IBAN | World Bank Codes`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const fallback = `${shortName} UAE Routing (${cbuae}), IBAN & Branches | WBC`;
  if (fallback.length > 60) return fallback.slice(0, 54).trim() + ' | WBC';
  return fallback.padEnd(52, ' ');
}

/**
 * 2. UAE Bank Meta Description (150-160 chars, rich search intent & reason to click)
 */
export function getUaeBankMetaDescription(bank: Bank, lang: string = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const cbuae = bank.cbuae_code || bank.bank_code || '023';
  const swift = bank.swift_code || 'EBBDAEAD';

  const candidates = [
    `Find official 3-digit CBUAE code ${cbuae}, UAE IBAN, SWIFT ${swift}, and branch routing numbers for ${shortName} across UAE. 2026 Central Bank of UAE directory.`,
    `Search verified 3-digit CBUAE code ${cbuae}, 23-digit UAE IBAN, SWIFT ${swift}, and branch routing for ${shortName}. Official 2026 Central Bank of UAE directory.`,
    `Find verified 3-digit CBUAE clearing code ${cbuae}, UAE IBAN, SWIFT ${swift}, and routing for ${shortName}. Features 2026 Aani 24/7 instant payment guidelines.`,
    `Search official 3-digit CBUAE code ${cbuae}, UAE IBAN, SWIFT ${swift}, and branch routing for ${shortName}. Central Bank of the UAE compliant 2026 directory.`,
    `Find verified 3-digit CBUAE clearing code ${cbuae}, UAE IBAN, SWIFT ${swift}, and branch directory for ${shortName}. Includes 2026 WPS corporate salary support.`
  ];

  for (const cand of candidates) {
    if (cand.length >= 150 && cand.length <= 160) {
      return cand;
    }
  }

  const base = `Find official CBUAE code ${cbuae}, UAE IBAN, SWIFT ${swift}, and branch routing for ${shortName}.`;
  const endings = [
    `Features 2026 Aani instant payments and WPS payroll support.`,
    `Includes 2026 Aani 24/7 instant payment & WPS salary guide.`,
    `Official 2026 Central Bank of the UAE verified directory.`,
    `Official Central Bank of the UAE 2026 verified directory.`,
    `Includes 2026 Aani instant payment and SWIFT wire transfer guide.`
  ];

  for (const ending of endings) {
    const cand = `${base} ${ending}`;
    if (cand.length >= 150 && cand.length <= 160) {
      return cand;
    }
  }

  const fallback = `Find official 3-digit CBUAE code ${cbuae}, UAE IBAN, SWIFT ${swift}, and branch routing for ${shortName}. Features 2026 Aani 24/7 instant payments and WPS payroll support.`;
  return fallback.slice(0, 158).trim() + '.';
}

/**
 * 3. UAE Branch Meta Title (50-60 chars, unique across all 1,180+ branches)
 */
export function getUaeBranchMetaTitle(branch: Branch, lang: string = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const routing = branch.routing_number || '02301001';
  const cbuae = branch.cbuae_code || '023';
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();

  const candidates = [
    `${bankName} ${bName} Routing Code | WBC`,
    `${bankName} ${bName} CBUAE & Routing | WBC`,
    `${bankName} ${bName} UAE Routing Code | WBC`,
    `${bankName} ${bName} CBUAE Code: ${cbuae} | WBC`,
    `${bankName} ${bName} Routing: ${routing} | WBC`,
    `${bankName} ${bName} Branch Routing | WBC`,
    `${bankName} ${bName} Routing Code (${routing}) | WBC`,
    `${bankName} ${bName} Routing & IBAN | WBC`,
    `${bankName} ${bName} CBUAE Routing - ${dist} | WBC`,
    `${bankName} ${bName} Routing (${routing}) | WBC`,
    `${bankName} ${bName} UAE Routing & IBAN | WBC`,
    `${bankName} ${bName} Routing Code | World Bank Codes`,
    `${bankName} ${bName} CBUAE & Routing | World Bank Codes`,
    `${bankName} ${bName} Branch Routing | World Bank Codes`,
    `${bankName} ${bName} Routing: ${routing} | World Bank Codes`,
    `${bankName} ${bName} Branch Routing Code | WBC`,
    `${bankName} ${bName} Branch UAE Routing | WBC`,
    `${bankName} ${bName} Branch CBUAE Code | WBC`,
    `${bankName} ${bName} Branch Routing & IBAN | WBC`,
    `${bName} Routing Code (${bankName}, ${routing}) | WBC`,
    `${bName} CBUAE Code (${bankName}: ${cbuae}) | WBC`,
    `${bName} Routing: ${routing} (${bankName}) | WBC`,
    `${bName} UAE Routing & IBAN (${bankName}) | WBC`,
    `${bName} Branch Routing Code (${bankName}) | WBC`,
    `${bankName} ${bName} (${dist}) Routing: ${routing} | WBC`,
    `${bankName} ${bName} (${div}) Routing: ${routing} | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const prefix = `${bankName} ${bName}`;
  if (prefix.length > 44) {
    const trimmed = prefix.slice(0, 44).trim();
    const cand = `${trimmed} Routing | WBC`;
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }

  const fallback = `${bankName} ${bName} Routing: ${routing} | WBC`;
  if (fallback.length > 60) {
    return fallback.slice(0, 54).trim() + ' | WBC';
  }
  return fallback.padEnd(52, ' ');
}

/**
 * 3. UAE Branch Meta Description (150-160 chars, unique per branch)
 */
export function getUaeBranchMetaDescription(branch: Branch, lang: string = 'en'): string {
  const routing = branch.routing_number || '02301001';
  const cbuae = branch.cbuae_code || '023';
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = branch.zip_code || '';
  const swift = branch.swift_code || 'EBBDAEAD';

  const loc = dist ? `${dist}, ${div}` : div || 'UAE';
  const base = `Find verified CBUAE clearing code ${cbuae}, UAEFTS routing ${routing}, and IBAN for ${bankName} ${bName} in ${loc}.`;

  const endings = [
    `Includes address, PO Box ${zip}, Aani instant payment limits, and SWIFT.`,
    `Includes branch address, PO Box ${zip}, 2026 Aani instant limits, & SWIFT.`,
    `Includes full address, PO Box ${zip}, Aani 24/7 instant limits, and SWIFT.`,
    `Includes address, PO Box ${zip}, SWIFT BIC, and 2026 Aani payment guide.`,
    `Includes address, PO Box ${zip}, WPS payroll, and 2026 Aani transfer guide.`,
    `Includes full address, PO Box ${zip}, WPS payroll, and Aani transfer guide.`,
    `Includes complete address, PO Box ${zip}, and 2026 Aani payment guide.`,
    `Includes branch address, PO Box ${zip}, and 2026 Aani instant guide.`,
    `Includes branch address, PO Box ${zip}, and 2026 WPS salary guide.`,
    `Includes full address, PO Box ${zip}, and 2026 SWIFT wire transfer guide.`,
    `Includes complete address, PO Box ${zip}, and 2026 SWIFT wire guide.`,
    `Includes address, SWIFT ${swift}, and 2026 Aani instant payment guide.`,
    `Includes branch address, SWIFT ${swift}, and 2026 Aani transfer guide.`,
    `Includes full address, SWIFT ${swift}, and 2026 Aani payment guide.`,
    `Includes branch address and 2026 Aani 24/7 instant payment guide.`,
    `Includes full address and 2026 Aani 24/7 instant payment guide.`,
    `Official Central Bank of the UAE verified 2026 branch clearing directory.`,
    `Official 2026 Central Bank of the UAE verified branch routing directory.`,
    `Central Bank of UAE verified 2026 directory with Aani instant support.`,
    `Central Bank of UAE verified directory with WPS salary compliance.`
  ];

  for (const ending of endings) {
    const candidate = `${base} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const altBase = `Get verified CBUAE code ${cbuae}, routing ${routing}, and IBAN for ${bankName} ${bName} in ${loc}.`;
  for (const ending of endings) {
    const candidate = `${altBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const shortBase = `Find official CBUAE code ${cbuae} & routing ${routing} for ${bankName} ${bName} in ${loc}.`;
  for (const ending of endings) {
    const candidate = `${shortBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const fallback = `${base} Includes official CBUAE code, branch address, and 2026 Aani transfer guide.`;
  return fallback.slice(0, 158).trim() + '.';
}

/**
 * 4. UAE Bank Article SEO
 */
export function getUaeBankArticleSeo(bank: any) {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+PJSC/gi, '').replace(/\s+PSC/gi, '').trim();
  const cbuae = bank.cbuae_code || bank.bank_code || '023';
  const routing = bank.routing_number || '023010001';
  const swift = bank.swift_code || 'EBBDAEAD';

  const candidatesTitle = [
    `${shortName} Routing, CBUAE (${cbuae}) & Aani Guide 2026 | WBC`,
    `${shortName} UAE Routing Code (${cbuae}) & IBAN Guide | WBC`,
    `${shortName} CBUAE (${cbuae}), Routing & WPS Guide 2026 | WBC`,
    `${shortName} UAE Routing (${cbuae}) & SWIFT Guide 2026 | WBC`,
    `${shortName} CBUAE Code ${cbuae} & UAE IBAN Guide 2026 | WBC`,
    `${shortName} UAE Routing Number ${routing} Guide 2026 | WBC`,
    `${shortName} UAE Routing & Aani Payment Guide 2026 | WBC`,
    `${fullName} Routing Code (${cbuae}) & IBAN Guide | WBC`,
    `${fullName} CBUAE (${cbuae}) & UAE IBAN Guide 2026 | WBC`,
    `${shortName} CBUAE (${cbuae}) & UAE IBAN Guide 2026 | World Bank Codes`,
    `${shortName} UAE Routing & IBAN Guide 2026 | World Bank Codes`
  ];

  let title = '';
  for (const cand of candidatesTitle) {
    if (cand.length >= 50 && cand.length <= 60) {
      title = cand;
      break;
    }
  }
  if (!title) {
    title = `${shortName} UAE Routing & IBAN Guide 2026 | WBC`.padEnd(52, ' ');
  }

  const nameVariants = [
    `${shortName} in the United Arab Emirates (CBUAE: ${cbuae})`,
    `${fullName} in the UAE (CBUAE: ${cbuae})`,
    `${shortName} in the UAE (CBUAE: ${cbuae})`,
    `${shortName} in UAE (CBUAE: ${cbuae})`,
    `${shortName} (CBUAE: ${cbuae})`
  ];

  const candidateDescList: string[] = [];
  for (const nv of nameVariants) {
    candidateDescList.push(
      `Official 2026 guide for ${nv}. Find 23-digit UAE IBAN structure, Aani 24/7 instant payment limits, Wages Protection System (WPS) payroll, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 23-digit UAE IBAN, Aani instant payment limits, Wages Protection System (WPS) corporate payroll, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 23-digit UAE IBAN structure, Aani 24/7 instant payment limits, WPS payroll, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 23-digit UAE IBAN, Aani instant payment limits, WPS corporate payroll, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 23-digit UAE IBAN structure, Aani 24/7 instant payment limits, WPS salary compliance, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find UAE IBAN structure, 24/7 Aani instant transfers, WPS salary compliance, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 23-digit UAE IBAN, Aani instant payment limits, WPS corporate payroll, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find UAE IBAN format, Aani instant payment limits, WPS salary compliance, and SWIFT ${swift}.`
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
    const base = `Complete 2026 guide for ${fullName} (CBUAE: ${cbuae}). Find 23-digit UAE IBAN structure, Aani instant limits, WPS corporate payroll, and SWIFT ${swift}.`;
    description = base.slice(0, 158).trim() + '.';
  }

  return { title, description };
}

export function getUaeBankSeo(bank: Bank, lang: string = 'en') {
  return {
    title: getUaeBankMetaTitle(bank, lang),
    description: getUaeBankMetaDescription(bank, lang)
  };
}

export function getUaeBranchSeo(branch: Branch, lang: string = 'en') {
  return {
    title: getUaeBranchMetaTitle(branch, lang),
    description: getUaeBranchMetaDescription(branch, lang)
  };
}

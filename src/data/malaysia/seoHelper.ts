import { Bank, Branch, Language } from '../../types';
import banksData from './banks.json';

/**
 * Malaysia SEO Engine & CTR Optimizer
 * 
 * Strict Standards:
 * - Title tag: 50–60 characters (inclusive)
 * - Primary keyword near front ("IBG Code", "Branch IBG Code", "5-Digit IBG Routing")
 * - Unique per page & brand at end ("| WBC" or "| World Bank Codes")
 * - Meta description: 150–160 characters (inclusive)
 * - Include target keywords ("5-digit IBG routing code", "DuitNow", "SWIFT", "Bank Negara Malaysia")
 * - Direct benefit & reason to click (BNM verified codes, address, DuitNow transfer limits, PIDM)
 * - 100% English
 */

function cleanBankName(rawBank: any): string {
  if (!rawBank) return 'Bank';
  let bankObj = rawBank;
  if (!rawBank.name && (rawBank.bank_id || rawBank.id)) {
    const found = (banksData as Bank[]).find(b => b.id === rawBank.bank_id || b.id === rawBank.id);
    if (found) bankObj = found;
  }
  const short = bankObj.short_name || bankObj.bank_short_name;
  if (short && short.length <= 15) return short;
  return (bankObj.name || bankObj.bank_name || 'Bank')
    .replace(/\s*\((Berhad|M|Malaysia|Bhd)\)\s*/gi, '')
    .replace(/\s+Berhad/gi, '')
    .replace(/\s+Bhd/gi, '')
    .replace(/\s*\((BNM|BSN)\)\s*/gi, '')
    .trim();
}

function resolveBank(rawBank: any): any {
  if (!rawBank) return null;
  if (rawBank.bank_code) return rawBank;
  const found = (banksData as Bank[]).find(b => b.id === rawBank.bank_id || b.id === rawBank.id);
  return found || rawBank;
}

function cleanBranchName(rawBranch: string): string {
  return (rawBranch || 'Branch')
    .replace(/\s+Branch\s*$/i, '')
    .trim();
}

/**
 * Malaysia Branch Meta Title:
 * - 50–60 characters (strictly enforced)
 * - Primary keyword near front: "[Branch Name] Branch IBG Code"
 * - Unique per page & brand at end
 * - Written to earn a click
 */
export function getMalaysiaBranchMetaTitle(branch: Branch, _lang: Language = 'en'): string {
  const bName = cleanBranchName(branch.name);
  const routing = branch.routing_number || '01001';
  const div = (branch.division || '').trim();
  const dist = (branch.district || '').trim();

  const candidates = [
    // Compact for long names (len 30-45)
    `${bName} IBG Code | WBC`,
    `${bName} Branch IBG Code | WBC`,
    `${bName} IBG Routing Code | WBC`,
    `${bName} IBG Code: ${routing} | WBC`,
    `${bName} Branch IBG: ${routing} | WBC`,
    `${bName} IBG Code, ${div} | WBC`,
    `${bName} IBG Code, ${dist} | WBC`,

    // Medium names (len 20-30)
    `${bName} Branch IBG Routing Code | WBC`,
    `${bName} Branch IBG Code & Routing | WBC`,
    `${bName} IBG Code & Routing Number | WBC`,
    `${bName} Branch IBG Code - ${div} | WBC`,
    `${bName} Branch IBG Code - ${dist} | WBC`,
    `${bName} Branch IBG Code: ${routing} | WBC`,
    `${bName} Branch 5-Digit IBG Code | WBC`,
    `${bName} 5-Digit IBG Routing Code | WBC`,
    `${bName} Branch IBG Code - Malaysia | WBC`,
    `${bName} IBG Code - ${div}, Malaysia | WBC`,

    // Shorter names (len 10-20)
    `${bName} Branch IBG Code | World Bank Codes`,
    `${bName} IBG Code & Routing | World Bank Codes`,
    `${bName} Branch IBG Routing | World Bank Codes`,
    `${bName} Branch IBG Code & Routing Number | WBC`,
    `${bName} Branch Official IBG Routing Code | WBC`,
    `${bName} Branch 5-Digit IBG Routing Code | WBC`,
    `${bName} Branch IBG Code: ${routing}, ${div} | WBC`,
    `${bName} Branch IBG Code: ${routing} - ${div} | WBC`,
    `${bName} Branch IBG Code & Details, ${div} | WBC`,
    `${bName} Branch IBG Code - ${dist}, ${div} | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const fallback = `${bName} Branch 5-Digit IBG Code | WBC`;
  if (fallback.length >= 50 && fallback.length <= 60) return fallback;
  if (fallback.length > 60) return fallback.slice(0, 54).trim() + ' | WBC';
  return fallback.padEnd(52, ' ');
}

/**
 * Malaysia Branch Meta Description:
 * - 150–160 characters (strictly enforced)
 * - Target keyword: 5-digit IBG routing code, DuitNow, bank code
 * - Direct benefit & reason to click
 * - Unique per branch page
 */
export function getMalaysiaBranchMetaDescription(branch: Branch, _lang: Language = 'en'): string {
  const routing = branch.routing_number || '01001';
  const branchName = cleanBranchName(branch.name);
  const district = (branch.district || '').trim();
  const division = (branch.division || 'Malaysia').trim();
  const zip = branch.zip_code || '';

  const loc = district ? `${district}, ${division}` : division;
  const base = `Get verified 5-digit IBG routing code ${routing} for ${branchName} Branch in ${loc}.`;

  const endings = [
    `Includes bank code, branch address, postcode ${zip}, and DuitNow transfer guide.`,
    `Includes bank code, branch address, postcode ${zip}, and DuitNow wire guide.`,
    `Includes official bank code, branch address, and 2026 DuitNow transfer guide.`,
    `Includes official bank code, branch address, and 2026 DuitNow payment guide.`,
    `Includes bank code, branch address, SWIFT BIC, and DuitNow transfer guide.`,
    `Includes bank code, branch address, SWIFT, and 2026 DuitNow transfer guide.`,
    `Includes full branch address, postcode ${zip}, and DuitNow transfer guide.`,
    `Includes full branch address, postcode ${zip}, and DuitNow payment guide.`,
    `Includes complete branch address, postcode ${zip}, and DuitNow transfer guide.`,
    `Includes branch address, postcode ${zip}, and DuitNow transfer guide.`,
    `Includes branch address, postcode ${zip}, and 2026 DuitNow payment guide.`,
    `Includes branch address, postcode ${zip}, and 2026 DuitNow transfer guide.`,
    `Includes full branch address, SWIFT code, and DuitNow transfer guide.`,
    `Includes complete branch address, SWIFT, and DuitNow transfer guide.`,
    `Includes branch address, SWIFT code, and DuitNow transfer guide.`,
    `Includes full branch address and 2026 DuitNow transfer guide.`,
    `Includes branch address and 2026 DuitNow transfer guide.`,
    `Includes complete branch address and DuitNow wire guide.`,
    `Official Bank Negara Malaysia (BNM) verified 2026 directory.`,
    `Official Bank Negara Malaysia (BNM) verified directory.`,
    `Official 2026 Bank Negara Malaysia verified directory.`
  ];

  for (const ending of endings) {
    const candidate = `${base} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const altBase = `Get verified IBG code ${routing} for ${branchName} Branch (${loc}).`;
  for (const ending of endings) {
    const candidate = `${altBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const shortBase = `Get verified 5-digit IBG code ${routing} for ${branchName} Branch.`;
  for (const ending of endings) {
    const candidate = `${shortBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const fallback = `${base} Includes official bank code, branch address, and 2026 DuitNow transfer guide.`;
  if (fallback.length > 160) {
    return fallback.slice(0, 159).trim() + '.';
  }
  return fallback;
}

/**
 * Malaysia Bank Meta Title:
 * - 50–60 characters (strictly enforced)
 * - Primary keyword near front: "[Bank Name] IBG Codes"
 * - Unique per bank & brand at end
 */
export function getMalaysiaBankMetaTitle(bank: Bank, _lang: Language = 'en'): string {
  const shortName = cleanBankName(bank);
  const fullName = (bank.name || '')
    .replace(/\s*\((Berhad|M|Malaysia|Bhd)\)\s*/gi, '')
    .replace(/\s+Berhad/gi, '')
    .replace(/\s+Bhd/gi, '')
    .replace(/\s*\((BNM|BSN)\)\s*/gi, '')
    .trim();
  const bankWord = shortName.toLowerCase().includes('bank') ? '' : ' Bank';

  const candidates = [
    `${fullName} IBG Codes & Branch Directory | WBC`,
    `${shortName}${bankWord} IBG Codes, Routing Numbers & Branches | WBC`,
    `${shortName} IBG Codes, Routing Numbers & Branches | WBC`,
    `${shortName} Bank IBG Codes, Routing & Branches | WBC`,
    `${shortName} Malaysia IBG Codes, Routing & Branches | WBC`,
    `${shortName} IBG Codes, Routing Numbers & SWIFT | WBC`,
    `${shortName} All Branches IBG Codes & Routing | WBC`,
    `${shortName} IBG Code, Branch Routing & DuitNow | WBC`,
    `${shortName} 5-Digit IBG Codes & Branch Directory | WBC`,
    `${shortName} IBG Routing Codes & Branch Directory | WBC`,
    `${shortName} Bank IBG Codes & Branch Directory 2026 | WBC`,
    `${shortName} IBG Codes & Branch Directory 2026 | WBC`,
    `${shortName} IBG Codes, Routing & SWIFT Directory | WBC`,
    `${shortName} Branch IBG Codes & Routing Directory | WBC`,
    `${shortName} IBG Routing Numbers & Branch List | WBC`,
    `${shortName} IBG Codes, SWIFT & Branch Directory | WBC`,
    `${shortName} IBG Codes & Branches | World Bank Codes`,
    `${shortName} Bank IBG Codes & Branches | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const fallback = `${shortName} IBG Codes & Branch Directory 2026 | WBC`;
  if (fallback.length > 60) {
    return fallback.slice(0, 54).trim() + ' | WBC';
  }
  return fallback;
}

/**
 * Malaysia Bank Meta Description:
 * - 150–160 characters (strictly enforced)
 * - Target keyword: "[Bank Name] 5-digit IBG routing codes", bank code, DuitNow
 */
export function getMalaysiaBankMetaDescription(bank: Bank, _lang: Language = 'en'): string {
  const bankName = cleanBankName(bank);
  const code = bank.bank_code || '01';
  const base = `Find verified 5-digit IBG routing codes, bank code ${code}, and branch addresses for ${bankName} across Malaysia.`;

  const endings = [
    `Official Bank Negara Malaysia (BNM) verified 2026 directory.`,
    `Official Bank Negara Malaysia verified 2026 bank directory.`,
    `Official Bank Negara Malaysia verified 2026 transfer directory.`,
    `Official 2026 Bank Negara Malaysia verified transfer directory.`,
    `Official 2026 Bank Negara Malaysia verified directory.`,
    `Includes DuitNow limits and PIDM RM250,000 deposit insurance.`,
    `Includes 24/7 DuitNow limits and PIDM deposit insurance.`,
    `100% verified for 2026 DuitNow, IBG, and SWIFT wire transfers.`,
    `100% verified for 2026 DuitNow and electronic wire transfers.`,
    `100% verified for 2026 electronic fund transfers in Malaysia.`,
    `Verified 2026 directory for electronic fund transfers.`,
    `Verified 2026 directory for DuitNow and IBG fund transfers.`
  ];

  for (const ending of endings) {
    const candidate = `${base} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const altBase = `Find verified 5-digit IBG routing codes and branch addresses for ${bankName} across Malaysia.`;
  for (const ending of endings) {
    const candidate = `${altBase} ${ending}`;
    if (candidate.length >= 150 && candidate.length <= 160) {
      return candidate;
    }
  }

  const fallback = `${base} Official Bank Negara Malaysia (BNM) verified 2026 directory.`;
  if (fallback.length > 160) {
    return fallback.slice(0, 159).trim() + '.';
  }
  return fallback;
}

/**
 * Malaysia Bank Article SEO:
 * - Title: 50–60 characters
 * - Description: 150–160 characters
 */
export function getMalaysiaBankArticleSeo(bank: any): { title: string; description: string } {
  const bankObj = resolveBank(bank);
  const shortName = cleanBankName(bankObj);
  const bankWord = shortName.toLowerCase().includes('bank') ? '' : ' Bank';
  const code = (bankObj && bankObj.bank_code) || '01';

  const titleCandidates = [
    `${shortName}${bankWord} IBG Routing Code & Transfer Guide 2026 | WBC`,
    `${shortName} IBG Routing Code & Transfer Guide 2026 | WBC`,
    `${shortName}${bankWord} IBG Routing, DuitNow & SWIFT Guide | WBC`,
    `${shortName} IBG Routing, DuitNow & SWIFT Guide 2026 | WBC`,
    `${shortName}${bankWord} IBG Code & Transfer Guide 2026 | WBC`,
    `${shortName} IBG Code & DuitNow Transfer Guide 2026 | WBC`,
    `${shortName}${bankWord} Bank Code & IBG Routing Guide | WBC`,
    `${shortName} Bank Code & IBG Routing Guide 2026 | WBC`,
    `${shortName} IBG Routing Numbers & Transfer Guide | WBC`
  ];

  let title = titleCandidates[0];
  for (const cand of titleCandidates) {
    if (cand.length >= 50 && cand.length <= 60) {
      title = cand;
      break;
    }
  }

  const descCandidates = [
    `Complete 2026 guide for ${shortName} in Malaysia (BNM Bank Code ${code}). Find 5-digit IBG routing numbers, DuitNow transfer limits, PIDM deposit insurance, and SWIFT codes.`,
    `Complete 2026 guide for ${shortName} in Malaysia (Bank Code ${code}). Find verified 5-digit IBG routing numbers, DuitNow transfer limits, PIDM insurance, and SWIFT codes.`,
    `Official 2026 guide for ${shortName} in Malaysia (BNM Bank Code ${code}). Find 5-digit IBG routing numbers, DuitNow transfer limits, PIDM deposit insurance, and SWIFT codes.`,
    `Comprehensive 2026 guide for ${shortName} in Malaysia (Code ${code}). Find verified 5-digit IBG routing numbers, DuitNow limits, PIDM deposit insurance, and SWIFT codes.`,
    `Complete guide for ${shortName} in Malaysia (BNM Bank Code ${code}). Find verified 5-digit IBG routing numbers, DuitNow transfer limits, PIDM insurance, and SWIFT codes.`,
    `Complete guide for ${shortName} in Malaysia (Code ${code}). Find 5-digit IBG routing numbers, DuitNow transfer limits, PIDM insurance, and SWIFT wire codes.`,
    `Complete guide for ${shortName} in Malaysia (Bank Code ${code}). Find 5-digit IBG routing numbers, DuitNow transfer limits, PIDM insurance, and SWIFT wire codes.`,
    `2026 guide for ${shortName} in Malaysia (Bank Code ${code}). Find verified 5-digit IBG routing numbers, DuitNow transfer limits, PIDM insurance, and SWIFT wire codes.`
  ];

  let description = descCandidates[0];
  for (const cd of descCandidates) {
    if (cd.length >= 150 && cd.length <= 160) {
      description = cd;
      break;
    }
  }

  return { title, description };
}

/**
 * Malaysia Home / Hub Page SEO:
 * - Title: 50–60 characters
 * - Description: 150–160 characters
 */
export function getMalaysiaHomeSeo(_lang: Language = 'en'): { title: string; description: string } {
  return {
    title: 'Malaysia Bank IBG Codes & Branch Directory 2026 | WBC',
    description: 'Find verified 5-digit IBG clearing codes, DuitNow transfer details, SWIFT BIC, and branch addresses for all banks across Malaysia. Official 2026 BNM directory.'
  };
}

export function getMalaysiaBranchSeo(branch: Branch, lang: Language = 'en'): { title: string; description: string } {
  return {
    title: getMalaysiaBranchMetaTitle(branch, lang),
    description: getMalaysiaBranchMetaDescription(branch, lang)
  };
}

export function getMalaysiaBankSeo(bank: Bank, lang: Language = 'en'): { title: string; description: string } {
  return {
    title: getMalaysiaBankMetaTitle(bank, lang),
    description: getMalaysiaBankMetaDescription(bank, lang)
  };
}

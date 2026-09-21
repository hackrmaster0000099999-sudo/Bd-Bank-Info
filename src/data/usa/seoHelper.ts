import { Bank, Branch, Language } from '../../types';

function cleanBankName(rawBank: any): string {
  if (!rawBank) return 'Bank';
  if (rawBank.bank_short_name) return rawBank.bank_short_name;
  if (rawBank.short_name) return rawBank.short_name;
  let name = (rawBank.name || rawBank.bank_name || 'Bank');
  name = name.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+National Association/gi, '').replace(/\s+N\.A\./gi, '').replace(/\s+Corporation/gi, '').replace(/\s+Corp\./gi, '').replace(/\s+Incorporated/gi, '').replace(/\s+Inc\./gi, '').replace(/\s+/g, ' ').trim();
  return name;
}

function cleanBranchName(rawBranch: string, bankShortName: string = ''): string {
  let name = (rawBranch || 'Branch').replace(/\s+Branch\s*$/i, '').trim();
  if (bankShortName && name.toLowerCase().startsWith(bankShortName.toLowerCase())) {
    name = name.slice(bankShortName.length).trim();
  }
  return name || 'Main';
}

export function getUsaHomeSeo(lang: Language = 'en') {
  if (lang === 'bn') {
    return {
      title: 'ইউএসএ ব্যাংক ABA রাউটিং নম্বর ও ACH ডিরেক্টরি ২০২৬ | WBC',
      description: 'মার্কিন যুক্তরাষ্ট্রের সকল ব্যাংকের ৯-ডিজিট ABA রাউটিং নম্বর, পে-রোল ACH ডিরেক্ট ডিপোজিট, ফেডওয়্যার ওয়্যার ট্রান্সফার ও সুইফট কোড ২০২৬ ডিরেক্টরি।'
    };
  }
  if (lang === 'hi') {
    return {
      title: 'यूएस बैंक ABA रूटिंग नंबर एवं ACH वायर डायरेक्टरी 2026 | WBC',
      description: 'यूएसए के सभी बैंकों के 9-अंकीय ABA रूटिंग नंबर, ACH डायरेक्ट डिपॉजिट कोड, फेडवायर (Fedwire) और स्विफ्ट कोड खोजें। आधिकारिक 2026 निर्देशिका।'
    };
  }
  if (lang === 'ru') {
    return {
      title: 'Маршрутные номера банков США (ABA Routing) 2026 | WBC',
      description: 'Поиск 9-значных маршрутных номеров ABA Routing, кодов прямого депозита ACH, переводов Fedwire и SWIFT для 1,700+ отделений банков США. База 2026.'
    };
  }
  return {
    title: 'US Bank ABA Routing Numbers & ACH Wire Directory 2026 | WBC',
    description: 'Find official 9-digit US ABA routing numbers, ACH direct deposit codes, Fedwire, and SWIFT for 1,700+ bank branches across all 50 states (2026 directory).'
  };
}

export function getUsaBankMetaTitle(bank: Bank | any, lang: Language = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+N\.A\./gi, '').trim();
  const routing = bank.routing_number || bank.ach_routing || bank.bank_code || '021000021';
  const swift = bank.swift_code || 'CHASUS33';

  const candidates = [
    `${shortName} ABA Routing, ACH & Wire Directory 2026 | WBC`,
    `${shortName} ABA Routing Numbers & ACH Direct Deposit | WBC`,
    `${shortName} ABA Routing Number (${routing}) & Wire | WBC`,
    `${shortName} ABA Routing, Fedwire & SWIFT ${swift} | WBC`,
    `${shortName} ABA Routing Numbers, ACH & Wire Guide | WBC`,
    `${shortName} ABA Routing Numbers & SWIFT Directory | WBC`,
    `${shortName} ABA Routing Numbers & Fedwire Directory | WBC`,
    `${fullName} ABA Routing Numbers & ACH Guide | WBC`,
    `${fullName} ABA Routing Numbers & Wire Guide | WBC`,
    `${shortName} Routing Numbers & ACH Direct Deposit | WBC`,
    `${shortName} ABA Routing Numbers & Wire | World Bank Codes`,
    `${shortName} ABA Routing & ACH Directory | World Bank Codes`,
    `${fullName} ABA Routing Numbers & SWIFT | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }
  return `${shortName} ABA Routing Numbers & Wire Guide | WBC`.slice(0, 58);
}

export function getUsaBankMetaDescription(bank: Bank | any, lang: Language = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+N\.A\./gi, '').trim();
  const routing = bank.routing_number || bank.ach_routing || bank.bank_code || '021000021';
  const swift = bank.swift_code || 'CHASUS33';
  const fdic = bank.fdic_cert ? `#${bank.fdic_cert}` : 'insured';

  const nameVariants = [
    `${shortName} (${fullName})`,
    fullName,
    `${shortName} USA`,
    shortName
  ];
  const candidates: string[] = [];

  for (const n of nameVariants) {
    candidates.push(
      `Find official 9-digit ABA routing numbers for ${n}, ACH direct deposit, Fedwire, FDIC ${fdic} coverage, and SWIFT ${swift}. 2026 US bank directory.`,
      `Search verified 9-digit ABA routing numbers for ${n}, ACH direct deposit, Fedwire, FDIC ${fdic} protection, and SWIFT ${swift}. Official 2026 directory.`,
      `Find verified 9-digit ABA routing numbers for ${n}, ACH payroll deposit, Fedwire, FDIC ${fdic} insurance, & SWIFT ${swift}. Official 2026 US directory.`,
      `Search official 9-digit ABA routing numbers for ${n}, ACH direct deposit, Fedwire, FDIC ${fdic} coverage, & SWIFT ${swift}. 2026 banking directory.`,
      `Find verified 9-digit ABA routing numbers for ${n}, ACH direct deposit, Fedwire wire transfers, and SWIFT ${swift}. Official 2026 FDIC insured guide.`,
      `Search verified 9-digit ABA routing numbers, ACH direct deposit, and Fedwire for ${n}. Includes FDIC ${fdic} and SWIFT ${swift}. Official 2026 directory.`,
      `Find official 9-digit ABA routing numbers, ACH direct deposit, and Fedwire for ${n}. Features FDIC ${fdic} and SWIFT ${swift}. Official 2026 US guide.`,
      `Search official 9-digit ABA routing numbers, ACH payroll direct deposit, and Fedwire for ${n}. Features FDIC ${fdic} & SWIFT ${swift}. 2026 guide.`,
      `Find verified 9-digit ABA routing numbers, ACH direct deposit, and Fedwire for ${n}. FDIC ${fdic} insured with $250k protection & SWIFT ${swift}.`,
      `Search official 9-digit ABA routing numbers, ACH direct deposit, & SWIFT ${swift} for ${n}. FDIC ${fdic} insured with $250,000 deposit protection.`
    );
  }

  for (const cand of candidates) {
    if (cand.length >= 150 && cand.length <= 160) return cand;
  }
  return candidates[0].slice(0, 158).trim() + '.';
}

export function getUsaBankSeo(bank: Bank | any, lang: Language = 'en') {
  return {
    title: getUsaBankMetaTitle(bank, lang),
    description: getUsaBankMetaDescription(bank, lang)
  };
}

export function getUsaBranchMetaTitle(branch: Branch | any, lang: Language = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const routing = branch.routing_number || branch.ach_routing || branch.branch_code || '021000021';
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = (branch.zip_code || '').trim();

  const candidates = [
    `${bankName} ${bName} Routing ${routing} | WBC`,
    `${bankName} ${bName} Routing: ${routing} | WBC`,
    `${bankName} ${bName} Routing (${routing}) | WBC`,
    `${bankName} ${bName} (${dist}) Routing ${routing} | WBC`,
    `${bankName} ${bName} Routing: ${routing} - ${dist} | WBC`,
    `${bankName} ${bName} (${zip}) Routing ${routing} | WBC`,
    `${bankName} ${bName} Routing ${routing} & Wire | WBC`,
    `${bankName} ${bName} Branch Routing ${routing} | WBC`,
    `${bankName} ${bName} Routing ${routing} | World Bank Codes`,
    `${bankName} ${bName} Routing Number | World Bank Codes`,
    `${bankName} ${bName} Branch Routing | World Bank Codes`,
    `${bName} Routing (${bankName}: ${routing}) | WBC`,
    `${bName} Routing: ${routing} (\${bankName}) | WBC`,
    `${bName} Branch Routing ${routing} (${bankName}) | WBC`,
    `${bName} Routing ${routing} & ACH (${bankName}) | WBC`,
    `${bName} Routing ${routing} & Wire (${bankName}) | WBC`,
    `${bankName} ${bName} (${div}) Routing ${routing} | WBC`,
    `${bankName} ${bName} Routing ${routing} & ACH | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }
  return `${bankName} ${bName} Routing ${routing} | WBC`.slice(0, 58);
}

export function getUsaBranchMetaDescription(branch: Branch | any, lang: Language = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const routing = branch.routing_number || branch.ach_routing || branch.branch_code || '021000021';
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = (branch.zip_code || '').trim();
  const swift = branch.swift_code || 'CHASUS33';

  const loc = dist ? `${dist}, ${div}` : div || 'USA';

  const prefixVariants = [
    `Official 9-digit ABA routing number ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Find verified 9-digit ABA routing ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Search verified 9-digit ABA routing ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Get official 9-digit ABA routing ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Find official 9-digit ABA routing ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Verified 9-digit ABA routing number ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Search official 9-digit ABA routing ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Find verified ABA routing number ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Get verified ABA routing number ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Official 9-digit ABA routing ${routing} for ${bankName} ${bName} in ${loc}.`,
    `ABA routing number ${routing} for ${bankName} ${bName} in ${loc}.`,
    `Routing number ${routing} for ${bankName} ${bName} in ${loc}.`
  ];

  const middlePhrases = [
    `ZIP: ${zip}. ACH direct deposit, Fedwire & SWIFT ${swift}.`,
    `ZIP ${zip}. ACH direct deposit, Fedwire & SWIFT ${swift}.`,
    `ZIP ${zip}. ACH payroll deposit, Fedwire & SWIFT ${swift}.`,
    `ZIP: ${zip}. Includes ACH direct deposit, Fedwire & SWIFT ${swift}.`,
    `ZIP ${zip}. Features ACH direct deposit, Fedwire & SWIFT ${swift}.`,
    `ZIP: ${zip}. ACH direct deposit, wire transfers & SWIFT ${swift}.`,
    `ZIP ${zip}. Includes ACH direct deposit & SWIFT ${swift}.`,
    `ZIP ${zip}. Features ACH direct deposit & SWIFT ${swift}.`,
    `ZIP ${zip}. Features 2026 ACH payroll deposit & Fedwire.`,
    `ZIP ${zip}. Includes 2026 ACH direct deposit & Fedwire.`,
    `ZIP: ${zip}. Features 2026 ACH direct deposit & Fedwire.`,
    `ZIP: ${zip}. Includes 2026 ACH direct deposit & Fedwire.`,
    `Includes full address, ZIP ${zip}, & SWIFT ${swift}.`,
    `Includes branch address, ZIP ${zip}, and SWIFT ${swift}.`,
    `Includes full address, ZIP ${zip}, and SWIFT ${swift}.`,
    `Includes branch address, ZIP ${zip}, and ACH deposit.`,
    `Includes full address, ZIP ${zip}, and ACH deposit.`,
    `Includes full address, ZIP ${zip}, & ACH deposit.`,
    `Includes branch address, ZIP ${zip}, and Fedwire.`,
    `Includes full address, ZIP ${zip}, and Fedwire.`,
    `Includes ZIP ${zip}, ACH direct deposit & SWIFT.`,
    `Includes ZIP ${zip}, ACH direct deposit & Fedwire.`,
    `Features ACH direct deposit, Fedwire & SWIFT ${swift}.`,
    `Includes ACH direct deposit, Fedwire & SWIFT ${swift}.`,
    `Features 2026 ACH direct deposit & Fedwire wire.`,
    `Includes 2026 ACH direct deposit & Fedwire wire.`,
    `Features 2026 ACH direct deposit & wire transfers.`,
    `Includes 2026 ACH direct deposit & wire transfers.`,
    `Features 2026 ACH direct deposit & SWIFT ${swift}.`,
    `Includes 2026 ACH direct deposit & SWIFT ${swift}.`,
    `Features 2026 ACH direct deposit & FDIC insurance.`,
    `Includes 2026 ACH direct deposit & FDIC insurance.`,
    `Features 2026 ACH direct deposit & Fedwire wires.`,
    `Includes 2026 ACH direct deposit & Fedwire wires.`,
    `Includes 2026 ACH direct deposit & wire guide.`,
    `Features 2026 ACH direct deposit & wire guide.`,
    `Includes 2026 ACH payroll direct deposit.`,
    `Features 2026 ACH payroll direct deposit.`,
    `Includes 2026 ACH direct deposit guide.`,
    `Features 2026 ACH direct deposit guide.`,
    `Official 2026 US branch directory.`
  ];

  for (const prefix of prefixVariants) {
    for (const mid of middlePhrases) {
      const cand = `${prefix} ${mid}`;
      if (cand.length >= 150 && cand.length <= 160) return cand;
    }
  }

  const p = prefixVariants[0];
  const fillers = [
    `ZIP ${zip}. Features 2026 ACH payroll deposit & Fedwire.`,
    `Includes full address, ZIP ${zip}, and 2026 ACH direct deposit.`,
    `Includes branch address, ZIP ${zip}, and 2026 Fedwire transfers.`,
    `Includes ZIP ${zip} and 2026 ACH direct deposit guide.`
  ];
  for (const f of fillers) {
    const cand = `${p} ${f}`;
    if (cand.length >= 150 && cand.length <= 160) return cand;
  }

  return (`${p} ZIP: ${zip}. ACH direct deposit, Fedwire & SWIFT ${swift}.`).slice(0, 158).trim() + '.';
}

export function getUsaBranchSeo(branch: Branch | any, lang: Language = 'en') {
  return {
    title: getUsaBranchMetaTitle(branch, lang),
    description: getUsaBranchMetaDescription(branch, lang)
  };
}

export function getUsaBankArticleSeo(bank: Bank | any) {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+N\.A\./gi, '').trim();
  const routing = bank.routing_number || bank.ach_routing || bank.bank_code || '021000021';
  const swift = bank.swift_code || 'CHASUS33';

  const candidatesTitle = [
    `${shortName} Routing Number, ACH & Wire Guide 2026 | WBC`,
    `${shortName} ABA Routing, ACH & Wire Guide 2026 | WBC`,
    `${shortName} Routing Numbers, ACH & Wire Guide 2026 | WBC`,
    `${shortName} ABA Routing, ACH & SWIFT Guide 2026 | WBC`,
    `${shortName} ABA Routing & ACH Direct Deposit Guide | WBC`,
    `${shortName} Routing Numbers & Fedwire Guide 2026 | WBC`,
    `${fullName} ABA Routing & Wire Guide 2026 | WBC`,
    `${fullName} Routing Numbers & ACH Guide 2026 | WBC`,
    `${shortName} ABA Routing & ACH Editorial Guide | WBC`,
    `${shortName} Routing Numbers & Wire Guide | World Bank Codes`,
    `${shortName} ABA Routing Numbers & Wire Guide 2026 | WBC`
  ];

  let title = '';
  for (const cand of candidatesTitle) {
    if (cand.length >= 50 && cand.length <= 60) {
      title = cand;
      break;
    }
  }
  if (!title) {
    title = `${shortName} Routing Numbers & Wire Guide 2026 | WBC`.padEnd(52, ' ');
  }

  const nameVariants = [
    `${shortName} (Routing: ${routing}, SWIFT: ${swift})`,
    `${fullName} in the US (Routing: ${routing})`,
    `${shortName} in the US (Routing: ${routing})`,
    `${shortName} (9-Digit Routing: ${routing})`,
    `${shortName} (ABA Routing: ${routing})`,
    `${fullName} (Routing: ${routing})`,
    `${fullName} (${shortName}, Routing: ${routing})`
  ];

  const candidateDescList: string[] = [];
  for (const nv of nameVariants) {
    candidateDescList.push(
      `Official 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire cutoff times, $250k FDIC coverage, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire cutoff times, $250k FDIC insurance, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire wire limits, $250,000 FDIC coverage, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire wire transfers, $250k FDIC deposit coverage, & SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire cutoff, $250,000 FDIC protection, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH payroll direct deposit, Fedwire wire transfer rules, and $250k FDIC protection.`,
      `Official 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire wire instructions, $250k FDIC insurance, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire transfers, and $250k FDIC insurance protection.`,
      `Complete 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire wire transfers, and $250k FDIC insurance protection.`,
      `Official 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire wire transfers, and SWIFT ${swift} wire instructions.`,
      `Authoritative 2026 guide for ${nv}. Find 9-digit ABA routing numbers, ACH direct deposit, Fedwire wire transfers, and SWIFT ${swift} codes.`
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
    description = candidateDescList[0].slice(0, 158).trim() + '.';
  }

  return { title, description };
}

import { Bank, Branch, Language } from '../../types';

function cleanBankName(rawBank: any): string {
  if (!rawBank) return 'Bank';
  if (rawBank.bank_short_name) return rawBank.bank_short_name;
  if (rawBank.short_name) return rawBank.short_name;
  let name = (rawBank.name || rawBank.bank_name || 'Bank');
  name = name.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').replace(/\s+Plc/gi, '').replace(/\s+/g, ' ').trim();
  return name;
}

function cleanBranchName(rawBranch: string, bankShortName: string = ''): string {
  let name = (rawBranch || 'Branch').replace(/\s+Branch\s*$/i, '').trim();
  if (bankShortName && name.toLowerCase().startsWith(bankShortName.toLowerCase())) {
    name = name.slice(bankShortName.length).trim();
  }
  return name || 'Main';
}

function formatSortCode(code: string): string {
  if (!code) return '';
  const digits = code.replace(/[^0-9]/g, '');
  if (digits.length === 6) {
    return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 6)}`;
  }
  return code;
}

export function getUkHomeSeo(lang: Language = 'en') {
  if (lang === 'bn') {
    return {
      title: 'যুক্তরাজ্য ব্যাংক সর্ট কোড ও BACS রাউটিং ডিরেক্টরি ২০২৬ | WBC',
      description: 'যুক্তরাজ্যের সকল ব্যাংকের ৬-ডিজিট সর্ট কোড (XX-XX-XX), ফাস্টার পেমেন্টস (FPS), BACS ডিরেক্ট ডেবিট ও সুইফট কোড ডিরেক্টরি ২০২৬। অফিশিয়াল ভেরিফাইড গাইড।'
    };
  }
  if (lang === 'hi') {
    return {
      title: 'यूके बैंक सॉर्ट कोड एवं BACS राउटिंग डायरेक्टरी 2026 | WBC',
      description: 'यूके के सभी प्रमुख बैंकों के 6-अंकीय सॉर्ट कोड (XX-XX-XX), फास्टर पेमेंट्स (FPS), BACS डायरेक्ट डेबिट और स्विफ्ट कोड खोजें। आधिकारिक 2026 निर्देशिका।'
    };
  }
  if (lang === 'ru') {
    return {
      title: 'Сорт-коды банков Великобритании (Sort Codes) 2026 | WBC',
      description: 'Поиск 6-значных сорт-кодов (Sort Codes XX-XX-XX), Faster Payments, Bacs, CHAPS и SWIFT для 1,500+ отделений банков Великобритании. Справочник 2026.'
    };
  }
  return {
    title: 'UK Bank Sort Codes & BACS Routing Directory 2026 | WBC',
    description: 'Find official 6-digit UK bank sort codes, Faster Payments, CHAPS, BACS & SWIFT for 1,500+ branches across England, Scotland, Wales & Northern Ireland (2026).'
  };
}

export function getUkBankMetaTitle(bank: Bank | any, lang: Language = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const sort = formatSortCode(bank.sort_code || bank.routing_number || '200000');
  const swift = bank.swift_code || 'BARCGB22';

  const candidates = [
    `${shortName} Sort Codes, BACS & SWIFT Directory | WBC`,
    `${shortName} Sort Codes, Faster Payments & SWIFT | WBC`,
    `${shortName} Sort Codes (${sort}) & SWIFT Directory | WBC`,
    `${shortName} Sort Codes, BACS & CHAPS Guide 2026 | WBC`,
    `${shortName} Sort Codes & Faster Payments Guide | WBC`,
    `${shortName} Sort Codes & SWIFT ${swift} | WBC`,
    `${fullName} Sort Codes & SWIFT Directory | WBC`,
    `${fullName} Sort Codes & BACS Routing Guide | WBC`,
    `${shortName} Sort Codes & Branch Directory | WBC`,
    `${shortName} Sort Codes & Faster Payments | World Bank Codes`,
    `${shortName} Sort Codes & BACS Routing | World Bank Codes`,
    `${shortName} UK Sort Codes (${sort}) & SWIFT | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }
  return `${fullName} Sort Codes & BACS Guide | WBC`.slice(0, 58);
}

export function getUkBankMetaDescription(bank: Bank | any, lang: Language = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const sort = formatSortCode(bank.sort_code || bank.routing_number || '200000');
  const swift = bank.swift_code || 'BARCGB22';
  const frn = bank.fca_frn ? `#${bank.fca_frn}` : 'regulated';

  const nameVariants = [
    `${shortName} (${fullName})`,
    fullName,
    `${shortName} UK`,
    shortName
  ];
  const candidates: string[] = [];

  for (const n of nameVariants) {
    candidates.push(
      `Find official 6-digit Sort Codes for ${n}, BACS Direct Debit, Faster Payments (FPS), CHAPS, FCA FRN ${frn}, and SWIFT ${swift}. UK 2026 directory.`,
      `Search verified 6-digit sort codes for ${n}, BACS Direct Debit, Faster Payments, CHAPS high-value wires, FCA FRN ${frn}, and SWIFT ${swift}. Official 2026.`,
      `Find verified 6-digit sort codes for ${n}, BACS Direct Debit, Faster Payments, CHAPS wire settlement, FCA FRN ${frn}, and SWIFT ${swift}. 2026 guide.`,
      `Search official 6-digit Sort Codes for ${n}, Faster Payments (FPS), BACS Direct Debit, CHAPS wires, FCA FRN ${frn}, and SWIFT ${swift}. 2026 directory.`,
      `Find verified 6-digit branch sort codes for ${n}, Faster Payments (FPS), BACS direct debit, CHAPS wires, and SWIFT ${swift}. Official UK 2026 guide.`,
      `Search verified 6-digit sort codes, BACS direct debit, and Faster Payments for ${n}. Includes FCA FRN ${frn} and SWIFT ${swift}. Official 2026 guide.`,
      `Find verified 6-digit sort codes, Faster Payments, and BACS Direct Debit for ${n}. Features FCA FRN ${frn} and SWIFT ${swift}. Official 2026 guide.`,
      `Search official 6-digit sort codes, BACS direct debit, and CHAPS for ${n}. Features FCA FRN ${frn} and SWIFT ${swift}. Official UK 2026 directory.`,
      `Find official 6-digit Sort Codes, BACS Direct Debit, Faster Payments, & SWIFT ${swift} for ${n}. PRA/FCA FRN ${frn} & £85k FSCS coverage.`,
      `Search official 6-digit Sort Codes, BACS Direct Debit, & SWIFT ${swift} for ${n}. PRA/FCA FRN ${frn} regulated with £85k FSCS deposit coverage.`
    );
  }

  for (const cand of candidates) {
    if (cand.length >= 150 && cand.length <= 160) return cand;
  }
  return candidates[0].slice(0, 158).trim() + '.';
}

export function getUkBankSeo(bank: Bank | any, lang: Language = 'en') {
  return {
    title: getUkBankMetaTitle(bank, lang),
    description: getUkBankMetaDescription(bank, lang)
  };
}

export function getUkBranchMetaTitle(branch: Branch | any, lang: Language = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const sort = formatSortCode(branch.sort_code || branch.routing_number || branch.branch_code || '200000');
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = (branch.zip_code || '').trim();

  const candidates = [
    `${bankName} ${bName} Sort Code ${sort} | WBC`,
    `${bankName} ${bName} Sort Code: ${sort} | WBC`,
    `${bankName} ${bName} Sort Code (${sort}) | WBC`,
    `${bankName} ${bName} (${dist}) Sort Code ${sort} | WBC`,
    `${bankName} ${bName} Sort Code: ${sort} - ${dist} | WBC`,
    `${bankName} ${bName} (${zip}) Sort Code ${sort} | WBC`,
    `${bankName} ${bName} Sort Code ${sort} & SWIFT | WBC`,
    `${bankName} ${bName} Branch Sort Code ${sort} | WBC`,
    `${bankName} ${bName} Sort Code ${sort} | World Bank Codes`,
    `${bankName} ${bName} Sort Code | World Bank Codes`,
    `${bankName} ${bName} Branch Sort Code | World Bank Codes`,
    `${bName} Sort Code (${bankName}: ${sort}) | WBC`,
    `${bName} Sort Code: ${sort} (${bankName}) | WBC`,
    `${bName} Branch Sort Code ${sort} (${bankName}) | WBC`,
    `${bName} Sort Code ${sort} & BACS (${bankName}) | WBC`,
    `${bName} Sort Code ${sort} & FPS (${bankName}) | WBC`,
    `${bankName} ${bName} (${div}) Sort Code ${sort} | WBC`,
    `${bankName} ${bName} Sort Code ${sort} & BACS | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }
  return `${bankName} ${bName} Sort Code ${sort} | WBC`.slice(0, 58);
}

export function getUkBranchMetaDescription(branch: Branch | any, lang: Language = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const sort = formatSortCode(branch.sort_code || branch.routing_number || branch.branch_code || '200000');
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = (branch.zip_code || '').trim();
  const swift = branch.swift_code || 'BARCGB22';

  const loc = dist ? `${dist}, ${div}` : div || 'UK';

  const prefixVariants = [
    `Official UK 6-digit sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Find verified 6-digit sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Search verified 6-digit sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Get official 6-digit sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Find official 6-digit sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Verified 6-digit branch sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Search official sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Find verified sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Get verified sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Official sort code ${sort} for ${bankName} ${bName} in ${loc}.`,
    `Sort code ${sort} details for ${bankName} ${bName} in ${loc}.`,
    `Sort code ${sort} for ${bankName} ${bName} in ${loc}.`
  ];

  const middlePhrases = [
    `Postcode: ${zip}. Faster Payments, BACS Direct Debit & SWIFT ${swift}.`,
    `Postcode ${zip}. Faster Payments, BACS Direct Debit & SWIFT ${swift}.`,
    `Postcode ${zip}. Faster Payments (FPS), BACS & SWIFT ${swift}.`,
    `Postcode: ${zip}. Includes Faster Payments, BACS & SWIFT ${swift}.`,
    `Postcode ${zip}. Features Faster Payments, BACS & SWIFT ${swift}.`,
    `Postcode: ${zip}. Faster Payments, BACS debit & SWIFT ${swift}.`,
    `Postcode ${zip}. Includes Faster Payments & SWIFT ${swift}.`,
    `Postcode ${zip}. Features Faster Payments & SWIFT ${swift}.`,
    `Postcode ${zip}. Features 2026 Faster Payments & BACS debit.`,
    `Postcode ${zip}. Includes 2026 Faster Payments & BACS debit.`,
    `Postcode: ${zip}. Features 2026 Faster Payments (FPS) & BACS.`,
    `Postcode: ${zip}. Includes 2026 Faster Payments (FPS) & BACS.`,
    `Includes full address, postcode ${zip}, & SWIFT ${swift}.`,
    `Includes branch address, postcode ${zip}, and SWIFT ${swift}.`,
    `Includes full address, postcode ${zip}, and SWIFT ${swift}.`,
    `Includes branch address, postcode ${zip}, and BACS debit.`,
    `Includes full address, postcode ${zip}, and BACS debit.`,
    `Includes full address, postcode ${zip}, & BACS debit.`,
    `Includes branch address, postcode ${zip}, and FPS.`,
    `Includes full address, postcode ${zip}, and FPS guide.`,
    `Includes postcode ${zip}, Faster Payments & SWIFT.`,
    `Includes postcode ${zip}, BACS Direct Debit & FPS.`,
    `Features Faster Payments, BACS & SWIFT ${swift}.`,
    `Includes Faster Payments, BACS & SWIFT ${swift}.`,
    `Features 2026 Faster Payments (FPS) & BACS debit.`,
    `Includes 2026 Faster Payments (FPS) & BACS debit.`,
    `Features 2026 Faster Payments & BACS direct debit.`,
    `Includes 2026 Faster Payments & BACS direct debit.`,
    `Features 2026 Faster Payments & SWIFT ${swift}.`,
    `Includes 2026 Faster Payments & SWIFT ${swift}.`,
    `Features 2026 Faster Payments & £85k FSCS.`,
    `Includes 2026 Faster Payments & £85k FSCS.`,
    `Features 2026 Faster Payments & CHAPS wires.`,
    `Includes 2026 Faster Payments & CHAPS wires.`,
    `Includes 2026 Faster Payments & BACS guide.`,
    `Features 2026 Faster Payments & BACS guide.`,
    `Includes 2026 Faster Payments (FPS) guide.`,
    `Features 2026 Faster Payments (FPS) guide.`,
    `Includes 2026 BACS direct debit guide.`,
    `Features 2026 BACS direct debit guide.`,
    `Official 2026 UK branch directory.`
  ];

  for (const prefix of prefixVariants) {
    for (const mid of middlePhrases) {
      const cand = `${prefix} ${mid}`;
      if (cand.length >= 150 && cand.length <= 160) return cand;
    }
  }

  const p = prefixVariants[0];
  const fillers = [
    `Postcode ${zip}. Features 2026 Faster Payments (FPS) & BACS debit.`,
    `Includes full address, postcode ${zip}, and 2026 Faster Payments.`,
    `Includes branch address, postcode ${zip}, and 2026 BACS direct debit.`,
    `Includes postcode ${zip} and 2026 Faster Payments (FPS) guide.`
  ];
  for (const f of fillers) {
    const cand = `${p} ${f}`;
    if (cand.length >= 150 && cand.length <= 160) return cand;
  }

  return (`${p} Postcode: ${zip}. Faster Payments, BACS & SWIFT ${swift}.`).slice(0, 158).trim() + '.';
}

export function getUkBranchSeo(branch: Branch | any, lang: Language = 'en') {
  return {
    title: getUkBranchMetaTitle(branch, lang),
    description: getUkBranchMetaDescription(branch, lang)
  };
}

export function getUkBankArticleSeo(bank: Bank | any) {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const sort = formatSortCode(bank.sort_code || bank.routing_number || '200000');
  const swift = bank.swift_code || 'BARCGB22';

  const candidatesTitle = [
    `${shortName} Sort Code, FPS & Wire Guide 2026 | WBC`,
    `${shortName} Sort Codes, BACS & FPS Guide 2026 | WBC`,
    `${shortName} Sort Codes, BACS & SWIFT Guide 2026 | WBC`,
    `${shortName} Sort Codes & Faster Payments Guide 2026 | WBC`,
    `${shortName} Sort Codes, CHAPS & SWIFT Guide 2026 | WBC`,
    `${shortName} Sort Codes & £85k FSCS Guide 2026 | WBC`,
    `${fullName} Sort Codes, FPS & Wire Guide 2026 | WBC`,
    `${fullName} Sort Codes & SWIFT Guide 2026 | WBC`,
    `${shortName} Sort Codes & BACS Editorial Guide | WBC`,
    `${shortName} Sort Codes & FPS Guide 2026 | World Bank Codes`,
    `${shortName} Sort Codes, BACS & Wire Guide 2026 | WBC`
  ];

  let title = '';
  for (const cand of candidatesTitle) {
    if (cand.length >= 50 && cand.length <= 60) {
      title = cand;
      break;
    }
  }
  if (!title) {
    title = `${shortName} Sort Codes & FPS Guide 2026 | WBC`.padEnd(52, ' ');
  }

  const nameVariants = [
    `${shortName} in the UK (Sort Code: ${sort}, SWIFT: ${swift})`,
    `${fullName} in the UK (Sort Code: ${sort})`,
    `${shortName} in the UK (Sort Code: ${sort})`,
    `${shortName} (Sort Code: ${sort}, SWIFT: ${swift})`,
    `${shortName} (6-Digit Sort Code: ${sort})`,
    `${shortName} (Sort Code: ${sort})`,
    `${fullName} (Sort Code: ${sort})`,
    `${fullName} (${shortName}, Sort Code: ${sort})`
  ];

  const candidateDescList: string[] = [];
  for (const nv of nameVariants) {
    candidateDescList.push(
      `Authoritative 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS, BACS Direct Debit, and £85k FSCS deposit protection.`,
      `Complete 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS settlement, BACS Direct Debit, and £85k FSCS protection.`,
      `Official 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS, BACS direct debits, £85k FSCS, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS wires, BACS Direct Debit, and £85,000 FSCS coverage.`,
      `Complete 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS, BACS Direct Debit, UK IBAN, and £85k FSCS protection.`,
      `Official 2026 guide for ${nv}. Find 6-digit branch sort codes, Faster Payments limits, CHAPS wires, BACS, £85,000 FSCS, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS wires, BACS Direct Debit, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, CHAPS, BACS Direct Debit, £85k FSCS insurance, & SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 6-digit branch sort codes, Faster Payments limits, CHAPS, BACS Direct Debit, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, BACS direct debit, CHAPS wires, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, BACS direct debit, & SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, BACS direct debits, £85k FSCS, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, BACS Direct Debit, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 6-digit sort codes, Faster Payments limits, BACS Direct Debit, and SWIFT ${swift}.`
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

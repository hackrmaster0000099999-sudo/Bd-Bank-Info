import { Bank, Branch, Language } from '../../types';

function cleanBankName(rawBank: any): string {
  if (!rawBank) return 'Bank';
  if (rawBank.bank_short_name) return rawBank.bank_short_name;
  if (rawBank.short_name) return rawBank.short_name;
  let name = (rawBank.name || rawBank.bank_name || 'Bank');
  name = name.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').replace(/\s+/g, ' ').trim();
  return name;
}

function cleanBranchName(rawBranch: string, bankShortName: string = ''): string {
  let name = (rawBranch || 'Branch').replace(/\s+Branch\s*$/i, '').trim();
  if (bankShortName && name.toLowerCase().startsWith(bankShortName.toLowerCase())) {
    name = name.slice(bankShortName.length).trim();
  }
  return name || 'Main';
}

export function getCanadaHomeSeo(lang: Language = 'en') {
  if (lang === 'bn') {
    return {
      title: 'কানাডা ব্যাংক ট্রানজিট নম্বর ও EFT রাউটিং ডিরেক্টরি ২০২৬ | WBC',
      description: 'কানাডার সকল ব্যাংকের (RBC, TD, Scotiabank, BMO, CIBC) ৫-ডিজিট ট্রানজিট, ৩-ডিজিট প্রতিষ্ঠান কোড, ৯-সংখ্যার EFT রাউটিং ও সুইফট কোড নির্দেশিকা ২০২৬।'
    };
  }
  if (lang === 'hi') {
    return {
      title: 'कनाडा बैंक ट्रांजिट नंबर एवं EFT राउटिंग डायरेक्टरी 2026 | WBC',
      description: 'कनाडा के सभी बैंकों के 5-अंकीय ट्रांजिट नंबर, 3-अंकीय संस्थान कोड, 9-अंकीय EFT राउटिंग और स्विफ्ट कोड खोजें। Payments Canada 2026 निर्देशिका।'
    };
  }
  if (lang === 'ru') {
    return {
      title: 'Транзитные номера и банковские коды Канады 2026 | WBC',
      description: 'Поиск 5-значных номеров Transit, 3-значных кодов учреждений, 9-значных кодов EFT и SWIFT для 1,100+ отделений банков Канады. Справочник 2026.'
    };
  }
  return {
    title: 'Canada Bank Transit Numbers & EFT Code Directory 2026 | WBC',
    description: 'Find verified 5-digit Canadian transit numbers, 3-digit institution codes, 9-digit EFT routing & SWIFT for 1,100+ bank branches across Canada. Official 2026.'
  };
}

export function getCanadaBankMetaTitle(bank: Bank | any, lang: Language = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const inst = bank.institution_number || bank.bank_code || '003';
  const swift = bank.swift_code || 'ROYCCAT2';
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').trim();

  const candidates = [
    `${shortName} Transit Numbers, Inst ${inst} & SWIFT | WBC`,
    `${shortName} Transit, Inst ${inst} & 9-Digit EFT | WBC`,
    `${shortName} Transit Numbers & Inst ${inst} Directory | WBC`,
    `${shortName} Transit Numbers, Inst ${inst} & EFT Guide | WBC`,
    `${shortName} Transit Numbers & SWIFT ${swift} | WBC`,
    `${shortName} Transit Numbers & Institution ${inst} | WBC`,
    `${fullName} Transit & Inst ${inst} Directory | WBC`,
    `${fullName} Transit Numbers & SWIFT Directory | WBC`,
    `${shortName} Transit Numbers & Inst ${inst} | World Bank Codes`,
    `${shortName} Transit Numbers & Branches | World Bank Codes`,
    `${shortName} Transit, Inst ${inst} & SWIFT Directory | WBC`,
    `${shortName} Transit Numbers (${inst}) & Branches | WBC`,
    `${shortName} Transit, Inst ${inst} & Direct Deposit | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }
  return `${fullName} Transit Numbers & Code ${inst} | WBC`.slice(0, 58);
}

export function getCanadaBankMetaDescription(bank: Bank, lang: Language = 'en'): string {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').trim();
  const inst = bank.institution_number || bank.bank_code || '003';
  const swift = bank.swift_code || 'ROYCCAT2';

  const nameVariants = [
    `${shortName} (${fullName})`,
    fullName,
    `${shortName} Canada`,
    shortName
  ];
  const candidates: string[] = [];

  for (const n of nameVariants) {
    candidates.push(
      `Search verified 5-digit branch transit numbers, institution code ${inst}, 9-digit EFT routing, and SWIFT ${swift} for ${n} across Canada. Official 2026 guide.`,
      `Find official 5-digit transit numbers, institution code ${inst}, 9-digit EFT direct deposit, and SWIFT ${swift} for ${n} Canada. Features 2026 Interac limits.`,
      `Search official 5-digit branch transit numbers, 3-digit institution code ${inst}, 9-digit EFT routing, and SWIFT ${swift} for ${n}. 2026 CDIC protected guide.`,
      `Find verified 5-digit transit numbers, institution code ${inst}, 9-digit EFT routing, and SWIFT ${swift} for ${n} Canada. Features 2026 CRA payroll deposit.`,
      `Search verified 5-digit transit numbers, institution code ${inst}, 9-digit EFT direct deposit, and SWIFT ${swift} for ${n}. Payments Canada 2026 directory.`,
      `Search official 5-digit transit numbers, institution code ${inst}, 9-digit EFT routing format, and SWIFT ${swift} for ${n}. Payments Canada 2026 directory.`,
      `Find verified 5-digit transit numbers, institution code ${inst}, 9-digit EFT routing, & SWIFT ${swift} for ${n} Canada. Includes 2026 direct deposit guide.`,
      `Search verified 5-digit branch transit numbers, institution code ${inst}, and SWIFT ${swift} for ${n}. Includes 9-digit EFT direct deposit & Interac guide.`,
      `Find official 5-digit transit numbers, institution code ${inst}, and SWIFT ${swift} for ${n}. Features 2026 9-digit EFT direct deposit & CDIC info.`,
      `Search verified 5-digit branch transit numbers, institution ${inst}, and SWIFT ${swift} for ${n}. Official Payments Canada 2026 EFT routing directory.`
    );
  }

  for (const cand of candidates) {
    if (cand.length >= 150 && cand.length <= 160) return cand;
  }
  return candidates[0].slice(0, 158).trim() + '.';
}

export function getCanadaBankSeo(bank: Bank | any, lang: Language = 'en') {
  return {
    title: getCanadaBankMetaTitle(bank, lang),
    description: getCanadaBankMetaDescription(bank, lang)
  };
}

export function getCanadaBranchMetaTitle(branch: Branch | any, lang: Language = 'en'): string {
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const transit = branch.transit_number || branch.branch_code || '10101';
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const provAbbr = div === 'Ontario' ? 'ON' : div === 'Quebec' ? 'QC' : div === 'British Columbia' ? 'BC' : div === 'Alberta' ? 'AB' : div === 'Manitoba' ? 'MB' : div === 'Saskatchewan' ? 'SK' : div === 'Nova Scotia' ? 'NS' : div === 'New Brunswick' ? 'NB' : div === 'Newfoundland and Labrador' ? 'NL' : div === 'Prince Edward Island' ? 'PE' : div;

  const candidates = [
    `${bankName} ${bName} Transit ${transit} & EFT | WBC`,
    `${bankName} ${bName} Transit: ${transit} - ${provAbbr} | WBC`,
    `${bankName} ${bName} Transit (${transit}) - ${provAbbr} | WBC`,
    `${bankName} ${bName} Transit Code ${transit} | WBC`,
    `${bankName} ${bName} Transit: ${transit} & SWIFT | WBC`,
    `${bankName} ${bName} (${provAbbr}) Transit: ${transit} | WBC`,
    `${bankName} ${bName} Transit ${transit} (${dist}) | WBC`,
    `${bankName} ${bName} Branch Transit ${transit} | WBC`,
    `${bankName} ${bName} Branch Transit: ${transit} | WBC`,
    `${bankName} ${bName} Transit ${transit} | World Bank Codes`,
    `${bankName} ${bName} Transit Code | World Bank Codes`,
    `${bankName} ${bName} Branch Transit | World Bank Codes`,
    `${bName} Transit Code (${bankName}: ${transit}) | WBC`,
    `${bName} Transit: ${transit} (${bankName}, ${provAbbr}) | WBC`,
    `${bName} Branch Transit Code (${bankName}) | WBC`,
    `${bName} Transit ${transit} & EFT (${bankName}) | WBC`,
    `${bName} Transit ${transit} & SWIFT (${bankName}) | WBC`,
    `${bankName} ${bName} (${dist}) Transit: ${transit} | WBC`,
    `${bankName} ${bName} Transit ${transit} & Routing | WBC`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60) return cand;
  }
  return `${bankName} ${bName} Transit ${transit} | WBC`.slice(0, 58);
}

export function getCanadaBranchMetaDescription(branch: Branch | any, lang: Language = 'en'): string {
  const transit = branch.transit_number || branch.branch_code || '10101';
  const inst = branch.institution_number || '003';
  const eft = branch.routing_number || `0${inst}${transit}`;
  const bankName = branch.bank_short_name || cleanBankName(branch);
  const bName = cleanBranchName(branch.name, bankName);
  const dist = (branch.district || '').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const div = (branch.division || '').trim();
  const zip = branch.zip_code || '';
  const swift = branch.swift_code || 'ROYCCAT2';

  const loc = dist ? `${dist}, ${div}` : div || 'Canada';

  const prefixVariants = [
    `Official Payments Canada branch transit ${transit}, institution ${inst}, & 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Find verified 5-digit transit ${transit}, 3-digit institution ${inst}, and 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Search verified 5-digit transit ${transit}, institution code ${inst}, and 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Get official 5-digit transit ${transit}, institution code ${inst}, and 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Find verified 5-digit transit ${transit}, institution ${inst}, and 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Search official branch transit ${transit}, institution ${inst}, and 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Get verified 5-digit transit ${transit}, institution ${inst}, & 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Find verified transit ${transit}, institution ${inst}, and 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Search verified transit ${transit}, institution ${inst}, & 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Get verified transit ${transit}, institution ${inst}, & 9-digit EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Find official transit ${transit}, inst ${inst}, & EFT ${eft} for ${bankName} ${bName} in ${loc}.`,
    `Transit ${transit}, inst ${inst}, & EFT ${eft} for ${bankName} ${bName} in ${loc}.`
  ];

  const middlePhrases = [
    `Postal code: ${zip}. Direct deposit, CRA refund & SWIFT ${swift}.`,
    `Postal: ${zip}. Direct deposit, CRA refund & SWIFT ${swift}.`,
    `Postal code ${zip}. Features 2026 CRA direct deposit & SWIFT.`,
    `Postal code ${zip}. Includes 2026 direct deposit & SWIFT guide.`,
    `Postal code: ${zip}. Features 2026 CRA payroll deposit & SWIFT.`,
    `Postal code: ${zip}. Includes 2026 CRA direct deposit & SWIFT.`,
    `Postal: ${zip}. Includes CRA direct deposit & SWIFT ${swift}.`,
    `Includes full address, postal code ${zip}, and SWIFT ${swift}.`,
    `Includes branch address, postal code ${zip}, and SWIFT ${swift}.`,
    `Includes complete address, postal code ${zip}, & SWIFT ${swift}.`,
    `Includes full address, postal code ${zip}, and CRA deposit.`,
    `Includes branch address, postal code ${zip}, & CRA deposit.`,
    `Includes complete address, postal code ${zip}, & CRA deposit.`,
    `Includes full address, postal code ${zip}, and direct deposit.`,
    `Includes branch address, postal code ${zip}, & direct deposit.`,
    `Includes complete address, postal ${zip}, and direct deposit.`,
    `Includes postal code ${zip}, direct deposit, and SWIFT.`,
    `Includes postal ${zip}, 2026 CRA direct deposit, & SWIFT.`,
    `Includes postal ${zip}, direct deposit, and SWIFT ${swift}.`,
    `Features 2026 CRA payroll deposit and SWIFT ${swift}.`,
    `Includes 2026 CRA direct deposit and SWIFT ${swift}.`,
    `Features 2026 direct deposit and SWIFT wire guide.`,
    `Includes 2026 CRA direct deposit & Interac guide.`,
    `Features 2026 direct deposit & Interac e-Transfer.`,
    `Includes 2026 payroll direct deposit & SWIFT.`,
    `Features 2026 direct deposit and CDIC insurance.`,
    `Includes 2026 CRA direct deposit & CDIC guide.`,
    `Includes 2026 direct deposit & SWIFT wire info.`,
    `Includes 2026 CRA payroll deposit & wire guide.`,
    `Includes 2026 CRA direct deposit & wire info.`,
    `Features 2026 direct deposit and SWIFT info.`,
    `Includes 2026 direct deposit and SWIFT guide.`,
    `Includes 2026 CRA payroll & direct deposit.`,
    `Includes 2026 CRA direct deposit guide.`,
    `Features 2026 CRA direct deposit guide.`,
    `Includes 2026 direct deposit guide.`,
    `Features 2026 direct deposit guide.`,
    `Includes 2026 CRA payroll deposit.`,
    `Features 2026 CRA payroll guide.`,
    `Official 2026 branch directory.`
  ];

  for (const prefix of prefixVariants) {
    for (const mid of middlePhrases) {
      const cand = `${prefix} ${mid}`;
      if (cand.length >= 150 && cand.length <= 160) return cand;
    }
  }

  const p = prefixVariants[0];
  const fillers = [
    `Postal code ${zip}. Features 2026 CRA payroll & direct deposit.`,
    `Includes full address, postal code ${zip}, and 2026 direct deposit.`,
    `Includes branch address, postal code ${zip}, and 2026 CRA refund.`,
    `Includes postal code ${zip} and 2026 direct deposit guide.`
  ];
  for (const f of fillers) {
    const cand = `${p} ${f}`;
    if (cand.length >= 150 && cand.length <= 160) return cand;
  }

  return (`${p} Postal: ${zip}. Direct deposit, CRA refund & SWIFT ${swift}.`).slice(0, 158).trim() + '.';
}

export function getCanadaBranchSeo(branch: Branch | any, lang: Language = 'en') {
  return {
    title: getCanadaBranchMetaTitle(branch, lang),
    description: getCanadaBranchMetaDescription(branch, lang)
  };
}

export function getCanadaBankArticleSeo(bank: Bank | any) {
  const shortName = bank.short_name || cleanBankName(bank);
  const fullName = (bank.name || '').replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+Limited/gi, '').replace(/\s+Ltd/gi, '').trim();
  const inst = bank.institution_number || bank.bank_code || '003';
  const swift = bank.swift_code || 'ROYCCAT2';

  const candidatesTitle = [
    `${shortName} Transit, Inst ${inst} & EFT Guide 2026 | WBC`,
    `${shortName} Transit Numbers & Inst ${inst} Guide 2026 | WBC`,
    `${shortName} Transit, Inst ${inst} & SWIFT Guide 2026 | WBC`,
    `${shortName} Inst ${inst}, Transit & Interac Guide 2026 | WBC`,
    `${shortName} Transit, 9-Digit EFT & CDIC Guide 2026 | WBC`,
    `${shortName} Transit Numbers & Interac Guide 2026 | WBC`,
    `${fullName} Transit, Inst ${inst} & Wire Guide 2026 | WBC`,
    `${fullName} Transit Numbers & SWIFT Guide 2026 | WBC`,
    `${shortName} Transit & Inst ${inst} Editorial Guide | WBC`,
    `${shortName} Transit & EFT Guide 2026 | World Bank Codes`,
    `${shortName} Transit, Inst ${inst} & Wire Guide 2026 | WBC`
  ];

  let title = '';
  for (const cand of candidatesTitle) {
    if (cand.length >= 50 && cand.length <= 60) {
      title = cand;
      break;
    }
  }
  if (!title) {
    title = `${shortName} Transit & EFT Guide 2026 | WBC`.padEnd(52, ' ');
  }

  const nameVariants = [
    `${shortName} in Canada (Inst: ${inst}, SWIFT: ${swift})`,
    `${fullName} in Canada (Institution: ${inst})`,
    `${shortName} in Canada (Institution: ${inst})`,
    `${shortName} (Inst: ${inst}, SWIFT: ${swift})`,
    `${shortName} (Institution Number: ${inst})`,
    `${shortName} (Institution: ${inst})`,
    `${fullName} (Institution: ${inst})`,
    `${fullName} (${shortName}, Institution: ${inst})`
  ];

  const candidateDescList: string[] = [];
  for (const nv of nameVariants) {
    candidateDescList.push(
      `Official 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT routing, Interac limits, CDIC $100k, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT routing, Interac limits, CDIC protection, & SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT direct deposit, Interac limits, CDIC, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit, 9-digit EFT routing, Interac limits, CDIC guarantee, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT direct deposit, CDIC $100,000, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 3-digit institution code, 5-digit branch transit, 9-digit EFT routing, Interac e-Transfer, CDIC, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT routing, Interac e-Transfer, & SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT routing, Interac limits, CDIC insurance, & SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 3-digit institution code, 5-digit branch transit, 9-digit EFT routing format, Interac limits, and SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 3-digit institution number, 5-digit branch transit, 9-digit direct deposit EFT routing, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 3-digit institution number, 5-digit transit numbers, 9-digit EFT direct deposit, & SWIFT ${swift}.`,
      `Official 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit, 9-digit direct deposit EFT routing, Interac limits, and SWIFT ${swift}.`,
      `Complete 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT routing, Interac limits, and SWIFT ${swift}.`,
      `Authoritative 2026 guide for ${nv}. Find 3-digit institution code, 5-digit transit numbers, 9-digit EFT routing, Interac limits, and SWIFT ${swift}.`
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

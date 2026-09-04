import { Bank, Branch, Language } from '../../types';

export function getRussiaBankSeo(bank: Bank, lang: Language = 'en') {
  const isRu = lang === 'ru';
  const isBn = lang === 'bn';
  const name = isRu ? (bank.name_ru || bank.name) : isBn ? (bank.name_bn || bank.name) : bank.name;
  const shortName = bank.short_name ? `(${bank.short_name})` : '';

  if (isRu) {
    return {
      title: `${name} ${shortName} БИК, Корр. счет, ИНН и отделения по регионам России 2026 | World Bank Codes`,
      description: `Официальный справочник ЦБ РФ для банка ${name}: список всех отделений, БИК (${bank.bik_code || 'все филиалы'}), корреспондентские счета, ИНН, КПП, SWIFT/BIC и адрес головного офиса (${bank.head_office || ''}). Актуально 2026.`
    };
  }

  if (isBn) {
    return {
      title: `${name} ${shortName} রাশিয়ার ব্যাংকের BIK কোড, করসপন্ডেন্ট একাউন্ট ও ব্রাঞ্চ লিস্ট ২০২৬ | World Bank Codes`,
      description: `রাশিয়ান ব্যাংক ${name}-এর সকল শাখার সেন্ট্রাল ব্যাংক অফ রাশিয়া অনুমোদিত ৯-সংখ্যার BIK কোড, করসপন্ডেন্ট একাউন্ট, INN, KPP, সুইফট কোড ও পূর্ণাঙ্গ ঠিকানা ২০২৬।`
    };
  }

  return {
    title: `${bank.name} ${shortName} All Branches BIK, Corr Accounts, INN & SWIFT Codes 2026 | World Bank Codes`,
    description: `Official Central Bank of Russia directory for ${bank.name}: Complete 9-digit BIK codes, correspondent accounts, INN, KPP, SWIFT/BIC codes, and regional branch addresses across Russia. Verified for 2026.`
  };
}

export function getRussiaBranchSeo(branch: Branch, lang: Language = 'en') {
  const isRu = lang === 'ru';
  const isBn = lang === 'bn';
  const branchName = isRu ? (branch.name_ru || branch.name) : isBn ? (branch.name_bn || branch.name) : branch.name;
  const bankTitle = isRu ? (branch.bank_name_ru || branch.bank_name) : isBn ? (branch.bank_name_bn || branch.bank_name) : branch.bank_name;
  const bik = branch.bik_code || branch.routing_number;

  if (isRu) {
    return {
      title: `${bankTitle} (${branchName}) БИК: ${bik}, Корр. счет: ${branch.corr_account || 'N/A'}, ИНН | ${branch.district || branch.division} | World Bank Codes`,
      description: `Официальные банковские реквизиты: БИК ${bik}, Корр. счет ${branch.corr_account || 'N/A'}, ИНН ${branch.inn || 'N/A'}, КПП ${branch.kpp || 'N/A'}, SWIFT: ${branch.swift_code || 'N/A'} для ${branch.bank_name}, отделение ${branch.name}, город ${branch.district}, ${branch.division}, Россия. Проверено ЦБ РФ 2026.`
    };
  }

  if (isBn) {
    return {
      title: `${bankTitle} (${branchName} শাখা) BIK: ${bik}, করসপন্ডেন্ট একাউন্ট ও ঠিকানা | ${branch.district || branch.division} | World Bank Codes`,
      description: `${bankTitle}-এর ${branchName} শাখার (শহর: ${branch.district}, ${branch.division}, রাশিয়া) ৯-ডিজিট BIK কোড ${bik}, করসপন্ডেন্ট একাউন্ট ${branch.corr_account || 'N/A'}, INN: ${branch.inn || 'N/A'}, সুইফট কোড ${branch.swift_code || 'N/A'} ও সঠিক ঠিকানা।`
    };
  }

  return {
    title: `${branch.bank_name} (${branch.name}) BIK: ${bik}, Corr Account: ${branch.corr_account || 'N/A'}, INN & SWIFT | ${branch.district} | World Bank Codes`,
    description: `Official Central Bank of Russia details for ${branch.bank_name} (${branch.name} branch, ${branch.district}, ${branch.division}, Russia): 9-digit BIK Code ${bik}, Corr. Account ${branch.corr_account || 'N/A'}, INN ${branch.inn || 'N/A'}, SWIFT: ${branch.swift_code || 'N/A'}. 100% verified 2026 records.`
  };
}

export function getRussiaHomeSeo(lang: Language = 'en') {
  const isRu = lang === 'ru';
  const isBn = lang === 'bn';

  if (isRu) {
    return {
      title: 'Справочник БИК кодов, Корреспондентских счетов и банков РФ 2026 | World Bank Codes',
      description: 'Официальный актуальный справочник БИК (Банковский идентификационный код), корреспондентских счетов, ИНН, КПП и SWIFT/BIC кодов всех действующих банков и филиалов Российской Федерации. База ЦБ РФ 2026.'
    };
  }

  if (isBn) {
    return {
      title: 'রাশিয়ান ব্যাংক সমূহের BIK কোড, করসপন্ডেন্ট একাউন্ট ও সুইফট ডিরেক্টরি ২০২৬ | World Bank Codes',
      description: 'সেন্ট্রাল ব্যাংক অফ রাশিয়া (CBR) অনুমোদিত রাশিয়ার সকল ব্যাংকের ৯-ডিজিটের BIK কোড, করসপন্ডেন্ট একাউন্ট, INN, KPP ও সুইফট কোডের পূর্ণাঙ্গ ডিরেক্টরি ২০২৬।'
    };
  }

  return {
    title: 'Russian Bank BIK Codes, Correspondent Accounts & SWIFT Directory 2026 | World Bank Codes',
    description: 'Find verified 9-digit BIK codes, correspondent accounts, INN, KPP, and SWIFT codes for all registered commercial banks in the Russian Federation. Central Bank of Russia verified 2026.'
  };
}

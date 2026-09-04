// Germany Banking SEO Metadata & Rich Snippets Configuration
// Multilingual SEO for English, Bengali (বাংলা), Hindi (हिन्दी), and Russian (Русский)

export const GERMANY_SEO = {
  countryName: 'Germany',
  countryNameBn: 'জার্মানি',
  countryNameHi: 'जर्मनी',
  countryNameRu: 'Германия',
  codeName: 'BLZ (Bankleitzahl) & IBAN',
  codeNameBn: 'বিএলজেড (BLZ) ও জার্মান IBAN',
  codeNameHi: 'बीएलजेड (BLZ) व जर्मन IBAN',
  codeNameRu: 'BLZ (Банковский код) и IBAN',
  metaTitle: 'Germany Bankleitzahl (BLZ) & IBAN Finder | SWIFT, BIC Codes & Branches',
  metaTitleBn: 'জার্মানি ব্যাংক বিএলজেড (BLZ) ও IBAN কোড অনুসন্ধান | ডয়চে ব্যাংক ও স্পারকাশে শাখা',
  metaTitleHi: 'जर्मनी बैंक BLZ व IBAN कोड खोजें | ड्यूश बैंक, कॉमर्जबैंक व स्पार्कासे शाखाएं',
  metaTitleRu: 'Поиск кодов BLZ и IBAN банков Германии | SWIFT, БИК и филиалы в ФРГ',
  metaDescription: 'Find verified 8-digit Bankleitzahl (BLZ), 22-character German IBAN, SWIFT/BIC codes, and branch routing details for 1,400+ German bank branches across Berlin, Frankfurt, Munich, Hamburg, and Cologne.',
  metaDescriptionBn: 'বার্লিন, ফ্রাঙ্কফুর্ট, মিউনিখ, হামবুর্গ ও কোলনসহ জার্মানির ১,৪০০+ ব্যাংক শাখার ভেরিফায়েড ৮-সংখ্যার BLZ, ২২-অক্ষরের জার্মান IBAN ও SWIFT কোড তাৎক্ষণিক খুঁজুন।',
  metaDescriptionHi: 'बर्लिन, फ्रैंकफर्ट, म्यूनिख व हैम्बर्ग सहित जर्मनी के 1400+ बैंक शाखाओं के 8-अंकीय BLZ, 22-अक्षरीय IBAN व SWIFT कोड खोजें।',
  metaDescriptionRu: 'Поиск проверенных кодов BLZ, IBAN (DEkk), SWIFT/BIC и адресов более 1400 отделений банков в Берлине, Франкфурте, Мюнхене, Гамбурге и Кёльне.',
  keywords: [
    'Germany BLZ Finder',
    'Bankleitzahl Germany',
    'German IBAN validator',
    'Deutsche Bank BLZ',
    'Commerzbank BLZ code',
    'Sparkasse Bankleitzahl',
    'Frankfurt bank routing',
    'Berlin bank branches BLZ',
    'Munich bank SWIFT codes',
    'SEPA instant transfer Germany',
    'জার্মানি ব্যাংক কোড BLZ',
    'জার্মান আইবান চেকার'
  ],
  popularCities: [
    'Berlin',
    'Frankfurt am Main',
    'Munich (München)',
    'Hamburg',
    'Cologne (Köln)',
    'Stuttgart',
    'Düsseldorf',
    'Leipzig',
    'Dortmund',
    'Essen',
    'Bremen',
    'Dresden',
    'Hanover',
    'Nuremberg',
    'Bonn'
  ]
};

export function getGermanyBankSeo(bank: any, lang: string = 'en') {
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';
  const isRu = lang === 'ru';
  const name = isBn ? (bank.name_bn || bank.name) : isHi ? (bank.name_hi || bank.name) : isRu ? (bank.name_ru || bank.name) : bank.name;
  return {
    title: `${name} (${bank.short_name}) Germany BLZ, IBAN & SWIFT Code Directory | World Bank Codes`,
    description: isBn
      ? `${name}-এর জার্মানি দেশব্যাপী সকল শাখার ৮ ডিজিটের BLZ কোড (${bank.blz_code || bank.bank_code}), ২২ অক্ষরের IBAN স্ট্রাকচার, সুইফট কোড ও শাখা ঠিকানা খুঁজুন।`
      : isHi
      ? `${name} के जर्मनी स्थित सभी शाखाओं के 8-अंकीय BLZ कोड (${bank.blz_code || bank.bank_code}), IBAN, स्विफ्ट कोड और पते देखें।`
      : isRu
      ? `Все банковские коды BLZ (${bank.blz_code || bank.bank_code}), формат IBAN, адреса отделений и SWIFT коды ${name} в Германии (Bundesbank верифицировано 2026).`
      : `Search all ${bank.name} (${bank.short_name}) branch Bankleitzahl (BLZ: ${bank.blz_code || bank.bank_code}), 22-digit German IBAN format, SWIFT/BIC codes, and branch postal codes in Germany.`
  };
}

export function getGermanyBranchSeo(branch: any, lang: string = 'en') {
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';
  const isRu = lang === 'ru';
  const bName = isBn ? (branch.name_bn || branch.name) : isHi ? (branch.name_hi || branch.name) : isRu ? (branch.name_ru || branch.name) : branch.name;
  const bankName = isBn ? (branch.bank_name_bn || branch.bank_name) : isHi ? (branch.bank_name_hi || branch.bank_name) : isRu ? (branch.bank_name_ru || branch.bank_name) : branch.bank_name;
  const blz = branch.blz || branch.routing_number;
  return {
    title: `${bankName} (${bName}) BLZ: ${blz}, IBAN & SWIFT | World Bank Codes`,
    description: isBn
      ? `${bankName} (${bName}, ${branch.district}, ${branch.division})-এর অফিসিয়াল জার্মান BLZ: ${blz}, IBAN: ${branch.iban_sample || 'DE...'}, সুইফট কোড: ${branch.swift_code || 'N/A'}, পোস্টকোড: ${branch.zip_code} ও পূর্ণ ঠিকানা।`
      : isHi
      ? `${bankName} (${bName}, ${branch.division}) का आधिकारिक जर्मन BLZ कोड: ${blz}, IBAN, स्विफ्ट कोड एवं डाक कोड।`
      : isRu
      ? `Официальный банковский код BLZ: ${blz}, IBAN: ${branch.iban_sample || 'DE...'}, SWIFT: ${branch.swift_code || 'N/A'} для ${bankName}, отделение ${bName}, ${branch.division}, Германия.`
      : `Official German BLZ (Bankleitzahl): ${blz}, Sample IBAN: ${branch.iban_sample || 'DE...'}, SWIFT/BIC: ${branch.swift_code || 'HO'} for ${branch.bank_name}, ${branch.name} in ${branch.district}, ${branch.division}, Germany ${branch.zip_code}.`
  };
}

export function getGermanyHomeSeo(lang: string = 'en') {
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';
  const isRu = lang === 'ru';
  return {
    title: isBn ? GERMANY_SEO.metaTitleBn : isHi ? GERMANY_SEO.metaTitleHi : isRu ? GERMANY_SEO.metaTitleRu : GERMANY_SEO.metaTitle,
    description: isBn ? GERMANY_SEO.metaDescriptionBn : isHi ? GERMANY_SEO.metaDescriptionHi : isRu ? GERMANY_SEO.metaDescriptionRu : GERMANY_SEO.metaDescription
  };
}

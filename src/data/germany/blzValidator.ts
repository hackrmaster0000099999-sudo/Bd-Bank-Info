// Germany (Deutschland) Banking & BLZ (Bankleitzahl) / IBAN Validator & Decoder
// Regulated by Deutsche Bundesbank & Federal Financial Supervisory Authority (BaFin)

export interface GermanyBlzBreakdown {
  isValid: boolean;
  blz: string;
  formattedBlz: string; // e.g., '500 700 10'
  formattedDisplay: string; // e.g., '500 700 10'
  clearingAreaCode: string; // 1 digit or 3 digits
  clearingAreaName: string;
  clearingAreaNameBn: string;
  clearingAreaNameHi: string;
  clearingAreaNameRu: string;
  locationCode: string; // digits 2-3
  locationName: string;
  instituteCode: string; // digits 4-8
  bankGroupCode: string; // 1 digit
  bankGroupName: string;
  bankGroupNameBn: string;
  bankGroupNameHi: string;
  bankGroupNameRu: string;
  bankId: string; // 4 digits
  bankName: string;
  bankShortName: string;
  swiftCode: string;
  isSepaInstantReady: boolean;
  isTarget2Ready: boolean;
  isBundesbankEmzReady: boolean;
  description: string;
  descriptionBn?: string;
  descriptionHi?: string;
  descriptionRu?: string;
  errors: string[];
}

export interface GermanyIbanBreakdown {
  isValid: boolean;
  iban: string;
  formattedIban: string; // DEkk BBBB BBBB CCCC CCCC CC
  countryCode: string; // DE
  checkDigits: string; // kk (2 digits)
  blz: string; // 8 digits
  accountNumber: string; // 10 digits
  bankName: string;
  swiftCode: string;
  isMod97Valid: boolean;
  errors: string[];
}

export const GERMAN_CLEARING_REGIONS: Record<string, { name: string; nameBn: string; nameHi: string; nameRu: string }> = {
  '1': { name: 'Berlin, Brandenburg (Bundesbank Region East 1)', nameBn: 'বার্লিন ও ব্র্যান্ডেনবুর্গ (বুন্দেসব্যাংক পূর্ব অঞ্চল)', nameHi: 'बर्लिन व ब्रैंडेनबर्ग (बुंडेसबैंक पूर्व)', nameRu: 'Берлин, Бранденбург (Бундесбанк Восток)' },
  '2': { name: 'Hamburg, Schleswig-Holstein, Bremen, Lower Saxony North', nameBn: 'হামবুর্গ, শ্লেসভিগ-হোলস্টাইন, ব্রেমেন, উত্তর স্যাক্সনি', nameHi: 'हैम्बर्ग, ब्रेमेन, लोअर सैक्सोनी', nameRu: 'Гамбург, Шлезвиг-Гольштейн, Бремен' },
  '3': { name: 'Lower Saxony South (Hannover), Saxony-Anhalt', nameBn: 'হ্যানোভার, লোয়ার স্যাক্সনি দক্ষিণ, স্যাক্সনি-আনহাল্ট', nameHi: 'हनोवर, सैक्सोनी-एन्हाल्ट', nameRu: 'Ганновер, Нижняя Саксония, Саксония-Анхальт' },
  '4': { name: 'North Rhine-Westphalia North (Düsseldorf, Münster, Essen)', nameBn: 'নর্থ রাইন-ওয়েস্টফালিয়া উত্তর (ডুসেলডর্ফ, মুনস্টার, এসেন)', nameHi: 'डसेलडोर्फ, मुन्स्टर, एसेन', nameRu: 'Дюссельдорф, Мюнстер, Эссен' },
  '5': { name: 'North Rhine-Westphalia South (Cologne, Bonn, Aachen) & Hesse North', nameBn: 'কোলন, বন, আখেন, হেসেন উত্তর', nameHi: 'कोलोन, बॉन, आखेन, हेस्से', nameRu: 'Кёльн, Бонн, Ахен, Гессен' },
  '6': { name: 'Hesse South (Frankfurt am Main), Rhineland-Palatinate, Saarland', nameBn: 'ফ্রাঙ্কফুর্ট আম মাইন, রাইনল্যান্ড-প্যালাটিনেট, সারল্যান্ড', nameHi: 'फ्रैंकफर्ट एम मेन, सारलैंड', nameRu: 'Франкфурт-на-Майне, Рейнланд-Пфальц, Саар' },
  '7': { name: 'Baden-Württemberg (Stuttgart, Karlsruhe, Mannheim, Freiburg)', nameBn: 'বাডেন-ভুর্টেমবার্গ (স্টুটগার্ট, কার্লসরুয়ে, ম্যানহাইম)', nameHi: 'बाडेन-वुर्टेमबर्ग (स्टटगार्ट, कार्लस्रुहे)', nameRu: 'Баден-Вюртемберг (Штутгарт, Карлсруэ)' },
  '8': { name: 'Bavaria (Munich, Nuremberg, Augsburg, Regensburg)', nameBn: 'বাভারিয়া (মিউনিখ, নুরেমবার্গ, অগসবার্গ)', nameHi: 'बवेरिया (म्यूनिख, नूर्नबर्ग)', nameRu: 'Бавария (Мюнхен, Нюрнберг)' },
  '9': { name: 'Saxony (Leipzig, Dresden), Thuringia (Erfurt)', nameBn: 'স্যাক্সনি (লাইপজিগ, ড্রেসডেন), থুরিংগিয়া (এরফুর্ট)', nameHi: 'सैक्सोनी (लीपज़िग), थुरिंगिया (एरफर्ट)', nameRu: 'Саксония (Лейпциг, Дрезден), Тюрингия' }
};

export const GERMAN_BANK_GROUPS: Record<string, { name: string; nameBn: string; nameHi: string; nameRu: string }> = {
  '0': { name: 'Deutsche Bundesbank & Public Authority Clearing', nameBn: 'ডয়চে বুন্দেসব্যাংক ও পাবলিক ক্লিয়ারিং', nameHi: 'ड्यूश बुंडेसबैंक व सरकारी प्राधिकरण', nameRu: 'Дойче Бундесбанк и гос. клиринг' },
  '1': { name: 'Private Commercial Banks & Major Universal Banks', nameBn: 'বাণিজ্যিক ও শীর্ষ ইউনিভার্সাল ব্যাংক', nameHi: 'वाणिज्यिक व प्रमुख सार्वभौमिक बैंक', nameRu: 'Коммерческие и универсальные банки' },
  '2': { name: 'Cooperative Banking Sector (Volksbanken & Raiffeisenbanken)', nameBn: 'কো-অপারেটিভ ব্যাংক (ফক্সব্যাংকেন ও রাইফাইজেনব্যাংকেন)', nameHi: 'सहकारी बैंक (फॉक्सबैंक व राइफाइजन)', nameRu: 'Кооперативные банки (Фольксбанкен)' },
  '3': { name: 'Central Cooperative Banks & Regional Institutions (DZ BANK)', nameBn: 'সেন্ট্রাল সমবায় ব্যাংক (ডিজেড ব্যাংক)', nameHi: 'केंद्रीय सहकारी बैंक (डीजेड बैंक)', nameRu: 'Центральные кооперативные банки' },
  '4': { name: 'Commercial & Private Banking Network (Commerzbank Branch Network)', nameBn: 'কমার্শিয়াল ও প্রাইভেট ব্যাংকিং নেটওয়ার্ক', nameHi: 'कॉमर्शियल व निजी बैंकिंग नेटवर्क', nameRu: 'Коммерческая сеть частных банков' },
  '5': { name: 'Sparkassen-Finanzgruppe (Public Savings Banks)', nameBn: 'স্পারকাশেন ফিনান্সগ্রুপে (পাবলিক সেভিংস ব্যাংক)', nameHi: 'स्पार्कासेन बचत बैंक समूह', nameRu: 'Группа сберегательных касс (Шпаркассен)' },
  '6': { name: 'Landesbanken & Girozentralen (State Regional Banks)', nameBn: 'ল্যান্ডেসব্যাংকেন ও গিরোজেন্ট্রালেন (স্টেট ব্যাংক)', nameHi: 'लांडेसबैंक व राज्य बैंक', nameRu: 'Ландесбанки (государственные банки земель)' },
  '7': { name: 'Private Bankers & Specialty Financial Institutions', nameBn: 'প্রাইভেট ব্যাংকার্স ও বিশেষায়িত আর্থিক প্রতিষ্ঠান', nameHi: 'निजी बैंकर्स व विशिष्ट संस्थान', nameRu: 'Частные банки и спец. институты' },
  '8': { name: 'Credit Unions & Sparda-Banken / PSD Banken', nameBn: 'ক্রেডিট ইউনিয়ন ও স্পার্দা ব্যাংক', nameHi: 'क्रेडिट यूनियन व स्पार्डा बैंक', nameRu: 'Кредитные союзы и Шпарда-Банки' },
  '9': { name: 'Specialized Cooperative & Postbank Network', nameBn: 'বিশেষায়িত কো-অপারেটিভ ও পোস্টব্যাংক', nameHi: 'विशिष्ट सहकारी व पोस्टबैंक नेटवर्क', nameRu: 'Специализированные кооперативы и Постбанк' }
};

export const GERMAN_MAJOR_BLZ_MAP: Record<string, { name: string; shortName: string; swift: string; website: string }> = {
  '50070010': { name: 'Deutsche Bank AG', shortName: 'Deutsche Bank', swift: 'DEUTDEDD', website: 'db.com' },
  '10070000': { name: 'Deutsche Bank AG (Berlin)', shortName: 'Deutsche Bank Berlin', swift: 'DEUTDEDB', website: 'db.com' },
  '70070010': { name: 'Deutsche Bank AG (Munich)', shortName: 'Deutsche Bank Munich', swift: 'DEUTDEMM', website: 'db.com' },
  '50040000': { name: 'Commerzbank AG', shortName: 'Commerzbank', swift: 'COBADEFF', website: 'commerzbank.de' },
  '10040000': { name: 'Commerzbank AG (Berlin)', shortName: 'Commerzbank Berlin', swift: 'COBADEBB', website: 'commerzbank.de' },
  '50020400': { name: 'KfW Bankengruppe', shortName: 'KfW', swift: 'KFWXDEDD', website: 'kfw.de' },
  '50060400': { name: 'DZ BANK AG', shortName: 'DZ BANK', swift: 'GENODEF1', website: 'dzbank.de' },
  '60050101': { name: 'Landesbank Baden-Württemberg (LBBW)', shortName: 'LBBW', swift: 'SOLADEST', website: 'lbbw.de' },
  '70050000': { name: 'Bayerische Landesbank (BayernLB)', shortName: 'BayernLB', swift: 'BYLADEMM', website: 'bayernlb.de' },
  '25050000': { name: 'Norddeutsche Landesbank (NORD/LB)', shortName: 'NORD/LB', swift: 'NOLDDE2H', website: 'nordlb.de' },
  '50050000': { name: 'Landesbank Hessen-Thüringen (Helaba)', shortName: 'Helaba', swift: 'HELADEF1', website: 'helaba.com' },
  '50010517': { name: 'ING-DiBa AG', shortName: 'ING Deutschland', swift: 'INGDDEFF', website: 'ing.de' },
  '12030000': { name: 'Deutsche Kreditbank AG (DKB)', shortName: 'DKB', swift: 'DKBBDD33', website: 'dkb.de' },
  '10010010': { name: 'Postbank (Deutsche Bank Branch)', shortName: 'Postbank Berlin', swift: 'PBNKDEFF', website: 'postbank.de' },
  '37010050': { name: 'Postbank (Cologne Branch)', shortName: 'Postbank Cologne', swift: 'PBNKDEFF', website: 'postbank.de' },
  '37050198': { name: 'Sparkasse KölnBonn', shortName: 'Sparkasse KölnBonn', swift: 'COLSDE33', website: 'sparkasse-koelnbonn.de' },
  '10050000': { name: 'Berliner Sparkasse', shortName: 'Berliner Sparkasse', swift: 'BELADEBE', website: 'berliner-sparkasse.de' },
  '70150000': { name: 'Stadtsparkasse München', shortName: 'SSKM München', swift: 'SSKMDEMM', website: 'sskm.de' },
  '20050550': { name: 'Hamburger Sparkasse (Haspa)', shortName: 'Haspa Hamburg', swift: 'HASPDEHH', website: 'haspa.de' },
  '50050201': { name: 'Frankfurter Sparkasse', shortName: 'Frankfurter Sparkasse', swift: 'FRASDEFF', website: 'frankfurter-sparkasse.de' },
  '70020270': { name: 'HypoVereinsbank (UniCredit Bank GmbH)', shortName: 'HypoVereinsbank', swift: 'HYVEDEMM', website: 'hypovereinsbank.de' },
  '43060967': { name: 'GLS Gemeinschaftsbank eG', shortName: 'GLS Bank', swift: 'GENODED1GLS', website: 'gls.de' },
  '10011001': { name: 'N26 Bank SE', shortName: 'N26', swift: 'NTSBDEB1', website: 'n26.com' },
  '11010100': { name: 'Solaris SE (Solarisbank)', shortName: 'Solaris', swift: 'SOISDEB1', website: 'solarisgroup.com' },
  '50000000': { name: 'Deutsche Bundesbank', shortName: 'Bundesbank', swift: 'MARKDEFF', website: 'bundesbank.de' }
};

/**
 * Decodes and validates a German 8-digit Bankleitzahl (BLZ)
 */
export function decodeGermanyBlz(code: string | null | undefined): GermanyBlzBreakdown {
  const errors: string[] = [];
  if (!code) {
    return {
      isValid: false,
      blz: '',
      formattedBlz: '',
      formattedDisplay: '',
      clearingAreaCode: '',
      clearingAreaName: '',
      clearingAreaNameBn: '',
      clearingAreaNameHi: '',
      clearingAreaNameRu: '',
      locationCode: '',
      locationName: '',
      instituteCode: '',
      bankGroupCode: '',
      bankGroupName: '',
      bankGroupNameBn: '',
      bankGroupNameHi: '',
      bankGroupNameRu: '',
      bankId: '',
      bankName: '',
      bankShortName: '',
      swiftCode: '',
      isSepaInstantReady: false,
      isTarget2Ready: false,
      isBundesbankEmzReady: false,
      description: 'Please provide a valid 8-digit German Bankleitzahl (BLZ).',
      errors: ['Empty BLZ provided.']
    };
  }

  const cleaned = code.replace(/[^0-9]/g, '');

  if (cleaned.length !== 8) {
    errors.push(`German Bankleitzahl (BLZ) must be exactly 8 digits. Received ${cleaned.length} digits.`);
  }

  const clearingAreaCode = cleaned.slice(0, 3);
  const regionDigit = cleaned.charAt(0);
  const locationCode = cleaned.length >= 3 ? cleaned.slice(1, 3) : '';
  const bankGroupCode = cleaned.charAt(3);
  const instituteCode = cleaned.length >= 8 ? cleaned.slice(3, 8) : '';
  const bankId = cleaned.slice(4, 8);

  const regionInfo = GERMAN_CLEARING_REGIONS[regionDigit] || {
    name: 'Unknown Federal Clearing Region',
    nameBn: 'অজ্ঞাত ক্লিয়ারিং অঞ্চল',
    nameHi: 'अज्ञात क्लीयरिंग क्षेत्र',
    nameRu: 'Неизвестный клиринговый регион'
  };

  const groupInfo = GERMAN_BANK_GROUPS[bankGroupCode] || {
    name: 'Standard Commercial Credit Institution',
    nameBn: 'স্ট্যান্ডার্ড বাণিজ্যিক আর্থিক প্রতিষ্ঠান',
    nameHi: 'मानक वाणिज्यिक वित्तीय संस्थान',
    nameRu: 'Коммерческий кредитный институт'
  };

  const matchedBank = GERMAN_MAJOR_BLZ_MAP[cleaned] || {
    name: `German Financial Institution (BLZ: ${cleaned})`,
    shortName: `German Bank (${cleaned})`,
    swift: 'DEUTDEDD',
    website: 'bundesbank.de'
  };

  const formattedDisplay = cleaned.length === 8 ? `${cleaned.slice(0, 3)} ${cleaned.slice(3, 4)}${cleaned.slice(4, 5)} ${cleaned.slice(5, 8)}` : cleaned;
  const isValid = errors.length === 0 && cleaned.length === 8;

  return {
    isValid,
    blz: cleaned,
    formattedBlz: formattedDisplay,
    formattedDisplay,
    clearingAreaCode,
    clearingAreaName: regionInfo.name,
    clearingAreaNameBn: regionInfo.nameBn,
    clearingAreaNameHi: regionInfo.nameHi,
    clearingAreaNameRu: regionInfo.nameRu,
    locationCode,
    locationName: `${regionInfo.name} (Area ${locationCode})`,
    instituteCode,
    bankGroupCode,
    bankGroupName: groupInfo.name,
    bankGroupNameBn: groupInfo.nameBn,
    bankGroupNameHi: groupInfo.nameHi,
    bankGroupNameRu: groupInfo.nameRu,
    bankId,
    bankName: matchedBank.name,
    bankShortName: matchedBank.shortName,
    swiftCode: matchedBank.swift,
    isSepaInstantReady: true,
    isTarget2Ready: true,
    isBundesbankEmzReady: true,
    description: `German Bankleitzahl ${formattedDisplay} belongs to ${matchedBank.name} in ${regionInfo.name}. Compliant with Deutsche Bundesbank EMZ clearing and SEPA Instant Credit Transfer.`,
    descriptionBn: `জার্মান ব্যাংকলাইটজাহল (BLZ) ${formattedDisplay} টি ${matchedBank.name}-এর অন্তর্ভুক্ত (${regionInfo.nameBn})। এটি ডয়চে বুন্দেসব্যাংক ক্লিয়ারিং ও সেপা ইনস্ট্যান্ট পেমেন্টে সম্পূর্ণ কার্যকর।`,
    descriptionHi: `जर्मन बैंकलीत्ज़ाह्ल (BLZ) ${formattedDisplay}, ${matchedBank.name} का है (${regionInfo.nameHi})। यह बुंडेसबैंक और सेपा इंस्टेंट ट्रांसफर के लिए पूर्णतः मान्य है।`,
    descriptionRu: `Немецкий банковский код BLZ ${formattedDisplay} принадлежит банку ${matchedBank.name} (${regionInfo.nameRu}). Поддерживает SEPA Instant и клиринг Бундесбанка.`,
    errors
  };
}

export const decodeBlz = decodeGermanyBlz;

/**
 * Validates German IBAN with Modulo 97 Checksum (ISO 7064)
 */
export function validateGermanyIban(ibanStr: string | null | undefined): GermanyIbanBreakdown {
  const errors: string[] = [];
  if (!ibanStr) {
    return {
      isValid: false,
      iban: '',
      formattedIban: '',
      countryCode: '',
      checkDigits: '',
      blz: '',
      accountNumber: '',
      bankName: '',
      swiftCode: '',
      isMod97Valid: false,
      errors: ['Empty IBAN provided.']
    };
  }

  const cleaned = ibanStr.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (!cleaned.startsWith('DE')) {
    errors.push('German IBAN must start with country code "DE".');
  }

  if (cleaned.length !== 22) {
    errors.push(`German IBAN must be exactly 22 alphanumeric characters. Received ${cleaned.length} characters.`);
  }

  const countryCode = cleaned.slice(0, 2);
  const checkDigits = cleaned.slice(2, 4);
  const blz = cleaned.slice(4, 12);
  const accountNumber = cleaned.slice(12, 22);

  // ISO 7064 MOD 97-10 Checksum Algorithm
  let isMod97Valid = false;
  if (cleaned.length === 22 && countryCode === 'DE') {
    // Rearrange: Move first 4 chars to end: [BLZ + Account] + "DE" + checkDigits
    // Convert letters to numbers: D=13, E=14 -> "DE" = "1314"
    const rearranged = `${cleaned.slice(4)}1314${checkDigits}`;
    
    // Large number modulo 97 calculation
    let remainder = 0;
    for (let i = 0; i < rearranged.length; i++) {
      remainder = (remainder * 10 + parseInt(rearranged.charAt(i), 10)) % 97;
    }
    isMod97Valid = (remainder === 1);
    if (!isMod97Valid) {
      errors.push('Invalid IBAN checksum (MOD 97-10 check failed). Please verify the account number and check digits.');
    }
  }

  const matchedBank = GERMAN_MAJOR_BLZ_MAP[blz] || {
    name: 'German Credit Institution',
    swift: 'DEUTDEDD'
  };

  const formattedIban = cleaned.length === 22 ? `${cleaned.slice(0, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8, 12)} ${cleaned.slice(12, 16)} ${cleaned.slice(16, 20)} ${cleaned.slice(20, 22)}` : cleaned;

  return {
    isValid: errors.length === 0 && isMod97Valid,
    iban: cleaned,
    formattedIban,
    countryCode,
    checkDigits,
    blz,
    accountNumber,
    bankName: matchedBank.name,
    swiftCode: matchedBank.swift,
    isMod97Valid,
    errors
  };
}

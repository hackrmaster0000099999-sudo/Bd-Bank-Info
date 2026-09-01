// Australia BSB (Bank-State-Branch) Code Validator & Decoder
// Standards regulated by Australian Payments Network (AusPayNet / APCA)

export interface AustraliaBsbBreakdown {
  isValid: boolean;
  bsbNumber: string;
  formattedDisplay: string; // XXX-XXX
  bankCode: string; // 2 digits (e.g. 06 for CBA, 03 for Westpac)
  stateCode: string; // 1 digit (e.g. 2 for NSW, 3 for VIC)
  branchCode: string; // 3 digits
  bankName: string;
  bankShortName: string;
  stateName: string;
  stateAbbr: string;
  swiftCode: string;
  description: string;
  descriptionBn?: string;
  descriptionHi?: string;
  descriptionRu?: string;
  isDirectEntryReady: boolean;
  isNppOskoReady: boolean;
  errors: string[];
}

export const AUSTRALIAN_BSB_PREFIXES: Record<string, { name: string; shortName: string; swift: string; officialSite: string }> = {
  '01': { name: 'Australia and New Zealand Banking Group (ANZ)', shortName: 'ANZ', swift: 'ANZBAU3M', officialSite: 'anz.com.au' },
  '03': { name: 'Westpac Banking Corporation', shortName: 'Westpac', swift: 'WPACAU2S', officialSite: 'westpac.com.au' },
  '06': { name: 'Commonwealth Bank of Australia (CBA)', shortName: 'CommBank', swift: 'CTBAAU2S', officialSite: 'commbank.com.au' },
  '08': { name: 'National Australia Bank (NAB)', shortName: 'NAB', swift: 'NATAAU3303M', officialSite: 'nab.com.au' },
  '09': { name: 'Reserve Bank of Australia (RBA)', shortName: 'RBA', swift: 'RBAAAU2S', officialSite: 'rba.gov.au' },
  '10': { name: 'BankSA (Westpac Group)', shortName: 'BankSA', swift: 'BSAAAU5S', officialSite: 'banksa.com.au' },
  '11': { name: 'St.George Bank (Westpac Group)', shortName: 'St.George', swift: 'SGBLAU2S', officialSite: 'stgeorge.com.au' },
  '12': { name: 'Bank of Queensland (BOQ)', shortName: 'BOQ', swift: 'BQLDAU4B', officialSite: 'boq.com.au' },
  '18': { name: 'Macquarie Bank Limited', shortName: 'Macquarie', swift: 'MACQAU2S', officialSite: 'macquarie.com.au' },
  '19': { name: 'Bank of Melbourne (Westpac Group)', shortName: 'Bank of Melbourne', swift: 'BMLBAU3S', officialSite: 'bankofmelbourne.com.au' },
  '24': { name: 'Citibank Australia (NAB Group)', shortName: 'Citibank', swift: 'CITIAP2S', officialSite: 'citibank.com.au' },
  '30': { name: 'Bankwest (CBA Group)', shortName: 'Bankwest', swift: 'BKWAU6P', officialSite: 'bankwest.com.au' },
  '34': { name: 'HSBC Bank Australia', shortName: 'HSBC Australia', swift: 'HKBCAU2S', officialSite: 'hsbc.com.au' },
  '48': { name: 'Suncorp Bank', shortName: 'Suncorp', swift: 'SNCAAU4B', officialSite: 'suncorp.com.au' },
  '63': { name: 'Bendigo and Adelaide Bank', shortName: 'Bendigo Bank', swift: 'BENDAU3B', officialSite: 'bendigobank.com.au' },
  '70': { name: 'AMP Bank Limited', shortName: 'AMP Bank', swift: 'AMPBAU2S', officialSite: 'amp.com.au' },
  '73': { name: 'Suncorp Metway', shortName: 'Suncorp', swift: 'SNCAAU4B', officialSite: 'suncorp.com.au' },
  '80': { name: 'People First Bank (Heritage & People Choice)', shortName: 'People First', swift: 'HERBAU4B', officialSite: 'peoplefirstbank.com.au' },
  '81': { name: 'Great Southern Bank (CUA)', shortName: 'Great Southern', swift: 'CUAAAU4B', officialSite: 'greatsouthernbank.com.au' },
  '92': { name: 'ING Bank Australia', shortName: 'ING Australia', swift: 'INGBAP4S', officialSite: 'ing.com.au' },
  '94': { name: 'ME Bank (Members Equity)', shortName: 'ME Bank', swift: 'MEBLAU2S', officialSite: 'mebank.com.au' }
};

export const AUSTRALIAN_STATE_DIGITS: Record<string, { name: string; abbr: string; nameBn: string; nameHi: string; nameRu: string }> = {
  '1': { name: 'Australian Capital Territory', abbr: 'ACT', nameBn: 'অস্ট্রেলিয়ান ক্যাপিটাল টেরিটরি (ক্যানবেরা)', nameHi: 'ऑस्ट्रेलियाई राजधानी क्षेत्र (ACT)', nameRu: 'Австралийская столичная территория (Канберра)' },
  '2': { name: 'New South Wales', abbr: 'NSW', nameBn: 'নিউ সাউথ ওয়েলস (সিডনি)', nameHi: 'न्यू साउथ वेल्स (सिडनी)', nameRu: 'Новый Южный Уэльс (Сидней)' },
  '3': { name: 'Victoria', abbr: 'VIC', nameBn: 'ভিক্টোরিয়া (মেলবোর্ন)', nameHi: 'विक्टोरिया (मेलबर्न)', nameRu: 'Виктория (Мельбурн)' },
  '4': { name: 'Queensland', abbr: 'QLD', nameBn: 'কুইন্সল্যান্ড (ব্রিসবেন)', nameHi: 'क्वींसलैंड (ब्रिस्बेन)', nameRu: 'Квинсленд (Брисбен)' },
  '5': { name: 'South Australia', abbr: 'SA', nameBn: 'সাউথ অস্ট্রেলিয়া (অ্যাডিলেড)', nameHi: 'दक्षिण ऑस्ट्रेलिया (एडिलेड)', nameRu: 'Южная Австралия (Аделаида)' },
  '6': { name: 'Western Australia', abbr: 'WA', nameBn: 'ওয়েস্টার্ন অস্ট্রেলিয়া (পার্থ)', nameHi: 'पश्चिमी ऑस्ट्रेलिया (पर्थ)', nameRu: 'Западная Австралия (Перт)' },
  '7': { name: 'Tasmania', abbr: 'TAS', nameBn: 'তাসমানিয়া (হোবার্ট)', nameHi: 'तस्मानिया (होबार्ट)', nameRu: 'Тасмания (Хобарт)' },
  '8': { name: 'Northern Territory', abbr: 'NT', nameBn: 'নর্দান টেরিটরি (ডারউইন)', nameHi: 'उत्तरी क्षेत्र (डार्विन)', nameRu: 'Северная территория (Дарвин)' },
  '9': { name: 'Australia-wide / Electronic Processing', abbr: 'AU-Wide', nameBn: 'অস্ট্রেলিয়া-জুড়ে ইলেকট্রনিক প্রসেসিং', nameHi: 'अखिल ऑस्ट्रेलियाई इलेक्ट्रॉनिक प्रोसेसिंग', nameRu: 'Общеавстралийский / Электронный клиринг' }
};

/**
 * Validates and decodes Australian BSB numbers (Bank-State-Branch)
 * Supports formats: `062-000`, `062000`, `062 000`
 */
export function decodeAustraliaBsb(input: string): AustraliaBsbBreakdown {
  const cleanInput = (input || '').replace(/[\s\-\/]/g, '').trim();
  const errors: string[] = [];

  if (!cleanInput) {
    return {
      isValid: false,
      bsbNumber: '',
      formattedDisplay: '',
      bankCode: '',
      stateCode: '',
      branchCode: '',
      bankName: '',
      bankShortName: '',
      stateName: '',
      stateAbbr: '',
      swiftCode: '',
      description: 'Please enter a 6-digit Australian BSB number (e.g. 062-000 for CBA Sydney).',
      isDirectEntryReady: false,
      isNppOskoReady: false,
      errors: ['Empty BSB number']
    };
  }

  if (!/^\d{6}$/.test(cleanInput)) {
    errors.push('BSB number must be exactly 6 digits (format: XXX-XXX or XXXXXX)');
  }

  const bankCode = cleanInput.substring(0, 2);
  const stateCode = cleanInput.substring(2, 3);
  const branchCode = cleanInput.substring(3, 6);
  const formattedDisplay = cleanInput.length === 6 ? `${cleanInput.substring(0, 3)}-${cleanInput.substring(3, 6)}` : cleanInput;

  const bankInfo = AUSTRALIAN_BSB_PREFIXES[bankCode];
  const stateInfo = AUSTRALIAN_STATE_DIGITS[stateCode];

  if (!bankInfo) {
    errors.push(`Unrecognized financial institution prefix "${bankCode}" in Australian Payments Network (AusPayNet)`);
  }

  const bankName = bankInfo ? bankInfo.name : 'Unknown Australian Bank';
  const bankShortName = bankInfo ? bankInfo.shortName : 'Bank';
  const swiftCode = bankInfo ? bankInfo.swift : 'AUXXXXXX';
  const stateName = stateInfo ? stateInfo.name : 'Unknown State / Region';
  const stateAbbr = stateInfo ? stateInfo.abbr : 'AU';

  const isValid = errors.length === 0;

  const description = isValid
    ? `Valid Australian BSB ${formattedDisplay} for ${bankName}, located in ${stateName} (${stateAbbr}), Branch ID: ${branchCode}. Cleared via AusPayNet Direct Entry & NPP Osko.`
    : `Invalid BSB number (${cleanInput}): ${errors.join(', ')}`;

  const descriptionBn = isValid
    ? `অস্ট্রেলিয়ান বৈধ বিএসবি কোড ${formattedDisplay} (${bankName}) - অবস্থান: ${stateInfo?.nameBn || stateName}, ব্রাঞ্চ আইডি: ${branchCode}। AusPayNet ও NPP Osko লেনদেনের জন্য অনুমোদিত।`
    : undefined;

  const descriptionHi = isValid
    ? `वैध ऑस्ट्रेलियाई बीएसबी कोड ${formattedDisplay} (${bankName}) - राज्य: ${stateInfo?.nameHi || stateName}, शाखा कोड: ${branchCode}। AusPayNet व NPP Osko के लिए उपयुक्त।`
    : undefined;

  const descriptionRu = isValid
    ? `Действующий австралийский BSB код ${formattedDisplay} (${bankName}) — штат: ${stateInfo?.nameRu || stateName}, код отделения: ${branchCode}. Готов к расчетам в системе AusPayNet Direct Entry и NPP/Osko.`
    : undefined;

  return {
    isValid,
    bsbNumber: cleanInput,
    formattedDisplay,
    bankCode,
    stateCode,
    branchCode,
    bankName,
    bankShortName,
    stateName,
    stateAbbr,
    swiftCode,
    description,
    descriptionBn,
    descriptionHi,
    descriptionRu,
    isDirectEntryReady: isValid,
    isNppOskoReady: isValid,
    errors
  };
}

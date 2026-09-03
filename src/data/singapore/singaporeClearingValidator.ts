// Singapore Banking & MEPS+ / FAST Clearing Code Validator & Decoder
// Regulated by the Monetary Authority of Singapore (MAS) & Association of Banks in Singapore (ABS)

export interface SingaporeClearingBreakdown {
  isValid: boolean;
  routingNumber: string;
  formattedDisplay: string;
  bankCode: string; // 4 digits (e.g. 7171 for DBS/POSB, 7339 for OCBC, 7375 for UOB)
  branchCode: string; // 3 digits
  bankName: string;
  bankShortName: string;
  swiftCode: string;
  isMepsPlusReady: boolean;
  isFastReady: boolean;
  isPayNowReady: boolean;
  isGiroReady: boolean;
  description: string;
  descriptionBn?: string;
  descriptionHi?: string;
  descriptionRu?: string;
  errors: string[];
}

export const MAS_BANK_CODES: Record<string, { name: string; shortName: string; swift: string; website: string }> = {
  '7171': { name: 'DBS Bank / POSB', shortName: 'DBS / POSB', swift: 'DBSSSGSG', website: 'dbs.com.sg' },
  '7339': { name: 'OCBC Bank (Oversea-Chinese Banking Corp)', shortName: 'OCBC', swift: 'OCBCSGSG', website: 'ocbc.com' },
  '7375': { name: 'United Overseas Bank (UOB)', shortName: 'UOB', swift: 'UOVBSGSG', website: 'uobgroup.com' },
  '7083': { name: 'Standard Chartered Bank (Singapore)', shortName: 'Standard Chartered SG', swift: 'SCBLSG22', website: 'sc.com/sg' },
  '7214': { name: 'Citibank Singapore Limited', shortName: 'Citibank SG', swift: 'CITISGSG', website: 'citibank.com.sg' },
  '7232': { name: 'HSBC Bank (Singapore) Limited', shortName: 'HSBC SG', swift: 'HSBSSGSG', website: 'hsbc.com.sg' },
  '7472': { name: 'Maybank Singapore Limited', shortName: 'Maybank SG', swift: 'MBBESGS2', website: 'maybank2u.com.sg' },
  '7414': { name: 'Bank of China (Singapore Branch)', shortName: 'BOC SG', swift: 'BKCHSGSG', website: 'bankofchina.com/sg' },
  '7302': { name: 'CIMB Bank Berhad (Singapore)', shortName: 'CIMB SG', swift: 'CIMBSGSG', website: 'cimb.com.sg' },
  '7047': { name: 'RHB Bank Berhad (Singapore)', shortName: 'RHB SG', swift: 'RHBBSGSG', website: 'rhbgroup.com.sg' },
  '7524': { name: 'State Bank of India (Singapore)', shortName: 'SBI Singapore', swift: 'SBINSGSG', website: 'sg.statebank' },
  '7560': { name: 'ICICI Bank Limited (Singapore)', shortName: 'ICICI SG', swift: 'ICICSGSG', website: 'icicibank.com.sg' },
  '7038': { name: 'BNP Paribas (Singapore Branch)', shortName: 'BNP Paribas SG', swift: 'BNAPSGSG', website: 'singapore.bnpparibas' },
  '7199': { name: 'Deutsche Bank AG (Singapore)', shortName: 'Deutsche Bank SG', swift: 'DEUTSGSG', website: 'db.com/singapore' },
  '9786': { name: 'Trust Bank Singapore Limited', shortName: 'Trust Bank', swift: 'TRUSSGSG', website: 'trustbank.sg' },
  '9801': { name: 'GXS Bank Pte. Ltd.', shortName: 'GXS Bank', swift: 'GXSBSSGS', website: 'gxs.com.sg' },
  '9777': { name: 'MariBank Singapore Private Limited', shortName: 'MariBank', swift: 'MRBKSGSG', website: 'maribank.sg' },
  '9812': { name: 'ANEXT Bank Pte. Ltd.', shortName: 'ANEXT Bank', swift: 'ANXTSGSG', website: 'anext.com.sg' },
  '7001': { name: 'Monetary Authority of Singapore (MAS)', shortName: 'MAS', swift: 'MASSGSG', website: 'mas.gov.sg' }
};

/**
 * Validates and decodes a Singapore 7-digit Clearing Code (or 4-digit Bank Code)
 */
export function validateSingaporeClearing(rawInput: string): SingaporeClearingBreakdown {
  const errors: string[] = [];
  const clean = (rawInput || '').replace(/[\s-]/g, '');

  let bankCode = '';
  let branchCode = '001';

  if (clean.length === 4 && /^\d{4}$/.test(clean)) {
    // 4-digit Bank Code entered
    bankCode = clean;
  } else if (clean.length === 7 && /^\d{7}$/.test(clean)) {
    // Standard 7-digit MEPS+ routing code: 4-digit bank code + 3-digit branch code
    bankCode = clean.substring(0, 4);
    branchCode = clean.substring(4, 7);
  } else {
    errors.push('Singapore clearing routing codes must be exactly 7 digits (4-digit bank code + 3-digit branch code) or 4 digits (bank clearing code).');
    return {
      isValid: false,
      routingNumber: clean,
      formattedDisplay: clean,
      bankCode: '',
      branchCode: '',
      bankName: 'Unknown Bank',
      bankShortName: 'Unknown',
      swiftCode: 'NOT_FOUND',
      isMepsPlusReady: false,
      isFastReady: false,
      isPayNowReady: false,
      isGiroReady: false,
      description: 'Invalid Singapore clearing routing format.',
      descriptionBn: 'সিঙ্গাপুর ক্লিয়ারিং কোডের ফরম্যাট সঠিক নয় (৭ ডিজিট হতে হবে)।',
      descriptionHi: 'सिंगापुर क्लियरिंग कोड प्रारूप अमान्य है (7 अंक आवश्यक हैं)।',
      descriptionRu: 'Неверный формат сингапурского клирингового кода (требуется 7 цифр).',
      errors
    };
  }

  const bankInfo = MAS_BANK_CODES[bankCode];
  if (!bankInfo) {
    errors.push(`Bank code "${bankCode}" is not recognized by the Association of Banks in Singapore (ABS) or MAS clearing directory.`);
  }

  const bankName = bankInfo ? bankInfo.name : `Singapore Registered Bank (${bankCode})`;
  const bankShort = bankInfo ? bankInfo.shortName : `Bank ${bankCode}`;
  const swift = bankInfo ? bankInfo.swift : 'DBSSSGSG';

  const formattedDisplay = `${bankCode}-${branchCode}`;
  const routing = `${bankCode}${branchCode}`;

  return {
    isValid: errors.length === 0,
    routingNumber: routing,
    formattedDisplay,
    bankCode,
    branchCode,
    bankName,
    bankShortName: bankShort,
    swiftCode: swift,
    isMepsPlusReady: true,
    isFastReady: true,
    isPayNowReady: true,
    isGiroReady: true,
    description: `Official Singapore 7-digit clearing routing number for ${bankName} (Branch Code: ${branchCode}). Fully supported across MEPS+, FAST, PayNow, GIRO, and SWIFT international settlement.`,
    descriptionBn: `${bankName}-এর অফিশিয়াল ৭ ডিজিটের সিঙ্গাপুর ক্লিয়ারিং রাউটিং নম্বর (ব্রাঞ্চ কোড: ${branchCode})। MEPS+, FAST, PayNow, GIRO এবং সুইফটে ফান্ড ট্রান্সফারে সম্পূর্ণ গ্রহণযোগ্য।`,
    descriptionHi: `${bankName} के लिए आधिकारिक 7-अंकीय सिंगापुर क्लियरिंग रूटिंग कोड (शाखा कोड: ${branchCode})। MEPS+, FAST, PayNow व GIRO में पूरी तरह मान्य।`,
    descriptionRu: `Официальный 7-значный сингапурский маршрутный код клиринга для ${bankName} (код отделения: ${branchCode}). Поддерживает MEPS+, FAST, PayNow и GIRO.`,
    errors
  };
}

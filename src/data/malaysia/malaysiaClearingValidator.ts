// Malaysia Banking & RENTAS / Interbank GIRO (IBG) / DuitNow Clearing Code Validator & Decoder
// Regulated by Bank Negara Malaysia (BNM) & Payments Network Malaysia (PayNet)

export interface MalaysiaClearingBreakdown {
  isValid: boolean;
  routingNumber: string;
  formattedDisplay: string;
  bankCode: string; // 2 digits (e.g. 01 for Maybank, 02 for CIMB, 03 for Public Bank)
  branchCode: string; // 3 digits
  bankName: string;
  bankShortName: string;
  swiftCode: string;
  isRentasReady: boolean;
  isIbgReady: boolean;
  isDuitNowReady: boolean;
  isPidmProtected: boolean;
  description: string;
  descriptionBn?: string;
  descriptionHi?: string;
  descriptionRu?: string;
  errors: string[];
}

export const BNM_BANK_CODES: Record<string, { name: string; shortName: string; swift: string; website: string }> = {
  '01': { name: 'Malayan Banking Berhad (Maybank)', shortName: 'Maybank', swift: 'MBBEMYKL', website: 'maybank2u.com.my' },
  '02': { name: 'CIMB Bank Berhad', shortName: 'CIMB', swift: 'CIBBMYKL', website: 'cimb.com.my' },
  '03': { name: 'Public Bank Berhad', shortName: 'Public Bank', swift: 'PBBEMYKL', website: 'pbebank.com' },
  '04': { name: 'RHB Bank Berhad', shortName: 'RHB Bank', swift: 'RHBBMYKL', website: 'rhbgroup.com' },
  '05': { name: 'Hong Leong Bank Berhad', shortName: 'Hong Leong', swift: 'HLBBMYKL', website: 'hlb.com.my' },
  '06': { name: 'AmBank (M) Berhad', shortName: 'AmBank', swift: 'ARBKMYKL', website: 'ambank.com.my' },
  '07': { name: 'Bank Islam Malaysia Berhad', shortName: 'Bank Islam', swift: 'BIMBMYKL', website: 'bankislam.com' },
  '08': { name: 'Affin Bank Berhad', shortName: 'Affin Bank', swift: 'AFFNMYKL', website: 'affinonline.com' },
  '09': { name: 'Alliance Bank Malaysia Berhad', shortName: 'Alliance Bank', swift: 'MFBBMYKL', website: 'alliancebank.com.my' },
  '10': { name: 'Standard Chartered Bank Malaysia Berhad', shortName: 'StanChart MY', swift: 'SCBLMYKL', website: 'sc.com/my' },
  '11': { name: 'HSBC Bank Malaysia Berhad', shortName: 'HSBC MY', swift: 'HBMBMYKL', website: 'hsbc.com.my' },
  '12': { name: 'OCBC Bank (Malaysia) Berhad', shortName: 'OCBC MY', swift: 'OCBCMYKL', website: 'ocbc.com.my' },
  '13': { name: 'United Overseas Bank (Malaysia) Bhd', shortName: 'UOB MY', swift: 'UOVBMYKL', website: 'uob.com.my' },
  '14': { name: 'Bank Muamalat Malaysia Berhad', shortName: 'Bank Muamalat', swift: 'BMMBMYKL', website: 'muamalat.com.my' },
  '15': { name: 'Bank Simpanan Nasional (BSN)', shortName: 'BSN', swift: 'BSNMMYKL', website: 'bsn.com.my' },
  '16': { name: 'Bank Kerjasama Rakyat Malaysia (Bank Rakyat)', shortName: 'Bank Rakyat', swift: 'BKRMMYKL', website: 'bankrakyat.com.my' },
  '17': { name: 'Kuwait Finance House (Malaysia) Berhad', shortName: 'KFH Malaysia', swift: 'KFHXMYKL', website: 'kfh.com.my' },
  '18': { name: 'Al Rajhi Banking & Investment Corp Malaysia', shortName: 'Al Rajhi MY', swift: 'RJHIMYKL', website: 'alrajhibank.com.my' },
  '19': { name: 'Bank of China (Malaysia) Berhad', shortName: 'BOC Malaysia', swift: 'BKCHMYKL', website: 'bankofchina.com.my' },
  '00': { name: 'Bank Negara Malaysia (Central Bank)', shortName: 'BNM', swift: 'BNMAMYKL', website: 'bnm.gov.my' }
};

/**
 * Validates and decodes a Malaysian 5-digit IBG Routing Code or 2-digit Bank Code
 */
export function validateMalaysiaClearing(rawInput: string): MalaysiaClearingBreakdown {
  const errors: string[] = [];
  const clean = (rawInput || '').replace(/[\s-]/g, '');

  let bankCode = '';
  let branchCode = '001';

  if (clean.length === 2 && /^\d{2}$/.test(clean)) {
    // 2-digit Bank Code entered
    bankCode = clean;
  } else if (clean.length === 5 && /^\d{5}$/.test(clean)) {
    // Standard 5-digit IBG routing code: 2-digit bank code + 3-digit branch code
    bankCode = clean.substring(0, 2);
    branchCode = clean.substring(2, 5);
  } else if (clean.length === 8 || clean.length === 11) {
    // Possibly a SWIFT code lookup
    const upper = clean.toUpperCase();
    for (const [code, info] of Object.entries(BNM_BANK_CODES)) {
      if (info.swift.startsWith(upper.substring(0, 6))) {
        bankCode = code;
        break;
      }
    }
    if (!bankCode) {
      errors.push('SWIFT code not recognized among primary Malaysian clearing members.');
    }
  } else {
    errors.push('Invalid Malaysian code format. Expected 2-digit Bank Code or 5-digit IBG Clearing Code.');
  }

  const bankInfo = BNM_BANK_CODES[bankCode];
  const isValid = errors.length === 0 && Boolean(bankInfo);

  if (!bankInfo && bankCode) {
    errors.push(`Unrecognized Bank Negara Malaysia bank code: ${bankCode}.`);
  }

  const formattedDisplay = isValid ? `${bankCode}-${branchCode}` : clean;

  return {
    isValid,
    routingNumber: clean,
    formattedDisplay,
    bankCode,
    branchCode,
    bankName: bankInfo ? bankInfo.name : 'Unknown Malaysian Financial Institution',
    bankShortName: bankInfo ? bankInfo.shortName : 'Unknown',
    swiftCode: bankInfo ? bankInfo.swift : '',
    isRentasReady: isValid,
    isIbgReady: isValid,
    isDuitNowReady: isValid,
    isPidmProtected: isValid && bankCode !== '00',
    description: isValid
      ? `Valid Malaysian IBG & RENTAS clearing routing number for ${bankInfo.name}. Eligible for instant 24/7 DuitNow, Interbank GIRO (IBG), and PIDM deposit protection up to RM250,000.`
      : 'Invalid or unrecognized Malaysian bank clearing routing code.',
    descriptionBn: isValid
      ? `${bankInfo.name}-এর বৈধ মালয়েশিয়ান আইবিজি (IBG) ও রেন্টাস (RENTAS) ক্লিয়ারিং রাউটিং কোড। ২৪/৭ ডুইটনাউ (DuitNow), আইবিজি ও পিআইডিএম (PIDM) ২,৫০,০০০ রিঙ্গিত আমানত সুরক্ষায় অন্তর্ভুক্ত।`
      : 'মালয়েশিয়ান ব্যাংক ক্লিয়ারিং কোডটি সঠিক নয় বা খুঁজে পাওয়া যায়নি।',
    descriptionHi: isValid
      ? `${bankInfo ? bankInfo.name : ''} के लिए वैध मलेशियाई आईबीजी और रेंटास समाशोधन कोड। 24/7 डुइटनाउ और पीआईडीएम संरक्षण समर्थित।`
      : 'अमान्य मलेशियाई बैंक समाशोधन कोड।',
    descriptionRu: isValid
      ? `Действительный малайзийский клиринговый код IBG / RENTAS для ${bankInfo ? bankInfo.name : ''}. Поддерживает мгновенные переводы DuitNow.`
      : 'Недействительный малайзийский банковский код.',
    errors
  };
}

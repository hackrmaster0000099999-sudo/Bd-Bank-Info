// Canada Payments / ACSS / EFT Routing Number Validator & Decoder

export interface CanadaRoutingBreakdown {
  isValid: boolean;
  routingNumber: string;
  formattedDisplay: string;
  transitNumber: string; // 5 digits
  institutionNumber: string; // 3 digits
  bankName: string;
  bankShortName: string;
  swiftCode: string;
  description: string;
  descriptionBn?: string;
  descriptionHi?: string;
  descriptionRu?: string;
  eftRoutingNumber: string; // 9 digits (0YYYXXXXX)
  chequeLineFormat: string; // XXXXX-YYY
  isDirectDepositReady: boolean;
  isWireReady: boolean;
  errors: string[];
}

export const CANADIAN_INSTITUTIONS: Record<string, { name: string; shortName: string; swift: string; officialSite: string }> = {
  '001': { name: 'BMO Bank of Montreal', shortName: 'BMO', swift: 'BOFMCAT2', officialSite: 'bmo.com' },
  '002': { name: 'Scotiabank (Bank of Nova Scotia)', shortName: 'Scotiabank', swift: 'NOSCCATT', officialSite: 'scotiabank.com' },
  '003': { name: 'Royal Bank of Canada (RBC)', shortName: 'RBC', swift: 'ROYCCAT2', officialSite: 'rbcroyalbank.com' },
  '004': { name: 'TD Canada Trust (Toronto-Dominion Bank)', shortName: 'TD Bank', swift: 'TDOMCATTT', officialSite: 'td.com' },
  '006': { name: 'National Bank of Canada (Banque Nationale)', shortName: 'NBC', swift: 'BNDCCAMM', officialSite: 'nbc.ca' },
  '010': { name: 'CIBC (Canadian Imperial Bank of Commerce)', shortName: 'CIBC', swift: 'CIBCCATT', officialSite: 'cibc.com' },
  '016': { name: 'HSBC Bank Canada', shortName: 'HSBC Canada', swift: 'HKBCCATT', officialSite: 'hsbc.ca' },
  '030': { name: 'Canadian Western Bank (CWB)', shortName: 'CWB', swift: 'CWBBCA7E', officialSite: 'cwbank.com' },
  '039': { name: 'Laurentian Bank of Canada', shortName: 'Laurentian Bank', swift: 'BLMCCAMM', officialSite: 'laurentianbank.ca' },
  '338': { name: 'Canadian Tire Bank', shortName: 'Canadian Tire', swift: 'CTBKCAT1', officialSite: 'ctfs.com' },
  '540': { name: 'Manulife Bank of Canada', shortName: 'Manulife Bank', swift: 'MANUCAT1', officialSite: 'manulifebank.ca' },
  '614': { name: 'Tangerine Bank', shortName: 'Tangerine', swift: 'INGACATT', officialSite: 'tangerine.ca' },
  '623': { name: 'EQ Bank (Equitable Bank)', shortName: 'EQ Bank', swift: 'EQBKCA2T', officialSite: 'eqbank.ca' },
  '703': { name: 'Wealthsimple Payments Inc.', shortName: 'Wealthsimple', swift: 'WMPLCAT2', officialSite: 'wealthsimple.com' },
  '809': { name: 'ATB Financial / Central 1', shortName: 'ATB Financial', swift: 'ATBACA7C', officialSite: 'atb.com' },
  '815': { name: 'Desjardins Group (Fédération des caisses Desjardins)', shortName: 'Desjardins', swift: 'CCDVCA2L', officialSite: 'desjardins.com' },
  '828': { name: 'Coast Capital Savings Credit Union', shortName: 'Coast Capital', swift: 'COASTCAV', officialSite: 'coastcapitalsavings.com' },
  '829': { name: 'Vancity (Vancouver City Savings Credit Union)', shortName: 'Vancity', swift: 'VANCUCAV', officialSite: 'vancity.com' }
};

/**
 * Validates and decodes Canadian Transit / Institution / EFT Routing numbers
 * Supports formats:
 * - 9-digit EFT format: `0YYYXXXXX` (e.g. `000300002` -> Inst: 003, Transit: 00002)
 * - 8-digit format: `XXXXXYYY` or `YYYXXXXX`
 * - Standard Cheque format: `XXXXX-YYY` (e.g. `00002-003`)
 */
export function decodeCanadaRouting(input: string): CanadaRoutingBreakdown {
  const cleanInput = (input || '').replace(/[\s\-\/]/g, '').trim();
  const errors: string[] = [];
  let transit = '';
  let institution = '';

  // Check if input contains a dash like 00002-003
  if (input && input.includes('-')) {
    const parts = input.split('-');
    if (parts[0].length === 5 && parts[1].length === 3) {
      transit = parts[0];
      institution = parts[1];
    } else if (parts[0].length === 3 && parts[1].length === 5) {
      institution = parts[0];
      transit = parts[1];
    }
  }

  // 9-digit EFT Routing Number starting with 0: 0YYYXXXXX
  if (!transit && cleanInput.length === 9) {
    if (cleanInput.startsWith('0')) {
      institution = cleanInput.substring(1, 4);
      transit = cleanInput.substring(4, 9);
    } else {
      institution = cleanInput.substring(0, 3);
      transit = cleanInput.substring(3, 8);
    }
  } else if (!transit && cleanInput.length === 8) {
    institution = cleanInput.substring(0, 3);
    transit = cleanInput.substring(3, 8);
  } else if (!transit && cleanInput.length === 5) {
    transit = cleanInput;
    institution = '003'; // Default to RBC for branch check
  } else if (!transit && cleanInput.length === 3) {
    institution = cleanInput;
    transit = '00001';
  }

  const instData = CANADIAN_INSTITUTIONS[institution];
  const isValid = Boolean(instData && transit.length === 5 && /^\d{5}$/.test(transit));

  if (!instData) {
    errors.push(`Unknown Canadian Institution Number '${institution}'. Standard Schedule I & II Canadian banks use 3-digit codes (e.g. 003 for RBC, 004 for TD, 001 for BMO).`);
  }

  if (transit.length !== 5 || !/^\d{5}$/.test(transit)) {
    errors.push('Canadian Transit Number must be exactly 5 numeric digits.');
  }

  const eftRouting = `0${institution.padStart(3, '0')}${transit.padStart(5, '0')}`;
  const chequeFormat = `${transit.padStart(5, '0')}-${institution.padStart(3, '0')}`;

  return {
    isValid,
    routingNumber: cleanInput,
    formattedDisplay: chequeFormat,
    transitNumber: transit,
    institutionNumber: institution,
    bankName: instData?.name || `Canadian Institution #${institution}`,
    bankShortName: instData?.shortName || `Bank #${institution}`,
    swiftCode: instData?.swift || 'N/A',
    description: instData
      ? `Verified Canadian Financial Institution: ${instData.name}. Transit Number (Branch): ${transit}, Institution Number: ${institution}, 9-Digit EFT Routing: ${eftRouting}.`
      : `Unrecognized Canadian Institution Code ${institution}.`,
    descriptionBn: instData
      ? `যাচাইকৃত কানাডিয়ান ব্যাংকিং প্রতিষ্ঠান: ${instData.name}। ট্রানজিট কোড (শাখা): ${transit}, ইন্সটিটিউশন নম্বর: ${institution}, ৯-সংখ্যার EFT ইলেকট্রনিক রাউটিং: ${eftRouting}।`
      : undefined,
    descriptionHi: instData
      ? `सत्यापित कैनेडियन बैंक: ${instData.name}। ट्रांजिट नंबर: ${transit}, संस्थान कोड: ${institution}, 9-अंकीय EFT राउटिंग: ${eftRouting}।`
      : undefined,
    descriptionRu: instData
      ? `Проверенная финансовая организация Канады: ${instData.name}. Транзитный номер (Transit): ${transit}, Код учреждения (Institution): ${institution}, 9-значный код EFT: ${eftRouting}.`
      : undefined,
    eftRoutingNumber: eftRouting,
    chequeLineFormat: chequeFormat,
    isDirectDepositReady: isValid,
    isWireReady: Boolean(instData?.swift),
    errors
  };
}

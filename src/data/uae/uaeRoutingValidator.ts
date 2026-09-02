// United Arab Emirates (UAE) Banking & CBUAE Routing Validator / Decoder
// Regulated by Central Bank of the United Arab Emirates (CBUAE) & UAEFTS

export interface UaeRoutingBreakdown {
  isValid: boolean;
  routingNumber: string;
  formattedDisplay: string;
  bankCode: string; // 3 digits (e.g. 023 for Emirates NBD, 035 for FAB)
  emirateCode: string; // 2 digits (e.g. 01 for Dubai, 02 for Abu Dhabi)
  branchCode: string; // 3-4 digits
  bankName: string;
  bankShortName: string;
  emirateName: string;
  emirateNameBn: string;
  emirateNameHi: string;
  emirateNameRu: string;
  swiftCode: string;
  isUaeFtsReady: boolean;
  isAaniIppReady: boolean;
  description: string;
  descriptionBn?: string;
  descriptionHi?: string;
  descriptionRu?: string;
  errors: string[];
}

export interface UaeIbanBreakdown {
  isValid: boolean;
  iban: string;
  formattedIban: string; // AEkk BBBB CCCC CCCC CCCC CCC
  countryCode: string; // AE
  checkDigits: string; // kk (2 digits)
  bankCode: string; // 3 digits
  accountNumber: string; // 16 digits
  bankName: string;
  swiftCode: string;
  errors: string[];
}

export const CBUAE_BANK_CODES: Record<string, { name: string; shortName: string; swift: string; website: string }> = {
  '023': { name: 'Emirates NBD', shortName: 'Emirates NBD', swift: 'EBBDAEAD', website: 'emiratesnbd.com' },
  '035': { name: 'First Abu Dhabi Bank (FAB)', shortName: 'FAB', swift: 'NBADAEAD', website: 'bankfab.com' },
  '040': { name: 'Abu Dhabi Commercial Bank (ADCB)', shortName: 'ADCB', swift: 'ADCBAEAA', website: 'adcb.com' },
  '024': { name: 'Dubai Islamic Bank (DIB)', shortName: 'DIB', swift: 'DUBIAEAD', website: 'dib.ae' },
  '031': { name: 'Mashreq Bank', shortName: 'Mashreq', swift: 'BOMLAEAD', website: 'mashreqbank.com' },
  '048': { name: 'Abu Dhabi Islamic Bank (ADIB)', shortName: 'ADIB', swift: 'ADIBUAE2', website: 'adib.com' },
  '039': { name: 'Commercial Bank of Dubai (CBD)', shortName: 'CBD', swift: 'CBDUAE44', website: 'cbd.ae' },
  '045': { name: 'RAKBANK (National Bank of Ras Al Khaimah)', shortName: 'RAKBANK', swift: 'RAKBAEAA', website: 'rakbank.ae' },
  '049': { name: 'Emirates Islamic Bank', shortName: 'Emirates Islamic', swift: 'EBILAEAD', website: 'emiratesislamic.ae' },
  '042': { name: 'Sharjah Islamic Bank (SIB)', shortName: 'Sharjah Islamic', swift: 'NBSHAEAA', website: 'sib.ae' },
  '044': { name: 'National Bank of Fujairah (NBF)', shortName: 'NBF', swift: 'NBFJAEAA', website: 'nbf.ae' },
  '043': { name: 'National Bank of Umm Al Qaiwain (NBQ)', shortName: 'NBQ', swift: 'NBUQAEAA', website: 'nbq.ae' },
  '046': { name: 'Commercial Bank International (CBI)', shortName: 'CBI', swift: 'CBINAEAD', website: 'cbiuae.com' },
  '041': { name: 'Bank of Sharjah', shortName: 'Bank of Sharjah', swift: 'SHARAEAA', website: 'bankofsharjah.com' },
  '032': { name: 'HSBC Bank Middle East (UAE)', shortName: 'HSBC UAE', swift: 'BBMEAEAD', website: 'hsbc.ae' },
  '034': { name: 'Standard Chartered Bank UAE', shortName: 'Standard Chartered UAE', swift: 'SCBLAEAD', website: 'sc.com/ae' },
  '033': { name: 'Citibank UAE', shortName: 'Citibank UAE', swift: 'CITIAEAD', website: 'citibank.ae' },
  '050': { name: 'Al Maryah Community Bank (Mbank)', shortName: 'Mbank', swift: 'MBMNAEAD', website: 'mbank.ae' },
  '051': { name: 'Wio Bank PJSC', shortName: 'Wio Bank', swift: 'WIOBAEAD', website: 'wio.io' },
  '001': { name: 'Central Bank of the UAE (CBUAE)', shortName: 'CBUAE', swift: 'CBUAAEAD', website: 'centralbank.ae' }
};

export const UAE_EMIRATES_CODES: Record<string, { name: string; nameBn: string; nameHi: string; nameRu: string }> = {
  '01': { name: 'Dubai', nameBn: 'দুবাই', nameHi: 'दुबई', nameRu: 'Дубай' },
  '02': { name: 'Abu Dhabi', nameBn: 'আবুধাবি', nameHi: 'अबू धाबी', nameRu: 'Абу-Даби' },
  '03': { name: 'Sharjah', nameBn: 'শারজাহ', nameHi: 'शारजाह', nameRu: 'Шарджа' },
  '04': { name: 'Ajman', nameBn: 'আজমান', nameHi: 'अजमान', nameRu: 'Аджман' },
  '05': { name: 'Ras Al Khaimah', nameBn: 'রাস আল খাইমাহ', nameHi: 'रास अल खैमाह', nameRu: 'Рас-эль-Хайма' },
  '06': { name: 'Fujairah', nameBn: 'ফুজাইরাহ', nameHi: 'फुजैरा', nameRu: 'Фуджейра' },
  '07': { name: 'Umm Al Quwain', nameBn: 'উম্ম আল কুয়াইন', nameHi: 'उम्म अल क़ैवेन', nameRu: 'Умм-аль-Кайвайн' }
};

/**
 * Decodes and validates a UAE Central Bank 9-digit Routing Code or 3-digit CBUAE Bank Code
 */
export function decodeUaeRouting(code: string | null | undefined): UaeRoutingBreakdown {
  const errors: string[] = [];
  if (!code) {
    return {
      isValid: false,
      routingNumber: '',
      formattedDisplay: '',
      bankCode: '',
      emirateCode: '',
      branchCode: '',
      bankName: '',
      bankShortName: '',
      emirateName: '',
      emirateNameBn: '',
      emirateNameHi: '',
      emirateNameRu: '',
      swiftCode: '',
      isUaeFtsReady: false,
      isAaniIppReady: false,
      description: 'Please provide a valid 9-digit UAE routing number or 3-digit CBUAE bank clearing code.',
      errors: ['Empty routing code provided.']
    };
  }

  const cleaned = code.replace(/[^0-9]/g, '');

  if (cleaned.length === 3) {
    // 3-digit bank clearing code
    const bankInfo = CBUAE_BANK_CODES[cleaned];
    if (!bankInfo) {
      return {
        isValid: false,
        routingNumber: cleaned,
        formattedDisplay: cleaned,
        bankCode: cleaned,
        emirateCode: '',
        branchCode: '',
        bankName: 'Unknown UAE Financial Institution',
        bankShortName: 'Unknown',
        emirateName: 'UAE Nationwide',
        emirateNameBn: 'সংযুক্ত আরব আমিরাত',
        emirateNameHi: 'संयुक्त अरब अमीरात',
        emirateNameRu: 'ОАЭ',
        swiftCode: '',
        isUaeFtsReady: false,
        isAaniIppReady: false,
        description: `Unrecognized 3-digit CBUAE bank code: ${cleaned}.`,
        errors: [`Unassigned CBUAE bank clearing code: ${cleaned}`]
      };
    }

    return {
      isValid: true,
      routingNumber: cleaned,
      formattedDisplay: `CBUAE Code: ${cleaned}`,
      bankCode: cleaned,
      emirateCode: '00',
      branchCode: '000',
      bankName: bankInfo.name,
      bankShortName: bankInfo.shortName,
      emirateName: 'UAE Nationwide / Head Office',
      emirateNameBn: 'সংযুক্ত আরব আমিরাত ব্যাপী',
      emirateNameHi: 'संयुक्त अरब अमीरात राष्ट्रव्यापी',
      emirateNameRu: 'Общенациональный ОАЭ',
      swiftCode: bankInfo.swift,
      isUaeFtsReady: true,
      isAaniIppReady: true,
      description: `Official Central Bank of UAE (CBUAE) Clearing Code ${cleaned} for ${bankInfo.name}.`,
      descriptionBn: `সেন্ট্রাল ব্যাংক অব ইউএই (CBUAE) ক্লিয়ারিং কোড ${cleaned} — ${bankInfo.name}`,
      descriptionHi: `सेंट्रल बैंक ऑफ यूएई (CBUAE) क्लियरिंग कोड ${cleaned} — ${bankInfo.name}`,
      descriptionRu: `Официальный клиринговый код ЦБ ОАЭ (CBUAE) ${cleaned} для ${bankInfo.name}.`,
      errors: []
    };
  }

  if (cleaned.length !== 9) {
    errors.push(`Invalid UAE routing length (${cleaned.length} digits). Standard UAE clearing routing is 9 digits (BBBEEBBBB).`);
  }

  const bankCode = cleaned.slice(0, 3);
  const emirateCode = cleaned.slice(3, 5);
  const branchCode = cleaned.slice(5);

  const bankInfo = CBUAE_BANK_CODES[bankCode];
  if (!bankInfo) {
    errors.push(`Unknown CBUAE bank prefix: ${bankCode}`);
  }

  const emirateInfo = UAE_EMIRATES_CODES[emirateCode];
  if (!emirateInfo && emirateCode !== '00') {
    errors.push(`Unrecognized Emirate code: ${emirateCode}`);
  }

  const isValid = errors.length === 0;
  const bankName = bankInfo ? bankInfo.name : 'Unknown Financial Institution';
  const bankShortName = bankInfo ? bankInfo.shortName : bankCode;
  const emirateName = emirateInfo ? emirateInfo.name : (emirateCode === '00' ? 'UAE Nationwide' : 'Unknown Emirate');
  const emirateNameBn = emirateInfo ? emirateInfo.nameBn : 'সংযুক্ত আরব আমিরাত';
  const emirateNameHi = emirateInfo ? emirateInfo.nameHi : 'संयुक्त अरब अमीरात';
  const emirateNameRu = emirateInfo ? emirateInfo.nameRu : 'ОАЭ';
  const swiftCode = bankInfo ? bankInfo.swift : '';

  const formattedDisplay = `${bankCode}-${emirateCode}-${branchCode}`;

  return {
    isValid,
    routingNumber: cleaned,
    formattedDisplay,
    bankCode,
    emirateCode,
    branchCode,
    bankName,
    bankShortName,
    emirateName,
    emirateNameBn,
    emirateNameHi,
    emirateNameRu,
    swiftCode,
    isUaeFtsReady: true,
    isAaniIppReady: true,
    description: `Official UAE Central Bank Routing ${cleaned} (${formattedDisplay}) for ${bankName}, ${emirateName}.`,
    descriptionBn: `ইউএই সেন্ট্রাল ব্যাংক রাউটিং ${cleaned} — ${bankName}, ${emirateNameBn}।`,
    descriptionHi: `यूएई सेंट्रल बैंक रूटिंग ${cleaned} — ${bankName}, ${emirateNameHi}।`,
    descriptionRu: `Официальный маршрутный номер ЦБ ОАЭ ${cleaned} для ${bankName}, ${emirateNameRu}.`,
    errors
  };
}

/**
 * Validates and decodes UAE IBAN format (AEkk BBBC CCCC CCCC CCCC CCC - 23 chars)
 */
export function decodeUaeIban(ibanStr: string | null | undefined): UaeIbanBreakdown {
  const errors: string[] = [];
  if (!ibanStr) {
    return {
      isValid: false,
      iban: '',
      formattedIban: '',
      countryCode: '',
      checkDigits: '',
      bankCode: '',
      accountNumber: '',
      bankName: '',
      swiftCode: '',
      errors: ['Empty IBAN string provided.']
    };
  }

  const cleaned = ibanStr.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  if (cleaned.length !== 23) {
    errors.push(`Invalid UAE IBAN length: ${cleaned.length} chars (UAE IBAN must be exactly 23 characters).`);
  }

  if (!cleaned.startsWith('AE')) {
    errors.push(`Invalid country prefix: "${cleaned.slice(0, 2)}" (UAE IBAN must start with "AE").`);
  }

  const countryCode = cleaned.slice(0, 2);
  const checkDigits = cleaned.slice(2, 4);
  const bankCode = cleaned.slice(4, 7);
  const accountNumber = cleaned.slice(7);

  const bankInfo = CBUAE_BANK_CODES[bankCode];
  if (!bankInfo) {
    errors.push(`Unrecognized 3-digit bank identifier in IBAN: ${bankCode}`);
  }

  const formattedIban = `${countryCode}${checkDigits} ${bankCode} ${accountNumber.slice(0, 4)} ${accountNumber.slice(4, 8)} ${accountNumber.slice(8, 12)} ${accountNumber.slice(12)}`;

  return {
    isValid: errors.length === 0,
    iban: cleaned,
    formattedIban,
    countryCode,
    checkDigits,
    bankCode,
    accountNumber,
    bankName: bankInfo ? bankInfo.name : 'Unknown Bank',
    swiftCode: bankInfo ? bankInfo.swift : '',
    errors
  };
}

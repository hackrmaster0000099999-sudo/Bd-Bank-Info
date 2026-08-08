import { RoutingBreakdown, Bank } from '../types';
import banksData from '../data/banks.json';

// Common Bangladesh District Code mapping used in BEFTN
const DISTRICT_CODES: Record<string, { en: string; bn: string }> = {
  '10': { en: 'Bogura', bn: 'বগুড়া' },
  '15': { en: 'Chattogram', bn: 'চট্টগ্রাম' },
  '26': { en: 'Dhaka', bn: 'ঢাকা' },
  '47': { en: 'Khulna', bn: 'খুলনা' },
  '61': { en: 'Mymensingh', bn: 'ময়মনসিংহ' },
  '81': { en: 'Rajshahi', bn: 'রাজশাহী' },
  '82': { en: 'Sylhet', bn: 'সিলেট' },
  '85': { en: 'Rangpur', bn: 'রংপুর' },
  '06': { en: 'Barishal', bn: 'বরিশাল' },
  '19': { en: 'Comilla', bn: 'কুমিল্লা' },
  '22': { en: 'Cox\'s Bazar', bn: 'কক্সবাজার' },
  '33': { en: 'Gazipur', bn: 'গাজীপুর' },
  '55': { en: 'Narayanganj', bn: 'নারায়ণগঞ্জ' }
};

// Convert Bengali numbers to English
export function convertBnToEnNum(str: string): string {
  const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return str.replace(/[০-৯]/g, (w) => bnNums.indexOf(w).toString());
}

// Convert English numbers to Bengali
export function convertEnToBnNum(str: string | number): string {
  const enStr = str.toString();
  const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return enStr.replace(/[0-9]/g, (w) => bnNums[parseInt(w, 10)]);
}

export function decodeRoutingNumber(rawRouting: string): RoutingBreakdown {
  const routing = convertBnToEnNum(rawRouting.trim().replace(/\D/g, ''));
  const isValid = routing.length === 9;

  if (!isValid) {
    return {
      routingNumber: routing,
      isValid: false,
      bankCode: '',
      districtCode: '',
      branchCode: ''
    };
  }

  const bankCode = routing.substring(0, 3);
  const districtCode = routing.substring(3, 5);
  const branchCode = routing.substring(5, 9);

  const bank = (banksData as Bank[]).find((b) => b.bank_code === bankCode);
  const districtInfo = DISTRICT_CODES[districtCode];

  return {
    routingNumber: routing,
    isValid: true,
    bankCode,
    districtCode,
    branchCode,
    bank,
    districtName: districtInfo ? `${districtInfo.en} / ${districtInfo.bn}` : `District Code ${districtCode}`
  };
}

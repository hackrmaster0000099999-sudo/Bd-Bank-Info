export interface AbaBreakdown {
  routingNumber: string;
  isValid: boolean;
  fedDistrictCode: string;
  fedDistrictName: string;
  institutionType: string;
  checkDigit: number;
  calculatedChecksum: number;
  reason?: string;
}

const FED_DISTRICT_MAP: Record<string, { name: string; region: string }> = {
  '01': { name: 'Federal Reserve Bank of Boston', region: 'CT, MA, ME, NH, RI, VT' },
  '02': { name: 'Federal Reserve Bank of New York', region: 'NY, Northern NJ, PR, USVI' },
  '03': { name: 'Federal Reserve Bank of Philadelphia', region: 'Eastern PA, Southern NJ, DE' },
  '04': { name: 'Federal Reserve Bank of Cleveland', region: 'OH, Western PA, Eastern KY, Northern WV' },
  '05': { name: 'Federal Reserve Bank of Richmond', region: 'DC, MD, NC, SC, VA, WV' },
  '06': { name: 'Federal Reserve Bank of Atlanta', region: 'AL, FL, GA, Eastern TN, Southern MS, Southern LA' },
  '07': { name: 'Federal Reserve Bank of Chicago', region: 'Northern IL, Northern IN, IA, Lower MI, Southern WI' },
  '08': { name: 'Federal Reserve Bank of St. Louis', region: 'AR, Southern IL, Southern IN, Western KY, Eastern MO, Northern MS, Western TN' },
  '09': { name: 'Federal Reserve Bank of Minneapolis', region: 'MN, MT, ND, SD, Northwestern WI, Upper MI' },
  '10': { name: 'Federal Reserve Bank of Kansas City', region: 'CO, KS, NE, OK, WY, Northern NM, Western MO' },
  '11': { name: 'Federal Reserve Bank of Dallas', region: 'TX, Northern LA, Southern NM' },
  '12': { name: 'Federal Reserve Bank of San Francisco', region: 'AK, AZ, CA, HI, ID, NV, OR, UT, WA, Guam' }
};

export function validateAbaRouting(routing: string): AbaBreakdown {
  const clean = routing.replace(/\D/g, '');

  if (clean.length !== 9) {
    return {
      routingNumber: clean,
      isValid: false,
      fedDistrictCode: '',
      fedDistrictName: '',
      institutionType: '',
      checkDigit: 0,
      calculatedChecksum: 0,
      reason: 'US ABA Routing Numbers must be exactly 9 numeric digits.'
    };
  }

  const digits = clean.split('').map(Number);
  const weights = [3, 7, 1, 3, 7, 1, 3, 7, 1];
  
  const sum = digits.reduce((acc, digit, idx) => acc + digit * weights[idx], 0);
  const isValid = sum % 10 === 0;

  const prefix = clean.substring(0, 2);
  const prefixNum = parseInt(prefix, 10);

  let fedDistrictCode = prefix;
  let fedDistrictName = 'Federal Reserve System';
  let institutionType = 'Commercial Bank';

  if (FED_DISTRICT_MAP[prefix]) {
    fedDistrictCode = prefix;
    fedDistrictName = FED_DISTRICT_MAP[prefix].name;
    institutionType = 'Commercial Bank / Federal Reserve Member';
  } else if (prefixNum >= 21 && prefixNum <= 32) {
    const baseDistrict = String(prefixNum - 20).padStart(2, '0');
    fedDistrictCode = baseDistrict;
    fedDistrictName = FED_DISTRICT_MAP[baseDistrict]?.name || 'Federal Reserve District';
    institutionType = 'Thrift Institution / Savings Association / Credit Union';
  } else if (prefixNum >= 61 && prefixNum <= 72) {
    const baseDistrict = String(prefixNum - 60).padStart(2, '0');
    fedDistrictCode = baseDistrict;
    fedDistrictName = FED_DISTRICT_MAP[baseDistrict]?.name || 'Federal Reserve District';
    institutionType = 'Electronic / ACH / Wire Settlement';
  } else if (prefixNum === 80) {
    institutionType = 'Traveler Checks';
  }

  return {
    routingNumber: clean,
    isValid,
    fedDistrictCode,
    fedDistrictName,
    institutionType,
    checkDigit: digits[8],
    calculatedChecksum: sum % 10,
    reason: isValid ? undefined : 'Failed ABA Mod-10 Checksum: (3*(d1+d4+d7) + 7*(d2+d5+d8) + 1*(d3+d6+d9)) mod 10 must equal 0'
  };
}

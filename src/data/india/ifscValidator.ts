/**
 * Indian Financial System Code (IFSC) & MICR Validator Engine
 * Format: 11 characters (4 letters bank code, 5th is '0', last 6 alphanumeric branch code)
 */

export interface IfscValidationResult {
  isValid: boolean;
  ifscCode: string;
  bankCode: string;
  branchCode: string;
  possibleBankName?: string;
  isNeftSupported: boolean;
  isRtgsSupported: boolean;
  isImpsSupported: boolean;
  isUpiSupported: boolean;
  error?: string;
}

const INDIAN_IFSC_PREFIX_MAP: Record<string, string> = {
  'SBIN': 'State Bank of India',
  'HDFC': 'HDFC Bank',
  'ICIC': 'ICICI Bank',
  'PUNB': 'Punjab National Bank',
  'BARB': 'Bank of Baroda',
  'UTIB': 'Axis Bank',
  'CNRB': 'Canara Bank',
  'KKBK': 'Kotak Mahindra Bank',
  'UBIN': 'Union Bank of India',
  'INDB': 'IndusInd Bank',
  'BKID': 'Bank of India',
  'YESB': 'YES Bank',
  'CBIN': 'Central Bank of India',
  'IDIB': 'Indian Bank',
  'FDRL': 'Federal Bank',
  'IOBA': 'Indian Overseas Bank',
  'MAHB': 'Bank of Maharashtra',
  'UCBA': 'UCO Bank',
  'PSIB': 'Punjab & Sind Bank',
  'IDFB': 'IDFC FIRST Bank',
  'RBIS': 'Reserve Bank of India'
};

export function cleanIfscCode(input: string): string {
  if (!input) return '';
  return input.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export function validateIfscCode(input: string): IfscValidationResult {
  const code = cleanIfscCode(input);

  if (code.length === 0) {
    return {
      isValid: false,
      ifscCode: '',
      bankCode: '',
      branchCode: '',
      isNeftSupported: false,
      isRtgsSupported: false,
      isImpsSupported: false,
      isUpiSupported: false,
      error: 'Please enter an 11-character Indian IFSC code'
    };
  }

  // IFSC format: 4 alphabetic characters + '0' + 6 alphanumeric characters
  const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

  if (!ifscRegex.test(code)) {
    let errorMsg = 'Invalid IFSC code format (e.g. SBIN0000001 or HDFC0000060)';
    if (code.length !== 11) {
      errorMsg = `IFSC code must be exactly 11 characters (currently ${code.length})`;
    } else if (code[4] !== '0') {
      errorMsg = "The 5th character of an Indian IFSC code must always be '0'";
    } else if (!/^[A-Z]{4}/.test(code)) {
      errorMsg = 'First 4 characters must be letters representing the Bank Code';
    }

    return {
      isValid: false,
      ifscCode: code,
      bankCode: code.slice(0, 4),
      branchCode: code.slice(5),
      isNeftSupported: false,
      isRtgsSupported: false,
      isImpsSupported: false,
      isUpiSupported: false,
      error: errorMsg
    };
  }

  const bankCode = code.slice(0, 4);
  const branchCode = code.slice(5);
  const possibleBankName = INDIAN_IFSC_PREFIX_MAP[bankCode] || 'Indian Scheduled Commercial Bank';

  return {
    isValid: true,
    ifscCode: code,
    bankCode,
    branchCode,
    possibleBankName,
    isNeftSupported: true,
    isRtgsSupported: true,
    isImpsSupported: true,
    isUpiSupported: true
  };
}

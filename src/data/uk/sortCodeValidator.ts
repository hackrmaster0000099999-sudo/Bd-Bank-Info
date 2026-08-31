/**
 * UK Sort Code Validator & Utility Engine
 * 6-digit number formatted as XX-XX-XX used in UK banking for BACS, FPS, and CHAPS.
 */

export interface SortCodeValidationResult {
  isValid: boolean;
  formattedSortCode: string;
  rawSortCode: string;
  bankPrefix: string;
  possibleBankName?: string;
  isBacsSupported?: boolean;
  isFpsSupported?: boolean;
  isChapsSupported?: boolean;
  error?: string;
}

// Major UK Bank Sort Code Prefixes
const UK_SORT_CODE_PREFIX_MAP: Record<string, string> = {
  '20': 'Barclays Bank',
  '40': 'HSBC UK',
  '30': 'Lloyds Bank',
  '60': 'NatWest (National Westminster Bank)',
  '09': 'Santander UK',
  '08': 'The Co-operative Bank',
  '80': 'Bank of Scotland',
  '83': 'Royal Bank of Scotland',
  '11': 'Halifax',
  '07': 'Nationwide Building Society',
  '77': 'TSB Bank',
  '18': 'Virgin Money',
  '23': 'Metro Bank',
  '04': 'Monzo Bank',
  '06': 'Starling Bank',
  '66': 'Standard Chartered UK',
  '98': 'Ulster Bank'
};

export function cleanSortCode(input: string): string {
  if (!input) return '';
  return input.replace(/[^0-9]/g, '');
}

export function formatSortCode(input: string): string {
  const digits = cleanSortCode(input);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 6)}`;
}

export function validateSortCode(input: string): SortCodeValidationResult {
  const raw = cleanSortCode(input);

  if (raw.length === 0) {
    return {
      isValid: false,
      formattedSortCode: '',
      rawSortCode: '',
      bankPrefix: '',
      error: 'Please enter a 6-digit UK Sort Code'
    };
  }

  if (raw.length !== 6) {
    return {
      isValid: false,
      formattedSortCode: formatSortCode(raw),
      rawSortCode: raw,
      bankPrefix: raw.slice(0, 2),
      error: `UK Sort code must be exactly 6 digits (currently ${raw.length} digits)`
    };
  }

  const prefix = raw.slice(0, 2);
  const possibleBankName = UK_SORT_CODE_PREFIX_MAP[prefix] || 'UK Financial Institution';

  return {
    isValid: true,
    formattedSortCode: `${raw.slice(0, 2)}-${raw.slice(2, 4)}-${raw.slice(4, 6)}`,
    rawSortCode: raw,
    bankPrefix: prefix,
    possibleBankName,
    isBacsSupported: true,
    isFpsSupported: true,
    isChapsSupported: true
  };
}

export type Language = 'bn' | 'en' | 'hi' | 'ru';
export type Country = 'all' | 'bd' | 'in' | 'ru' | 'us';

export interface Bank {
  id: string; // slug, e.g., 'islami-bank-bangladesh', 'state-bank-of-india', 'sberbank', or 'chase-bank'
  name: string; // English
  name_bn?: string; // Bengali
  name_hi?: string; // Hindi
  name_ru?: string; // Russian
  short_name: string;
  country: 'bd' | 'in' | 'ru' | 'us'; // 'bd' for Bangladesh, 'in' for India, 'ru' for Russia, 'us' for United States
  bank_code: string; // 3-digit BEFTN, Indian Bank code, 3-digit Russian, or 4-digit ABA Fed prefix
  routing_number?: string; // 9-digit ABA routing number for US banks
  ach_routing?: string; // Electronic / Direct Deposit ACH Routing Number
  wire_routing?: string; // Fedwire / Wire Transfer Routing Number
  bik_code?: string; // 9-digit Russian BIK (БИК) Code
  corr_account?: string; // 20-digit Russian Correspondent Account (Корр. счет)
  inn?: string; // 10-digit Taxpayer Identification Number (ИНН)
  kpp?: string; // 9-digit Tax Registration Reason Code (КПП)
  ogrn?: string; // 13-digit Primary State Registration Number (ОГРН)
  swift_code: string; // Head office SWIFT/BIC
  ifsc_prefix?: string; // e.g. SBIN, HDFC, ICIC
  head_office: string;
  head_office_bn?: string;
  head_office_hi?: string;
  head_office_ru?: string;
  website: string;
  branch_count: number;
  established?: string;
  fdic_cert?: string; // US FDIC Certificate Number
  fed_district?: string; // US Federal Reserve District (e.g. 02 - New York)
  type?: 'Private Commercial' | 'State-Owned Commercial' | 'Foreign Commercial' | 'Specialized' | 'Public Sector' | 'Private Sector' | 'Small Finance' | 'State Commercial' | 'Universal Commercial' | 'Fintech Bank' | 'Systemically Important' | 'National Bank' | 'State Commercial Bank' | 'Federal Savings Bank' | 'Universal Bank';
  former_names?: string[]; // Former name for renamed/merged banks
  redirect_to?: string; // Slug for merged bank
}

export interface Branch {
  id: string; // e.g., 'chase-newyork-main-021000021' or 'sbi-mumbai-main-sbin0000300'
  bank_id: string;
  bank_name: string;
  bank_name_bn?: string;
  bank_name_hi?: string;
  bank_name_ru?: string;
  bank_short_name: string;
  country: 'bd' | 'in' | 'ru' | 'us';
  name: string; // English
  name_bn?: string; // Bengali
  name_hi?: string; // Hindi
  name_ru?: string; // Russian
  division: string; // Division in BD, State in India/US, Federal Subject in Russia
  division_bn?: string;
  division_hi?: string;
  division_ru?: string;
  district: string; // District / County / City in English
  district_bn?: string;
  district_hi?: string;
  district_ru?: string;
  upazila?: string; // Upazila / City / Locality / Borough
  upazila_bn?: string;
  upazila_hi?: string;
  upazila_ru?: string;
  address: string;
  address_bn?: string;
  address_hi?: string;
  address_ru?: string;
  zip_code?: string; // 5-digit US Zip Code
  routing_number: string; // 9-digit ABA Routing Number, 9-digit BEFTN, MICR, or BIK code
  ach_routing?: string; // Electronic / ACH Routing Number
  wire_routing?: string; // Fedwire Routing Number
  bik_code?: string; // 9-digit Russian BIK (БИК) Code
  corr_account?: string; // 20-digit Russian Correspondent Account (Корр. счет)
  inn?: string; // 10-digit INN
  kpp?: string; // 9-digit KPP
  ifsc_code?: string; // 11-character Indian IFSC code (e.g. SBIN0000300)
  micr_code?: string; // 9-digit MICR code
  swift_code?: string; // Branch-specific or head office SWIFT
  uses_head_office_swift?: boolean;
  branch_code: string; // Branch / transit code
  phone?: string;
  email?: string;
  status: 'active' | 'relocated' | 'merged';
}

export interface FilterState {
  country: Country;
  bankId: string;
  division: string;
  district: string;
  searchType: 'all' | 'routing' | 'swift' | 'branch' | 'ifsc' | 'bik';
}

export interface SearchResult {
  type: 'bank' | 'branch' | 'routing' | 'swift' | 'ifsc' | 'bik';
  id: string;
  title: string;
  title_bn?: string;
  title_hi?: string;
  title_ru?: string;
  subtitle: string;
  subtitle_bn?: string;
  subtitle_hi?: string;
  subtitle_ru?: string;
  routing_number?: string;
  bik_code?: string;
  corr_account?: string;
  ifsc_code?: string;
  swift_code?: string;
  country: 'bd' | 'in' | 'ru' | 'us';
  bank_id: string;
  bank_name: string;
  bank_name_bn?: string;
  bank_name_hi?: string;
  bank_name_ru?: string;
  district?: string;
  district_bn?: string;
  district_hi?: string;
  district_ru?: string;
  division?: string;
  division_bn?: string;
  division_hi?: string;
  division_ru?: string;
  matchedField?: string;
  score?: number;
  item: Bank | Branch;
}

export interface RoutingBreakdown {
  routingNumber: string;
  isValid: boolean;
  bankCode: string; // 3 digits
  districtCode: string; // 2 digits
  branchCode: string; // 4 digits
  bank?: Bank;
  districtName?: string;
  branchName?: string;
}

export interface BikBreakdown {
  bikCode: string;
  isValid: boolean;
  countryCode: string; // 04 (Russia)
  countryName?: string;
  regionCode: string; // 2 digits OKATO
  regionName: string;
  regionNameRu: string;
  settlementCenterCode: string; // 2 digits RKC
  creditOrgCode: string; // 3 digits branch/head code
  branchIndex?: string; // 3 digits branch index
  bank?: Bank;
  branchName?: string;
  corrAccount?: string;
}

export interface ChangeLogItem {
  version: string;
  date: string;
  title: string;
  title_bn: string;
  description: string;
  description_bn: string;
  changes: string[];
  bb_ref_no?: string;
}

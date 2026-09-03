export type Language = 'bn' | 'en' | 'hi' | 'ru';
export type Country = 'all' | 'bd' | 'in' | 'ru' | 'us' | 'uk' | 'ca' | 'au' | 'ae' | 'sg';

export interface Bank {
  id: string; // slug, e.g., 'islami-bank-bangladesh', 'state-bank-of-india', 'sberbank', 'chase-bank', 'barclays-bank', 'rbc-royal-bank', 'commonwealth-bank', 'emirates-nbd', 'dbs-bank-singapore'
  name: string; // English
  name_bn?: string; // Bengali
  name_hi?: string; // Hindi
  name_ru?: string; // Russian
  short_name: string;
  country: 'bd' | 'in' | 'ru' | 'us' | 'uk' | 'ca' | 'au' | 'ae' | 'sg'; // 'bd' for Bangladesh, 'in' for India, 'ru' for Russia, 'us' for United States, 'uk' for United Kingdom, 'ca' for Canada, 'au' for Australia, 'ae' for United Arab Emirates, 'sg' for Singapore
  bank_code: string; // 3-digit BEFTN, Indian Bank code, 3-digit Russian, 4-digit ABA Fed prefix, 2-digit UK Prefix, 3-digit Canadian Institution Number, 2-digit Australian BSB prefix, or 3-digit UAE CBUAE code
  routing_number?: string; // 9-digit ABA routing number for US / 9-digit EFT Routing (0YYYXXXXX) for Canada / 9-digit UAE Central Bank Routing
  bsb_code?: string; // 6-digit Australian BSB Code (e.g. 062-000)
  cbuae_code?: string; // 3-digit Central Bank of UAE Bank Code (e.g. 023)
  transit_number?: string; // 5-digit Canadian Transit Number (XXXXX)
  institution_number?: string; // 3-digit Canadian Institution Number (YYY)
  sort_code?: string; // 6-digit UK Sort Code (e.g. 20-00-00)
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
  fca_frn?: string; // UK Financial Conduct Authority FRN Number
  apca_code?: string; // Australian Payments Network (APCA) Code
  type?: 'Private Commercial' | 'State-Owned Commercial' | 'Foreign Commercial' | 'Specialized' | 'Public Sector' | 'Private Sector' | 'Small Finance' | 'State Commercial' | 'Universal Commercial' | 'Fintech Bank' | 'Systemically Important' | 'National Bank' | 'State Commercial Bank' | 'Federal Savings Bank' | 'Universal Bank' | 'UK Retail Bank' | 'UK Clearing Bank' | 'Australian Major Bank' | 'Australian Regional Bank' | 'Australian Customer-Owned Bank' | 'UAE National Bank' | 'UAE Islamic Bank' | 'UAE Foreign Commercial Bank' | 'UAE Digital Bank';
  former_names?: string[]; // Former name for renamed/merged banks
  redirect_to?: string; // Slug for merged bank
}

export interface Branch {
  id: string; // e.g., 'chase-newyork-main-021000021' or 'barclays-london-main-200000' or 'cba-sydney-main-062000' or 'enbd-dubai-main-023010001'
  bank_id: string;
  bank_name: string;
  bank_name_bn?: string;
  bank_name_hi?: string;
  bank_name_ru?: string;
  bank_short_name: string;
  country: 'bd' | 'in' | 'ru' | 'us' | 'uk' | 'ca' | 'au' | 'ae' | 'sg';
  name: string; // English
  name_bn?: string; // Bengali
  name_hi?: string; // Hindi
  name_ru?: string; // Russian
  division: string; // Division in BD, State in India/US/Australia, Federal Subject in Russia, Country/Region in UK, Province in Canada, Emirate in UAE
  division_bn?: string;
  division_hi?: string;
  division_ru?: string;
  district: string; // District / County / City / LGA in English
  district_bn?: string;
  district_hi?: string;
  district_ru?: string;
  upazila?: string; // Upazila / City / Locality / Suburb / Community
  upazila_bn?: string;
  upazila_hi?: string;
  upazila_ru?: string;
  address: string;
  address_bn?: string;
  address_hi?: string;
  address_ru?: string;
  zip_code?: string; // US Zip Code, UK Postcode, Canadian Postal Code, Australian 4-digit Postcode, or UAE PO Box
  routing_number: string; // 9-digit ABA Routing Number, 9-digit BEFTN, MICR, BIK, 6-digit UK Sort Code, 6-digit Australian BSB, 9-digit Canadian EFT Routing, or 9-digit UAE CBUAE Routing (023010001)
  bsb_code?: string; // 6-digit Australian BSB Code (e.g. 062-000)
  clearing_code?: string; // 7-digit Singapore Clearing Code (e.g. 7171-001)
  bank_code?: string; // 4-digit Singapore Bank Code or 3-digit CBUAE code
  cbuae_code?: string; // 3-digit CBUAE Bank Code
  transit_number?: string; // 5-digit Canadian Transit Number
  institution_number?: string; // 3-digit Canadian Institution Number
  sort_code?: string; // 6-digit UK Sort Code (e.g. 20-00-00)
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
  branch_code: string; // Branch / transit code / BSB
  phone?: string;
  email?: string;
  status: 'active' | 'relocated' | 'merged';
}

export interface FilterState {
  country: Country;
  bankId: string;
  division: string;
  district: string;
  searchType: 'all' | 'routing' | 'swift' | 'branch' | 'ifsc' | 'bik' | 'sortcode' | 'bsb';
}

export interface SearchResult {
  type: 'bank' | 'branch' | 'routing' | 'swift' | 'ifsc' | 'bik' | 'sortcode' | 'bsb';
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
  bsb_code?: string;
  transit_number?: string;
  institution_number?: string;
  sort_code?: string;
  bik_code?: string;
  corr_account?: string;
  ifsc_code?: string;
  swift_code?: string;
  country: 'bd' | 'in' | 'ru' | 'us' | 'uk' | 'ca' | 'au' | 'ae' | 'sg';
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

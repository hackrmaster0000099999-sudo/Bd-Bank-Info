export type Language = 'bn' | 'en' | 'hi';
export type Country = 'all' | 'bd' | 'in';

export interface Bank {
  id: string; // slug, e.g., 'islami-bank-bangladesh' or 'state-bank-of-india'
  name: string; // English
  name_bn?: string; // Bengali
  name_hi?: string; // Hindi
  short_name: string;
  country: 'bd' | 'in'; // 'bd' for Bangladesh, 'in' for India
  bank_code: string; // 3-digit BEFTN bank code or Indian Bank code
  swift_code: string; // Head office SWIFT/BIC
  ifsc_prefix?: string; // e.g. SBIN, HDFC, ICIC
  head_office: string;
  head_office_bn?: string;
  head_office_hi?: string;
  website: string;
  branch_count: number;
  established?: string;
  type?: 'Private Commercial' | 'State-Owned Commercial' | 'Foreign Commercial' | 'Specialized' | 'Public Sector' | 'Private Sector' | 'Small Finance';
  former_names?: string[]; // Former name for renamed/merged banks
  redirect_to?: string; // Slug for merged bank
}

export interface Branch {
  id: string; // e.g., 'sbi-mumbai-main-sbin0000300' or 'ibbl-dhaka-main-125260001'
  bank_id: string;
  bank_name: string;
  bank_name_bn?: string;
  bank_name_hi?: string;
  bank_short_name: string;
  country: 'bd' | 'in';
  name: string; // English
  name_bn?: string; // Bengali
  name_hi?: string; // Hindi
  division: string; // Division in Bangladesh or State in India
  division_bn?: string;
  division_hi?: string;
  district: string; // District in English
  district_bn?: string;
  district_hi?: string;
  upazila?: string; // Upazila / City / Locality
  upazila_bn?: string;
  upazila_hi?: string;
  address: string;
  address_bn?: string;
  address_hi?: string;
  routing_number: string; // 9-digit BEFTN routing number or 9-digit MICR code in India
  ifsc_code?: string; // 11-character Indian IFSC code (e.g. SBIN0000300)
  micr_code?: string; // 9-digit MICR code
  swift_code?: string; // Branch-specific or head office SWIFT
  uses_head_office_swift?: boolean;
  branch_code: string; // 4 or 6 digit branch code
  phone?: string;
  email?: string;
  status: 'active' | 'relocated' | 'merged';
}

export interface FilterState {
  country: Country;
  bankId: string;
  division: string;
  district: string;
  searchType: 'all' | 'routing' | 'swift' | 'branch' | 'ifsc';
}

export interface SearchResult {
  type: 'bank' | 'branch' | 'routing' | 'swift' | 'ifsc';
  id: string;
  title: string;
  title_bn?: string;
  title_hi?: string;
  subtitle: string;
  subtitle_bn?: string;
  subtitle_hi?: string;
  routing_number?: string;
  ifsc_code?: string;
  swift_code?: string;
  country: 'bd' | 'in';
  bank_id: string;
  bank_name: string;
  bank_name_bn?: string;
  bank_name_hi?: string;
  district?: string;
  district_bn?: string;
  district_hi?: string;
  division?: string;
  division_bn?: string;
  division_hi?: string;
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

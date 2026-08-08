export type Language = 'bn' | 'en';

export interface Bank {
  id: string; // slug, e.g., 'islami-bank-bangladesh'
  name: string; // English
  name_bn: string; // Bengali
  short_name: string;
  bank_code: string; // 3-digit BEFTN bank code
  swift_code: string; // Head office SWIFT/BIC
  head_office: string;
  head_office_bn: string;
  website: string;
  branch_count: number;
  established?: string;
  type?: 'Private Commercial' | 'State-Owned Commercial' | 'Foreign Commercial' | 'Specialized';
  former_names?: string[]; // Former name for renamed/merged banks
  redirect_to?: string; // Slug for merged bank
}

export interface Branch {
  id: string; // e.g., 'ibbl-dhaka-main-085260123'
  bank_id: string;
  bank_name: string;
  bank_name_bn: string;
  bank_short_name: string;
  name: string; // English
  name_bn: string; // Bengali
  division: string; // Division in English
  division_bn: string;
  district: string; // District in English
  district_bn: string;
  upazila?: string;
  upazila_bn?: string;
  address: string;
  address_bn: string;
  routing_number: string; // 9-digit BEFTN routing number
  swift_code?: string; // Branch-specific or head office SWIFT
  uses_head_office_swift?: boolean;
  branch_code: string; // 4-digit branch code
  phone?: string;
  email?: string;
  status: 'active' | 'relocated' | 'merged';
}

export interface FilterState {
  bankId: string;
  division: string;
  district: string;
  searchType: 'all' | 'routing' | 'swift' | 'branch';
}

export interface SearchResult {
  type: 'bank' | 'branch' | 'routing' | 'swift';
  id: string;
  title: string;
  title_bn: string;
  subtitle: string;
  subtitle_bn: string;
  routing_number?: string;
  swift_code?: string;
  bank_id: string;
  bank_name: string;
  bank_name_bn: string;
  district?: string;
  district_bn?: string;
  division?: string;
  division_bn?: string;
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

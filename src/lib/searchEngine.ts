import { Bank, Branch, SearchResult, FilterState, Country, Language } from '../types';
import bdBanksData from '../data/banks.json';
import inBanksData from '../data/indian_banks.json';
import { allBranches } from '../data/branches/index';
import { convertBnToEnNum } from './routingDecoder';

// Ensure all BD banks have country='bd'
const bdBanks: Bank[] = (bdBanksData as any[]).map((b) => ({
  ...b,
  country: 'bd' as const,
}));

const inBanks: Bank[] = (inBanksData as any[]).map((b) => ({
  ...b,
  country: 'in' as const,
}));

const allBanksList: Bank[] = [...bdBanks, ...inBanks];

// Ensure all branches have appropriate country tags
const branches: Branch[] = allBranches.map((br) => ({
  ...br,
  country: br.country || (br.routing_number && br.routing_number.length === 9 && !br.ifsc_code ? 'bd' : 'in'),
}));

export function getBanks(country?: Country): Bank[] {
  if (!country || country === 'all') return allBanksList;
  return allBanksList.filter((b) => b.country === country);
}

export function getBranches(country?: Country): Branch[] {
  if (!country || country === 'all') return branches;
  return branches.filter((br) => br.country === country);
}

export function getBankBySlug(slug: string): Bank | undefined {
  const clean = slug.toLowerCase();
  return allBanksList.find((b) => b.id.toLowerCase() === clean);
}

export function getBranchesForBank(bankId: string): Branch[] {
  return branches.filter((br) => br.bank_id === bankId || br.bank_id.toLowerCase() === bankId.toLowerCase());
}

export function getBranchBySlug(bankSlug: string, branchSlug: string): Branch | undefined {
  return branches.find(
    (br) =>
      br.bank_id.toLowerCase() === bankSlug.toLowerCase() &&
      (br.id.toLowerCase() === branchSlug.toLowerCase() ||
        br.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === branchSlug.toLowerCase())
  );
}

export function getDivisions(country?: Country): { en: string; bn: string; hi?: string }[] {
  const map = new Map<string, { bn: string; hi?: string }>();
  const list = country && country !== 'all' ? branches.filter((b) => b.country === country) : branches;
  
  list.forEach((br) => {
    if (br.division && !map.has(br.division)) {
      map.set(br.division, { bn: br.division_bn || br.division, hi: br.division_hi || br.division });
    }
  });
  return Array.from(map.entries()).map(([en, val]) => ({ en, bn: val.bn, hi: val.hi }));
}

export function getDistricts(divisionFilter?: string, country?: Country): { en: string; bn: string; hi?: string }[] {
  const map = new Map<string, { bn: string; hi?: string }>();
  let list = country && country !== 'all' ? branches.filter((b) => b.country === country) : branches;
  
  if (divisionFilter && divisionFilter !== 'all') {
    list = list.filter((br) => br.division.toLowerCase() === divisionFilter.toLowerCase());
  }

  list.forEach((br) => {
    if (br.district && !map.has(br.district)) {
      map.set(br.district, { bn: br.district_bn || br.district, hi: br.district_hi || br.district });
    }
  });
  return Array.from(map.entries()).map(([en, val]) => ({ en, bn: val.bn, hi: val.hi }));
}

export function searchAll(query: string, filters?: Partial<FilterState>): SearchResult[] {
  const cleanRawQuery = query.trim();
  const normalizedNumQuery = convertBnToEnNum(cleanRawQuery).toLowerCase();
  const normalizedTextQuery = cleanRawQuery.toLowerCase();

  const results: SearchResult[] = [];

  // Filter conditions
  const filterCountry = filters?.country && filters.country !== 'all' ? filters.country : null;
  const filterBank = filters?.bankId && filters.bankId !== 'all' ? filters.bankId : null;
  const filterDiv = filters?.division && filters.division !== 'all' ? filters.division.toLowerCase() : null;
  const filterDist = filters?.district && filters.district !== 'all' ? filters.district.toLowerCase() : null;
  const searchType = filters?.searchType || 'all';

  let currentBanks = allBanksList;
  let currentBranches = branches;

  if (filterCountry) {
    currentBanks = currentBanks.filter((b) => b.country === filterCountry);
    currentBranches = currentBranches.filter((br) => br.country === filterCountry);
  }

  // Empty query handling with filters
  if (!cleanRawQuery) {
    let filteredBranches = currentBranches;
    if (filterBank) filteredBranches = filteredBranches.filter((br) => br.bank_id === filterBank);
    if (filterDiv) filteredBranches = filteredBranches.filter((br) => br.division.toLowerCase() === filterDiv);
    if (filterDist) filteredBranches = filteredBranches.filter((br) => br.district.toLowerCase() === filterDist);

    return filteredBranches.slice(0, 40).map((br) => ({
      type: 'branch',
      id: br.id,
      title: br.name,
      title_bn: br.name_bn,
      title_hi: br.name_hi,
      subtitle: `${br.bank_name} • ${br.district}, ${br.division}`,
      subtitle_bn: `${br.bank_name_bn || br.bank_name} • ${br.district_bn || br.district}`,
      subtitle_hi: `${br.bank_name_hi || br.bank_name} • ${br.district_hi || br.district}`,
      routing_number: br.routing_number,
      ifsc_code: br.ifsc_code,
      swift_code: br.swift_code,
      country: br.country,
      bank_id: br.bank_id,
      bank_name: br.bank_name,
      bank_name_bn: br.bank_name_bn,
      bank_name_hi: br.bank_name_hi,
      district: br.district,
      district_bn: br.district_bn,
      district_hi: br.district_hi,
      division: br.division,
      division_bn: br.division_bn,
      division_hi: br.division_hi,
      score: 1,
      item: br
    }));
  }

  // 1. Check Bank Matches
  if (searchType === 'all' && (!filterDiv && !filterDist)) {
    currentBanks.forEach((bk) => {
      if (filterBank && bk.id !== filterBank) return;

      const nameMatch = bk.name.toLowerCase().includes(normalizedTextQuery);
      const nameBnMatch = bk.name_bn ? bk.name_bn.includes(cleanRawQuery) : false;
      const nameHiMatch = bk.name_hi ? bk.name_hi.includes(cleanRawQuery) : false;
      const shortMatch = bk.short_name.toLowerCase().includes(normalizedTextQuery);
      const swiftMatch = bk.swift_code.toLowerCase().includes(normalizedTextQuery);
      const ifscPrefixMatch = bk.ifsc_prefix ? bk.ifsc_prefix.toLowerCase().includes(normalizedTextQuery) : false;
      const codeMatch = bk.bank_code === normalizedNumQuery;

      if (nameMatch || nameBnMatch || nameHiMatch || shortMatch || swiftMatch || ifscPrefixMatch || codeMatch) {
        let score = 10;
        if (shortMatch) score += 15;
        if (codeMatch) score += 20;
        if (swiftMatch) score += 20;
        if (ifscPrefixMatch) score += 25;

        results.push({
          type: 'bank',
          id: bk.id,
          title: bk.name,
          title_bn: bk.name_bn,
          title_hi: bk.name_hi,
          subtitle: `Short: ${bk.short_name} | SWIFT: ${bk.swift_code} | Branches: ${bk.branch_count.toLocaleString()}`,
          subtitle_bn: `সংক্ষিপ্ত: ${bk.short_name} | সুইফট: ${bk.swift_code} | শাখা: ${bk.branch_count.toLocaleString()}`,
          subtitle_hi: `संक्षिप्त: ${bk.short_name} | स्विफ्ट: ${bk.swift_code} | शाखाएँ: ${bk.branch_count.toLocaleString()}`,
          swift_code: bk.swift_code,
          country: bk.country,
          bank_id: bk.id,
          bank_name: bk.name,
          bank_name_bn: bk.name_bn,
          bank_name_hi: bk.name_hi,
          score,
          item: bk
        });
      }
    });
  }

  // 2. Check Branch Matches (Routing / IFSC / MICR / SWIFT / Name / City)
  currentBranches.forEach((br) => {
    if (filterBank && br.bank_id !== filterBank) return;
    if (filterDiv && br.division.toLowerCase() !== filterDiv) return;
    if (filterDist && br.district.toLowerCase() !== filterDist) return;

    let matched = false;
    let score = 0;
    let matchedField = '';

    // Check IFSC Code
    if (br.ifsc_code && (searchType === 'all' || searchType === 'ifsc')) {
      const normalizedIfsc = br.ifsc_code.toLowerCase();
      if (normalizedIfsc === normalizedTextQuery) {
        matched = true;
        score += 120; // Exact IFSC match
        matchedField = 'IFSC Code (Exact)';
      } else if (normalizedIfsc.startsWith(normalizedTextQuery) && normalizedTextQuery.length >= 3) {
        matched = true;
        score += 70;
        matchedField = 'IFSC Code';
      }
    }

    // Check Routing / MICR Number
    if (!matched && (searchType === 'all' || searchType === 'routing')) {
      if (br.routing_number === normalizedNumQuery) {
        matched = true;
        score += 100; // Exact routing match
        matchedField = 'Routing / MICR (Exact)';
      } else if (br.routing_number.startsWith(normalizedNumQuery)) {
        matched = true;
        score += 60;
        matchedField = 'Routing Number';
      } else if (br.routing_number.includes(normalizedNumQuery) && normalizedNumQuery.length >= 3) {
        matched = true;
        score += 40;
        matchedField = 'Routing Number';
      }
    }

    // Check SWIFT Code
    if (!matched && (searchType === 'all' || searchType === 'swift')) {
      if (br.swift_code && br.swift_code.toLowerCase() === normalizedTextQuery) {
        matched = true;
        score += 90;
        matchedField = 'SWIFT Code (Exact)';
      } else if (br.swift_code && br.swift_code.toLowerCase().includes(normalizedTextQuery) && normalizedTextQuery.length >= 4) {
        matched = true;
        score += 50;
        matchedField = 'SWIFT Code';
      }
    }

    // Check Text Fields
    if (!matched && (searchType === 'all' || searchType === 'branch')) {
      const branchNameMatch = br.name.toLowerCase().includes(normalizedTextQuery);
      const branchNameBnMatch = br.name_bn ? br.name_bn.includes(cleanRawQuery) : false;
      const branchNameHiMatch = br.name_hi ? br.name_hi.includes(cleanRawQuery) : false;
      const bankNameMatch = br.bank_name.toLowerCase().includes(normalizedTextQuery);
      const bankShortMatch = br.bank_short_name.toLowerCase().includes(normalizedTextQuery);
      const districtMatch = br.district.toLowerCase().includes(normalizedTextQuery);
      const districtBnMatch = br.district_bn ? br.district_bn.includes(cleanRawQuery) : false;
      const districtHiMatch = br.district_hi ? br.district_hi.includes(cleanRawQuery) : false;
      const divisionMatch = br.division.toLowerCase().includes(normalizedTextQuery);

      if (branchNameMatch || branchNameBnMatch || branchNameHiMatch) {
        matched = true;
        score += 70;
        matchedField = 'Branch Name';
      } else if (districtMatch || districtBnMatch || districtHiMatch) {
        matched = true;
        score += 50;
        matchedField = 'District';
      } else if (bankNameMatch || bankShortMatch) {
        matched = true;
        score += 45;
        matchedField = 'Bank';
      } else if (divisionMatch) {
        matched = true;
        score += 30;
        matchedField = 'State / Division';
      } else if (br.address.toLowerCase().includes(normalizedTextQuery)) {
        matched = true;
        score += 25;
        matchedField = 'Address';
      }
    }

    if (matched) {
      const codeDisplay = br.ifsc_code ? `IFSC: ${br.ifsc_code} | MICR: ${br.routing_number}` : `Routing: ${br.routing_number}`;
      results.push({
        type: 'branch',
        id: br.id,
        title: `${br.bank_short_name} - ${br.name}`,
        title_bn: `${br.bank_name_bn || br.bank_name} - ${br.name_bn || br.name}`,
        title_hi: `${br.bank_name_hi || br.bank_name} - ${br.name_hi || br.name}`,
        subtitle: `${codeDisplay} | ${br.district}, ${br.division}`,
        subtitle_bn: `${codeDisplay} | জেলা: ${br.district_bn || br.district} | ${br.division_bn || br.division}`,
        subtitle_hi: `${codeDisplay} | ज़िला: ${br.district_hi || br.district} | ${br.division_hi || br.division}`,
        routing_number: br.routing_number,
        ifsc_code: br.ifsc_code,
        swift_code: br.swift_code,
        country: br.country,
        bank_id: br.bank_id,
        bank_name: br.bank_name,
        bank_name_bn: br.bank_name_bn,
        bank_name_hi: br.bank_name_hi,
        district: br.district,
        district_bn: br.district_bn,
        district_hi: br.district_hi,
        division: br.division,
        division_bn: br.division_bn,
        division_hi: br.division_hi,
        matchedField,
        score,
        item: br
      });
    }
  });

  return results.sort((a, b) => (b.score || 0) - (a.score || 0));
}

export function getBranchByRoutingNumber(routingNumber: string): Branch | undefined {
  const clean = routingNumber.trim().toUpperCase();
  return branches.find(
    (b) =>
      b.routing_number === clean ||
      b.id.toUpperCase() === clean ||
      (b.ifsc_code && b.ifsc_code.toUpperCase() === clean)
  );
}

export function getBranchByIdOrRouting(identifier: string): Branch | undefined {
  const clean = identifier.trim().toLowerCase();
  return branches.find(
    (b) =>
      b.routing_number === clean ||
      (b.ifsc_code && b.ifsc_code.toLowerCase() === clean) ||
      b.id.toLowerCase() === clean ||
      b.id.toLowerCase().endsWith(clean)
  );
}

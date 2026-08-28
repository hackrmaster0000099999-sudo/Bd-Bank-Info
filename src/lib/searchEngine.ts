import { Bank, Branch, SearchResult, FilterState } from '../types';
import banksData from '../data/banks.json';
import { allBranches } from '../data/branches/index';
import { convertBnToEnNum } from './routingDecoder';

const banks = banksData as Bank[];
const branches = allBranches;

export function getBanks(): Bank[] {
  return banks;
}

export function getBranches(): Branch[] {
  return branches;
}

export function getBankBySlug(slug: string): Bank | undefined {
  return banks.find((b) => b.id === slug || b.id === slug.toLowerCase());
}

export function getBranchesForBank(bankId: string): Branch[] {
  return branches.filter((br) => br.bank_id === bankId);
}

export function getBranchBySlug(bankSlug: string, branchSlug: string): Branch | undefined {
  return branches.find(
    (br) =>
      br.bank_id === bankSlug &&
      (br.id === branchSlug ||
        br.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === branchSlug.toLowerCase())
  );
}

export function getDivisions(): { en: string; bn: string }[] {
  const map = new Map<string, string>();
  branches.forEach((br) => {
    if (br.division && !map.has(br.division)) {
      map.set(br.division, br.division_bn);
    }
  });
  return Array.from(map.entries()).map(([en, bn]) => ({ en, bn }));
}

export function getDistricts(divisionFilter?: string): { en: string; bn: string }[] {
  const map = new Map<string, string>();
  branches.forEach((br) => {
    if (!divisionFilter || br.division.toLowerCase() === divisionFilter.toLowerCase()) {
      if (br.district && !map.has(br.district)) {
        map.set(br.district, br.district_bn);
      }
    }
  });
  return Array.from(map.entries()).map(([en, bn]) => ({ en, bn }));
}

export function searchAll(query: string, filters?: Partial<FilterState>): SearchResult[] {
  const cleanRawQuery = query.trim();
  const normalizedNumQuery = convertBnToEnNum(cleanRawQuery).toLowerCase();
  const normalizedTextQuery = cleanRawQuery.toLowerCase();

  const results: SearchResult[] = [];

  // Filter conditions
  const filterBank = filters?.bankId && filters.bankId !== 'all' ? filters.bankId : null;
  const filterDiv = filters?.division && filters.division !== 'all' ? filters.division.toLowerCase() : null;
  const filterDist = filters?.district && filters.district !== 'all' ? filters.district.toLowerCase() : null;
  const searchType = filters?.searchType || 'all';

  // Empty query handling with filters
  if (!cleanRawQuery) {
    let filteredBranches = branches;
    if (filterBank) filteredBranches = filteredBranches.filter((br) => br.bank_id === filterBank);
    if (filterDiv) filteredBranches = filteredBranches.filter((br) => br.division.toLowerCase() === filterDiv);
    if (filterDist) filteredBranches = filteredBranches.filter((br) => br.district.toLowerCase() === filterDist);

    return filteredBranches.slice(0, 30).map((br) => ({
      type: 'branch',
      id: br.id,
      title: br.name,
      title_bn: br.name_bn,
      subtitle: `${br.bank_name} • ${br.district}`,
      subtitle_bn: `${br.bank_name_bn} • ${br.district_bn}`,
      routing_number: br.routing_number,
      swift_code: br.swift_code,
      bank_id: br.bank_id,
      bank_name: br.bank_name,
      bank_name_bn: br.bank_name_bn,
      district: br.district,
      district_bn: br.district_bn,
      division: br.division,
      division_bn: br.division_bn,
      score: 1,
      item: br
    }));
  }

  // 1. Check Bank Matches
  if (searchType === 'all' && (!filterDiv && !filterDist)) {
    banks.forEach((bk) => {
      if (filterBank && bk.id !== filterBank) return;

      const nameMatch = bk.name.toLowerCase().includes(normalizedTextQuery);
      const nameBnMatch = bk.name_bn.includes(cleanRawQuery);
      const shortMatch = bk.short_name.toLowerCase().includes(normalizedTextQuery);
      const swiftMatch = bk.swift_code.toLowerCase().includes(normalizedTextQuery);
      const codeMatch = bk.bank_code === normalizedNumQuery;

      if (nameMatch || nameBnMatch || shortMatch || swiftMatch || codeMatch) {
        let score = 10;
        if (shortMatch) score += 15;
        if (codeMatch) score += 20;
        if (swiftMatch) score += 20;

        results.push({
          type: 'bank',
          id: bk.id,
          title: bk.name,
          title_bn: bk.name_bn,
          subtitle: `Short Code: ${bk.short_name} | SWIFT: ${bk.swift_code} | Branches: ${bk.branch_count}`,
          subtitle_bn: `সংক্ষিপ্ত নাম: ${bk.short_name} | সুইফট: ${bk.swift_code} | শাখা: ${bk.branch_count}`,
          swift_code: bk.swift_code,
          bank_id: bk.id,
          bank_name: bk.name,
          bank_name_bn: bk.name_bn,
          score,
          item: bk
        });
      }
    });
  }

  // 2. Check Branch Matches (Routing, SWIFT, Name, District, Division)
  branches.forEach((br) => {
    if (filterBank && br.bank_id !== filterBank) return;
    if (filterDiv && br.division.toLowerCase() !== filterDiv) return;
    if (filterDist && br.district.toLowerCase() !== filterDist) return;

    let matched = false;
    let score = 0;
    let matchedField = '';

    // Check Routing Number
    if (searchType === 'all' || searchType === 'routing') {
      if (br.routing_number === normalizedNumQuery) {
        matched = true;
        score += 100; // Exact routing match gets top priority
        matchedField = 'Routing Number (Exact)';
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

    // Check Text Fields (Branch Name, District, Upazila, Address)
    if (!matched && (searchType === 'all' || searchType === 'branch')) {
      const branchNameMatch = br.name.toLowerCase().includes(normalizedTextQuery);
      const branchNameBnMatch = br.name_bn.includes(cleanRawQuery);
      const bankNameMatch = br.bank_name.toLowerCase().includes(normalizedTextQuery);
      const bankNameBnMatch = br.bank_name_bn.includes(cleanRawQuery);
      const bankShortMatch = br.bank_short_name.toLowerCase().includes(normalizedTextQuery);
      const districtMatch = br.district.toLowerCase().includes(normalizedTextQuery);
      const districtBnMatch = br.district_bn.includes(cleanRawQuery);
      const divisionMatch = br.division.toLowerCase().includes(normalizedTextQuery);

      if (branchNameMatch || branchNameBnMatch) {
        matched = true;
        score += 70;
        matchedField = 'Branch Name';
      } else if (districtMatch || districtBnMatch) {
        matched = true;
        score += 50;
        matchedField = 'District';
      } else if (bankNameMatch || bankNameBnMatch || bankShortMatch) {
        matched = true;
        score += 45;
        matchedField = 'Bank';
      } else if (divisionMatch) {
        matched = true;
        score += 30;
        matchedField = 'Division';
      } else if (br.address.toLowerCase().includes(normalizedTextQuery) || br.address_bn.includes(cleanRawQuery)) {
        matched = true;
        score += 25;
        matchedField = 'Address';
      }
    }

    if (matched) {
      results.push({
        type: 'branch',
        id: br.id,
        title: `${br.bank_short_name} - ${br.name}`,
        title_bn: `${br.bank_name_bn} - ${br.name_bn}`,
        subtitle: `Routing: ${br.routing_number} | District: ${br.district} | ${br.division}`,
        subtitle_bn: `রাউটিং: ${br.routing_number} | জেলা: ${br.district_bn} | ${br.division_bn}`,
        routing_number: br.routing_number,
        swift_code: br.swift_code,
        bank_id: br.bank_id,
        bank_name: br.bank_name,
        bank_name_bn: br.bank_name_bn,
        district: br.district,
        district_bn: br.district_bn,
        division: br.division,
        division_bn: br.division_bn,
        matchedField,
        score,
        item: br
      });
    }
  });

  // Sort by score descending
  return results.sort((a, b) => (b.score || 0) - (a.score || 0));
}

export function getBranchByRoutingNumber(routingNumber: string): Branch | undefined {
  return branches.find(b => b.routing_number === routingNumber);
}

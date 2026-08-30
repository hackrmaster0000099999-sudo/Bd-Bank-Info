import { Bank, Branch, SearchResult, FilterState, Country, Language } from '../types';
import bdBanksData from '../data/banks.json';
import inBanksData from '../data/indian_banks.json';
import { allBranches } from '../data/branches/index';
import { russianBanks, russianBranches } from '../data/russia/index';
import { usaBanks, usaBranches } from '../data/usa/index';
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

const ruBanks: Bank[] = (russianBanks as any[]).map((b) => ({
  ...b,
  country: 'ru' as const,
}));

const usBanks: Bank[] = (usaBanks as any[]).map((b) => ({
  ...b,
  country: 'us' as const,
}));

const allBanksList: Bank[] = [...bdBanks, ...inBanks, ...ruBanks, ...usBanks];

// Ensure all branches have appropriate country tags
const branches: Branch[] = [
  ...allBranches.map((br) => ({
    ...br,
    country: br.country || (br.routing_number && br.routing_number.length === 9 && !br.ifsc_code ? 'bd' : 'in'),
  })),
  ...russianBranches.map((br) => ({
    ...br,
    country: 'ru' as const,
  })),
  ...usaBranches.map((br) => ({
    ...br,
    country: 'us' as const,
  }))
];

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

export function getDivisions(country?: Country): { en: string; bn: string; hi?: string; ru?: string }[] {
  const map = new Map<string, { bn: string; hi?: string; ru?: string }>();
  const list = country && country !== 'all' ? branches.filter((b) => b.country === country) : branches;
  
  list.forEach((br) => {
    if (br.division && !map.has(br.division)) {
      map.set(br.division, {
        bn: br.division_bn || br.division,
        hi: br.division_hi || br.division,
        ru: br.division_ru || br.division
      });
    }
  });
  return Array.from(map.entries()).map(([en, val]) => ({ en, bn: val.bn, hi: val.hi, ru: val.ru }));
}

export function getDistricts(divisionFilter?: string, country?: Country): { en: string; bn: string; hi?: string; ru?: string }[] {
  const map = new Map<string, { bn: string; hi?: string; ru?: string }>();
  let list = country && country !== 'all' ? branches.filter((b) => b.country === country) : branches;
  
  if (divisionFilter && divisionFilter !== 'all') {
    list = list.filter((br) => br.division.toLowerCase() === divisionFilter.toLowerCase());
  }

  list.forEach((br) => {
    if (br.district && !map.has(br.district)) {
      map.set(br.district, {
        bn: br.district_bn || br.district,
        hi: br.district_hi || br.district,
        ru: br.district_ru || br.district
      });
    }
  });
  return Array.from(map.entries()).map(([en, val]) => ({ en, bn: val.bn, hi: val.hi, ru: val.ru }));
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
      title_ru: br.name_ru,
      subtitle: `${br.bank_name} • ${br.district}, ${br.division}`,
      subtitle_bn: `${br.bank_name_bn || br.bank_name} • ${br.district_bn || br.district}`,
      subtitle_hi: `${br.bank_name_hi || br.bank_name} • ${br.district_hi || br.district}`,
      subtitle_ru: `${br.bank_name_ru || br.bank_name} • ${br.district_ru || br.district}`,
      routing_number: br.routing_number,
      bik_code: br.bik_code,
      corr_account: br.corr_account,
      ifsc_code: br.ifsc_code,
      swift_code: br.swift_code,
      country: br.country,
      bank_id: br.bank_id,
      bank_name: br.bank_name,
      bank_name_bn: br.bank_name_bn,
      bank_name_hi: br.bank_name_hi,
      bank_name_ru: br.bank_name_ru,
      district: br.district,
      district_bn: br.district_bn,
      district_hi: br.district_hi,
      district_ru: br.district_ru,
      division: br.division,
      division_bn: br.division_bn,
      division_hi: br.division_hi,
      division_ru: br.division_ru,
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
      const nameRuMatch = bk.name_ru ? bk.name_ru.toLowerCase().includes(normalizedTextQuery) : false;
      const shortMatch = bk.short_name.toLowerCase().includes(normalizedTextQuery);
      const swiftMatch = bk.swift_code.toLowerCase().includes(normalizedTextQuery);
      const ifscPrefixMatch = bk.ifsc_prefix ? bk.ifsc_prefix.toLowerCase().includes(normalizedTextQuery) : false;
      const bikMatch = bk.bik_code ? bk.bik_code.includes(normalizedNumQuery) : false;
      const corrMatch = bk.corr_account ? bk.corr_account.includes(normalizedNumQuery) : false;
      const innMatch = bk.inn ? bk.inn.includes(normalizedNumQuery) : false;
      const codeMatch = bk.bank_code === normalizedNumQuery;

      if (nameMatch || nameBnMatch || nameHiMatch || nameRuMatch || shortMatch || swiftMatch || ifscPrefixMatch || bikMatch || corrMatch || innMatch || codeMatch) {
        let score = 10;
        if (shortMatch) score += 15;
        if (codeMatch) score += 20;
        if (swiftMatch) score += 20;
        if (ifscPrefixMatch) score += 25;
        if (bikMatch) score += 30;

        const subtitleEn = bk.bik_code
          ? `BIK: ${bk.bik_code} | SWIFT: ${bk.swift_code} | Branches: ${bk.branch_count.toLocaleString()}`
          : `Short: ${bk.short_name} | SWIFT: ${bk.swift_code} | Branches: ${bk.branch_count.toLocaleString()}`;

        results.push({
          type: 'bank',
          id: bk.id,
          title: bk.name,
          title_bn: bk.name_bn,
          title_hi: bk.name_hi,
          title_ru: bk.name_ru,
          subtitle: subtitleEn,
          subtitle_bn: `সংক্ষিপ্ত: ${bk.short_name} | সুইফট: ${bk.swift_code} | শাখা: ${bk.branch_count.toLocaleString()}`,
          subtitle_hi: `संक्षिप्त: ${bk.short_name} | स्विफ्ट: ${bk.swift_code} | शाखाएँ: ${bk.branch_count.toLocaleString()}`,
          subtitle_ru: `БИК: ${bk.bik_code || bk.short_name} | SWIFT: ${bk.swift_code} | Отделений: ${bk.branch_count.toLocaleString()}`,
          swift_code: bk.swift_code,
          bik_code: bk.bik_code,
          corr_account: bk.corr_account,
          country: bk.country,
          bank_id: bk.id,
          bank_name: bk.name,
          bank_name_bn: bk.name_bn,
          bank_name_hi: bk.name_hi,
          bank_name_ru: bk.name_ru,
          score,
          item: bk
        });
      }
    });
  }

  // 2. Check Branch Matches (Routing / IFSC / BIK / MICR / SWIFT / Corr. Account / Name / City)
  currentBranches.forEach((br) => {
    if (filterBank && br.bank_id !== filterBank) return;
    if (filterDiv && br.division.toLowerCase() !== filterDiv) return;
    if (filterDist && br.district.toLowerCase() !== filterDist) return;

    let matched = false;
    let score = 0;
    let matchedField = '';

    // Check BIK Code (Russia)
    if (br.bik_code && (searchType === 'all' || searchType === 'bik' || searchType === 'routing')) {
      const cleanBik = br.bik_code.replace(/\D/g, '');
      if (cleanBik === normalizedNumQuery) {
        matched = true;
        score += 120; // Exact BIK match
        matchedField = 'BIK (БИК) Code (Exact)';
      } else if (cleanBik.startsWith(normalizedNumQuery)) {
        matched = true;
        score += 80;
        matchedField = 'BIK (БИК) Code';
      }
    }

    // Check Corr. Account / INN (Russia)
    if (!matched && br.corr_account && (searchType === 'all' || searchType === 'routing')) {
      if (br.corr_account === normalizedNumQuery) {
        matched = true;
        score += 110;
        matchedField = 'Corr. Account (Корр. счет)';
      } else if (br.corr_account.includes(normalizedNumQuery) && normalizedNumQuery.length >= 6) {
        matched = true;
        score += 65;
        matchedField = 'Corr. Account';
      }
    }

    // Check IFSC Code (India)
    if (!matched && br.ifsc_code && (searchType === 'all' || searchType === 'ifsc')) {
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

    // Check Routing / MICR Number (BD / IN / RU)
    if (!matched && (searchType === 'all' || searchType === 'routing')) {
      if (br.routing_number === normalizedNumQuery) {
        matched = true;
        score += 100; // Exact routing match
        matchedField = br.country === 'ru' ? 'BIK Code (Exact)' : 'Routing / MICR (Exact)';
      } else if (br.routing_number.startsWith(normalizedNumQuery)) {
        matched = true;
        score += 60;
        matchedField = br.country === 'ru' ? 'BIK Code' : 'Routing Number';
      } else if (br.routing_number.includes(normalizedNumQuery) && normalizedNumQuery.length >= 3) {
        matched = true;
        score += 40;
        matchedField = br.country === 'ru' ? 'BIK Code' : 'Routing Number';
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

    // Check Text Fields (Name / Cyrillic / Bengali / Hindi / City / District / Address)
    if (!matched && (searchType === 'all' || searchType === 'branch')) {
      const branchNameMatch = br.name.toLowerCase().includes(normalizedTextQuery);
      const branchNameBnMatch = br.name_bn ? br.name_bn.includes(cleanRawQuery) : false;
      const branchNameHiMatch = br.name_hi ? br.name_hi.includes(cleanRawQuery) : false;
      const branchNameRuMatch = br.name_ru ? br.name_ru.toLowerCase().includes(normalizedTextQuery) : false;
      const bankNameMatch = br.bank_name.toLowerCase().includes(normalizedTextQuery);
      const bankNameRuMatch = br.bank_name_ru ? br.bank_name_ru.toLowerCase().includes(normalizedTextQuery) : false;
      const bankShortMatch = br.bank_short_name.toLowerCase().includes(normalizedTextQuery);
      const districtMatch = br.district.toLowerCase().includes(normalizedTextQuery);
      const districtBnMatch = br.district_bn ? br.district_bn.includes(cleanRawQuery) : false;
      const districtHiMatch = br.district_hi ? br.district_hi.includes(cleanRawQuery) : false;
      const districtRuMatch = br.district_ru ? br.district_ru.toLowerCase().includes(normalizedTextQuery) : false;
      const divisionMatch = br.division.toLowerCase().includes(normalizedTextQuery);
      const divisionRuMatch = br.division_ru ? br.division_ru.toLowerCase().includes(normalizedTextQuery) : false;
      const addressMatch = br.address.toLowerCase().includes(normalizedTextQuery) || (br.address_ru ? br.address_ru.toLowerCase().includes(normalizedTextQuery) : false);

      if (branchNameMatch || branchNameBnMatch || branchNameHiMatch || branchNameRuMatch) {
        matched = true;
        score += 70;
        matchedField = 'Branch Name';
      } else if (districtMatch || districtBnMatch || districtHiMatch || districtRuMatch) {
        matched = true;
        score += 50;
        matchedField = 'District / City';
      } else if (bankNameMatch || bankNameRuMatch || bankShortMatch) {
        matched = true;
        score += 45;
        matchedField = 'Bank';
      } else if (divisionMatch || divisionRuMatch) {
        matched = true;
        score += 30;
        matchedField = 'Federal Subject / State';
      } else if (addressMatch) {
        matched = true;
        score += 25;
        matchedField = 'Address';
      }
    }

    if (matched) {
      let codeDisplay = `Routing: ${br.routing_number}`;
      if (br.country === 'ru') {
        codeDisplay = `BIK: ${br.bik_code || br.routing_number} | Corr: ${br.corr_account ? br.corr_account.substring(0, 10) + '...' : 'N/A'}`;
      } else if (br.ifsc_code) {
        codeDisplay = `IFSC: ${br.ifsc_code} | MICR: ${br.routing_number}`;
      }

      results.push({
        type: 'branch',
        id: br.id,
        title: `${br.bank_short_name} - ${br.name}`,
        title_bn: `${br.bank_name_bn || br.bank_name} - ${br.name_bn || br.name}`,
        title_hi: `${br.bank_name_hi || br.bank_name} - ${br.name_hi || br.name}`,
        title_ru: `${br.bank_name_ru || br.bank_name} - ${br.name_ru || br.name}`,
        subtitle: `${codeDisplay} | ${br.district}, ${br.division}`,
        subtitle_bn: `${codeDisplay} | জেলা: ${br.district_bn || br.district} | ${br.division_bn || br.division}`,
        subtitle_hi: `${codeDisplay} | ज़िला: ${br.district_hi || br.district} | ${br.division_hi || br.division}`,
        subtitle_ru: `${codeDisplay} | Город: ${br.district_ru || br.district} | ${br.division_ru || br.division}`,
        routing_number: br.routing_number,
        bik_code: br.bik_code,
        corr_account: br.corr_account,
        ifsc_code: br.ifsc_code,
        swift_code: br.swift_code,
        country: br.country,
        bank_id: br.bank_id,
        bank_name: br.bank_name,
        bank_name_bn: br.bank_name_bn,
        bank_name_hi: br.bank_name_hi,
        bank_name_ru: br.bank_name_ru,
        district: br.district,
        district_bn: br.district_bn,
        district_hi: br.district_hi,
        district_ru: br.district_ru,
        division: br.division,
        division_bn: br.division_bn,
        division_hi: br.division_hi,
        division_ru: br.division_ru,
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
      (b.bik_code && b.bik_code === clean) ||
      b.id.toUpperCase() === clean ||
      (b.ifsc_code && b.ifsc_code.toUpperCase() === clean)
  );
}

export function getBranchByIdOrRouting(identifier: string): Branch | undefined {
  const clean = identifier.trim().toLowerCase();
  return branches.find(
    (b) =>
      b.routing_number === clean ||
      (b.bik_code && b.bik_code.toLowerCase() === clean) ||
      (b.corr_account && b.corr_account.toLowerCase() === clean) ||
      (b.ifsc_code && b.ifsc_code.toLowerCase() === clean) ||
      b.id.toLowerCase() === clean ||
      b.id.toLowerCase().endsWith(clean)
  );
}


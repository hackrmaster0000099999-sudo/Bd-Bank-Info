import banksData from '../data/banks.json';
import branchesData from '../data/branches.json';
import { Bank, Branch } from '../types';

const STORAGE_KEY = 'bb_routing_master';
const STORAGE_TIMESTAMP_KEY = 'bb_routing_master_timestamp';

export interface CacheData {
  version: string;
  banks: Bank[];
  branches: Branch[];
  lastUpdated: string;
}

export function initializeDataCache(): { banks: Bank[]; branches: Branch[]; fromCache: boolean } {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as CacheData;
      if (parsed && Array.isArray(parsed.banks) && Array.isArray(parsed.branches) && parsed.banks.length > 0) {
        return {
          banks: parsed.banks,
          branches: parsed.branches,
          fromCache: true,
        };
      }
    }
  } catch (e) {
    console.warn('LocalStorage access warning:', e);
  }

  // Fallback / Initial cache populate
  const defaultPayload: CacheData = {
    version: '2.0.0-march2026',
    banks: banksData as Bank[],
    branches: branchesData as Branch[],
    lastUpdated: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPayload));
    localStorage.setItem(STORAGE_TIMESTAMP_KEY, defaultPayload.lastUpdated);
  } catch {
    // Quota or incognito restriction
  }

  return {
    banks: defaultPayload.banks,
    branches: defaultPayload.branches,
    fromCache: false,
  };
}

export function clearDataCache(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_TIMESTAMP_KEY);
  } catch {
    //
  }
}

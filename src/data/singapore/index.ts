import banksData from './banks.json';
import centralBranches from './branches/central_region.json';
import eastBranches from './branches/east_region.json';
import westBranches from './branches/west_region.json';
import northNortheastBranches from './branches/north_northeast_region.json';
import { Bank, Branch } from '../../types';

export const singaporeBanks: Bank[] = banksData as Bank[];

export const singaporeBranches: Branch[] = [
  ...(centralBranches as Branch[]),
  ...(eastBranches as Branch[]),
  ...(westBranches as Branch[]),
  ...(northNortheastBranches as Branch[])
];

export * from './singaporeClearingValidator';
export * from './guide';
export * from './seo';

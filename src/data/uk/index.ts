import banksData from './banks.json';
import { ukBranches } from './branches';
import { Bank } from '../../types';

export const ukBanks: Bank[] = banksData as Bank[];
export { ukBranches };
export * from './guide';
export * from './sortCodeValidator';
export * from './seo';

import banksData from './banks.json';
import { indiaBranches } from './branches/index';
import { Bank } from '../../types';

export const indianBanks: Bank[] = (banksData as any[]).map((b) => ({
  ...b,
  country: 'in' as const
}));

export { indiaBranches };
export * from './ifscValidator';
export * from './seoHelper';


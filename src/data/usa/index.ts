import banksData from './banks.json';
import { usaBranches, resolveUsaBranch } from './branches/index';
import { Bank } from '../../types';

export const usaBanks: Bank[] = (banksData as any[]).map((b) => ({
  ...b,
  country: 'us' as const
}));

export { usaBranches, resolveUsaBranch };
export * from './articles';
export * from './abaValidator';
export * from './guide';
export * from './seo';

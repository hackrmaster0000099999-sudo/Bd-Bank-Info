import banksData from '../banks.json';
import allBranches from '../branches/index';
import { Bank } from '../../types';

export const bdBanks: Bank[] = (banksData as any[]).map((b) => ({
  ...b,
  country: 'bd' as const
}));

export const bdBranches = allBranches;

export * from './seoHelper';

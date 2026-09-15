import banksData from './banks.json';
import kualaLumpurBranches from './branches/kuala_lumpur.json';
import selangorBranches from './branches/selangor.json';
import johorMelakaBranches from './branches/johor_melaka.json';
import penangNorthernBranches from './branches/penang_northern.json';
import borneoEasternBranches from './branches/borneo_eastern.json';
import { Bank, Branch } from '../../types';

export const malaysiaBanks: Bank[] = banksData as Bank[];

export const malaysiaBranches: Branch[] = [
  ...(kualaLumpurBranches as Branch[]),
  ...(selangorBranches as Branch[]),
  ...(johorMelakaBranches as Branch[]),
  ...(penangNorthernBranches as Branch[]),
  ...(borneoEasternBranches as Branch[])
];

export * from './malaysiaClearingValidator';
export * from './guide';
export * from './seo';
export * from './articles';

import banksData from './banks.json';
import bavariaBranches from './branches/bavaria.json';
import badenBranches from './branches/baden_wuerttemberg.json';
import nrwBranches from './branches/north_rhine_westphalia.json';
import hessenBranches from './branches/hessen.json';
import berlinBrandenburgBranches from './branches/berlin_brandenburg.json';
import northEastBranches from './branches/northern_eastern_germany.json';
import { Bank, Branch } from '../../types';

export const germanyBanks: Bank[] = banksData as Bank[];

export const germanyBranches: Branch[] = [
  ...(bavariaBranches as Branch[]),
  ...(badenBranches as Branch[]),
  ...(nrwBranches as Branch[]),
  ...(hessenBranches as Branch[]),
  ...(berlinBrandenburgBranches as Branch[]),
  ...(northEastBranches as Branch[])
];

export * from './blzValidator';
export * from './guide';
export * from './seo';

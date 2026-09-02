import banksData from './banks.json';
import dubaiBranches from './branches/dubai.json';
import abuDhabiBranches from './branches/abu_dhabi.json';
import northernBranches from './branches/sharjah_northern_emirates.json';
import { Bank, Branch } from '../../types';

export const uaeBanks: Bank[] = banksData as Bank[];

export const uaeBranches: Branch[] = [
  ...(dubaiBranches as Branch[]),
  ...(abuDhabiBranches as Branch[]),
  ...(northernBranches as Branch[])
];

export * from './uaeRoutingValidator';
export * from './guide';
export * from './seo';

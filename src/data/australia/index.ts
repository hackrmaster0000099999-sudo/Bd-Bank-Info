import banksData from './banks.json';
import nswBranches from './branches/nsw.json';
import vicBranches from './branches/vic.json';
import qldBranches from './branches/qld.json';
import waBranches from './branches/wa.json';
import saTasActBranches from './branches/sa_tas_act.json';
import { Bank, Branch } from '../../types';

export const australiaBanks: Bank[] = banksData as Bank[];

export const australiaBranches: Branch[] = [
  ...(nswBranches as Branch[]),
  ...(vicBranches as Branch[]),
  ...(qldBranches as Branch[]),
  ...(waBranches as Branch[]),
  ...(saTasActBranches as Branch[])
];

export * from './australiaBsbValidator';
export * from './guide';
export * from './seo';

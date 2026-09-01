import banksData from './banks.json';
import ontarioBranches from './branches/ontario.json';
import quebecBranches from './branches/quebec.json';
import bcBranches from './branches/british_columbia.json';
import albertaBranches from './branches/alberta.json';
import prairiesAtlanticBranches from './branches/prairies_atlantic.json';
import { Bank, Branch } from '../../types';

export const canadaBanks: Bank[] = banksData as Bank[];

export const canadaBranches: Branch[] = [
  ...(ontarioBranches as Branch[]),
  ...(quebecBranches as Branch[]),
  ...(bcBranches as Branch[]),
  ...(albertaBranches as Branch[]),
  ...(prairiesAtlanticBranches as Branch[])
];

export * from './canadaRoutingValidator';
export * from './guide';
export * from './seo';

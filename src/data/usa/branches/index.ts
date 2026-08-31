import { Branch } from '../../../types';
import northeastBranches from './northeast.json';
import southeastBranches from './southeast.json';
import midwestBranches from './midwest.json';
import southwestTexasBranches from './southwest_texas.json';
import westCoastBranches from './west_coast.json';

export const usaBranches: Branch[] = [
  ...(northeastBranches as Branch[]),
  ...(southeastBranches as Branch[]),
  ...(midwestBranches as Branch[]),
  ...(southwestTexasBranches as Branch[]),
  ...(westCoastBranches as Branch[])
];

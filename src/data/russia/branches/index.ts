import { Branch } from '../../../types';
import centralBranches from './central.json';
import northwestBranches from './northwest.json';
import volgaBranches from './volga.json';
import southBranches from './south.json';
import uralBranches from './ural.json';
import siberiaBranches from './siberia.json';
import fareastBranches from './fareast.json';

export const russianBranches: Branch[] = [
  ...(centralBranches as Branch[]),
  ...(northwestBranches as Branch[]),
  ...(volgaBranches as Branch[]),
  ...(southBranches as Branch[]),
  ...(uralBranches as Branch[]),
  ...(siberiaBranches as Branch[]),
  ...(fareastBranches as Branch[])
];


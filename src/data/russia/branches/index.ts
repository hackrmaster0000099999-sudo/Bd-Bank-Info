import { Branch } from '../../../types';
import sberbankBranches from './sberbank.json';
import vtbBranches from './vtb.json';
import gazprombankBranches from './gazprombank.json';
import alfabankBranches from './alfabank.json';
import tinkoffBranches from './tinkoff.json';
import rosselkhozBranches from './rosselkhozbank.json';
import sovcomBranches from './sovcombank.json';
import otherBranches from './other_banks.json';

export const russianBranches: Branch[] = [
  ...(sberbankBranches as Branch[]),
  ...(vtbBranches as Branch[]),
  ...(gazprombankBranches as Branch[]),
  ...(alfabankBranches as Branch[]),
  ...(tinkoffBranches as Branch[]),
  ...(rosselkhozBranches as Branch[]),
  ...(sovcomBranches as Branch[]),
  ...(otherBranches as Branch[])
];

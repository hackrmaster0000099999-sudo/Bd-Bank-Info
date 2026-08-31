import { Branch } from '../../../types';
import greaterLondonBranches from './greater_london.json';
import southeastEastBranches from './southeast_east.json';
import midlandsBranches from './midlands.json';
import northwestYorkshireBranches from './northwest_yorkshire.json';
import southwestBranches from './southwest.json';
import scotlandBranches from './scotland.json';
import walesNiBranches from './wales_ni.json';

export const ukBranches: Branch[] = [
  ...(greaterLondonBranches as Branch[]),
  ...(southeastEastBranches as Branch[]),
  ...(midlandsBranches as Branch[]),
  ...(northwestYorkshireBranches as Branch[]),
  ...(southwestBranches as Branch[]),
  ...(scotlandBranches as Branch[]),
  ...(walesNiBranches as Branch[])
];

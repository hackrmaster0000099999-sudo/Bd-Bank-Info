import { Branch } from '../../../types';
import newyork from './newyork.json';
import california from './california.json';
import texas from './texas.json';
import florida from './florida.json';
import illinois from './illinois.json';
import otherStates from './other_states.json';

export const usaBranches: Branch[] = [
  ...(newyork as Branch[]),
  ...(california as Branch[]),
  ...(texas as Branch[]),
  ...(florida as Branch[]),
  ...(illinois as Branch[]),
  ...(otherStates as Branch[])
];

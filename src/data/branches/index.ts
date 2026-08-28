import dhaka from './dhaka.json';
import chittagong from './chittagong.json';
import sylhet from './sylhet.json';
import rajshahi from './rajshahi.json';
import khulna from './khulna.json';
import barisal from './barisal.json';
import rangpur from './rangpur.json';
import mymensingh from './mymensingh.json';
import { Branch } from '../../types';

export const allBranches: Branch[] = [
  ...(dhaka as unknown as Branch[]),
  ...(chittagong as unknown as Branch[]),
  ...(sylhet as unknown as Branch[]),
  ...(rajshahi as unknown as Branch[]),
  ...(khulna as unknown as Branch[]),
  ...(barisal as unknown as Branch[]),
  ...(rangpur as unknown as Branch[]),
  ...(mymensingh as unknown as Branch[]),
];

export default allBranches;

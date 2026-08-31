import north from './north.json';
import west from './west.json';
import south from './south.json';
import east from './east.json';
import { Branch } from '../../../types';

export const indiaBranches: Branch[] = [
  ...(north as unknown as Branch[]),
  ...(west as unknown as Branch[]),
  ...(south as unknown as Branch[]),
  ...(east as unknown as Branch[]),
];

export default indiaBranches;

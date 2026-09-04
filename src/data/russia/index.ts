import { Bank } from '../../types';
import russianBanksData from './banks.json';
export { russianBranches } from './branches';
export { decodeBikCode, RUSSIAN_REGIONS_OKATO } from './bikDecoder';
export * from './seoHelper';

export const russianBanks: Bank[] = russianBanksData as Bank[];

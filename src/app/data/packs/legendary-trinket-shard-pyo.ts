import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const LEGENDARY_TRINKET_SHARD_PYO: PackType = {
  type: 'Pack',
  name: 'Legendary Trinket Shard PYO',
  items: convertNamesToRewards('Trinket', [
    'Royal Seal Shard',
    'Faerie Pearl Shard',
    'Ornate Bronze Mirror Shard',
    'General Token Shard',
    'Tiger Tally Shard',
    'Herbal Gourd Shard',
  ]),
};

import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const LEGENDARY_TRINKET_SHARD_PYO = generatePackItemData(
  'Legendary Trinket Shard PYO',
  convertNamesToRewards('Trinket', [
    'Royal Seal Shard',
    'Faerie Pearl Shard',
    'Ornate Bronze Mirror Shard',
    'General Token Shard',
    'Tiger Tally Shard',
    'Herbal Gourd Shard',
  ])
);

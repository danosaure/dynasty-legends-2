import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const R9_LEGENDARY_GEAR_SHARD_PYO: PackType = {
  type: 'Pack',
  name: 'R9 Legendary Gear Shard PYO',
  items: convertNamesToRewards('Gear Shard', ['Wild Helmet Shard', 'Wild Armor Shard', 'Wild Bracers Shard', 'Wild Boots Shard']),
};

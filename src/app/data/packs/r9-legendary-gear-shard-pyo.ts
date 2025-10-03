import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const R9_LEGENDARY_GEAR_SHARD_PYO = generatePackItemData(
  'R9 Legendary Gear Shard PYO',
  convertNamesToRewards('Gear Shard', ['Wild Helmet Shard', 'Wild Armor Shard', 'Wild Bracers Shard', 'Wild Boots Shard'])
);

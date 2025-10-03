import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const LEGENDARY_STRATEGEM_SHARD_PYO = generatePackItemData(
  'Legendary Stratagem Shard PYO',
  convertNamesToRewards('Stratagem', ['Thunder Bluff Shard', 'Venom Penalty Shard', 'Ambush Array Shard'], 1)
);

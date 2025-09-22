import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const LEGENDARY_STRATEGEM_SHARD_PYO: PackType = {
  type: 'Pack',
  name: 'Legendary Stratagem Shard PYO',
  items: convertNamesToRewards('Stratagem', ['Thunder Bluff Shard', 'Venom Penalty Shard', 'Ambush Array Shard'], 1),
} as const;

import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const LEGENDARY_MOUNT_SHARD_PYO: PackType = {
  type: 'Pack',
  name: 'Legendary Mount Shard PYO',
  items: convertNamesToRewards('Mount', [
    'Purple Bay Shard',
    'White Jade Lion Shard',
    'Ebon Prince Shard',
    'Dark Cloud Shard',
    'Startled Sail Shard',
    'Flash Sail Shard',
  ]),
};

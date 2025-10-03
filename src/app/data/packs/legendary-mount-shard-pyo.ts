import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const LEGENDARY_MOUNT_SHARD_PYO = generatePackItemData(
  'Legendary Mount Shard PYO',
  convertNamesToRewards('Mount', [
    'Purple Bay Shard',
    'White Jade Lion Shard',
    'Ebon Prince Shard',
    'Dark Cloud Shard',
    'Startled Sail Shard',
    'Flash Sail Shard',
  ])
);

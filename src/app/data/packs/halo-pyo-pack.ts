import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const HALO_PYO_PACK: PackType = {
  type: 'Pack',
  name: 'Halo PYO Pack',
  items: convertNamesToRewards('Image Halo', ['Dancing Butterfly', 'Lotus Step', 'Brume Snow', 'Dreamy Ginkgo']),
} as const;

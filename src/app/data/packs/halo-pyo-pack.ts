import { convertRewardType } from '../RewardType';
import type { PackType } from './PackType';

export const HALO_PYO_PACK: PackType = {
  type: 'Pack',
  name: 'Halo PYO Pack',
  items: convertRewardType([
    ['Image Halo', 'Dancing Butterfly', 1],
    ['Image Halo', 'Lotus Step', 1],
    ['Image Halo', 'Brume Snow', 1],
    ['Image Halo', 'Dreamy Ginkgo', 1],
  ]),
} as const;

import type { HanzhongBaseRequirement } from '../../requirements';

export type HanzhongWarTierRequirement = Omit<HanzhongBaseRequirement, 'section' | 'type'> & {
  section: 'warTiers';
  type: 'completed';
};

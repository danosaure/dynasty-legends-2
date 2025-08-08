import type { HanzhongBaseRequirement } from '../../requirements';

export type HanzhongCityRequirement = Omit<HanzhongBaseRequirement, 'section' | 'type'> & {
  section: 'cities';
  type: 'count';
};

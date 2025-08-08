import type { HanzhongBaseRequirement } from './HanzhongBaseRequirement';

export type HanzhongCityRequirement = Omit<HanzhongBaseRequirement, 'section' | 'type'> & {
  section: 'cities';
  type: 'count';
};

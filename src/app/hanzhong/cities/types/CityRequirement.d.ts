import type { HanzhongBaseRequirement } from '../../requirements';

export type HanzhongCityRequirement = HanzhongBaseRequirement & {
  section: 'cities';
  type: 'count';
};

import type { SECTION_KEYS } from '../constants';
import type { HanzhongUserSectionData } from './user-section-data';

export type HanzhongUserDomainData = {
  [SECTION_KEYS.TECH]: HanzhongUserSectionData;
  [SECTION_KEYS.TERRITORY]: HanzhongUserSectionData;
};

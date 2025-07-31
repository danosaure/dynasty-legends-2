import type { HanzhongUserSectionData } from './user-section-data';
import type { HanzhongUserSectionName } from './user-section-name';

export type HanzhongContextGetSection = (section: HanzhongUserSectionName) => HanzhongUserSectionData;

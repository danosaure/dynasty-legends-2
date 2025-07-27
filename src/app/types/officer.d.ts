import type { BaseIDType } from './base-id-type';
import type { IconType } from './icon-type';
import type { OfficerBondType } from './officer-bond';

export type OfficerType = BaseIDType & {
  name: string;
  factionId: string;
  aptitudeId: string;
  officerTypeIds: string[];
  bonds?: OfficerBondType[];
  avatar: IconType;
};

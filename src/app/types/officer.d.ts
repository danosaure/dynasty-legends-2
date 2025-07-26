import type { BaseIDType } from './base-id-type';
import type { OfficerBondType } from './officer-bond';

export type OfficerType = BaseIDType & {
  name: string;
  factionId: string;
  aptitudeId: string;
  officerTypeId: string[];
  bonds?: OfficerBondType[];
};

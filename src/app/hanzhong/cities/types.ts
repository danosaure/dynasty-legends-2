import type { BaseIDType } from '../../types';
import type { HanzhongBonusType } from '../types';

export type HanzhongCityBaseRequirement = {
  section: 'cities';
};

export type HanzhongCityOneOfRequirement = HanzhongCityBaseRequirement & {
  type: 'oneOf';
  cityNames: string[];
};

export type HanzhongCityHanzhongCityRequirement = HanzhongCityBaseRequirement & {
  type: 'hanzhong';
};

export type HanzhongCityNonHanzhongCityRequirement = HanzhongCityBaseRequirement & {
  type: 'non-hanzhong';
  value: number;
};

export type HanzhongCityRequirement =
  | HanzhongCityOneOfRequirement
  | HanzhongCityHanzhongCityRequirement
  | HanzhongCityNonHanzhongCityRequirement;

export type HanzhongCityType = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: HanzhongBonusType;
  requirement?: HanzhongCityRequirement;
};

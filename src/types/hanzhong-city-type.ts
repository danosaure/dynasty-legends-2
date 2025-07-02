import type { BaseIDType } from './base-id-type';

export type HanzhongCityType = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: number;
};

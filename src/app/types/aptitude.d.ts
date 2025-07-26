import type { BaseIDType } from './base-id-type';

export type AptitudeValueType = 14 | 16 | 18 | 19 | 20 | 22;

export type AptitudeType = BaseIDType & {
  name: string;
  aptitude: AptitudeValueType;
  color: string;
};

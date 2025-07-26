import { sanitizeId } from '../../utils';
import type { AptitudeType, AptitudeValueType } from '../types';

type DataType = [AptitudeValueType, number, string];

export const APTITUDE_KEYS: Record<number, AptitudeValueType> = {
  16: 16,
  18: 18,
  19: 19,
  20: 20,
  22: 22,
} as const;

const DATA: DataType[] = [
  [APTITUDE_KEYS[16], 16, '#D4895A'],
  [APTITUDE_KEYS[18], 18, '#D36B67'],
  [APTITUDE_KEYS[19], 20, '#D36B67'],
  [APTITUDE_KEYS[20], 20, '#D4AC59'],
  [APTITUDE_KEYS[22], 22, '#FBF488'],
];

const RAW: AptitudeType[] = DATA.map((infos: DataType) => {
  const [aptitude, displayAptitude, color] = infos;
  return {
    id: sanitizeId(`aptitude--${aptitude}`),
    name: String(displayAptitude),
    aptitude,
    color,
  };
});

export const APTITUDES: AptitudeType[] = [...RAW] as const;

export const getAptitudeById = (id: string): AptitudeType | undefined => APTITUDES.find((aptitude) => aptitude.id === id);

export const getAptitudeByAptitude = (apt: number): AptitudeType | undefined =>
  APTITUDES.find((aptitude) => aptitude.aptitude === apt);

export const getAptitudeIdByAptitude = (apt: number): string => {
  const aptitude = getAptitudeByAptitude(apt);
  return aptitude?.id ?? '';
};

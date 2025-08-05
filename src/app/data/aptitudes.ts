import { sanitizeId } from '../../utils';
import type { AptitudeType, AptitudeValueType } from '../types';
import { createThemeFromBackground } from '../utils';

type DataType = [AptitudeValueType, number, string];

export const APTITUDE_KEYS: Record<number, AptitudeValueType> = {
  14: 14,
  16: 16,
  18: 18,
  19: 19,
  20: 20,
  22: 22,
} as const;

const DATA: DataType[] = [
  [APTITUDE_KEYS[14], 14, '#EEB488'],
  [APTITUDE_KEYS[16], 16, '#E97878'],
  [APTITUDE_KEYS[18], 18, '#F37979'],
  [APTITUDE_KEYS[19], 20, '#FE7E7D'],
  [APTITUDE_KEYS[20], 20, '#ECE385'],
  [APTITUDE_KEYS[22], 22, '#FBF488'],
];

const RAW: AptitudeType[] = DATA.map((infos: DataType) => {
  const [aptitude, displayAptitude, color] = infos;
  return {
    id: sanitizeId(`aptitude--${aptitude}`),
    name: String(displayAptitude),
    aptitude,
    palette: createThemeFromBackground(color).palette,
  };
});

export const APTITUDES: AptitudeType[] = [...RAW] as const;

export const getAptitudeById = (id: string): AptitudeType => {
  const aptitude = APTITUDES.find((aptitude) => aptitude.id === id);
  if (!aptitude) {
    throw new Error(`Invalid aptitude id "${id}".`);
  }
  return aptitude;
};

export const getAptitudeByAptitude = (apt: AptitudeValueType): AptitudeType => {
  const aptitude = APTITUDES.find((aptitude) => aptitude.aptitude === apt);
  if (!aptitude) {
    throw new Error(`Invalid aptitude ${apt}.`);
  }
  return aptitude;
};

export const getAptitudeIdByAptitude = (apt: AptitudeValueType): string => getAptitudeByAptitude(apt).id;

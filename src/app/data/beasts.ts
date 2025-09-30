import { sanitizeId } from '../../utils';
import type { AptitudeValueType, BaseIDType, IconType } from '../types';
import { getAptitudeIdByAptitude } from './aptitudes';

export type BeastType = BaseIDType & {
  name: string;
  aptitudeId: string;
  avatar: IconType;
};

type DataType = [string, AptitudeValueType];

const _DATA: DataType[] = [
  ['Bi Fang', 16],
  ['Dangkang', 14],
  ['Floodbringer', 16],
  ['Kirin', 22],
  ['Kunpeng', 22],
  ['Pixiu', 20],
  ['Torch Dragon', 20],
  ['White Marsh', 20],
  ['Yinglong', 22],
  ['Zhu Yan', 16],
];

const avatar = (name: string): IconType => ({ path: `data/beasts/${sanitizeId(name)}.png` });

export const BEASTS: BeastType[] = [
  ..._DATA.map<BeastType>((beastInfo) => {
    const [name, aptitude] = beastInfo;

    return {
      id: sanitizeId(`beasts--${name}`),
      name,
      aptitudeId: getAptitudeIdByAptitude(aptitude),
      avatar: avatar(name),
    } as const;
  }),
] as const;

export const getBeastByName = (name: string): BeastType => {
  const beast = BEASTS.find((beast) => beast.name === name);
  if (!beast) {
    throw new Error(`Invalid beast name="${name}".`);
  }
  return beast;
};

export const getBeastById = (id: string): BeastType => {
  const beast = BEASTS.find((beast) => beast.id === id);
  if (!beast) {
    throw new Error(`Invalid beast id="${id}".`);
  }
  return beast;
};

export const getBeastIdByName = (name: string): string => getBeastByName(name).id;

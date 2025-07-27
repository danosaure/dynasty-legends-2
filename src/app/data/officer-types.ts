import { sanitizeId } from '../../utils';
import type { OfficerTypeNameType, OfficerTypeType } from '../types';

type DataType = [OfficerTypeNameType, string];

export const OFFICER_TYPE_KEYS: Record<string, OfficerTypeNameType> = {
  ASSASSIN: 'Assassin',
  MAGE: 'Mage',
  MARKSMAN: 'Marksman',
  SUPPORT: 'Support',
  TANK: 'Tank',
  WARRIOR: 'Warrior',
} as const;

const DATA: DataType[] = [
  [OFFICER_TYPE_KEYS.ASSASSIN, '#554A45'],
  [OFFICER_TYPE_KEYS.MAGE, '#35587E'],
  [OFFICER_TYPE_KEYS.MARKSMAN, '#67337C'],
  [OFFICER_TYPE_KEYS.SUPPORT, '#3E7A40'],
  [OFFICER_TYPE_KEYS.TANK, '#796531'],
  [OFFICER_TYPE_KEYS.WARRIOR, '#7C323D'],
];

const RAW: OfficerTypeType[] = DATA.map((infos) => {
  const [name, color] = infos;
  return {
    id: sanitizeId(`officer-type--${name}`),
    name,
    color,
    avatar: {
      path: sanitizeId(`data/officer-types/${name}--active.png`),
      alt: sanitizeId(`data/officer-types/${name}.png`),
    },
  };
});

export const OFFICER_TYPES: OfficerTypeType[] = [...RAW] as const;

export const getOfficerTypeById = (id: string): OfficerTypeType | undefined =>
  OFFICER_TYPES.find((officerType) => officerType.id === id);

export const getOfficerTypeByName = (name: string): OfficerTypeType | undefined =>
  OFFICER_TYPES.find((officerType) => officerType.name === name);

export const getOfficerTypeIdByName = (name: string): string => {
  const officerType = getOfficerTypeByName(name);
  return officerType?.id ?? '';
};

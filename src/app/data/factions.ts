import { sanitizeId } from '../../utils';
import type { FactionNameType, FactionType } from '../types';

type DataType = [FactionNameType, string];

export const FACTION_KEYS: Record<string, FactionNameType> = {
  WEI: 'Wei',
  SHU: 'Shu',
  WU: 'Wu',
  OTHER: 'Other',
} as const;

const DATA: DataType[] = [
  [FACTION_KEYS.WEI, '#466D97'],
  [FACTION_KEYS.SHU, '#66875D'],
  [FACTION_KEYS.WU, '#A95B4A'],
  [FACTION_KEYS.OTHER, '#C88767'],
];

const RAW: FactionType[] = DATA.map((infos) => {
  const [name, color] = infos;
  return {
    id: sanitizeId(`faction--${name}`),
    name,
    color,
  };
});

export const FACTIONS: FactionType[] = [...RAW] as const;

export const getFactionById = (id: string): FactionType | undefined => FACTIONS.find((faction) => faction.id === id);

export const getFactionByName = (name: string): FactionType | undefined => FACTIONS.find((faction) => faction.name === name);

export const getFactionIdByName = (name: string): string => {
  const faction = getFactionByName(name);
  return faction?.id ?? '';
};

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
  [FACTION_KEYS.WEI, '#8DBEDC '],
  [FACTION_KEYS.SHU, '#A8CE9B'],
  [FACTION_KEYS.WU, '#FF5D5D'],
  [FACTION_KEYS.OTHER, '#D99784'],
];

const avatar = (name: string, active: boolean): string => `data/factions/${sanitizeId(name)}${active ? '--active' : ''}.png`;

const RAW: FactionType[] = DATA.map((infos) => {
  const [name, color] = infos;
  return {
    id: sanitizeId(`faction--${name}`),
    name,
    color,
    avatar: {
      path: avatar(name, true),
      alt: avatar(name, false),
    },
  };
});

export const FACTIONS: FactionType[] = [...RAW] as const;

export const getFactionById = (id: string): FactionType => {
  const faction = FACTIONS.find((faction) => faction.id === id);
  if (!faction) {
    throw new Error(`Invalid faction id "${id}".`);
  }
  return faction;
};

export const getFactionByName = (name: FactionNameType): FactionType => {
  const faction = FACTIONS.find((faction) => faction.name === name);
  if (!faction) {
    throw new Error(`Invalid faction name "${name}".`);
  }
  return faction;
};

export const getFactionIdByName = (name: FactionNameType): string => getFactionByName(name).id;

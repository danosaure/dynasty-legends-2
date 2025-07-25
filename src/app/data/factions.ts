import type { FactionType } from '../types';

const RAW: FactionType[] = [
  {
    id: 'faction--wei',
    name: 'Wei',
  },
  {
    id: 'faction--shu',
    name: 'Shu',
  },
  {
    id: 'faction--wu',
    name: 'Wu',
  },
  {
    id: 'faction--other',
    name: 'Other',
  },
];

export const FACTIONS: FactionType[] = [...RAW] as const;

export const getFactionById = (id: string): FactionType | undefined => FACTIONS.find((faction) => faction.id === id);

export const getFactionByName = (name: string): FactionType | undefined => FACTIONS.find((faction) => faction.name === name);

export const getFactionIdByName = (name: string): string | undefined => {
  const faction = getFactionByName(name);
  return faction?.id;
};

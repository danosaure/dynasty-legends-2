import type { FactionType } from '../types';

const RAW: FactionType[] = [
  {
    id: 'faction--wei',
    name: 'Wei',
    color: '#466D97',
  },
  {
    id: 'faction--shu',
    name: 'Shu',
    color: '#66875D',
  },
  {
    id: 'faction--wu',
    name: 'Wu',
    color: '#A95B4A',
  },
  {
    id: 'faction--other',
    name: 'Other',
    color: '#C88767',
  },
];

export const FACTIONS: FactionType[] = [...RAW] as const;

export const getFactionById = (id: string): FactionType | undefined => FACTIONS.find((faction) => faction.id === id);

export const getFactionByName = (name: string): FactionType | undefined => FACTIONS.find((faction) => faction.name === name);

export const getFactionIdByName = (name: string): string | undefined => {
  const faction = getFactionByName(name);
  return faction?.id;
};

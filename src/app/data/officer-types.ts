import type { OfficerTypeType } from '../types';

//   name: 'Mage' | 'Marksman' | 'Support' | 'Tank' | 'Warrior';

const RAW: OfficerTypeType[] = [
  {
    id: 'officer-type--mage',
    name: 'Mage',
    description:
      'Full of wonderful foresights and good plans. Reduces the backswing duration after Flash (Only the effect of the first type applies in battle for dual-type Officers).',
  },
];

export const OFFICER_TYPES: OfficerTypeType[] = [...RAW] as const;

export const getOfficerTypeById = (id: string): OfficerTypeType | undefined =>
  OFFICER_TYPES.find((officerType) => officerType.id === id);

export const getOfficerTypeByName = (name: string): OfficerTypeType | undefined =>
  OFFICER_TYPES.find((officerType) => officerType.name === name);

import type { OfficerTypeType } from '../types';

//   name: 'Mage' | 'Marksman' | 'Support' | 'Tank' | 'Warrior';

const RAW: OfficerTypeType[] = [
  {
    id: 'officer-type--mage',
    name: 'Mage',
    color: '#35587E',
    description:
      'Full of wonderful foresights and good plans. Reduces the backswing duration after Flash (Only the effect of the first type applies in battle for dual-type Officers).',
  },
  {
    id: 'officer-type--marksman',
    name: 'Marksman',
    color: '#67337C',
    description: '',
  },
  {
    id: 'officer-type--support',
    name: 'Support',
    color: '#3E7A40',
    description: '',
  },
  {
    id: 'officer-type--tank',
    name: 'Tank',
    color: '#796531',
    description: '',
  },
  {
    id: 'officer-type--warrior',
    name: 'Warrior',
    color: '#7C323D',
    description: '',
  },
];

export const OFFICER_TYPES: OfficerTypeType[] = [...RAW] as const;

export const getOfficerTypeById = (id: string): OfficerTypeType | undefined =>
  OFFICER_TYPES.find((officerType) => officerType.id === id);

export const getOfficerTypeByName = (name: string): OfficerTypeType | undefined =>
  OFFICER_TYPES.find((officerType) => officerType.name === name);

export const getOfficerTypeIdByName = (name: string): string | undefined => {
  const officerType = getOfficerTypeByName(name);
  return officerType?.id;
};

import type { AptitudeType } from '../types';

const RAW: AptitudeType[] = [
  {
    id: 'aptitude--16',
    name: 'Aptitude 16',
    aptitude: 16,
    color: '#D4895A',
  },
  {
    id: 'aptitude--18',
    name: 'Aptitude 18',
    aptitude: 18,
    color: '#D36B67',
  },
  {
    id: 'aptitude--20',
    name: 'Aptitude 20',
    aptitude: 20,
    color: '#D4AC59',
  },
  {
    id: 'aptitude--22',
    name: 'Aptitude 22',
    aptitude: 22,
    color: '#FBF488',
  },
];

export const APTITUDES: AptitudeType[] = [...RAW] as const;

export const getAptitudeById = (id: string): AptitudeType | undefined => APTITUDES.find((aptitude) => aptitude.id === id);

export const getAptitudeByAptitude = (apt: number): AptitudeType | undefined =>
  APTITUDES.find((aptitude) => aptitude.aptitude === apt);

export const getAptitudeIdByAptitude = (apt: number): string | undefined => {
  const aptitude = getAptitudeByAptitude(apt);
  return aptitude?.id;
};

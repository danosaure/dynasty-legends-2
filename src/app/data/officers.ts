import { sanitizeId } from '../../utils';
import { type OfficerType } from '../types';
import { APTITUDE_KEYS, getAptitudeIdByAptitude } from './aptitudes';
import { FACTION_KEYS, getFactionIdByName } from './factions';
import { getOfficerTypeIdByName, OFFICER_TYPE_KEYS } from './officer-types';

type DataType = [string, string, number, string];

const DATA: DataType[] = [
  ['Cao Cao', FACTION_KEYS.WEI, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.ASSASSIN],
  ['Guan Yu', FACTION_KEYS.SHU, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.WARRIOR],
  ['Huang Yueying', FACTION_KEYS.SHU, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.MARKSMAN],
  ['Pang Tong', FACTION_KEYS.SHU, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.MARKSMAN],
  ['Sun Shangxiang', FACTION_KEYS.WU, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.MARKSMAN],
  ['Xiao Qiao', FACTION_KEYS.WU, APTITUDE_KEYS[18], OFFICER_TYPE_KEYS.SUPPORT],
  ['Zhang Jiao', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.MAGE],
  ['Zhao Yun', FACTION_KEYS.SHU, APTITUDE_KEYS[19], OFFICER_TYPE_KEYS.ASSASSIN],
  ['Zhenji', FACTION_KEYS.WEI, APTITUDE_KEYS[20], OFFICER_TYPE_KEYS.MAGE],
];

const RAW: OfficerType[] = DATA.map((infos: DataType) => {
  const [name, factionName, aptitude, officerTypeName] = infos;
  return {
    id: sanitizeId(`officers--${name}`),
    name,
    factionId: getFactionIdByName(factionName),
    aptitudeId: getAptitudeIdByAptitude(aptitude),
    officerTypeId: getOfficerTypeIdByName(officerTypeName),
  };
});

export const OFFICERS: OfficerType[] = [...RAW] as const;

export const getOfficerById = (id: string): OfficerType | undefined => OFFICERS.find((officer) => officer.id === id);

export const getOfficerByName = (name: string): OfficerType | undefined => OFFICERS.find((officer) => officer.name === name);

export const getOfficerIdByName = (name: string): string => {
  const officer = getOfficerByName(name);
  return officer?.id ?? '';
};

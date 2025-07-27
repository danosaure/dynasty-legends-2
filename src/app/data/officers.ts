import { sanitizeId } from '../../utils';
import { type AptitudeValueType, type FactionNameType, type OfficerType, type OfficerTypeNameType } from '../types';
import { APTITUDE_KEYS, getAptitudeIdByAptitude } from './aptitudes';
import { FACTION_KEYS, getFactionIdByName } from './factions';
import { getOfficerTypeIdByName, OFFICER_TYPE_KEYS } from './officer-types';

type DataType = [string, FactionNameType, AptitudeValueType, OfficerTypeNameType[]];

const DATA: DataType[] = [
  ['Cai Wenji', FACTION_KEYS.WEI, APTITUDE_KEYS[18], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Cao Cao', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Cao Ren', FACTION_KEYS.WEI, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.TANK]],
  ['Da Qiao', FACTION_KEYS.WU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Dian Wei', FACTION_KEYS.WEI, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Diaochan', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]],
  ['Dong Zhuo', FACTION_KEYS.OTHER, APTITUDE_KEYS[18], [OFFICER_TYPE_KEYS.TANK]],
  ['Gan Ning', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Guan Yu', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Guo Jia', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]],
  ['Hua Tuo', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Hua Xiong', FACTION_KEYS.OTHER, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Huang Gai', FACTION_KEYS.WU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]],
  ['Huang Yueying', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Huang Zhong', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Jia Xu', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Liu Bei', FACTION_KEYS.SHU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Lu Bu', FACTION_KEYS.OTHER, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Lu Meng', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Lu Xun', FACTION_KEYS.WU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR, OFFICER_TYPE_KEYS.MAGE]],
  ['Ma Chao', FACTION_KEYS.SHU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.ASSASSIN, OFFICER_TYPE_KEYS.WARRIOR]],
  ['Mi Fang', FACTION_KEYS.SHU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]],
  ['Pang Tong', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Sun Ce', FACTION_KEYS.WU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Sun Jian', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Sun Quan', FACTION_KEYS.WU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Sun Shangxiang', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Sima Yi', FACTION_KEYS.WEI, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.MAGE, OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Taishi Ci', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Wen Chou', FACTION_KEYS.OTHER, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]],
  ['Xiahou Dun', FACTION_KEYS.WEI, APTITUDE_KEYS[19], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Xiao Qiao', FACTION_KEYS.WU, APTITUDE_KEYS[18], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Xu Huang', FACTION_KEYS.WEI, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]],
  ['Xu Shu', FACTION_KEYS.SHU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.MAGE]],
  ['Xu You', FACTION_KEYS.WEI, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Xue Zong', FACTION_KEYS.WU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.MAGE]],
  ['Yan Liang', FACTION_KEYS.OTHER, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Yuan Shao', FACTION_KEYS.OTHER, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Yuan Shu', FACTION_KEYS.OTHER, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.SUPPORT]],
  ['Zhang Chunhua', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Zhang Fei', FACTION_KEYS.SHU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Zhang He', FACTION_KEYS.WEI, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Zhang Jiao', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]],
  ['Zhang Liao', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]],
  ['Zhao Yun', FACTION_KEYS.SHU, APTITUDE_KEYS[19], [OFFICER_TYPE_KEYS.ASSASSIN]],
  ['Zhenji', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]],
  ['Zhou Cang', FACTION_KEYS.SHU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.MARKSMAN]],
  ['Zhou Yu', FACTION_KEYS.WU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.MAGE]],
  ['Zhuge Liang', FACTION_KEYS.SHU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.MAGE]],
  ['Zuo Ci', FACTION_KEYS.OTHER, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.SUPPORT]],
].sort((a, b) => {
  if ((a[2] as number) === (b[2] as number)) {
    return (a[0] as string).localeCompare(b[0] as string);
  }
  return (b[2] as number) - (a[2] as number);
});

const avatar = (name: string): string => `data/officers/${sanitizeId(name)}.png`;

const RAW: OfficerType[] = DATA.map((infos: DataType) => {
  const [name, factionName, aptitude, officerTypeNames] = infos;
  return {
    id: sanitizeId(`officers--${name}`),
    name,
    factionId: getFactionIdByName(factionName),
    aptitudeId: getAptitudeIdByAptitude(aptitude),
    officerTypeIds: officerTypeNames.map((officerTypeName) => getOfficerTypeIdByName(officerTypeName)),
    avatar: {
      path: avatar(name),
    },
  };
});

export const OFFICERS: OfficerType[] = [...RAW] as const;

export const getOfficerById = (id: string): OfficerType => {
  const officer = OFFICERS.find((officer) => officer.id === id);
  if (!officer) {
    throw new Error(`Invalid officer id "${id}".`);
  }
  return officer;
};

export const getOfficerByName = (name: string): OfficerType => {
  const officer = OFFICERS.find((officer) => officer.name === name);
  if (!officer) {
    throw new Error(`Invalid officer name "${name}".`);
  }
  return officer;
};

export const getOfficerIdByName = (name: string): string => {
  const officer = getOfficerByName(name);
  return officer?.id ?? '';
};

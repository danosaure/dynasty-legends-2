import { sanitizeId } from '../../utils';
import { type AptitudeValueType, type FactionNameType, type OfficerType, type OfficerTypeNameType } from '../types';
import { APTITUDE_KEYS, getAptitudeIdByAptitude } from './aptitudes';
import { FACTION_KEYS, getFactionIdByName } from './factions';
import { getOfficerTypeIdByName, OFFICER_TYPE_KEYS } from './officer-types';

type DataType = [string, FactionNameType, AptitudeValueType, OfficerTypeNameType[]];

const DATA: DataType[] = [
  ['Cai Wenji', FACTION_KEYS.WEI, APTITUDE_KEYS[18], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Cao Cao', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Cao Ren', FACTION_KEYS.WEI, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.TANK]] as DataType,
  ['Da Qiao', FACTION_KEYS.WU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Dian Wei', FACTION_KEYS.WEI, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Diaochan', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Dong Zhuo', FACTION_KEYS.OTHER, APTITUDE_KEYS[18], [OFFICER_TYPE_KEYS.TANK]] as DataType,
  ['Gan Ning', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Guan Yu', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Guo Jia', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Hua Tuo', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Hua Xiong', FACTION_KEYS.OTHER, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Huang Gai', FACTION_KEYS.WU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]] as DataType,
  ['Huang Yueying', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Huang Zhong', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Jia Xu', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Jiang Wei', FACTION_KEYS.SHU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Liu Bei', FACTION_KEYS.SHU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Lu Bu', FACTION_KEYS.OTHER, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Lu Meng', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Lu Xun', FACTION_KEYS.WU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR, OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Ma Chao', FACTION_KEYS.SHU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.ASSASSIN, OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Mi Fang', FACTION_KEYS.SHU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]] as DataType,
  ['Pang Tong', FACTION_KEYS.SHU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Sun Ce', FACTION_KEYS.WU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Sun Jian', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Sun Quan', FACTION_KEYS.WU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Sun Shangxiang', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Sima Yi', FACTION_KEYS.WEI, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.MAGE, OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Taishi Ci', FACTION_KEYS.WU, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Wen Chou', FACTION_KEYS.OTHER, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]] as DataType,
  ['Xiahou Dun', FACTION_KEYS.WEI, APTITUDE_KEYS[19], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Xiao Qiao', FACTION_KEYS.WU, APTITUDE_KEYS[18], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Xu Huang', FACTION_KEYS.WEI, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.TANK]] as DataType,
  ['Xu Shu', FACTION_KEYS.SHU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Xu You', FACTION_KEYS.WEI, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Xue Zong', FACTION_KEYS.WU, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Yan Liang', FACTION_KEYS.OTHER, APTITUDE_KEYS[14], [OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Yuan Shao', FACTION_KEYS.OTHER, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Yuan Shu', FACTION_KEYS.OTHER, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
  ['Zhang Chunhua', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Zhang Fei', FACTION_KEYS.SHU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Zhang He', FACTION_KEYS.WEI, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Zhang Jiao', FACTION_KEYS.OTHER, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Zhang Liao', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.WARRIOR]] as DataType,
  ['Zhao Yun', FACTION_KEYS.SHU, APTITUDE_KEYS[19], [OFFICER_TYPE_KEYS.ASSASSIN]] as DataType,
  ['Zhenji', FACTION_KEYS.WEI, APTITUDE_KEYS[20], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Zhou Cang', FACTION_KEYS.SHU, APTITUDE_KEYS[16], [OFFICER_TYPE_KEYS.MARKSMAN]] as DataType,
  ['Zhou Yu', FACTION_KEYS.WU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Zhuge Liang', FACTION_KEYS.SHU, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.MAGE]] as DataType,
  ['Zuo Ci', FACTION_KEYS.OTHER, APTITUDE_KEYS[22], [OFFICER_TYPE_KEYS.SUPPORT]] as DataType,
].sort((a: DataType, b: DataType) => {
  if ((a[2] as number) === (b[2] as number)) {
    return a[0].localeCompare(b[0]);
  }
  return (b[2] as number) - (a[2] as number);
});

const avatar = (name: string): string => `data/officers/${sanitizeId(name)}.png`;

const officerIdByName = (name: string): string => sanitizeId(`officers--${name}`);

const RAW: OfficerType[] = DATA.map((infos: DataType) => {
  const [name, factionName, aptitude, officerTypeNames] = infos;
  return {
    id: officerIdByName(name),
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

[
  [
    'Hua Tuo',
    'Courtesy name Yuanhua, the renowned Divine Physician. He is famously known for performing bone surgery on Guan Yu. In his later years, he was tragically executed by Cao Cao, leaving behind a legacy of medical brilliance.',
  ],
].forEach((data) => {
  const [name, profile] = data;
  const officer = getOfficerByName(name);
  officer.profile = profile;
});

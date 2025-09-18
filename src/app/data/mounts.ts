import { sanitizeId } from '../../utils';
import type { AptitudeValueType, BaseIDType, IconType } from '../types';
import { getAptitudeIdByAptitude } from './aptitudes';
import { getOfficerIdByName } from './officers';

export type MountType = BaseIDType & {
  name: string;
  aptitudeId: string;
  officerIds: string[];
  avatar: IconType;
};

type DataType = [string, AptitudeValueType, string[]];

const _DATA: DataType[] = [
  ['Abyssal Drake', 22, ['Diaochan', 'Lu Meng', 'Dian Wei', 'Sima Yi', 'Lu Bu', 'Zuo Ci', 'Lu Xun']],
  ['Celestial Crane', 22, ['Sun Shangxiang', 'Diaochan', 'Hua Tuo', 'Lu Bu', 'Zuo Ci', 'Zhuge Liang', 'Lu Xun', 'Sima Yi']],
  ['Dark Cloud', 16, ['Hua Xiong', 'Xu Shu', 'Cai Wenji', 'Huang Gai']],
  ['Dust Chaser', 20, ['Huang Yueying', 'Zhenji', 'Huang Zhong', 'Zhao Yun', 'Xiao Qiao']],
  ['Ebon Prince', 16, ['Zhou Cang', 'Zhang He', 'Yuan Shu']],
  ['Fairy Sprite', 22, ['Guan Yu', 'Pang Tong', 'Guo Jia']],
  ['Fiery Kylin', 22, ['Cao Cao', 'Sun Jian', 'Zhou Yu', 'Lu Xun', 'Sun Ce', 'Lu Bu', 'Dian Wei', 'Zuo Ci']],
  ['Flash Sail', 16, ['Lu Meng', 'Yuan Shao', 'Sun Quan', 'Yan Liang', 'Xu Huang']],
  ['Great Guardian', 22, ['Sun Shangxiang', 'Zhenji', 'Hua Tuo', 'Zhuge Liang', 'Ma Chao', 'Dian Wei', 'Lu Xun']],
  ['Great Yellow', 14, ['Xu Shu', 'Yuan Shu', 'Liu Bei']],
  ['Heavenly Galloper', 14, ['Zhang Fei', 'Yuan Shao', 'Xu Huang']],
  ['Hex Mark', 20, ['Sun Shangxiang', 'Pang Tong', 'Zhang Chunhua', 'Da Qiao', 'Liu Bei']],
  ['Night Rusher', 14, ['Zhang He', 'Sun Quan', 'Mi Fang']],
  ['Nightmare Buster', 22, ['Guan Yu', 'Huang Yueying', 'Huang Zhong', 'Xiahou Dun', 'Lu Bu', 'Zuo Ci', 'Guo Jia']],
  ['Purple Bay', 16, ['Zhang Fei', 'Xiahou Dun', 'Xiao Qiao', 'Xu You']],
  ['Radiant Vision', 22, ['Gan Ning', 'Jia Xu', 'Zhang Chunhua', 'Zhou Yu', 'Lu Xun', 'Sun Ce', 'Dian Wei', 'Sima Yi']],
  ['Red Hare', 20, ['Guan Yu', 'Diaochan', 'Taishi Ci', 'Dong Zhuo', 'Lu Bu']],
  ['River Rover', 14, ['Zhou Cang', 'Cai Wenji', 'Xu You']],
  ['Robust Fiend', 22, ['Guan Yu', 'Gan Ning', 'Jia Xu', 'Dian Wei', 'Sima Yi', 'Zhou Yu', 'Ma Chao', 'Zuo Ci']],
  ['Shadow Runner', 20, ['Zhang Jiao', 'Cao Cao', 'Sun Jian', 'Diaochan', 'Zhang Liao', 'Zhang Chunhua']],
  ['Shadow Strider', 22, ['Zhang Jiao', 'Zhang Liao', 'Pang Tong', 'Zhuge Liang', 'Ma Chao', 'Lu Xun', 'Sima Yi']],
  ['Startled Sail', 16, ['Dong Zhuo', 'Liu Bei', 'Xue Zong', 'Mi Fang']],
  ['White Crane', 14, ['Hua Xiong', 'Da Qiao', 'Yan Liang']],
  ['White Hooves', 20, ['Sun Shangxiang', 'Gan Ning', 'Jia Xu', 'Lu Meng', 'Zhang Fei', 'Guo Jia']],
  ['White Jade Lion', 16, ['Zhao Yun', 'Cao Ren', 'Da Qiao', 'Wen Chou']],
  ['Wild Runner', 14, ['Cao Ren', 'Xue Zong', 'Wen Chou', 'Huang Gai']],
  ['Yellow-hoofed Thunder', 20, ['Cao Cao', 'Taishi Ci', 'Hua Tuo', 'Xiahou Dun', 'Guo Jia']],
];

const avatar = (name: string): IconType => ({ path: `data/mounts/${sanitizeId(name)}.png` });

export const MOUNTS = [
  ..._DATA.map<MountType>((mount) => {
    const [name, aptitude, officers] = mount;

    return {
      id: sanitizeId(`mounts--${name}`),
      name,
      aptitudeId: getAptitudeIdByAptitude(aptitude),
      officerIds: officers.map<string>((officerName) => getOfficerIdByName(officerName)),
      avatar: avatar(name),
    } as const;
  }),
] as const;

export const getMountByName = (name: string): MountType => {
  const mount = MOUNTS.find((mount) => mount.name === name);
  if (!mount) {
    throw new Error(`Invalid mount name="${name}".`);
  }
  return mount;
};

export const getMountById = (id: string): MountType => {
  const mount = MOUNTS.find((mount) => mount.id === id);
  if (!mount) {
    throw new Error(`Invalid mount id="${id}".`);
  }
  return mount;
};

export const getMountIdByName = (name: string): string => getMountByName(name).id;

export const getMountsByOfficerId = (id: string): MountType[] => MOUNTS.filter((mount) => mount.officerIds.includes(id));

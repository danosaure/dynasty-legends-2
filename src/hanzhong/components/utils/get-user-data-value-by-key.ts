import type { HanzhongContextType } from '../HanzhongContext';

export const getUserDataValueByKey = (hanzhongContextData: HanzhongContextType, key: string, user: string = 'DEFAULT'): number => {
  return hanzhongContextData.usersData[user]?.[key] ?? 0;
};

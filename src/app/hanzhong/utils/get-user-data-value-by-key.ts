import type { HanzhongUserDataType } from '../types';

export const getUserDataValueByKey = (userData: HanzhongUserDataType, key: string): number => {
  return userData[key] ?? 0;
};

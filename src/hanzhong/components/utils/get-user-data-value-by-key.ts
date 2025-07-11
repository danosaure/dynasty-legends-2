import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export const getUserDataValueByKey = (userData: HanzhongUserDataType, key: string): number => {
  return userData[key] ?? 0;
};

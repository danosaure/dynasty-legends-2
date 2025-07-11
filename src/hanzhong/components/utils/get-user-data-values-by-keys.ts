import { getUserDataValueByKey } from './get-user-data-value-by-key';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export const getUserDataValuesByKeys = (userData: HanzhongUserDataType, keys: string[]): number[] => {
  return keys.map<number>((key) => getUserDataValueByKey(userData, key));
};

import type { HanzhongUserDataType } from '../types';
import { getUserDataValueByKey } from './get-user-data-value-by-key';

export const getUserDataValuesByKeys = (userData: HanzhongUserDataType, keys: string[]): number[] => {
  return keys.map<number>((key) => getUserDataValueByKey(userData, key));
};

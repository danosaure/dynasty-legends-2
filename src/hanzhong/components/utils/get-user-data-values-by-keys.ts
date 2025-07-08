import type { HanzhongContextType } from '../HanzhongContext';
import { getUserDataValueByKey } from './get-user-data-value-by-key';

export const getUserDataValuesByKeys = (
  hanzhongContextData: HanzhongContextType,
  keys: string[],
  user: string = 'DEFAULT'
): number[] => {
  return keys.map<number>((key) => getUserDataValueByKey(hanzhongContextData, key, user));
};

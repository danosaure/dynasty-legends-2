import type { HanzhongUserDataType } from '../types';

export const sumValuesFromUserByPrefix = (user: HanzhongUserDataType, prefix: string): number =>
  Object.keys(user)
    .filter((key) => key.startsWith(prefix))
    .reduce((sum, key) => sum + user[key], 0);

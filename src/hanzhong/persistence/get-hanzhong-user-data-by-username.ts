import { getUserDataByUsername } from '../../persistence';
import type { HanzhongUserDataType } from '../types';

export const getHanzhongUserDataByUsername = async (username: string): Promise<HanzhongUserDataType> => {
  const dbUserData = await getUserDataByUsername(username);
  return dbUserData.hanzhong;
};

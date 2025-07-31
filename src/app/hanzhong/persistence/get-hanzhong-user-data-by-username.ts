import { getUserDataByUsername } from '../../../persistence';
import type { HanzhongUserDomainData } from '../types';
import { generateStructuredUserData } from '../utils';

export const getHanzhongUserDataByUsername = async (username: string): Promise<HanzhongUserDomainData> => {
  const dbUserData = await getUserDataByUsername(username);
  return generateStructuredUserData(dbUserData.hanzhong);
};

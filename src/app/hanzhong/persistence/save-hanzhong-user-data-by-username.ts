import { getUserDataByUsername, saveUserDataByUsername } from '../../../persistence';

import type { HanzhongUserDomainData } from '../types';
import { flattenStructuredUserData } from '../utils';

export const saveHanzhongUserDataByUsername = async (username: string, hanzhongUserData: HanzhongUserDomainData): Promise<void> => {
  const dbUserData = await getUserDataByUsername(username);

  dbUserData.hanzhong = flattenStructuredUserData(hanzhongUserData);

  await saveUserDataByUsername(username, dbUserData);
};

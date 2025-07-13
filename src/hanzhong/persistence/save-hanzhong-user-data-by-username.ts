import { getUserDataByUsername } from '../../persistence';
import { saveUserDataByUsername } from '../../persistence/save-user-data-by-username';

import type { HanzhongUserDataType } from '../types';

export const saveHanzhongUserDataByUsername = async (username: string, hanzhongUserData: HanzhongUserDataType): Promise<void> => {
  const dbUserData = await getUserDataByUsername(username);

  dbUserData.hanzhong = hanzhongUserData;

  await saveUserDataByUsername(username, dbUserData);
};

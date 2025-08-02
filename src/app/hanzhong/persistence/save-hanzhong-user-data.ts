import { getUserData, saveUserData } from '../../../persistence';

import type { HanzhongUserDataType } from '../types';

export const saveHanzhongUserData = async (id: string, hanzhongUserData: HanzhongUserDataType): Promise<void> => {
  const dbUserData = await getUserData(id);

  dbUserData.hanzhong = hanzhongUserData;

  await saveUserData(dbUserData);
};

import { getUserData, saveUserData } from '../../../persistence';
import type { HanzhongFormationsUserData } from '../formations/types';

import type { HanzhongUserDataType } from '../types';

export const saveHanzhongUserData = async (
  id: string,
  hanzhongUserData: HanzhongUserDataType,
  formationsUserData: HanzhongFormationsUserData
): Promise<void> => {
  const dbUserData = await getUserData(id);

  dbUserData.hanzhong = hanzhongUserData;
  dbUserData.formations = formationsUserData;

  await saveUserData(dbUserData);
};

import { v4 as uuidv4 } from 'uuid';

import { saveUserData, type PersistenceUserDataType } from '../../persistence';

export const createUser = async (): Promise<void> => {
  const newUserData: PersistenceUserDataType = {
    id: uuidv4(),
    username: '',
  };

  await saveUserData(newUserData);
};

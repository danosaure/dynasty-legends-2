import { getUserData, saveUserData } from '../../../persistence';
import type { OfficersRosterData } from '../types';

export const saveOfficersUserData = async (id: string, userOfficers: OfficersRosterData): Promise<void> => {
  const dbUserData = await getUserData(id);
  dbUserData.officers = userOfficers;
  await saveUserData(dbUserData);
};

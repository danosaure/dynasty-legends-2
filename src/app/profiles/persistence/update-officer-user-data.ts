import { getUserData, saveUserData } from '../../../persistence';

export const updateOfficerUserData = async (userId: string, officerId: string): Promise<void> => {
  const dbUserData = await getUserData(userId);

  const officersRoster = dbUserData.officers ?? {};

  dbUserData.officers = {
    ...officersRoster,
    [officerId]: !officersRoster[officerId],
  };

  await saveUserData(dbUserData);
};

import { getUserData, saveUserData } from '../../../persistence';
import type { MountsRosterData } from '../MountsRosterData';

export const updateMountUserData = async (userId: string, mountId: string): Promise<void> => {
  const dbUserData = await getUserData(userId);
  const mountsRoster: MountsRosterData = dbUserData.mounts ?? {};
  const newMountsRoster = {
    ...mountsRoster,
    [mountId]: !mountsRoster[mountId],
  };
  dbUserData.mounts = newMountsRoster;
  await saveUserData(dbUserData);
};

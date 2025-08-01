import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../shared';

import { ActionsMenu } from './actions-menu';
import { HANZHONG_DATA } from './data';
import { HanzhongContext } from './HanzhongContext';
import { getHanzhongUserDataByUsername, saveHanzhongUserDataByUsername } from './persistence';
import { Progress } from './Progress';
import { ResourceIncomes } from './ResourceIncomes';
import { HanzhongSidePanelTabs } from './side-panel-tabs';
import { TacticalBonuses } from './TacticalBonuses';
import type { HanzhongBonusType, HanzhongContextType, HanzhongUserDataType } from './types';
import { DEFAULT_HANZHONG_CONTEXT_DATA, initializeEarnings } from './utils';
import { useAppContext } from '../Context';

export const HanzhongLayout = () => {
  const { setMenu } = useAppContext();

  const [username] = useState<string>('');
  const [userData, setUserData] = useState<HanzhongUserDataType>({});
  const [isUserDataModified, setIsUserDataModified] = useState<boolean>(false);
  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>(DEFAULT_HANZHONG_CONTEXT_DATA);

  useEffect(() => {
    (async () => {
      const userData = await getHanzhongUserDataByUsername(username);
      setUserData(userData);
    })();
  }, [username]);

  useEffect(() => {
    const bonuses: HanzhongBonusType = initializeEarnings(HANZHONG_DATA, userData);

    const onChange = (key: string, value: number) => {
      setUserData({
        ...userData,
        [key]: value,
      });
      setIsUserDataModified(true);
    };

    setHanzhongContextData({
      user: userData,
      bonuses,
      onChange,
    });
  }, [userData]);

  useEffect(() => {
    const onSave = async (): Promise<void> => {
      await saveHanzhongUserDataByUsername(username, userData);
      setIsUserDataModified(false);
    };

    setMenu(<ActionsMenu isUserDataModified={isUserDataModified} onSave={onSave} />);
    return () => setMenu(null);
  }, [isUserDataModified, setMenu, username, userData]);

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={0} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Grid container spacing={2} size={{ xs: 3 }} sx={{ maxWidth: '225px', backgroundColor: 'rgba(195, 137, 0, 0.1)', p: 1 }}>
          <HanzhongSidePanelTabs />
          <ResourceIncomes />
          <TacticalBonuses />
          <Progress />
        </Grid>
        <Grid size="grow">
          <PaperWrapper>
            <Grid container size="grow" spacing={2} sx={{ p: 1, pb: 3 }}>
              <Outlet />
            </Grid>
          </PaperWrapper>
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

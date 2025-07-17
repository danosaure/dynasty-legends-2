import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../components';
import { HANZHONG_DATA } from '../data';
import { getHanzhongUserDataByUsername, saveHanzhongUserDataByUsername } from '../persistence';
import type { HanzhongBonusType, HanzhongUserDataType } from '../types';
import { calculateSpecialTrainingsBonuses, DEFAULT_HANZHONG_CONTEXT_DATA } from '../utils';

import { ActionsMenu } from './actions-menu';
import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { Progress } from './Progress';
import { ResourceIncomes } from './ResourceIncomes';
import { HanzhongSidePanelTabs } from './side-panel-tabs';
import { TacticalBonuses } from './TacticalBonuses';
import { initializeEarnings } from './utils';

export const HanzhongLayout = () => {
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
    const {
      vanguardCamp: bonusesVanguardCamp,
      valiantCavalry: bonusesValiantCavalry,
      royalGuards: bonusesRoyalGuards,
    } = calculateSpecialTrainingsBonuses(HANZHONG_DATA, userData, bonuses);

    const onChange = (key: string, value: number) => {
      setUserData({
        ...userData,
        [key]: value,
      });
      setIsUserDataModified(true);
    };

    setHanzhongContextData({
      hanzhong: HANZHONG_DATA,
      user: userData,
      bonuses,
      bonusesVanguardCamp,
      bonusesValiantCavalry,
      bonusesRoyalGuards,
      onChange,
    });
  }, [userData]);

  const onSave = async (): Promise<void> => {
    await saveHanzhongUserDataByUsername(username, userData);
    setIsUserDataModified(false);
  };

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={0} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Grid container spacing={2} size={{ xs: 3 }} sx={{ maxWidth: '250px', backgroundColor: 'rgba(195, 137, 0, 0.1)', p: 1 }}>
          <ActionsMenu isUserDataModified={isUserDataModified} onSave={onSave} />
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

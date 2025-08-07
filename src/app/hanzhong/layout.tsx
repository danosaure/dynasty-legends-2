import { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../shared';

import { ActionsMenu } from './actions-menu';
import { HanzhongContext } from './HanzhongContext';
import { saveHanzhongUserData } from './persistence';
import { Progress } from './Progress';
import { ResourceIncomes } from './ResourceIncomes';
import { HanzhongSidePanelTabs } from './side-panel-tabs';
import { TacticalBonuses } from './TacticalBonuses';
import type { HanzhongBonusType, HanzhongContextType, HanzhongUserDataType } from './types';
import { DEFAULT_HANZHONG_CONTEXT_DATA, initializeEarnings } from './utils';
import { useAppContext } from '../Context';
import type { HanzhongFormationsUserData } from './formations/types';

export const HanzhongLayout = () => {
  const { setMenu, user } = useAppContext();
  const [userData, setUserData] = useState<HanzhongUserDataType>(user.hanzhong ?? {});
  const [formationsUserData, setFormationsUserData] = useState<HanzhongFormationsUserData>({ ...user.formations });

  const [isUserDataModified, setIsUserDataModified] = useState<boolean>(false);
  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>({ ...DEFAULT_HANZHONG_CONTEXT_DATA });

  const bonuses = useMemo<HanzhongBonusType>(() => initializeEarnings(userData), [userData]);

  useEffect(() => {
    const onChange = (key: string, value: number) => {
      setUserData({
        ...userData,
        [key]: value,
      });
      setIsUserDataModified(true);
    };

    const onChangeFormations = (key: string, value: number | string) => {
      setFormationsUserData({
        ...formationsUserData,
        [key]: value,
      });
      setIsUserDataModified(true);
    };

    setHanzhongContextData({
      user: userData,
      bonuses,
      onChange,
      formationsUserData,
      onChangeFormations,
      cache: { requirements: {} },
    });
  }, [userData, formationsUserData, bonuses]);

  useEffect(() => {
    const onSave = async (): Promise<void> => {
      await saveHanzhongUserData(user.id, userData, formationsUserData);
      setIsUserDataModified(false);
    };

    setMenu(<ActionsMenu isUserDataModified={isUserDataModified} onSave={onSave} />);
    return () => setMenu(null);
  }, [isUserDataModified, setMenu, userData, formationsUserData, user.id]);

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

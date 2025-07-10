import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongSidePanel } from './HanzhongSidePanel';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { HANZHONG_DATA } from '../data';
import { initializeEarnings } from './utils/initialize-earnings';
import type { HanzhongBonusType } from '../types';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export const Hanzhong = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [userData, setUserData] = useState<HanzhongUserDataType>({});

  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>({
    hanzhong: HANZHONG_DATA,
    user: {},
    bonuses: {},
    onChange: () => {},
  });

  useEffect(() => {
    const bonuses: HanzhongBonusType = initializeEarnings(HANZHONG_DATA, userData);

    const onChange = (key: string, value: number) => {
      setUserData({
        ...userData,
        [key]: value,
      });
    };

    setHanzhongContextData({
      hanzhong: HANZHONG_DATA,
      user: userData,
      bonuses,
      onChange,
    });

    setLoading(false);
  }, [userData]);

  if (loading) {
    return null;
  }

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Paper elevation={10} sx={{ p: 2 }}>
            <HanzhongSidePanel />
          </Paper>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <Paper elevation={10} sx={{ p: 2 }}>
            <HanzhongWarTiersTechs />
          </Paper>
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

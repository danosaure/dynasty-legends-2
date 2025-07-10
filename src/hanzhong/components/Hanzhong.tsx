import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongSidePanel } from './HanzhongSidePanel';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { HANZHONG_DATA } from '../data';
import { initializeEarnings } from './utils/initialize-earnings';
import type { HanzhongBonusType } from '../types';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';
import { HANZHONG_TECH_IDS, HANZHONG_TERRITORY_IDS } from '../constants/items-ids';

export const Hanzhong = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [userData, setUserData] = useState<HanzhongUserDataType>({
    // TODO: Remove this mock data.
    [HANZHONG_TERRITORY_IDS.LUMBER_MILL__1]: 4,
    [HANZHONG_TERRITORY_IDS.GRANARY__9]: 2,
    [HANZHONG_TECH_IDS.DILIGENT_WARRIOR_3]: 10,
  });

  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>({
    hanzhong: HANZHONG_DATA,
    user: {},
    bonuses: {},
  });

  const onChange = (key: string, newValue: number) => {
    setUserData({
      ...userData,
      [key]: newValue,
    });
  };

  useEffect(() => {
    const bonuses: HanzhongBonusType = initializeEarnings(HANZHONG_DATA, userData);
    console.log('<Hanzhong>  bonuses:', bonuses);

    setHanzhongContextData({
      hanzhong: HANZHONG_DATA,
      user: userData,
      bonuses,
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
          <HanzhongSidePanel />
        </Grid>
        <Grid size={{ xs: 9 }}>
          <HanzhongWarTiersTechs info={hanzhongContextData.hanzhong.warTiers} onChange={onChange} />
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

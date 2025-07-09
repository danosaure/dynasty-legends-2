import { useEffect, useMemo, useState } from 'react';

import Grid from '@mui/material/Grid';

import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongSidePanel } from './HanzhongSidePanel';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { HANZHONG_DATA } from '../data';
import { initializeEarnings } from './utils/initialize-earnings';
import type { HanzhongBonusType } from '../types';

export const Hanzhong = () => {
  const [loading, setLoading] = useState(true);

  const [username] = useState<string>('DEFAULT');
  const [userData, setUserData] = useState({});

  const hanzhongContextData: HanzhongContextType = useMemo(() => HANZHONG_DATA, [username]);

  const onChange = (key: string, newValue: number) => {
    setUserData({
      ...userData,
      [key]: newValue,
    });
  };

  useEffect(() => {
    const bonuses: HanzhongBonusType = initializeEarnings(HANZHONG_DATA, {
      'hanzhong--territory--lumber-mill--1': 4,
      'hanzhong--territory--granary--9': 2,
      'hanzhong--tech--diligent-warrior-3': 10,
    });
    console.log('<Hanzhong>  bonuses:', bonuses);
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <HanzhongSidePanel onChange={onChange} />
        </Grid>
        <Grid size={{ xs: 9 }}>
          <HanzhongWarTiersTechs info={hanzhongContextData.warTiers} onChange={onChange} />
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

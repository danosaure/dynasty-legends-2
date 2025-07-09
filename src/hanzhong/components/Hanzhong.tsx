import { useMemo, useState } from 'react';

import Grid from '@mui/material/Grid';

import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongSidePanel } from './HanzhongSidePanel';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { HANZHONG_DATA } from '../data';

export const Hanzhong = () => {
  const [username] = useState<string>('DEFAULT');
  const [userData, setUserData] = useState({});

  const hanzhongContextData: HanzhongContextType = useMemo(() => HANZHONG_DATA, [username]);

  const onChange = (key: string, newValue: number) => {
    setUserData({
      ...userData,
      [key]: newValue,
    });
  };

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

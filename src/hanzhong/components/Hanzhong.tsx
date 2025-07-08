import { useMemo, useState } from 'react';

import Grid from '@mui/material/Grid';

import { HanzhongContext } from './HanzhongContext';
import { HanzhongSidePanel } from './HanzhongSidePanel';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { HANZHONG_DATA } from '../../data/hanzhong';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export const Hanzhong = () => {
  const [userData, setUserData] = useState<HanzhongUserDataType>({});

  const hanzhongContextData = useMemo(
    () => ({
      hanzhongData: HANZHONG_DATA,
      usersData: {
        DEFAULT: userData,
      },
    }),
    [userData]
  );

  const onChange = (key: string, newValue: number) => {
    setUserData({
      ...userData,
      [key]: newValue,
    });
  };

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3, md: 4 }}>
          <HanzhongSidePanel onChange={onChange} />
        </Grid>
        <Grid size={{ xs: 9, md: 8 }}>
          <HanzhongWarTiersTechs
            info={hanzhongContextData.hanzhongData.warTiers}
            currentSelections={userData}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

import { useEffect, useState, type SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { OccupiedTerritories } from './OccupiedTerritories';
import { ResourceIncomes } from './ResourceIncomes';
import { TacticalBonuses } from './TacticalBonuses';
import { initializeEarnings } from './utils/initialize-earnings';
import { HANZHONG_DATA } from '../data';
import type { HanzhongBonusType } from '../types';
import { SectionTabpanel } from '../../components/SectionTabpanel';
import { generateTabA11yProps } from '../../components/utils/generate-tab-a11y-props';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export const Hanzhong = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<HanzhongUserDataType>({});
  const [selectedTabName, setSelectedTabName] = useState<string>('techs');

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

  const changeTab = (e: SyntheticEvent, value: string): void => setSelectedTabName(value);

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={3}>
            <Box sx={{ width: '100%' }}>
              <Tabs value={selectedTabName} onChange={changeTab} orientation="vertical" sx={{ borderRight: 1 }}>
                {[
                  ['Techs', 'techs'],
                  ['Territories', 'territories'],
                  ['Siege Progress', 'cities'],
                  ['War Tiers', 'warTiers'],
                  ['Bandits', 'bandits'],
                ].map(([label, id]) => (
                  <Tab label={label} value={id} {...generateTabA11yProps('hanzhong', id)} sx={{ alignItems: 'end' }} />
                ))}
              </Tabs>
            </Box>

            <ResourceIncomes />
            <OccupiedTerritories />
            <TacticalBonuses />
          </Grid>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <Paper elevation={10} sx={{ p: 2 }}>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="techs">
              <HanzhongWarTiersTechs />
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="territories">
              TODO: Territories UI
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="cities">
              TODO: Cities UI
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="warTiers">
              TODO: War Tiers UI
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="bandits">
              TODO: Bandits UI
            </SectionTabpanel>
          </Paper>
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

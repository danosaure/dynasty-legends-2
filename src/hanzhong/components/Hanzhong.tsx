import { useEffect, useState, type SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { Cities } from './Cities';
import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { Progress } from './Progress';
import { ResourceIncomes } from './ResourceIncomes';
import { TacticalBonuses } from './TacticalBonuses';
import { Territories } from './Territories';
import { initializeEarnings } from './utils/initialize-earnings';
import { HANZHONG_DATA } from '../data';
import type { HanzhongBonusType } from '../types';
import { DEFAULT_HANZHONG_CONTEXT_DATA } from '../utils/default-hanzhong-context-data';
import { calculateSpecialTrainingsBonuses } from '../utils/calculate-special-trainings-bonuses';
import { SectionTabpanel } from '../../components/SectionTabpanel';
import { generateTabA11yProps } from '../../components/utils/generate-tab-a11y-props';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export const Hanzhong = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<HanzhongUserDataType>({});
  const [selectedTabName, setSelectedTabName] = useState<string>('techs');

  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>(DEFAULT_HANZHONG_CONTEXT_DATA);

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

    setLoading(false);
  }, [userData]);

  if (loading) {
    return null;
  }

  // @ts-expect-error
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
            <Progress />
            <TacticalBonuses />
          </Grid>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <Paper elevation={10} sx={{ p: 2 }}>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="techs">
              <HanzhongWarTiersTechs />
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="territories">
              <Territories />
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="cities">
              <Cities />
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

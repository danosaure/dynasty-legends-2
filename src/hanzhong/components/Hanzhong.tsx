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
import type { HanzhongBonusType, HanzhongUserDataType } from '../types';
import { DEFAULT_HANZHONG_CONTEXT_DATA } from '../utils/default-hanzhong-context-data';
import { calculateSpecialTrainingsBonuses } from '../utils/calculate-special-trainings-bonuses';
import { SectionTabpanel } from '../../components/SectionTabpanel';
import { generateTabA11yProps } from '../../components/utils/generate-tab-a11y-props';
import { Menu } from './Menu';
import { getHanzhongUserDataByUsername } from '../persistence';
import { saveHanzhongUserDataByUsername } from '../persistence/save-hanzhong-user-data-by-username';
import { WarTiers } from './WarTiers';
import { Bandits } from './Bandits';

export const Hanzhong = () => {
  const [username] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<HanzhongUserDataType>({});
  const [selectedTabName, setSelectedTabName] = useState<string>('techs');
  const [isUserDataModified, setIsUserDataModified] = useState<boolean>(false);

  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>(DEFAULT_HANZHONG_CONTEXT_DATA);

  useEffect(() => {
    console.log(`calling useEffect([username=${username}])`);
    (async () => {
      const userData = await getHanzhongUserDataByUsername(username);
      setUserData(userData);
    })();
  }, []);

  useEffect(() => {
    const onChange = (key: string, value: number) => {
      setUserData({
        ...userData,
        [key]: value,
      });
      setIsUserDataModified(true);
    };

    const bonuses: HanzhongBonusType = initializeEarnings(HANZHONG_DATA, userData);
    const {
      vanguardCamp: bonusesVanguardCamp,
      valiantCavalry: bonusesValiantCavalry,
      royalGuards: bonusesRoyalGuards,
    } = calculateSpecialTrainingsBonuses(HANZHONG_DATA, userData, bonuses);

    setHanzhongContextData({
      hanzhong: HANZHONG_DATA,
      user: userData,
      bonuses,
      bonusesVanguardCamp,
      bonusesValiantCavalry,
      bonusesRoyalGuards,
      onChange,
    });

    setIsLoading(false);
  }, [userData]);

  const onSave = async (): Promise<void> => {
    await saveHanzhongUserDataByUsername(username, userData);
    setIsUserDataModified(false);
  };

  if (isLoading) {
    return null;
  }

  // @ts-expect-error The e is not used, but required by signature.
  const changeTab = (e: SyntheticEvent, value: string): void => setSelectedTabName(value);

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={3}>
            <Menu isUserDataModified={isUserDataModified} onSave={onSave} />
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={selectedTabName}
                onChange={changeTab}
                orientation="vertical"
                sx={{ borderRight: 1 }}
                slotProps={{ indicator: { sx: { width: '10px' } } }}
              >
                {[
                  ['Techs', 'techs'],
                  ['Territories', 'territories'],
                  ['Siege Progress', 'cities'],
                  ['War Tiers', 'warTiers'],
                  ['Bandits', 'bandits'],
                ].map(([label, id]) => (
                  <Tab
                    key={`${label}--${label}`}
                    label={label}
                    value={id}
                    {...generateTabA11yProps('hanzhong', id)}
                    sx={{ alignItems: 'end' }}
                  />
                ))}
              </Tabs>
            </Box>

            <ResourceIncomes />
            <Progress />
            <TacticalBonuses />
          </Grid>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <Paper elevation={10}>
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
              <WarTiers />
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="bandits">
              <Bandits />
            </SectionTabpanel>
          </Paper>
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

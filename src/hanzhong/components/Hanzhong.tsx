import { useEffect, useState, type SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { PaperWrapper, SectionTabpanel } from '../../components';
import { generateTabA11yProps } from '../../components/utils';
import { HANZHONG_DATA } from '../data';
import { getHanzhongUserDataByUsername, saveHanzhongUserDataByUsername } from '../persistence';
import type { HanzhongBonusType, HanzhongUserDataType } from '../types';
import { calculateSpecialTrainingsBonuses, DEFAULT_HANZHONG_CONTEXT_DATA } from '../utils';

import { Bandits } from './Bandits';
import { Cities } from './Cities';
import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';
import { Menu } from './Menu';
import { Progress } from './Progress';
import { ResourceIncomes } from './ResourceIncomes';
import { TacticalBonuses } from './TacticalBonuses';
import { HanzhongTerritories } from './Territories';
import { WarTiers } from './WarTiers';
import { initializeEarnings } from './utils';
import { FONT_SIZES } from './constants';

export const Hanzhong = () => {
  const [username] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<HanzhongUserDataType>({});
  const [selectedTabName, setSelectedTabName] = useState<string>('techs');
  const [isUserDataModified, setIsUserDataModified] = useState<boolean>(false);

  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>(DEFAULT_HANZHONG_CONTEXT_DATA);

  useEffect(() => {
    (async () => {
      const userData = await getHanzhongUserDataByUsername(username);
      setUserData(userData);
    })();
  }, [username]);

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
        <Grid size={{ xs: 3 }} sx={{ maxWidth: '250px' }}>
          <Grid container spacing={1}>
            <Menu isUserDataModified={isUserDataModified} onSave={onSave} />
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={selectedTabName}
                onChange={changeTab}
                orientation="vertical"
                slotProps={{ indicator: { sx: { width: '10px' } } }}
              >
                {[
                  ['Techs', 'techs'],
                  ['Occupied Territories', 'territories'],
                  ['Siege Progress', 'cities'],
                  ['War Tiers', 'warTiers'],
                  ['Bandits', 'bandits'],
                ].map(([label, id]) => (
                  <Tab
                    key={`${label}--${label}`}
                    label={label}
                    value={id}
                    {...generateTabA11yProps('hanzhong', id)}
                    sx={{
                      alignItems: 'end',
                      textTransform: 'none',
                      pt: 0,
                      pb: 0,
                      fontSize: FONT_SIZES.SIDE_PANEL_TABS,
                      textAlign: 'right',
                    }}
                  />
                ))}
              </Tabs>
            </Box>

            <ResourceIncomes />
            <TacticalBonuses />
            <Progress />
          </Grid>
        </Grid>
        <Grid size={{ xs: 'grow' }}>
          <PaperWrapper>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="techs">
              <HanzhongWarTiersTechs />
            </SectionTabpanel>
            <SectionTabpanel selectedTabName={selectedTabName} tabsName="hanzhong" tabName="territories">
              <HanzhongTerritories />
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
          </PaperWrapper>
        </Grid>
      </Grid>
    </HanzhongContext.Provider>
  );
};

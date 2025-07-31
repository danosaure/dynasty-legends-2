import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../shared';

import { ActionsMenu } from './actions-menu';
import { DEFAULT_HANZHONG_CONTEXT, HanzhongContext } from './HanzhongContext';
import { getHanzhongUserDataByUsername, saveHanzhongUserDataByUsername } from './persistence';
import { Progress } from './Progress';
import { ResourceIncomes } from './ResourceIncomes';
import { HanzhongSidePanelTabs } from './side-panel-tabs';
import { TacticalBonuses } from './TacticalBonuses';
import type {
  HanzhongBonusType,
  HanzhongContextGetSection,
  HanzhongContextGetStringValue,
  HanzhongContextGetValue,
  HanzhongContextOnChange,
  HanzhongContextType,
  HanzhongUserDomainData,
  HanzhongUserSectionData,
} from './types';
import { initializeEarnings } from './utils';
import { sanitizeId } from '../../utils';
import type { HanzhongUserSectionName } from './types/user-section-name';

export const HanzhongLayout = () => {
  const [username] = useState<string>('');
  const [userData, setUserData] = useState<HanzhongUserDomainData>({});
  const [isUserDataModified, setIsUserDataModified] = useState<boolean>(false);
  const [hanzhongContextData, setHanzhongContextData] = useState<HanzhongContextType>(DEFAULT_HANZHONG_CONTEXT);

  useEffect(() => {
    (async () => {
      const userData = await getHanzhongUserDataByUsername(username);
      setUserData(userData);
    })();
  }, [username]);

  useEffect(() => {
    const onChange: HanzhongContextOnChange = (section: HanzhongUserSectionName, key: string, value: number | string) => {
      setUserData({
        ...userData,
        [section]: {
          ...userData[section],
          [key]: value,
        },
      } as const);
      setIsUserDataModified(true);
    };

    const getSection: HanzhongContextGetSection = (section: HanzhongUserSectionName): HanzhongUserSectionData => {
      return userData[section];
    };

    const getValue: HanzhongContextGetValue = (section: HanzhongUserSectionName, id: string): number => {
      try {
        const userSection = userData[section];
        if (userSection) {
          return (userSection[sanitizeId(id)] as number) ?? 0;
        }
        return 0;
      } catch {
        return 0;
      }
    };

    const getStringValue: HanzhongContextGetStringValue = (section: HanzhongUserSectionName, id: string): string => {
      try {
        const userSection = userData[section];
        if (userSection) {
          return (userSection[sanitizeId(id)] as string) ?? '';
        }

        return '';
      } catch {
        return '';
      }
    };

    const bonuses: HanzhongBonusType = initializeEarnings(getValue);

    setHanzhongContextData({
      getValue,
      getSection,
      getStringValue,
      bonuses,
      onChange,
    });
  }, [userData]);

  const onSave = async (): Promise<void> => {
    await saveHanzhongUserDataByUsername(username, userData);
    setIsUserDataModified(false);
  };

  return (
    <HanzhongContext.Provider value={hanzhongContextData}>
      <Grid container spacing={0} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Grid container spacing={2} size={{ xs: 3 }} sx={{ maxWidth: '225px', backgroundColor: 'rgba(195, 137, 0, 0.1)', p: 1 }}>
          <ActionsMenu isUserDataModified={isUserDataModified} onSave={onSave} />
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

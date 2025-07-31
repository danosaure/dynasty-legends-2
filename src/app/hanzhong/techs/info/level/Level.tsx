import Grid from '@mui/material/Grid';

import type { HanzhongTechsTechLevelDisplayType } from '../types';

import { HanzhongTechsTechInfoLevelResources } from './LevelResources';
import { HanzhongTechsTechInfoLevelBonuses } from './LevelBonuses';
import { useHanzhongContext } from '../../../HanzhongContext';
import { extractResourceDataFromUser } from '../../../resources/utils/extract-resource-data-from-user';
import { HanzhongTimerDisplay } from '../../../resources/TimerDisplay';
import { calculateTimeNeededForResources } from '../../../resources/utils/calculate-time-needed-for-resources';

export type HanzhongTechsTechInfoLevelProps = {
  info: HanzhongTechsTechLevelDisplayType;
  userLevel: number;
};

export const HanzhongTechsTechInfoLevel = ({ info, userLevel }: HanzhongTechsTechInfoLevelProps) => {
  const { bonuses, getValue } = useHanzhongContext();

  const resourceData = extractResourceDataFromUser(getValue, bonuses);

  const minutes = calculateTimeNeededForResources(resourceData, info.resources, {
    lumber: resourceData.woodRate,
    grains: resourceData.grainsRate,
    iron: resourceData.ironRate,
  });

  return (
    <Grid container size={12} sx={{ mb: '6px', border: `1px solid `, p: '3px' }} spacing={2}>
      <Grid size={2}>
        {userLevel} -&gt; {info.level}
        <HanzhongTimerDisplay minutes={minutes} />
      </Grid>
      <Grid container size={4} spacing={0}>
        <HanzhongTechsTechInfoLevelResources resources={info.resources} />
      </Grid>
      <Grid size={6}>
        <HanzhongTechsTechInfoLevelBonuses bonuses={info.bonuses} />{' '}
      </Grid>
    </Grid>
  );
};

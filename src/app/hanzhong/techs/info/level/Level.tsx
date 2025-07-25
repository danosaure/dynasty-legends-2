import Grid from '@mui/material/Grid';

import type { HanzhongTechsTechLevelDisplayType } from '../types';

import { HanzhongTechsTechInfoLevelResources } from './LevelResources';
import { HanzhongTechsTechInfoLevelBonuses } from './LevelBonuses';
import { useHanzhongContext } from '../../../HanzhongContext';
import { extractResourceDataFromUser } from '../../../resources-timers/utils/extract-resource-data-from-user';
import { calculateTimeNeededForResource } from '../../../resources-timers/utils/calculate-time-needed-for-resource';
import { TIME_KEYS } from '../../../resources-timers/utils';

export type HanzhongTechsTechInfoLevelProps = {
  info: HanzhongTechsTechLevelDisplayType;
  userLevel: number;
};

export const HanzhongTechsTechInfoLevel = ({ info, userLevel }: HanzhongTechsTechInfoLevelProps) => {
  const { bonuses, user } = useHanzhongContext();

  const resourceData = extractResourceDataFromUser(user, bonuses);

  const dataToProcess = [
    [info.resources.lumber, resourceData.lumber, resourceData.woodRate],
    [info.resources.grains, resourceData.grains, resourceData.grainsRate],
    [info.resources.iron, resourceData.iron, resourceData.ironRate],
  ];

  const [timeForLumber, timeForGrains, timeForIron] = dataToProcess.map(([quantityNeeded, currentInventory, productionRate]) =>
    calculateTimeNeededForResource(currentInventory, quantityNeeded, productionRate)
  );

  if (timeForLumber === null || timeForGrains === null || timeForIron === null) {
    return TIME_KEYS.DONT_KNOW;
  }

  return (
    <Grid container size={12} sx={{ mb: '6px', border: `1px solid `, p: '3px' }} spacing={2}>
      <Grid size={2}>
        {userLevel} -&gt; {info.level}
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

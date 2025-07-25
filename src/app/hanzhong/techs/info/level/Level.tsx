import Grid from '@mui/material/Grid';

import type { HanzhongTechsTechLevelDisplayType } from '../types';

import { HanzhongTechsTechInfoLevelResources } from './LevelResources';
import { HanzhongTechsTechInfoLevelBonuses } from './LevelBonuses';

export type HanzhongTechsTechInfoLevelProps = {
  info: HanzhongTechsTechLevelDisplayType;
  userLevel: number;
};

export const HanzhongTechsTechInfoLevel = ({ info, userLevel }: HanzhongTechsTechInfoLevelProps) => {
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

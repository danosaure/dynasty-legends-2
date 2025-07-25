import Grid from '@mui/material/Grid';

import type { HanzhongTerritoryLevelType } from '../types';

import { TerritoryLevelResource } from './TerritoryLevelResource';
import { TerritoryTacticalPointsTypography } from './TerritoryTacticalPointsTypography';

export type TerritoryLevelProps = {
  index: number;
  level: HanzhongTerritoryLevelType;
};

export const TerritoryLevel = ({ index, level }: TerritoryLevelProps) => {
  return (
    <Grid container direction={{ xs: 'row' }} spacing={1}>
      <Grid size={4}>
        <TerritoryLevelResource label="Woodland" level={index + 1} id={level.earnings[0].id} />
      </Grid>
      <Grid size={4}>
        <TerritoryLevelResource label="Farmland" level={index + 1} id={level.earnings[1].id} />
      </Grid>
      <Grid size={4}>
        <TerritoryLevelResource label="Iron Mine" level={index + 1} id={level.earnings[2].id} />
      </Grid>
      <Grid container size={12} direction={'row'} spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Grid size={3}>
          <TerritoryTacticalPointsTypography color="success">{level.team.green ?? '???'}]</TerritoryTacticalPointsTypography>
        </Grid>
        <Grid size={6}>
          <TerritoryTacticalPointsTypography color="warning">
            [{level.team.orange[0] ?? '???'}, {level.team.orange[1] ?? '???'}]
          </TerritoryTacticalPointsTypography>
        </Grid>

        <Grid size={3}>
          <TerritoryTacticalPointsTypography color="error">[{level.team.red ?? '???'}</TerritoryTacticalPointsTypography>
        </Grid>
      </Grid>
    </Grid>
  );
};

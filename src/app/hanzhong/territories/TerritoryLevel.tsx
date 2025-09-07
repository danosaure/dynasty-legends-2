import Grid from '@mui/material/Grid';

import { TerritoryLevelResource } from './TerritoryLevelResource';
import type { HanzhongTerritoryLevelType } from './TerritoryLevelType';

export type TerritoryLevelProps = {
  index: number;
  level: HanzhongTerritoryLevelType;
};

export const TerritoryLevel = ({ index, level }: TerritoryLevelProps) => {
  return (
    <Grid container direction={{ xs: 'row' }} spacing={1}>
      <Grid size={4}>
        <TerritoryLevelResource label="Woodland" level={index + 1} earning={level.earnings[0]} />
      </Grid>
      <Grid size={4}>
        <TerritoryLevelResource label="Farmland" level={index + 1} earning={level.earnings[1]} />
      </Grid>
      <Grid size={4}>
        <TerritoryLevelResource label="Iron Mine" level={index + 1} earning={level.earnings[2]} />
      </Grid>
    </Grid>
  );
};

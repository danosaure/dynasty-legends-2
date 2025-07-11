import Grid from '@mui/material/Grid';

import { TerritoryLevelResource } from './TerritoryLevelResource';
import type { HanzhongTerritoryLevelType } from '../types';

export type TerritoryLevelProps = {
  index: number;
  level: HanzhongTerritoryLevelType;
};

export const TerritoryLevel = ({ index, level }: TerritoryLevelProps) => {
  const lv = index + 1;

  return (
    <Grid container spacing={2} size={{ xs: 12 }} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
      <TerritoryLevelResource label={`Lv.${lv} Woodland`} id={level.earnings[0].id} />
      <TerritoryLevelResource label={`Lv.${lv} Farmland`} id={level.earnings[1].id} />
      <TerritoryLevelResource label={`Lv.${lv} Iron Mine`} id={level.earnings[2].id} />
    </Grid>
  );
};

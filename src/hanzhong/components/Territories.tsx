import Grid from '@mui/material/Grid';

import { useHanzhongContext } from './HanzhongContext';
import { TerritoryLevel } from './TerritoryLevel';
import type { HanzhongTerritoryLevelType } from '../types';

export const Territories = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <Grid container size={{ xs: 12 }} spacing={2} direction={'column'}>
      {hanzhong.territories.levels
        .map((level: HanzhongTerritoryLevelType, index: number) => <TerritoryLevel key={level.id} index={index} level={level} />)
        .reverse()}
    </Grid>
  );
};

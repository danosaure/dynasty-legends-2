import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { HanzhongTerritoryLevelType } from '../types';

import { useHanzhongContext } from './HanzhongContext';
import { TerritoryLevel } from './TerritoryLevel';

export const HanzhongTerritories = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <Grid container size={{ xs: 12 }}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Territory Occupied
      </Typography>
      <Grid container size={{ xs: 12 }} spacing={2} direction={'column'}>
        {hanzhong.territories.levels
          .map((level: HanzhongTerritoryLevelType, index: number) => <TerritoryLevel key={level.id} index={index} level={level} />)
          .reverse()}
      </Grid>
    </Grid>
  );
};

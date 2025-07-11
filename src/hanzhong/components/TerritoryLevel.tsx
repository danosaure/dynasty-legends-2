import Grid from '@mui/material/Grid';
import type { HanzhongTerritoryLevelType } from '../types';
import Typography from '@mui/material/Typography';
import { TerritoryLevelResource } from './TerritoryLevelResource';
import { TerritoryCell } from './TerritoryCell';

export type TerritoryLevelProps = {
  index: number;
  level: HanzhongTerritoryLevelType;
};

export const TerritoryLevel = ({ index, level }: TerritoryLevelProps) => {
  return (
    <Grid container spacing={2} size={{ xs: 12 }} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
      <TerritoryCell>
        <Typography sx={{ textAlign: 'center' }}>{`Lv.${index + 1}`}</Typography>
      </TerritoryCell>

      <TerritoryLevelResource id={level.earnings[0].id} />
      <TerritoryLevelResource id={level.earnings[1].id} />
      <TerritoryLevelResource id={level.earnings[2].id} />
    </Grid>
  );
};

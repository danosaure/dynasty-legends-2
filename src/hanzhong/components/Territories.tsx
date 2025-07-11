import Grid from '@mui/material/Grid';

import { useHanzhongContext } from './HanzhongContext';
import { TerritoryLevel } from './TerritoryLevel';
import type { HanzhongTerritoryLevelType } from '../types';
import Typography from '@mui/material/Typography';
import { TerritoryCell } from './TerritoryCell';

export const Territories = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <Grid container size={{ xs: 12 }} spacing={2} direction={'column'}>
      <Grid container size={{ xs: 12 }} sx={{ borderBottom: '1px' }} spacing={2}>
        <TerritoryCell>
          <Typography sx={{ fontWeight: 'bold' }}>Level</Typography>
        </TerritoryCell>
        <TerritoryCell>
          <Typography sx={{ fontWeight: 'bold' }}>Woodland</Typography>
        </TerritoryCell>
        <TerritoryCell>
          <Typography sx={{ fontWeight: 'bold' }}>Farmland</Typography>
        </TerritoryCell>
        <TerritoryCell>
          <Typography sx={{ fontWeight: 'bold' }}>Iron Mine</Typography>
        </TerritoryCell>
      </Grid>
      {hanzhong.territories.levels.map((level: HanzhongTerritoryLevelType, index: number) => (
        <TerritoryLevel key={level.id} index={index} level={level} />
      ))}
    </Grid>
  );
};

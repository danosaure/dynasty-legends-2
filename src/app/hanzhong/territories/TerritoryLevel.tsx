import Grid from '@mui/material/Grid';

import { TerritoryLevelResource } from './TerritoryLevelResource';
import type { HanzhongTerritoryLevelType } from './TerritoryLevelType';
import { useHanzhongContext } from '../HanzhongContext';

const THRESHOLD = 0.7;

export type TerritoryLevelProps = {
  index: number;
  level: HanzhongTerritoryLevelType;
};

export const TerritoryLevel = ({ index, level }: TerritoryLevelProps) => {
  const { cache } = useHanzhongContext();

  const minTacticalPoints = Math.min(...cache.tacticalPoints.map<number>((info) => info.value));
  let color: string = 'red';
  if (minTacticalPoints >= level.tacticalPoints) {
    color = 'darkgreen';
  } else if (minTacticalPoints / THRESHOLD >= level.tacticalPoints) {
    color = 'DarkOrange';
  }

  return (
    <Grid container direction={{ xs: 'row' }} spacing={1}>
      <Grid size={4}>
        <TerritoryLevelResource label="Woodland" level={index + 1} earning={level.earnings[0]} color={color} />
      </Grid>
      <Grid size={4}>
        <TerritoryLevelResource label="Farmland" level={index + 1} earning={level.earnings[1]} color={color} />
      </Grid>
      <Grid size={4}>
        <TerritoryLevelResource label="Iron Mine" level={index + 1} earning={level.earnings[2]} color={color} />
      </Grid>
    </Grid>
  );
};

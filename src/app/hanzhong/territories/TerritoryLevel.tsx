import Grid from '@mui/material/Grid';

import { TerritoryLevelResource } from './TerritoryLevelResource';
import type { HanzhongTerritoryLevelType } from './TerritoryLevelType';
import { useHanzhongContext } from '../HanzhongContext';
import { useMemo } from 'react';
import { getColorByTacticalPoints } from '../utils';

export type TerritoryLevelProps = {
  index: number;
  level: HanzhongTerritoryLevelType;
};

export const TerritoryLevel = ({ index, level }: TerritoryLevelProps) => {
  const { cache } = useHanzhongContext();

  const color = useMemo(
    () => getColorByTacticalPoints(cache.tacticalPoints, level.tacticalPoints),
    [cache.tacticalPoints, level.tacticalPoints]
  );

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

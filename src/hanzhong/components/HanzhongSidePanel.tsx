import Grid from '@mui/material/Grid';

import { ResourceIncomes } from './ResourceIncomes';
import { TacticalBonuses } from './TacticalBonuses';
import { OccupiedTerritories } from './OccupiedTerritories';
import { OccupiedCities } from './OccupiedCities';

export const HanzhongSidePanel = () => {
  return (
    <Grid container spacing={2}>
      <ResourceIncomes />
      <OccupiedTerritories />
      <OccupiedCities />
      <TacticalBonuses />
    </Grid>
  );
};

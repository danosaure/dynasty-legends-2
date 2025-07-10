import Grid from '@mui/material/Grid';

import { ResourceIncomes } from './ResourceIncomes';
import { TacticalBonuses } from './TacticalBonuses';

export const HanzhongSidePanel = () => {
  return (
    <Grid container spacing={2}>
      <ResourceIncomes />
      <TacticalBonuses />
    </Grid>
  );
};

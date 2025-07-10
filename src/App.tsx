import Grid from '@mui/material/Grid';

import { Hanzhong } from './hanzhong/components';

export const App = () => {
  return (
    <Grid container direction="row" spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <Hanzhong />
    </Grid>
  );
};

import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { AppHeader } from './header';

export const AppLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ maxWidth: '1000px !important', paddingLeft: '4px', paddingRight: '4px' }}>
      <Grid container size={{ xs: 12 }} direction={'column'}>
        <AppHeader />
        <Outlet />
      </Grid>
    </Container>
  );
};

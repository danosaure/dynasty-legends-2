import Grid from '@mui/material/Grid';
import { MainHeader } from './header';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <Grid container size={{ xs: 12 }} spacing={1} direction={'column'}>
      <MainHeader />
      <Outlet />
    </Grid>
  );
};

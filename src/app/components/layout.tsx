import Grid from '@mui/material/Grid';
import { MainHeader } from './header';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';

export const MainLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ maxWidth: '1000px !important', paddingLeft: '4px', paddingRight: '4px' }}>
      <Grid container size={{ xs: 12 }} direction={'column'}>
        <MainHeader />
        <Outlet />
      </Grid>
    </Container>
  );
};

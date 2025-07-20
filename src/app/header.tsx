import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router';

export const AppHeader = () => {
  return (
    <Grid container size={{ xs: 12 }} spacing={1} sx={{ mb: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Grid sx={{ height: { xs: 30, sm: 40 } }}>
        <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="[LOGO]" height={'100%'} />
      </Grid>
      <Typography sx={{ fontSize: { xs: 16 } }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Dynasty Legends 2
        </NavLink>
      </Typography>
    </Grid>
  );
};

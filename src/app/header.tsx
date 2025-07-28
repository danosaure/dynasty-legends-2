import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router';

export const AppHeader = () => {
  return (
    <Grid container size={{ xs: 12 }} spacing={1} sx={{ mb: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Grid size="auto" sx={{ height: { xs: 30, sm: 40 } }}>
        <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="[LOGO]" height={'100%'} />
      </Grid>
      <Grid size="auto">
        <Typography sx={{ fontSize: { xs: 16 } }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dynasty Legends 2
          </NavLink>
        </Typography>
      </Grid>
      <Grid size="grow" sx={{ textAlign: 'right' }}>
        <ButtonGroup>
          {[
            ['Officers', '/officers'],
            ['Hanzhong', '/hanzhong'],
          ].map((info) => {
            const [label, to] = info;
            return (
              <NavLink to={to} key={to}>
                {(isActive) => (
                  <Button variant={isActive ? 'contained' : 'outlined'} size="small" sx={{ textTransform: 'none' }}>
                    {label}
                  </Button>
                )}
              </NavLink>
            );
          })}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

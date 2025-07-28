import { NavLink, useLocation, useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const AppHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

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

            const isSection = location.pathname.startsWith(to);

            return (
              <Button
                key={to}
                variant="text"
                size="small"
                onClick={() => navigate(to)}
                sx={{
                  textTransform: 'none',
                  fontSize: { xs: '9px', md: '12px' },
                  borderRadius: 0,
                  color: isSection ? theme.palette.success.main : theme.palette.primary.main,
                  borderBottom: `3px solid ${isSection ? theme.palette.success.main : 'transparent'}`,
                }}
              >
                {label}
              </Button>
            );
          })}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

export const MainHeader = () => {
  return (
    <Grid container size={{ xs: 12 }} spacing={1}>
      <Typography sx={{ fontSize: { xs: 8 } }}>
        <Link to="/">Dynasty Legends 2</Link>
      </Typography>
    </Grid>
  );
};

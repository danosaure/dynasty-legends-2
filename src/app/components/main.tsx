import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

export const AppMain = () => {
  return (
    <Grid container size={{ xs: 12 }} direction={'column'}>
      <Typography sx={{ fontSize: { xs: 32 } }}>Dynasty Legends 2</Typography>
      <Typography sx={{ fontSize: { xs: 16 } }}>by @danosaure</Typography>

      <ul>
        <li>
          <Link to="/hanzhong">Hanzhong</Link>
        </li>
      </ul>
    </Grid>
  );
};

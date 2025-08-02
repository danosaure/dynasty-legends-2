import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';

export const App404 = () => {
  const location = useLocation();

  return (
    <Grid container direction={'column'} spacing={2}>
      <Typography variant="h2" color="error">
        App 404
      </Typography>
      <Typography variant="body2" color="info">
        The following path was not found:
      </Typography>
      <Typography variant="body1" color="warning">
        {location.pathname}
      </Typography>
    </Grid>
  );
};

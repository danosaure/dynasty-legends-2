import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export const App = () => {
  return (
    <Grid container direction="row" spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <Grid container>
        <Grid size={{ xs: 3 }}>LOGO</Grid>
        <Grid size={{ xs: 9 }}>TOP</Grid>
        <Grid size={{ xs: 3 }}>Left menu</Grid>
        <Grid size={{ xs: 9 }}>
          <Paper elevation={3}>Main content</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { HanzhongWarTiersTechs } from './components/hanzhong/HanzhongWarTiersTechs';
import { HANZHONG_DATA } from './data/hanzhong';

export const App = () => {
  const currentSelections: Record<string, number> = {};
  const onChange = () => {};

  return (
    <Grid container direction="row" spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h2">Hanzhong Clash Simulator</Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid size={{ xs: 3 }}>LOGO</Grid>
        <Grid size={{ xs: 9 }}>TOP</Grid>
        <Grid size={{ xs: 3 }}>Left menu</Grid>
        <Grid size={{ xs: 9 }}>
          <Paper elevation={3}>
            <HanzhongWarTiersTechs info={HANZHONG_DATA.warTiers} currentSelections={currentSelections} onChange={onChange} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

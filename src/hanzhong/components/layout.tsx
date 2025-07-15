import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router';
import { HanzhongSidePanelTabs } from './side-panel-tabs';
import { ResourceIncomes } from './ResourceIncomes';
import { TacticalBonuses } from './TacticalBonuses';
import { Progress } from './Progress';

export const HanzhongLayout = () => {
  const [username] = useState<string>('');

  useEffect(() => {
    console.log('useEffect([username])...');
  }, [username]);

  return (
    <Grid container spacing={0} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <Grid container spacing={2} size={{ xs: 3 }} sx={{ maxWidth: '250px', backgroundColor: 'rgba(195, 137, 0, 0.2)', p: 1 }}>
        <HanzhongSidePanelTabs />
        <ResourceIncomes />
        <TacticalBonuses />
        <Progress />
      </Grid>
      <Grid container size="grow" spacing={2} sx={{ p: 2, pt: 0 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

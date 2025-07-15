import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router';
import { HanzhongSidePanel } from './side-panel';

export const HanzhongLayout = () => {
  const [username] = useState<string>('');

  useEffect(() => {
    console.log('useEffect([username])...');
  }, [username]);

  return (
    <Grid container spacing={2}>
      <Grid sx={{ maxWidth: '250px' }}>
        <HanzhongSidePanel />
      </Grid>
      <Grid container size="grow">
        <Outlet />
      </Grid>
    </Grid>
  );
};

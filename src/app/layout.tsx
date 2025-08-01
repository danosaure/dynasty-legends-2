import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { AppHeader } from './header';
import { AppContext, type AppContextType, DEFAULT_APP_CONTEXT } from './Context';
import { type ReactNode, useMemo, useState } from 'react';

export const AppLayout = () => {
  const [menu, setMenu] = useState<ReactNode>(null);

  const appContextData: AppContextType = useMemo<AppContextType>(
    () => ({
      ...DEFAULT_APP_CONTEXT,
      setMenu,
    }),
    []
  );

  return (
    <AppContext.Provider value={appContextData}>
      <Container maxWidth="lg" sx={{ maxWidth: '1000px !important', paddingLeft: '4px', paddingRight: '4px' }}>
        <Grid container size={{ xs: 12 }} direction={'column'}>
          <AppHeader menu={menu} />
          <Outlet />
        </Grid>
      </Container>
    </AppContext.Provider>
  );
};

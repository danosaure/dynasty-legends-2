import { type ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { AppContext, DEFAULT_APP_CONTEXT, type AppContextType } from './Context';
import { AppHeader } from './header';
import { getUsers } from './persistence';

export const AppLayout = () => {
  const [menu, setMenu] = useState<ReactNode>(null);
  const [forceOpen, setForceOpen] = useState<boolean>(false);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  const [appContextData, setAppContextData] = useState<AppContextType>(DEFAULT_APP_CONTEXT);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    setDoneLoading(false);
    (async () => {
      const users = await getUsers();

      if (!users.length) {
        setForceOpen(true);
      } else {
        setAppContextData({
          setMenu,
          setUsername,
          usernames: users.map((user) => user.username),
          user: users.find((user) => user.username === username),
        });
      }

      setDoneLoading(true);
    })();
  }, [username]);

  if (!doneLoading) {
    return null;
  }

  return (
    <AppContext.Provider value={appContextData}>
      <Container maxWidth="lg" sx={{ maxWidth: '1000px !important', paddingLeft: '4px', paddingRight: '4px' }}>
        <Grid container size={{ xs: 12 }} direction={'column'}>
          <AppHeader menu={menu} forceMenuOpen={forceOpen} />
          <Outlet />
        </Grid>
      </Container>
    </AppContext.Provider>
  );
};

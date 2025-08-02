import { type ReactNode, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { AppContext, DEFAULT_APP_CONTEXT, type AppContextType } from './Context';
import { AppHeader } from './header';
import { getUsers } from './persistence';

export const AppLayout = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState<ReactNode>(null);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  const [appContextData, setAppContextData] = useState<AppContextType>(DEFAULT_APP_CONTEXT);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    (async () => {
      const users = await getUsers();

      if (!users.length) {
        if (!doneLoading) {
          navigate('/users');
        }
      } else {
        setAppContextData({
          setMenu,
          setUsername,
          refreshApp: () => setDoneLoading(false),
          users: users.map((user) => ({ id: user.id, username: user.username })),
          user: users.find((user) => user.username === username) ?? users[0],
        });
      }

      setDoneLoading(true);
    })();
  }, [username, navigate, doneLoading]);

  if (!doneLoading) {
    return null;
  }

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

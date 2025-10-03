import { type ReactNode, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { AppContext, DEFAULT_APP_CONTEXT, type AppContextType } from './Context';
import { AppHeader } from './header';
import { getUsers } from './persistence';
import type { ProfilesQueue } from './profiles/Queue';
import { ProfileModal } from './profiles';
import type { ItemTypeType } from './data';

export const AppLayout = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState<ReactNode>(null);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  const [appContextData, setAppContextData] = useState<AppContextType>(DEFAULT_APP_CONTEXT);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [profilesQueue, setProfilesQueue] = useState<ProfilesQueue>([]);

  useEffect(() => {
    (async () => {
      const users = await getUsers();

      if (!users.length) {
        if (!doneLoading) {
          navigate('/users');
        }
      } else {
        users.sort((a, b) => {
          if (a.username === b.username) {
            return a.id.localeCompare(b.id);
          } else if (a.username === '') {
            return 1;
          } else if (b.username === '') {
            return -1;
          } else {
            return a.username.localeCompare(b.username);
          }
        });

        setAppContextData({
          setMenu,
          setCurrentUserId,
          refreshApp: () => setDoneLoading(false),
          users: users.map((user) => ({ id: user.id, username: user.username })),
          user: users.find((user) => user.id === currentUserId) ?? users[0],
          showProfile: (profileType: ItemTypeType, profileId: string): void =>
            setProfilesQueue(profilesQueue.concat([{ profileType, profileId }])),
        });
      }

      setDoneLoading(true);
    })();
  }, [currentUserId, navigate, doneLoading, profilesQueue, setProfilesQueue]);

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
        <ProfileModal
          profilesQueue={profilesQueue}
          onClose={() => setProfilesQueue([])}
          showPrevious={() => setProfilesQueue(profilesQueue.slice(0, -1))}
        />
      </Container>
    </AppContext.Provider>
  );
};

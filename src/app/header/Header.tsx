import { useState, type ReactNode } from 'react';
import { NavLink } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { WrappedIconButton } from '../shared';
import { AppHeaderMenu } from './Menu';
import Drawer from '@mui/material/Drawer';

export type AppHeaderProps = {
  menu: ReactNode;
};

export const AppHeader = ({ menu }: AppHeaderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const hideMenu = () => setShowMenu(false);

  return (
    <Grid container size={{ xs: 12 }} spacing={1} sx={{ mb: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Grid size="auto" sx={{ height: { xs: 30, sm: 40 } }}>
        <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="[LOGO]" height={'100%'} />
      </Grid>
      <Grid size="auto">
        <Typography sx={{ fontSize: { xs: 16 } }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dynasty Legends 2
          </NavLink>
        </Typography>
      </Grid>
      <Grid size="grow" justifyContent={'flex-end'}>
        <Stack direction="row" spacing={0} justifyContent={'flex-end'}>
          {menu}

          <WrappedIconButton Icon={MenuIcon} label="Menu" onClick={() => setShowMenu(true)} />
        </Stack>
        <Drawer anchor="right" open={showMenu} onClose={hideMenu}>
          <AppHeaderMenu hideMenu={hideMenu} />
        </Drawer>
      </Grid>
    </Grid>
  );
};

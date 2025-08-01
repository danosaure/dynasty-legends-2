import { useState, type ReactNode } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import MapIcon from '@mui/icons-material/Map';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { WrappedIconButton } from './shared';
import type { MaterialUiIconType } from './types';

export type AppHeaderProps = {
  menu: ReactNode;
};

export const AppHeader = ({ menu }: AppHeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeAndNavigate = (to: string): void => {
    setShowMenu(false);
    navigate(to);
  };

  const NAVIGATION_MENU: [string, string, MaterialUiIconType][] = [
    ['/officers', 'Officers', PersonIcon],
    ['/hanzhong', 'Hanzhong', MapIcon],
  ];

  const navigationMenu = NAVIGATION_MENU.map((item: [string, string, MaterialUiIconType]): ReactNode => {
    const [to, label, Icon] = item;
    const isSection = location.pathname.startsWith(to);
    const color = isSection ? theme.palette.success.main : theme.palette.primary.main;
    const borderLeft = `3px solid ${isSection ? theme.palette.success.main : 'transparent'}`;

    return (
      <ListItemButton key={to} onClick={() => closeAndNavigate(to)} sx={{ color, borderLeft }}>
        <ListItemIcon>
          <Icon sx={{ color }} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    );
  });

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

          <WrappedIconButton Icon={MenuIcon} label="Menu" onClick={toggleMenu} />
        </Stack>

        <Drawer anchor="right" open={showMenu} onClose={toggleMenu}>
          <List>{navigationMenu}</List>
        </Drawer>
      </Grid>
    </Grid>
  );
};

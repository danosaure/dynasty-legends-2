import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, type SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { WrappedIconButton } from './shared';

export const AppHeader = () => {
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

  const getSx = (to: string): SxProps => {
    const isSection = location.pathname.startsWith(to);
    return {
      color: isSection ? theme.palette.success.main : theme.palette.primary.main,
      borderLeft: `3px solid ${isSection ? theme.palette.success.main : 'transparent'}`,
    };
  };

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
      <Grid size="grow" sx={{ textAlign: 'right' }}>
        <WrappedIconButton Icon={MenuIcon} label="Menu" onClick={toggleMenu} />
        <Drawer anchor="right" open={showMenu} onClose={toggleMenu}>
          <List>
            <ListItemButton onClick={() => closeAndNavigate('/officers')} sx={getSx('/officers')}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Officers" />
            </ListItemButton>

            <ListItemButton onClick={() => closeAndNavigate('/hanzhong')} sx={getSx('/hanzhong')}>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Hanzhong" />
            </ListItemButton>
          </List>
        </Drawer>
      </Grid>
    </Grid>
  );
};

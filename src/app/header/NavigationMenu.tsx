import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MapIcon from '@mui/icons-material/Map';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

import { useAppContext } from '../Context';
import type { MaterialUiIconType } from '../types';

export type AppHeaderNavigationMenuProps = {
  hideMenu: () => void;
};

export const AppHeaderNavigationMenu = ({ hideMenu }: AppHeaderNavigationMenuProps) => {
  const { user } = useAppContext();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const closeAndNavigate = (to: string): void => {
    hideMenu();
    navigate(to);
  };

  const NAVIGATION_MENU: [string, string, MaterialUiIconType, string | null][] = [
    ['/officers', 'Officers', MilitaryTechIcon, null],
    ['/hanzhong', 'Hanzhong', MapIcon, null],
    ['/users', user?.username || 'NO USERNAME', ManageAccountsIcon, 'Manage users'],
  ];

  const navigationMenu = NAVIGATION_MENU.map((item): ReactNode => {
    const [to, label, Icon, secondary] = item;
    const isSection = location.pathname.startsWith(to);
    const color = isSection ? theme.palette.success.main : theme.palette.primary.main;
    const borderLeft = `3px solid ${isSection ? theme.palette.success.main : 'transparent'}`;

    return (
      <ListItemButton key={to} onClick={() => closeAndNavigate(to)} sx={{ color, borderLeft }}>
        <ListItemIcon>
          <Icon sx={{ color }} />
        </ListItemIcon>
        <ListItemText primary={label} secondary={secondary} />
      </ListItemButton>
    );
  });

  return (
    <nav aria-label="Main navigation">
      <List>{navigationMenu}</List>
    </nav>
  );
};

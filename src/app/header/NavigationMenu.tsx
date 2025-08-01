import MapIcon from '@mui/icons-material/Map';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { MaterialUiIconType } from '../types';
import type { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router';

export type AppHeaderNavigationMenuProps = {
  hideMenu: () => void;
};

export const AppHeaderNavigationMenu = ({ hideMenu }: AppHeaderNavigationMenuProps) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const closeAndNavigate = (to: string): void => {
    hideMenu();
    navigate(to);
  };

  const NAVIGATION_MENU: [string, string, MaterialUiIconType][] = [
    ['/officers', 'Officers', MilitaryTechIcon],
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
    <nav aria-label="Main navigation">
      <List>{navigationMenu}</List>
    </nav>
  );
};

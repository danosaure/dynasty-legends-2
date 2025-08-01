import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';

import { useAppContext } from '../Context';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

export type AppHeaderUsersMenuProps = {
  hideMenu: () => void;
};

export const AppHeaderUsersMenu = ({ hideMenu }: AppHeaderUsersMenuProps) => {
  const { usernames, user, setUsername } = useAppContext();
  const [expandUsers, setExpandUsers] = useState<boolean>(false);

  const hideAndChangeUser = (username: string): void => {
    hideMenu();
    setUsername(username);
  };

  const otherUsers = usernames
    .filter((username) => username !== user?.username)
    .map((username) => (
      <ListItemButton key={username} onClick={() => hideAndChangeUser(username)}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={username} secondary="Switch" />
      </ListItemButton>
    ));

  return (
    <nav aria-label="User navigation menu">
      <List>
        <ListItemButton onClick={() => setExpandUsers(!expandUsers)}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {expandUsers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={expandUsers} unmountOnExit sx={{ backgroundColor: 'rgba(195, 137, 0, 0.1)' }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="HELLO" secondary="Current user" />
            </ListItem>
            <Divider />
            {otherUsers}
            {otherUsers.length ? <Divider /> : null}
            <ListItemButton>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="New user" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </nav>
  );
};

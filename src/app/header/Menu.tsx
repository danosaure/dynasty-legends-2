import Divider from '@mui/material/Divider';
import { AppHeaderNavigationMenu } from './NavigationMenu';
import { AppHeaderUsersMenu } from './UsersMenu';
import Grid from '@mui/material/Grid';

export type AppHeaderMenuProps = {
  hideMenu: () => void;
};

export const AppHeaderMenu = ({ hideMenu }: AppHeaderMenuProps) => {
  return (
    <Grid container direction="column">
      <Grid size="auto">
        <AppHeaderNavigationMenu hideMenu={hideMenu} />
        <Divider />
      </Grid>

      <Grid size="grow">
        <AppHeaderUsersMenu hideMenu={hideMenu} />
      </Grid>
    </Grid>
  );
};

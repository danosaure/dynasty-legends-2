import { AppHeaderNavigationMenu } from './NavigationMenu';
import Grid from '@mui/material/Grid';

export type AppHeaderMenuProps = {
  hideMenu: () => void;
};

export const AppHeaderMenu = ({ hideMenu }: AppHeaderMenuProps) => {
  return (
    <Grid container direction="column">
      <AppHeaderNavigationMenu hideMenu={hideMenu} />
    </Grid>
  );
};

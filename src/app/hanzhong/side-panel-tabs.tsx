import Grid from '@mui/material/Grid';

import { HANZHONG_ROUTES } from './constants';
import { HanzhongSidePanelTabsItem } from './side-panel-tabs-item';

export const HanzhongSidePanelTabs = () => {
  return (
    <Grid
      container
      size={{ xs: 12 }}
      direction={'column'}
      sx={{ justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'right' }}
    >
      {[
        [HANZHONG_ROUTES.TECHS, 'Techs'],
        [HANZHONG_ROUTES.TERRITORIES, 'Territories'],
        [HANZHONG_ROUTES.CITIES, 'Cities'],
        [HANZHONG_ROUTES.WAR_TIERS, 'War Tiers'],
        [HANZHONG_ROUTES.BANDITS, 'Bandits'],
      ].map(([to, label]) => (
        <HanzhongSidePanelTabsItem key={to} to={to} label={label} />
      ))}
    </Grid>
  );
};

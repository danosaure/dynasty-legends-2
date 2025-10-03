import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { getItem } from '../data';
import type { Profile } from './Profile';
import { ItemAvatar } from '../shared';
import Typography from '@mui/material/Typography';
import type { BaseItemType } from '../types';

export type GenericProfileProps = {
  profile: Profile;
};

export const GenericProfile = ({ profile }: GenericProfileProps) => {
  try {
    const item: BaseItemType = getItem(profile.profileType, profile.profileId);

    return (
      <Grid container direction="row" spacing={2}>
        <Grid size="auto">
          <ItemAvatar item={item} disabledClick />
        </Grid>
        <Grid size="grow">
          <Typography variant="body1" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography variant="body2">{item.type}</Typography>
        </Grid>
      </Grid>
    );
  } catch {
    return (
      <Alert severity="error">
        Unable to find item type="{profile.profileType}" with id or name="{profile.profileId}".
      </Alert>
    );
  }
};

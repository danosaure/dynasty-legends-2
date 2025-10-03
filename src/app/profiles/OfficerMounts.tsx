import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getMountsByOfficerId } from '../data';
import type { MountsRosterData } from './MountsRosterData';
import { ItemAvatar } from '../shared';

export type OfficerMountsProps = {
  id: string;
  roster: MountsRosterData;
};

export const OfficerMounts = ({ id, roster }: OfficerMountsProps) => {
  const mounts = getMountsByOfficerId(id);

  if (!mounts.length) {
    return null;
  }

  return (
    <Grid container size={12} direction="column">
      <Typography>Mounts</Typography>
      <Grid container direction="row" spacing={1}>
        {mounts.map((mount) => (
          <ItemAvatar key={mount.id} item={mount} roster={roster} small />
        ))}
      </Grid>
    </Grid>
  );
};

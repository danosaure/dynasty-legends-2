import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getMountsByOfficerId } from '../data';
import { MountAvatar } from './MountAvatar';
import type { MountsRosterData } from './MountsRosterData';

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
          <MountAvatar key={mount.id} id={mount.id} roster={roster} small />
        ))}
      </Grid>
    </Grid>
  );
};

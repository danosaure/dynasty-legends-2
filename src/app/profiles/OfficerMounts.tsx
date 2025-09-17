import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getMountsByOfficerId } from '../data';
import { MountAvatar } from './MountAvatar';

export type OfficerMountsProps = {
  id: string;
};

export const OfficerMounts = ({ id }: OfficerMountsProps) => {
  const mounts = getMountsByOfficerId(id);

  if (!mounts.length) {
    return null;
  }

  return (
    <Grid container size={12} direction="column">
      <Typography>Mounts</Typography>
      <Grid container direction="row" spacing={1}>
        {mounts.map((mount) => (
          <MountAvatar key={mount.id} id={mount.id} small />
        ))}
      </Grid>
    </Grid>
  );
};

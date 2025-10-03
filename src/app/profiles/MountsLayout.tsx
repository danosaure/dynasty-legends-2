import Grid from '@mui/material/Grid';
import { MOUNTS } from '../data';
import { MountCard } from './MountCard';

export const MountsLayout = () => {
  const mounts = [...MOUNTS].sort((a, b) => {
    if (!a.aptitude || !b.aptitude) {
      return 0;
    }

    if (a.aptitude == b.aptitude) {
      return a.name.localeCompare(b.name);
    }
    return b.aptitude - a.aptitude;
  });

  return (
    <Grid container direction="row" spacing={1}>
      {mounts.map((mount) => {
        return (
          <Grid key={mount.id} size={{ xs: 6, md: 4 }}>
            <MountCard mount={mount} />
          </Grid>
        );
      })}
    </Grid>
  );
};

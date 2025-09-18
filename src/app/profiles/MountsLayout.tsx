import Grid from '@mui/material/Grid';
import { getAptitudeById, MOUNTS } from '../data';
import { MountCard } from './MountCard';

export const MountsLayout = () => {
  const mounts = [...MOUNTS].sort((a, b) => {
    if (a.aptitudeId == b.aptitudeId) {
      return a.name.localeCompare(b.name);
    }

    const aptitudeA = getAptitudeById(a.aptitudeId);
    const aptitudeB = getAptitudeById(b.aptitudeId);

    return aptitudeB.aptitude - aptitudeA.aptitude;
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

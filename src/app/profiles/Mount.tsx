import Grid from '@mui/material/Grid';
import { getAptitudeById, getMountById } from '../data';
import { MountAvatar } from './MountAvatar';
import Typography from '@mui/material/Typography';
import { Aptitude } from './Aptitude';
import { MountBonds } from './MountBonds';

export type MountProps = {
  id: string;
};

export const Mount = ({ id }: MountProps) => {
  const mount = getMountById(id);
  const aptitude = getAptitudeById(mount.aptitudeId);

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
      <Grid container>
        <Grid>
          <MountAvatar id={id} />
        </Grid>
        <Grid>
          <Typography>{mount.name}</Typography>
          <Aptitude aptitude={aptitude} />
        </Grid>
      </Grid>
      <MountBonds mount={mount} />
    </Grid>
  );
};

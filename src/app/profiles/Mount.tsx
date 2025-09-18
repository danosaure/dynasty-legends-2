import Grid from '@mui/material/Grid';
import { getAptitudeById, getMountById } from '../data';
import { MountAvatar } from './MountAvatar';
import Typography from '@mui/material/Typography';
import { Aptitude } from './Aptitude';
import { MountBonds } from './MountBonds';
import { useAppContext } from '../Context';
import { useEffect, useState } from 'react';
import type { MountsRosterData } from './MountsRosterData';
import { InRoster } from './InRoster';
import { updateMountUserData } from './persistence';

export type MountProps = {
  id: string;
};

export const Mount = ({ id }: MountProps) => {
  const { user } = useAppContext();
  const [roster, setRoster] = useState<MountsRosterData>(user.mounts ?? {});

  useEffect(() => setRoster(user.mounts ?? {}), [user]);

  const mount = getMountById(id);
  const aptitude = getAptitudeById(mount.aptitudeId);

  const toggleMount = () => {
    updateMountUserData(user.id, id);
    setRoster({
      ...roster,
      [id]: !roster[id],
    });
  };

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
      <Grid size="auto">
        <MountAvatar id={id} roster={roster} />
      </Grid>
      <Grid size="grow">
        <Grid container>
          <Grid size="grow">
            <Typography>{mount.name}</Typography>
          </Grid>
          <Grid size="auto">
            <InRoster inRoster={roster[id]} toggle={toggleMount} />
          </Grid>
        </Grid>
        <Aptitude aptitude={aptitude} />
      </Grid>
      <Grid container>
        <MountBonds mount={mount} />
      </Grid>
    </Grid>
  );
};

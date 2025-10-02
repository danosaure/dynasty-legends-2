import Grid from '@mui/material/Grid';
import { getAptitudeByAptitude, getMountById } from '../data';
import Typography from '@mui/material/Typography';
import { Aptitude } from './Aptitude';
import { MountBonds } from './MountBonds';
import { useAppContext } from '../Context';
import { useEffect, useState } from 'react';
import type { MountsRosterData } from './MountsRosterData';
import { InRoster } from './InRoster';
import { updateMountUserData } from './persistence';
import type { AptitudeValueType } from '../types';
import { ItemAvatar } from '../shared';

export type MountProps = {
  id: string;
  inCard?: boolean;
  opacity?: number;
};

export const Mount = ({ id, inCard, opacity }: MountProps) => {
  const { user } = useAppContext();
  const [roster, setRoster] = useState<MountsRosterData>(user.mounts ?? {});

  useEffect(() => setRoster(user.mounts ?? {}), [user]);

  const mount = getMountById(id);

  const toggleMount = () => {
    updateMountUserData(user.id, id);
    setRoster({
      ...roster,
      [id]: !roster[id],
    });
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid container spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <Grid size="auto">
          <ItemAvatar item={mount} roster={roster} />
        </Grid>
        <Grid size="grow">
          <Grid container>
            <Grid size="grow">
              <Typography sx={{ opacity: opacity ?? 1 }}>{mount.name}</Typography>
            </Grid>
            <Grid size="auto">
              <InRoster inRoster={roster[id]} toggle={toggleMount} />
            </Grid>
          </Grid>
          <Aptitude aptitude={getAptitudeByAptitude(mount.aptitude as AptitudeValueType)} opacity={opacity} />
        </Grid>
      </Grid>
      <Grid container>
        {inCard ? null : (
          <Grid container>
            <MountBonds mount={mount} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

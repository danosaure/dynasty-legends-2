import Typography from '@mui/material/Typography';
import type { MountType } from '../data';
import Grid from '@mui/material/Grid';
import { OfficerAvatar } from '../shared';
import { useAppContext } from '../Context';
import { useMemo } from 'react';

export type MountBondsProps = {
  mount: MountType;
};

export const MountBonds = ({ mount }: MountBondsProps) => {
  const { user } = useAppContext();

  const roster = useMemo(() => user.officers ?? {}, [user.officers]);

  return (
    <Grid container direction="column">
      <Typography>Officer Bonds</Typography>
      <Grid container direction="row" spacing={1}>
        {mount.officerIds.map((officerId) => (
          <OfficerAvatar key={officerId} officerId={officerId} roster={roster} />
        ))}
      </Grid>
    </Grid>
  );
};

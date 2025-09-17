import Grid from '@mui/material/Grid';
import { OfficerAvatar } from '../shared';
import Typography from '@mui/material/Typography';
import type { OfficersRosterData } from '../officers/types';

export type OfficerBondProps = {
  officerId: string;
  bondOfficerId: string;
  name: string;
  roster: OfficersRosterData;
};

export const OfficerBond = ({ officerId, bondOfficerId, name, roster }: OfficerBondProps) => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid size="auto">
        <OfficerAvatar officerId={officerId} roster={roster} small />
      </Grid>
      <Grid size="auto">
        <OfficerAvatar officerId={bondOfficerId} roster={roster} small />
      </Grid>
      <Grid size="grow">
        <Typography variant="body2">{name}</Typography>
      </Grid>
    </Grid>
  );
};

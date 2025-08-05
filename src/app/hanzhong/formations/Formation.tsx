import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../shared';
import { HanzhongFormationsTeam } from './Team';
import type { StructuredFormationsFormation } from './structured-formations';
import Grid from '@mui/material/Grid';

export type HanzhongFormationsFormationProps = {
  formation: StructuredFormationsFormation;
};
export const HanzhongFormationsFormation = ({ formation }: HanzhongFormationsFormationProps) => {
  return (
    <PaperWrapper sx={{ p: '5px' }}>
      <Typography sx={{ pb: 1 }}>{formation.name}</Typography>
      <Grid container spacing={1} direction={{ xs: 'column', md: 'row' }}>
        <HanzhongFormationsTeam team={formation.team1} />
        <HanzhongFormationsTeam team={formation.team2} />
        <HanzhongFormationsTeam team={formation.team3} />
      </Grid>
    </PaperWrapper>
  );
};

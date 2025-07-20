import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../shared';

import { HanzhongFormationsTeam } from './formations-team';
import type { HanzhongFormationsFormationType } from './types';

export type HanzhongFormationsFormationProps = {
  formation: HanzhongFormationsFormationType;
};
export const HanzhongFormationsFormation = ({ formation }: HanzhongFormationsFormationProps) => {
  return (
    <PaperWrapper sx={{ p: '10px' }}>
      <Typography sx={{ pb: 1 }}>{formation.name}</Typography>
      <Grid container spacing={{ xs: 1, sm: 3 }} direction={'row'}>
        {formation.teams.map((team, idx) => (
          <Grid key={`formations--${formation.name}--${idx}`} size={{ xs: 12, sm: 4 }}>
            <HanzhongFormationsTeam team={team} />
          </Grid>
        ))}
      </Grid>
    </PaperWrapper>
  );
};

import Grid from '@mui/material/Grid';
import { PaperWrapper } from '../../components';
import type { HanzhongFormationsFormationType } from './types';
import Typography from '@mui/material/Typography';
import { HanzhongFormationsTeam } from './formations-team';

export type HanzhongFormationsFormationProps = {
  formation: HanzhongFormationsFormationType;
};
export const HanzhongFormationsFormation = ({ formation }: HanzhongFormationsFormationProps) => {
  return (
    <PaperWrapper sx={{ p: '10px' }}>
      <Typography sx={{ pb: 1 }}>{formation.name}</Typography>
      <Grid container spacing={1} direction={'row'}>
        {formation.teams.map((team, idx) => (
          <Grid key={`formations--${formation.name}--${idx}`} size={{ xs: 4 }}>
            <HanzhongFormationsTeam team={team} />
          </Grid>
        ))}
      </Grid>
    </PaperWrapper>
  );
};

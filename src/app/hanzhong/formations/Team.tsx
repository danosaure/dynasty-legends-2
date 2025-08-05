import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';

import { HanzhongFormationsCharacter } from './Character';
import type { StructuredFormationsTeam } from './structured-formations';

export type HanzhongFormationsTeamProps = {
  team: StructuredFormationsTeam;
};

export const HanzhongFormationsTeam = ({ team }: HanzhongFormationsTeamProps) => {
  return (
    <PaperWrapper sx={{ p: '5px' }}>
      <Grid container spacing={0.5} sx={{ p: 1 }} direction={{ xs: 'row', md: 'column' }}>
        <Grid size={6}>
          <HanzhongFormationsCharacter label="Chief" info={team.chief} />
        </Grid>
        <Grid size={6}>
          <HanzhongFormationsCharacter label="Lieutenant" info={team.lieutenant} />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

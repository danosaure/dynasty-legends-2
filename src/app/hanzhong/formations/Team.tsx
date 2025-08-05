import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';

import { HanzhongFormationsCharacter } from './Character';
import type { StructuredFormationsTeam } from './structured-formations';

export type HanzhongFormationsTeamProps = {
  team: StructuredFormationsTeam;
};

export const HanzhongFormationsTeam = ({ team }: HanzhongFormationsTeamProps) => {
  return (
    <PaperWrapper>
      <Grid size="auto" container spacing={1} sx={{ p: 1 }} direction={{ xs: 'row', sm: 'column' }}>
        <HanzhongFormationsCharacter label="Chief" info={team.chief} />
        <HanzhongFormationsCharacter label="Lieutenant" info={team.lieutenant} />
      </Grid>
    </PaperWrapper>
  );
};

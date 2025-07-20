import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';

import { HanzhongFormationsCharacter } from './formations-character';
import type { HanzhongFormationsCharacterType, HanzhongFormationsTeamType } from './types';

export type HanzhongFormationsTeamProps = {
  team: HanzhongFormationsTeamType;
};

export const HanzhongFormationsTeam = ({ team }: HanzhongFormationsTeamProps) => {
  const [general, lieutenant] = team;
  const infos: [string, HanzhongFormationsCharacterType][] = [
    ['General', general],
    ['Lieutenant', lieutenant],
  ];

  return (
    <PaperWrapper>
      <Grid container spacing={1} sx={{ p: 1 }} direction={{ xs: 'row', sm: 'column' }}>
        {infos.map((data) => (
          <Grid key={`formations--team--rank-${data[0]}`} size={{ xs: 6 }} sx={{ maxWidth: '120px' }}>
            <HanzhongFormationsCharacter info={data[1]} rank={data[0]} />
          </Grid>
        ))}
      </Grid>
    </PaperWrapper>
  );
};

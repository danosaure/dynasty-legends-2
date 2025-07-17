import Grid from '@mui/material/Grid';
import { HanzhongFormationsCharacter } from './formations-character';
import type { HanzhongFormationsCharacterType, HanzhongFormationsTeamType } from './types';
import { PaperWrapper } from '../../components';

export type HanzhongFormationsTeamProps = {
  team: HanzhongFormationsTeamType;
};

export const HanzhongFormationsTeam = ({ team }: HanzhongFormationsTeamProps) => {
  const [general, lieutenant] = team;
  const infos: [string, HanzhongFormationsCharacterType][] = [
    ['general', general],
    ['lieutenant', lieutenant],
  ];

  return (
    <PaperWrapper>
      <Grid container size={{ xs: 12 }} spacing={1} sx={{ p: 0.5, justifyContent: 'flex-end' }}>
        {infos.map((data) => (
          <Grid key={`formations--team--rank-${data[0]}`}>
            <HanzhongFormationsCharacter info={data[1]} rank={data[0]} />
          </Grid>
        ))}
      </Grid>
    </PaperWrapper>
  );
};

import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';

import { HanzhongFormationsCharacter } from './Character';
import type { StructuredFormationsTeam } from './structured-formations';
import { useHanzhongContext } from '../HanzhongContext';
import { getCommonFactionId } from '../../utils';
import { getFactionById } from '../../data';

export type HanzhongFormationsTeamProps = {
  team: StructuredFormationsTeam;
  onClick: (id: string) => void;
};

export const HanzhongFormationsTeam = ({ team, onClick }: HanzhongFormationsTeamProps) => {
  const { formationsUserData } = useHanzhongContext();

  let backgroundColor = 'transparent';
  const factionId = getCommonFactionId(formationsUserData, [team.chief.officer, team.lieutenant.officer]);
  if (factionId) {
    backgroundColor = getFactionById(factionId).color;
  }

  return (
    <PaperWrapper sx={{ p: 0, backgroundColor }}>
      <Grid container spacing={3} sx={{ p: '5px' }} direction="row">
        <Grid size={6}>
          <HanzhongFormationsCharacter label="Chief" info={team.chief} onClick={onClick} />
        </Grid>
        <Grid size={6}>
          <HanzhongFormationsCharacter label="Lieutenant" info={team.lieutenant} onClick={onClick} />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

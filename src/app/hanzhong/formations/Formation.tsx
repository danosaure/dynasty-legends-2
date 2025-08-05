import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../shared';
import { HanzhongFormationsTeam } from './Team';
import type { StructuredFormationsFormation } from './structured-formations';
import Grid from '@mui/material/Grid';
import { getCommonFactionId } from '../../utils';
import { getFactionById } from '../../data';
import { useHanzhongContext } from '../HanzhongContext';

export type HanzhongFormationsFormationProps = {
  formation: StructuredFormationsFormation;
  onClick: (id: string) => void;
};
export const HanzhongFormationsFormation = ({ formation, onClick }: HanzhongFormationsFormationProps) => {
  const { formationsUserData } = useHanzhongContext();

  let backgroundColor = 'transparent';
  const factionId = getCommonFactionId(formationsUserData, [
    formation.team1.chief.officer,
    formation.team1.lieutenant.officer,
    formation.team2.chief.officer,
    formation.team2.lieutenant.officer,
    formation.team3.chief.officer,
    formation.team3.lieutenant.officer,
  ]);
  if (factionId) {
    backgroundColor = getFactionById(factionId).color;
  }

  return (
    <PaperWrapper sx={{ p: '5px', backgroundColor }}>
      <Typography sx={{ pb: 1 }}>{formation.name}</Typography>
      <Grid container spacing={2} direction="column">
        <HanzhongFormationsTeam team={formation.team1} onClick={onClick} />
        <HanzhongFormationsTeam team={formation.team2} onClick={onClick} />
        <HanzhongFormationsTeam team={formation.team3} onClick={onClick} />
      </Grid>
    </PaperWrapper>
  );
};

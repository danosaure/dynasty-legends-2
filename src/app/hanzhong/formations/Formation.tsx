import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../shared';
import { HanzhongFormationsTeam } from './Team';
import type { StructuredFormationsFormation } from './structured-formations';

export type HanzhongFormationsFormationProps = {
  formation: StructuredFormationsFormation;
};
export const HanzhongFormationsFormation = ({ formation }: HanzhongFormationsFormationProps) => {
  return (
    <PaperWrapper sx={{ p: '10px' }}>
      <Typography sx={{ pb: 1 }}>{formation.name}</Typography>
      <HanzhongFormationsTeam team={formation.team1} />
      <HanzhongFormationsTeam team={formation.team2} />
      <HanzhongFormationsTeam team={formation.team3} />
    </PaperWrapper>
  );
};

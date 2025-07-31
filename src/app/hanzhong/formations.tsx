import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../shared';

import { HanzhongFormationsFormation } from './formations-formation';
import type {
  HanzhongFormationsType,
  HanzhongFormationsFormationType,
  HanzhongFormationsTeamType,
  HanzhongFormationsTeamsType,
} from './types';
import { STRUCTURED_HANZHONG_FORMATIONS } from './data';

export const HanzhongFormations = () => {
  const [formations, setFormations] = useState<HanzhongFormationsType | null>(null);

  useEffect(() => {
    setFormations(
      STRUCTURED_HANZHONG_FORMATIONS.map<HanzhongFormationsFormationType>(({ name, teams }) => ({
        name,
        teams: teams.map<HanzhongFormationsTeamType>(([general, lieutenant]) => [
          { id: general, tacticalPoints: user[general] ?? 0 },
          { id: lieutenant, tacticalPoints: user[lieutenant] ?? 0 },
        ]) as HanzhongFormationsTeamsType,
      })) as HanzhongFormationsType
    );
  }, [user]);

  if (formations === null) {
    return null;
  }

  return (
    <>
      <Grid size={12}>
        <TitleTypographyWrapper variant="TITLE">Formations</TitleTypographyWrapper>
      </Grid>
      <Grid container size={{ xs: 12, sm: 'auto' }} spacing={2} direction={'column'}>
        {formations.map((formation) => (
          <Grid key={formation.name}>
            <HanzhongFormationsFormation formation={formation} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

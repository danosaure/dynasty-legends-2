import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../components';
import { STRUCTURED_HANZHONG_FORMATIONS } from '../constants';
import { HanzhongFormationsFormation } from './formations-formation';
import type {
  HanzhongFormationsType,
  HanzhongFormationsFormationType,
  HanzhongFormationsTeamType,
  HanzhongFormationsTeamsType,
} from './types';
import { useHanzhongContext } from './HanzhongContext';
import { useEffect, useState } from 'react';

export const HanzhongFormations = () => {
  const { user } = useHanzhongContext();
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
      <TitleTypographyWrapper variant="TITLE">Formations</TitleTypographyWrapper>
      <Grid container size={{ xs: 12 }} spacing={2} direction={'column'}>
        {formations.map((formation) => (
          <Grid key={formation.name}>
            <HanzhongFormationsFormation formation={formation} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

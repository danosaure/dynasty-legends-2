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

export const HanzhongFormations = () => {
  const formations: HanzhongFormationsType = STRUCTURED_HANZHONG_FORMATIONS.map<HanzhongFormationsFormationType>(
    ({ name, teams }) => ({
      name,
      teams: teams.map<HanzhongFormationsTeamType>(([general, lieutenant]) => [
        { id: general },
        { id: lieutenant },
      ]) as HanzhongFormationsTeamsType,
    })
  ) as HanzhongFormationsType;

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

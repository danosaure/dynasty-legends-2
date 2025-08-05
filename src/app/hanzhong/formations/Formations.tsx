import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../shared';

import { HanzhongFormationsFormation } from './Formation';
import { STRUCTURED_FORMATIONS } from './structured-formations';

export const HanzhongFormations = () => {
  return (
    <Grid container direction={'column'}>
      <TitleTypographyWrapper variant="TITLE">Formations</TitleTypographyWrapper>
      <Grid container spacing={2} direction={'column'}>
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.vanguardCamp} />
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.valiantCavalry} />
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.royalGuards} />
      </Grid>
    </Grid>
  );
};

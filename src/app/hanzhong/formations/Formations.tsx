import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../shared';

import { HanzhongFormationsFormation } from './Formation';
import { STRUCTURED_FORMATIONS } from './structured-formations';

export const HanzhongFormations = () => {
  return (
    <>
      <Grid size={12}>
        <TitleTypographyWrapper variant="TITLE">Formations</TitleTypographyWrapper>
      </Grid>
      <Grid container size={{ xs: 12, sm: 'auto' }} spacing={2} direction={'column'}>
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.vanguardCamp} />
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.valiantCavalry} />
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.royalGuards} />
      </Grid>
    </>
  );
};

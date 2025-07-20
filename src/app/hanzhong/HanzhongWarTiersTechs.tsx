import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../shared';

import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';
import { useHanzhongContext } from './HanzhongContext';
import { HanzhongResourcesBar } from './resources-timers';

export const HanzhongWarTiersTechs = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <>
      <Grid container size={12}>
        <TitleTypographyWrapper variant="TITLE">Techs</TitleTypographyWrapper>
      </Grid>
      <Grid size={12}>
        <HanzhongResourcesBar />
      </Grid>
      {hanzhong.warTiers.map((hanzhongWarTier) => (
        <HanzhongWarTierTechs key={hanzhongWarTier.id} info={hanzhongWarTier} />
      ))}
    </>
  );
};

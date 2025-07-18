import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../components';

import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';
import { useHanzhongContext } from './HanzhongContext';
import { HanzhongResourcesBar } from './resources-timers';

export const HanzhongWarTiersTechs = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <>
      <Grid size={12}>
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

import Grid from '@mui/material/Grid';

import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';
import { useHanzhongContext } from './HanzhongContext';

export const HanzhongWarTiersTechs = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      {hanzhong.warTiers.map((hanzhongWarTier) => (
        <HanzhongWarTierTechs key={hanzhongWarTier.id} info={hanzhongWarTier} />
      ))}
    </Grid>
  );
};

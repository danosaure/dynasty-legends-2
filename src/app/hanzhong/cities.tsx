import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../shared';

import { HanzhongCity } from './City';
import { getCityByName } from './data';

export const HanzhongCities = () => {
  const topNorthCity = getCityByName('North Summit');
  const northCity = getCityByName('Mount Dingjun');
  const westCity = getCityByName('Yangping Pass');
  const centerCity = getCityByName('Hanzhong City');
  const eastCity = getCityByName('Maming Pavilion');
  const southCity = getCityByName('Hanshui Trail');
  const bottomSouthCity = getCityByName('Mianyang County');

  const lastCell = <Grid size={{ md: 3, lg: 6 }} sx={{ display: { xs: 'none', md: 'block' } }} />;

  return (
    <>
      <TitleTypographyWrapper variant="TITLE">Cities</TitleTypographyWrapper>
      <Grid container size={{ xs: 12 }} spacing={2}>
        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={topNorthCity} />
        </Grid>
        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        {lastCell}

        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={northCity} />
        </Grid>
        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        {lastCell}

        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={westCity} />
        </Grid>
        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={centerCity} />
        </Grid>
        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={eastCity} />
        </Grid>
        {lastCell}

        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={southCity} />
        </Grid>
        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        {lastCell}

        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        <Grid size={{ xs: 4, md: 3, lg: 2 }}>
          <HanzhongCity city={bottomSouthCity} />
        </Grid>
        <Grid size={{ xs: 4, md: 3, lg: 2 }} />
        {lastCell}
      </Grid>
    </>
  );
};

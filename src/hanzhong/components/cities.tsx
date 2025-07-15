import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../components';
import { HANZHONG_CITY_IDS } from '../constants/items-ids';
import { findCityById } from '../utils/find-city-by-id';

import { HanzhongCity } from './City';
import { useHanzhongContext } from './HanzhongContext';

export const HanzhongCities = () => {
  const { hanzhong } = useHanzhongContext();

  const topNorthCity = findCityById(hanzhong, HANZHONG_CITY_IDS.NORTH_SUMMIT);
  const northCity = findCityById(hanzhong, HANZHONG_CITY_IDS.MOUNT_DINGJUN);
  const westCity = findCityById(hanzhong, HANZHONG_CITY_IDS.YANGPING_PASS);
  const centerCity = findCityById(hanzhong, HANZHONG_CITY_IDS.HANZHONG_CITY);
  const eastCity = findCityById(hanzhong, HANZHONG_CITY_IDS.MAMING_PAVILION);
  const southCity = findCityById(hanzhong, HANZHONG_CITY_IDS.HANSHUI_TRAIL);
  const bottomSouthCity = findCityById(hanzhong, HANZHONG_CITY_IDS.MIANYANG_COUNTY);

  return (
    <>
      <TitleTypographyWrapper variant="TITLE">Siege Progress</TitleTypographyWrapper>
      <Grid container size={{ xs: 12 }} spacing={2}>
        <Grid size={{ xs: 4 }} />
        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={topNorthCity} />
        </Grid>
        <Grid size={{ xs: 4 }} />

        <Grid size={{ xs: 4 }} />
        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={northCity} />
        </Grid>
        <Grid size={{ xs: 4 }} />

        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={westCity} />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={centerCity} />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={eastCity} />
        </Grid>

        <Grid size={{ xs: 4 }} />
        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={southCity} />
        </Grid>
        <Grid size={{ xs: 4 }} />

        <Grid size={{ xs: 4 }} />
        <Grid size={{ xs: 4 }}>
          <HanzhongCity city={bottomSouthCity} />
        </Grid>
        <Grid size={{ xs: 4 }} />
      </Grid>
    </>
  );
};

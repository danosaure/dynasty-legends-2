import Grid from '@mui/material/Grid';

import { City } from './City';
import { useHanzhongContext } from './HanzhongContext';
import { HANZHONG_CITY_IDS } from '../constants/items-ids';
import { findCityById } from '../utils/find-city-by-id';

export const Cities = () => {
  const { hanzhong } = useHanzhongContext();

  const topNorthCity = findCityById(hanzhong, HANZHONG_CITY_IDS.NORTH_SUMMIT);
  const northCity = findCityById(hanzhong, HANZHONG_CITY_IDS.MOUNT_DINGJUN);
  const westCity = findCityById(hanzhong, HANZHONG_CITY_IDS.YANGPING_PASS);
  const centerCity = findCityById(hanzhong, HANZHONG_CITY_IDS.HANZHONG_CITY);
  const eastCity = findCityById(hanzhong, HANZHONG_CITY_IDS.MAMING_PAVILION);
  const southCity = findCityById(hanzhong, HANZHONG_CITY_IDS.HANSHUI_TRAIL);
  const bottomSouthCity = findCityById(hanzhong, HANZHONG_CITY_IDS.MIANYANG_COUNTY);

  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      <Grid size={{ xs: 4 }} />
      <Grid size={{ xs: 4 }}>
        <City city={topNorthCity} />
      </Grid>
      <Grid size={{ xs: 4 }} />

      <Grid size={{ xs: 4 }} />
      <Grid size={{ xs: 4 }}>
        <City city={northCity} />
      </Grid>
      <Grid size={{ xs: 4 }} />

      <Grid size={{ xs: 4 }}>
        <City city={westCity} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <City city={centerCity} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <City city={eastCity} />
      </Grid>

      <Grid size={{ xs: 4 }} />
      <Grid size={{ xs: 4 }}>
        <City city={southCity} />
      </Grid>
      <Grid size={{ xs: 4 }} />

      <Grid size={{ xs: 4 }} />
      <Grid size={{ xs: 4 }}>
        <City city={bottomSouthCity} />
      </Grid>
      <Grid size={{ xs: 4 }} />
    </Grid>
  );
};

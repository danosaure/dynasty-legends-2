import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../shared';
import type { HanzhongTerritoryLevelType } from '../types';

import { useHanzhongContext } from './HanzhongContext';
import { TerritoryLevel } from './TerritoryLevel';

export const HanzhongTerritories = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <>
      <Grid size={12}>
        <TitleTypographyWrapper variant="TITLE">Occupied Territories</TitleTypographyWrapper>
      </Grid>
      <Grid container size={{ xs: 12 }} spacing={2} direction={'column'}>
        {hanzhong.territories.levels
          .map((level: HanzhongTerritoryLevelType, index: number) => (
            <Grid
              container
              key={level.id}
              spacing={2}
              size={{ xs: 12 }}
              sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
            >
              <TerritoryLevel index={index} level={level} />
            </Grid>
          ))
          .reverse()}
      </Grid>
    </>
  );
};

import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../components';
import type { HanzhongTerritoryLevelType } from '../types';

import { useHanzhongContext } from './HanzhongContext';
import { TerritoryLevel } from './TerritoryLevel';

export const HanzhongTerritories = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <>
      <TitleTypographyWrapper variant="TITLE">Occupied Territories</TitleTypographyWrapper>
      <Grid container size={{ xs: 12 }} spacing={2} direction={'column'}>
        {hanzhong.territories.levels
          .map((level: HanzhongTerritoryLevelType, index: number) => <TerritoryLevel key={level.id} index={index} level={level} />)
          .reverse()}
      </Grid>
    </>
  );
};

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardWrapper, ValueAdjuster } from '../../shared';

import { useHanzhongContext } from '../HanzhongContext';
import { assetPath } from '../../utils';
import type { HanzhongTerritoryLevelEarningsType } from './TerritoryLevelEarningsType';

export type TerritoryLevelResourceProps = {
  label: string;
  level: number;
  earning: HanzhongTerritoryLevelEarningsType;
};

export const TerritoryLevelResource = ({ label, level, earning }: TerritoryLevelResourceProps) => {
  const { user, onChange } = useHanzhongContext();

  return (
    <CardWrapper>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} direction="column">
        <Grid container direction="row">
          <Grid size="auto" display={{ xs: 'none', sm: 'block' }}>
            <img src={assetPath(earning.avatar.path)} alt={`${label} Lv.${level}`} width="36px" />
          </Grid>
          <Grid container size="grow">
            <Grid size={{ xs: 12 }}>
              <Typography align="center" sx={{ fontSize: 12 }}>
                Lv.{level}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography align="center" sx={{ fontSize: 13 }}>
                {label}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ p: 0 }}>
          <ValueAdjuster value={user[earning.id] ?? 0} onChange={(newValue: number) => onChange(id, newValue)} />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

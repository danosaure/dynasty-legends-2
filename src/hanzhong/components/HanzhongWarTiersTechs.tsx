import Grid from '@mui/material/Grid';

import type { HanzhongWarTierType } from '../types';
import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';

export interface HanzhongWarTiersTechsProps {
  info: HanzhongWarTierType[];
  onChange: (id: string, newValue: number) => void;
}

export const HanzhongWarTiersTechs = ({ info, onChange }: HanzhongWarTiersTechsProps) => {
  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      {info.map((hanzhongWarTier) => (
        <HanzhongWarTierTechs key={hanzhongWarTier.id} info={hanzhongWarTier} onChange={onChange} />
      ))}
    </Grid>
  );
};

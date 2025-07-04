import Grid from '@mui/material/Grid';

import type { HanzhongWarTierType } from '../../types/hanzhong-war-tier-type';
import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';

export interface HanzhongWarTiersTechsProps {
  info: HanzhongWarTierType[];
  currentSelections: Record<string, number>;
  onChange: (id: string, newValue: number) => void;
}

export const HanzhongWarTiersTechs = ({ info, currentSelections, onChange }: HanzhongWarTiersTechsProps) => {
  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      {info.map((hanzhongWarTier) => (
        <HanzhongWarTierTechs
          key={hanzhongWarTier.id}
          info={hanzhongWarTier}
          currentSelections={currentSelections}
          onChange={onChange}
        />
      ))}
    </Grid>
  );
};

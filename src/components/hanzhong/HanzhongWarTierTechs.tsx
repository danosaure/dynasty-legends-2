import Grid from '@mui/material/Grid';

import type { HanzhongWarTierType } from '../../types/hanzhong-war-tier-type';
import { HanzhongTech } from './HanzhongTech';

export interface HanzhongWarTierTechsProps {
  info: HanzhongWarTierType;
  currentSelections: Record<string, number>;
  onChange: (id: string, newValue: number) => void;
}

export const HanzhongWarTierTechs = ({ info, currentSelections, onChange }: HanzhongWarTierTechsProps) => {
  return (
    <Grid
      container
      size={{ xs: 12 }}
      style={{ backgroundColor: info.bg }}
      sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
    >
      <Grid size={{ xs: 12, md: 3 }}>
        <img src={`/assets/${info.icon.path}`} alt={info.id} style={{ maxHeight: '90%', maxWidth: '90%' }} />
      </Grid>
      <Grid container size={{ xs: 12, md: 9 }} spacing={{ xs: 1, md: 2 }}>
        {info.techs.map((tech) => (
          <HanzhongTech key={tech.id} info={tech} value={currentSelections[tech.id] ?? 0} onChange={onChange} />
        ))}
      </Grid>
    </Grid>
  );
};

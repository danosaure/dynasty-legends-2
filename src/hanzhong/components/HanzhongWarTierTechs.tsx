import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import type { HanzhongTechType, HanzhongWarTierType } from '../types';
import { HanzhongTech } from './HanzhongTech';
import { useHanzhongContext } from './HanzhongContext';

export interface HanzhongWarTierTechsProps {
  info: HanzhongWarTierType;
}

export const HanzhongWarTierTechs = ({ info }: HanzhongWarTierTechsProps) => {
  const { user } = useHanzhongContext();

  return (
    <Paper elevation={10} sx={{ width: '100%' }}>
      <Grid
        container
        size={{ xs: 12 }}
        style={{ backgroundColor: info.bg, padding: '10px' }}
        sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
        spacing={1}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <Grid size={{ xs: 3, md: 12 }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/${info.icon.path}`}
              alt={info.id}
              style={{ maxWidth: '100%', maxHeight: '120px', opacity: 0.9 }}
            />
          </Grid>
        </Grid>

        <Grid container size={{ xs: 12, md: 9 }} spacing={1}>
          {info.techs.map((tech: HanzhongTechType) => (
            <HanzhongTech key={tech.id} info={tech} value={user[tech.id] ?? 0} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

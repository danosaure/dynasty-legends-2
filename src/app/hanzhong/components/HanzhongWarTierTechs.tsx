import Grid from '@mui/material/Grid';

import type { HanzhongTechType, HanzhongWarTierType } from '../types';
import { HanzhongTech } from './HanzhongTech';
import { useHanzhongContext } from './HanzhongContext';
import { PaperWrapper } from '../../components';

export interface HanzhongWarTierTechsProps {
  info: HanzhongWarTierType;
}

export const HanzhongWarTierTechs = ({ info }: HanzhongWarTierTechsProps) => {
  const { user } = useHanzhongContext();

  return (
    <PaperWrapper sx={{ width: '100%' }}>
      <Grid
        container
        size={{ xs: 12 }}
        style={{ backgroundColor: info.bg, padding: '5px' }}
        sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
        spacing={0}
      >
        <Grid sx={{ pr: 1, width: { xs: '70px' } }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/${info.icon.path}`}
            alt={info.id}
            style={{ maxWidth: '100%', maxHeight: '100px', opacity: 0.9 }}
          />
        </Grid>

        <Grid container size="grow" spacing={1}>
          {info.techs.map((tech: HanzhongTechType) => (
            <HanzhongTech key={tech.id} info={tech} value={user[tech.id] ?? 0} />
          ))}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

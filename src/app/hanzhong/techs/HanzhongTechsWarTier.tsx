import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';
import type { HanzhongTechType, HanzhongWarTierType } from '../types';

import { HanzhongTechsTech } from './HanzhongTechsTech';

export interface HanzhongTechsWarTierProps {
  info: HanzhongWarTierType;
}

export const HanzhongTechsWarTier = ({ info }: HanzhongTechsWarTierProps) => {
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
            <HanzhongTechsTech key={tech.id} info={tech} value={user[tech.id] ?? 0} />
          ))}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

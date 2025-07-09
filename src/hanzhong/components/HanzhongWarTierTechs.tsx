import Grid from '@mui/material/Grid';

import type { HanzhongTechType, HanzhongWarTierType } from '../types';
import { HanzhongTech } from './HanzhongTech';
import { useUserDataContext } from '../../components/UserDataContext';

export interface HanzhongWarTierTechsProps {
  info: HanzhongWarTierType;
  onChange: (id: string, newValue: number) => void;
}

export const HanzhongWarTierTechs = ({ info, onChange }: HanzhongWarTierTechsProps) => {
  const { hanzhong: userData } = useUserDataContext();

  return (
    <Grid
      container
      size={{ xs: 12 }}
      style={{ backgroundColor: info.bg, padding: '10px' }}
      sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
      spacing={2}
    >
      <Grid size={{ xs: 12, md: 'auto' }}>
        <img src={`${import.meta.env.BASE_URL}/assets/${info.icon.path}`} alt={info.id} style={{ maxHeight: 150, maxWidth: 150 }} />
      </Grid>
      <Grid container size={{ xs: 12, md: 'grow' }} spacing={{ xs: 1, md: 2 }}>
        {info.techs.map((tech: HanzhongTechType) => (
          <HanzhongTech key={tech.id} info={tech} value={userData[tech.id] ?? 0} onChange={onChange} />
        ))}
      </Grid>
    </Grid>
  );
};

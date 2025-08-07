import Grid from '@mui/material/Grid';
import type { HanzhongWarTierType } from './data';
import { PaperWrapper } from '../../shared';
import type { HanzhongTechType, HanzhongWarTierTaskType } from '../types';
import { HanzhongTechsTech } from '../techs/HanzhongTechsTech';
import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongWarTierTask } from './WarTierTask';

export type HanzhongWarTierProps = {
  warTier: HanzhongWarTierType;
  techs?: boolean;
};

export const HanzhongWarTier = ({ warTier, techs }: HanzhongWarTierProps) => {
  const { user } = useHanzhongContext();

  const content = techs
    ? warTier.techs.map((tech: HanzhongTechType) => <HanzhongTechsTech key={tech.id} info={tech} value={user[tech.id] ?? 0} />)
    : warTier.tasks.map((task: HanzhongWarTierTaskType) => <HanzhongWarTierTask key={task.id} task={task} />);

  return (
    <PaperWrapper sx={{ width: '100%' }}>
      <Grid
        container
        style={{ backgroundColor: warTier.bg, padding: '5px' }}
        sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
        spacing={0}
      >
        <Grid sx={{ pr: 1, width: { xs: '70px' } }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/${warTier.icon.path}`}
            alt={warTier.id}
            style={{ maxWidth: '100%', maxHeight: '100px', opacity: 0.9 }}
          />
        </Grid>

        <Grid container size="grow" spacing={0.5}>
          {content}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

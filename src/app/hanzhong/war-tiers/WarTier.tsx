import Grid from '@mui/material/Grid';
import type { HanzhongWarTierTaskType, HanzhongWarTierType } from './data';
import { PaperWrapper } from '../../shared';
import type { HanzhongTechType } from '../types';
import { HanzhongTechsTech } from '../techs/HanzhongTechsTech';
import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongWarTierTask } from './WarTierTask';
import { useTheme } from '@mui/material/styles';
import { areRequirementsSatified } from '../requirements';

export type HanzhongWarTierProps = {
  warTier: HanzhongWarTierType;
  techs?: boolean;
};

export const HanzhongWarTier = ({ warTier, techs }: HanzhongWarTierProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();

  const content = techs
    ? warTier.techs.map((tech: HanzhongTechType) => <HanzhongTechsTech key={tech.id} info={tech} value={user[tech.id] ?? 0} />)
    : warTier.tasks.map((task: HanzhongWarTierTaskType) => <HanzhongWarTierTask key={task.id} task={task} />);

  let borderColor: string = theme.palette.primary.main;
  if (warTier.requirement) {
    const check = areRequirementsSatified(warTier.id, user, [warTier.requirement], cache.requirements);
    if (check.satisfies) {
      // Satisfies the previous war tier level. Has it completed all tasks of the current?
      const tasksChecks = warTier.tasks.map<HanzhongWarTierTaskType>((task: HanzhongWarTierTaskType) =>
        task.requirement
          ? areRequirementsSatified(task.id, user, [task.requirement], cache.requirements)
          : { satisfies: true, value: -1 }
      );
      console.log(`<HanzhongWarTier>: tasksChecks=`, tasksChecks);
    } else {
      borderColor = theme.palette.error.main;
    }
  }

  return (
    <PaperWrapper sx={{ width: '100%', border: `3px solid ${borderColor}` }}>
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

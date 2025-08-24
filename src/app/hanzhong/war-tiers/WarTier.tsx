import Grid from '@mui/material/Grid';
import { PaperWrapper } from '../../shared';
import { HanzhongTechsTech } from '../techs/HanzhongTechsTech';
import { useHanzhongContext } from '../HanzhongContext';
import { useTheme } from '@mui/material/styles';
import { areRequirementsSatified, VALIDATOR_RESPONSES, type HanzhongRequirementCheckResult } from '../requirements';
import { HanzhongWarTierTask, type HanzhongWarTierTaskType } from '../war-tier-tasks';
import type { HanzhongWarTierType } from './WarTierType';
import type { HanzhongTechType } from '../techs';

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
    const check = areRequirementsSatified(warTier.id, [warTier.requirement], user, cache.requirements);
    if (check.satisfies) {
      // Satisfies the previous war tier level. Has it completed all tasks of the current?
      const tasksChecks = warTier.tasks.map<HanzhongRequirementCheckResult>((task) =>
        task.requirement
          ? areRequirementsSatified(task.id, [task.requirement], user, cache.requirements)
          : { requirement: task.requirement, ...VALIDATOR_RESPONSES.ASSUME_DONE }
      );
      console.log(`<HanzhongWarTier>: warTier.id="${warTier.id}": tasksChecks=`, tasksChecks);
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

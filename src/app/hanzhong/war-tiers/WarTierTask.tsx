import Typography from '@mui/material/Typography';
import { PaperWrapper } from '../../shared';
import type { HanzhongWarTierTaskType } from '../types';
import Grid from '@mui/material/Grid';
import { areRequirementsSatified } from '../requirements';
import { useHanzhongContext } from '../HanzhongContext';
import Box from '@mui/material/Box';

export type HanzhongWarTierTaskProps = {
  task: HanzhongWarTierTaskType;
};

export const HanzhongWarTierTask = ({ task }: HanzhongWarTierTaskProps) => {
  const { user, cache } = useHanzhongContext();

  let requirementContent = null;

  if (task.requirement) {
    const check = areRequirementsSatified(task.id, user, [task.requirement], cache.requirements);
    requirementContent = (
      <>
        <Typography color={check.satisfied ? 'success' : 'error'} display="inline">
          {check.value}
        </Typography>
        <Typography color="info" display="inline">
          /{check.expected}
        </Typography>
      </>
    );
  }

  return (
    <PaperWrapper sx={{ p: 1 }}>
      <Grid container spacing={0} direction="column">
        <Grid container spacing={1} direction="row">
          <Grid size="grow">
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {task.label}
            </Typography>
          </Grid>
          <Grid size="auto">{requirementContent}</Grid>
        </Grid>
        <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
          {task.description}
        </Typography>
      </Grid>
    </PaperWrapper>
  );
};

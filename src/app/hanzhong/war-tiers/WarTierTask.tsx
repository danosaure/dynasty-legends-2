import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified } from '../requirements';
import type { HanzhongWarTierTaskType } from '../types';

export type HanzhongWarTierTaskProps = {
  task: HanzhongWarTierTaskType;
};

export const HanzhongWarTierTask = ({ task }: HanzhongWarTierTaskProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();

  console.log(`<HanzhongWarTierTask>: cache.requirements=`, cache.requirements);
  const isDone = useMemo(
    () => (task.requirements ? areRequirementsSatified(task.id, user, task.requirements, cache.requirements) : true),
    [task.id, task.requirements, user, cache.requirements]
  );

  const border = `3px solid ${isDone ? 'transparent' : theme.palette.error.main}`;

  return (
    <PaperWrapper sx={{ width: '100%', p: 1, border }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {task.name}
      </Typography>
      <Typography variant="body2">{task.description}</Typography>
    </PaperWrapper>
  );
};

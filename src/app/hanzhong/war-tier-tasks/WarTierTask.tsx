import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified } from '../requirements';
import Box from '@mui/material/Box';
import type { HanzhongWarTierTaskType } from './WarTierTaskType';

export type HanzhongWarTierTaskProps = {
  task: HanzhongWarTierTaskType;
};

export const HanzhongWarTierTask = ({ task }: HanzhongWarTierTaskProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();

  const isDone = useMemo(
    () =>
      task.requirement
        ? areRequirementsSatified(task.id, [task.requirement], user, cache.requirements)
        : { satisfies: true, value: -1 },
    [task.id, task.requirement, user, cache.requirements]
  );

  const border = `3px solid ${isDone.satisfies ? theme.palette.success.main : theme.palette.error.main}`;

  const value =
    isDone.value === -1 ? null : (
      <Typography color={isDone.satisfies ? 'success' : 'error'} sx={{ display: 'inline' }} variant="body1">
        {isDone.value}
      </Typography>
    );

  const required = task.requirement?.value ? (
    <Typography color="info" sx={{ display: 'inline' }} variant="body2">
      /{task.requirement.value}
    </Typography>
  ) : null;

  return (
    <PaperWrapper sx={{ width: '100%', p: 1, border, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 1, right: 1 }}>
        {value}
        {required}
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {task.name}
      </Typography>
      <Typography variant="body2">{task.description}</Typography>
    </PaperWrapper>
  );
};

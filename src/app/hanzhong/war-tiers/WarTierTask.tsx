import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified } from '../requirements';
import type { HanzhongWarTierTaskType } from './WarTierTaskType';

export type HanzhongWarTierTaskProps = {
  task: HanzhongWarTierTaskType;
};

export const HanzhongWarTierTask = ({ task }: HanzhongWarTierTaskProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();

  let requirementContent = null;
  let borderColor = 'transparent';

  if (task.requirement) {
    const check = areRequirementsSatified(user, [task.requirement], cache.requirements);
    borderColor = check.satisfied ? theme.palette.success.main : theme.palette.error.main;
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
    <PaperWrapper sx={{ p: 1, borderColor, borderStyle: 'solid', borderWidth: '2px' }}>
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

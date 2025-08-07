import type { HanzhongWarTierTaskType } from '../types';
import { PaperWrapper } from '../../shared';
import Typography from '@mui/material/Typography';

export type HanzhongWarTierTaskProps = {
  task: HanzhongWarTierTaskType;
};

export const HanzhongWarTierTask = ({ task }: HanzhongWarTierTaskProps) => {
  return (
    <PaperWrapper sx={{ width: '100%', p: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {task.name}
      </Typography>
      <Typography variant="body2">{task.description}</Typography>
    </PaperWrapper>
  );
};

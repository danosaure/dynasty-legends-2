import Typography from '@mui/material/Typography';
import { PaperWrapper } from '../../shared';
import type { HanzhongWarTierTaskType } from '../types';

export type HanzhongWarTierTaskProps = {
  task: HanzhongWarTierTaskType;
};

export const HanzhongWarTierTask = ({ task }: HanzhongWarTierTaskProps) => {
  return (
    <PaperWrapper sx={{ p: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {task.label}
      </Typography>
      <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
        {task.description}
      </Typography>
    </PaperWrapper>
  );
};

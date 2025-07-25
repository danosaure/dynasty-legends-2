import { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';

import { PaperWrapper } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';

import { calculateTimeNeeded } from './utils';
import { HanzhongTimerDisplay } from './TimerDisplay';

export type HanzhongEstimatedTimeProps = {
  id: string;
};

export const HanzhongEstimatedTime = ({ id }: HanzhongEstimatedTimeProps) => {
  const { bonuses, user } = useHanzhongContext();
  const [value, setValue] = useState<string | number | null>('');

  useEffect(() => {
    setValue(calculateTimeNeeded(id, user, bonuses));
  }, [id, user, bonuses]);

  if (value === '') {
    return null;
  }

  if (value === -1) {
    return (
      <Box
        sx={{
          p: { xs: '1px', md: '3px' },
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: { xs: 'white', md: 'rgba(255,255,255,0.8)' },
          borderRadius: '12px',
          lineHeight: 0,
        }}
      >
        <DoneIcon color="success" sx={{ fontSize: { xs: 10, md: 20 } }} />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 0, position: 'absolute', bottom: 0, opacity: 0.8 }}>
      <PaperWrapper elevation={10} sx={{ p: '1px', width: '100%' }}>
        <HanzhongTimerDisplay minutes={value as number | null} small />
      </PaperWrapper>
    </Box>
  );
};

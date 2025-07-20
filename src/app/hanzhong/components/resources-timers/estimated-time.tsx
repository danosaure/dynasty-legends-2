import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';

import { useHanzhongContext } from '../HanzhongContext';
import { PaperWrapper } from '../../../components';

import { calculateTimeNeeded, TIME_KEYS } from './utils';

export type HanzhongEstimatedTimeProps = {
  id: string;
};

export const HanzhongEstimatedTime = ({ id }: HanzhongEstimatedTimeProps) => {
  const theme = useTheme();
  const { bonuses, user } = useHanzhongContext();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(calculateTimeNeeded(id, user, bonuses));
  }, [id, user, bonuses]);

  if (value === '') {
    return null;
  }

  if (value === TIME_KEYS.MAX_LEVEL_REACHED) {
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
      <PaperWrapper elevation={10} sx={{ p: '2px', width: '100%' }}>
        <Typography
          sx={{ fontSize: { xs: 8, md: 15 }, m: '2px' }}
          style={{
            width: '100%',
            textAlign: 'center',
            color: theme.palette.primary.dark,
          }}
        >
          {value}
        </Typography>
      </PaperWrapper>
    </Box>
  );
};

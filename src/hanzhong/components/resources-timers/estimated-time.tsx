import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useHanzhongContext } from '../HanzhongContext';
import { PaperWrapper } from '../../../components';

import { calculateTimeNeeded, isShowingClocks } from './utils';

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

  if (!isShowingClocks(user) || value === '') {
    return null;
  }

  return (
    <Box sx={{ p: 0, position: 'absolute', bottom: 0, opacity: 0.8 }}>
      <PaperWrapper elevation={10} sx={{ p: '2px', width: '100%' }}>
        <Typography
          sx={{ fontSize: { xs: 6, md: 11 }, m: '2px' }}
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

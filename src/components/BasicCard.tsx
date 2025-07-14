import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { BasicCardImage } from './BasicCardImage';
import { ValueAdjuster } from './ValueAdjuster';
import { CardWrapper } from './CardWrapper';

export type BasicCardProps = {
  assetImage: string;
  label: string;
  value: number;
  maxValue: number;
  onChange: (newValue: number) => void;
};

const CARD_WIDTH = 130;

export const BasicCard = ({ assetImage, label, value, maxValue, onChange }: BasicCardProps) => {
  return (
    <CardWrapper
      sx={{ width: CARD_WIDTH, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
      cardContentSx={{ 'p': '5px', '&:last-child': { pb: '1px' } }}
    >
      <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
        <Box sx={{ textAlign: 'center', width: CARD_WIDTH / 2 }}>
          <BasicCardImage assetImage={assetImage} />
        </Box>
        <Box sx={{ mt: -1, width: '100%', backgroundColor: 'none' }}>
          <ValueAdjuster value={value} maxValue={maxValue} onChange={onChange} />
          <Typography sx={{ textAlign: 'center' }} variant="body2">
            {label}
          </Typography>
        </Box>
      </Grid>
    </CardWrapper>
  );
};

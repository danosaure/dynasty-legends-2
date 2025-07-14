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
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        minWidth: { md: CARD_WIDTH },
        maxWidth: { xs: '150px', md: '100px' },
      }}
      cardContentSx={{ 'p': '5px', '&:last-child': { pb: '1px' } }}
    >
      <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
        <Grid
          size={{ xs: 3, md: 12 }}
          sx={{ width: { xs: '30px', md: '100px' }, pl: { md: '20px' }, pr: { md: '20px' }, pt: { md: '5px' } }}
        >
          <BasicCardImage assetImage={assetImage} />
        </Grid>
        <Grid size={{ xs: 9, md: 12 }}>
          <ValueAdjuster value={value} maxValue={maxValue} onChange={onChange} />
        </Grid>
        <Typography sx={{ textAlign: 'center' }} variant="body2">
          {label}
        </Typography>
      </Grid>
    </CardWrapper>
  );
};

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { BasicCardImage } from './BasicCardImage';
import { ValueAdjuster } from './ValueAdjuster';

export interface BasicCardProps {
  assetImage: string;
  label: string;
  value: number;
  maxValue: number;
  onChange: (newValue: number) => void;
}

export const BasicCard = ({ assetImage, label, value, maxValue, onChange }: BasicCardProps) => {
  return (
    <Card sx={{ width: 140, backgroundColor: 'rgba(255, 255, 255, 0.7)' }} elevation={10}>
      <CardContent sx={{ 'p': 1, '&:last-child': { pb: 1 } }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
          <BasicCardImage assetImage={assetImage} />
          <ValueAdjuster value={value} maxValue={maxValue} onChange={onChange} sx={{ mt: -3 }} />
          <Typography sx={{ textAlign: 'center' }} variant="body2">
            {label}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

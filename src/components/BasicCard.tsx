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
    <Card sx={{ width: 150 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid size={{ xs: 6 }}>
            <BasicCardImage assetImage={assetImage} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <ValueAdjuster value={value} maxValue={maxValue} onChange={onChange} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

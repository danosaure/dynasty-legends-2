import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { BasicCardImage } from './BasicCardImage';

export interface BasicCardProps {
  assetImage: string;
  label: string;
  value: number;
  maxValue: number;
  onChange: (newValue: number) => void;
}

export const BasicCard = ({ assetImage, label, value, maxValue, onChange }: BasicCardProps) => {
  const onIncrease = () => onChange(value + 1);
  const onDecrease = () => onChange(value - 1);

  const hasError = value < 0 || value > maxValue;

  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid size={{ xs: 6 }}>
            <BasicCardImage assetImage={assetImage} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <IconButton title="Increase value" onClick={onIncrease} disabled={hasError || value === maxValue}>
              <ArrowUpwardSharpIcon />
            </IconButton>
            <Typography align="center" color={hasError ? 'error' : undefined}>
              {value} / {maxValue}
            </Typography>
            <IconButton title="Decrease value" onClick={onDecrease} disabled={hasError || value === 0}>
              <ArrowDownwardSharpIcon />
            </IconButton>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

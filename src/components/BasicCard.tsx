import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BasicCardImage } from './BasicCardImage';
import Grid from '@mui/material/Grid';

export interface BasicCardProps {
  assetImage: string;
  label: string;
  value: number;
  maxValue: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const BasicCard = ({ assetImage, label, value, maxValue, onDecrease, onIncrease }: BasicCardProps) => {
  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid size={{ xs: 6 }}>
            <BasicCardImage assetImage={assetImage} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <IconButton title="Increase value" onClick={onIncrease} disabled={value >= maxValue}>
              <ArrowUpwardSharpIcon />
            </IconButton>
            <Typography align="center" color={value < 0 || value > maxValue ? 'error' : undefined}>
              {value} / {maxValue}
            </Typography>
            <IconButton title="Decrease value" onClick={onDecrease} disabled={value <= 0}>
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

import Grid from '@mui/material/Grid';
import type { HanzhongInfoDataKeyUpdaterType, HanzhongInfoDataType } from '../types';
import Typography from '@mui/material/Typography';
import { HanzhongInfoDisplay } from './HanzhongInfoDisplay';

export type HanzhongInfosDisplayProps = {
  label: string;
  items: HanzhongInfoDataType[];
  onChange: HanzhongInfoDataKeyUpdaterType;
};

export const HanzhongInfosDisplay = ({ label, items, onChange }: HanzhongInfosDisplayProps) => {
  const itemsToDisplay = items.map((item) => ({
    ...item,
    onChange: (newValue: number) => onChange(item.id, newValue),
  }));

  return (
    <Grid container spacing={2} direction={'column'}>
      <Typography variant="subtitle1">{label}</Typography>
      {itemsToDisplay.map((item) => (
        <HanzhongInfoDisplay
          key={item.id}
          id={item.id}
          label={item.label}
          currentValue={item.currentValue}
          projectedValue={item.projectedValue}
          unit={item.unit}
          onChange={item.onChange}
        />
      ))}
    </Grid>
  );
};

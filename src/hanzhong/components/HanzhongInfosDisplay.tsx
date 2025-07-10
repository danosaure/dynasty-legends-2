import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { HanzhongInfoDisplay, type HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';

export type HanzhongInfosDisplayProps = {
  label: string;
  items: HanzhongInfoDisplayProps[];
};

export const HanzhongInfosDisplay = ({ label, items }: HanzhongInfosDisplayProps) => {
  return (
    <Paper sx={{ width: '100%', p: 2 }} elevation={10}>
      <Grid container spacing={2} direction={'column'}>
        <Typography variant="subtitle1" fontWeight={'fontWeightBold'}>
          {label}
        </Typography>
        {items.map((item, idx) => (
          <HanzhongInfoDisplay key={`${idx}-${item.label}`} label={item.label} value={item.value} unit={item.unit} />
        ))}
      </Grid>
    </Paper>
  );
};

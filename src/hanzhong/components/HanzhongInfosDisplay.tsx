import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../../components';

import { HanzhongInfoDisplay, type HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';

export type HanzhongInfosDisplayProps = {
  label: string;
  items: HanzhongInfoDisplayProps[];
};

export const HanzhongInfosDisplay = ({ label, items }: HanzhongInfosDisplayProps) => {
  return (
    <PaperWrapper sx={{ width: '100%', p: 2 }}>
      <Grid container spacing={2} direction={'column'}>
        <Typography variant="subtitle1" fontWeight={'fontWeightBold'}>
          {label}
        </Typography>
        {items.map((item, idx) => (
          <HanzhongInfoDisplay key={`${idx}-${item.label}`} label={item.label} value={item.value} unit={item.unit} />
        ))}
      </Grid>
    </PaperWrapper>
  );
};

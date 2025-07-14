import Grid from '@mui/material/Grid';

import { PaperWrapper, TitleTypographyWrapper } from '../../components';

import { HanzhongInfoDisplay, type HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';

export type HanzhongInfosDisplayProps = {
  label: string;
  items: HanzhongInfoDisplayProps[];
};

export const HanzhongInfosDisplay = ({ label, items }: HanzhongInfosDisplayProps) => {
  return (
    <PaperWrapper sx={{ width: '100%', p: 2 }}>
      <Grid container spacing={2} direction={'column'}>
        <TitleTypographyWrapper variant="SIDEPANEL_TITLE">{label}</TitleTypographyWrapper>
        {items.map((item, idx) => (
          <HanzhongInfoDisplay key={`${idx}-${item.label}`} label={item.label} value={item.value} unit={item.unit} />
        ))}
      </Grid>
    </PaperWrapper>
  );
};

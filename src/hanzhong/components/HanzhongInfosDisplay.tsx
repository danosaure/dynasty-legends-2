import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

import { DebouncedInputField, PaperWrapper, TitleTypographyWrapper } from '../../components';
import type { HanzhongInfoDataType } from '../types';

export type HanzhongInfosDisplayProps = {
  label: string;
  items: HanzhongInfoDataType[];
  configure?: () => void;
};

export const HanzhongInfosDisplay = ({ label, items, configure }: HanzhongInfosDisplayProps) => {
  let configureIcon = null;
  if (configure) {
    configureIcon = (
      <Grid size={{ xs: 12, sm: 'auto' }} textAlign={'right'} sx={{ fontSize: { xs: 8 } }}>
        <IconButton aria-label="Configure" onClick={() => configure()} sx={{ p: 0 }}>
          <SettingsIcon sx={{ fontSize: { xs: 12, sm: 16 } }} />
        </IconButton>
      </Grid>
    );
  }

  return (
    <PaperWrapper sx={{ width: '100%', p: 2 }}>
      <Grid container spacing={2} direction={'column'}>
        <Grid container spacing={0} direction="row-reverse">
          {configureIcon}
          <Grid size={{ xs: 12, sm: 'grow' }}>
            <TitleTypographyWrapper variant="SIDEPANEL_TITLE">{label}</TitleTypographyWrapper>
          </Grid>
        </Grid>
        {items.map((item, idx) => (
          <DebouncedInputField
            key={`${idx}-${item.label}`}
            label={item.label}
            value={item.value}
            unit={item.unit}
            maxValue={item.maxValue}
          />
        ))}
      </Grid>
    </PaperWrapper>
  );
};

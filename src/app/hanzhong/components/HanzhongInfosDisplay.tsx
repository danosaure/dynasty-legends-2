import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';

import { DebouncedInputField, PaperWrapper, TitleTypographyWrapper, WrappedIconButton } from '../../shared';
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
      <Grid size={{ xs: 12, sm: 'auto' }} textAlign={'right'} sx={{ fontSize: { xs: 8 }, mt: -1, mr: -1 }}>
        <WrappedIconButton label="Configure Formations" onClick={() => configure()} Icon={SettingsIcon} withTooltip small />
      </Grid>
    );
  }

  return (
    <PaperWrapper sx={{ width: '100%', p: '5px' }}>
      <Grid container spacing={1} direction={'column'}>
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
            small
          />
        ))}
      </Grid>
    </PaperWrapper>
  );
};

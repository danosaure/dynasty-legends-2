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
      <IconButton aria-label="Configure" onClick={() => configure()}>
        <SettingsIcon />
      </IconButton>
    );
  }

  return (
    <PaperWrapper sx={{ width: '100%', p: 2 }}>
      <Grid container spacing={2} direction={'column'}>
        <TitleTypographyWrapper variant="SIDEPANEL_TITLE">
          {label} {configureIcon}
        </TitleTypographyWrapper>
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

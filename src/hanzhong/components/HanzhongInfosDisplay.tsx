import Grid from '@mui/material/Grid';
import type { HanzhongInfoDataKeyUpdaterType } from '../../types/hanzhong/hanzhong-info-data-key-updater-type';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { HanzhongInfoDisplay } from './HanzhongInfoDisplay';

export type HanzhongInfosDisplayProps = {
  label: string;
  onChange: HanzhongInfoDataKeyUpdaterType;
};

const CURRENT_LUMBER_KEY = 'hanzhong--inventory--lumber';
const CURRENT_GRAINS_KEY = 'hanzhong--inventory--grains';
const CURRENT_IRON_KEY = 'hanzhong--inventory--iron';

export const HanzhongInfosDisplay = ({ label, onChange }: HanzhongInfosDisplayProps) => {
  const [currentLumber, setCurrentLumber] = useState<number>(-1);
  const [currentGrains, setCurrentGrains] = useState<number>(-1);
  const [currentIron, setCurrentIron] = useState<number>(-1);

  const infosToDisplay = infos.map((value) => ({
    ...value,
    onChange: (newValue: number) => onChange(value.id, newValue),
  }));

  let infos = [
    {
      id: 'foo-bar',
      currentValue: -1,
      projectedValue: -1,
      onChange: (newValue: number): void => {},
    },
  ];

  return (
    <Grid container spacing={2}>
      <Typography>{label}</Typography>
      {infosToDisplay.map((info) => (
        <HanzhongInfoDisplay
          key={info.id}
          currentValue={info.currentValue}
          projectedValue={info.projectedValue}
          onChange={info.onChange}
        />
      ))}
    </Grid>
  );
};

import Grid from '@mui/material/Grid';

import { DebouncedInputField, PaperWrapper } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';

import { RESOURCES_TIMERS_KEYS } from './utils';
import { SECTION_KEYS } from '../constants';

export const HanzhongResourcesBar = () => {
  const { getValue, onChange } = useHanzhongContext();

  const items = [
    ['Lumber', RESOURCES_TIMERS_KEYS.INVENTORY_LUMBER],
    ['Grains', RESOURCES_TIMERS_KEYS.INVENTORY_GRAINS],
    ['Iron', RESOURCES_TIMERS_KEYS.INVENTORY_IRON],
  ];

  return (
    <PaperWrapper>
      <Grid container spacing={3} sx={{ p: 1 }}>
        {items.map(([label, key]) => (
          <Grid key={`resources-bar--resource-${label}`} size={4}>
            <DebouncedInputField
              label={label}
              value={getValue(SECTION_KEYS.RESOURCES, key)}
              onChange={(newValue: number) => onChange(SECTION_KEYS.RESOURCES, key, newValue)}
            />
          </Grid>
        ))}
      </Grid>
    </PaperWrapper>
  );
};

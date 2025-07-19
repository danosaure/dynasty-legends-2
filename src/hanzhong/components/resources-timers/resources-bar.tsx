import Grid from '@mui/material/Grid';

import { DebouncedInputField, PaperWrapper } from '../../../components';
import { useHanzhongContext } from '../HanzhongContext';

import { RESOURCES_TIMERS_KEYS } from './utils';

export const HanzhongResourcesBar = () => {
  const { user, onChange } = useHanzhongContext();

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
            <DebouncedInputField label={label} value={user[key] ?? 0} onChange={(newValue) => onChange(key, newValue)} />
          </Grid>
        ))}
      </Grid>
    </PaperWrapper>
  );
};

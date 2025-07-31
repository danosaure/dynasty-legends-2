import Grid from '@mui/material/Grid';

import { DebouncedInputField } from '../shared';

import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongFormationsCharacterType } from './types';
import { SECTION_KEYS } from './constants';

export type HanzhongFormationsCharacterPops = {
  info: HanzhongFormationsCharacterType;
  rank: string;
};

export const HanzhongFormationsCharacter = ({ info, rank }: HanzhongFormationsCharacterPops) => {
  const { onChange } = useHanzhongContext();
  const fieldValueChanged = (newValue: number) => onChange(SECTION_KEYS.FORMATIONS, info.id, newValue);

  return (
    <Grid sx={{ width: '70px' }}>
      <DebouncedInputField label={rank} value={info.tacticalPoints ?? 0} onChange={fieldValueChanged} />
    </Grid>
  );
};

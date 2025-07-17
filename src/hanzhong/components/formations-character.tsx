import Grid from '@mui/material/Grid';
import type { SxProps } from '@mui/material/styles';

import { DebouncedInputField } from '../../components';

import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongFormationsCharacterType } from './types';

const LABEL_BY_RANK: Record<string, string> = {
  general: 'Gen.',
  lieutenant: 'Lt.',
} as const;

const WIDTH_BY_RANK: Record<keyof typeof LABEL_BY_RANK, SxProps> = {
  general: { width: { xs: '70px' } },
  lieutenant: { width: { xs: '50px' } },
};

export type HanzhongFormationsCharacterPops = {
  info: HanzhongFormationsCharacterType;
  rank: keyof typeof LABEL_BY_RANK;
};

export const HanzhongFormationsCharacter = ({ info, rank }: HanzhongFormationsCharacterPops) => {
  const { onChange } = useHanzhongContext();
  const fieldValueChanged = (newValue: number) => onChange(info.id, newValue);

  return (
    <Grid sx={WIDTH_BY_RANK[rank]}>
      <DebouncedInputField
        label={LABEL_BY_RANK[rank]}
        value={info.tacticalPoints ?? 0}
        small={LABEL_BY_RANK[rank] === LABEL_BY_RANK.lieutenant}
        onChange={fieldValueChanged}
      />
    </Grid>
  );
};

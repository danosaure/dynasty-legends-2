import Grid from '@mui/material/Grid';

import { DebouncedInputField } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';

import type { StructuredFormationsOfficer } from './structured-formations';
import { getNumberValue } from '../../utils';

export type HanzhongFormationsCharacterPops = {
  label: string;
  info: StructuredFormationsOfficer;
};

export const HanzhongFormationsCharacter = ({ label, info }: HanzhongFormationsCharacterPops) => {
  const { onChangeFormations, formationsUserData } = useHanzhongContext();
  const fieldValueChanged = (newValue: number) => onChangeFormations(info.tacticalPoints, newValue);

  return (
    <Grid sx={{ width: '70px' }}>
      <DebouncedInputField
        label={label}
        value={getNumberValue(formationsUserData, info.tacticalPoints, 0)}
        onChange={fieldValueChanged}
      />
    </Grid>
  );
};

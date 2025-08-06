import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { DebouncedInputField, OfficerAvatar } from '../../shared';
import { getNumberValue, getStringValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';

import type { StructuredFormationsOfficer } from './structured-formations';
import { useMemo } from 'react';
import { useAppContext } from '../../Context';

export type HanzhongFormationsCharacterPops = {
  label: string;
  info: StructuredFormationsOfficer;
  onClick: (id: string) => void;
};

export const HanzhongFormationsCharacter = ({ label, info, onClick }: HanzhongFormationsCharacterPops) => {
  const { user } = useAppContext();
  const { onChangeFormations, formationsUserData } = useHanzhongContext();
  const fieldValueChanged = (newValue: number) => onChangeFormations(info.tacticalPoints, newValue);

  const officerId = getStringValue(formationsUserData, info.officer);
  const roster = useMemo(() => user.officers ?? {}, [user.officers]);

  return (
    <Grid container direction="row" spacing={1} sx={{ p: 0 }}>
      <OfficerAvatar officerId={officerId} roster={roster} onClick={() => onClick(info.officer)} small />

      <Box sx={{ width: '75px' }}>
        <DebouncedInputField
          label={label}
          value={getNumberValue(formationsUserData, info.tacticalPoints, 0)}
          onChange={fieldValueChanged}
        />
      </Box>
    </Grid>
  );
};

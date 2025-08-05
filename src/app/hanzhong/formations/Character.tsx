import Grid from '@mui/material/Grid';

import { DebouncedInputField } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';

import type { StructuredFormationsOfficer } from './structured-formations';
import { assetPath, getNumberValue, getStringValue } from '../../utils';
import Avatar from '@mui/material/Avatar';
import { getOfficerById } from '../../data';
import Box from '@mui/material/Box';

export type HanzhongFormationsCharacterPops = {
  label: string;
  info: StructuredFormationsOfficer;
};

export const HanzhongFormationsCharacter = ({ label, info }: HanzhongFormationsCharacterPops) => {
  const { onChangeFormations, formationsUserData } = useHanzhongContext();
  const fieldValueChanged = (newValue: number) => onChangeFormations(info.tacticalPoints, newValue);

  const officerId = getStringValue(formationsUserData, info.officer);

  const officer = officerId ? getOfficerById(officerId) : null;

  const name = officer?.name ?? '';
  const image = officer?.avatar.path ? assetPath(officer.avatar.path) : '';

  return (
    <Grid container direction="row" spacing={1}>
      <Avatar alt={name} src={image} sx={{ width: '25px', height: '25px' }} />
      <Box sx={{ width: '70px' }}>
        <DebouncedInputField
          label={label}
          value={getNumberValue(formationsUserData, info.tacticalPoints, 0)}
          onChange={fieldValueChanged}
        />
      </Box>
    </Grid>
  );
};

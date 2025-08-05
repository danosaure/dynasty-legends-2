import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import { getOfficerById } from '../../data';
import { DebouncedInputField } from '../../shared';
import { assetPath, getNumberValue, getStringValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';

import type { StructuredFormationsOfficer } from './structured-formations';

export type HanzhongFormationsCharacterPops = {
  label: string;
  info: StructuredFormationsOfficer;
  onClick: (id: string) => void;
};

export const HanzhongFormationsCharacter = ({ label, info, onClick }: HanzhongFormationsCharacterPops) => {
  const { onChangeFormations, formationsUserData } = useHanzhongContext();
  const fieldValueChanged = (newValue: number) => onChangeFormations(info.tacticalPoints, newValue);

  const officerId = getStringValue(formationsUserData, info.officer);

  const officer = officerId ? getOfficerById(officerId) : null;

  const name = officer?.name ?? '';
  const image = officer?.avatar.path ? assetPath(officer.avatar.path) : '';

  return (
    <Grid container direction="row" spacing={0}>
      <IconButton sx={{ width: '30px' }} onClick={() => onClick(info.officer)}>
        <Avatar alt={name} src={image} sx={{ width: '25px', height: '25px' }} />
      </IconButton>
      <Box sx={{ width: '70px' }}>
        <DebouncedInputField
          label={label}
          value={getNumberValue(formationsUserData, info.tacticalPoints, 0)}
          onChange={fieldValueChanged}
          small
        />
      </Box>
    </Grid>
  );
};

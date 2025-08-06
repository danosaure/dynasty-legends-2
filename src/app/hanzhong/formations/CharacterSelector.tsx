import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { useAppContext } from '../../Context';
import { OFFICERS } from '../../data';
import { OfficerAvatar } from '../../shared';
import { getStringValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';

import { STRUCTURED_FORMATIONS_KEYS } from './structured-formations';
import ButtonGroup from '@mui/material/ButtonGroup';

export type HanzhongFormationsCharacterSelectorProps = {
  formationCharacterId: string;
  onSelect: (newFormationCharacterId: string) => void;
};

export const HanzhongFormationsCharacterSelector = ({
  formationCharacterId,
  onSelect,
}: HanzhongFormationsCharacterSelectorProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { formationsUserData } = useHanzhongContext();
  const { user } = useAppContext();

  const [showAllOfficers, setShowAllOfficers] = useState<boolean>(false);

  const roster = useMemo(() => user.officers ?? {}, [user.officers]);

  if (!formationCharacterId) {
    return null;
  }

  const currentSelectedOfficer = getStringValue(formationsUserData, formationCharacterId);

  const otherFormationOfficerIds = STRUCTURED_FORMATIONS_KEYS.officers.filter((officerId) => officerId !== formationCharacterId);

  const otherSelectedOfficers = new Set<string>(
    otherFormationOfficerIds.map((officerKey) => getStringValue(formationsUserData, officerKey)).filter((key) => key !== '')
  );

  return (
    <Dialog open={true} onClose={() => onSelect(currentSelectedOfficer)}>
      <DialogContent>
        <Grid container spacing={1}>
          {OFFICERS.map((officer) => {
            const isAlreadyInFormation = otherSelectedOfficers.has(officer.id);

            if (!showAllOfficers && !roster[officer.id]) {
              return null;
            }

            return (
              <OfficerAvatar
                key={officer.id}
                officerId={officer.id}
                roster={roster}
                disabled={isAlreadyInFormation}
                selectedOfficerId={currentSelectedOfficer}
                selectedColor={theme.palette.success.main}
                onClick={() => onSelect(officer.id)}
              />
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowAllOfficers(!showAllOfficers)}>
          {showAllOfficers ? <CheckBoxIcon sx={{ fontSize: '1em' }} /> : <CheckBoxOutlineBlankIcon sx={{ fontSize: '1em' }} />}
          All
        </Button>

        {currentSelectedOfficer ? (
          <ButtonGroup>
            <Button onClick={() => onSelect(currentSelectedOfficer)} color="primary" variant="contained">
              <ThumbUpIcon sx={{ fontSize: '1em' }} />
              Keep
            </Button>
            <Button onClick={() => onSelect('')} color="error" variant="outlined">
              <DeleteIcon sx={{ fontSize: '1em' }} />
              Remove
            </Button>
          </ButtonGroup>
        ) : (
          <Button onClick={() => onSelect(currentSelectedOfficer)} color="primary" variant="contained">
            Cancel
          </Button>
        )}

        <Button onClick={() => navigate('/officers')}>
          <ManageAccountsIcon sx={{ fontSize: '1em' }} /> Roster
        </Button>
      </DialogActions>
    </Dialog>
  );
};

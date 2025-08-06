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

import { useAppContext } from '../../Context';
import { OFFICERS } from '../../data';
import { OfficerAvatar } from '../../shared';
import { getStringValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';

import { STRUCTURED_FORMATIONS_KEYS } from './structured-formations';

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
          All {showAllOfficers ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </Button>

        {currentSelectedOfficer ? (
          <>
            <Button onClick={() => onSelect(currentSelectedOfficer)} color="success" variant="contained">
              Keep
            </Button>
            <Button onClick={() => onSelect('')} color="error" variant="outlined">
              Remove
            </Button>
          </>
        ) : (
          <Button onClick={() => onSelect(currentSelectedOfficer)} color="success" variant="contained">
            Cancel
          </Button>
        )}

        <Button onClick={() => navigate('/officers')}>Roster</Button>
      </DialogActions>
    </Dialog>
  );
};

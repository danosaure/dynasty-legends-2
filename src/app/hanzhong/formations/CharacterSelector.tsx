import { useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import { getAptitudeById, OFFICERS } from '../../data';
import { assetPath, getStringValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';

import { STRUCTURED_FORMATIONS_KEYS } from './structured-formations';
import { useAppContext } from '../../Context';
import { useMemo } from 'react';

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
            const selectableOpacity = roster[officer.id] ? 1 : 0.6;
            const aptitude = getAptitudeById(officer.aptitudeId);

            return (
              <Grid
                key={officer.id}
                sx={{
                  backgroundColor: aptitude.palette.background.default,
                  opacity: isAlreadyInFormation ? 0.2 : selectableOpacity,
                  borderRadius: '12px',
                }}
              >
                <IconButton
                  sx={{
                    width: '30px',
                    border: `3px solid ${officer.id === currentSelectedOfficer ? theme.palette.success.main : 'transparent'}`,
                  }}
                  onClick={() => onSelect(officer.id)}
                  disabled={isAlreadyInFormation}
                >
                  <Avatar alt={officer.name} src={assetPath(officer.avatar.path)} sx={{ width: '30px', height: '30px' }} />
                </IconButton>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
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

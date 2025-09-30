import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { WrappedIconButton } from '../shared';
import type { ProfilesQueue } from './Queue';
import { getModalContent } from './get-modal-content';

export type ProfileModalProps = {
  profilesQueue: ProfilesQueue;
  onClose: () => void;
  showPrevious: () => void;
};

export const ProfileModal = ({ profilesQueue, onClose, showPrevious }: ProfileModalProps) => {
  const theme = useTheme();

  if (!profilesQueue.length) {
    return null;
  }

  const modalContent = getModalContent(profilesQueue[profilesQueue.length - 1]);

  return (
    <Modal
      open={profilesQueue.length !== 0}
      aria-labelledby="profile-info"
      aria-describedby=""
      onClose={() => onClose()}
      sx={{ maxWidth: 'min(480px, 90vw)', ml: 'auto', mr: 'auto', mt: '20px' }}
    >
      <Grid container direction="column" sx={{ border: '3px solid black' }}>
        <Grid
          container
          direction="row"
          spacing={0}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.common.white,
            bgcolor: theme.palette.common.black,
          }}
        >
          <Grid size="auto" sx={{ width: '40px' }}>
            <WrappedIconButton
              Icon={ArrowBackIcon}
              label="Back"
              onClick={() => showPrevious()}
              sx={{ display: profilesQueue.length > 1 ? 'inline-flex' : 'none' }}
            />
          </Grid>
          <Grid size="grow">
            <Typography variant="body1" id="profile-info">
              {modalContent.title}
            </Typography>
          </Grid>
          <Grid size="auto" sx={{ width: '40px' }}>
            <WrappedIconButton Icon={CloseIcon} label="Close" onClick={() => onClose()} />
          </Grid>
        </Grid>
        <Grid sx={{ p: 1, bgcolor: theme.palette.background.paper }}>{modalContent.jsx}</Grid>
      </Grid>
    </Modal>
  );
};

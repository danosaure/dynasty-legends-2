import Typography from '@mui/material/Typography';
import type { AptitudeType } from '../types';

export type AptitudeProps = {
  aptitude: AptitudeType;
};

export const Aptitude = ({ aptitude }: AptitudeProps) => {
  return <Typography sx={{ fontSize: { xs: '10px', sm: '14px' } }}>Apt {aptitude?.name}</Typography>;
};

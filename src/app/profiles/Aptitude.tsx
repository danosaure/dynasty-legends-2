import Typography from '@mui/material/Typography';
import type { AptitudeType } from '../types';

export type AptitudeProps = {
  aptitude: AptitudeType;
  opacity?: number;
};

export const Aptitude = ({ aptitude, opacity }: AptitudeProps) => {
  return <Typography sx={{ fontSize: { xs: '10px', sm: '14px' }, opacity: opacity ?? 1 }}>Apt {aptitude?.name}</Typography>;
};

import type { SxProps } from '@mui/material/styles';
import type { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export type TerritoryTacticalPointsTypographyProps = {
  color?: TypographyProps['color'];
  children: ReactNode;
};

export const TerritoryTacticalPointsTypography = ({ color, children }: TerritoryTacticalPointsTypographyProps) => {
  const sx: SxProps = { fontSize: { xs: '12px', sm: '14px' } };
  return (
    <Typography color={color} variant="body2" component={'span'} sx={sx}>
      {children}
    </Typography>
  );
};

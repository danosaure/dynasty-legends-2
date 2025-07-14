import type { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { SxProps } from '@mui/material/styles';

export type CardWrapperProps = {
  children: ReactNode;
  sx?: SxProps;
  cardContentSx?: SxProps;
};

export const CardWrapper = ({ children, sx, cardContentSx = { 'p': '5px', '&:last-child': { pb: '1px' } } }: CardWrapperProps) => {
  return (
    <Card elevation={10} sx={sx}>
      <CardContent sx={cardContentSx}>{children}</CardContent>
    </Card>
  );
};

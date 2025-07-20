import type { SxProps } from '@mui/material/styles';
import Typography, { type TypographyOwnProps } from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { FONT_SIZE } from './constants';

export interface WithFontSize {
  fontSize: object;
}

export type TitleTypographyWrapperProps = {
  children: ReactNode;
  sx?: WithFontSize;
  variant?: keyof typeof FONT_SIZE;
  color?: TypographyOwnProps['color'];
};

export const TitleTypographyWrapper = ({ children, variant, sx, color }: TitleTypographyWrapperProps) => {
  const fontSize = {
    ...(variant ? FONT_SIZE[variant] : {}),
    ...sx?.fontSize,
  };

  const mergedSx: SxProps = {
    ...sx,
    fontSize,
  };

  return (
    <Typography sx={mergedSx} fontWeight="fontWeightBold" color={color}>
      {children}
    </Typography>
  );
};

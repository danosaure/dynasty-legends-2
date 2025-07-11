import Grid from '@mui/material/Grid';
import type { ReactNode } from 'react';

export type TerritoryCellProps = {
  children: ReactNode;
};

export const TerritoryCell = ({ children }: TerritoryCellProps) => {
  return <Grid sx={{ width: '100px' }}>{children}</Grid>;
};

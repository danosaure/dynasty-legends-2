import Grid from '@mui/material/Grid';
import type { SxProps } from '@mui/material/styles';

export type HanzhongTechsTechInfoLevelInfoItemProps = {
  label: string;
  value: number;
  bold?: boolean;
};

export const HanzhongTechsTechInfoLevelInfoItem = ({ label, value, bold }: HanzhongTechsTechInfoLevelInfoItemProps) => {
  const fontWeight: SxProps = bold ? { fontWeight: 'bold' } : {};

  return (
    <>
      <Grid size={8} sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontWeight }}>
        {label}:
      </Grid>
      <Grid size={4} sx={{ textAlign: 'right', fontWeight }}>
        {value}
      </Grid>
    </>
  );
};

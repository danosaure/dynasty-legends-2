import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardWrapper, ValueAdjuster } from '../../components';

import { useHanzhongContext } from './HanzhongContext';

export type TerritoryLevelResourceProps = {
  label: string;
  id: string;
};

export const TerritoryLevelResource = ({ label, id }: TerritoryLevelResourceProps) => {
  const { user, onChange } = useHanzhongContext();

  return (
    <CardWrapper sx={{ width: 150 }}>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
        <Typography>{label}</Typography>
        <ValueAdjuster value={user[id] ?? 0} onChange={(newValue: number) => onChange(id, newValue)} />
      </Grid>
    </CardWrapper>
  );
};

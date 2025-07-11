import Typography from '@mui/material/Typography';
import { ValueAdjuster } from '../../components/ValueAdjuster';
import { useHanzhongContext } from './HanzhongContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export type TerritoryLevelResourceProps = {
  label: string;
  id: string;
};

export const TerritoryLevelResource = ({ label, id }: TerritoryLevelResourceProps) => {
  const { user, onChange } = useHanzhongContext();

  return (
    <Card sx={{ width: 150 }} elevation={10}>
      <CardContent sx={{ 'p': 1, '&:last-child': { pb: 1 } }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
          <Typography>{label}</Typography>
          <ValueAdjuster value={user[id] ?? 0} onChange={(newValue: number) => onChange(id, newValue)} />
        </Grid>
      </CardContent>
    </Card>
  );
};

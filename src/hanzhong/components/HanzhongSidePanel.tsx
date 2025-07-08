import Grid from '@mui/material/Grid';
import { ResourceIncomes } from './ResourceIncomes';

export type HanzhongSidePanelProps = {
  onChange: (key: string, newValue: number) => void;
};

export const HanzhongSidePanel = ({ onChange }: HanzhongSidePanelProps) => {
  return (
    <Grid container spacing={2}>
      <ResourceIncomes onChange={onChange} />
    </Grid>
  );
};

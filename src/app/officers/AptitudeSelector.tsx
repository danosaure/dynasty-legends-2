import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import { APTITUDES } from '../data';

export type OfficersAptitudeSelectorProps = {
  selected: string;
  onSelect: (id: string) => void;
};

export const OfficersAptitudeSelector = ({ selected, onSelect }: OfficersAptitudeSelectorProps) => {
  const theme = useTheme();

  return (
    <Grid container sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <ButtonGroup orientation="vertical">
        {APTITUDES.map((aptitude) => (
          <Button
            key={aptitude.name}
            onClick={() => onSelect(aptitude.id === selected ? '' : aptitude.id)}
            variant="outlined"
            sx={{
              backgroundColor: aptitude.color,
              color: theme.palette.text.primary,
              fontWeight: aptitude.id === selected ? 'bold' : 'inherit',
              fontSize: aptitude.id === selected ? '1em' : '0.8em',
            }}
            size="small"
          >
            {aptitude.name}
          </Button>
        ))}
      </ButtonGroup>
    </Grid>
  );
};

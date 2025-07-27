import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

import { APTITUDES } from '../data';

export type OfficersAptitudeSelectorProps = {
  selected: string;
  onSelect: (id: string) => void;
};

export const OfficersAptitudeSelector = ({ selected, onSelect }: OfficersAptitudeSelectorProps) => {
  const theme = useTheme();

  return (
    <Grid container sx={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <ButtonGroup>
        {APTITUDES.map((aptitude) => (
          <Tooltip key={aptitude.name} title={aptitude.name}>
            <Button
              onClick={() => onSelect(aptitude.id === selected ? '' : aptitude.id)}
              variant="outlined"
              sx={{
                backgroundColor: aptitude.color,
                color: theme.palette.text.primary,
                fontWeight: aptitude.id === selected ? 'bold' : 'inherit',
                fontSize: aptitude.id === selected ? '1.3em' : '1em',
              }}
              size="small"
            >
              {aptitude.name}
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Grid>
  );
};

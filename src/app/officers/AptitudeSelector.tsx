import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import { APTITUDES } from '../data';
import Tooltip from '@mui/material/Tooltip';

export type OfficersAptitudeSelectorProps = {
  selected: string;
  onSelect: (id: string) => void;
};

export const OfficersAptitudeSelector = ({ selected, onSelect }: OfficersAptitudeSelectorProps) => {
  const theme = useTheme();

  return (
    <Grid container sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <ButtonGroup orientation="vertical">
        {[...APTITUDES].reverse().map((aptitude) => {
          const isSelected = aptitude.id === selected;
          return (
            <Tooltip key={aptitude.name} title={isSelected ? 'Show All' : `Show Aptitude ${aptitude.name} Only`} placement="right">
              <Button
                onClick={() => onSelect(isSelected ? '' : aptitude.id)}
                variant="outlined"
                sx={{
                  backgroundColor: aptitude.palette.background.default,
                  color: isSelected ? theme.palette.success.main : theme.palette.text.primary,
                  fontWeight: isSelected ? 'bold' : 'inherit',
                }}
                size="small"
              >
                {aptitude.name}
              </Button>
            </Tooltip>
          );
        })}
      </ButtonGroup>
    </Grid>
  );
};

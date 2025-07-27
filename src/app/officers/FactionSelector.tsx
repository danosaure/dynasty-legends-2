import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import { FACTIONS } from '../data';
import { assetPath } from '../utils';

export type OfficersFactionSelectorProps = {
  selected: string;
  onSelect: (id: string) => void;
};

export const OfficersFactionSelector = ({ selected, onSelect }: OfficersFactionSelectorProps) => {
  return (
    <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <ButtonGroup orientation="vertical">
        {FACTIONS.map((faction) => {
          const isSelected = faction.id === selected;
          return (
            <Tooltip key={faction.name} title={isSelected ? 'Show All' : `Show ${faction.name} Only`} placement="right">
              <Button onClick={() => onSelect(isSelected ? '' : faction.id)} variant="text">
                <img
                  src={isSelected ? assetPath(faction.avatar.path) : assetPath(faction.avatar.alt)}
                  alt={faction.name}
                  height={'35px'}
                />
              </Button>
            </Tooltip>
          );
        })}
      </ButtonGroup>
    </Grid>
  );
};

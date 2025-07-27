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
        {FACTIONS.map((faction) => (
          <Tooltip key={faction.name} title={faction.name}>
            <Button onClick={() => onSelect(faction.id === selected ? '' : faction.id)} variant="text">
              <img
                src={faction.id === selected ? assetPath(faction.avatar.path) : assetPath(faction.avatar.alt)}
                alt={faction.name}
                height={'35px'}
              />
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Grid>
  );
};

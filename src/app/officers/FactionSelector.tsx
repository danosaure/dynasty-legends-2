import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import { FACTIONS, getFactionById } from '../data';
import { assetPath } from '../utils';

export type OfficersFactionSelectorProps = {
  selected: string;
  /**
   *
   * @param id ID of faction clicked. If the faction clicked is equal to the one selected, it will return an empty string.
   * @returns
   */
  onSelect: (id: string) => void;
};

export const OfficersFactionSelector = ({ selected, onSelect }: OfficersFactionSelectorProps) => {
  const bgColor = selected === '' ? 'inherit' : getFactionById(selected).color;

  return (
    <Grid container sx={{ backgroundColor: bgColor }}>
      {FACTIONS.map((faction) => (
        <Grid size={3} key={faction.name}>
          <Tooltip title={faction.name}>
            <Button onClick={() => onSelect(faction.id === selected ? '' : faction.id)}>
              <img
                src={faction.id === selected ? assetPath(faction.avatar.path) : assetPath(faction.avatar.alt)}
                alt={faction.name}
                height={'50px'}
              />
            </Button>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

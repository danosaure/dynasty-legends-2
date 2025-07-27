import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import { OFFICER_TYPES } from '../data';
import { assetPath } from '../utils';

export type OfficerssOfficerTypeSelectorProps = {
  selected: string;
  onSelect: (id: string) => void;
};

export const OfficersOfficerTypeSelector = ({ selected, onSelect }: OfficerssOfficerTypeSelectorProps) => {
  return (
    <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <ButtonGroup>
        {OFFICER_TYPES.map((officerType) => (
          <Tooltip key={officerType.name} title={officerType.name}>
            <Button onClick={() => onSelect(officerType.id === selected ? '' : officerType.id)} variant="text">
              <img
                src={officerType.id === selected ? assetPath(officerType.avatar.path) : assetPath(officerType.avatar.alt)}
                alt={officerType.name}
                height={'35px'}
              />
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Grid>
  );
};

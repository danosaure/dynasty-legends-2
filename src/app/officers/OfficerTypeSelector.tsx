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
    <Grid container sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <ButtonGroup orientation="vertical">
        {OFFICER_TYPES.map((officerType) => {
          const isSelected = officerType.id === selected;
          return (
            <Tooltip key={officerType.name} title={isSelected ? 'Show All' : `Show ${officerType.name} Only`} placement="right">
              <Button onClick={() => onSelect(isSelected ? '' : officerType.id)} variant="text">
                <img
                  src={isSelected ? assetPath(officerType.avatar.path) : assetPath(officerType.avatar.alt)}
                  alt={officerType.name}
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

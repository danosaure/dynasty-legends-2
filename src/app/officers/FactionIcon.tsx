import { assetPath } from '../utils';
import type { FactionType } from '../types';
import Tooltip from '@mui/material/Tooltip';

export type FactionIconProps = {
  faction: FactionType;
};

export const FactionIcon = ({ faction }: FactionIconProps) => {
  return (
    <Tooltip title={faction.name} placement="bottom-start">
      <img src={assetPath(faction.avatar.path)} alt={faction.name} height={'100%'} />
    </Tooltip>
  );
};

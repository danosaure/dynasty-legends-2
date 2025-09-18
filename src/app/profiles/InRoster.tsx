import Person4Icon from '@mui/icons-material/Person4';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

import { WrappedIconButton } from '../shared';

export type InRosterProps = {
  inRoster: boolean;
  toggle: () => void;
};

export const InRoster = ({ inRoster, toggle }: InRosterProps) => {
  const rosterData = inRoster
    ? { label: 'Remove from roster', Icon: Person4Icon, onClick: () => toggle() }
    : { label: 'Add to roster', Icon: Person4OutlinedIcon, onClick: () => toggle() };

  return (
    <WrappedIconButton label={rosterData.label} Icon={rosterData.Icon} withTooltip="top-start" small onClick={() => toggle()} />
  );
};

import { NavLink } from 'react-router';
import { HanzhongSidePanelTabsItemLabel } from './side-panel-tabs-item-label';

export type HanzhongSidePanelTabsItemProps = {
  to: string;
  label: string;
};

export const HanzhongSidePanelTabsItem = ({ to, label }: HanzhongSidePanelTabsItemProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none', marginBottom: '0.3em' }}>
      {({ isActive }) => <HanzhongSidePanelTabsItemLabel label={label} isActive={isActive} />}
    </NavLink>
  );
};

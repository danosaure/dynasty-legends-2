import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { generateTabID } from './utils/generate-tab-id';
import { generateTabpanelID } from './utils/generate-tabpanel-id';

export interface SectionTabPanelProps {
  /** Name of the tabs. This will allow defining multiple tabs section on the
   *  page. The given tab should have an id of `tab--${tabsName}--${tabName}`.
   */
  tabsName: string;

  /** Name of the current tab inside the tabs group. The given tab should have
   *  an id of `tab--${tabsName}--${tabName}`.
   */
  tabName: string;

  /** Name of the selected tabName within a tab group. */
  selectedTabName: string;

  /** Node children. */
  children?: ReactNode;
}

export const SectionTabpanel = ({ tabsName, tabName, selectedTabName, children, ...other }: SectionTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={tabName !== selectedTabName}
      id={generateTabpanelID(tabsName, tabName)}
      aria-labelledby={generateTabID(tabsName, tabName)}
      {...other}
    >
      {tabName === selectedTabName && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
};

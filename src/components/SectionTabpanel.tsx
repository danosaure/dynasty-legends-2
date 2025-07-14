import type { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { generateTabID } from './utils/generate-tab-id';
import { generateTabpanelID } from './utils/generate-tabpanel-id';

export type SectionTabpanelProps = {
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
};

export const SectionTabpanel = ({ tabsName, tabName, selectedTabName, children, ...other }: SectionTabpanelProps) => {
  let sectionTabpanelContent = null;
  if (tabName === selectedTabName) {
    sectionTabpanelContent = (
      <Box sx={{ p: 1 }}>
        <Grid container size={{ xs: 12 }} spacing={2}>
          {children}
        </Grid>
      </Box>
    );
  }

  return (
    <div
      role="tabpanel"
      hidden={tabName !== selectedTabName}
      id={generateTabpanelID(tabsName, tabName)}
      aria-labelledby={generateTabID(tabsName, tabName)}
      {...other}
    >
      {sectionTabpanelContent}
    </div>
  );
};

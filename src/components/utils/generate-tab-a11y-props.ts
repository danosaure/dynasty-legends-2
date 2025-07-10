import { generateTabID } from './generate-tab-id';
import { generateTabpanelID } from './generate-tabpanel-id';

export const generateTabA11yProps = (tabsName: string, tabName: string) => ({
  'id': generateTabID(tabsName, tabName),
  'aria-controls': generateTabpanelID(tabsName, tabName),
});

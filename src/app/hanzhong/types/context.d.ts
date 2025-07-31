import type { HanzhongContextGetSection } from './context-get-section';
import type { HanzhongContextGetStringValue } from './context-get-string-value';
import type { HanzhongContextGetValue } from './context-get-value';
import type { HanzhongContextOnChange } from './context-on-change';
import type { HanzhongBonusType } from './hanzhong-bonus-type';

export type HanzhongContextType = {
  bonuses: HanzhongBonusType;
  getValue: HanzhongContextGetValue;
  getSection: HanzhongContextGetSection;
  getStringValue: HanzhongContextGetStringValue;
  onChange: HanzhongContextOnChange;
};

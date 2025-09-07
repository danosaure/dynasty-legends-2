import type { HanzhongRequirementResponse } from '../../requirements';

export const infoRequirementTextColor = (check: HanzhongRequirementResponse): string =>
  check.satisfied || check.value === 0 ? 'success' : 'error';

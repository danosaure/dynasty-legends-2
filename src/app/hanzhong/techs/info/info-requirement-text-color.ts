import type { HanzhongRequirementResponse } from '../../requirements';

export const infoRequirementTextColor = (check: HanzhongRequirementResponse): string => (check.satisfied ? 'success' : 'error');

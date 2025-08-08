import type { HanzhongUserDataType } from '../../types';
import type { HanzhongRequirement } from '../HanzhongRequirement';
import type { HanzhongRequirementCheckResult } from '../RequirementCheckResult';
import type { RequirementsCache } from '../RequirementsCache';

export type RequirementValidator = (
  userData: HanzhongUserDataType,
  requirement: HanzhongRequirement,
  requirementsCache: RequirementsCache
) => HanzhongRequirementCheckResult;

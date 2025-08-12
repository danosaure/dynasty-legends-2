import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirementsCache } from './Cache';
import type { HanzhongRequirementCheckResult } from './CheckResult';
import type { HanzhongRequirement } from './Requirement';

export type HanzhongRequirementValidator = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: HanzhongRequirementsCache
) => HanzhongRequirementCheckResult;

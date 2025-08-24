import type { HanzhongRequirementCheckResult } from './CheckResult';

export type ValidatorResponses = Record<string, Omit<HanzhongRequirementCheckResult, 'requirement'>>;

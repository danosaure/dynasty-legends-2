import { sanitizeId } from '../../../../utils';

export const warTierIdByName = (name: string): string => `hanzhong--war-tier--${sanitizeId(name)}`;

export const warTierTaskIdByName = (name: string): string => `hanzhong--war-tier-task--${sanitizeId(name)}`;

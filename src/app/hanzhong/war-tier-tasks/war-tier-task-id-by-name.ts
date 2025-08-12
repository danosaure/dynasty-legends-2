import { sanitizeId } from '../../../utils';

export const warTierTaskIdByName = (name: string): string => `hanzhong--war-tier-task--${sanitizeId(name)}`;

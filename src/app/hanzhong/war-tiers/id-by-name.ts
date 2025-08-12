import { sanitizeId } from '../../../utils';

export const warTierIdByName = (name: string): string => `hanzhong--war-tier--${sanitizeId(name)}`;

import { sanitizeId } from '../../../../utils';

export const cityIdByName = (name: string): string => `hanzhong--city--${sanitizeId(name)}`;

import { sanitizeId } from '../../../utils';

export const generateKey = (section: string, id: string): string => `${sanitizeId(section)}--${sanitizeId(id)}`;

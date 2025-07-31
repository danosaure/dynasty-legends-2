export const sanitizeId = (id: string): string => id.toLowerCase().replaceAll(' ', '-').replaceAll(/---+/g, '--');

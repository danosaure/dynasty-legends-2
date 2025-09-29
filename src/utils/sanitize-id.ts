export const sanitizeId = (id: string): string =>
  id
    .toLowerCase()
    .replaceAll(/[^0-9a-z]/g, '-')
    .replaceAll(/---+/g, '--');

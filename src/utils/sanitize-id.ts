export const sanitizeId = (id: string): string =>
  id
    .toLowerCase()
    .replaceAll(/[ \\.]/g, '-')
    .replaceAll(/---+/g, '--');

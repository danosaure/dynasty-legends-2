export const assetPath = (path: string | undefined): string => `${import.meta.env.BASE_URL}assets/${path ?? ''}`;

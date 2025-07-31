const __cache: Record<string, number> = {};

export const calculateTimeNeededForResource = (
  currentInventory: number,
  quantityNeeded: number,
  productionRate: number
): number | null => {
  if (currentInventory > quantityNeeded) {
    return 0;
  }

  if (productionRate === 0) {
    // Would never reach.
    return null;
  }

  const deltaNeeded = quantityNeeded - currentInventory;

  const cacheKey = `${deltaNeeded}|${productionRate}`;
  const cachedValue = __cache[cacheKey];
  if (cachedValue !== undefined) {
    return cachedValue;
  }

  const timeNeeded = Math.ceil((deltaNeeded * 60) / productionRate);
  __cache[cacheKey] = timeNeeded;
  return timeNeeded;
};

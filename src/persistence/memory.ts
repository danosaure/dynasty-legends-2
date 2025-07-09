const STORAGE: Record<string, number> = {};

export const getCurrentValues = async (): Promise<Record<string, number>> => {
  return {
    ...STORAGE,
  };
};

export const updateValue = async (key: string, newValue: number): Promise<void> => {
  STORAGE[key] = newValue;
};

export const getValue = async (key: string): Promise<number> => {
  return STORAGE[key] ?? 0;
};

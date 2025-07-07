import Grid from '@mui/material/Grid';

import { ResourceIncome } from './ResourceIncome';

export interface ResourceIncomesProps {
  /** Current selected values. */
  currentSelections: Record<string, number>;
  /**
   * When the user modifies the value.
   *
   * @param resourceIncomeKey Key to be used within `currentSelections`.
   * @param newValue Value entered by the user.
   * @returns
   */
  onChange: (resourceIncomeKey: string, newValue: number) => void;
}

export const ResourceIncomes = ({ currentSelections, onChange }: ResourceIncomesProps) => {
  const LUMBER_KEY = 'resource-income--lumber';
  const GRAINS_KEY = 'resource-income--grains';
  const IRON_KEY = 'resource-income--iron';

  return (
    <Grid container spacing={1} direction="column">
      <ResourceIncome
        value={currentSelections[LUMBER_KEY] ?? 0}
        label="Lumber"
        onChange={(newValue: number) => onChange(LUMBER_KEY, newValue)}
      />

      <ResourceIncome
        value={currentSelections[GRAINS_KEY] ?? 0}
        label="Grains"
        onChange={(newValue: number) => onChange(GRAINS_KEY, newValue)}
      />

      <ResourceIncome
        value={currentSelections[IRON_KEY] ?? 0}
        label="Grains"
        onChange={(newValue: number) => onChange(IRON_KEY, newValue)}
      />
    </Grid>
  );
};

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ResourceIncome } from './ResourceIncome';
import { useHanzhongContext } from './HanzhongContext';
import { getUserDataValueByKey } from './utils/get-user-data-value-by-key';

export interface ResourceIncomesProps {
  /**
   * When the user modifies the value.
   *
   * @param resourceIncomeKey Key to be used within `currentSelections`.
   * @param newValue Value entered by the user.
   * @returns
   */
  onChange: (resourceIncomeKey: string, newValue: number) => void;
}

export const ResourceIncomes = ({ onChange }: ResourceIncomesProps) => {
  const hanzhongContextData = useHanzhongContext();
  const currentSelections = hanzhongContextData.usersData.DEFAULT;

  const LUMBER_KEY = 'resource-income--lumber';
  const GRAINS_KEY = 'resource-income--grains';
  const IRON_KEY = 'resource-income--iron';

  const lumber = getUserDataValueByKey(hanzhongContextData, LUMBER_KEY);
  console.log('lumber:', 'getUserDataValueByKey()=', lumber, ' ; direct=', currentSelections[LUMBER_KEY] ?? 0);

  return (
    <Grid container spacing={1} direction="column">
      <Typography>Resource Income</Typography>
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

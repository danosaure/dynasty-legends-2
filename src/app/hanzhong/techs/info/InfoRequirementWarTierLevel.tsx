import Typography from '@mui/material/Typography';
import type { HanzhongWarTierRequirement } from '../../war-tiers';
import type { HanzhongRequirementResponse } from '../../requirements';

export type HanzhongTechInfoRequirementWarTierLevelProps = {
  requirement: HanzhongWarTierRequirement;
  check: HanzhongRequirementResponse;
};

export const HanzhongTechInfoRequirementWarTierLevel = ({ requirement, check }: HanzhongTechInfoRequirementWarTierLevelProps) => {
  const color = check.satisfied || check.value === 0 ? 'success' : 'error';
  return (
    <>
      <Typography color={color} display="inline" fontWeight="bold">
        War Tier
      </Typography>
      <Typography display="inline"> Lv.</Typography>
      <Typography display="inline" fontWeight="bold" color={color}>
        {requirement.level + 1}
      </Typography>
    </>
  );
};

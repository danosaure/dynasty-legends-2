import Typography from '@mui/material/Typography';
import type { HanzhongWarTierRequirement } from '../../war-tiers';

export type HanzhongTechInfoRequirementWarTierLevelProps = {
  requirement: HanzhongWarTierRequirement;
  color: string;
};

export const HanzhongTechInfoRequirementWarTierLevel = ({ requirement, color }: HanzhongTechInfoRequirementWarTierLevelProps) => {
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

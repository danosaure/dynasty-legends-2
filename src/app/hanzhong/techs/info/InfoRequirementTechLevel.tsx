import Typography from '@mui/material/Typography';
import type { HanzhongTechLevelRequirement } from '../requirements';
import type { HanzhongRequirementResponse } from '../../requirements';
import { infoRequirementTextColor } from './info-requirement-text-color';

export type HanzhongTechInfoRequirementTechLevelProps = {
  requirement: HanzhongTechLevelRequirement;
  check: HanzhongRequirementResponse;
};

export const HanzhongTechInfoRequirementTechLevel = ({ requirement, check }: HanzhongTechInfoRequirementTechLevelProps) => {
  const color = infoRequirementTextColor(check);

  return (
    <>
      <Typography color={color} display="inline" fontWeight="bold">
        {requirement.techName}
      </Typography>
      <Typography display="inline"> upgraded to Lv.</Typography>
      <Typography color={color} display="inline" fontWeight="bold">
        {requirement.level}
      </Typography>{' '}
      (
      <Typography color={color} display="inline">
        {check.value}
      </Typography>
      <Typography color="info" display={'inline'}>
        /{check.expected}
      </Typography>
      )
    </>
  );
};

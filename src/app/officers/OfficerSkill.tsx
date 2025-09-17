import Tooltip from '@mui/material/Tooltip';
import type { OfficerTypeType } from '../types';
import { assetPath } from '../utils';

export type OfficerSkillProps = {
  officerSkill: OfficerTypeType;
};

export const OfficerSkill = ({ officerSkill }: OfficerSkillProps) => {
  return (
    <Tooltip title={officerSkill.name} placement="top-start">
      <img src={assetPath(officerSkill.avatar.path)} alt={officerSkill.name} height={'100%'} />
    </Tooltip>
  );
};

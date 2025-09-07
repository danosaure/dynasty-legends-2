import Typography from '@mui/material/Typography';
import type { HanzhongRequirement } from '../../requirements';
import type { ReactNode } from 'react';

const LABEL_BY_SECTION: Record<string, string> = {
  techs: 'Tech',
  wartier: 'War Tier',
} as const;

export type HanzhongTechInfoRequirementWrapperProps = {
  requirement: HanzhongRequirement;
  children: ReactNode;
};

export const HanzhongTechInfoRequirementWrapper = ({ requirement, children }: HanzhongTechInfoRequirementWrapperProps) => {
  return (
    <Typography textAlign="center">
      <Typography display="inline">Required: {LABEL_BY_SECTION[requirement.section]}: </Typography>
      {children}
    </Typography>
  );
};

import Typography from '@mui/material/Typography';
import { type HanzhongRequirement } from '../../requirements';

const LABEL_BY_SECTION: Record<string, string> = {
  techs: 'Tech',
} as const;

export type HanzhongTechsTechInfoRequirementsProps = {
  requirements: HanzhongRequirement[] | undefined;
};

export const HanzhongTechsTechInfoRequirements = ({ requirements }: HanzhongTechsTechInfoRequirementsProps) => {
  if (!requirements || !requirements.length) {
    return null;
  }
  return requirements.map((requirement) => {
    return (
      <Typography key={`${requirement.section}--${requirement.type}`} textAlign="center">
        Required {LABEL_BY_SECTION[requirement.section]}:
      </Typography>
    );
  });
};

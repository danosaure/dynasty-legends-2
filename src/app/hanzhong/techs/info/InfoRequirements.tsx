import Typography from '@mui/material/Typography';
import { type HanzhongRequirement, type HanzhongRequirementResponse } from '../../requirements';
import { useHanzhongContext } from '../../HanzhongContext';

const LABEL_BY_SECTION: Record<string, string> = {
  techs: 'Tech',
} as const;

const requirementInfo = (requirement: HanzhongRequirement, check: HanzhongRequirementResponse) => {
  if (requirement.section === 'techs') {
    if (requirement.type === 'level') {
      return (
        <>
          <Typography color="error" display="inline" fontWeight="bold">
            {requirement.techName}
          </Typography>
          <Typography display="inline"> upgraded to Lv.</Typography>
          <Typography color="error" display="inline" fontWeight="bold">
            {requirement.level}
          </Typography>{' '}
          (
          <Typography color="error" display="inline">
            {check.value}
          </Typography>
          <Typography color="info" display={'inline'}>
            /{check.expected}
          </Typography>
          )
        </>
      );
    }
  }
};

export type HanzhongTechsTechInfoRequirementsProps = {
  requirements: HanzhongRequirement[] | undefined;
};

export const HanzhongTechsTechInfoRequirements = ({ requirements }: HanzhongTechsTechInfoRequirementsProps) => {
  const { cache } = useHanzhongContext();

  if (!requirements || !requirements.length) {
    return null;
  }
  return requirements.map((requirement) => {
    console.log(`<HanzhongTechsTechInfoRequirements>: cache=`, cache);
    const check = cache.requirements[requirement.id];

    if (check && check.satisfied) {
      return null;
    }

    return (
      <Typography key={`${requirement.section}--${requirement.type}`} textAlign="center">
        Required {LABEL_BY_SECTION[requirement.section]}: {requirementInfo(requirement, check)}
      </Typography>
    );
  });
};

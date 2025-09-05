import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';
import { assetPath, getNumberValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongTechsTech } from '../techs';

import { HanzhongWarTierTask } from './WarTierTask';
import type { HanzhongWarTierType } from './WarTierType';
import { checkRequirement, isHanzhongWarTierRequirementCompleted, isHanzhongWarTierRequirementInactive } from './requirements';
import { useTheme } from '@mui/material/styles';

export type HanzhongWarTierProps = {
  warTier: HanzhongWarTierType;
  techs?: boolean;
};

export const HanzhongWarTier = ({ warTier, techs }: HanzhongWarTierProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();

  const content = techs
    ? warTier.techs.map((tech) => <HanzhongTechsTech key={tech.id} info={tech} value={getNumberValue(user, tech.id)} />)
    : warTier.tasks.map((task) => <HanzhongWarTierTask key={task.label} task={task} />);

  const check = checkRequirement(warTier, user, cache.requirements);
  let opacity = 1;
  let checkColor: string = 'transparent';
  if (isHanzhongWarTierRequirementCompleted(check)) {
    checkColor = theme.palette.success.main;
  } else if (isHanzhongWarTierRequirementInactive(check)) {
    checkColor = theme.palette.error.main;
    opacity = 0.5;
  }

  return (
    <PaperWrapper sx={{ border: `3px solid ${checkColor}`, backgroundColor: warTier.bg, opacity }}>
      <Grid
        container
        spacing={0}
        sx={{ p: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Grid sx={{ width: '70px' }}>
          <img src={assetPath(warTier.icon.path)} alt={warTier.id} style={{ maxWidth: '90%', maxHeight: '100px', opacity: 0.9 }} />
        </Grid>

        <Grid container size="grow" spacing={0.5} direction="column" sx={{ width: '100%' }}>
          {content}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

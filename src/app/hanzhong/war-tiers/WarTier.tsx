import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';
import { assetPath, getNumberValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongTechsTech } from '../techs';

import { HanzhongWarTierTask } from './WarTierTask';
import type { HanzhongWarTierType } from './WarTierType';
import { checkRequirement, isHanzhongWarTierRequirementInactive } from './requirements';

export type HanzhongWarTierProps = {
  warTier: HanzhongWarTierType;
  techs?: boolean;
};

export const HanzhongWarTier = ({ warTier, techs }: HanzhongWarTierProps) => {
  const { user, cache } = useHanzhongContext();

  const content = techs
    ? warTier.techs.map((tech) => <HanzhongTechsTech key={tech.id} info={tech} value={getNumberValue(user, tech.id)} />)
    : warTier.tasks.map((task) => <HanzhongWarTierTask key={task.label} task={task} />);

  const check = checkRequirement(warTier, user, cache.requirements);
  let opacity = 1;
  if (isHanzhongWarTierRequirementInactive(check)) {
    opacity = 0.5;
  }

  return (
    <PaperWrapper sx={{ backgroundColor: warTier.bg, opacity }}>
      <Grid
        container
        spacing={0}
        sx={{ p: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Grid sx={{ pr: 1, width: '70px' }}>
          <img src={assetPath(warTier.icon.path)} alt={warTier.id} style={{ maxWidth: '100%', maxHeight: '100px', opacity: 0.9 }} />
        </Grid>

        <Grid container size="grow" spacing={0.5} direction={techs ? 'row' : 'column'} sx={{ width: '100%' }}>
          {content}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../../shared';
import { assetPath, getNumberValue } from '../../utils';
import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongTechsTech } from '../techs';

import { HanzhongWarTierTask } from './WarTierTask';
import type { HanzhongWarTierType } from './WarTierType';

export type HanzhongWarTierProps = {
  warTier: HanzhongWarTierType;
  techs?: boolean;
};

export const HanzhongWarTier = ({ warTier, techs }: HanzhongWarTierProps) => {
  const { user } = useHanzhongContext();

  const content = techs
    ? warTier.techs.map((tech) => <HanzhongTechsTech key={tech.id} info={tech} value={getNumberValue(user, tech.id)} />)
    : warTier.tasks.map((task) => <HanzhongWarTierTask key={task.label} task={task} />);

  return (
    <PaperWrapper>
      <Grid
        container
        spacing={0}
        sx={{ backgroundColor: warTier.bg, p: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}
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

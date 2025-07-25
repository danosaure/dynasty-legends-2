import { useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../shared';

import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongResourcesBar } from '../resources-timers';

import { NO_TECH_ID } from './constants';
import { HanzhongTechsContext, type HanzhongTechsContextType } from './context';
import { HanzhongTechsWarTier } from './HanzhongTechsWarTier';
import { HanzhongTechsTechInfo } from './info';

export const HanzhongTechs = () => {
  const { hanzhong } = useHanzhongContext();

  const [techId, setTechId] = useState<string>(NO_TECH_ID);

  const displayTechId = (techId: string): void => {
    setTechId(techId);
  };

  const hideTechId = (): void => {
    setTechId(NO_TECH_ID);
  };

  const context: HanzhongTechsContextType = useMemo(
    () =>
      ({
        techId: techId,
        displayTechId,
        hideTechId,
      } as const),
    [techId]
  );

  return (
    <HanzhongTechsContext.Provider value={context}>
      <Grid container size={12}>
        <TitleTypographyWrapper variant="TITLE">Techs</TitleTypographyWrapper>
      </Grid>
      <Grid size={12}>
        <HanzhongResourcesBar />
      </Grid>
      {hanzhong.warTiers.map((hanzhongWarTier) => (
        <HanzhongTechsWarTier key={hanzhongWarTier.id} info={hanzhongWarTier} />
      ))}

      <HanzhongTechsTechInfo onClose={hideTechId} />
    </HanzhongTechsContext.Provider>
  );
};

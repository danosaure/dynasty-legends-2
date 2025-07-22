import { useMemo, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../shared';

import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongResourcesBar } from '../resources-timers';

import { NO_TECH_ID } from './constants';
import { HanzhongTechsContext, type HanzhongTechsContextType } from './context';
import { HanzhongTechsWarTier } from './HanzhongTechsWarTier';

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
        techId: NO_TECH_ID,
        displayTechId,
        hideTechId,
      } as const),
    []
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

      <Dialog open={techId !== NO_TECH_ID} onClose={() => hideTechId()}>
        TODO: Put dialog content here for {techId}
      </Dialog>
    </HanzhongTechsContext.Provider>
  );
};

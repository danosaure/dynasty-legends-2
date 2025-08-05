import { useState } from 'react';
import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../../shared';

import { HanzhongFormationsFormation } from './Formation';
import { STRUCTURED_FORMATIONS } from './structured-formations';
import { HanzhongFormationsCharacterSelector } from './CharacterSelector';
import { useHanzhongContext } from '../HanzhongContext';
import { getStringValue } from '../../utils';

export const HanzhongFormations = () => {
  const { onChangeFormations, formationsUserData } = useHanzhongContext();

  const [formationCharacterId, setFormationCharacterId] = useState<string>('');

  const onSelect = (newFormationCharacterId: string): void => {
    if (newFormationCharacterId !== getStringValue(formationsUserData, formationCharacterId)) {
      onChangeFormations(formationCharacterId, newFormationCharacterId);
    }
    setFormationCharacterId('');
  };

  return (
    <Grid container direction={'column'}>
      <TitleTypographyWrapper variant="TITLE">Formations</TitleTypographyWrapper>
      <Grid container spacing={2} direction={'column'}>
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.vanguardCamp} onClick={setFormationCharacterId} />
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.valiantCavalry} onClick={setFormationCharacterId} />
        <HanzhongFormationsFormation formation={STRUCTURED_FORMATIONS.royalGuards} onClick={setFormationCharacterId} />
      </Grid>
      <HanzhongFormationsCharacterSelector formationCharacterId={formationCharacterId} onSelect={onSelect} />
    </Grid>
  );
};

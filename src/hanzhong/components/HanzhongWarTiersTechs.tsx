import { TitleTypographyWrapper } from '../../components';

import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';
import { useHanzhongContext } from './HanzhongContext';

export const HanzhongWarTiersTechs = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <>
      <TitleTypographyWrapper variant="TITLE">Techs</TitleTypographyWrapper>
      {hanzhong.warTiers.map((hanzhongWarTier) => (
        <HanzhongWarTierTechs key={hanzhongWarTier.id} info={hanzhongWarTier} />
      ))}
    </>
  );
};

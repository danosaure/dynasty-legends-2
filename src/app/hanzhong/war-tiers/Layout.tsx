import { TitleTypographyWrapper } from '../../shared';
import { HANZHONG_WAR_TIERS } from './war-tiers--data';
import { HanzhongWarTier } from './WarTier';

export const HanzhongWarTiersLayout = () => {
  return (
    <>
      <TitleTypographyWrapper variant="TITLE">War Tiers</TitleTypographyWrapper>

      {HANZHONG_WAR_TIERS.map((warTier) => (
        <HanzhongWarTier key={warTier.id} warTier={warTier} />
      ))}
    </>
  );
};

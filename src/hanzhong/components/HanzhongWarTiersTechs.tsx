import { HanzhongWarTierTechs } from './HanzhongWarTierTechs';
import { useHanzhongContext } from './HanzhongContext';

export const HanzhongWarTiersTechs = () => {
  const { hanzhong } = useHanzhongContext();

  return hanzhong.warTiers.map((hanzhongWarTier) => <HanzhongWarTierTechs key={hanzhongWarTier.id} info={hanzhongWarTier} />);
};

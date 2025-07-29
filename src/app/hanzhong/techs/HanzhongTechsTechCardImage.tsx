import { assetPath } from '../../utils';

export type HanzhongTechsTechCardImageProps = {
  assetImage: string;
};

export const HanzhongTechsTechCardImage = ({ assetImage }: HanzhongTechsTechCardImageProps) => {
  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: 0.9,
  };

  return <img src={assetPath(assetImage)} alt={assetImage} style={imgStyle} />;
};

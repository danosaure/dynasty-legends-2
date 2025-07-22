export type HanzhongTechsTechCardImageProps = {
  assetImage: string;
};

export const HanzhongTechsTechCardImage = ({ assetImage }: HanzhongTechsTechCardImageProps) => {
  const src = `${import.meta.env.BASE_URL}assets/${assetImage}`;
  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: 0.9,
  };

  return <img src={src} alt={assetImage} style={imgStyle} />;
};

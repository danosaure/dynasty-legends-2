export type HanzhongTechCardImageProps = {
  assetImage: string;
};

export const HanzhongTechCardImage = ({ assetImage }: HanzhongTechCardImageProps) => {
  const src = `${import.meta.env.BASE_URL}assets/${assetImage}`;
  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: 0.9,
  };

  return <img src={src} alt={assetImage} style={imgStyle} />;
};

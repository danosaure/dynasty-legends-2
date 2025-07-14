export type BasicCardImageProps = {
  assetImage: string;
};

export const BasicCardImage = ({ assetImage }: BasicCardImageProps) => {
  const src = `${import.meta.env.BASE_URL}assets/${assetImage}`;
  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: 1,
  };

  return <img src={src} alt={assetImage} style={imgStyle} />;
};

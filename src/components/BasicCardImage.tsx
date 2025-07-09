export interface BasicCardImageProps {
  assetImage: string;
}

export const BasicCardImage = ({ assetImage }: BasicCardImageProps) => {
  const src = `${import.meta.env.BASE_URL}assets/${assetImage}`;
  const imgStyle = {
    maxWidth: '75%',
    maxHeight: '75%',
  };

  return <img src={src} alt={assetImage} style={imgStyle} />;
};

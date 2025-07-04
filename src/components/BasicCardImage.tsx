import { styled } from '@mui/material/styles';

export interface BasicCardImageProps {
  assetImage: string;
}

const PREFIX = 'BasicCardImage';

const classes = {
  center: `${PREFIX}--center`,
};

const Root = styled('div')(() => ({
  [`&.${classes.center}`]: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  img: {
    maxWidth: '90%',
    maxHeight: '90%',
  },
}));

export const BasicCardImage = ({ assetImage }: BasicCardImageProps) => {
  return (
    <Root className={classes.center}>
      <img src={`/assets/${assetImage}`} alt={assetImage} />
    </Root>
  );
};

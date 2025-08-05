import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardWrapper, ValueAdjuster, WrappedIconButton } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongEstimatedTime } from '../resources-timers';

import { HanzhongTechsTechCardImage } from './HanzhongTechsTechCardImage';
import { useHanzhongTechsContext } from './context';

export type HanzhongTechsTechCardProps = {
  id: string;
  assetImage: string;
  label: string;
  value: number;
  maxValue: number;
};

export const HanzhongTechsTechCard = ({ id, assetImage, label, value, maxValue }: HanzhongTechsTechCardProps) => {
  const { onChange } = useHanzhongContext();
  const { displayTechId } = useHanzhongTechsContext();

  return (
    <CardWrapper
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: { xs: '180px', md: '125px' },
      }}
      cardContentSx={{ 'p': '5px', '&:last-child': { pb: '1px' } }}
    >
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid
          size={{ xs: 'auto', md: 12 }}
          sx={{ width: { xs: '40px', md: '120px' }, pl: { md: '20px' }, pr: { md: '20px' }, pt: { md: '5px' } }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ width: { xs: '36px', md: '80px' }, textAlign: 'center' }}>
              <HanzhongTechsTechCardImage assetImage={assetImage} />
            </Box>
            <HanzhongEstimatedTime id={id} />
            <Box
              sx={{
                p: 0,
                position: 'absolute',
                top: { xs: -12, md: -10 },
                borderRadius: '20px',
                lineHeight: 0,
                left: { xs: -12, md: -15 },
              }}
            >
              <WrappedIconButton label="Show details" Icon={InfoOutlineIcon} onClick={() => displayTechId(id)} small />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 'grow', md: 12 }}>
          <ValueAdjuster value={value} maxValue={maxValue} onChange={(newValue: number) => onChange(id, newValue)} />
          <Typography sx={{ textAlign: 'center', fontSize: { xs: '9px', md: '13px' } }}>{label}</Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

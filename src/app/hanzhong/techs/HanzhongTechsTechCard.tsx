import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardWrapper, ValueAdjuster } from '../../shared';

import { useHanzhongContext } from '../HanzhongContext';
import { HanzhongEstimatedTime } from '../resources-timers';
import { HanzhongTechCardImage } from '../tech-card-image';

export type HanzhongTechsTechCardProps = {
  id: string;
  assetImage: string;
  label: string;
  value: number;
  maxValue: number;
};

export const HanzhongTechsTechCard = ({ id, assetImage, label, value, maxValue }: HanzhongTechsTechCardProps) => {
  const { onChange } = useHanzhongContext();

  return (
    <CardWrapper
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: { xs: '180px', md: '130px', lg: '150px' },
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
              <HanzhongTechCardImage assetImage={assetImage} />
            </Box>
            <HanzhongEstimatedTime id={id} />
          </Box>
        </Grid>
        <Grid size={{ xs: 'grow', md: 12 }}>
          <ValueAdjuster value={value} maxValue={maxValue} onChange={(newValue: number) => onChange(id, newValue)} />
          <Typography sx={{ textAlign: 'center' }} variant="body2">
            {label}
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

import Typography from '@mui/material/Typography';
import type { OfficerType, OfficerTypeType } from '../types';
import { getAptitudeById, getFactionById, getOfficerTypeById } from '../data';
import { CardWrapper } from '../shared';
import Grid from '@mui/material/Grid';
import { assetPath } from '../utils';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

export type OfficerCardProps = {
  officer: OfficerType;
  selectedFaction: string;
  selectedAptitude: string;
  selectedOfficerType: string;
};

export const OfficerCard = ({ officer, selectedFaction, selectedAptitude, selectedOfficerType }: OfficerCardProps) => {
  const faction = getFactionById(officer.factionId);
  const aptitude = getAptitudeById(officer.aptitudeId);
  const officerTypes: OfficerTypeType[] = officer.officerTypeIds.map<OfficerTypeType>((officerTypeId) =>
    getOfficerTypeById(officerTypeId)
  );

  const isVisible =
    (selectedFaction === '' || selectedFaction === officer.factionId) &&
    (selectedAptitude === '' || selectedAptitude === officer.aptitudeId) &&
    (selectedOfficerType === '' || officer.officerTypeIds.includes(selectedOfficerType));

  const opacity = isVisible ? 1 : 0.2;

  return (
    <CardWrapper sx={{ backgroundColor: aptitude?.color, opacity }}>
      <Grid container size={12} spacing={1}>
        <Grid size="auto">
          <Box sx={{ width: '100%', maxWidth: { xs: '30px', sm: '50px' } }}>
            <img src={assetPath(officer.avatar.path)} alt={officer.name} width="100%" />
          </Box>
        </Grid>
        <Grid size="grow" container direction={'row'} spacing={0}>
          <Grid size={3}>
            <Tooltip title={faction?.name}>
              <Box sx={{ height: { xs: '17px', sm: '25px' } }}>
                <img src={assetPath(faction?.avatar.path)} alt={faction?.name} height={'100%'} />
              </Box>
            </Tooltip>
          </Grid>
          <Grid size={4}>
            <Typography sx={{ backgroundColor: aptitude?.color, fontSize: { xs: '10px', sm: '14px' } }}>
              Apt {aptitude?.name}
            </Typography>
          </Grid>
          <Grid size={5} container spacing={0.7} sx={{ alignContent: 'center', justifyContent: 'flex-end' }}>
            {officerTypes.map((officerType) => (
              <Box key={officerType.name} sx={{ height: { xs: '16px', sm: '20px', md: '24px' } }}>
                <Tooltip title={officerType?.name}>
                  <img src={assetPath(officerType?.avatar.path)} alt={officerType?.name} height={'100%'} />
                </Tooltip>
              </Box>
            ))}
          </Grid>
          <Grid size={12}>
            <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>{officer.name}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

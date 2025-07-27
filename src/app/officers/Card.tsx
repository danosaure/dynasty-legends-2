import Typography from '@mui/material/Typography';
import type { OfficerType } from '../types';
import { getAptitudeById, getFactionById, getOfficerTypeById } from '../data';
import { CardWrapper } from '../shared';
import Grid from '@mui/material/Grid';
import { assetPath } from '../utils';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

export type OfficerCardProps = {
  officer: OfficerType;
  selectedFaction: string;
};

export const OfficerCard = ({ officer, selectedFaction }: OfficerCardProps) => {
  const faction = getFactionById(officer.factionId);
  const aptitude = getAptitudeById(officer.aptitudeId);
  const officerTypes = officer.officerTypeIds.map((officerTypeId) => getOfficerTypeById(officerTypeId));

  const isVisible = selectedFaction === '' || selectedFaction === officer.factionId;

  const opacity = isVisible ? 1 : 0.2;

  return (
    <CardWrapper sx={{ backgroundColor: aptitude?.color, opacity }}>
      <Grid container size={12} spacing={1}>
        <Grid size="auto">
          <Box sx={{ width: '100%', maxWidth: '50px' }}>
            <img src={assetPath(officer.avatar.path)} alt={officer.name} width="100%" />
          </Box>
        </Grid>
        <Grid size="grow" container direction={'column'} spacing={0}>
          <Grid>
            <Typography>{officer.name}</Typography>
          </Grid>
          <Grid container direction={'row'} spacing={2}>
            <Typography sx={{ backgroundColor: aptitude?.color }}>Aptitude {aptitude?.name}</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={3}>
              <Tooltip title={faction?.name}>
                <img src={assetPath(faction?.avatar.path)} alt={faction?.name} height={'25px'} />
              </Tooltip>
            </Grid>
            {officerTypes.map((officerType) => (
              <Grid size={3} key={officerType?.name}>
                <Tooltip title={officerType?.name}>
                  <img src={assetPath(officerType?.avatar.path)} alt={officerType?.name} height={'20px'} />
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

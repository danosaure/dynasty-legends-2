import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { OfficerType } from '../types';
import { getAptitudeById, getFactionById, getOfficerTypeById } from '../data';

export type OfficerCardProps = {
  officer: OfficerType;
};

export const OfficerCard = ({ officer }: OfficerCardProps) => {
  const faction = getFactionById(officer.factionId);
  const aptitude = getAptitudeById(officer.aptitudeId);
  const officerTypes = officer.officerTypeIds.map((officerTypeId) => getOfficerTypeById(officerTypeId));

  return (
    <Card>
      <CardContent>
        <Typography>{officer.name}</Typography>
        <Typography sx={{ color: faction?.color }}>{faction?.name}</Typography>
        <Typography sx={{ color: aptitude?.color }}>{aptitude?.name}</Typography>

        {officerTypes.map((officerType) => (
          <Typography key={officerType?.name} sx={{ color: officerType?.color }}>
            {officerType?.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

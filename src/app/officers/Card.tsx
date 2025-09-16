import Person4Icon from '@mui/icons-material/Person4';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { getAptitudeById, getFactionById, getOfficerTypeById } from '../data';
import { CardWrapper, OfficerAvatar, WrappedIconButton } from '../shared';
import type { OfficerType, OfficerTypeType } from '../types';
import type { OfficersRosterData } from './types';
import { FactionIcon } from './FactionIcon';
import { OfficerSkill } from './OfficerSkill';
import { OfficerSkills } from './OfficerSkills';
import { Aptitude } from './Aptitude';

export type OfficerCardProps = {
  officer: OfficerType;
  selectedFaction: string;
  selectedAptitude: string;
  selectedOfficerType: string;
  onRosterUpdated: (id: string) => void;
  roster: OfficersRosterData;
};

export const OfficerCard = ({
  officer,
  selectedFaction,
  selectedAptitude,
  selectedOfficerType,
  onRosterUpdated,
  roster,
}: OfficerCardProps) => {
  const faction = getFactionById(officer.factionId);
  const aptitude = getAptitudeById(officer.aptitudeId);
  const officerTypes: OfficerTypeType[] = officer.officerTypeIds.map<OfficerTypeType>((officerTypeId) =>
    getOfficerTypeById(officerTypeId)
  );

  const isVisible =
    (selectedFaction === '' || selectedFaction === officer.factionId) &&
    (selectedAptitude === '' || selectedAptitude === officer.aptitudeId) &&
    (selectedOfficerType === '' || officer.officerTypeIds.includes(selectedOfficerType));

  const inRoster = roster[officer.id];
  const rosterOpacity = inRoster ? 1 : 0.75;
  const opacity = isVisible ? rosterOpacity : 0.2;

  const rosterData = inRoster
    ? { label: 'Remove from roster', Icon: Person4Icon, onClick: () => onRosterUpdated(officer.id) }
    : { label: 'Add to roster', Icon: Person4OutlinedIcon, onClick: () => onRosterUpdated(officer.id) };

  return (
    <CardWrapper sx={{ backgroundColor: faction.color, opacity }}>
      <Grid container size={12} spacing={1}>
        <Grid size="auto">
          <OfficerAvatar officerId={officer.id} roster={roster} />
        </Grid>
        <Grid size="grow" container direction={'row'} spacing={0}>
          <Grid size={3}>
            <Box sx={{ height: { xs: '17px', sm: '25px' } }}>
              <FactionIcon faction={faction} />
            </Box>
          </Grid>
          <Grid size={4}>
            <Aptitude aptitude={aptitude} />
          </Grid>
          <Grid size={5} container spacing={0.7} sx={{ alignContent: 'center', justifyContent: 'flex-end' }}>
            <Box sx={{ height: { xs: '16px', sm: '20px', md: '24px' } }}>
              <OfficerSkills officerSkills={officerTypes} />
            </Box>
          </Grid>
          <Grid container size={12} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Grid size="grow">
              <Typography sx={{ fontSize: { xs: '12px', sm: '16px' } }}>{officer.name}</Typography>
            </Grid>
            <Grid size="auto">
              <WrappedIconButton
                label={rosterData.label}
                Icon={rosterData.Icon}
                withTooltip="bottom-start"
                small
                onClick={rosterData.onClick}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

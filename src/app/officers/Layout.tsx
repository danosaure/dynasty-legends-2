import Grid from '@mui/material/Grid';
import { useState } from 'react';

import { OfficersFactionSelector } from './FactionSelector';
import { getAptitudeById, getFactionById, getOfficerTypeById, OFFICERS } from '../data';
import { OfficerCard } from './Card';
import { OfficersAptitudeSelector } from './AptitudeSelector';
import { OfficersOfficerTypeSelector } from './OfficerTypeSelector';

export const OfficersLayout = () => {
  const [selectedFaction, setSelectedFaction] = useState<string>('');
  const [selectedAptitude, setSelectedAptitude] = useState<string>('');
  const [selectedOfficerType, setSelectedOfficerType] = useState<string>('');

  const factionSelectorColor = selectedFaction === '' ? 'inherit' : getFactionById(selectedFaction).color;
  const aptitudeSelectorColor = selectedAptitude === '' ? 'inherit' : getAptitudeById(selectedAptitude).color;
  const officerTypeSelectorColor = selectedOfficerType === '' ? 'inherit' : getOfficerTypeById(selectedOfficerType).color;

  return (
    <Grid container direction={'column'} spacing={2}>
      <Grid container>
        <Grid size={4} sx={{ backgroundColor: factionSelectorColor }}>
          <OfficersFactionSelector selected={selectedFaction} onSelect={setSelectedFaction} />
        </Grid>
        <Grid size={4} sx={{ backgroundColor: aptitudeSelectorColor }}>
          <OfficersAptitudeSelector selected={selectedAptitude} onSelect={setSelectedAptitude} />
        </Grid>
        <Grid size={4} sx={{ backgroundColor: officerTypeSelectorColor }}>
          <OfficersOfficerTypeSelector selected={selectedOfficerType} onSelect={setSelectedOfficerType} />
        </Grid>
      </Grid>
      <Grid container>
        {OFFICERS.map((officer) => (
          <Grid key={officer.id} size={3}>
            <OfficerCard
              officer={officer}
              selectedFaction={selectedFaction}
              selectedAptitude={selectedAptitude}
              selectedOfficerType={selectedOfficerType}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

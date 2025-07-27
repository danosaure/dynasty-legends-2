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
    <Grid container direction={'row'} spacing={2}>
      <Grid container size={{ xs: 2, md: 1 }} direction={'column'}>
        <Grid sx={{ backgroundColor: factionSelectorColor }}>
          <OfficersFactionSelector selected={selectedFaction} onSelect={setSelectedFaction} />
        </Grid>
        <Grid sx={{ backgroundColor: aptitudeSelectorColor }}>
          <OfficersAptitudeSelector selected={selectedAptitude} onSelect={setSelectedAptitude} />
        </Grid>
        <Grid sx={{ backgroundColor: officerTypeSelectorColor }}>
          <OfficersOfficerTypeSelector selected={selectedOfficerType} onSelect={setSelectedOfficerType} />
        </Grid>
      </Grid>
      <Grid container size={{ xs: 10, md: 11 }} spacing={1}>
        {OFFICERS.map((officer) => (
          <Grid key={officer.id} size={{ xs: 6, md: 3 }}>
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

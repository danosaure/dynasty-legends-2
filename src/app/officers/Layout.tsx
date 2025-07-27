import Grid from '@mui/material/Grid';
import { useState } from 'react';

import { OfficersFactionSelector } from './FactionSelector';
import { getAptitudeById, getFactionById, OFFICERS } from '../data';
import { OfficerCard } from './Card';
import { OfficersAptitudeSelector } from './AptitudeSelector';

export const OfficersLayout = () => {
  const [selectedFaction, setSelectedFaction] = useState<string>('');
  const [selectedAptitude, setSelectedAptitude] = useState<string>('');

  const factionSelectorColor = selectedFaction === '' ? 'inherit' : getFactionById(selectedFaction).color;
  const aptitudeSelectorColor = selectedAptitude === '' ? 'inherit' : getAptitudeById(selectedAptitude).color;

  return (
    <Grid container direction={'column'} spacing={2}>
      <Grid container>
        <Grid size={4} sx={{ backgroundColor: factionSelectorColor }}>
          <OfficersFactionSelector selected={selectedFaction} onSelect={setSelectedFaction} />
        </Grid>
        <Grid size={4} sx={{ backgroundColor: aptitudeSelectorColor }}>
          <OfficersAptitudeSelector selected={selectedAptitude} onSelect={setSelectedAptitude} />
        </Grid>
      </Grid>
      <Grid container>
        {OFFICERS.map((officer) => (
          <Grid key={officer.id} size={3}>
            <OfficerCard officer={officer} selectedFaction={selectedFaction} selectedAptitude={selectedAptitude} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

import Grid from '@mui/material/Grid';
import { useState } from 'react';

import { OfficersFactionSelector } from './FactionSelector';
import { OFFICERS } from '../data';
import { OfficerCard } from './Card';

export const OfficersLayout = () => {
  const [selectedFaction, setSelectedFaction] = useState<string>('');

  return (
    <Grid container direction={'column'} spacing={2}>
      <Grid container>
        <Grid size={4}>
          <OfficersFactionSelector selected={selectedFaction} onSelect={setSelectedFaction} />
        </Grid>
      </Grid>
      <Grid container>
        {OFFICERS.map((officer) => (
          <Grid key={officer.id} size={3}>
            <OfficerCard officer={officer} selectedFaction={selectedFaction} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

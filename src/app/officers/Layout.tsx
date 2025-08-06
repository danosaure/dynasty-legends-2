import { useState } from 'react';
import Grid from '@mui/material/Grid';

import { useAppContext } from '../Context';
import { getAptitudeById, getFactionById, getOfficerTypeById, OFFICERS } from '../data';
import type { OfficerType } from '../types';
import { OfficersAptitudeSelector } from './AptitudeSelector';
import { OfficerCard } from './Card';
import { OfficersFactionSelector } from './FactionSelector';
import { OfficersOfficerTypeSelector } from './OfficerTypeSelector';
import { saveOfficersUserData } from './persistence';
import type { OfficersRosterData } from './types';

export const OfficersLayout = () => {
  const { user } = useAppContext();

  user.officers ??= {} as OfficersRosterData;

  const [userOfficers, setUserOfficers] = useState(user.officers);

  const [selectedFaction, setSelectedFaction] = useState<string>('');
  const [selectedAptitude, setSelectedAptitude] = useState<string>('');
  const [selectedOfficerType, setSelectedOfficerType] = useState<string>('');

  const factionSelectorColor = selectedFaction === '' ? 'transparent' : getFactionById(selectedFaction).color;
  const aptitudeSelectorColor =
    selectedAptitude === '' ? 'transparent' : getAptitudeById(selectedAptitude).palette.background.default;
  const officerTypeSelectorColor = selectedOfficerType === '' ? 'transparent' : getOfficerTypeById(selectedOfficerType).color;

  const updateRoster = (officerId: string) => {
    const newUserOfficers = {
      ...userOfficers,
      [officerId]: !userOfficers[officerId],
    } as const;

    setUserOfficers(newUserOfficers);
    saveOfficersUserData(user.id, newUserOfficers);
  };

  return (
    <Grid container direction={'row'} spacing={2}>
      <Grid container size={{ xs: 2, md: 1 }} direction={'column'}>
        <Grid sx={{ borderRight: `5px solid ${factionSelectorColor}` }}>
          <OfficersFactionSelector selected={selectedFaction} onSelect={setSelectedFaction} />
        </Grid>
        <Grid sx={{ borderRight: `5px solid ${aptitudeSelectorColor}` }}>
          <OfficersAptitudeSelector selected={selectedAptitude} onSelect={setSelectedAptitude} />
        </Grid>
        <Grid sx={{ borderRight: `5px solid ${officerTypeSelectorColor}` }}>
          <OfficersOfficerTypeSelector selected={selectedOfficerType} onSelect={setSelectedOfficerType} />
        </Grid>
      </Grid>
      <Grid container size={{ xs: 10, md: 11 }} spacing={1}>
        {OFFICERS.map((officer: OfficerType) => (
          <Grid key={officer.id} size={{ xs: 6, md: 4 }}>
            <OfficerCard
              officer={officer}
              selectedFaction={selectedFaction}
              selectedAptitude={selectedAptitude}
              selectedOfficerType={selectedOfficerType}
              onRosterUpdated={updateRoster}
              roster={userOfficers}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

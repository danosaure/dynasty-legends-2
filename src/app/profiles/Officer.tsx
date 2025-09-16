import Alert from '@mui/material/Alert';
import { getAptitudeById, getFactionById, getOfficerById, getOfficerTypeById } from '../data';
import Grid from '@mui/material/Grid';
import { useAppContext } from '../Context';
import { useMemo } from 'react';
import { OfficerAvatar } from '../shared';
import { OfficerBonds } from './OfficerBonds';
import { OfficerMounts } from './OfficerMounts';
import { FactionIcon } from '../officers/FactionIcon';
import Box from '@mui/material/Box';
import type { OfficerTypeType } from '../types';
import { OfficerSkills } from '../officers/OfficerSkills';
import Typography from '@mui/material/Typography';
import { Aptitude } from '../officers/Aptitude';

export type OfficerProps = {
  id: string;
};

export const Officer = ({ id }: OfficerProps) => {
  const { user } = useAppContext();

  const roster = useMemo(() => user.officers ?? {}, [user.officers]);

  const officer = getOfficerById(id);

  if (!officer) {
    return <Alert severity="error">Invalid officer.</Alert>;
  }

  const aptitude = getAptitudeById(officer.aptitudeId);

  const officerTypes: OfficerTypeType[] = officer.officerTypeIds.map<OfficerTypeType>((officerTypeId) =>
    getOfficerTypeById(officerTypeId)
  );

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
      <Grid container>
        <Grid>
          <OfficerAvatar officerId={id} roster={roster} />
        </Grid>
        <Grid>
          <Typography>{officer.name}</Typography>
          <Aptitude aptitude={aptitude} />
        </Grid>
        <Grid>
          <Box sx={{ height: { xs: '25px' } }}>
            <FactionIcon faction={getFactionById(officer.factionId)} />
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ height: '22px' }}>
            <OfficerSkills officerSkills={officerTypes} />
          </Box>
        </Grid>
      </Grid>
      <OfficerBonds id={id} roster={roster} />
      <OfficerMounts />
    </Grid>
  );
};

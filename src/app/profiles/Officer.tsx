import Alert from '@mui/material/Alert';
import { getAptitudeById, getFactionById, getOfficerById, getOfficerTypeById } from '../data';
import Grid from '@mui/material/Grid';
import { useAppContext } from '../Context';
import { useEffect, useState } from 'react';
import { OfficerAvatar } from '../shared';
import { OfficerBonds } from './OfficerBonds';
import { OfficerMounts } from './OfficerMounts';
import { FactionIcon } from '../officers/FactionIcon';
import Box from '@mui/material/Box';
import type { OfficerTypeType } from '../types';
import { OfficerSkills } from '../officers/OfficerSkills';
import Typography from '@mui/material/Typography';
import { Aptitude } from './Aptitude';
import type { OfficersRosterData } from '../officers/types';
import { InRoster } from './InRoster';
import type { MountsRosterData } from './MountsRosterData';
import { updateOfficerUserData } from './persistence';

export type OfficerProps = {
  id: string;
  inCard?: boolean;
};

export const Officer = ({ id, inCard }: OfficerProps) => {
  const { user } = useAppContext();
  const [roster, setRoster] = useState<OfficersRosterData>(user.officers ?? {});
  const [mountsRoster, setMountsRoster] = useState<MountsRosterData>(user.mounts ?? {});

  useEffect(() => {
    setRoster(user.officers ?? {});
    setMountsRoster(user.mounts ?? {});
  }, [user]);

  const officer = getOfficerById(id);
  const faction = getFactionById(officer.factionId);

  if (!officer) {
    return <Alert severity="error">Invalid officer.</Alert>;
  }

  const aptitude = getAptitudeById(officer.aptitudeId);

  const toggleOfficer = () => {
    updateOfficerUserData(user.id, id);
    setRoster({
      ...roster,
      [id]: !roster[id],
    });
  };

  const inRoster = roster[officer.id];

  const officerTypes: OfficerTypeType[] = officer.officerTypeIds.map<OfficerTypeType>((officerTypeId) =>
    getOfficerTypeById(officerTypeId)
  );

  return (
    <Grid container size={12} spacing={1}>
      <Grid size="auto">
        <OfficerAvatar officerId={id} roster={roster} small={inCard} />
      </Grid>
      <Grid container size="grow" spacing={0}>
        <Grid container size={12} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Grid size="grow">
            <Typography sx={{ fontSize: { xs: '12px', sm: '16px' } }}>{officer.name}</Typography>
          </Grid>
          <Grid size="auto">
            <InRoster inRoster={inRoster} toggle={toggleOfficer} />
          </Grid>
        </Grid>
        <Grid container size={12}>
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
        </Grid>
      </Grid>
      {inCard ? null : (
        <>
          <OfficerBonds id={id} roster={roster} />
          <OfficerMounts id={id} roster={mountsRoster} />
        </>
      )}
    </Grid>
  );
};

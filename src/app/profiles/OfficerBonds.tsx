import Grid from '@mui/material/Grid';
import { OFFICER_BONDS } from '../data';
import type { OfficersRosterData } from '../officers/types';
import Typography from '@mui/material/Typography';
import { OfficerBond } from './OfficerBond';

export type OfficerBondsProps = {
  id: string;
  roster: OfficersRosterData;
};

type BondData = {
  officerId: string;
  bondOfficerId: string;
  name: string;
};

export const OfficerBonds = ({ id, roster }: OfficerBondsProps) => {
  const bonds = OFFICER_BONDS.filter((bond) => bond.officerId === id || bond.bondOfficerId === id);

  if (!bonds.length) {
    return null;
  }

  const officerBondsWith: BondData[] = bonds
    .filter((bond) => bond.officerId === id)
    .map<BondData>((bond) => ({ officerId: id, bondOfficerId: bond.bondOfficerId, name: bond.name }));
  const officerBoundedBy: BondData[] = bonds
    .filter((bond) => bond.bondOfficerId === id)
    .map<BondData>((bond) => ({ officerId: bond.officerId, bondOfficerId: id, name: bond.name }));

  const allBonds: BondData[] = officerBondsWith.concat(officerBoundedBy);

  return (
    <Grid container size={12} direction="row">
      {allBonds.length ? (
        <Grid container size={12} direction="column">
          <Typography>Bond</Typography>
          <Grid container size={12} direction="column" spacing={1}>
            {allBonds.map((bond) => (
              <OfficerBond
                key={`${bond.officerId}--${bond.bondOfficerId}`}
                officerId={bond.officerId}
                bondOfficerId={bond.bondOfficerId}
                name={bond.name}
                roster={roster}
              />
            ))}
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ItemAvatar } from '../shared';
import { getWeaponPolishByWeaponShardId, getWeaponShardByOfficerId } from '../data';

export type OfficerWeaponProps = {
  officerId: string;
};

export const OfficerWeapon = ({ officerId }: OfficerWeaponProps) => {
  const weaponShard = getWeaponShardByOfficerId(officerId);
  const weaponPolish = getWeaponPolishByWeaponShardId(weaponShard.id);

  return (
    <Grid container size={12} direction="column">
      <Typography>Weapon</Typography>
      <Grid container direction="row" spacing={1}>
        <ItemAvatar item={weaponShard} small />
        <ItemAvatar item={weaponPolish} small />
      </Grid>
    </Grid>
  );
};

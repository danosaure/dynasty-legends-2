import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongBandit } from './Bandit';
import type { HanzhongBanditAttackType } from '../types';

export const Bandits = () => {
  const { hanzhong } = useHanzhongContext();

  const grid = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const attacks = [1, 2].map((attack) => {
      const bandit = hanzhong.bandits.attacks.find((anAttack) => anAttack.day === day && anAttack.attack === attack);
      return bandit;
    });

    return { day, attacks };
  });

  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Bandits
      </Typography>

      <Grid container size={{ xs: 12 }} direction="column">
        {grid.map((dayAttacks) => (
          <Grid key={`bandits--day-${dayAttacks.day}`} container sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 2 }}>Day {dayAttacks.day}</Grid>
            {dayAttacks.attacks.map((anAttack) => (
              <Grid size={{ xs: 2 }} key={`bandits--day-${dayAttacks.day}--attack-${anAttack?.attack}`}>
                <HanzhongBandit attack={anAttack as HanzhongBanditAttackType} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

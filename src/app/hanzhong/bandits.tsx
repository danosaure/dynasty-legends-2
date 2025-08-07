import Grid from '@mui/material/Grid';

import { TitleTypographyWrapper } from '../shared';

import { HanzhongBandit } from './Bandit';
import { HANZHONG_BANDITS } from './data';
import type { HanzhongBanditAttackType } from './types';

export const HanzhongBandits = () => {
  const grid = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const attacks = [1, 2].map((attack) => {
      const bandit = HANZHONG_BANDITS.attacks.find(
        (anAttack: HanzhongBanditAttackType) => anAttack.day === day && anAttack.attack === attack
      );
      return bandit;
    });

    return { day, attacks };
  });

  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      <TitleTypographyWrapper variant="TITLE">Bandits</TitleTypographyWrapper>

      <Grid container size={{ xs: 12 }} direction="column" spacing={2}>
        {grid.map((dayAttacks) => (
          <Grid
            container
            key={`bandits--day-${dayAttacks.day}`}
            sx={{ alignItems: 'center', justifyContent: 'center' }}
            spacing={4}
          >
            <Grid size="auto">Day {dayAttacks.day}</Grid>
            {dayAttacks.attacks.map((anAttack) => (
              <Grid size="auto" key={`bandits--day-${dayAttacks.day}--attack-${anAttack?.attack}`}>
                <HanzhongBandit attack={anAttack as HanzhongBanditAttackType} />
              </Grid>
            ))}
            <Grid size="grow" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

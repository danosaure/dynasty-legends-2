import Grid from '@mui/material/Grid';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongBandit } from './Bandit';
import type { HanzhongBanditAttackType } from '../types';
import { TitleTypographyWrapper } from '../../components';

export const HanzhongBandits = () => {
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
      <TitleTypographyWrapper variant="TITLE">Bandits</TitleTypographyWrapper>

      <Grid container size={{ xs: 12 }} direction="column">
        {grid.map((dayAttacks) => (
          <Grid key={`bandits--day-${dayAttacks.day}`} container sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 4, md: 2 }}>Day {dayAttacks.day}</Grid>
            {dayAttacks.attacks.map((anAttack) => (
              <Grid size={{ xs: 4, md: 2 }} key={`bandits--day-${dayAttacks.day}--attack-${anAttack?.attack}`}>
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

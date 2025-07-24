import Typography from '@mui/material/Typography';
import type { HanzhongBonusType } from '../../../types';
import Grid from '@mui/material/Grid';
import { LABEL_BY_BONUS_ATTRIBUTE } from '../../constants';
import { calculateTacticalPoints } from '../../../utils/calculate-tactical-points';
import { HanzhongTechsTechInfoLevelInfoItem } from './LevelInfoItem';

export type HanzhongTechsTechInfoLevelBonusesProps = {
  bonuses: HanzhongBonusType;
};

export const HanzhongTechsTechInfoLevelBonuses = ({ bonuses }: HanzhongTechsTechInfoLevelBonusesProps) => {
  if (bonuses.description) {
    return <Typography sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>{bonuses.description}</Typography>;
  }

  const bonusesWithoutDescription: Record<string, number> = bonuses as Omit<HanzhongBonusType, 'description'>;

  return (
    <Grid container size={12}>
      {['atk', 'def', 'hp', 'woodRate', 'grainsRate', 'ironRate', 'territoryCap'].map((attr) => {
        if (!bonusesWithoutDescription[attr]) {
          return null;
        }

        return (
          <HanzhongTechsTechInfoLevelInfoItem
            key={attr}
            label={LABEL_BY_BONUS_ATTRIBUTE[attr]}
            value={bonusesWithoutDescription[attr]}
          />
        );
      })}

      {bonusesWithoutDescription.atk || bonusesWithoutDescription.def || bonusesWithoutDescription.hp ? (
        <HanzhongTechsTechInfoLevelInfoItem label="Tactical Points" value={calculateTacticalPoints(bonuses)} bold />
      ) : null}
    </Grid>
  );
};

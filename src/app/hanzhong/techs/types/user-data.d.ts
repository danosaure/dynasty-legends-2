import type { sanitizeId } from '../../../../utils';

export type HanzhongTechsUserData = {
  [sanitizeId('Attack Training I')]: number;
  [sanitizeId('Defense Training I')]: number;
  [sanitizeId('Tenacity Training I')]: number;
  [sanitizeId('Free Paths')]: number;

  [sanitizeId('Lumber Mill')]: number;
  [sanitizeId('Granary')]: number;
  [sanitizeId('Iron Foundry')]: number;
  [sanitizeId('Mighty Generals')]: number;

  [sanitizeId('Diligent Warrior I')]: number;
  [sanitizeId('Territory Expansion')]: number;

  [sanitizeId('Attack Training II')]: number;
  [sanitizeId('Defense Training II')]: number;
  [sanitizeId('Tenacity Training II')]: number;

  [sanitizeId('Overall Development')]: number;
  [sanitizeId('United Strength')]: number;
  [sanitizeId('Formation Expansion')]: number;

  [sanitizeId('Special Training - Vanguard Camp')]: number;
  [sanitizeId('Special Training - Valiant Cavalry')]: number;
  [sanitizeId('Special Training - Royal Guards')]: number;
  [sanitizeId('Rehabilitation')]: number;

  [sanitizeId('Diligent Warrior III')]: number;
};

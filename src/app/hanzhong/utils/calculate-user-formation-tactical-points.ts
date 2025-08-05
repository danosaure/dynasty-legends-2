import { getNumberValue } from '../../utils';
import type { StructuredFormationsFormation } from '../formations/structured-formations';
import type { HanzhongFormationsUserData } from '../formations/types';

export const calculateUserFormationTacticalPoints = (
  formationsUserData: HanzhongFormationsUserData,
  formation: StructuredFormationsFormation
): number =>
  [
    formation.team1.chief.tacticalPoints,
    formation.team1.lieutenant.tacticalPoints,
    formation.team2.chief.tacticalPoints,
    formation.team2.lieutenant.tacticalPoints,
    formation.team3.chief.tacticalPoints,
    formation.team3.lieutenant.tacticalPoints,
  ].reduce<number>((total, key) => total + getNumberValue(formationsUserData, key), 0);

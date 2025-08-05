import type { BaseIDType } from '../../../types';
import type { HanzhongFormationTeamType } from './team';

export type HanzhongFormationType = BaseIDType & {
  techId: string;
  name: string;
  teams: HanzhongFormationTeamType[];
};

import type { MigrationType } from '../../persistence-lib/types';

import { migrate as migrate001 } from './001-initial-structure';

export const migrations: MigrationType[] = [migrate001];

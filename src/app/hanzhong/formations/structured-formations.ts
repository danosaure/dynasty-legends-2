import { sanitizeId } from '../../../utils';
import { HANZHONG_TECH_IDS } from '../constants';

export type StructuredFormationsOfficer = {
  tacticalPoints: string;
  officer: string;
};

export type StructuredFormationsTeam = {
  chief: StructuredFormationsOfficer;
  lieutenant: StructuredFormationsOfficer;
};

export type StructuredFormationsFormation = {
  id: string;
  name: string;
  techId: string;
  team1: StructuredFormationsTeam;
  team2: StructuredFormationsTeam;
  team3: StructuredFormationsTeam;
};

export type StructuredFormations = {
  vanguardCamp: StructuredFormationsFormation;
  valiantCavalry: StructuredFormationsFormation;
  royalGuards: StructuredFormationsFormation;
};

export const STRUCTURED_FORMATIONS: StructuredFormations = {
  vanguardCamp: {
    id: sanitizeId('Vanguard Camp'),
    name: 'Vanguard Camp',
    techId: HANZHONG_TECH_IDS.SPECIAL_TRAINING__VANGUARD_CAMP,
    team1: {
      chief: {
        tacticalPoints: sanitizeId('Vanguard Camp - Team 1 - Chief - Tactical points'),
        officer: sanitizeId('Vanguard Camp - Team 1 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Vanguard Camp - Team 1 - Lieutenant - Tactical points'),
        officer: sanitizeId('Vanguard Camp - Team 1 - Lieutenant - Officer'),
      },
    },
    team2: {
      chief: {
        tacticalPoints: sanitizeId('Vanguard Camp - Team 2 - Chief - Tactical points'),
        officer: sanitizeId('Vanguard Camp - Team 2 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Vanguard Camp - Team 2 - Lieutenant - Tactical points'),
        officer: sanitizeId('Vanguard Camp - Team 2 - Lieutenant - Officer'),
      },
    },
    team3: {
      chief: {
        tacticalPoints: sanitizeId('Vanguard Camp - Team 3 - Chief - Tactical points'),
        officer: sanitizeId('Vanguard Camp - Team 3 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Vanguard Camp - Team 3 - Lieutenant - Tactical points'),
        officer: sanitizeId('Vanguard Camp - Team 3 - Lieutenant - Officer'),
      },
    },
  },

  valiantCavalry: {
    id: sanitizeId('Valiant Cavalry'),
    name: 'Valiant Cavalry',
    techId: HANZHONG_TECH_IDS.SPECIAL_TRAINING__VALIANT_CAVALRY,
    team1: {
      chief: {
        tacticalPoints: sanitizeId('Valiant Cavalry - Team 1 - Chief - Tactical points'),
        officer: sanitizeId('Valiant Cavalry - Team 1 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Valiant Cavalry - Team 1 - Lieutenant - Tactical points'),
        officer: sanitizeId('Valiant Cavalry - Team 1 - Lieutenant - Officer'),
      },
    },
    team2: {
      chief: {
        tacticalPoints: sanitizeId('Valiant Cavalry - Team 2 - Chief - Tactical points'),
        officer: sanitizeId('Valiant Cavalry - Team 2 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Valiant Cavalry - Team 2 - Lieutenant - Tactical points'),
        officer: sanitizeId('Valiant Cavalry - Team 2 - Lieutenant - Officer'),
      },
    },
    team3: {
      chief: {
        tacticalPoints: sanitizeId('Valiant Cavalry - Team 3 - Chief - Tactical points'),
        officer: sanitizeId('Valiant Cavalry - Team 3 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Valiant Cavalry - Team 3 - Lieutenant - Tactical points'),
        officer: sanitizeId('Valiant Cavalry - Team 3 - Lieutenant - Officer'),
      },
    },
  },

  royalGuards: {
    id: sanitizeId('Royal Guards'),
    name: 'Royal Guards',
    techId: HANZHONG_TECH_IDS.SPECIAL_TRAINING__ROYAL_GUARDS,
    team1: {
      chief: {
        tacticalPoints: sanitizeId('Royal Guards - Team 1 - Chief - Tactical points'),
        officer: sanitizeId('Royal Guards - Team 1 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Royal Guards - Team 1 - Lieutenant - Tactical points'),
        officer: sanitizeId('Royal Guards - Team 1 - Lieutenant - Officer'),
      },
    },
    team2: {
      chief: {
        tacticalPoints: sanitizeId('Royal Guards - Team 2 - Chief - Tactical points'),
        officer: sanitizeId('Royal Guards - Team 2 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Royal Guards - Team 2 - Lieutenant - Tactical points'),
        officer: sanitizeId('Royal Guards - Team 2 - Lieutenant - Officer'),
      },
    },
    team3: {
      chief: {
        tacticalPoints: sanitizeId('Royal Guards - Team 3 - Chief - Tactical points'),
        officer: sanitizeId('Royal Guards - Team 3 - Chief - Officer'),
      },
      lieutenant: {
        tacticalPoints: sanitizeId('Royal Guards - Team 3 - Lieutenant - Tactical points'),
        officer: sanitizeId('Royal Guards - Team 3 - Lieutenant - Officer'),
      },
    },
  },
} as const;

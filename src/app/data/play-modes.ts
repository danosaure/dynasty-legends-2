import { sanitizeId } from '../../utils';
import type { BaseIDType, IconType } from '../types';

export type PlayModeType = BaseIDType & {
  name: string;
  description: string;
  avatar: IconType;
};

export const PLAY_MODES: PlayModeType[] = [
  ...[
    ['Defense', 'Valid in your faction map. Able to attack players from other factions.'],
    ['Offense', 'Valid while entering other faction maps. Unable to initiate the attack against other factions.'],
    ['Peace', 'Valid in the non-battle time of the neutral map. Unable to attack other players.'],
    ['War', 'Valid in the battle time of the neutral map. Able to attack players that are not from your faction.'],
  ].map<PlayModeType>((data) => {
    const [name, description] = data;

    return {
      id: `play-modes--${sanitizeId(name)}`,
      name,
      description,
      avatar: {
        path: `data/play-modes/${sanitizeId(name)}.png`,
      },
    };
  }),
];

export const getPlayModeByName = (name: string): PlayModeType => {
  const playMode = PLAY_MODES.find((playMode) => playMode.name === name);
  if (!playMode) {
    throw new Error(`Invalid play mode name="${name}".`);
  }
  return playMode;
};

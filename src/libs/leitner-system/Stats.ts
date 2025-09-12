import type { LeitnerBox } from './Box';
import type { LeitnerBoxes } from './Boxes';
import type { LeitnerSessionId } from './SessionId';

export type LeitnerStats = {
  sessionId: LeitnerSessionId;
  boxes: LeitnerBoxes;
  retiredDeck: LeitnerBox;
  correct: number;
  currentDeckSize: number;
};

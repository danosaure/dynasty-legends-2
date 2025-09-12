import type { LeitnerSessionId } from './SessionId';

export type CurrentDeckItem = {
  id: string;

  /**
   * Will be `-1` if not initially in a box, or the box index.
   */
  boxId: -1 | LeitnerSessionId;
};

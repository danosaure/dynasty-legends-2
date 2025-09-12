import type { LeitnerBox } from './Box';
import type { LeitnerBoxes } from './Boxes';

export type LeitnerStats = {
  /** Session ID. */
  sessionId: number;

  /** Leitner session boxes. */
  boxes: LeitnerBoxes;

  /** Box containing IDs of questions completed. */
  retiredDeck: LeitnerBox;

  /** Number of correct answers in the current session. */
  correct: number;

  /** Number of questions in the current deck. */
  currentDeckSize: number;

  /** Index of the question in the current session. */
  questionIndex: number;

  /** Number of questions answered in the current session. */
  answered: number;

  /** Percent of correct answers in the current session. */
  percent: number;

  /** When all questions from the current session have been answered. */
  sessionCompleted: boolean;

  /** When all the questions have been transferred to the retired deck. */
  allCompleted: boolean;
};

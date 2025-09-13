import type { LeitnerBox } from './Box';
import { LEITNER_BOX_NAMES } from './box-names';
import { EMPTY_LEITNER_BOXES, type LeitnerBoxes } from './Boxes';
import type { CurrentDeckItem } from './CurrentDeckItem';
import { defineCurrentDeck } from './define-current-deck';
import type { LeitnerMustHaveId } from './MustHaveId';
import type { LeitnerSessionId } from './SessionId';
import type { LeitnerStats } from './Stats';

export class LeitnerSystem<T extends LeitnerMustHaveId> {
  private readonly data: T[];
  private readonly userSessionId: number;
  private readonly sessionId: LeitnerSessionId;
  private readonly currentDeck!: CurrentDeckItem[];
  private readonly retiredDeck: LeitnerBox;

  private boxes: LeitnerBoxes;
  private correct: number = 0;
  private questionIndex: number = 0;
  private answered: number = 0;

  constructor(data: T[], sessionId: number = 0, boxes: LeitnerBoxes = EMPTY_LEITNER_BOXES, retiredDeck: LeitnerBox = []) {
    this.data = data;
    this.userSessionId = sessionId;
    this.sessionId = (sessionId % 10) as LeitnerSessionId;
    this.boxes = boxes;
    this.currentDeck = defineCurrentDeck<T>(data, this.sessionId, boxes, retiredDeck);
    this.retiredDeck = retiredDeck;
  }

  /**
   *
   * @returns The current item or `undefined` if no more is available.
   */
  *questions(): Generator<T> {
    for (const currentDeckItem of this.currentDeck) {
      const currentItem = this.data.find((item) => item.id === currentDeckItem.id);

      if (!currentItem) {
        return; // Just end the questionnaire.
      }

      this.questionIndex++;
      yield currentItem;
    }
  }

  /**
   * Get the number of items in the current deck.
   *
   * @returns Number of items in the current deck.
   */
  count(): number {
    return this.currentDeck.length;
  }

  rebox(id: string, correct: boolean) {
    this.answered++;

    const currentDeckItem = this.currentDeck.find((item) => item.id === id);

    if (currentDeckItem) {
      if (correct) {
        this.correct++;
        if (currentDeckItem.boxId === -1) {
          this.boxes[this.sessionId].push(id);
        } else if (LEITNER_BOX_NAMES[currentDeckItem.boxId][3] === String(this.sessionId)) {
          // If a reviewed card is successful and the last number of its box
          // matches the current session number, then that card moves to the
          // Retired Deck.
          this.boxes[currentDeckItem.boxId] = this.boxes[currentDeckItem.boxId].filter((itemId) => itemId !== id);
          this.retiredDeck.push(id);
        }
      } else if (currentDeckItem.boxId !== -1) {
        // If a reviewed card isn't successful, it moves back to Deck Current.
        this.boxes[currentDeckItem.boxId] = this.boxes[currentDeckItem.boxId].filter((itemId) => itemId !== currentDeckItem.id);
      }
    }
  }

  stats(): LeitnerStats {
    return {
      sessionId: this.userSessionId,
      boxes: this.boxes,
      retiredDeck: this.retiredDeck,
      correct: this.correct,
      answered: this.answered,
      currentDeckSize: this.currentDeck.length,
      questionIndex: this.questionIndex,
      percent: this.answered ? Math.floor((this.correct / this.answered) * 100) : 0,
      sessionCompleted: this.answered === this.currentDeck.length,
      allCompleted: this.retiredDeck.length === this.data.length,
    };
  }
}

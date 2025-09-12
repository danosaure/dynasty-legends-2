import type { LeitnerBox } from './Box';
import { LEITNER_BOX_NAMES } from './box-names';
import { EMPTY_BOXES, type LeitnerBoxes } from './Boxes';
import { defineCurrentDeck } from './define-current-deck';
import { LeitnerSystemError } from './Error';
import type { LeitnerMustHaveId } from './MustHaveId';
import type { LeitnerSessionId } from './SessionId';
import type { LeitnerStats } from './Stats';

export class LeitnerSystem<T extends LeitnerMustHaveId> {
  private readonly data: T[];
  private readonly sessionId: LeitnerSessionId;
  private readonly currentDeck!: LeitnerBox;
  private readonly retiredDeck: LeitnerBox;

  private boxes: LeitnerBoxes;
  private correct: number = 0;

  constructor(data: T[], sessionId: LeitnerSessionId = 0, boxes: LeitnerBoxes = EMPTY_BOXES, retiredDeck: LeitnerBox = []) {
    this.data = data;
    this.sessionId = sessionId;
    this.boxes = boxes;
    this.currentDeck = defineCurrentDeck<T>(data, sessionId, boxes);
    this.retiredDeck = retiredDeck;
  }

  /**
   *
   * @returns The current item or `undefined` if no more is available.
   */
  *next(): Generator<T | undefined> {
    for (const id of this.currentDeck) {
      const currentItem = this.data.find((item) => item.id === id);

      if (!currentItem) {
        throw new LeitnerSystemError(`Invalid item id="${id}" in current deck.`);
      }

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
    if (correct) {
      this.correct++;
      this.boxes = this.boxes.map((box, index) => {
        if (box.includes(id)) {
          // Is the box ending with the session number?
          if (LEITNER_BOX_NAMES[index].endsWith(String(this.sessionId))) {
            this.retiredDeck.push(id);
            return box.filter((itemId) => itemId !== id);
          } else if (index === (this.sessionId as number)) {
            // Add to the session box.
            return box.concat([id]);
          }
        }
        return box;
      }) as LeitnerBoxes;
    }
  }

  stats(): LeitnerStats {
    return {
      sessionId: this.sessionId,
      boxes: this.boxes,
      retiredDeck: this.retiredDeck,
      correct: this.correct,
      currentDeckSize: this.currentDeck.length,
    };
  }
}
